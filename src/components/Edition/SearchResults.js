import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import EditionHeader from './EditionHeader'
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import * as DataApi from '../../utils/Api';
import lunr from 'lunr';
import documents from './LunrData'
import Typography from '@material-ui/core/Typography';


const SearchResults=(props)=>{

      const {searchTerm, onSearch} = props;
      const [ lunrResults, setLunrResults] = useState([]);
  

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
                        <div style={{display:'flex',justifyContent:'center'}}>
                        <Paper  style={{margin:'12px',width:'80%'}}>
                              { 
                                    lunrResults.map( (r) => {
                                    let value = documents.find(d => { return d.sectionId === r.ref }).text     

                                       return (
                                             <div key={r.ref} style={{marginBottom:'16px'}}>
                                                   <Typography variant="body1">
                                                            {value}
                                                   </Typography>
                                             </div>
                                       )
                                    })
                              }
                        </Paper>
                        </div>
                  </Grid>  

            </Grid>
      )

    

}




export default SearchResults