import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const HeatMap = (props)=> {

      const { sectionId, activeWitness, highlightedNode, selectedSentence, onSetActiveNode, nodeHash} = props;
      const [text, setText] = useState();
      const [highlightedNodes, setHighlightedNodes] = useState([])

      useEffect(()=>{
            setText(null);
            DataApi.getReading(sectionId,activeWitness, (html)=>{
                  setText(html) // this probably needs to be a json file - not the html but - for now 
                  calculateMap();
            });
      },[sectionId, activeWitness])

      useEffect(()=>{
            //do magic
            // setHightlightedNodes
      }, selectedSentence)


	function calculateMap(){
		let grouped = [],
			highlightedRanks = highlightedNodes.map((n) => n.rank);

		for (let span in text) {
                  // get the node id out of the span - better if this was a list 
                  let nodId = 0;
			let rank = nodeHash[nodeId];
			grouped[rank] = (grouped[rank] || 0) + 1;
		}

		let hl1 = highlightedRanks.length ?
			<polygon className="highlighted" points={
				`${500 / grouped.length * highlightedRanks[0] - 3},18.5 ` +
				`${500 / grouped.length * highlightedRanks[0]},16 ` +
				`${500 / grouped.length * highlightedRanks[0]},21`} />
			: null;

		let hl2 = highlightedRanks.length ?
			<polygon className="highlighted" points={
				`${500 / grouped.length * highlightedRanks[highlightedRanks.length - 1] + 3},18.5 ` +
				`${500 / grouped.length * highlightedRanks[highlightedRanks.length - 1]},16 ` +
				`${500 / grouped.length * highlightedRanks[highlightedRanks.length - 1]},21`} />
			: null;
      }


		return (
			<div className={cx({heatmap: true, "top-aligned": this.props.activeNode ? false: true})}>
				<svg style={{width: "100%"}} viewBox="0 0 500 21">
					{grouped.map((realAmt, rank) => {
						let amt = realAmt === 1 ? 1 : realAmt * 3;
						return (<polygon className={cx({highlighted: highlightedRanks.indexOf(rank) > -1})}
							key={rank}
							onClick={ ()=>{handleRankClick(rank) } }
							points={`${500 / grouped.length * rank},16 ` +
							`${(500 / grouped.length * rank) + (500 / grouped.length)},16 ` +
							`${(500 / grouped.length * rank) + ((500 / grouped.length) / 2)},${16 - (amt)}`} />);
					})}
					{/* {hl1}
					{hl2} */}
				</svg>
			</div>
            );
            
            function handleRankClick(rankIdx) {
                  for(let rank = rankIdx; rank > 0; rank--) {
                        let found = this.props.activeWitness.readings.filter((reading) => reading.rank === rank);
                        if(found.length) { return onSetActiveNode(found[0].id); }
                  }
            }
	
}

HeatMap.propTypes = {
	text: PropTypes.object,
  activeNode: PropTypes.string,
  activeWitness: PropTypes.object,
  onSetActiveNode: PropTypes.func,
	highlightedNodes: PropTypes.array
};

export default HeatMap;
