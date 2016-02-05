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
<<<<<<< HEAD
		if (this.props.graph.activeNode !== nextProps.graph.activeNode) {
			const node = this.refs.graph.querySelector(`g#${nextProps.graph.activeNode}`);
			const nodeBox = node.getBoundingClientRect();
			const clientWidth = document.body.clientWidth;

			this.setState({
				left: this.state.left - nodeBox.left + clientWidth/2 - (nodeBox.width/2)
			});
=======
		console.log(this.props.graph.activeNode, nextProps.graph.activeNode)
		if (this.props.graph.activeNode !== nextProps.graph.activeNode) {
			console.log(this.ref.graph)
>>>>>>> 59f4dc81735971472db91fc8f77e19fc5fba5462
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