import React from 'react';
import { Grid } from '@material-ui/core';
import EditionHeader from './EditionHeader'
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';

const SearchResults=(props)=>{

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
}
export default SearchResults