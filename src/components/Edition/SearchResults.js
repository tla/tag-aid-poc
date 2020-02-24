import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import EditionHeader from './EditionHeader'
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import * as DataApi from '../../utils/Api';
import lunr from 'lunr';
import documents from './LunrData'
import Typography from '@material-ui/core/Typography';
import Parser , {domToReact} from 'html-react-parser';

const SearchResults=(props)=>{

      const {searchTerm, onSearch, dataDictionary} = props;
      const [ lunrResults, setLunrResults] = useState([]);  
    

    

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
            var idx = lunr(function () {
                  this.ref('sectionId')
                  this.field('text')
                  documents.forEach(function (doc) {
                        this.add(doc)
                  }, this)
            });
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
                                                                  <Typography variant="h6">
                                                                              {`section: ${r.ref}` }
                                                                  </Typography>
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