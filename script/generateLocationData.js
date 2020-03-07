const axios = require('axios');
const fs = require('fs');
const moment = require('moment')

async function GenerateLocationData () {
      const startTime= moment();
      console.log('started', startTime.format('hh:mm:ss'));
      const config = loadConfig();
      const baseURL=`${config.options.repository}/tradition/${config.options.tradition_id}`;
      const auth = config.auth;
      const outdir = "public/data";
      const geoLocations =[];
      const locationStore = [];

      await fetchData(baseURL,auth);
      const endTime= moment();
      console.log('Done!', endTime.format('hh:mm:ss'))

      function loadConfig() {
            const configJSON = fs.readFileSync(`script/lemma-html-config.json`, "utf8");
            return JSON.parse(configJSON);
      }

      async function fetchData(){
           
            const geoRequests=[];
            const places = await getPlaces()

            places.data.forEach( p =>{
                  let url = p.properties.href
                  if( url && url.indexOf("pleiades") >-1 ){
                        let pleiadesRequest = fetchGeoJsonLocation(url);
                        geoRequests.push(pleiadesRequest);
                  }
                  if(url && url.indexOf("geonames") > -1){
                        const geoNameId = url.split("/")[3];
                        const jsonUrl = `http://geonames.org/getJSON?id=${geoNameId}`;
                        let geonamesRequest = fetchKMLLocation( jsonUrl, url);
                        geoRequests.push(geonamesRequest)
                  }
            });

            let allLocations = await Promise.all(geoRequests);
            
            writeLocationFile();
      }

      async function fetchKMLLocation(url, originalUrl){
            return geoData = await new Promise(resolve=>{
                  getGeoJson(url)
                  .then( openData =>{
                        const record = openData.data
                        geoLocations.push({
                             // identifier:p.identifier, placeRef id
                              id: record.geonameId,
                              title: record.name,
                              provenance:'geonames.org',
                              geometry:[{
                                    
                                    geometry: {
                                          type:"Point",
                                          coordinates:[record.lng,record.lat],
                                          
                                    },
                                    properties:{
                                          snippet:`${record.fclName}, ${record.fcodeName}`,
                                          description: `country: ${record.countryName} admin: ${record.adminName1}`,
                                          link:originalUrl
                                    }
                              }]
                        });

                        resolve();
                  })
                  .catch( error =>{
                        console.log(error)
                  })
                        
            })
      }

      async function fetchGeoJsonLocation(url){
            return geoData = await new Promise(resolve=>{
                    getGeoJson(url)
                    .then( openData =>{
                          const record = openData.data
                          geoLocations.push({
                               // identifier:p.identifier, placeRef id
                                id: record.id,
                                title: record.title,
                                provenance:record.provenance,
                                representativePoint:record.reprPoint,
                                geometry:record.features
                                });
  
                                resolve();
                          });
                          
                    })
        }

      function writeLocationFile(){
            makeDirectory();
            const fileName=`${outdir}/locations.json`;
            console.log(`location count ${geoLocations.length}`)
            writeFile(fileName, JSON.stringify(geoLocations));
      }

      async function getPlaces(){
           // https://api.editions.byzantini.st/ChronicleME/stemmarest/tradition/4aaf8973-7ac9-402a-8df9-19a2a050e364/annotations?label=PLACE
           try{
                  const response = axios.get(`${baseURL}/annotations?label=PLACE`, {auth} )
                  return response;

           } catch( error ){
                  console.log(`error ${error.message}`)
            }
             
            
      }

      async function getGeoJson(url){
           return response = await axios.get(url)
      }

      async function makeDirectory(){
            if( ! fs.existsSync('public') )
                   fs.mkdirSync('public', {recursive:true});
            if(!fs.existsSync('public/data'))
                  fs.mkdirSync('public/data', {recursive:true});    
      }

      function writeFile(fileName, contents){
            fs.writeFileSync( fileName, contents )  
      }

}

GenerateLocationData();