import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import EditionHeader from './EditionHeader'
import Paper from '@material-ui/core/Paper';
import lunr from 'lunr';
import Typography from '@material-ui/core/Typography';
import Parser , {domToReact} from 'html-react-parser';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const SearchResults=(props)=>{

      const {searchTerm, onSearch, translationDictionary, translationIndex, armenianDictionary, armenianIndex, sections} = props;
      const [ groupedResults, setGroupedResults] = useState([]);  
      const [dataDictionary, setDataDictionary] = useState([]);
      const [isArmenian, setIsArmenian]=useState();
    //  const [witnessName, setWitnessName] = useState();
    
      const parserOptions = {
            replace: function(domNode) {
                  if( domNode.children){
                        if(domNode.children[0].data.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 )
                              return <span  style={{backgroundColor:'#F2F19C'}}>{domToReact(domNode.children,parserOptions)}</span>
                        else
                              return <span  >{domToReact(domNode.children,parserOptions)}</span>
                  }
            }
      }
  
      useEffect(() => {
            if(! searchTerm )
            return;

            const characterCode = searchTerm.codePointAt(0);
            let armenianCharacter = (characterCode >= 1280  &&  characterCode <=1535) ? true: false;
            let idx;

            if( ! armenianCharacter ){
                  setIsArmenian(false)
               //   setWitnessName("Translation");
                  idx = lunr.Index.load(translationIndex);
                  setDataDictionary(translationDictionary)
            } else {
                  setIsArmenian(true);
                //  setWitnessName("Lemma Text");// for now its trans or lemma
                  idx = lunr.Index.load(armenianIndex);
                  setDataDictionary(armenianDictionary)
            }
      
            let hopingFor = idx.search(searchTerm);
            groupSearchResults(hopingFor);

      },[searchTerm])

return (
            <Grid container spacing={0} >

                  <Grid id="edition-header" item xs={12} style={{backgrounColor:'red', height:'114px'}} >
                        <EditionHeader onSearch={onSearch} />
                  </Grid>  
          
                   <Grid id="mainContent" item xs={12} > 
                        {searchTerm  &&
                              <div style={{display:'flex',justifyContent:'center'}}>
                              <Paper  style={{margin:'12px',width:'80%',padding:'12px'}}>
                                    <div style={{display:'flex'}}>
                                          <Typography variant="h5" style={{marginBottom:'31px'}}>
                                          { `Search Results for`}
                                          </Typography>
                                          <Typography variant="h5" style={{fontStyle:'italic', marginLeft:'6px'}}>
                                                      { searchTerm}
                                          </Typography>
                                    </div>
                           
                                          {
                                                groupedResults.length > 0 ?

                                                isArmenian ?

                                                groupedResults.map( (r) => {
                                                return(
                                                    
                                                      <div key={r.year} style={{marginBottom:'16px'}}>
                                                                   <ExpansionPanel>
                                                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
                                                                              <Typography variant="h5"> {`Year ${r.year} ${r.witnesses.length} Witnesses`}</Typography>
                                                                        </ExpansionPanelSummary>
                                                                        <ExpansionPanelDetails style={{display:'flex', flexDirection:'column'}}>
                                                                              { r.witnesses.map( w=>{
                                                                                    return (

                                                                                                <Link style={{display:'block'}} to={`/Edition/${w.sectionId}/${w.witness?w.witness:''}`} color="secondary">
                                                                                                     
                                                                                                      <Typography variant="h6" style={{marginLeft:'8px'}}>
                                                                                                            {`Witness Sigil: ${w.witness}`}
                                                                                                      </Typography>
                                                                                                </Link>
                                                                                                )
                                                                              })
                                                                        }
                                                                        </ExpansionPanelDetails>
                                                                  </ExpansionPanel>
                                                            </div>
                                                            
                                                            
                                                            )
                                                })  
                                                
                                                :
                                                groupedResults.map( (r) => {
                                                      let value;
                                                      let section = r.witnesses[0].sectionId;
                                                      value = dataDictionary.find(d => { return d.sectionId === section }).text
                                                      return (
                                                            <div key={r.ref} style={{marginBottom:'16px'}}>
                                                                        <Button size="large" component={Link} to={`/Edition/${section}`} color="secondary">
                                                                        <Typography variant="h6">
                                                                              {`section: ${section}` }
                                                                        </Typography>
                                                                  </Button>
                                                                  
                                                                  <Typography variant="body1">
                                                                              {Parser(value,parserOptions)}
                                                                  </Typography>
                                                            </div>
                                                      )
                                                })   

                                                :  searchTerm ? 
                                                <Typography>
                                                      {`${searchTerm} not found`}
                                                </Typography> : <span/>
                                          }
                              
                        </Paper></div> 

                                    }
                  </Grid>  

            </Grid>
      )

  
function groupSearchResults(lunrSearch){
      let groupedYears=[]
       lunrSearch.forEach( result =>{
             let sectionId = result.ref.split('-')[0];
             let witness = result.ref.split('-')[1];
             let header =  sections.find( s =>{
                   return s.sectionId === sectionId;
             });
             let year = parseInt(header.englishTitle.substring(9,12));
 
            let yearGroup = groupedYears.find( gr=>{return gr.year === year });
             if ( yearGroup )
             {
                   yearGroup.witnesses.push( {sectionId:sectionId, witness:witness, year:year, text:result.text, header: header});// denormalized redundant year I know 
                   yearGroup.witnesses.sort( ( a, b)=>{
                        if(a.witness.toUpperCase() > b.witness.toUpperCase())
                         return 1;
                         if(a.witness.toUpperCase() < b.witness.toUpperCase())
                               return -1;
                         else 
                               return 0;
                  })
             }
             else {
                   let witnesses=[];
                   witnesses.push({sectionId:sectionId, witness:witness, year:year, text:result.text, header: header})
                   groupedYears.push( {year:year, witnesses:witnesses})
             }
       });
 
       groupedYears.sort( ( a, b)=>{
             if(a.year > b.year )
                   return 1;
             else if ( a.year < b.year)
                   return -1;
             else  
                   return 0;
       })
 
       setGroupedResults(groupedYears)
 }
   

}




export default SearchResults