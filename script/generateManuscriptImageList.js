
// from the mel project - https://github.com/performant-software/mel-textual-core/blob/master/scripts/whale.js#L9
const fs = require('fs')
const jsdom = require("jsdom");
const moment = require('moment');
const { JSDOM } = jsdom
const {CETEI} = require("./CETEI")
const axios = require('axios');




async function process(){
      console.log(`begin processing ${moment().format('mm:ss')}`);
      const config = loadConfig();
      const baseURL=`${config.options.repository}/tradition/${config.options.tradition_id}`;
      const auth = config.auth;
      const sourcePath = 'public/images/mss/Ox-e.32/Ox-e.32.tei.xml';
      const htmlFilePath =  'public/images/mss/Ox-e.32/Ox-e.32.tei.images.html';
      let counter =-1;
      const pages = [];
      const sections = await getSections();
      const sigil = "O";

      readTei(sourcePath);

      function loadConfig() {
            const configJSON = fs.readFileSync(`script/lemma-html-config.json`, "utf8");
            return JSON.parse(configJSON);
      }
      
      async function getSections(){
            const response =   await axios.get(`${baseURL}/sections`, {auth} ) 
            return response.data;
      }



      function readTei( teiFilePath){
            fs.readFile(teiFilePath, "utf8", (err, contents)=>onReadFile( err, contents, htmlFilePath) );
      }

      function onReadFile(err, filecontents){
            if(err){
                  console.error(`ERROR ${err}`)  ;
                  return null;
            }
            convertToHTML(filecontents);
            writeHtmlFile(htmlFilePath);
            console.log(`completed processing ${moment().format('mm:ss')}`);
      }
      
      function convertToHTML( filecontents) {
            const htmlDOM = new JSDOM()
            const ceTEI = new CETEI(htmlDOM.window);
            const xmlDOM = new JSDOM(filecontents, { contentType: "text/xml" })  
            const pageCounter = 0;
            const data = ceTEI.domToHTML5(xmlDOM.window.document,  (el)=>{
                  switch(el.localName){
                        case "tei-milestone":{
                              // this works because milestones are after the header so sigil is set
                             const yearId = el.getAttribute("n");
                             const compare = `milestone-${yearId}`
                             const section = sections.find( s => s.name === compare )
                            if(section){
                              el.innerHTML = `<br/><br/><a href="#/Edition/${section.id}/${sigil}" >The Year ${yearId}</a><br/>`
                         
                              }
                             else 
                              el.innerHTML = '';


                              if(pages.length > 0 && el.innerHTML.length < 100000){
                                    console.log( "inner html is" + el.innerHTML)
                                      pages[counter].text += el.innerHTML;
                                }


                              break;
                        }
                        case "tei-damage":{
                              el.innerHTML = `(${el.innerHTML})`;
                             
                              if(pages.length > 0 && el.innerHTML.length < 100000){
                                    console.log( "inner html  is" + el.innerHTML)
                                      pages[counter].text += el.innerHTML;
                                }

                                break;
                        }
                        case "tei-pb":{
                             el.innerHTML = `<br/>`
                             const pbId = el.getAttribute("n");
                             if(pbId.indexOf(".jpg") >-1){
                                    console.log(pbId)
                                    let manuscriptPage ={
                                          pbId:pbId,
                                          text:''
                                    }
                                    let alreadyAdded = pages.find(p=>p.pbId === pbId) 
                                    if(!alreadyAdded) {
                                          pages.push(manuscriptPage);
                                          counter++;
                                    }    
                                    if(pages.length > 0 && el.innerHTML.length < 100000){
                                          console.log( "inner html  is" + el.innerHTML)
                                            pages[counter].text += el.innerHTML;
                                      }                      
                        } 
                        break;
                  }
                        default:{
                              if(pages.length > 0 && el.innerHTML.length < 100000){
                                  console.log( "inner html  is" + el.innerHTML)
                                    pages[counter].text += el.innerHTML;
                              }
                              break;
                        }
                  } 
               
               
            })

           
      }

      function writeHtmlFile(destinationPath){
           console.log(pages.length)
            fs.writeFileSync(destinationPath, JSON.stringify(pages), "utf8") ;
      }

}

process();
