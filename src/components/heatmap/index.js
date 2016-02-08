import React from "react";
import cx from "classnames";

class HeatMap extends React.Component {
	render() {
		let grouped = [];
		for (let idx in this.props.text.readings) {
			let rank = this.props.text.readings[idx].rank;
			grouped[rank] = (grouped[rank] || 0) + 1;
		}
		return (
			<div className={cx({heatmap: true, "top-aligned": this.props.text.activeNode ? false: true})}>
				<svg style={{width: "100%"}} viewBox="0 0 1000 16">
					{grouped.map((amt, rank) => amt === 1 ? 
						(<rect height="1" key={rank} width={1000 / grouped.length} x={1000 / grouped.length * rank} y="15" />) : 
						/*(<rect height={amt*2} key={rank} width={1000 / grouped.length} x={1000 / grouped.length * rank} y={8 - (amt*2)} />)*/
						(<polygon points={`${1000 / grouped.length * rank},16 ` +
							`${(1000 / grouped.length * rank) + (1000 / grouped.length)},16 ` + 
							`${(1000 / grouped.length * rank) + ((1000 / grouped.length) / 2)},${8 - (amt*4)}`} />)
					)}
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