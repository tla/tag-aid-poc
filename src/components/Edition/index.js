import React, { useState, useEffect} from 'react'
import { Grid } from '@material-ui/core';
import SectionList from './SectionList';
import ViewOptions from './ViewOptions';
import TextPane from './TextPane';
import SvgGraph from './SvgGraph'
import HeatMap from './HeatMap/index'
import { useParams} from 'react-router-dom'
import * as DataApi from '../../utils/Api';

const Edition = ( props)=>{
      
      let {sectionID} = useParams()
      const {sections , viewport , witnesses} = props;
      const [selectedNode, setSelectedNode]=useState(null);
      const [selectedSentence, setSelectedSentence] = useState({});
      const [personList, setPersonList] = useState([]);
      const [placeList, setPlaceList] = useState([]);
      const [dateList, setDateList] = useState([]);
      const [nodeHash, setNodeHash] =useState();
      const [graphVisible, setGraphVisible] = useState(true);
      const [personsVisible, setPersonsVisible] = useState(false);
      const [placesVisible, setPlacesVisible] = useState(false);
      const [datesVisible, setDatesVisible] = useState(false);
      const [leftReading, setLeftReading] = useState('Lemma Text');
      const [rightReading, setRightReading] = useState('Translation');

      useEffect(()=>{
            setSelectedSentence(null);
             setSelectedNode(null);
       },[sectionID])

       useEffect(()=>{
            let hash={};
            setNodeHash(hash)
            DataApi.getNodeLookup(sectionID, (nodelist)=>{
                 nodelist.forEach( (node)=>{
                        hash[node.id]={
                                    rank:node.rank,
                                    witnesses: node.witnesses
                        }
                 });
                 setNodeHash(hash)
           });
      },[sectionID])

       useEffect(()=>{
             if(personsVisible)
            DataApi.getPersons(sectionID, (list)=>{
                  setPersonList(list)
            });
            else
                  setPersonList([])
       },[personsVisible])
 
       useEffect(()=>{
            if(placesVisible)
           DataApi.getPlaces(sectionID, (list)=>{
                 setPlaceList(list)
           });
           else
                 setPlaceList([])
      },[placesVisible])

      useEffect(()=>{
            if(datesVisible)
           DataApi.getDates(sectionID, (list)=>{
                 setDateList(list)
           });
           else
                 setDateList([])
      },[datesVisible])
  
      return (
            <Grid container spacing={1} >
                
                  <Grid id="sideBar" item xs={3}>
                              <div style={{display:'flex', flexDirection:'column', maxHeight:`${viewport.height *.85}px`}}>
                                    <ViewOptions
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
                                    <div style={{overflowX:'auto', overflowY:'auto'}}>
                                           {/* <SvgGraph 
                                                viewport={viewport}
                                                sectionId={sectionID}
                                                highlightedNode={selectedNode}
                                                selectedSentence={selectedSentence}
                                                nodeHash = {nodeHash}
                                                persons={personList}
                                                places = {placeList}
                                                dates = { dateList}
                                                onSelectNode={handleSelectNode}
                                                onSelectSentence={handleSelectSentence}
                                          />  */}
                                          <HeatMap 
                                                witnessCount = { witnesses.length}
                                                sectionId={sectionID}
                                                nodeHash = {nodeHash}
                                                activeNode = { selectedNode}
                                                selectedSentence={selectedSentence}
                                                activeWitness = { leftReading !== "Translation" ? leftReading : rightReading !== "Translation" ? rightReading : ''}
                                                onSetActiveNode = {()=>{}}
                                          />
                                    </div>
                              }

                                <div style={{height:'16px'}}></div>  
                             
                              {sectionID &&
                              <div style={{overflowY:'auto',maxHeight:`${viewport.height *.35}px`,padding:'0px 16px'}}>

                                    <Grid container spacing={4}>
                                          <Grid item xs={12} md={6}>
                                                <TextPane 
                                                      sections = { sections}
                                                      sectionId={sectionID}
                                                      persons={personList}
                                                      places = {placeList}
                                                      dates = { dateList}
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
                                                      persons={personList}
                                                      places = {placeList}
                                                      dates = { dateList}
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

      function handleSelectSentence( start, end ){
            const startRank = start.split('-')[0]
            const startNodeId = start.split('-')[1];
            const endRank = end.split('-')[0]
            const endNodeId = end.split('-')[1];
            
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

}
export default Edition