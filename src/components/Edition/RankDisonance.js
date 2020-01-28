import React, {useState, useEffect} from "react";
import * as DataApi from '../../utils/Api';
import {VictoryChart, VictoryBar, VictoryContainer, VictoryTheme,
VictoryTooltip, VictoryAxis , VictoryLabel, VictorySelectionContainer, } from 'victory'




const RankDisonance = (props)=> {

      const { 
            sectionId, 
            activeNode,
            selectedRank, 
            selectedSentence, 
            onSelectRank,  
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
            
          };


      return (
            <div style={{height:'155px'}}>
            {
                  chartData &&    
                  <VictoryChart
                        title="Rank Disonance"
                       height={150}
                       domainPadding={{ x: 6 }}
                        padding={{ top: 6, bottom: 3, left: 40, right: 12 }}
                        containerComponent={<VictoryContainer responsive={false} /> }
                        width={chartData.length * 15 + 100}
                        scale={{ x: "linear", y: "linear" }}
                        >
                                <VictoryAxis  crossAxis style={xaxisStyle}></VictoryAxis>
                                <VictoryAxis tickCount = {6} dependentAxis style={yaxisStyle} 
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
                                                      // return [
                                                      //       {
                                                      //             eventKey:[lastSelected],
                                                      //             mutation: () => {
                                                      //                   return { style: { fill: "#550C18"} };
                                                      //             }   
                                                      //       },
                                                      //       {
                                                      //             mutation: () => {
                                                      //                   return { style: { fill: selectedFill} };
                                                      //             }// end mutation
                                                      //       }// end second onclick handler
                                                      // ]
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
           

            function getBarColor(datum){
                  let color= "#550C18";
                  if(selectedSentence){
                        if(datum.x >= selectedSentence.startRank && datum.x <= selectedSentence.endRank)
                              color="yellow"
                  }
                  if( activeNode ) {
                        if( datum.x.toString() === activeNode.rank.toString() ){
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
