
// from the mel project - https://github.com/performant-software/mel-textual-core/blob/master/scripts/whale.js#L9
const fs = require('fs')
const jsdom = require("jsdom");
const moment = require('moment');
const { JSDOM } = jsdom
const {CETEI} = require("./CETEI")

class DirectoriesRead {
     value=0;
     total=null;
     onComplete = null;
      static increment = ()=>{ 
            this.value = this.value + 1;
            console.log(`processing file: ${this.value} of ${this.total}`)
           if(this.value == this.total)
                  this.onComplete();
     }
};

function process(){
      console.log(`begin processing ${moment().format('mm:ss')}`);
      const sourcePath = 'public/images/mss';
      const sigilLookup = [];

      iterateDirectories(sourcePath);
    
    

      function iterateDirectories(sourcePath) {
            const directories = fs.readdirSync(sourcePath, {withFileTypes: true});
            DirectoriesRead.value = 0;
            DirectoriesRead.total = directories.length;
            DirectoriesRead.onComplete = writeLookupFile;

            for( let i=0; i < directories.length; i++ ) {
                  const teiFilePath = `${sourcePath}/${directories[i].name}/${directories[i].name}.tei.xml`
                  const htmlFilePath = `${sourcePath}/${directories[i].name}/${directories[i].name}.html`;
                  if(directories[i].isDirectory()){
                        fs.readFile(teiFilePath, "utf8", (err, contents)=>onReadFile( err,contents,htmlFilePath) );
                  }
                  else
                    DirectoriesRead.increment();
            }
      }

      function onReadFile(err, filecontents,destinationPath){
            if(err){
                  console.error(`ERROR ${err}`)  ;
                  DirectoriesRead.increment();
                  return null;
            }
            convertToHTML(filecontents, destinationPath);
      }
      
      
      function convertToHTML( filecontents,destinationPath) {
            let manuscriptDescription ={
                  id:null,
                  settlement:null,
                  repository:null,
                  idno:null,
                  origDate:null,
                  origPlace:null
            }
            const htmlDOM = new JSDOM()
            const ceTEI = new CETEI(htmlDOM.window);
            const xmlDOM = new JSDOM(filecontents, { contentType: "text/xml" })    
            const data = ceTEI.domToHTML5(xmlDOM.window.document, (el)=>{
                  switch(el.localName){
                        case "tei-msdesc":
                              manuscriptDescription.id = el.id;
                              break;
                        case "tei-settlement":
                              manuscriptDescription.settlement = el.innerHTML;
                              break;
                        case "tei-repository":
                              manuscriptDescription.repository=el.innerHTML;
                              break;
                        case "tei-idno":
                              manuscriptDescription.idno = el.innerHTML;
                              break;
                        case "tei-origdate":
                              manuscriptDescription.origDate = el.innerHTML;
                              break;
                        case "tei-origplace":
                              manuscriptDescription.origPlace = el.innerHTML;
                              break;
                  }  
            })
       
           sigilLookup.push(manuscriptDescription);
            const html =  data.innerHTML;
            DirectoriesRead.increment();
            fs.writeFileSync(destinationPath, html, "utf8") ;
      }

      function writeLookupFile(){
            fs.writeFileSync('public/data/sigilLookup.json', JSON.stringify(sigilLookup), "utf8") ;
            console.log(`completed processing ${moment().format('mm:ss')}`);
      }
        
     
}

process();
