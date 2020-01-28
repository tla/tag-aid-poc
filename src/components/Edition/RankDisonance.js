import React, {useState, useEffect} from "react";
import * as DataApi from '../../utils/Api';
import {VictoryChart, VictoryBar, VictoryContainer, VictoryTheme,
VictoryTooltip, VictoryAxis , VictoryLabel, VictorySelectionContainer, } from 'victory'




const RankDisonance = (props)=> {

      const { sectionId, 
            activeWitness,  
            selectedRank, 
            selectedSentence, 
            onSelectRank,  
            nodeHash, 
            viewport} = props;
      const [highlightList, setHighlightList] = useState([])
     // const [rankReport, setRankReport] = useState([]); // rank report fetches the data, onSectionChange and feeds the histogram;
      const [chartData, setChartData] = useState();
      const [lastSelected, setLastSelected] = useState();

      useEffect( ()=>{
            setLastSelected(selectedRank)
      }, [selectedRank])

      // highlight list
      useEffect(()=>{
            if( ! nodeHash)
                  return;
            setHighlightList([]);
            const highlights = [];
           for ( const n in nodeHash){
                  let id = n.id;
                  let rank = n.rank;
                  if(selectedSentence){
                        if( rank >= selectedSentence.startRank && rank <= selectedSentence.endRank ){
                              highlights.push({id:id, rank:rank})
                        }
                  }
            }
            setHighlightList(highlights)
      },[sectionId, selectedSentence])

      // rank report - for histogram
      useEffect(()=>{
           // setRankReport([]);
            setChartData(null);
            DataApi.getRankReport(sectionId, (report)=>{
                  report.sort( (a,b)=> {
                        if(a.rank > b.rank)
                              return 1;
                        if( a.rank < b.rank)
                              return -1
                        else 
                              return 0;
                  })
           // setRankReport( report ) ;

            const formatedForChart = generateChartData(report);
            setChartData(formatedForChart)
            });
      },[sectionId])

      // sentence selected
      useEffect(()=>{
            if( ! nodeHash)
                  return;
            setHighlightList([]);
            const highlights=[];
            if(selectedSentence){
                  for ( const n in nodeHash ){
                        if( n.rank >= selectedSentence.startRank && n.rank <= selectedSentence.endRank ){
                              highlights.push({id:n.id, rank:n.rank})
                        }
                  }
                  setHighlightList(highlights)
            }
            
      }, [selectedSentence])
    
      const xaxisStyle = {
            grid:    {stroke:  "transparent", } ,
            axis: { stroke: "grey" },
            ticks: { stroke: "transparent" },
            tickLabels: { fill: "none" }
          };
          const yaxisStyle = {
            grid:    {stroke:  "transparent", } ,
            axis: { stroke: "grey" },
            ticks: { stroke: "grey" },
            tickLabels: { fill: "none" }
          };
      return (
            <div style={{height:'155px'}}>
            {
                  chartData &&    
                  <VictoryChart
                  title="Rank Disonance"
                       height={150}
                       domainPadding={{ x: 20 }}
                 padding={{ top: 3, bottom: 3, left: 60, right: 12 }}
                        containerComponent={<VictoryContainer responsive={false} /> }
                        width={chartData.length * 15 + 100}
                       domainPadding={{x:20}}
                        scale={{ x: "linear", y: "linear" }}
                        >
                                <VictoryAxis  crossAxis style={xaxisStyle}></VictoryAxis>
                                <VictoryAxis tickCount = {6} dependentAxis style={yaxisStyle} 
                                          ></VictoryAxis>
                        <VictoryBar
                              style={{
                                    data: { stroke: "#c43a31" , fill:"#550C18"},
                                    parent: { border: "1px solid #ccc"},
                                   
                              }}
                             
                              
                           barRatio={.8}
                              data={chartData}
                              labels={({ datum }) => datum.label}
                              events = {[
                                    {
                                          childName: "bar",
                                          target: "data",
                                          eventHandlers: {
                                                onClick: (event, props, key)=>{
                                                      let selectedFill = lastSelected? lastSelected.toString() === key.toString() ? "#550C18" : "#00a600" : "#00a600";
                                                      if( selectedFill === "#550C18") // its a deselect
                                                            onSelectRank(null)
                                                      else
                                                            onSelectRank(key)
                                                      return [
                                                            {
                                                                  eventKey:[lastSelected],
                                                                  mutation: () => {
                                                                        return { style: { fill: "#550C18"} };
                                                                  }   
                                                            },
                                                            {
                                                                  mutation: () => {
                                                                        return { style: { fill: selectedFill} };
                                                                  }// end mutation
                                                            }// end second onclick handler
                                                      ]
                                                }// end onClick
                                          }// end event handlers</VictoryChart>

                                    }
                              ]}
                              labelComponent={
                                    <VictoryTooltip   />
                              }
                              >

               
                        </VictoryBar>

                  </VictoryChart>
            }
            </div>
            );
       
            // to do let generator script do this
            function generateChartData( report ) {
                  let data = [];
                  report.forEach( item  =>{
                        const dataPoint = {
                              x: item.rank,
                              y: item.instances,
                              label: `${item.rank}`
                        }
                        data.push( dataPoint );
                  })
                  return data;
            }
            
         
        
}


export default RankDisonance;
