import React, { useState} from 'react'
import { Grid } from '@material-ui/core';
import SectionList from './SectionList';
import ViewOptions from './ViewOptions';
import TextPane from './TextPane';
import SvgGraph from './SvgGraph'
import { useParams} from 'react-router-dom'


const Edition = ( props)=>{
    
      const {sections , viewport } = props;
      const [selectedSection, setSelectedSection] = useState();
      const [selectedNodes, setSelectedNodes]=useState([]);
      const [graphVisible, setGraphVisible] = useState(true);

    
      let {sectionID} = useParams();
    
      return (
            <Grid container spacing={1} >
                
                  <Grid id="sideBar" item xs={3}>
                              <div style={{display:'flex', flexDirection:'column', maxHeight:`${viewport.height *.85}px`}}>
                                    <ViewOptions
                                          graphVisible={graphVisible}
                                          onToggleGraph={handleToggleGraph}
                                    />
                              
                                    <div style={{height:'16px'}}></div>

                                    <SectionList
                                          sectionId={sectionID}
                                          list ={sections}
                                          onSelect = { handleSelectSection}
                                     />
                              </div>
                  </Grid>
                  

                  <Grid id="mainContent" item xs={9}>
                        <div style={{display:'flex', flexDirection:'column', maxHeight:`${viewport.height *.85}px`}}>
                              {sectionID && graphVisible &&
                                    <div style={{overflowX:'auto', overflowY:'auto',minHeight:`${viewport.height *.42}px`}}>
                                          <SvgGraph 
                                                viewport={viewport}
                                                sectionId={sectionID}
                                                selectedNodes={selectedNodes}
                                                onSelectNode={handleSelectNode}
                                                onDeselectNode={handleDeselectNode}
                                          />
                                    </div>
                              }

                                <div style={{height:'16px'}}></div>  
                             
                              {sectionID &&
                              <div style={{overflowY:'auto',minHeight:`${viewport.height *.37}px`}}>
                                    <TextPane 
                                          sectionId={sectionID}
                                          selectedNodes={selectedNodes}
                                          onSelectNode={handleSelectNode}
                                          onDeselectNode={handleDeselectNode}
                                          // activeWitness={section.activeWitness}
                                          // onSetActiveWitness={()=>{}}
                                    />
                              </div>
                              }
                        </div>
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