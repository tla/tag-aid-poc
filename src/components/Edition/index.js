import React, { useState, useEffect} from 'react'
import { Grid } from '@material-ui/core';
import SectionList from './SectionList';
import ViewOptions from './ViewOptions';
import TextPane from './TextPane';
import SvgGraph from './SvgGraph'
import { useParams} from 'react-router-dom'


const Edition = ( props)=>{
    
      const {sections , viewport , witnesses} = props;
      const [selectedNode, setSelectedNode]=useState();
      const [selectedSentence, setSelectedSentence] = useState();
      const [graphVisible, setGraphVisible] = useState(true);
      const [leftReading, setLeftReading] = useState('Lemma Text');
      const [rightReading, setRightReading] = useState('Translation');

      let {sectionID} = useParams()

      useEffect(()=>{
             setSelectedNode();
       },[sectionID])
 
  
      return (
            <Grid container spacing={1} >
                
                  <Grid id="sideBar" item xs={3}>
                              <div style={{display:'flex', flexDirection:'column', maxHeight:`${viewport.height *.85}px`}}>
                                    <ViewOptions
                                          witnesses = {witnesses}
                                          graphVisible={graphVisible}
                                          onToggleGraph={handleToggleGraph}
                                          leftReading = {leftReading}
                                          rightReading = { rightReading }
                                          onSelectLeftReading={setLeftReading}
                                          onSelectRightReading={setRightReading}
                                    />
                              
                                    <div style={{height:'16px'}}></div>

                                    <SectionList
                                          sectionId={sectionID}
                                          list ={sections}
                                   
                                     />
                              </div>
                  </Grid>
                  

                  <Grid id="mainContent" item xs={9}>
                        <div style={{display:'flex', flexDirection:'column', maxHeight:`${viewport.height *.85}px`}}>
                              {sectionID && graphVisible &&
                                    <div style={{overflowX:'auto', overflowY:'auto',maxHeight:`${viewport.height *.42}px`}}>
                                           <SvgGraph 
                                                viewport={viewport}
                                                sectionId={sectionID}
                                                highlightedNode={selectedNode}
                                                selectedSentence={selectedSentence}
                                                onSelectNode={handleSelectNode}
                                                onSelectSentence={handleSelectSentence}
                                          /> 
                                    </div>
                              }

                                <div style={{height:'16px'}}></div>  
                             
                              {sectionID &&
                              <div style={{overflowY:'auto',minHeight:`${viewport.height *.37}px`,padding:'0px 16px'}}>

                                    <Grid container spacing={4}>
                                          <Grid item xs={12} md={6}>
                                                <TextPane 
                                                      sections = { sections}
                                                      sectionId={sectionID}
                                                      reading = {leftReading}
                                                      selectedNode={selectedNode}
                                                      selectedSentence={selectedSentence}
                                                      onSelectNode={handleSelectNode}
                                                      onSelectSentence={handleSelectSentence}
                                                />
                                          </Grid>

                                          <Grid item xs={12} md={6}>
                                                <TextPane 
                                                      sections = { sections}
                                                      sectionId={sectionID}
                                                      reading = { rightReading}
                                                      selectedNode={selectedNode}
                                                      selectedSentence={selectedSentence}
                                                      onSelectNode={handleSelectNode}
                                                      onSelectSentence={handleSelectSentence}
                                                />
                                          </Grid>
                                    </Grid>
                              </div>
                              }
                        </div>
                  </Grid>

            </Grid>
      )

      function handleSelectNode( nodeId ){
            setSelectedNode(nodeId);
      }

      function handleSelectSentence( startNodeId, endNodeId ){
            setSelectedSentence({'start': startNodeId, 'end': endNodeId} );
      }

      function handleToggleGraph(){
            let toggled = !graphVisible;
            setGraphVisible(toggled)
      }

}
export default Edition