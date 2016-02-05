import React from "react";

class Text extends React.Component {

	isVisibleNode(idx, activeIdx, currentReading, dist = 3) {
		if(!activeIdx.length) { return false; }
		if(activeIdx < dist) { return idx <= dist * 2; }
		if(activeIdx > currentReading.length - dist - 1) { return idx >= currentReading.length - 1 - dist * 2; }
		if(Math.abs(activeIdx - idx) <= dist) { return true; }
		return false;
	}

	render() {
		let currentReading = this.props.text.readings.filter((r) => r.witnesses.indexOf(this.props.text.currentWitness) > -1);
		let activeNodeIdx = currentReading.map((r, i) => r.id === this.props.graph.activeNode ? i : -1).filter((idx) => idx > -1);

		return (
			<div className="text">
				<ul>
					{this.props.text.witnesses.map((w) => (
						<li className={w === this.props.text.currentWitness ? "selected" : ""} 
							key={w}
							onClick={() => this.props.onSelectWitness(w)}>
							{w}
						</li>
					))}
				</ul>
				<div className="reading">
					{currentReading.map((r, idx) => (
						<span
							className={this.isVisibleNode(idx, activeNodeIdx, currentReading) ? "visible" : ""}
							key={r.id} 
							onClick={() => this.props.onSetActiveNode(r.id) }>
							{r.text}
						</span>
					))}
				</div>
			</div>
		);
	}
}

Text.propTypes = {
	graph: React.PropTypes.object,
	onSelectWitness: React.PropTypes.func,
	onSetActiveNode: React.PropTypes.func,
	text: React.PropTypes.object
};

Text.defaultProps = {};

export default Text;