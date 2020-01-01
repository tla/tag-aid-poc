import React, {useEffect, useState} from 'react'
import { Grid } from '@material-ui/core';
import Header from './Header'
import SectionList from './SectionList';
import ViewOptions from './ViewOptions';
import TextPane from './TextPane';
import SvgGraph from './SvgGraph'

const Layout = ( props)=>{

      const {sections} = props;
      const [selectedSection, setSelectedSection] = useState();
      const [selectedNode, setSelectedNode]=useState();
      const [graphVisible, setGraphVisible] = useState(true)


      return (
            <Grid container spacing={1}>
                  <Grid id="header"  item xs={12}>
                        <Header  />
                  </Grid>
                  <Grid id="sideBar" item xs={4}>
                        <Grid container spacing={2}>
                              <Grid id="viewOptions" item xs={12}>
                                    <ViewOptions
                                          graphVisible={graphVisible}
                                          onToggleGraph={handleToggleGraph}
                                    />
                              </Grid>
                              <Grid id="section list" item xs={12}>
                                    <SectionList
                                          sectionId={selectedSection? selectedSection.id : null}
                                          list ={sections}
                                          onSelect = { handleSelectSection}
                                          />
                              </Grid> 
                        </Grid>
                  </Grid>
                  




                  <Grid id="mainContent" item xs={8}>
                        <Grid container spacing={1}>
                              <Grid id="graphPane" item xs={12}>
                                    <div style={{overflowX:'auto'}}>
                                 {selectedSection && graphVisible &&
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
      function handleToggleGraph(){
            let toggled = !graphVisible;
            setGraphVisible(toggled)
      }

}
export default Layout