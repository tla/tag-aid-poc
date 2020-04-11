
// from the mel project - https://github.com/performant-software/mel-textual-core/blob/master/scripts/whale.js#L9
const fs = require('fs')
const jsdom = require("jsdom");
const moment = require('moment');
const { JSDOM } = jsdom

const {CETEI} = require("./CETEI")


function convertToHTML( sourcePath, destinationPath ) {
    const htmlDOM = new JSDOM()
    const ceTEI = new CETEI(htmlDOM.window)

    console.log(`Converting ${sourcePath}`)
    try {
            fs.readFile(sourcePath, "utf8", (err, filecontents )=>{
                  if(err){
                        console.error(`ERROR ${err}`)  ;
                        return null;
                  }
                  const xmlDOM = new JSDOM(filecontents, { contentType: "text/xml" })    
                  const data = ceTEI.domToHTML5(xmlDOM.window.document)
                  const html =  data.innerHTML;
                  fs.writeFileSync(destinationPath, html, "utf8")  
        })

    } catch( err ) {
            console.error(`ERROR ${err}`)  ;
    }
   
}

function iterateDirectories(sourcePath) {
    const directories = fs.readdirSync(sourcePath, {withFileTypes: true});
    for( let i=0; i < directories.length; i++ ) {
          if(directories[i].isDirectory()){
            const teiFilePath = `${sourcePath}/${directories[i].name}/${directories[i].name}.tei.xml`
            const htmlFilePath = `${sourcePath}/${directories[i].name}/${directories[i].name}.html`
            convertToHTML(teiFilePath, htmlFilePath)
          }
    }
}

async function process(sourceDirectoriesPath) {
      iterateDirectories(sourceDirectoriesPath)
}

async function run() {
    await process('public/images/mss')
}

function main() {
      console.info(`begin processing tei files ${moment().format('mm:ss')}.`)
      run().then(() => {
            console.info(`end processing tei files ${moment().format('mm:ss')}.`)
    }, (err) => {
        console.error(`${err}: ${err.stack}`)  
    });
}

///// RUN THE SCRIPT
main()
