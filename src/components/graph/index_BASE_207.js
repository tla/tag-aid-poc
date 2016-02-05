import React from "react";
import GraphSvg from "./svg";

class Graph extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			left: 0
		};
	}

	onWheel(ev) {
		let nextLeft = this.state.left - ev.deltaY;

		this.setState({
			left: (nextLeft < 0) ? nextLeft : 0
		});
	}

	render() {
		return (
			<div
				className="graph"
				onWheel={this.onWheel.bind(this)}
				style={{left: this.state.left + "px"}}>
				<GraphSvg />
			</div>
		);
	}
}

Graph.propTypes = {};

Graph.defaultProps = {};

export default Graph;