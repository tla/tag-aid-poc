const fs = require('fs')
const axios = require('axios')

static class DataStoreGenerator {
      baseURL='';
      auth= null;
      outdir="public/data";

      async fetchData(){
            const witnesses = await this.getWitnesses();
            const sections = await this.getSections().then(()=>{
                  this.makeSectionDirectories(sections);
                  sections.forEach( sections=>{
                        this.generateSectionFiles(section)
                  })
            })
      }

      async getWitnesses(){
            const response =   await axios.get(`${this.baseURL}/witnesses`, this.auth ) 
            return response.data;
      }

      async getSections(){
            const response =   await axios.get(`${this.baseURL}/sections`, this.auth ) 
            return response.data;
      }

      async getLemmaText(sectionId){
            const url = `${baseURL}/section/${sectionId}/lemmatext`;
            const response = await axios.get(url, { auth, params: {'final': 'true'} });
            return response.data;
      }

      async getReadings(sectionId){
            const sectionURL = `${this.baseURL}/section/${sectionId}`
            const response = await axios.get(`${sectionURL}/readings`, this.auth);
            return response.data;
      }

      async getTranslation(sectionId){
            const sectionURL = `${this.baseURL}/section/${sectionId}`;
            const response = await axios.get( `${sectionURL}/annotations`, {auth, params: {label: 'TRANSLATION'}})
            return response.data;
      }

      async getTitle(sectionId){
            const sectionURL = `${this.baseURL}/section/${sectionId}`;
            const response = await axios.get( `${sectionURL}/annotations`, {auth, params: {label: 'TITLE'}})
            return response.data
      }

      async getPersons( sectionId ){
            const sectionURL = `${this.baseURL}/section/${sectionId}`;
            const response = await axios.get( `${sectionURL}/annotations`, {auth, params: {label: 'PERSON'}})
            return response.data;
      }

      async getPlaces(sectionId){
            const sectionURL = `${this.baseURL}/section/${sectionId}`;
            const response = await axios.get( `${sectionURL}/annotations`, {auth, params: {label: 'PLACE'}})
            return response.data;
      }

      async getDates(sectionId){
            const sectionURL = `${this.baseURL}/section/${sectionId}`;
            const response = await axios.get( `${sectionURL}/annotations`, {auth, params: {label: 'DATE'}})
            return response.data;
      }

      async getSectionData( section, witnesses ){
            let lemmaText = await this. getLemmaText(section.id);
            if( lemmaText ) {
                  const sectiondir = `${this.outdir}/${section.id}`;
                  let readings = await getReadings(section.id);
                  let translation = await this.getTranslation(section.id);
                  let title = await this.getTitle(section.id);
                 // etc for person place and date - although this will just be used for text highlights
                 
                  this.writeLemmaFile(sectiondir, readings);
                  this.generateTranslationFile(sectiondir, translation);
                  this.generateWitnessFiles(readings, witnesses)
            }

      }

      makeSectionDirectories(sections){
            const outdir = "public/data";
            for( const sect of sections ) {
                  const sectiondir = `${outdir}/${sect.id}`
                  if( !fs.existsSync(sectiondir) ) {
                        fs.mkdirSync(sectiondir)
                  }
            }
      }

      writeFile(fileName, contents){
            fs.writeFileSync( fileName, contents )  
      }

      readingToHTML( reading ){
            let textElements = [] ;
            for (const entry of reading.entries()) {
                  const text = entry.normal_form ? entry.normal_form : entry.text
                  textElements.push( `<span id='text-${entry.id}' key=${entry.id}>${text}</span>`)
            }
            return  `${textElements.join('')}`
      }

      writeLemmaFile(sectiondir, readings){
            
            const lemmaFilePath = `${sectiondir}/lemmaText.html`
            rawLemma = getWitnessReading("Lemma-Text", readings);
            htmlLemma = readingToHTML(rawLemma);
            writeFile(lemmaFileName,htmlLemma)  
      }

      writeTranslationFile(){
            const sectiondir = `${this.outdir}/${section.id}`;
            const translationFilePath = `${sectiondir}/translation.html`;
      };

      

      parseWitnessReading(sigil, readings) {
                  const filterCondition = sigil === 'Lemma text'
                        ? (r) => r.is_lemma && !r.is_start && !r.is_end
                        : (r) => r.witnesses.includes(sigil) && !r.is_start && !r.is_end;
                  const witReadings = rdglist.filter(filterCondition);
                  witReadings.sort((first, second) => first.rank - second.rank)
                  return {
                        sigil: sigil,
                        readings: witReadings
                  };
      }
     
      loadConfig() {
            const configJSON = fs.readFileSync(`script/lemma-html/lemma-html-config.json`, "utf8");
            return JSON.parse(configJSON);
      }

      async generateStore() {   
            const config = this.loadConfig();
            this.baseURL=`${options.repository}/tradition/${options.tradition_id}`;
            this.auth = config.auth;
            await this.fetchData();
            console.log('Done!')
      }

}

// RUN 
DataStoreGenerator.generateStore();
