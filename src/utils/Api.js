import axios from 'axios';

console.log('host is' ,window.location.hostname)
let host = window.location.hostname==='localhost'?'localhost:3000':'157.245.255.111'
const  localUrl=`http://${host}/`;
//const sectionListURL = `${process.env.PUBLIC_URL}/data/sections.json`;

export const getSectionList = async ( onListReceived )=>{
      const sectionListURL = `${localUrl}data/sections.json`;
      try{
            const result = await axios.get(sectionListURL);
            onListReceived(result.data)
      } catch( error ) {
            console.log(error)
      }
}

export const getWitnessList = async ( onListReceived )=>{
      const witnessListURL = `${localUrl}data/witnesses.json`;
      try{
            const result = await axios.get(witnessListURL);
            onListReceived(result.data)
      } catch( error ) {
            console.log(error)
      }
}

export const getNodeLookup = async ( sectionId, onListReceived )=>{
      const nodeListURL = `${localUrl}data/${sectionId}/readings.json`;
      try{
            const result = await axios.get(nodeListURL);
            onListReceived(result.data)
      } catch( error ) {
            console.log(error)
      }
}

export const getReading = async ( sectionId, reading, onTextReceived )=>{
      reading = reading === "Lemma Text" ? "lemma": reading;
      reading = reading === "Translation"? "en":reading;
      const readingURL = `${localUrl}data/${sectionId}/${reading}.html`;
      try{
            const result = await axios.get(readingURL);
            onTextReceived(result.data)
      } catch( error ) {
            console.log(error)
      }
}






