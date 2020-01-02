import React, {useEffect, useState} from 'react'
import { Grid } from '@material-ui/core';
import SectionList from './SectionList';
import ViewOptions from './ViewOptions';
import TextPane from './TextPane';
import SvgGraph from './SvgGraph'



const Edition = ( props)=>{
    
      const {sections , height } = props;
      const [selectedSection, setSelectedSection] = useState();
      const [selectedNodes, setSelectedNodes]=useState([]);
      const [graphVisible, setGraphVisible] = useState(true)

      return (
            <Grid container spacing={1} >
                
                  <Grid id="sideBar" item xs={3}>
                        <Grid container spacing={2}>
                              <Grid id="viewOptions" item xs={12}>
                                    <ViewOptions
                                          graphVisible={graphVisible}
                                          onToggleGraph={handleToggleGraph}
                                    />
                              </Grid>
                              <Grid id="section list" item xs={12}>
                                    <SectionList
                                          height={height}
                                          sectionId={selectedSection? selectedSection.id : null}
                                          list ={sections}
                                          onSelect = { handleSelectSection}
                                          />
                              </Grid> 
                        </Grid>
                  </Grid>
                  

                  <Grid id="mainContent" item xs={9}>
                        <Grid container spacing={1}>
                              <Grid id="graphPane" item xs={12}>
                                    <div style={{overflowX:'auto'}}>
                                 {selectedSection && graphVisible &&
                                    <SvgGraph 
                                         onSelectNode={handleSelectNode}
                                         sectionId={selectedSection.id}
                                         selectedNodes={selectedNodes}
                                         
                                    />
                                 }
                                  </div>
                              </Grid>
                              <Grid id="textPane" item xs={12}>
                                    {selectedSection &&
                                          <TextPane 
                                                sectionId={selectedSection.id}
                                                selectedNodes={selectedNodes}
                                                onSelectNode={handleSelectNode}
                                                onDeselectNode={handleDeselectNode}
                                                // activeWitness={section.activeWitness}
                                                // onSetActiveWitness={()=>{}}

                                          />
                                    }
                                    
                              </Grid>

                        </Grid>

                  </Grid>

            </Grid>
      )

      function handleSelectNode( nodeId ){
            let copySelectedNodes = selectedNodes.slice();
            copySelectedNodes.push(nodeId);
            setSelectedNodes(copySelectedNodes);
      }

      function handleDeselectNode( nodeId){
            let copySelectedNodes = selectedNodes.slice();
            let index = copySelectedNodes.indexOf(nodeId)
            copySelectedNodes.splice(index,1)
            setSelectedNodes(copySelectedNodes);
      }

      function handleSelectSection( section ){
            setSelectedSection(section);
            setSelectedNodes([])
      }
      function handleToggleGraph(){
            let toggled = !graphVisible;
            setGraphVisible(toggled)
      }

}
export default Edition