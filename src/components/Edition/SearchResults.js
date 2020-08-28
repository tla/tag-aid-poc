import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import EditionHeader from './EditionHeader'
import Paper from '@material-ui/core/Paper';
import lunr from 'lunr';
import Typography from '@material-ui/core/Typography';
import Parser , {domToReact} from 'html-react-parser';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const SearchResults=(props)=>{

      const {searchTerm, onSearch, translationDictionary, translationIndex, armenianDictionary, armenianIndex} = props;
      const [ lunrResults, setLunrResults] = useState([]);  
      const [dataDictionary, setDataDictionary] = useState([]);

      const parserOptions = {
            replace: function(domNode) {
                  if( domNode.children){
                        if(domNode.children[0].data.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 )
                              return <span  style={{backgroundColor:'yellow'}}>{domToReact(domNode.children,parserOptions)}</span>
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
                  idx = lunr.Index.load(translationIndex);
                  setDataDictionary(translationDictionary)
            } else {
                  idx = lunr.Index.load(armenianIndex);
                  setDataDictionary(armenianDictionary)
            }
      
            let hopingFor = idx.search(searchTerm);
            setLunrResults(hopingFor);

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
                              <Typography variant="h5" style={{marginBottom:'31px'}}>
                                     { 'Search Results' }
                        </Typography>
                                          {
                                                lunrResults.length > 0 ?
                                                lunrResults.map( (r) => {
                                                      let value;
                                                      value = dataDictionary.find(d => { return d.sectionId === r.ref }).text
                                                      return (
                                                            <div key={r.ref} style={{marginBottom:'16px'}}>
                                                                   <Button size="large" component={Link} to={`/Edition/${r.ref}`} color="secondary">
                                                                        <Typography variant="h6">
                                                                              {`section: ${r.ref}` }
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

    

}




export default SearchResults