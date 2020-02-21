import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import EditionHeader from './EditionHeader'
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import * as DataApi from '../../utils/Api';
import lunr from 'lunr'

const SearchResults=(props)=>{

      const searchTerm = "king";
      const [moonIndex, setMoonIndex] = useState();
      const [ searchResults, setSearchResults] = useState([]);

      useEffect( ()=>{
            DataApi.getLunrIndex( (data)=>{
                  const idx = lunr.Index.load(JSON.parse(data));
                  setMoonIndex(idx);
                  let results =   idx.search("king");
                  setSearchResults(results);
            });
           
      },[])

return (
            <Grid container spacing={0} >

                  <Grid id="edition-header" item xs={12} style={{backgrounColor:'red', height:'114px'}} >
                        <EditionHeader />
                  </Grid>  
            {/* 
                  <Hidden smDown>
                        <Grid item id="sideBar" md={2} >
                        <div style={{display:'flex', flexDirection:'column'}}>

                        
                              </div>      
                        </Grid>
                  </Hidden>  */}

                  <Grid id="mainContent" item xs={12} md={10}> 
                        <div style={{display:'flex', flexDirection:'column', }}>
                                    <Paper  style={{margin:'12px'}}>
                                          {'search results go here'}
                                    </Paper>
                        </div>
                  </Grid> 

            </Grid>
      )

      function doSearch(){
            let results
            if(moonIndex)
             results = moonIndex.search("king")
          //  setSearchResults(results)
      }




}




export default SearchResults