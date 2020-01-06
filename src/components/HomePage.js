import React from 'react';
import TextPane from './Edition/TextPane'
import Typography from '@material-ui/core/Typography'

export default function HomePage() {
    return (
        <div id="home-page">
            <div id="introduction">
                  <Typography variant="body1">
                  <p>The <i>Chronicle</i> (Ժամանակագրութիւն) of Mattʿēos Uṙhayecʿi, known to most 
                  Western historians as Matthew of Edessa, was completed sometime before 1137 
                  and covers events between the Armenian years 401 and 577 (April 952–February 1129). 
                  Matthew was a monk, an elder (erecʿ) in a monastery in Edessa, born perhaps in the third 
                  quarter of the eleventh century. His work was continued by Grigor, a priest living in the nearby 
                  town of Kesun, who provides information about events in the Armenian years 
                  585–611 (February 1136–February 1163) as well. The Chronicle of Uṙhayecʿi is 
                  traditionally divided into three books covering respectively the Armenian years 401-500, 500–550, 
                  and 550–577, plus the continuation of Grigor.</p>
                <p>More information about the edition can be found in the menu bar above; 
                      alternatively, you can begin reading the text below.</p>



                  </Typography>
               
            </div> 
            <div style={{display:'flex', justifyContent:'center',margin:'24px 0px'}}>
                        <img src="images/edessa_line.png" style={{width:'70%'}}  />
            </div>  
            <div style={{display:'flex',justifyContent:'center'}}>
                  <TextPane
                    sectionId={1019321}
                  />
            </div>         
        </div>
    )
}