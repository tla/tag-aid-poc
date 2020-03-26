import React, {useEffect, useState} from 'react'
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Header from '../Header';
import {withRouter} from 'react-router-dom';
import { useParams} from 'react-router-dom'
import { PushSpinner } from "react-spinners-kit"


const ManuscriptViewClientParse = ( props ) =>{
      const {viewport} = props
      let {manuscriptId} = useParams()
      if(! manuscriptId)
            manuscriptId = "Bz430";

      const [loading, setIsLoading] = useState(true)

      useEffect( ()=>{
            let c = new window.CETEI();
            let behaviors = {
              "tei": {
                "head": function(e) {
                  let level = document.evaluate("count(ancestor::tei-div)", e, null, XPathResult.NUMBER_TYPE, null);
                  let result = document.createElement("h" + (level.numberValue>7 ? 7 : level.numberValue));
                  for (let n of Array.from(e.childNodes)) {
                    result.appendChild(n.cloneNode());
                  }
                  return result;
                },
                "lb": ["<br>"],
                /* Insert a <p> with the content of the <pb>'s @n attribute inside it
                   Add a line above with CSS */
                "pb": ["<p class=\"break\">$@n</p>"],
              }
            };
            c.addBehaviors(behaviors);
            c.getHTML5(`images/mss/${manuscriptId}/${manuscriptId}.tei.xml`, function(data){
                  let x = data;
              document.getElementById('textContainer').appendChild(data);
              setIsLoading(false)
            })

      },[])

return (

      <Grid container >
             <Grid item>
                        <Header  />
            </Grid>
            
            <Grid item xs={12} >
                  <Grid container alignItems="center" direction="column" style={{height: `${viewport.height - 354}px`}}>
                  <div style={{height:'100px'}}>

                  </div>
                   <PushSpinner size={30} color="#6f42c1" loading={loading} style={{marginTop:'100px'}}/>

                        <Typography id="textContainer" variant="h6" style={{margin:"12px 100px", overflowY:'scroll'}}>
                           
                        </Typography>
                        
                  </Grid>
            </Grid>

      </Grid>
)


}
export default withRouter(ManuscriptViewClientParse)