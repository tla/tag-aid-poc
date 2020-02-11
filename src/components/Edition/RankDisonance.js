import React, {useState, useEffect} from "react";
import * as DataApi from '../../utils/Api';
import {VictoryChart, VictoryBar, VictoryContainer,
VictoryTooltip, VictoryAxis ,  } from 'victory'


const RankDisonance = (props)=> {

      const { 
            sectionId, 
            highlightedNode,
            selectedRank, 
            selectedSentence, 
            onSelectRank,  
            viewport
          } = props;
      const [chartData, setChartData] = useState();
     
      useEffect(()=>{
            setChartData([]);
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

            const formatedForChart = generateChartData(report);
            setChartData(formatedForChart)
            });
      },[sectionId])

      const xaxisStyle = {
            grid:    {stroke:  "transparent", } ,
            axis: { stroke: "grey" },
            ticks: { stroke: "transparent" },
            tickLabels: { fill: "none" }
      };

      const yaxisStyle = {
            grid:    {stroke:  "#E9E4E8", } ,
            axis: { stroke: "grey" },
            ticks: { stroke: "grey" },
            tickLabels: {fontSize: 5},
      };

      return (
            <div style={{ height:viewport.height * .18, display:'flex', flexDirection:'column', justifyContent:'center'}}>
            {
                  chartData &&  
               
                          <div   style={{height:'144'}}>
                        <VictoryChart
                              title="Rank Disonance"
                              domainPadding={{ x: 6 }}
                              padding={{ top: 6, bottom: 3, left: 34, right: 12 }}
                              containerComponent={<VictoryContainer responsive={true} 
                              /> }
                           height={50}
                              width={400}
                              scale={{ x: "linear", y: "linear" }}
                              >
                                    <VictoryAxis  crossAxis style={xaxisStyle}></VictoryAxis>
                                    <VictoryAxis  dependentAxis style={yaxisStyle} 
                                             ></VictoryAxis>
                                          <VictoryBar
                                                style={{
                                                      data: { 
                                                            fill: ({datum})=>  getBarColor(datum) 
                                                            },
                                                      parent: { border: "1px solid #ccc"},
                                                }}
                                                barRatio={.7}
                                                data={chartData}
                                                labels={({ datum }) => datum.label}
                                                events = {[
                                                      {
                                                            childName: "bar",
                                                            target: "data",
                                                            eventHandlers: {
                                                                  onClick: (event, props, key)=>{
                                                                        return  onSelectRank(key)
                                                                  }// end onClick
                                                            }// end event handlers</VictoryChart>
                                                      }
                                                ]}
                                                labelComponent={
                                                      <VictoryTooltip   />
                                                      }
                                          ></VictoryBar>
                        </VictoryChart>
                        </div>
          
            }
            </div>
            );
           

            function getBarColor(datum){
                  let color= "#550C18";
                  if(selectedSentence){
                        if(datum.x >= selectedSentence.startRank && datum.x <= selectedSentence.endRank)
                              color="yellow"
                  }
                  if( highlightedNode ) {
                        if( datum.x.toString() === highlightedNode.rank.toString() ){
                              color="#00a600";
                              return color;
                        }
                  }
                  if( selectedRank ) {
                        if( datum.x.toString() === selectedRank.toString() ){
                              color="#00a600";
                              return color;
                        }
                  }
                  return color;
            }

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
