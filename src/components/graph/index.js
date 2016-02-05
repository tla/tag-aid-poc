import React from "react";
import GraphSvg from "./svg";

class Graph extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			left: 0
		};
	}

	componentWillReceiveProps(nextProps) {
		console.log(this.props.graph.activeNode, nextProps.graph.activeNode)
		if (this.props.graph.activeNode !== nextProps.graph.activeNode) {
			console.log(this.ref.graph)
		}
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
				ref="graph"
				style={{left: this.state.left + "px"}}>
				<GraphSvg {...this.props} />
			</div>
		);
	}
}

Graph.propTypes = {};

Graph.defaultProps = {};

export default Graph;