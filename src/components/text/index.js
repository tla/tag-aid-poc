import React from "react";
import cx from "classnames";

class Text extends React.Component {

	componentDidUpdate() {
		if(this.props.text.activeNode == null) { return; }
		const textNode = document.querySelector("#text-" + this.props.text.activeNode);
		if(textNode == null) { return; }
		const textBox = document.querySelector(".reading");
		const nodeTop = textNode.getBoundingClientRect().top;
		const textBoxTop = textBox.getBoundingClientRect().top;
		textBox.scrollTop = nodeTop - textBoxTop;
	}

	render() {
		let witness = this.props.text.activeWitness;

		return (
			<div className="text">
				<ul>
					{this.props.text.witnesses.map((w) => (
						<li className={w === witness.name ? "selected" : ""}
							key={w}
							onClick={() => this.props.onSetActiveWitness(w)}>
							{w}
						</li>
					))}
				</ul>
				<div className="reading">
					{witness.reading.map((r, idx) => (
						<span
							className={cx({
								active: (this.props.text.highlightedNodes.length > 3 && this.props.text.highlightedNodes[3].id === r.id),
								visible: this.props.text.highlightedNodes.find((n) => n.id === r.id) != null
							})}
							id={`text-${r.id}`}
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
	onSetActiveNode: React.PropTypes.func,
	onSetActiveWitness: React.PropTypes.func,
	text: React.PropTypes.object
};

Text.defaultProps = {};

export default Text;