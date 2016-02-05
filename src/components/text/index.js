import React from "react";

const readingsByWitness = (witness, readings) => 
	readings.filter((reading) => reading.witnesses.indexOf(witness) > -1);

class Text extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div className="text">
			MYTEXT
			</div>
		);
	}
}

Text.propTypes = {};

Text.defaultProps = {};

export default Text;