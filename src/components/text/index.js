import React from "react";


class Text extends React.Component {
	render() {
		console.log(this.props);
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
				{this.props.text.readings.filter((r) => r.witnesses.indexOf(this.props.text.currentWitness) > -1).map((r) => r.text)}
			</div>
		);
	}
}

Text.propTypes = {
	onSelectWitness: React.PropTypes.func,
	text: React.PropTypes.object
};

Text.defaultProps = {};

export default Text;