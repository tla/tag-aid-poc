import React from "react";
import cx from "classnames";

class HeatMap extends React.Component {
	render() {
		return (
			<div className={cx({heatmap: true, "top-aligned": this.props.text.activeNode ? false: true})}>
				HEATMAP
			</div>
		);
	}
}

export default HeatMap;