import React from "react";
import cx from "classnames";

class HeatMap extends React.Component {
	render() {
		let grouped = [], 
			highlightedRanks = this.props.text.highlightedNodes.map((n) => n.rank);


		for (let idx in this.props.text.readings) {
			let rank = this.props.text.readings[idx].rank;
			grouped[rank] = (grouped[rank] || 0) + 1;
		}

		let hl1 = highlightedRanks.length ?
			<rect className="highlighted" height="5" width="1" x={500 / grouped.length * highlightedRanks[0]} y="16" /> : 
			null;
		let hl2 = highlightedRanks.length ?
			<rect className="highlighted" height="5" width="1" x={500 / grouped.length * highlightedRanks[highlightedRanks.length-1]} y="16" /> : 
			null;

		return (
			<div className={cx({heatmap: true, "top-aligned": this.props.text.activeNode ? false: true})}>
				<svg style={{width: "100%"}} viewBox="0 0 500 21">
					{grouped.map((realAmt, rank) => {
						let amt = realAmt === 1 ? 1 : realAmt * 4;
						return (<polygon className={cx({highlighted: highlightedRanks.indexOf(rank) > -1})} key={rank} points={`${500 / grouped.length * rank},16 ` +
							`${(500 / grouped.length * rank) + (500 / grouped.length)},16 ` + 
							`${(500 / grouped.length * rank) + ((500 / grouped.length) / 2)},${16 - (amt)}`} />);
					})}
					{hl1}
					{hl2}
				</svg>
			</div>
		);
	}
}

HeatMap.propTypes = {
	graph: React.PropTypes.object,
	onSetActiveNode: React.PropTypes.func,
	onSetActiveWitness: React.PropTypes.func,
	text: React.PropTypes.object
};

export default HeatMap;