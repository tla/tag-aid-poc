import React from "react";


class Text extends React.Component {
	render() {
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
					{this.props.text.readings.filter((r) => r.witnesses.indexOf(this.props.text.currentWitness) > -1).map((r) => (
						<span key={r.id} onClick={() => this.props.onSetActiveNode(r.id) }>{r.text}</span>
					))}
				</div>
			</div>
		);
	}
}

Text.propTypes = {
	onSelectWitness: React.PropTypes.func,
	onSetActiveNode: React.PropTypes.func,
	text: React.PropTypes.object
};

Text.defaultProps = {};

export default Text;