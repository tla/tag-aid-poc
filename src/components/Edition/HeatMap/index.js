import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import * as DataApi from '../../../utils/Api';


const HeatMap = (props)=> {

      const { sectionId, activeWitness,  activeNode, selectedSentence, onSetActiveNode,  nodeHash} = props;
      const [highlightList, setHighlightList] = useState([])
      const [nodeList, setNodeList] = useState();
      const [ranksCounted, setRanksCounted] = useState([]);
      const [renderCount, setRenderCount] = useState(0);

      // bogus just for testing
      useEffect(()=>{
            let count = renderCount;
            count++
            setRenderCount(count);
      },[selectedSentence, activeNode])

      useEffect(()=>{
            setNodeList([]);
            DataApi.getReading(sectionId,activeWitness, (html)=>{
                  let nodes = [];
                  let highlights = [];
                  let container = window.document.createElement("div")
                  container.innerHTML = html;
                  let wordNodes = container.querySelectorAll("span");
                  wordNodes.forEach( n=>{
                        let id = n.attributes.id.nodeValue;
                        let rank = n.attributes.key.nodeValue;
                        nodes.push({id:id, rank:rank})
                        if(selectedSentence.startRank){
                              if( rank >= selectedSentence.startRank && rank <= selectedSentence.endRank ){
                                    highlights.push({id:id, rank:rank})
                              }
                        }
                  })

                  setNodeList(nodes) // this probably needs to be a json file - not the html but - for now 
                  setHighlightList(highlights)
                  countRanks(nodes);
            });
      },[sectionId, activeWitness])

      useEffect(()=>{
            if(!nodeList)
            return;
            setHighlightList([]);
            const highlights=[];
            nodeList.forEach( n=>{
                  if( n.rank >= selectedSentence.beginRank && n.rank <= selectedSentence.endRank ){
                        highlights.push({id:n.id, rank:n.rank})
                  }
            })
            setHighlightList(highlights)
            countRanks(nodeList);
      }, [selectedSentence])

      useEffect(()=>{
            if(!nodeList)
            return;
           
            countRanks(nodeList);
      }, [activeNode])



            
      return (
            <div style={{height:'300px'}}>
                   {`this is pure bolox ${renderCount}`}
			 <div className={cx({heatmap: true, "top-aligned": activeNode ? false: true})}> 
                       
				<svg style={{width: "100%"}} viewBox="0 0 500 21">
                          { /*{ 
                                    ranksCounted.length ?
                                    ranksCounted.map((realAmt, rank) => {//  realAmt = the count , and rank == the index of the ranksCounted object which is rank
                                          let amt = realAmt === 1 ? 1 : realAmt * 3;
                                          return (<polygon className={cx({highlighted: highlightList.includes(rank)})}
                                                key={rank}
                                                onClick={ ()=>{handleRankClick(rank) } }
                                                points={`${500 / ranksCounted.length * rank},16 ` +
                                                `${(500 / ranksCounted.length * rank) + (500 / ranksCounted.length)},16 ` +
                                                `${(500 / ranksCounted.length * rank) + ((500 / ranksCounted.length) / 2)},${16 - (amt)}`} />);
                                    }) 
                                    : null
                              } */}

                              { 
                                    nodeList.length ?
                                    nodeList.map((node) => {//  realAmt = the count , and rank == the index of the ranksCounted object which is rank
                                          let amt = 1;//realAmt === 1 ? 1 : realAmt * 3;
                                          let rank = node.rank;
                                          let totalNodes = nodeList.length;
                                          let isHighlighted = highlightList.find( h => { return h.rank === rank})
                                          return (<polygon className={cx({highlighted: isHighlighted})}
                                                key={rank}
                                                onClick={ ()=>{handleRankClick(rank) } }
                                                points={`${500 / ranksCounted.length * rank},16 ` +
                                                `${(500 / totalNodes * rank) + (500 / totalNodes)},16 ` +
                                                `${(500 / totalNodes * rank) + ((500 / totalNodes) / 2)},${16 - (amt)}`} />);
                                    }) 
                                    : null
                              }
				       
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
