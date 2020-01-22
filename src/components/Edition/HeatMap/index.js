import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import * as DataApi from '../../../utils/Api';
import { NotificationEnhancedEncryption } from "material-ui/svg-icons";


const HeatMap = (props)=> {

      const { sectionId, activeWitness,  activeNode, selectedSentence, onSetActiveNode,  nodeHash, witnessCount} = props;
      const [highlightList, setHighlightList] = useState([])
      const [rankReport, setRankReport] = useState([]);
      const [ranksCounted, setRanksCounted] = useState([]);
      const [renderCount, setRenderCount] = useState(0);

      // bogus just for testing
      useEffect(()=>{
            let count = renderCount;
            count++
            setRenderCount(count);
      },[selectedSentence, activeNode])

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
            setRankReport([]);
            DataApi.getRankReport(sectionId, (report)=>{
                  report.sort( (a,b)=> {
                        if(a.rank > b.rank)
                              return 1;
                        if( a.rank < b.rank)
                              return -1
                        else 
                              return 0;
                  })
            setRankReport( report ) ;
            });
      },[sectionId])

      useEffect(()=>{
            if( ! nodeHash)
                  return;
            setHighlightList([]);
            const highlights=[];
            for ( const n in nodeHash ){
                        if( n.rank >= selectedSentence.startRank && n.rank <= selectedSentence.endRank ){
                              highlights.push({id:n.id, rank:n.rank})
                        }
                  }
            setHighlightList(highlights)
      }, [selectedSentence])

    

      return (
            <div style={{height:'330px'}}>
            
                   <div className={cx({heatmap: true})}> 
                       
                        <svg  width="700px" viewBox="0 0 100 31">
                        { 
                                    // make a spike in the graph for each word  -
                                    // rank count corresponds to how many differnt nodes where at that position( aka rank )

                                    rankReport.map((node) => { 
                                       
                                          const multiplyer = 100/rankReport.length ;
                                          let isHighlighted = false;
                                          // if( highlightList)                              
                                          //       isHighlighted = highlightList.find( h => { return h.rank === index})
                                          
                                          const left =   `${ (node.rank * multiplyer) - multiplyer},31 `;
                                          console.log( 'left',left );
                                          const point = `${(node.rank * multiplyer) - (multiplyer/2)}, ${31 - parseInt(node.instances) } `;
                                         // console.log( point );
                                          const right = `${node.rank * multiplyer},31` 
                                         // console.log( right)

                                          if( node.rank > 0 ){
                                                console.log( 'rank ', node.rank)
                                                return (<polygon className={isHighlighted ? "highlighted" :""} 
                                                      key={node.rank}
                                                      onClick={ ()=>{handleRankClick(node.rank) } }
                                                      points={ 
                                                                  `${left} ${point} ${right}` 
                                                            
                                                            } 
                                                      />);
                                          }
                                    }) 
                                  
                              }





                       
{/* 
                              { 
                                    
                                    nodeList.map((node) => {//  realAmt = the count , and rank == the index of the ranksCounted object which is rank
                                          let amt = 1;//realAmt === 1 ? 1 : realAmt * 3;
                                          let rank = node.rank;
                                          let totalNodes = nodeList.length;
                                          
                                          let isHighlighted = false;
                                          if( highlightList)
                                                isHighlighted = highlightList.find( h => { return h.rank === rank})
                                          return (<polygon 
                                                key={rank}
                                                onClick={ ()=>{handleRankClick(rank) } }
                                                points={
                                                            `${500 / totalNodes * rank},16 ` 
                                                            + `${(500 / totalNodes * rank) + (500 / totalNodes)},16 ` 
                                                            + `${(500 / totalNodes * rank) + ((500 / totalNodes) / 2)}, ${16 - (amt)}`
                                                      } 
                                                />);
                                    }) 
                                  
                              }
                                */}
                               {
                               highlightList.length ?
                                    <polygon className="highlighted" points={
                                          `${500 / ranksCounted.length * highlightList[0].rank - 3},18.5 ` +
                                          `${500 / ranksCounted.length * highlightList[0].rank },16 ` +
                                          `${500 / ranksCounted.length * highlightList[0].rank },21`} />
                                    : null
                               }
                              {
                                    highlightList.length ?
                                    <polygon className="highlighted" points={
                                          `${500 / ranksCounted.length * highlightList[highlightList.length -1].rank + 3},18.5 ` +
                                          `${500 / ranksCounted.length * highlightList[highlightList.length -1].rank },16 ` +
                                          `${500 / ranksCounted.length * highlightList[highlightList.length -1].rank },21`} />
                                    : null
                              } 
                        </svg>
                   </div> 
            </div>
            );
            
    
            
            function handleRankClick(rankIdx) {
                  for(let rank = rankIdx; rank > 0; rank--) {
                        let found = this.props.activeWitness.readings.filter((reading) => reading.rank === rank);
                        if(found.length) { return onSetActiveNode(found[0].id); }
                  }
            }

            function countRanks( nodes ){
                  let rankCounts = {};
                  nodes.forEach( n=>{
                        rankCounts[n.rank] = (rankCounts[n.rank] || 0 ) + 1 ;
                  })
                  setRanksCounted(rankCounts);
            }
	
}

HeatMap.propTypes = {
	text: PropTypes.object,
  activeNode: PropTypes.string,
  activeWitness: PropTypes.string,
  onSetActiveNode: PropTypes.func,
	highlightedNodes: PropTypes.array
};

export default HeatMap;
