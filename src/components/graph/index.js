// TODO highlight the activeWitness (in the graph)

import React from "react";
import GraphSvg from "./svg";
import cx from "classnames";

class Graph extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			left: 0
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.text.activeNode !== nextProps.text.activeNode) {
			const nodes = nextProps.text.highlightedNodes;

			if (nodes.length) {
				this.highlightNodes(nodes);
//				this.resizeGraph(nodes);
				this.centerOnActiveNodes(nodes);
			}
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

	resizeGraph(nodes) {
		let activeLeftNode = this.refs.graph.querySelector(`g#${nodes[0].id}`);
		let activeRightNode = this.refs.graph.querySelector(`g#${nodes[nodes.length - 1].id}`);

		const activeLeft = this.state.left * -1 + activeLeftNode.getBoundingClientRect().left;
		const activeRight = this.state.left * -1 + activeRightNode.getBoundingClientRect().left + activeRightNode.getBoundingClientRect().width;

		let activeWidth = activeRight - activeLeft;
		let activeCenter = activeLeft + activeWidth/2;
		let ratio = document.body.clientWidth / activeWidth;
		let svg = this.refs.graph.querySelector("svg");

		svg.style.width = svg.getBoundingClientRect().width * ratio;
		svg.style.height = "auto";
	}

	centerOnActiveNodes(nodes) {
		let node = this.refs.graph.querySelector(`g#${nodes[3].id}`);
		let nodeBox = node.getBoundingClientRect();
		let activeLeft = this.state.left * -1 + nodeBox.left;

		this.setState({
			left: activeLeft * -1 + (document.body.clientWidth /2 ),
		});
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
				className={cx({graph: true, aligment: this.props.text.activeNode ? "normal": "top"})}
				onWheel={this.onWheel.bind(this)}
				ref="graph"
				style={{
					left: this.state.left + "px"
				}}>
				<GraphSvg {...this.props} />
			</div>
		);
	}
}

Graph.propTypes = {};

Graph.defaultProps = {};

export default Graph;
