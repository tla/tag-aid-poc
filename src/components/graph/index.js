// TODO highlight the activeWitness (in the graph)

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
		if (this.props.text.activeNode !== nextProps.text.activeNode) {
			const node = this.refs.graph.querySelector(`g#${nextProps.text.activeNode}`);
			const nodeBox = node.getBoundingClientRect();
			const clientWidth = document.body.clientWidth;

			this.setState({
				left: this.state.left - nodeBox.left + clientWidth/2 - (nodeBox.width/2)
			});

			this.highlightNodes(nextProps.text.highlightedNodes);
		}
	}

	highlightNodes(nodes) {
		let nodeEls = this.refs.graph.querySelectorAll("g.node.highlight");

		[].forEach.call(nodeEls, function(n) {
			n.setAttribute("class", "node");
		});

		nodes.forEach((node, i) => {
			let n = this.refs.graph.querySelector(`g#${node.id}`);

			let className = (i === 3) ?
				"node highlight active" :
				"node highlight";

			n.setAttribute("class", className);
		})
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