import React from 'react';
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core';
import Navigation from './../Navigation'

const EditionHeader = ( props)=>{

      const {onSearch} = props;
     
      return (
            
      <Grid container spacing={0} style={{maxHeight:'112px'}}>
                  <Grid item xs={12} className="header" >
                        <Typography variant="h5" style={{padding:'12px 42px'}}>
                              The Chronicle of Matthew of Edessa
                        </Typography>
                  </Grid>
                  <Grid item xs={12}>
                              <Navigation  onSearch={onSearch} />
                  </Grid>
            
      </Grid>
      )

}
export default EditionHeader