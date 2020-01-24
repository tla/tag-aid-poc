import React, { useState, useEffect} from 'react'
import { Grid } from '@material-ui/core';
import SectionList from './SectionList';
import ViewOptions from './ViewOptions';
import TextPane from './TextPane';
import SvgGraph from './SvgGraph'
import HeatMap from './HeatMap'
import RankDisonance from './RankDisonance'
import { useParams} from 'react-router-dom'
import * as DataApi from '../../utils/Api';
import EditionHeader from './EditionHeader'

const Edition = ( props)=>{
      
      let {sectionID} = useParams()
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
                 console.log( 'set node hash for section', sectionID)
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
            
            <Grid container spacing={1} style={{height:`${viewport.height}px`}}>

                  <Grid id="edition-header" item xs={12} >
                        <EditionHeader />
                  </Grid>
                
                  <Grid id="sideBar" xs={0} md={2}>
                              <div style={{display:'flex', flexDirection:'column', }}>
                                    <ViewOptions style={{maxHeight:'400px'}}
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
                                          parentHeight={isExpanded ? ` ${viewport.height - 480}px` : ` ${viewport.height - (viewport.height * .20)}px`}
                                          sectionId={sectionID}
                                          list ={sections}
                                     />
                              </div>
                  </Grid>
                  

                  <Grid id="mainContent" item xs={12} md={10}>
                        <div style={{display:'flex', flexDirection:'column', }}>
                              {sectionID && graphVisible &&
                                    <div>
                                    <div style={{overflowX:'auto', overflowY:'auto',maxHeight:`${viewport.height *.40}px`}}>
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
                                    </div>
                                     <div style={{overflowX:'auto', overflowY:'auto',maxHeight:`${viewport.height *.20}px`}}> 
                                          <RankDisonance 
                                                witnessCount = { witnesses.length}
                                                sectionId={sectionID}
                                                nodeHash = {nodeHash}
                                                activeNode = { selectedNode}
                                                selectedSentence={selectedSentence}
                                                selectedRank = { selectedRank}
                                                activeWitness = { leftReading !== "Translation" ? leftReading : rightReading !== "Translation" ? rightReading : ''}
                                                onSelectRank = {handleSelectRank}
                                          />
                                    </div>
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
      function handleSelectRank(rank){
            console.log( `you selected rank`, rank)
            setSelectedRank( rank)
      }

}
export default Edition