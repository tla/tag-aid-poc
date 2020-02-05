import React, { useState, useEffect} from 'react'
import { Grid } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import SectionList from './SectionList';
import ViewOptions from './ViewOptions';
import TextPane from './TextPane';
import SvgGraph from './SvgGraph'
import RankDisonance from './RankDisonance'
import { useParams} from 'react-router-dom'
import * as DataApi from '../../utils/Api';
import EditionHeader from './EditionHeader'
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import {withRouter} from 'react-router-dom';
import PreviousNext from './PreviousNext';
    
const Edition = ( props)=>{
      
      let {sectionID} = useParams()
      if(! sectionID)
            sectionID = "1019321"
      const {sections , viewport , witnesses} = props;
      const [selectedNode, setSelectedNode]=useState(null);
      const [selectedSentence, setSelectedSentence] = useState({});
      const [selectedRank, setSelectedRank] =  useState();
      const [personList, setPersonList] = useState([]);
      const [placeList, setPlaceList] = useState([]);
      const [dateList, setDateList] = useState([]);
      const [nodeHash, setNodeHash] =useState();
      const [nodeArray, setNodeArray] = useState([]);
      const [graphVisible, setGraphVisible] = useState(true);
      const [personsVisible, setPersonsVisible] = useState(false);
      const [placesVisible, setPlacesVisible] = useState(false);
      const [datesVisible, setDatesVisible] = useState(false);
      const [leftReading, setLeftReading] = useState('Lemma Text');
      const [rightReading, setRightReading] = useState('Translation');
      const [isExpanded, setIsExpanded] = useState(true);

      useEffect(()=>{
            setSelectedSentence(null);
            setSelectedNode(null);
            setSelectedRank(null);
       },[sectionID])

       useEffect(()=>{
            let hash={};
            const list = [];
            setNodeHash(hash)
            DataApi.getNodeLookup(sectionID, (nodelist)=>{
                  nodelist.sort( (a,b)=>{
                        if( parseInt(a.id) > parseInt(b.id))
                              return 1;
                        if(parseInt(a.id) < parseInt(b.id))
                              return -1
                        else 
                              return 0;
                  })
                 nodelist.forEach( (node)=>{
                       const value = 
                       {
                                    id: node.id,
                                    rank:node.rank,
                                    witnesses: node.witnesses
                        }
                        hash[node.id]= value;
                        list.push(value);
                        
                 });
                 setNodeHash(hash);
                 setNodeArray(list);
           });
      },[sectionID])

       useEffect(()=>{
             if(personsVisible)
            DataApi.getPersons(sectionID, (list)=>{
                  setPersonList(list)
            });
            else
                  setPersonList([])
       },[personsVisible, sectionID])
 
       useEffect(()=>{
            if(placesVisible)
                  DataApi.getPlaces(sectionID, (list)=>{
                        setPlaceList(list)
                  });
           else
                 setPlaceList([])
      },[placesVisible, sectionID])

      useEffect(()=>{
            if(datesVisible)
           DataApi.getDates(sectionID, (list)=>{
                 setDateList(list)
           });
           else
                 setDateList([])
      },[datesVisible, sectionID])
  
      let textContainerStyle={
            overflowY:'auto', 
            height: graphVisible ? `${viewport.height * .30}px`:`${viewport.height - 170}px`,
      }

      return (
            
            <Grid container={true} spacing={0} >

                   <Grid id="edition-header" item xs={12} >
                        <EditionHeader />
                  </Grid>  
             
                  <Hidden smDown>
                        <Grid item id="sideBar" md={2} >
                               <div >
                                     <ViewOptions 
                                          viewport = {viewport}
                                          witnesses = {witnesses}
                                          graphVisible={graphVisible}
                                          onToggleGraph={handleToggleGraph}
                                          personsVisible = {personsVisible}
                                          onTogglePersons = {handleTogglePersons}
                                          placesVisible = {placesVisible}
                                          onTogglePlaces = {handleTogglePlaces}
                                          datesVisible = {datesVisible}
                                          onToggleDates = {handleToggleDates}
                                          leftReading = {leftReading}
                                          rightReading = { rightReading }
                                          onSelectLeftReading={setLeftReading}
                                          onSelectRightReading={setRightReading}
                                          isExpanded = { isExpanded }
                                          setIsExpanded = { setIsExpanded }
                                    /> 
                              
                                    <div style={{height:'16px'}}></div>

                                  <SectionList 
                                         parentHeight={isExpanded ? ` ${viewport.height - 630}px` : ` ${viewport.height -216}px`}
                                          sectionId={sectionID}
                                          list ={sections}
                                     />  
                              </div> 
                  </Grid>
                  </Hidden> 

                  <Grid id="mainContent" item xs={12} md={10}> 
                        <div style={{display:'flex', flexDirection:'column', }}>
                              {sectionID && graphVisible &&
                                   
                                    <div>
                                          <div >
                                               <Paper  style={{margin:'12px',overflowX:'hidden', overflowY:'hidden',height:`${viewport.height *.30}px`}}
                                                >
                                                       <SvgGraph 
                                                            viewport={viewport}
                                                            sectionId={sectionID}
                                                            highlightedNode={selectedNode}
                                                            selectedSentence={selectedSentence}
                                                            selectedRank = {selectedRank}
                                                            nodeHash = {nodeHash}
                                                            nodeList = { nodeArray }
                                                            persons={personList}
                                                            places = {placeList}
                                                            dates = { dateList}
                                                            onSelectNode={handleSelectNode}
                                                            onSelectSentence={handleSelectSentence}
                                                      /> 

                                                </Paper>

                                          </div>
                                          <div > 
                                          <Paper style={{margin:'12px',overflowX:'auto'}}>
                                                <RankDisonance 
                                                      viewport = { viewport }
                                                      sectionId={sectionID}
                                                      highlightedNode = { selectedNode}
                                                      selectedSentence={selectedSentence}
                                                      selectedRank = { selectedRank}
                                                      onSelectRank = {handleSelectRank}
                                                /> 
                                          </Paper>
                                          </div>
                                    </div>
                                    
                              }

                              {sectionID &&
                                    <div style={textContainerStyle}>
                                          <Grid container  spacing={0}>

                                                <Grid item xs={12} >
                                                      <PreviousNext 
                                                            onPrevious ={ previousSection}
                                                            onNext = { nextSection}
                                                            sections = { sections}
                                                            sectionId = { sectionID }
                                                            />
                                                </Grid>  

                                                <Grid item xs={12} md={6}>
                                                      <TextPane 
                                                            sections = { sections}
                                                            sectionId={sectionID}
                                                            persons={personList}
                                                            places = {placeList}
                                                            dates = { dateList}
                                                            reading = {leftReading}
                                                            selectedNode={selectedNode}
                                                            selectedRank = { selectedRank }
                                                            selectedSentence={selectedSentence}
                                                            onSelectNode={handleSelectNode}
                                                            onSelectSentence={handleSelectSentence}
                                                      />
                                                </Grid>

                                                <Grid item xs={12} md={6}>
                                                      <TextPane 
                                                            sections = { sections}
                                                            sectionId={sectionID}
                                                            persons={personList}
                                                            places = {placeList}
                                                            dates = { dateList}
                                                            reading = { rightReading}
                                                            selectedNode={selectedNode}
                                                            selectedRank = { selectedRank }
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

      function handleSelectNode( node ){
            if( selectedNode)
                  if( node.nodeId === selectedNode.nodeId){
                        setSelectedNode(null);
                        setSelectedRank( null );
                        return;
                  }
                  setSelectedRank( node.rank)
                  setSelectedNode(node);
      }

      function handleSelectSentence( start, end ){
            const startRank = start.split('-')[0]
            const startNodeId = start.split('-')[1];
            const endRank = end.split('-')[0]
            const endNodeId = end.split('-')[1];

            if(selectedSentence){
                  if(selectedSentence.startId === startNodeId);
                        setSelectedSentence(null);
                        return;
            }
            
            setSelectedSentence({
                  'startRank': startRank,
                  'startId': startNodeId, 
                  endRank: endRank,
                  'endId': endNodeId,
           } );
      }
      function handleToggleGraph(){
            let toggled = !graphVisible;
            setGraphVisible(toggled)
      }
      function handleTogglePersons(){
            let toggled = !personsVisible;
            setPersonsVisible(toggled)
      }
      function handleTogglePlaces(){
            let toggled = !placesVisible;
            setPlacesVisible(toggled)
      }
      function handleToggleDates(){
            let toggled = !datesVisible;
            setDatesVisible(toggled)
      }

      function handleSelectRank(rank){
            if ( selectedRank && selectedRank === rank){
                  setSelectedRank(null);
                  setSelectedNode(null)
                  return;
            }
            setSelectedNode(null)
            setSelectedRank( rank)
      }

      function nextSection(){
            let index = sections.findIndex( s=>{ return s.sectionId === sectionID});
            if( index !== sections.length -1)
                  index++;
            const next = sections[index];
            props.history.push(`/Edition/${next.sectionId}`)
      }

      function previousSection(){
            let index = sections.findIndex( s=>{ return s.sectionId === sectionID});
            if( index !== 0)
                  index--;
            const previous = sections[index];
            props.history.push(`/Edition/${previous.sectionId}`)
      }

}
export default  withRouter(Edition)