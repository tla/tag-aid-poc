const axios = require('axios');
const fs = require('fs');
const moment = require('moment')




async function generateDates(){
      console.log('start read and generate date info', moment().format('mm ss'))
      const config = loadConfig();
      const auth = config.auth;
      const baseURL=`${config.options.repository}/tradition/${config.options.tradition_id}`;
      const outdir = "public/data";

      let wordHash = {}
      let dateList = [];

      await fetchReadings();

      await fetchDateInfo();

      await fetchTranslations();

      writeDateList();

      console.log('end read and generate date info', moment().format('mm ss'));


// a possible api call to look up the reading, you can pass a begin and end node
// we will start with getting the translation though - 
      //http://www.example.com/tradition/tradId/section/sectionId/lemmatext/

   
      function writeDateList(){
            makeDirectory();
            let filePath=`${outdir}/chronicleDates.json`
            writeFile(filePath, JSON.stringify(dateList))
      }


      async function fetchReadings(){

            try{
                  let allReadings  = await axios.get(`${baseURL}/readings`,{auth});
                  console.log("all readings = individual word nodes fetched")
                  allReadings.data.forEach( reading=>{
                        if( reading.is_lemma)
                              wordHash[reading.id] = {
                                    section:reading.section
                              }
                  })

            }catch( error){
                  console.log(`error fetching all readings ${error} `);
            
            }
      }


      async function fetchDateInfo(){
            let dates = new Promise( resolve =>{
                  fetchDateAnnotations()
                  .then(dates=>{
                        resolve(dates)
                  } )
            });

            let daterefs = new Promise( resolve =>{
                  fetchDateRefs()
                  .then(refs=>{
                        resolve(refs)
                  })
            });


            let dateInfo = await Promise.all([dates, daterefs]);
          
            console.log('dates and daterefs fetched')
            dateInfo[0].forEach( date => {
                  let refId = date.links[0].target;
                  let dateRef = dateInfo[1].find( r=>{ return parseInt(r.id ) === refId});
                  if ( ! dateRef ){
                        console.log( 'no dateref for date id ', date.id);
                        return;
                  }
                  let beginNode = dateRef.links[0].type==="BEGIN"? dateRef.links[0].target:dateRef.links[1].target;
                  let endNode = dateRef.links[1].type==="END"? dateRef.links[1].target:dateRef.links[0].target;
                  let section = wordHash[beginNode].section;
                  let earliestDate, latestDate;
                  if( date.properties.notBefore ) 
                        earliestDate = moment().year(date.properties.notBefore.year).dayOfYear(date.properties.notBefore.dayOfYear);
                   if( date.properties.notAfter)
                        latestDate = moment().year(date.properties.notAfter.year).dayOfYear(date.properties.notAfter.dayOfYear)
                  dateList.push({
                        earliestDate:earliestDate?  earliestDate.toISOString(): null,
                        latestDate: latestDate?latestDate.toISOString(): null,
                        section: section,
                        beginNode: beginNode,
                        endNode: endNode
                  })
                
            })
      }

      async function fetchDateAnnotations(){
            try {
                  const response = await axios.get(`${baseURL}/annotations`,{auth, params: {label: 'DATE'}});
                  return response.data;
            }catch( error ) {
                  console.log(`no place refs for section ${sectionId} `);
                  return null
            }
      }

      async function fetchDateRefs(){
            try {
                  const response = await axios.get(`${baseURL}/annotations`,{auth, params: {label: 'DATEREF'}});
                  return response.data;
            }catch( error ) {
                  console.log(`no place refs for section ${sectionId} `);
                  return null
            }
          
      }

      async function fetchTranslations(){
            let translationPromises = [];

            dateList.forEach( dateItem => {

                  let translationPromise = new Promise( resolve=>{
                        let sectionId  = dateItem.section;
                        fetchTranslation(sectionId)
                        .then( translation =>{
                              if(translation.length > 0 ){
                                    let translationText = parseTranslation( translation, dateItem.beginNode, dateItem.endNode);
                                    dateItem.translation = translationText;
                              }
                              resolve();
                       
                        })
                  });
                  translationPromises.push(translationPromise);
            })

            let lookedUp = await Promise.all(translationPromises)
            console.log( " all translations for dates look up")
      }

      async function fetchTranslation(sectionId){
            try{
                  const sectionURL = `${baseURL}/section/${sectionId}`;
                  const response = await axios.get( `${sectionURL}/annotations`, {auth, params: {label: 'TRANSLATION'}})
                  return response.data;
            } catch ( error){
                  console.log( 'error fetching translation for section', sectionId)
                  return null;
            }
           
      }

      function parseTranslation( translation, dateStart, dateEnd){
            if( translation.length === 0 )
            return;
  
            for (const entry of translation ) {
                  const text = entry.properties.text;
                  const beginTextNode = entry.links[0].type==="BEGIN" ? entry.links[0].target:entry.links[1].target;
                  const endTextNode = entry.links[0].type==="END" ? entry.links[0].target:entry.links[1].target;
              
                  if ( parseInt(dateStart) >= parseInt(beginTextNode) && parseInt(dateEnd) <= parseInt(endTextNode) )
                        return text;
            }
        
      }


  
// these three should be in a shared util file but ... however thisway
// scripts are standalone
      function loadConfig() {
            const configJSON = fs.readFileSync(`script/lemma-html-config.json`, "utf8");
            return JSON.parse(configJSON);
      }

      async function makeDirectory(){
            if( ! fs.existsSync('public') )
                   fs.mkdirSync('public', {recursive:true});
            if(!fs.existsSync('public/data'))
                  fs.mkdirSync('public/data', {recursive:true});
      }

      function writeFile(filePath, contents){
            fs.writeFileSync( filePath, contents )  
      }
}

generateDates();