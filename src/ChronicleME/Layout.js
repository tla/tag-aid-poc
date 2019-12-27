import React from 'react'
import { Grid } from '@material-ui/core';

const Layout = ( props)=>{

      return (
            <Grid container spacing={1}>
                  <Grid id="header"  item xs={12}></Grid>
                  <Grid id="sideBar" item xs={3}>




                  </Grid>
                  <Grid id="mainContent" item xs={9}>
                        <Grid container spacing={1}>
                              <Grid id="graphPane" item xs={12}>

                              </Grid>
                              <Grid id="textPane" item xs={12}>

                                    
                              </Grid>





                        </Grid>



                  </Grid>




            </Grid>

       
      )

}
export default Layout