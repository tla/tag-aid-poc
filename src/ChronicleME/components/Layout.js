import React, {useEffect, useState} from 'react'
import { Grid } from '@material-ui/core';
import SectionList from './SectionList';
import TextPane from './TextPane';

const Layout = ( props)=>{

      const {sections} = props;
      const [selectedSection, setSelectedSection] = useState();


      return (
            <Grid container spacing={1}>
                  <Grid id="header"  item xs={12}></Grid>
                  <Grid id="sideBar" item xs={4}>
                         <SectionList
                             list ={sections}
                             onSelect = { handleSelectSection}

                        /> 
                  </Grid>
                  <Grid id="mainContent" item xs={8}>
                        <Grid container spacing={1}>
                              <Grid id="graphPane" item xs={12}>

                              </Grid>
                              <Grid id="textPane" item xs={12}>
                                    {selectedSection &&
                                          <TextPane 
                                                sectionId={selectedSection.id}
                                                // activeNode={section.activeNode}
                                                // activeWitness={section.activeWitness}
                                                // onSetActiveNode={()=>{}}
                                                // onSetActiveWitness={()=>{}}
                                                // highlightedNodes={[]}
                                          />
                                    }
                                    
                              </Grid>





                        </Grid>



                  </Grid>




            </Grid>

       
      )

      function handleSelectSection( section ){
            setSelectedSection(section);
      }

}
export default Layout