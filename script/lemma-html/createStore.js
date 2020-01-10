const fs = require('fs')
const axios = require('axios');
const moment = require('moment')
     




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
            const configJSON = fs.readFileSync(`script/lemma-html/lemma-html-config.json`, "utf8");
            return JSON.parse(configJSON);
      }

      async function fetchData(baseURL, auth){
            const sections = getSections();
            const witnesses =  getWitnesses();
            let lists = await Promise.all([sections, witnesses])
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
            sections.forEach( section =>{
                  sectionData = getSectionData(section.id, witnesses);
                  sectionPromises.push(sectionData);
            });
            sectionStore = await Promise.all(sectionPromises);
      }

      async function getSectionData( sectionId, witnesses ){
            let lemmaTextFinal = await getLemmaText(sectionId);
           
            if( lemmaTextFinal.text ) {
                  const validSections = [];

                  let allReadings = new Promise( (res, rej )=>{

                        getReadings(sectionId)
                        .then( readings=>{
                              writeLemmaFile( readings, sectionId); 
                              writeWitnessFiles(readings, witnesses, sectionId);
                              res();
                        })

                  });

                  let englishTranslation = new Promise( (res, rej) =>{
                        getTranslation(sectionId)
                        .then( translation=>{
                              writeTranslationFile(sectionId,translation);
                              res();
                        })

                  });

                  let titleArray = new Promise( (res, rej )=>{
                        getTitle(sectionId)
                        .then( titles =>{
                               let validSection = {
                                     sectionId: sectionId,
                                     englishTitle: titles[1].text,
                                     armenianTitle: titles[0].text
                               }
                               validSections.push(validSection);
                              res();
                        })

                  });

                 return data =  await Promise.all( [allReadings,englishTranslation,titleArray] )
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
            const sectionURL = `${this.baseURL}/section/${sectionId}`;
            const response = await axios.get( `${sectionURL}/annotations`, {auth, params: {label: 'PERSON'}})
            return response.data;
      }

      async function getPlaces(sectionId){
            const sectionURL = `${this.baseURL}/section/${sectionId}`;
            const response = await axios.get( `${sectionURL}/annotations`, {auth, params: {label: 'PLACE'}})
            return response.data;
      }

      async function getDates(sectionId){
            const sectionURL = `${this.baseURL}/section/${sectionId}`;
            const response = await axios.get( `${sectionURL}/annotations`, {auth, params: {label: 'DATE'}})
            return response.data;
      }

      function writeLemmaFile(readings,sectionId){
            const sectiondir = `${outdir}/${sectionId}`;
            const lemmaFilePath = `${sectiondir}/lemmaText.html`
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
                        //console.log('writing witness reading for sigil: ', witness.sigil)
                        writeFile(witnessFilePath,htmlWitness)
                  }
               
            })
      }

      function readingToHTML( reading ){
            let textElements = [] ;
            if( reading.length === 0 )
            return;
            for (const entry of reading ) {
                  const text = entry.normal_form ? entry.normal_form : entry.text
                  textElements.push( `<span id='text-${entry.id}' key=${entry.id}>${text}</span>`)
            }
            return  `${textElements.join('')}`
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

      function parseWitnessReading(sigil, readings) {
            const filterCondition = sigil === 'Lemma text'
                  ? (r) => r.is_lemma && !r.is_start && !r.is_end
                  : (r) => r.witnesses.includes(sigil) && !r.is_start && !r.is_end;
            const witReadings = readings.filter(filterCondition);
            witReadings.sort((first, second) => first.rank - second.rank)
            return {
                  sigil: sigil,
                  readings: witReadings
            };
}

      function writeTranslationFile(sectionId, translation){
            if ( ! translation.length > 0 )
                  return;
            const sectiondir = `${outdir}/${sectionId}`;
            const translationFilePath = `${sectiondir}/translation.html`;
            makeDirectory(sectiondir);
            //console.log('writing translation file for section ', sectionId)
            writeFile(translationFilePath,translation)
      };

      function writeSectionList( validSections ){
            const sectFile = `${outdir}/sections.json`
            fs.writeFileSync( sectFile, JSON.stringify(validSections) )
      }

     
     
    
}

// RUN 
generateStore();
