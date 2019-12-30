import React, {useEffect, useState} from 'react'
import { Grid } from '@material-ui/core';
import Header from './Header'
import SectionList from './SectionList';
import TextPane from './TextPane';
import SvgGraph from './SvgGraph'

const Layout = ( props)=>{

      const {sections} = props;
      const [selectedSection, setSelectedSection] = useState();
      const [selectedNode, setSelectedNode]=useState();


      return (
            <Grid container spacing={1}>
                  <Grid id="header"  item xs={12}>
                        <Header  />
                  </Grid>
                  <Grid id="sideBar" item xs={4}>
                         <SectionList
                             list ={sections}
                             onSelect = { handleSelectSection}

                        /> 
                  </Grid>
                  <Grid id="mainContent" item xs={8}>
                        <Grid container spacing={1}>
                              <Grid id="graphPane" item xs={12}>
                                    <div style={{overflowX:'scroll'}}>
                                 {selectedSection &&
                                    <SvgGraph 
                                         onSelectNode={setSelectedNode}
                                         sectionId={selectedSection.id}
                                         nodeId={selectedNode}
                                         
                                    />
                                 }
                                  </div>
                              </Grid>
                              <Grid id="textPane" item xs={12}>
                                    {selectedSection &&
                                          <TextPane 
                                                sectionId={selectedSection.id}
                                                nodeId={selectedNode}
                                                onSelectNode={setSelectedNode}
                                                // activeWitness={section.activeWitness}
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