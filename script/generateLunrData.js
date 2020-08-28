const fs = require('fs')
const axios = require('axios');
const moment = require('moment')
//const CETEI = require('./../utils/CETEI')
const lunr = require('lunr');    
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
// inspired by fast async await example - everything in parallel when possible - 
// do add error handling please


async function generateLunrSource() { 
      const startTime= moment();
      console.log('started', startTime.format('hh:mm:ss'));
      const config = loadConfig();
      const baseURL=`${config.options.repository}/tradition/${config.options.tradition_id}`;
      const auth = config.auth;
      const outdir = "public/data";
      const lunrData = [];
      const lunrIndex = [];
      const lunrArmenian = [];
      const lunrArmenianIndex = [];


     // const ridiculous = await getAllReadings();// the size of this array is 73,106 1/22/20
     // console.log('testing')

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
          //  writeWitnessList(lists[1]);
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
                  sectionData = getSectionData(section.id);
                  sectionPromises.push(sectionData);
            });
            sectionStore = await Promise.all(sectionPromises);
            writeTranslationDataIndexFiles();
            writeLemmaDataIndexFiles();
      }

      async function getSectionData( sectionId ){
            let lemmaTextFinal = await getLemmaText(sectionId);
           
            if( lemmaTextFinal.text ) {
                 
                  let allReadings = new Promise( (resolve )=>{
                        getReadings(sectionId)
                        .then( readings=>{
                            
                              prepareLemmaDataIndex( readings, sectionId); 
                           
                              getTranslation(sectionId)
                                    .then( translation=>{
                                          prepareTranslationDataIndex(translation, sectionId, readings)
                                          resolve();
                                    });
                        });

                  });

                 return data =  await Promise.all( [allReadings,] )
            }
      }

    
      function prepareTranslationDataIndex( translation,sectionId, reading){
            if ( ! translation.length > 0 ){
                  console.log('no translation for section', sectionId)
                  return;
            }
          
            if( translation.length === 0 )
            return;
            let textElements = [] ;
            let lunrText = [];
            const translationFragments = [];
            for (const entry of translation ) {
                  const text = entry.properties.text;
                  const beginTextNode = entry.links[0].type==="BEGIN" ? entry.links[0].target:entry.links[1].target;
                  const endTextNode = entry.links[0].type==="END" ? entry.links[0].target:entry.links[1].target;
                  const startNode = reading.find(( r) =>   r.id === beginTextNode.toString());            
                  const endNode = reading.find( (r) =>   r.id === endTextNode.toString()); // could also check for join_previous and next here
                  const translationFragment = {
                        text: text,
                        start: beginTextNode ,
                        startRank: startNode? startNode.rank:'',
                        end: endTextNode,
                        endRank: endNode? endNode.rank:'',
                  }
                  translationFragments.push(translationFragment)
            }
            translationFragments.sort( (a,b)=>{return a.startRank - b.startRank});
            translationFragments.forEach( f => {
                  lunrText.push( f.text)
                  const textElement = `<span id='${f.startRank}-${f.start}' key='${f.endRank}-${f.end}'>${f.text}</span>`;
                  textElements.push(textElement)
            })

            const htmlJoined = `${textElements.join(' ')}`
            lunrData.push({sectionId:sectionId, text:htmlJoined});

            const textJoined = `${lunrText.join(' ')}`
            lunrIndex.push({sectionId:sectionId,title:'',text:textJoined})
        
          
      };

      function prepareLemmaDataIndex(reading,sectionId){
            let rawLemma = parseWitnessReading("Lemma text", reading);
            if( reading.length === 0 )
            return;
            let textElements = [] ;
            let lunrText = [];
            for (let i=0; i< reading.length; i++ ) {
                  let entry = reading[i];
                  const text = entry.normal_form ? entry.normal_form : entry.text
                  if (i > 0 && !reading[i-1].join_next && ! entry.join_prior) {
                        textElements.push(' ')
                  }
                  lunrText.push(text)
                  textElements.push( `<span id='${entry.id}' key=${entry.rank}>${text}</span>`)
            }

            const htmlJoined =  `${textElements.join('')}`
            lunrArmenian.push({sectionId : sectionId, text: htmlJoined});

            const textJoined = `${lunrText.join(' ')}`;
            lunrArmenianIndex.push({sectionId:sectionId, text:textJoined})
      }

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
  
      function writeTranslationDataIndexFiles( ){
            var idx = lunr(function () {
                  this.ref('sectionId')
                  this.field('text')
              
                  lunrIndex.forEach(function (doc) {
                              this.add(doc)
                        }, this)
                  });

            const lunrDataFile = `${outdir}/lunrData.json`;
            fs.writeFileSync( lunrDataFile, JSON.stringify(lunrData) ) ;

            const lunrIndexFile = `${outdir}/lunrIndex.json`;
            fs.writeFileSync( lunrIndexFile, JSON.stringify(idx) );

            console.log('lunr translation index file written')  
      }

      function writeLemmaDataIndexFiles( ){
            var idx = lunr(function () {

                  this.pipeline.remove(lunr.trimmer)
                  this.pipeline.remove(lunr.stemmer)
                  this.pipeline.remove(lunr.stopWordFilter)

                  this.ref('sectionId')
                  this.field('text')
              
                  lunrArmenianIndex.forEach(function (doc) {
                              this.add(doc)
                        }, this)
                  });

            const lunrDataFile = `${outdir}/lunrArmenianData.json`;
            fs.writeFileSync( lunrDataFile, JSON.stringify(lunrArmenian) ) ;

            const lunrIndexFile = `${outdir}/lunrArmenianIndex.json`;
            fs.writeFileSync( lunrIndexFile, JSON.stringify(idx) ) ;

            console.log('lunr Armenian index file written')  
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

    
}

// RUN 
generateLunrSource();
