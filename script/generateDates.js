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

      writeDateList();
      console.log('end read and generate date info', moment().format('mm ss'))
// a possible api call to look up the reading, you can pass a begin and end node
// we will start with getting the translation though - 
      //http://www.example.com/tradition/tradId/section/sectionId/lemmatext/

   
      function writeDateList(){
            makeDirectory();
            let filePath=`${outdir}/"ChronicleDate.json"`
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
            let dates = fetchDateAnnotations();
            let daterefs = fetchDateRefs();
            let dateInfo = await Promise.all([dates, daterefs]);
            console.log('dates and daterefs fetched')
            dates.forEach( date => {
                  let refId = date.links[0].target;
                  let dateRef = daterefs.find( r=>{ return r.id === refId});
                  let beginNode = dateRef.links[0].type==="BEGIN"? dateRef.links[0].target:dateRef.links[1].target;
                  let endNode = dateRef.links[1].type==="END"? dateRef.links[1].target:dateRef.links[0].target;
                  let section = wordHash[beginNode];
                  dateList.push({
                        earliestDate: moment().year(date.properties.notBefore.year).dayOfYear(date.properties.notBefore.dayOfYear),
                        latestDate: moment().year(date.properties.notAfter.year).dayOfYear(date.properties.notAfter.dayOfYear),
                        section: section,
                        beginNode: beginNode,
                        endNode: endNode
                  })
            })
      }


      async function fetchDateAnnotations(baseURL, auth){
          return  axios.get(`${baseURL}/annotations`,{auth, params: {label: 'DATE'}});
      }

      async function fetchDateRefs( refId){
           return axios.get(`${baseURL}/annotations`, {auth, params: {label: 'DATEREF'}});
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