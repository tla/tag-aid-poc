import React from "react";
import Graph from "./graph";
import HeatMap from "./heatmap";
import Text from "./text";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Graph {...this.props}/>
				<HeatMap {...this.props} />
				<Text {...this.props}/>
			</div>
		);
	}
}

export default App;