const fs = require('fs')
const axios = require('axios');
const moment = require('moment')
     
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
// inspired by fast async await example - everything in parallel when possible - 
// do add error handling please


async function generateStore() { 
      const startTime= moment();
      console.log('started', startTime.format('hh:mm:ss'));
      const config = loadConfig();
      const baseURL=`${config.options.repository}/tradition/${config.options.tradition_id}`;
      const auth = config.auth;
      const outdir = "public/data";

      await fetchData(baseURL,auth);
      const endTime= moment();
      console.log('Done!', endTime.format('hh:mm:ss'))

      function loadConfig() {
            const configJSON = fs.readFileSync(`script/lemma-html-config.json`, "utf8");
            return JSON.parse(configJSON);
      }

      async function fetchData(baseURL, auth){
            const sections = getSections();
            const witnesses =  getWitnesses();
            let lists = await Promise.all([sections, witnesses])
            writeWitnessList(lists[1]);
            let sectionStore= await getSectionStore(lists[0], lists[1]);
      }

      async function getSections(){
            const response =   await axios.get(`${baseURL}/sections`, {auth} ) 
            return response.data;
      }

      async function getWitnesses(){
            const response =   await axios.get(`${baseURL}/witnesses`, {auth} ) 
            return response.data;
      }

       async function getSectionStore(sections, witnesses){
            const sectionPromises = [];
            const validSections = [];
            sections.forEach( section =>{
                  sectionData = getSectionData(section.id, witnesses, validSections);
                  sectionPromises.push(sectionData);
            });
            sectionStore = await Promise.all(sectionPromises);
            writeSectionFile( validSections);
      }

      async function getSectionData( sectionId, witnesses, validSections ){
            let lemmaTextFinal = await getLemmaText(sectionId);
           
            if( lemmaTextFinal.text ) {
                 
                  let allReadings = new Promise( (resolve )=>{
                        getReadings(sectionId)
                        .then( readings=>{
                              writeLemmaFile( readings, sectionId); 
                              writeWitnessFiles(readings, witnesses, sectionId);
                                    getTranslation(sectionId)
                                    .then( translation=>{
                                          writeTranslationFile(translation,sectionId, readings);
                                          resolve();
                                    });
                        });

                  });

                  let titleArray = new Promise( (resolve) =>{ 
                        getTitle(sectionId)
                        .then( titles =>{
                              const englishTitle = titles[0].properties.language === "en" ? titles[0].properties.text : titles[1].properties.text;
                              const armenianTitle= titles[1].properties.language === "hy" ? titles[1].properties.text : titles[0].properties.text;

                               let validSection = {
                                     sectionId: sectionId,
                                     englishTitle: englishTitle,
                                     armenianTitle: armenianTitle
                               }
                              validSections.push(validSection);
                              resolve();
                        });

                  });

                  let personArray = new Promise( resolve =>{ 
                        getPersons(sectionId)
                        .then( persons =>{
                              if(persons) 
                                    writeAnnotationList(persons, sectionId, 'persons')
                              resolve();
                        })
                  });

                  let placeArray = new Promise( resolve =>{ 
                        getPlaces(sectionId)
                        .then( places =>{
                              if(places) 
                                    writeAnnotationList(places,sectionId, 'places')
                              resolve();
                        })
                  });

                  let dateArray = new Promise( resolve =>{ 
                        getDates(sectionId)
                        .then( dates =>{
                              if(dates) 
                                    writeAnnotationList(dates, sectionId, 'dates')
                              resolve();
                        })
                  });

                
                 return data =  await Promise.all( [allReadings,titleArray,personArray,placeArray] )
                 // etc for person place and date - although this will just be used for text highlights
            }
      }

      async function getLemmaText(sectionId){
            const url = `${baseURL}/section/${sectionId}/lemmatext`;
            const response = await axios.get(url, { auth, params: {'final': 'true'} });
            return response.data;
      }

      async function getReadings(sectionId){
            const sectionURL = `${baseURL}/section/${sectionId}`
            const response = await axios.get(`${sectionURL}/readings`, {auth});
            return response.data;
      }

      async function getTranslation(sectionId){
            const sectionURL = `${baseURL}/section/${sectionId}`;
            const response = await axios.get( `${sectionURL}/annotations`, {auth, params: {label: 'TRANSLATION'}})
            return response.data;
      }

      async function getTitle(sectionId){
            const sectionURL = `${baseURL}/section/${sectionId}`;
            const response = await axios.get( `${sectionURL}/annotations`, {auth, params: {label: 'TITLE'}})
            return response.data
      }

      async function getPersons( sectionId ){
            const annotationURL = `${baseURL}/section/${sectionId}/annotations`;
            try{
                  const response = await axios.get( `${annotationURL}`, {auth, params: {label: 'PERSONREF'}})
                  return response.data;
            }catch( error){
                  console.log(`no person refs for section ${sectionId} `);
                  return null
            }
           
      }

      async function getPlaces(sectionId){
            const annotationURL = `${baseURL}/section/${sectionId}/annotations`;
            try {
                  const response = await axios.get( `${annotationURL}`, {auth, params: {label: 'PLACEREF'}})
                  return response.data;
            }catch( error ) {
                  console.log(`no place refs for section ${sectionId} `);
                  return null
            }
      }

      async function getDates(sectionId){
            const annotationURL = `${baseURL}/section/${sectionId}/annotations`;
            const response = await axios.get( `${annotationURL}`, {auth, params: {label: 'DATEREF'}})
            return response.data;
      }

      function readingToHTML( reading ){
            let textElements = [] ;
            if( reading.length === 0 )
            return;
        
            for (let i=0; i< reading.length; i++ ) {
                  let entry = reading[i];
                  const text = entry.normal_form ? entry.normal_form : entry.text
                  if (i > 0 && !reading[i-1].join_next && ! entry.join_prior) {
                        textElements.push(' ')
                  }
                  textElements.push( `<span id='text-${entry.id}' key=${entry.id}>${text}</span>`)
                
            }
            return  `${textElements.join('')}`
      }

      function translationToHTML( translation, sectionId , reading){
            let textElements = [] ;
            if( translation.length === 0 )
            return;

            let translationHash = {};
            for (const entry of translation ) {
                  const text = entry.properties.text;
                  const beginTextNode = entry.links[0].type==="BEGIN" ? entry.links[0].target:entry.links[1].target;
                  const endTextNode = entry.links[0].type==="END" ? entry.links[0].target:entry.links[1].target;
                  const textElement = `<span id='text-${beginTextNode}' key=${endTextNode}>${text}</span>`
                  translationHash[beginTextNode] = textElement;
            }

            reading.sort( (a,b)=>{ return a.rank - b.rank})
            reading.forEach( wordNode => {
              
                  if(translationHash[wordNode.id] ){
                      //  console.log(`section:${wordNode.section} nodeid: ${wordNode.id} node rank: ${wordNode.rank}`)
                        textElements.push(translationHash[wordNode.id])
                  }
                 
            })

            return  `${textElements.join(' ')}`
      }

      function writeLemmaFile(readings,sectionId){
            const sectiondir = `${outdir}/${sectionId}`;
            const lemmaFilePath = `${sectiondir}/lemma.html`
            let rawLemma = parseWitnessReading("Lemma text", readings);
            let htmlLemma = readingToHTML(rawLemma.readings);
            makeDirectory(sectiondir)
            writeFile(lemmaFilePath,htmlLemma)  
      }

      function writeWitnessFiles(readings, witnesses, sectionId){
            const sectiondir = `${outdir}/${sectionId}`;
            witnesses.forEach( witness=>{
                  const witnessFilePath = `${sectiondir}/${witness.sigil}.html`;
                  let witnessData = parseWitnessReading(witness.sigil, readings);
                  let htmlWitness = readingToHTML(witnessData.readings);
                  if(htmlWitness){
                        makeDirectory(sectiondir);
                        writeFile(witnessFilePath,htmlWitness)
                  }
            })
      }

      function writeTranslationFile( translation,sectionId, readings){
            if ( ! translation.length > 0 )
                  return;
            const sectiondir = `${outdir}/${sectionId}`;
            const translationFilePath = `${sectiondir}/en.html`;
            const translationHTML = translationToHTML(translation, sectionId, readings)
            makeDirectory(sectiondir);
            writeFile(translationFilePath, translationHTML)
      };
     
      function parseWitnessReading(sigil, readings) {
            const filterCondition = sigil === 'Lemma text'
                  ? (r) => r.is_lemma && !r.is_start && !r.is_end
                  : (r) => r.witnesses.includes(sigil) && !r.is_start && !r.is_end;
            const witReadings = readings.filter(filterCondition);
            witReadings.sort((first, second) => { return first.rank - second.rank  })
            return {
                  sigil: sigil,
                  readings: witReadings
            };
      }

      async function makeDirectory(sectiondir){
            if( ! fs.existsSync('public') )
                   fs.mkdirSync('public', {recursive:true});
            if(!fs.existsSync('public/data'))
                  fs.mkdirSync('public/data', {recursive:true});
            if(!fs.existsSync(sectiondir))
                  fs.mkdirSync(sectiondir, {recursive:true});
      }

      function writeFile(fileName, contents){
            fs.writeFileSync( fileName, contents )  
      }

      function writeSectionFile( validSections ){
            const sectFile = `${outdir}/sections.json`;
            // fyi - sectionIds have nothing to do with it, they are not sequential
            validSections.sort( (a,b)=>{
                  const aYear = a.englishTitle.substr(9,3);
                  const bYear = b.englishTitle.substr(9,3);
                  return ( parseInt(aYear) - parseInt(bYear))
            })
            fs.writeFileSync( sectFile, JSON.stringify(validSections) )
      }

      function writeWitnessList( witnesses ) {
            witnesses.splice(0,0,{id:'lemma', sigil:'Lemma Text'});
            witnesses.splice(1,0, {id:'en', sigil:'Translation'})
            const datadir = `${outdir}`;
            makeDirectory(datadir)
            const sectFile = `${outdir}/witnesses.json`
            fs.writeFileSync( sectFile, JSON.stringify(witnesses) )
      }

      function writeAnnotationList( annotations, sectionId, fileName ){
            const refs = [];
            annotations.forEach( anno =>{
                  const beginNodeId = anno.links[0].type==="BEGIN"? anno.links[0].target : anno.links[1].target;
                  const endNodeId = anno.links[1].type==="BEGIN"? anno.links[1].target : anno.links[0].target;
                  let ref = {
                        annotationId: anno.id,
                        begin: beginNodeId,
                        end: endNodeId
                  }
                  refs.push(ref);
            })
            const sectiondir = `${outdir}/${sectionId}`;
            makeDirectory(sectiondir)
            const sectFile = `${sectiondir}/${fileName}.json`
            fs.writeFileSync( sectFile, JSON.stringify(refs) )
      }

     
     
    
}

// RUN 
generateStore();
