import React from "react";

let closest = (el, selector) => {
	while (el) {
		if (el.matches && el.matches(selector)) {
			return el;
		} else {
			el = el.parentNode;
		}
	}
}

class Svg extends React.Component {
	handleClick(ev) {
		const nodeGroup = (closest(ev.target, "g.node"));

		if (nodeGroup != null) {
			return this.props.onSetActiveNode(nodeGroup.id);
		}

		const edgeGroup = closest(ev.target, "g.edge");

		if (edgeGroup != null) {
			let witness = edgeGroup.querySelector("text").innerHTML;

			if (witness != "majority") {
				this.props.onSelectWitness(witness);
			}
		}
	}

	render() {
		return (
			<svg onClick={this.handleClick.bind(this)} viewBox="0.00 0.00 171016.00 623.00">
			<g id="graph0" className="graph" transform="scale(1 1) rotate(0) translate(4 619)">

			<polygon fill="none" stroke="none" points="-4,4 -4,-619 171012,-619 171012,4 -4,4"/>
			<g id="__START__" className="node">
				<ellipse cx="57" cy="-76" rx="57.3905" ry="18"/>
				<text textAnchor="middle" x="57" y="-72.3">#START#</text>
			</g>
			<g id="n1" className="node">
				<ellipse cx="262" cy="-76" rx="50.0912" ry="18"/>
				<text textAnchor="middle" x="262" y="-72.3">Verbum </text>
			</g>
			<g id="edge518" className="edge majority">
				<path strokeWidth="3.4" d="M114.277,-76C141.433,-76 174.018,-76 201.574,-76"/>
				<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="211.868,-76 201.868,-80.5001 206.868,-77.2 201.868,-77.2001 201.868,-76.0001 201.868,-74.8001 206.868,-74.8 201.868,-71.5001 211.868,-76 211.868,-76"/>
				<text textAnchor="middle" x="163" y="-79.8">majority</text>
			</g>
			<g id="node2" className="node">
			<polygon fill="white" stroke="white" strokeWidth="0" points="57,-36 30,-18 57,-3.55271e-15 84,-18 57,-36"/>
			</g>
			<g id="n2" className="node">
			<ellipse cx="442" cy="-76" rx="31.6951" ry="18"/>
			<text textAnchor="middle" x="442" y="-72.3">Ista </text>
			</g>
			<g id="edge128" className="edge majority">
			<path strokeWidth="3.4" d="M312.11,-76C339.605,-76 373.504,-76 399.635,-76"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="409.957,-76 399.957,-80.5001 404.957,-77.2 399.957,-77.2001 399.957,-76.0001 399.957,-74.8001 404.957,-74.8 399.957,-71.5001 409.957,-76 409.957,-76"/>
			<text textAnchor="middle" x="361" y="-79.8">majority</text>
			</g>
			<g id="n3" className="node">
			<ellipse cx="633" cy="-76" rx="60.3893" ry="18"/>
			<text textAnchor="middle" x="633" y="-72.3">sequencia </text>
			</g>
			<g id="edge55" className="edge majority">
			<path strokeWidth="3.4" d="M474.21,-76C498.136,-76 532.08,-76 562.359,-76"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="572.467,-76 562.467,-80.5001 567.467,-77.2 562.467,-77.2001 562.467,-76.0001 562.467,-74.8001 567.467,-74.8 562.467,-71.5001 572.467,-76 572.467,-76"/>
			<text textAnchor="middle" x="523" y="-79.8">majority</text>
			</g>
			<g id="n4" className="node">
			<ellipse cx="844" cy="-125" rx="51.1914" ry="18"/>
			<text textAnchor="middle" x="844" y="-121.3">ecclesia </text>
			</g>
			<g id="edge1073" className="edge">
			<path d="M680.904,-86.9966C713.515,-94.6423 757.01,-104.84 790.734,-112.746"/>
			<polygon fill="#000000" stroke="#000000" points="800.864,-115.121 790.101,-117.22 795.996,-113.98 791.128,-112.839 791.128,-112.839 791.128,-112.839 795.996,-113.98 792.155,-108.457 800.864,-115.121 800.864,-115.121"/>
			<text textAnchor="middle" x="743" y="-110.8">Gr314</text>
			</g>
			<g id="n5" className="node">
			<ellipse cx="844" cy="-71" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="844" y="-67.3">que </text>
			</g>
			<g id="edge1321" className="edge majority">
			<path strokeWidth="3.2" d="M693.332,-74.5806C728.57,-73.7376 772.294,-72.6915 803.364,-71.9482"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="813.385,-71.7085 803.495,-76.4465 808.412,-72.9278 803.414,-73.0475 803.387,-71.9478 803.361,-70.8481 808.36,-70.7284 803.28,-67.4491 813.385,-71.7085 813.385,-71.7085"/>
			<text textAnchor="middle" x="743" y="-77.8">majority</text>
			</g>
			<g id="n6" className="node">
			<ellipse cx="1021" cy="-118" rx="27" ry="18"/>
			<text textAnchor="middle" x="1021" y="-114.3">de </text>
			</g>
			<g id="edge1366" className="edge">
			<path d="M895.148,-122.994C923.377,-121.865 957.991,-120.48 983.607,-119.456"/>
			<polygon fill="#000000" stroke="#000000" points="993.642,-119.054 983.83,-123.95 988.646,-119.254 983.65,-119.454 983.65,-119.454 983.65,-119.454 988.646,-119.254 983.47,-114.958 993.642,-119.054 993.642,-119.054"/>
			<text textAnchor="middle" x="945" y="-125.8">Gr314</text>
			</g>
			<g id="edge472" className="edge majority">
			<path strokeWidth="3.2" d="M873.475,-75.8532C900.26,-80.7579 941.318,-89.1541 976,-100 980.076,-101.275 984.303,-102.77 988.452,-104.344"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="997.886,-108.094 986.931,-108.582 992.833,-107.269 988.187,-105.422 988.593,-104.4 988.999,-103.378 993.646,-105.224 990.255,-100.218 997.886,-108.094 997.886,-108.094"/>
			<text textAnchor="middle" x="945" y="-103.8">majority</text>
			</g>
			<g id="n8" className="node">
			<ellipse cx="1194" cy="-118" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="1194" y="-114.3">sancta </text>
			</g>
			<g id="edge765" className="edge">
			<path d="M1048.34,-118C1072.59,-118 1109.27,-118 1139.63,-118"/>
			<polygon fill="#000000" stroke="#000000" points="1149.66,-118 1139.66,-122.5 1144.66,-118 1139.66,-118 1139.66,-118 1139.66,-118 1144.66,-118 1139.66,-113.5 1149.66,-118 1149.66,-118"/>
			<text textAnchor="middle" x="1097" y="-121.8">Sg524</text>
			</g>
			<g id="n7" className="node">
			<ellipse cx="1194" cy="-172" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="1194" y="-168.3">beatam </text>
			</g>
			<g id="edge515" className="edge">
			<path d="M1043.7,-128.078C1050.73,-131.153 1058.62,-134.404 1066,-137 1091.11,-145.833 1119.63,-153.868 1143.28,-160.005"/>
			<polygon fill="#000000" stroke="#000000" points="1153.09,-162.516 1142.29,-164.396 1148.25,-161.276 1143.4,-160.037 1143.4,-160.037 1143.4,-160.037 1148.25,-161.276 1144.52,-155.677 1153.09,-162.516 1153.09,-162.516"/>
			<text textAnchor="middle" x="1097" y="-158.8">Kf133</text>
			</g>
			<g id="n9" className="node">
			<ellipse cx="1194" cy="-64" rx="39.7935" ry="18"/>
			<text textAnchor="middle" x="1194" y="-60.3">beata </text>
			</g>
			<g id="edge561" className="edge majority">
			<path strokeWidth="3" d="M1043.7,-107.922C1050.73,-104.847 1058.62,-101.596 1066,-99 1093.02,-89.4942 1124,-80.9123 1148.6,-74.6254"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="1158.37,-72.1612 1149.78,-78.969 1153.77,-74.353 1148.92,-75.5751 1148.68,-74.6055 1148.43,-73.6358 1153.28,-72.4136 1147.58,-70.2419 1158.37,-72.1612 1158.37,-72.1612"/>
			<text textAnchor="middle" x="1097" y="-102.8">majority</text>
			</g>
			<g id="n11" className="node">
			<ellipse cx="1396" cy="-118" rx="46.5926" ry="18"/>
			<text textAnchor="middle" x="1396" y="-114.3">uirgine </text>
			</g>
			<g id="edge1107" className="edge">
			<path d="M1238.4,-118C1267.84,-118 1307.04,-118 1338.86,-118"/>
			<polygon fill="#000000" stroke="#000000" points="1348.9,-118 1338.9,-122.5 1343.9,-118 1338.9,-118 1338.9,-118 1338.9,-118 1343.9,-118 1338.9,-113.5 1348.9,-118 1348.9,-118"/>
			<text textAnchor="middle" x="1291" y="-121.8">Sg524</text>
			</g>
			<g id="n10" className="node">
			<ellipse cx="1396" cy="-172" rx="55.7903" ry="18"/>
			<text textAnchor="middle" x="1396" y="-168.3">uirginem </text>
			</g>
			<g id="edge494" className="edge">
			<path d="M1242.14,-172C1268.27,-172 1301.15,-172 1329.71,-172"/>
			<polygon fill="#000000" stroke="#000000" points="1340.02,-172 1330.02,-176.5 1335.02,-172 1330.02,-172 1330.02,-172 1330.02,-172 1335.02,-172 1330.02,-167.5 1340.02,-172 1340.02,-172"/>
			<text textAnchor="middle" x="1291" y="-175.8">Kf133</text>
			</g>
			<g id="edge1252" className="edge majority">
			<path strokeWidth="3" d="M1228.48,-73.0384C1261,-81.8205 1310.71,-95.2426 1347.36,-105.137"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="1357.32,-107.827 1346.5,-109.565 1352.23,-107.489 1347.41,-106.186 1347.67,-105.22 1347.93,-104.255 1352.76,-105.558 1348.84,-100.876 1357.32,-107.827 1357.32,-107.827"/>
			<text textAnchor="middle" x="1291" y="-100.8">majority</text>
			</g>
			<g id="n12" className="node">
			<ellipse cx="1598" cy="-128" rx="47.3916" ry="18"/>
			<text textAnchor="middle" x="1598" y="-124.3">canitur </text>
			</g>
			<g id="edge1146" className="edge">
			<path d="M1443.27,-162.241C1469.35,-156.696 1502.52,-149.568 1532,-143 1536.96,-141.895 1542.13,-140.728 1547.29,-139.553"/>
			<polygon fill="#000000" stroke="#000000" points="1557.15,-137.298 1548.4,-143.915 1552.27,-138.413 1547.4,-139.528 1547.4,-139.528 1547.4,-139.528 1552.27,-138.413 1546.39,-135.142 1557.15,-137.298 1557.15,-137.298"/>
			<text textAnchor="middle" x="1501" y="-158.8">Kf133</text>
			</g>
			<g id="edge827" className="edge majority">
			<path strokeWidth="3.2" d="M1442.63,-120.282C1471.74,-121.737 1509.67,-123.634 1540.65,-125.183"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="1550.87,-125.694 1540.66,-129.688 1545.82,-126.542 1540.83,-126.293 1540.88,-125.194 1540.94,-124.095 1545.93,-124.345 1541.11,-120.7 1550.87,-125.694 1550.87,-125.694"/>
			<text textAnchor="middle" x="1501" y="-127.8">majority</text>
			</g>
			<g id="n13" className="node">
			<ellipse cx="1798" cy="-128" rx="53.8905" ry="18"/>
			<text textAnchor="middle" x="1798" y="-124.3">diuiditur </text>
			</g>
			<g id="edge574" className="edge majority">
			<path strokeWidth="3.4" d="M1645.67,-128C1671.94,-128 1705.11,-128 1733.7,-128"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="1744,-128 1734,-132.5 1739,-129.2 1734,-129.2 1734,-128 1734,-126.8 1739,-126.8 1734,-123.5 1744,-128 1744,-128"/>
			<text textAnchor="middle" x="1695" y="-131.8">majority</text>
			</g>
			<g id="n14" className="node">
			<ellipse cx="1977" cy="-128" rx="27" ry="18"/>
			<text textAnchor="middle" x="1977" y="-124.3">in </text>
			</g>
			<g id="edge171" className="edge majority">
			<path strokeWidth="3.4" d="M1852.11,-128C1880.26,-128 1914.14,-128 1939.35,-128"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="1949.58,-128 1939.58,-132.5 1944.58,-129.2 1939.58,-129.2 1939.58,-128 1939.58,-126.8 1944.58,-126.8 1939.58,-123.5 1949.58,-128 1949.58,-128"/>
			<text textAnchor="middle" x="1901" y="-131.8">majority</text>
			</g>
			<g id="n16" className="node">
			<ellipse cx="2146" cy="-143" rx="35.194" ry="18"/>
			<text textAnchor="middle" x="2146" y="-139.3">tres. </text>
			</g>
			<g id="edge295" className="edge majority">
			<path strokeWidth="3.2" d="M2004.09,-130.344C2030.06,-132.676 2070.37,-136.297 2101.23,-139.069"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="2111.31,-139.974 2100.94,-143.561 2106.23,-140.622 2101.25,-140.174 2101.35,-139.079 2101.44,-137.983 2106.42,-138.431 2101.75,-134.597 2111.31,-139.974 2111.31,-139.974"/>
			<text textAnchor="middle" x="2057" y="-141.8">majority</text>
			</g>
			<g id="n15" className="node">
			<ellipse cx="2146" cy="-89" rx="35.9954" ry="18"/>
			<text textAnchor="middle" x="2146" y="-85.3">duas </text>
			</g>
			<g id="edge270" className="edge">
			<path d="M2001.11,-119.463C2007.79,-117.174 2015.14,-114.83 2022,-113 2048.09,-106.041 2077.8,-100.188 2101.48,-96.0041"/>
			<polygon fill="#000000" stroke="#000000" points="2111.57,-94.2584 2102.48,-100.398 2106.64,-95.1112 2101.72,-95.9639 2101.72,-95.9639 2101.72,-95.9639 2106.64,-95.1112 2100.95,-91.5298 2111.57,-94.2584 2111.57,-94.2584"/>
			<text textAnchor="middle" x="2057" y="-116.8">Mü28315</text>
			</g>
			<g id="n17" className="node">
			<ellipse cx="2334" cy="-103" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="2334" y="-99.3">partes. </text>
			</g>
			<g id="edge1195" className="edge majority">
			<path strokeWidth="3" d="M2176.59,-134.117C2184.19,-131.977 2192.37,-129.794 2200,-128 2226.64,-121.741 2256.56,-116.003 2281.27,-111.607"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="2291.16,-109.869 2282.09,-116.032 2286.41,-111.719 2281.49,-112.584 2281.31,-111.599 2281.14,-110.615 2286.07,-109.749 2280.54,-107.167 2291.16,-109.869 2291.16,-109.869"/>
			<text textAnchor="middle" x="2235" y="-131.8">majority</text>
			</g>
			<g id="n18" className="node">
			<ellipse cx="2520" cy="-104" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="2520" y="-100.3">Primo </text>
			</g>
			<g id="edge1145" className="edge">
			<path d="M2181.23,-144.008C2205.92,-144.489 2240.04,-144.651 2270,-143 2354.83,-138.326 2376.79,-139.137 2460,-122 2465.51,-120.866 2471.24,-119.44 2476.87,-117.89"/>
			<polygon fill="#000000" stroke="#000000" points="2486.82,-115.001 2478.47,-122.11 2482.02,-116.394 2477.22,-117.788 2477.22,-117.788 2477.22,-117.788 2482.02,-116.394 2475.96,-113.466 2486.82,-115.001 2486.82,-115.001"/>
			<text textAnchor="middle" x="2334" y="-144.8">Wi3818</text>
			</g>
			<g id="edge54" className="edge">
			<path d="M2181.83,-87.4781C2206.51,-86.8395 2240.38,-86.8537 2270,-90 2274.56,-90.4841 2279.27,-91.1472 2283.98,-91.9195"/>
			<polygon fill="#000000" stroke="#000000" points="2294.2,-93.7572 2283.56,-96.4167 2289.28,-92.8724 2284.36,-91.9877 2284.36,-91.9877 2284.36,-91.9877 2289.28,-92.8724 2285.16,-87.5587 2294.2,-93.7572 2294.2,-93.7572"/>
			<text textAnchor="middle" x="2235" y="-93.8">Mü28315</text>
			</g>
			<g id="edge542" className="edge majority">
			<path strokeWidth="3.2" d="M2380.48,-103.247C2407,-103.391 2440.51,-103.573 2467.93,-103.722"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="2478.12,-103.778 2468.09,-108.223 2473.11,-104.851 2468.11,-104.823 2468.12,-103.723 2468.12,-102.623 2473.12,-102.651 2468.14,-99.2234 2478.12,-103.778 2478.12,-103.778"/>
			<text textAnchor="middle" x="2429" y="-106.8">majority</text>
			</g>
			<g id="n19" className="node">
			<ellipse cx="2699" cy="-104" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="2699" y="-100.3">autor </text>
			</g>
			<g id="edge876" className="edge majority">
			<path strokeWidth="3.4" d="M2561.61,-104C2588.03,-104 2622.61,-104 2650.34,-104"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="2660.6,-104 2650.6,-108.5 2655.6,-105.2 2650.6,-105.2 2650.6,-104 2650.6,-102.8 2655.6,-102.8 2650.6,-99.5001 2660.6,-104 2660.6,-104"/>
			<text textAnchor="middle" x="2611" y="-107.8">majority</text>
			</g>
			<g id="n20" className="node">
			<ellipse cx="2889" cy="-104" rx="52.7911" ry="18"/>
			<text textAnchor="middle" x="2889" y="-100.3">hortatur </text>
			</g>
			<g id="edge1343" className="edge majority">
			<path strokeWidth="3.4" d="M2737.59,-104C2762.9,-104 2796.86,-104 2826.11,-104"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="2836.23,-104 2826.23,-108.5 2831.23,-105.2 2826.23,-105.2 2826.23,-104 2826.23,-102.8 2831.23,-102.8 2826.23,-99.5001 2836.23,-104 2836.23,-104"/>
			<text textAnchor="middle" x="2787" y="-107.8">majority</text>
			</g>
			<g id="n21" className="node">
			<ellipse cx="3070" cy="-104" rx="29.795" ry="18"/>
			<text textAnchor="middle" x="3070" y="-100.3">nos </text>
			</g>
			<g id="edge145" className="edge majority">
			<path strokeWidth="3.4" d="M2941.77,-104C2969.82,-104 3003.91,-104 3029.74,-104"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="3039.91,-104 3029.91,-108.5 3034.91,-105.2 3029.91,-105.2 3029.91,-104 3029.91,-102.8 3034.91,-102.8 3029.91,-99.5001 3039.91,-104 3039.91,-104"/>
			<text textAnchor="middle" x="2991" y="-107.8">majority</text>
			</g>
			<g id="n22" className="node">
			<ellipse cx="3225" cy="-104" rx="27" ry="18"/>
			<text textAnchor="middle" x="3225" y="-100.3">ad </text>
			</g>
			<g id="edge878" className="edge majority">
			<path strokeWidth="3.4" d="M3100.14,-104C3125.01,-104 3160.91,-104 3187.66,-104"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="3197.78,-104 3187.78,-108.5 3192.78,-105.2 3187.78,-105.2 3187.78,-104 3187.78,-102.8 3192.78,-102.8 3187.78,-99.5001 3197.78,-104 3197.78,-104"/>
			<text textAnchor="middle" x="3149" y="-107.8">majority</text>
			</g>
			<g id="n24" className="node">
			<ellipse cx="3428" cy="-136" rx="77.1866" ry="18"/>
			<text textAnchor="middle" x="3428" y="-132.3">decantandum </text>
			</g>
			<g id="edge1173" className="edge majority">
			<path strokeWidth="3.2" d="M3251.46,-108.053C3277.14,-112.142 3318.02,-118.65 3353.87,-124.357"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="3363.83,-125.943 3353.25,-128.815 3358.72,-126.243 3353.78,-125.457 3353.95,-124.371 3354.13,-123.284 3359.06,-124.07 3354.66,-119.927 3363.83,-125.943 3363.83,-125.943"/>
			<text textAnchor="middle" x="3301" y="-123.8">majority</text>
			</g>
			<g id="n23" className="node">
			<ellipse cx="3428" cy="-82" rx="65.7887" ry="18"/>
			<text textAnchor="middle" x="3428" y="-78.3">cantandum </text>
			</g>
			<g id="edge832" className="edge">
			<path d="M3251.04,-98.3408C3257.21,-97.0943 3263.83,-95.8839 3270,-95 3297.01,-91.1336 3326.81,-88.3065 3353.12,-86.2957"/>
			<polygon fill="#000000" stroke="#000000" points="3363.4,-85.5376 3353.76,-90.761 3358.42,-85.9054 3353.43,-86.2732 3353.43,-86.2732 3353.43,-86.2732 3358.42,-85.9054 3353.1,-81.7854 3363.4,-85.5376 3363.4,-85.5376"/>
			<text textAnchor="middle" x="3301" y="-98.8">Go325</text>
			</g>
			<g id="n25" className="node">
			<ellipse cx="3631" cy="-97" rx="27" ry="18"/>
			<text textAnchor="middle" x="3631" y="-93.3">et </text>
			</g>
			<g id="edge1256" className="edge majority">
			<path strokeWidth="3.2" d="M3495.05,-126.912C3523.23,-122.558 3556.38,-116.801 3586,-110 3589.44,-109.21 3593.01,-108.303 3596.56,-107.344"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="3606.39,-104.556 3598,-111.614 3601.88,-106.979 3597.07,-108.343 3596.77,-107.285 3596.47,-106.226 3601.28,-104.862 3595.54,-102.955 3606.39,-104.556 3606.39,-104.556"/>
			<text textAnchor="middle" x="3555" y="-124.8">majority</text>
			</g>
			<g id="edge879" className="edge">
			<path d="M3491.5,-86.6639C3525.12,-89.1728 3565.39,-92.1783 3593.82,-94.3"/>
			<polygon fill="#000000" stroke="#000000" points="3604.1,-95.067 3593.79,-98.8102 3599.11,-94.6948 3594.13,-94.3227 3594.13,-94.3227 3594.13,-94.3227 3599.11,-94.6948 3594.46,-89.8352 3604.1,-95.067 3604.1,-95.067"/>
			<text textAnchor="middle" x="3555" y="-96.8">Go325</text>
			</g>
			<g id="n26" className="node">
			<ellipse cx="3836" cy="-135" rx="79.0865" ry="18"/>
			<text textAnchor="middle" x="3836" y="-131.3">collaudandum </text>
			</g>
			<g id="edge998" className="edge majority">
			<path strokeWidth="3.2" d="M3656.1,-104.058C3662.53,-105.809 3669.5,-107.586 3676,-109 3702.54,-114.773 3731.83,-119.907 3757.95,-124.057"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="3768.18,-125.657 3757.6,-128.557 3763.07,-125.971 3758.13,-125.198 3758.3,-124.111 3758.47,-123.024 3763.41,-123.797 3758.99,-119.665 3768.18,-125.657 3768.18,-125.657"/>
			<text textAnchor="middle" x="3707" y="-123.8">majority</text>
			</g>
			<g id="n27" className="node">
			<ellipse cx="3836" cy="-81" rx="76.0865" ry="18"/>
			<text textAnchor="middle" x="3836" y="-77.3">colaudandum </text>
			</g>
			<g id="edge519" className="edge">
			<path d="M3658.12,-94.941C3682.29,-93.0359 3719.53,-90.1011 3753.61,-87.4147"/>
			<polygon fill="#000000" stroke="#000000" points="3763.6,-86.6276 3753.98,-91.8996 3758.61,-87.0206 3753.63,-87.4135 3753.63,-87.4135 3753.63,-87.4135 3758.61,-87.0206 3753.28,-82.9274 3763.6,-86.6276 3763.6,-86.6276"/>
			<text textAnchor="middle" x="3707" y="-96.8">Go325</text>
			</g>
			<g id="n28" className="node">
			<ellipse cx="4039" cy="-132" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="4039" y="-128.3">per </text>
			</g>
			<g id="edge809" className="edge">
			<path d="M3915.29,-133.832C3944.09,-133.402 3975.46,-132.933 3999.27,-132.578"/>
			<polygon fill="#000000" stroke="#000000" points="4009.32,-132.428 3999.38,-137.077 4004.32,-132.503 3999.32,-132.577 3999.32,-132.577 3999.32,-132.577 4004.32,-132.503 3999.25,-128.078 4009.32,-132.428 4009.32,-132.428"/>
			<text textAnchor="middle" x="3962" y="-136.8">Wi3818</text>
			</g>
			<g id="n29" className="node">
			<ellipse cx="4238" cy="-132" rx="75.2868" ry="18"/>
			<text textAnchor="middle" x="4238" y="-128.3">salutacionem </text>
			</g>
			<g id="edge47" className="edge majority">
			<path strokeWidth="3" d="M3897.68,-146.396C3909.69,-148.436 3922.22,-150.414 3934,-152 4026.5,-164.461 4051.78,-165.373 4144,-151 4153.09,-149.584 4162.63,-147.882 4172.01,-146.086"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="4182.08,-144.11 4173.13,-150.451 4177.36,-146.054 4172.46,-147.017 4172.26,-146.036 4172.07,-145.054 4176.98,-144.092 4171.4,-141.62 4182.08,-144.11 4182.08,-144.11"/>
			<text textAnchor="middle" x="4039" y="-164.8">majority</text>
			</g>
			<g id="edge503" className="edge">
			<path d="M3912.12,-79.957C3957.95,-80.2969 4017.61,-82.4832 4070,-90 4107.81,-95.4252 4149.49,-105.899 4181.74,-115.029"/>
			<polygon fill="#000000" stroke="#000000" points="4191.44,-117.812 4180.58,-119.378 4186.63,-116.432 4181.83,-115.053 4181.83,-115.053 4181.83,-115.053 4186.63,-116.432 4183.07,-110.727 4191.44,-117.812 4191.44,-117.812"/>
			<text textAnchor="middle" x="4039" y="-93.8">Go325</text>
			</g>
			<g id="edge1155" className="edge">
			<path d="M4068.65,-132C4090.7,-132 4122.37,-132 4152.31,-132"/>
			<polygon fill="#000000" stroke="#000000" points="4162.38,-132 4152.38,-136.5 4157.38,-132 4152.38,-132 4152.38,-132 4152.38,-132 4157.38,-132 4152.38,-127.5 4162.38,-132 4162.38,-132"/>
			<text textAnchor="middle" x="4116" y="-135.8">Wi3818</text>
			</g>
			<g id="n30" className="node">
			<ellipse cx="4452" cy="-132" rx="39.7935" ry="18"/>
			<text textAnchor="middle" x="4452" y="-128.3">beate </text>
			</g>
			<g id="edge243" className="edge majority">
			<path strokeWidth="3.4" d="M4313.45,-132C4342.83,-132 4375.78,-132 4402.06,-132"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="4412.15,-132 4402.15,-136.5 4407.15,-133.2 4402.15,-133.2 4402.15,-132 4402.15,-130.8 4407.15,-130.8 4402.15,-127.5 4412.15,-132 4412.15,-132"/>
			<text textAnchor="middle" x="4363" y="-135.8">majority</text>
			</g>
			<g id="n31" className="node">
			<ellipse cx="4640" cy="-132" rx="49.2915" ry="18"/>
			<text textAnchor="middle" x="4640" y="-128.3">uirginis </text>
			</g>
			<g id="edge1090" className="edge majority">
			<path strokeWidth="3.4" d="M4491.99,-132C4517.51,-132 4551.34,-132 4580.11,-132"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="4590.45,-132 4580.45,-136.5 4585.45,-133.2 4580.45,-133.2 4580.45,-132 4580.45,-130.8 4585.45,-130.8 4580.45,-127.5 4590.45,-132 4590.45,-132"/>
			<text textAnchor="middle" x="4541" y="-135.8">majority</text>
			</g>
			<g id="n32" className="node">
			<ellipse cx="4838" cy="-208" rx="28.6953" ry="18"/>
			<text textAnchor="middle" x="4838" y="-204.3">filii </text>
			</g>
			<g id="edge237" className="edge">
			<path d="M4661.67,-148.218C4674.41,-157.521 4691.42,-168.754 4708,-176 4737.68,-188.974 4773.59,-197.341 4799.98,-202.252"/>
			<polygon fill="#000000" stroke="#000000" points="4809.95,-204.028 4799.32,-206.705 4805.03,-203.151 4800.11,-202.274 4800.11,-202.274 4800.11,-202.274 4805.03,-203.151 4800.9,-197.844 4809.95,-204.028 4809.95,-204.028"/>
			<text textAnchor="middle" x="4743" y="-200.8">Go325</text>
			</g>
			<g id="n33" className="node">
			<ellipse cx="4838" cy="-65" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="4838" y="-61.3">Marie </text>
			</g>
			<g id="edge924" className="edge">
			<path d="M4662.24,-115.836C4674.9,-106.947 4691.65,-96.4475 4708,-90 4733.16,-80.0762 4762.69,-73.9822 4787.14,-70.2991"/>
			<polygon fill="#000000" stroke="#000000" points="4797.28,-68.8641 4788,-74.721 4792.32,-69.5648 4787.37,-70.2654 4787.37,-70.2654 4787.37,-70.2654 4792.32,-69.5648 4786.74,-65.8098 4797.28,-68.8641 4797.28,-68.8641"/>
			<text textAnchor="middle" x="4743" y="-93.8">Mü28315</text>
			</g>
			<g id="n34" className="node">
			<ellipse cx="5017" cy="-116" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="5017" y="-112.3">sibi </text>
			</g>
			<g id="edge1151" className="edge majority">
			<path strokeWidth="2.8" d="M4689.26,-129.941C4764.14,-126.746 4906.92,-120.654 4976.25,-117.696"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="4986.33,-117.266 4976.53,-122.188 4981.37,-118.378 4976.37,-118.592 4976.34,-117.692 4976.3,-116.793 4981.29,-116.58 4976.14,-113.197 4986.33,-117.266 4986.33,-117.266"/>
			<text textAnchor="middle" x="4838" y="-128.8">majority</text>
			</g>
			<g id="n35" className="node">
			<ellipse cx="5175" cy="-162" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="5175" y="-158.3">per </text>
			</g>
			<g id="edge502" className="edge">
			<path d="M4685.99,-138.599C4693.33,-139.517 4700.87,-140.362 4708,-141 4866.25,-155.167 5055.64,-159.953 5135.49,-161.417"/>
			<polygon fill="#000000" stroke="#000000" points="5145.57,-161.594 5135.5,-165.917 5140.57,-161.506 5135.57,-161.418 5135.57,-161.418 5135.57,-161.418 5140.57,-161.506 5135.65,-156.919 5145.57,-161.594 5145.57,-161.594"/>
			<text textAnchor="middle" x="4933" y="-159.8">Wi3818</text>
			</g>
			<g id="edge929" className="edge">
			<path d="M4866.76,-206.639C4918.57,-203.721 5033.31,-195.476 5128,-176 5131.65,-175.249 5135.42,-174.335 5139.17,-173.337"/>
			<polygon fill="#000000" stroke="#000000" points="5148.91,-170.554 5140.53,-177.628 5144.1,-171.928 5139.29,-173.301 5139.29,-173.301 5139.29,-173.301 5144.1,-171.928 5138.06,-168.975 5148.91,-170.554 5148.91,-170.554"/>
			<text textAnchor="middle" x="5017" y="-199.8">Go325</text>
			</g>
			<g id="edge1228" className="edge">
			<path d="M4878.49,-69.4748C4904.46,-73.1841 4938.9,-79.5773 4968,-90 4974.09,-92.181 4980.34,-95.0471 4986.24,-98.0779"/>
			<polygon fill="#000000" stroke="#000000" points="4995.14,-102.902 4984.21,-102.093 4990.75,-100.519 4986.35,-98.1369 4986.35,-98.1369 4986.35,-98.1369 4990.75,-100.519 4988.5,-94.1805 4995.14,-102.902 4995.14,-102.902"/>
			<text textAnchor="middle" x="4933" y="-93.8">Mü28315</text>
			</g>
			<g id="edge672" className="edge majority">
			<path strokeWidth="3" d="M5047.78,-117.317C5070.39,-119.091 5101.94,-123.252 5128,-133 5134.54,-135.444 5141.13,-138.894 5147.21,-142.566"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="5155.67,-148.011 5144.83,-146.385 5150.93,-146.147 5146.72,-143.441 5147.26,-142.6 5147.8,-141.76 5152.01,-144.465 5149.7,-138.816 5155.67,-148.011 5155.67,-148.011"/>
			<text textAnchor="middle" x="5097" y="-136.8">majority</text>
			</g>
			<g id="n36" className="node">
			<ellipse cx="5356" cy="-162" rx="53.8905" ry="18"/>
			<text textAnchor="middle" x="5356" y="-158.3">angelum </text>
			</g>
			<g id="edge1085" className="edge majority">
			<path strokeWidth="3.4" d="M5204.36,-162C5227.73,-162 5261.75,-162 5291.55,-162"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="5301.89,-162 5291.89,-166.5 5296.89,-163.2 5291.89,-163.2 5291.89,-162 5291.89,-160.8 5296.89,-160.8 5291.89,-157.5 5301.89,-162 5301.89,-162"/>
			<text textAnchor="middle" x="5253" y="-165.8">majority</text>
			</g>
			<g id="n37" className="node">
			<ellipse cx="5557" cy="-162" rx="48.9926" ry="18"/>
			<text textAnchor="middle" x="5557" y="-158.3">factam. </text>
			</g>
			<g id="edge1183" className="edge majority">
			<path strokeWidth="3.4" d="M5410.07,-162C5437.12,-162 5470.08,-162 5497.83,-162"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="5508.18,-162 5498.18,-166.5 5503.18,-163.2 5498.18,-163.2 5498.18,-162 5498.18,-160.8 5503.18,-160.8 5498.18,-157.5 5508.18,-162 5508.18,-162"/>
			<text textAnchor="middle" x="5459" y="-165.8">majority</text>
			</g>
			<g id="n38" className="node">
			<ellipse cx="5758" cy="-162" rx="53.0913" ry="18"/>
			<text textAnchor="middle" x="5758" y="-158.3">Secundo </text>
			</g>
			<g id="edge952" className="edge majority">
			<path strokeWidth="3.4" d="M5605.92,-162C5632.45,-162 5665.74,-162 5694.31,-162"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="5704.61,-162 5694.61,-166.5 5699.61,-163.2 5694.61,-163.2 5694.61,-162 5694.61,-160.8 5699.61,-160.8 5694.61,-157.5 5704.61,-162 5704.61,-162"/>
			<text textAnchor="middle" x="5655" y="-165.8">majority</text>
			</g>
			<g id="n39" className="node">
			<ellipse cx="5956" cy="-162" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="5956" y="-158.3">salutat </text>
			</g>
			<g id="edge598" className="edge majority">
			<path strokeWidth="3.4" d="M5811.52,-162C5838.67,-162 5871.8,-162 5899.39,-162"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="5909.66,-162 5899.66,-166.5 5904.66,-163.2 5899.66,-163.2 5899.66,-162 5899.66,-160.8 5904.66,-160.8 5899.66,-157.5 5909.66,-162 5909.66,-162"/>
			<text textAnchor="middle" x="5861" y="-165.8">majority</text>
			</g>
			<g id="n40" className="node">
			<ellipse cx="6148" cy="-162" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="6148" y="-158.3">beatam </text>
			</g>
			<g id="edge697" className="edge majority">
			<path strokeWidth="3.4" d="M6002.51,-162C6028.71,-162 6061.89,-162 6089.84,-162"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="6099.88,-162 6089.88,-166.5 6094.88,-163.2 6089.88,-163.2 6089.88,-162 6089.88,-160.8 6094.88,-160.8 6089.88,-157.5 6099.88,-162 6099.88,-162"/>
			<text textAnchor="middle" x="6051" y="-165.8">majority</text>
			</g>
			<g id="n41" className="node">
			<ellipse cx="6350" cy="-162" rx="55.7903" ry="18"/>
			<text textAnchor="middle" x="6350" y="-158.3">uirginem </text>
			</g>
			<g id="edge263" className="edge majority">
			<path strokeWidth="3.4" d="M6196.14,-162C6222.27,-162 6255.15,-162 6283.71,-162"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="6294.02,-162 6284.02,-166.5 6289.02,-163.2 6284.02,-163.2 6284.02,-162 6284.02,-160.8 6289.02,-160.8 6284.02,-157.5 6294.02,-162 6294.02,-162"/>
			<text textAnchor="middle" x="6245" y="-165.8">majority</text>
			</g>
			<g id="n42" className="node">
			<ellipse cx="6546" cy="-162" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="6546" y="-158.3">ipsam </text>
			</g>
			<g id="edge674" className="edge majority">
			<path strokeWidth="3.4" d="M6406.07,-162C6433.79,-162 6467.15,-162 6494.24,-162"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="6504.29,-162 6494.29,-166.5 6499.29,-163.2 6494.29,-163.2 6494.29,-162 6494.29,-160.8 6499.29,-160.8 6494.29,-157.5 6504.29,-162 6504.29,-162"/>
			<text textAnchor="middle" x="6455" y="-165.8">majority</text>
			</g>
			<g id="n43" className="node">
			<ellipse cx="6771" cy="-162" rx="84.485" ry="18"/>
			<text textAnchor="middle" x="6771" y="-158.3">commendando. </text>
			</g>
			<g id="edge1097" className="edge majority">
			<path strokeWidth="3.4" d="M6587.64,-162C6612.36,-162 6645.01,-162 6675.85,-162"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="6686.22,-162 6676.22,-166.5 6681.22,-163.2 6676.22,-163.2 6676.22,-162 6676.22,-160.8 6681.22,-160.8 6676.22,-157.5 6686.22,-162 6686.22,-162"/>
			<text textAnchor="middle" x="6637" y="-165.8">majority</text>
			</g>
			<g id="n44" className="node">
			<ellipse cx="6996" cy="-162" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="6996" y="-158.3">Tercio </text>
			</g>
			<g id="edge535" className="edge majority">
			<path strokeWidth="3.4" d="M6855.67,-162C6885.24,-162 6917.6,-162 6943.68,-162"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="6953.71,-162 6943.71,-166.5 6948.71,-163.2 6943.71,-163.2 6943.71,-162 6943.71,-160.8 6948.71,-160.8 6943.71,-157.5 6953.71,-162 6953.71,-162"/>
			<text textAnchor="middle" x="6905" y="-165.8">majority</text>
			</g>
			<g id="n45" className="node">
			<ellipse cx="7178" cy="-162" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="7178" y="-158.3">dirigit </text>
			</g>
			<g id="edge618" className="edge majority">
			<path strokeWidth="3.4" d="M7038.3,-162C7064.16,-162 7097.7,-162 7125.32,-162"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="7135.59,-162 7125.59,-166.5 7130.59,-163.2 7125.59,-163.2 7125.59,-162 7125.59,-160.8 7130.59,-160.8 7125.59,-157.5 7135.59,-162 7135.59,-162"/>
			<text textAnchor="middle" x="7087" y="-165.8">majority</text>
			</g>
			<g id="n47" className="node">
			<ellipse cx="7442" cy="-190" rx="61.99" ry="18"/>
			<text textAnchor="middle" x="7442" y="-186.3">peticiones </text>
			</g>
			<g id="edge1083" className="edge majority">
			<path strokeWidth="3" d="M7219.08,-166.283C7260.03,-170.66 7324.37,-177.536 7373.25,-182.76"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="7383.44,-183.848 7373.01,-187.26 7378.36,-184.311 7373.39,-183.78 7373.49,-182.785 7373.6,-181.791 7378.57,-182.322 7373.97,-178.311 7383.44,-183.848 7383.44,-183.848"/>
			<text textAnchor="middle" x="7300" y="-183.8">majority</text>
			</g>
			<g id="n46" className="node">
			<ellipse cx="7442" cy="-136" rx="44.6926" ry="18"/>
			<text textAnchor="middle" x="7442" y="-132.3">preces </text>
			</g>
			<g id="edge646" className="edge">
			<path strokeWidth="1.2" d="M7217.01,-155.045C7223.98,-153.916 7231.2,-152.843 7238,-152 7288.46,-145.748 7346.29,-141.471 7387.28,-138.923"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="7397.33,-138.313 7387.62,-143.411 7392.34,-138.716 7387.35,-139.019 7387.35,-138.92 7387.34,-138.82 7392.33,-138.516 7387.07,-134.428 7397.33,-138.313 7397.33,-138.313"/>
			<text textAnchor="middle" x="7300" y="-155.8">Gr314, Mü28315</text>
			</g>
			<g id="n48" className="node">
			<ellipse cx="7637" cy="-93" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="7637" y="-89.3">suas </text>
			</g>
			<g id="edge521" className="edge majority">
			<path strokeWidth="2.8" d="M7487.32,-177.652C7516.01,-168.636 7553.56,-154.875 7584,-137 7594.05,-131.101 7604.06,-123.226 7612.58,-115.77"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="7620.24,-108.827 7615.85,-118.877 7617.14,-112.852 7613.44,-116.209 7612.83,-115.542 7612.23,-114.875 7615.93,-111.518 7609.81,-112.207 7620.24,-108.827 7620.24,-108.827"/>
			<text textAnchor="middle" x="7553" y="-167.8">majority</text>
			</g>
			<g id="n49" className="node">
			<ellipse cx="7797" cy="-147" rx="27" ry="18"/>
			<text textAnchor="middle" x="7797" y="-143.3">ad </text>
			</g>
			<g id="edge682" className="edge">
			<path d="M7503.48,-188.301C7528.45,-187.261 7557.66,-185.607 7584,-183 7659.12,-175.564 7677.96,-172.727 7752,-158 7755.07,-157.39 7758.24,-156.704 7761.42,-155.981"/>
			<polygon fill="#000000" stroke="#000000" points="7771.43,-153.591 7762.75,-160.291 7766.56,-154.752 7761.7,-155.914 7761.7,-155.914 7761.7,-155.914 7766.56,-154.752 7760.66,-151.537 7771.43,-153.591 7771.43,-153.591"/>
			<text textAnchor="middle" x="7637" y="-184.8">Sg524</text>
			</g>
			<g id="edge812" className="edge">
			<path d="M7481.56,-127.148C7494.42,-124.214 7508.82,-120.946 7522,-118 7546.24,-112.581 7573.41,-106.619 7595.14,-101.877"/>
			<polygon fill="#000000" stroke="#000000" points="7605.02,-99.7228 7596.21,-106.249 7600.13,-100.788 7595.25,-101.853 7595.25,-101.853 7595.25,-101.853 7600.13,-100.788 7594.29,-97.4559 7605.02,-99.7228 7605.02,-99.7228"/>
			<text textAnchor="middle" x="7553" y="-121.8">Gr314</text>
			</g>
			<g id="edge53" className="edge">
			<path d="M7486.99,-137.371C7557.37,-139.564 7694,-143.821 7759.39,-145.859"/>
			<polygon fill="#000000" stroke="#000000" points="7769.63,-146.178 7759.49,-150.364 7764.63,-146.022 7759.63,-145.867 7759.63,-145.867 7759.63,-145.867 7764.63,-146.022 7759.77,-141.369 7769.63,-146.178 7769.63,-146.178"/>
			<text textAnchor="middle" x="7637" y="-146.8">Mü28315</text>
			</g>
			<g id="edge307" className="edge majority">
			<path strokeWidth="3" d="M7670.91,-96.9541C7694.22,-100.529 7725.86,-106.971 7752,-118 7758.2,-120.614 7764.46,-124.118 7770.24,-127.785"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="7778.86,-133.577 7768.05,-131.731 7774.15,-131.617 7770,-128.827 7770.56,-127.997 7771.12,-127.167 7775.27,-129.957 7773.07,-124.262 7778.86,-133.577 7778.86,-133.577"/>
			<text textAnchor="middle" x="7721" y="-121.8">majority</text>
			</g>
			<g id="n50" className="node">
			<ellipse cx="7970" cy="-147" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="7970" y="-143.3">beatam </text>
			</g>
			<g id="edge824" className="edge majority">
			<path strokeWidth="3.4" d="M7824.34,-147C7847.47,-147 7881.93,-147 7911.42,-147"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="7921.61,-147 7911.61,-151.5 7916.61,-148.2 7911.61,-148.2 7911.61,-147 7911.61,-145.8 7916.61,-145.8 7911.61,-142.5 7921.61,-147 7921.61,-147"/>
			<text textAnchor="middle" x="7873" y="-150.8">majority</text>
			</g>
			<g id="n51" className="node">
			<ellipse cx="8175" cy="-147" rx="58.4896" ry="18"/>
			<text textAnchor="middle" x="8175" y="-143.3">uirginem. </text>
			</g>
			<g id="edge324" className="edge majority">
			<path strokeWidth="3.4" d="M8018.34,-147C8044.54,-147 8077.55,-147 8106.42,-147"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="8116.44,-147 8106.44,-151.5 8111.44,-148.2 8106.44,-148.2 8106.44,-147 8106.44,-145.8 8111.44,-145.8 8106.44,-142.5 8116.44,-147 8116.44,-147"/>
			<text textAnchor="middle" x="8067" y="-150.8">majority</text>
			</g>
			<g id="n52" className="node">
			<ellipse cx="8386" cy="-147" rx="53.0913" ry="18"/>
			<text textAnchor="middle" x="8386" y="-143.3">Secunda </text>
			</g>
			<g id="edge774" className="edge majority">
			<path strokeWidth="3.4" d="M8233.66,-147C8261.21,-147 8294.24,-147 8322.39,-147"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="8332.53,-147 8322.53,-151.5 8327.53,-148.2 8322.53,-148.2 8322.53,-147 8322.53,-145.8 8327.53,-145.8 8322.53,-142.5 8332.53,-147 8332.53,-147"/>
			<text textAnchor="middle" x="8283" y="-150.8">majority</text>
			</g>
			<g id="n53" className="node">
			<ellipse cx="8567" cy="-147" rx="28.6953" ry="18"/>
			<text textAnchor="middle" x="8567" y="-143.3">ibi: </text>
			</g>
			<g id="edge957" className="edge majority">
			<path strokeWidth="3.4" d="M8439.74,-147C8468.02,-147 8502.22,-147 8527.89,-147"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="8537.98,-147 8527.98,-151.5 8532.98,-148.2 8527.98,-148.2 8527.98,-147 8527.98,-145.8 8532.98,-145.8 8527.98,-142.5 8537.98,-147 8537.98,-147"/>
			<text textAnchor="middle" x="8489" y="-150.8">majority</text>
			</g>
			<g id="n54" className="node">
			<ellipse cx="8725" cy="-147" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="8725" y="-143.3">aue </text>
			</g>
			<g id="edge95" className="edge majority">
			<path strokeWidth="3.4" d="M8595.89,-147C8620.45,-147 8656.49,-147 8684.1,-147"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="8694.23,-147 8684.23,-151.5 8689.23,-148.2 8684.23,-148.2 8684.23,-147 8684.23,-145.8 8689.23,-145.8 8684.23,-142.5 8694.23,-147 8694.23,-147"/>
			<text textAnchor="middle" x="8645" y="-150.8">majority</text>
			</g>
			<g id="n55" className="node">
			<ellipse cx="8887" cy="-147" rx="32.4942" ry="18"/>
			<text textAnchor="middle" x="8887" y="-143.3">ueri </text>
			</g>
			<g id="edge1153" className="edge majority">
			<path strokeWidth="3.4" d="M8755.72,-147C8780.56,-147 8816.28,-147 8844.04,-147"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="8854.25,-147 8844.25,-151.5 8849.25,-148.2 8844.25,-148.2 8844.25,-147 8844.25,-145.8 8849.25,-145.8 8844.25,-142.5 8854.25,-147 8854.25,-147"/>
			<text textAnchor="middle" x="8805" y="-150.8">majority</text>
			</g>
			<g id="n56" className="node">
			<ellipse cx="9082" cy="-147" rx="63.8893" ry="18"/>
			<text textAnchor="middle" x="9082" y="-143.3">Salomonis; </text>
			</g>
			<g id="edge778" className="edge majority">
			<path strokeWidth="3.4" d="M8919.87,-147C8943.82,-147 8977.6,-147 9008.05,-147"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="9018.23,-147 9008.23,-151.5 9013.23,-148.2 9008.23,-148.2 9008.23,-147 9008.23,-145.8 9013.23,-145.8 9008.23,-142.5 9018.23,-147 9018.23,-147"/>
			<text textAnchor="middle" x="8969" y="-150.8">majority</text>
			</g>
			<g id="n57" className="node">
			<ellipse cx="9285" cy="-147" rx="40.8928" ry="18"/>
			<text textAnchor="middle" x="9285" y="-143.3">tercia </text>
			</g>
			<g id="edge915" className="edge majority">
			<path strokeWidth="3.4" d="M9145.77,-147C9174.04,-147 9206.97,-147 9233.59,-147"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="9243.84,-147 9233.84,-151.5 9238.84,-148.2 9233.84,-148.2 9233.84,-147 9233.84,-145.8 9238.84,-145.8 9233.84,-142.5 9243.84,-147 9243.84,-147"/>
			<text textAnchor="middle" x="9195" y="-150.8">majority</text>
			</g>
			<g id="n58" className="node">
			<ellipse cx="9453" cy="-147" rx="28.6953" ry="18"/>
			<text textAnchor="middle" x="9453" y="-143.3">ibi: </text>
			</g>
			<g id="edge274" className="edge majority">
			<path strokeWidth="3.4" d="M9326.18,-147C9352.92,-147 9387.81,-147 9414.07,-147"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="9424.39,-147 9414.39,-151.5 9419.39,-148.2 9414.39,-148.2 9414.39,-147 9414.39,-145.8 9419.39,-145.8 9414.39,-142.5 9424.39,-147 9424.39,-147"/>
			<text textAnchor="middle" x="9375" y="-150.8">majority</text>
			</g>
			<g id="n59" className="node">
			<ellipse cx="9658" cy="-147" rx="77.9862" ry="18"/>
			<text textAnchor="middle" x="9658" y="-143.3">supplicamus. &#160;</text>
			</g>
			<g id="edge643" className="edge majority">
			<path strokeWidth="3.4" d="M9481.8,-147C9504.53,-147 9537.97,-147 9569.55,-147"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="9579.72,-147 9569.72,-151.5 9574.72,-148.2 9569.72,-148.2 9569.72,-147 9569.72,-145.8 9574.72,-145.8 9569.72,-142.5 9579.72,-147 9579.72,-147"/>
			<text textAnchor="middle" x="9531" y="-150.8">majority</text>
			</g>
			<g id="n61" className="node">
			<ellipse cx="10318" cy="-93" rx="35.9954" ry="18"/>
			<text textAnchor="middle" x="10318" y="-89.3">nos. &#160;</text>
			</g>
			<g id="edge1065" className="edge">
			<path strokeWidth="1.2" d="M9700.54,-131.837C9716.97,-126.499 9736.16,-121.069 9754,-118 9944.29,-85.2707 10175.8,-88.1464 10271.9,-91.1818"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="10282.1,-91.522 10271.9,-95.6869 10277.1,-91.4556 10272.1,-91.2893 10272.1,-91.1894 10272.1,-91.0894 10277.1,-91.2557 10272.2,-86.6919 10282.1,-91.522 10282.1,-91.522"/>
			<text textAnchor="middle" x="9971" y="-121.8">Go325, Kf133</text>
			</g>
			<g id="n60" className="node">
			<ellipse cx="10318" cy="-198" rx="63.0888" ry="18"/>
			<text textAnchor="middle" x="10318" y="-194.3">Notandum </text>
			</g>
			<g id="edge269" className="edge">
			<path strokeWidth="2.2" d="M9722.79,-157.122C9733.2,-158.566 9743.89,-159.924 9754,-161 9929.98,-179.719 10138,-190.445 10245.2,-195.137"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="10255.2,-195.572 10245,-199.635 10250.2,-195.955 10245.2,-195.739 10245.2,-195.139 10245.2,-194.54 10250.2,-194.756 10245.4,-190.644 10255.2,-195.572 10255.2,-195.572"/>
			<text textAnchor="middle" x="9971" y="-195.8">Ba96, Er16, Gr314, Mü11475, Mü22405, Mü28315, Wi3818</text>
			</g>
			<g id="n64" className="node">
			<ellipse cx="10707" cy="-136" rx="39.7935" ry="18"/>
			<text textAnchor="middle" x="10707" y="-132.3">Nota: </text>
			</g>
			<g id="edge136" className="edge">
			<path strokeWidth="1.6" d="M9735.99,-146.191C9939.88,-144.049 10489.6,-138.273 10657,-136.515"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="10667.2,-136.407 10657.3,-141.012 10662.2,-136.76 10657.2,-136.812 10657.2,-136.512 10657.2,-136.213 10662.2,-136.16 10657.2,-132.013 10667.2,-136.407 10667.2,-136.407"/>
			<text textAnchor="middle" x="10318" y="-144.8">Kr185, Kr299, MüU151, Sg524</text>
			</g>
			<g id="n63" className="node">
			<ellipse cx="10707" cy="-79" rx="35.9954" ry="18"/>
			<text textAnchor="middle" x="10707" y="-75.3">Item </text>
			</g>
			<g id="edge451" className="edge">
			<path d="M10352.9,-88.6827C10378.9,-85.5918 10415.6,-81.6898 10448,-80 10522.5,-76.1114 10609.2,-76.8587 10660.8,-77.8561"/>
			<polygon fill="#000000" stroke="#000000" points="10670.9,-78.0643 10660.8,-82.3578 10665.9,-77.9616 10660.9,-77.8588 10660.9,-77.8588 10660.9,-77.8588 10665.9,-77.9616 10661,-73.3597 10670.9,-78.0643 10670.9,-78.0643"/>
			<text textAnchor="middle" x="10476" y="-83.8">Go325</text>
			</g>
			<g id="edge1184" className="edge">
			<path d="M10353,-96.7783C10422,-104.447 10578.7,-121.857 10658.1,-130.672"/>
			<polygon fill="#000000" stroke="#000000" points="10668.3,-131.806 10657.8,-135.174 10663.3,-131.254 10658.3,-130.702 10658.3,-130.702 10658.3,-130.702 10663.3,-131.254 10658.8,-126.229 10668.3,-131.806 10668.3,-131.806"/>
			<text textAnchor="middle" x="10476" y="-116.8">Kf133</text>
			</g>
			<g id="n62" className="node">
			<ellipse cx="10707" cy="-190" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="10707" y="-186.3">quod </text>
			</g>
			<g id="edge578" className="edge">
			<path d="M10381.2,-196.715C10459.2,-195.101 10591.2,-192.373 10660.5,-190.941"/>
			<polygon fill="#000000" stroke="#000000" points="10670.6,-190.731 10660.7,-195.437 10665.6,-190.835 10660.6,-190.938 10660.6,-190.938 10660.6,-190.938 10665.6,-190.835 10660.5,-186.439 10670.6,-190.731 10670.6,-190.731"/>
			<text textAnchor="middle" x="10476" y="-198.8">Wi3818</text>
			</g>
			<g id="n65" className="node">
			<ellipse cx="11260" cy="-190" rx="55.7903" ry="18"/>
			<text textAnchor="middle" x="11260" y="-186.3">salutacio </text>
			</g>
			<g id="edge1295" className="edge">
			<path strokeWidth="2" d="M10374.8,-205.942C10397.4,-208.904 10423.9,-212.023 10448,-214 10480.8,-216.695 10489.1,-216.333 10522,-217 10817.1,-222.979 10893.8,-250.451 11186,-209 11193.5,-207.939 11201.3,-206.39 11208.9,-204.628"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="11218.8,-202.212 11210.1,-208.962 11214.1,-203.887 11209.2,-205.077 11209.1,-204.591 11209,-204.105 11213.8,-202.916 11208,-200.22 11218.8,-202.212 11218.8,-202.212"/>
			<text textAnchor="middle" x="10707" y="-234.8">Ba96, Er16, Gr314, Mü11475, Mü22405, Mü28315</text>
			</g>
			<g id="edge904" className="edge">
			<path d="M10743.7,-190C10834.8,-190 11076.8,-190 11193.8,-190"/>
			<polygon fill="#000000" stroke="#000000" points="11204.1,-190 11194.1,-194.5 11199.1,-190 11194.1,-190 11194.1,-190 11194.1,-190 11199.1,-190 11194.1,-185.5 11204.1,-190 11204.1,-190"/>
			<text textAnchor="middle" x="11048" y="-193.8">Wi3818</text>
			</g>
			<g id="n157" className="node">
			<ellipse cx="29149" cy="-114" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="29149" y="-110.3">Nota </text>
			</g>
			<g id="edge1111" className="edge">
			<path d="M10742.8,-79C10829.8,-79 11063.9,-79 11259,-79 11259,-79 11259,-79 28873,-79 28955.7,-79 29051.4,-94.7849 29105.3,-105.154"/>
			<polygon fill="#000000" stroke="#000000" points="29115.2,-107.085 29104.5,-109.584 29110.2,-106.126 29105.3,-105.167 29105.3,-105.167 29105.3,-105.167 29110.2,-106.126 29106.2,-100.751 29115.2,-107.085 29115.2,-107.085"/>
			<text textAnchor="middle" x="20066" y="-82.8">Go325</text>
			</g>
			<g id="edge15" className="edge">
			<path strokeWidth="1.8" d="M10746.7,-136.459C10828.4,-137.948 11024.3,-144.26 11186,-171 11193.2,-172.19 11200.7,-173.761 11208.1,-175.491"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="11218,-177.929 11207.2,-179.906 11213,-177.121 11208.2,-175.925 11208.3,-175.537 11208.4,-175.148 11213.2,-176.344 11209.3,-171.167 11218,-177.929 11218,-177.929"/>
			<text textAnchor="middle" x="11048" y="-174.8">Kf133, Kr185, Kr299, MüU151, Sg524</text>
			</g>
			<g id="n66" className="node">
			<ellipse cx="11443" cy="-190" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="11443" y="-186.3">per </text>
			</g>
			<g id="edge61" className="edge majority">
			<path strokeWidth="3.2" d="M11316.3,-190C11344.4,-190 11377.9,-190 11403.2,-190"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="11413.5,-190 11403.5,-194.5 11408.5,-191.1 11403.5,-191.1 11403.5,-190 11403.5,-188.9 11408.5,-188.9 11403.5,-185.5 11413.5,-190 11413.5,-190"/>
			<text textAnchor="middle" x="11365" y="-193.8">majority</text>
			</g>
			<g id="n67" className="node">
			<ellipse cx="11610" cy="-190" rx="39.7935" ry="18"/>
			<text textAnchor="middle" x="11610" y="-186.3">quam </text>
			</g>
			<g id="edge619" className="edge majority">
			<path strokeWidth="3.2" d="M11472.4,-190C11496.4,-190 11531.4,-190 11560,-190"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="11570.2,-190 11560.2,-194.5 11565.2,-191.1 11560.2,-191.1 11560.2,-190 11560.2,-188.9 11565.2,-188.9 11560.2,-185.5 11570.2,-190 11570.2,-190"/>
			<text textAnchor="middle" x="11521" y="-193.8">majority</text>
			</g>
			<g id="n68" className="node">
			<ellipse cx="11811" cy="-190" rx="62.2891" ry="18"/>
			<text textAnchor="middle" x="11811" y="-186.3">incarnacio </text>
			</g>
			<g id="edge1329" className="edge majority">
			<path strokeWidth="3.2" d="M11649.8,-190C11674.9,-190 11708.4,-190 11738.2,-190"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="11748.5,-190 11738.5,-194.5 11743.5,-191.1 11738.5,-191.1 11738.5,-190 11738.5,-188.9 11743.5,-188.9 11738.5,-185.5 11748.5,-190 11748.5,-190"/>
			<text textAnchor="middle" x="11699" y="-193.8">majority</text>
			</g>
			<g id="n69" className="node">
			<ellipse cx="12004" cy="-190" rx="31.6951" ry="18"/>
			<text textAnchor="middle" x="12004" y="-186.3">Filii </text>
			</g>
			<g id="edge313" className="edge majority">
			<path strokeWidth="3.2" d="M11873.5,-190C11902.4,-190 11936.2,-190 11962,-190"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="11972.1,-190 11962.1,-194.5 11967.1,-191.1 11962.1,-191.1 11962.1,-190 11962.1,-188.9 11967.1,-188.9 11962.1,-185.5 11972.1,-190 11972.1,-190"/>
			<text textAnchor="middle" x="11923" y="-193.8">majority</text>
			</g>
			<g id="n70" className="node">
			<ellipse cx="12163" cy="-190" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="12163" y="-186.3">Dei </text>
			</g>
			<g id="edge214" className="edge majority">
			<path strokeWidth="3.2" d="M12036,-190C12061.1,-190 12096.6,-190 12123.5,-190"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="12133.7,-190 12123.7,-194.5 12128.7,-191.1 12123.7,-191.1 12123.7,-190 12123.7,-188.9 12128.7,-188.9 12123.7,-185.5 12133.7,-190 12133.7,-190"/>
			<text textAnchor="middle" x="12085" y="-193.8">majority</text>
			</g>
			<g id="n71" className="node">
			<ellipse cx="12356" cy="-190" rx="65.7887" ry="18"/>
			<text textAnchor="middle" x="12356" y="-186.3">annunciata </text>
			</g>
			<g id="edge912" className="edge majority">
			<path strokeWidth="3.2" d="M12192.6,-190C12215.7,-190 12249.3,-190 12279.9,-190"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="12290.2,-190 12280.2,-194.5 12285.2,-191.1 12280.2,-191.1 12280.2,-190 12280.2,-188.9 12285.2,-188.9 12280.2,-185.5 12290.2,-190 12290.2,-190"/>
			<text textAnchor="middle" x="12241" y="-193.8">majority</text>
			</g>
			<g id="n72" className="node">
			<ellipse cx="12609" cy="-199" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="12609" y="-195.3">est,</text>
			</g>
			<g id="edge770" className="edge majority">
			<path strokeWidth="2.6" d="M12421.3,-192.306C12468.7,-194.004 12531.4,-196.255 12570.8,-197.665"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="12581,-198.031 12570.8,-202.169 12575.9,-198.651 12570.9,-198.472 12571,-197.672 12571,-196.873 12576,-197.052 12571.1,-193.175 12581,-198.031 12581,-198.031"/>
			<text textAnchor="middle" x="12471" y="-198.8">majority</text>
			</g>
			<g id="n73" className="node">
			<ellipse cx="12824" cy="-157" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="12824" y="-153.3">est </text>
			</g>
			<g id="edge935" className="edge">
			<path strokeWidth="1.4" d="M12404.4,-177.794C12436.7,-170.118 12480.6,-160.944 12520,-157 12615.6,-147.421 12729,-151.509 12786.2,-154.64"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="12796.2,-155.209 12785.9,-159.133 12791.2,-155.125 12786.2,-154.84 12786.2,-154.64 12786.2,-154.441 12791.2,-154.725 12786.4,-150.148 12796.2,-155.209 12796.2,-155.209"/>
			<text textAnchor="middle" x="12609" y="-160.8">Kr185, Mü22405, Sg524</text>
			</g>
			<g id="edge545" className="edge majority">
			<path strokeWidth="2.4" d="M12636.1,-193.85C12674,-186.383 12744.3,-172.524 12787,-164.094"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="12797,-162.126 12788.1,-168.476 12792.2,-163.78 12787.3,-164.748 12787.2,-164.061 12787.1,-163.374 12792,-162.407 12786.3,-159.646 12797,-162.126 12797,-162.126"/>
			<text textAnchor="middle" x="12747" y="-181.8">majority</text>
			</g>
			<g id="n74" className="node">
			<ellipse cx="13000" cy="-173" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="13000" y="-169.3">uerbum </text>
			</g>
			<g id="edge537" className="edge">
			<path d="M12637.3,-199.354C12692.9,-199.739 12823.5,-198.909 12932,-185 12936.4,-184.435 12941,-183.778 12945.5,-183.067"/>
			<polygon fill="#000000" stroke="#000000" points="12955.5,-181.441 12946.3,-187.493 12950.6,-182.247 12945.6,-183.052 12945.6,-183.052 12945.6,-183.052 12950.6,-182.247 12944.9,-178.611 12955.5,-181.441 12955.5,-181.441"/>
			<text textAnchor="middle" x="12824" y="-199.8">Ba96</text>
			</g>
			<g id="edge1032" className="edge majority">
			<path strokeWidth="3" d="M12851.8,-159.465C12875.5,-161.646 12911,-164.905 12941.1,-167.678"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="12951.1,-168.598 12940.8,-172.163 12946.1,-169.136 12941.1,-168.678 12941.2,-167.682 12941.3,-166.686 12946.2,-167.144 12941.6,-163.201 12951.1,-168.598 12951.1,-168.598"/>
			<text textAnchor="middle" x="12901" y="-169.8">majority</text>
			</g>
			<g id="n75" className="node">
			<ellipse cx="13194" cy="-147" rx="45.4919" ry="18"/>
			<text textAnchor="middle" x="13194" y="-143.3">bonum </text>
			</g>
			<g id="edge714" className="edge majority">
			<path strokeWidth="3" d="M13047,-166.772C13075.2,-162.956 13111.3,-158.059 13140.6,-154.093"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="13150.7,-152.732 13141.4,-158.534 13145.8,-154.394 13140.9,-155.065 13140.8,-154.074 13140.6,-153.084 13145.6,-152.413 13140.2,-149.615 13150.7,-152.732 13150.7,-152.732"/>
			<text textAnchor="middle" x="13099" y="-166.8">majority</text>
			</g>
			<g id="n78" className="node">
			<ellipse cx="13562" cy="-179" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="13562" y="-175.3">suaue. </text>
			</g>
			<g id="edge1189" className="edge">
			<path d="M13048.5,-177.786C13055.1,-178.289 13061.7,-178.718 13068,-179 13227.9,-186.147 13417.3,-182.85 13507.8,-180.556"/>
			<polygon fill="#000000" stroke="#000000" points="13517.8,-180.296 13507.9,-185.054 13512.8,-180.426 13507.8,-180.556 13507.8,-180.556 13507.8,-180.556 13512.8,-180.426 13507.7,-176.057 13517.8,-180.296 13517.8,-180.296"/>
			<text textAnchor="middle" x="13289" y="-186.8">Wi3818</text>
			</g>
			<g id="n76" className="node">
			<ellipse cx="13365" cy="-147" rx="27" ry="18"/>
			<text textAnchor="middle" x="13365" y="-143.3">et </text>
			</g>
			<g id="edge348" className="edge majority">
			<path strokeWidth="3" d="M13239.8,-147C13267.3,-147 13302.1,-147 13327.8,-147"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="13337.9,-147 13327.9,-151.5 13332.9,-148 13327.9,-148 13327.9,-147 13327.9,-146 13332.9,-146 13327.9,-142.5 13337.9,-147 13337.9,-147"/>
			<text textAnchor="middle" x="13289" y="-150.8">majority</text>
			</g>
			<g id="edge978" className="edge majority">
			<path strokeWidth="2.6" d="M13391.9,-149.52C13418.6,-152.308 13461.4,-157.307 13498,-164 13503.3,-164.974 13508.9,-166.111 13514.4,-167.317"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="13524.2,-169.539 13513.4,-171.714 13519.1,-169.213 13514.2,-168.106 13514.4,-167.325 13514.6,-166.545 13519.5,-167.652 13515.4,-162.937 13524.2,-169.539 13524.2,-169.539"/>
			<text textAnchor="middle" x="13454" y="-167.8">majority</text>
			</g>
			<g id="n77" className="node">
			<ellipse cx="13562" cy="-125" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="13562" y="-121.3">swaue. </text>
			</g>
			<g id="edge741" className="edge">
			<path strokeWidth="1.2" d="M13385.9,-135.222C13393.2,-131.516 13401.8,-127.896 13410,-126 13441.5,-118.755 13477.7,-118.26 13506.8,-119.692"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="13517.1,-120.297 13506.9,-124.206 13512.1,-120.105 13507.1,-119.813 13507.2,-119.714 13507.2,-119.614 13512.1,-119.906 13507.4,-115.221 13517.1,-120.297 13517.1,-120.297"/>
			<text textAnchor="middle" x="13454" y="-129.8">Er16, Kf133</text>
			</g>
			<g id="n79" className="node">
			<ellipse cx="13769" cy="-148" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="13769" y="-144.3">Nam </text>
			</g>
			<g id="edge497" className="edge majority">
			<path strokeWidth="2.8" d="M13604,-172.801C13638.7,-167.559 13688.2,-160.063 13723.8,-154.687"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="13733.9,-153.161 13724.7,-159.105 13729.1,-154.798 13724.1,-155.546 13724,-154.656 13723.9,-153.766 13728.8,-153.018 13723.3,-150.206 13733.9,-153.161 13733.9,-153.161"/>
			<text textAnchor="middle" x="13670" y="-171.8">majority</text>
			</g>
			<g id="edge880" className="edge">
			<path strokeWidth="1.2" d="M13608.2,-125.407C13638.3,-126.238 13678.7,-128.43 13714,-134 13718.4,-134.699 13723,-135.602 13727.6,-136.613"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="13737.4,-138.961 13726.6,-141.011 13732.5,-137.895 13727.6,-136.731 13727.7,-136.634 13727.7,-136.537 13732.5,-137.7 13728.7,-132.257 13737.4,-138.961 13737.4,-138.961"/>
			<text textAnchor="middle" x="13670" y="-137.8">Er16, Kf133</text>
			</g>
			<g id="n80" className="node">
			<ellipse cx="13979" cy="-179" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="13979" y="-175.3">sicut </text>
			</g>
			<g id="edge930" className="edge majority">
			<path strokeWidth="2.8" d="M13804.3,-153.119C13839.8,-158.407 13895.3,-166.68 13934,-172.444"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="13943.9,-173.925 13933.4,-176.902 13938.9,-174.078 13933.9,-173.341 13934.1,-172.451 13934.2,-171.561 13939.1,-172.298 13934.7,-168 13943.9,-173.925 13943.9,-173.925"/>
			<text textAnchor="middle" x="13873" y="-172.8">majority</text>
			</g>
			<g id="n81" className="node">
			<ellipse cx="13979" cy="-125" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="13979" y="-121.3">sicud </text>
			</g>
			<g id="edge546" className="edge">
			<path strokeWidth="1.2" d="M13803,-141.346C13809.9,-140.106 13817.2,-138.915 13824,-138 13859.6,-133.218 13900,-129.885 13930.5,-127.791"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="13940.9,-127.102 13931.2,-132.256 13935.9,-127.534 13930.9,-127.866 13930.9,-127.766 13930.9,-127.667 13935.9,-127.335 13930.6,-123.276 13940.9,-127.102 13940.9,-127.102"/>
			<text textAnchor="middle" x="13873" y="-141.8">Gr314, Kf133</text>
			</g>
			<g id="n82" className="node">
			<ellipse cx="14206" cy="-144" rx="53.8905" ry="18"/>
			<text textAnchor="middle" x="14206" y="-140.3">antiquus </text>
			</g>
			<g id="edge1200" className="edge majority">
			<path strokeWidth="2.8" d="M14014.2,-173.684C14049.3,-168.225 14104.5,-159.626 14146.6,-153.085"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="14156.7,-151.512 14147.5,-157.496 14151.9,-153.17 14147,-153.939 14146.8,-153.049 14146.7,-152.16 14151.6,-151.391 14146.1,-148.603 14156.7,-151.512 14156.7,-151.512"/>
			<text textAnchor="middle" x="14085" y="-172.8">majority</text>
			</g>
			<g id="edge460" className="edge">
			<path strokeWidth="1.2" d="M14017.4,-126.332C14048.6,-127.649 14094.3,-130.05 14134,-134 14138.1,-134.409 14142.3,-134.88 14146.6,-135.39"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="14156.6,-136.64 14146.1,-139.858 14151.6,-136.116 14146.6,-135.492 14146.6,-135.393 14146.6,-135.294 14151.6,-135.917 14147.2,-130.928 14156.6,-136.64 14156.6,-136.64"/>
			<text textAnchor="middle" x="14085" y="-137.8">Gr314, Kf133</text>
			</g>
			<g id="n83" className="node">
			<ellipse cx="14408" cy="-144" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="14408" y="-140.3">serpens </text>
			</g>
			<g id="edge382" className="edge majority">
			<path strokeWidth="3.2" d="M14260.1,-144C14287,-144 14319.7,-144 14347.4,-144"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="14357.8,-144 14347.8,-148.5 14352.8,-145.1 14347.8,-145.1 14347.8,-144 14347.8,-142.9 14352.8,-142.9 14347.8,-139.5 14357.8,-144 14357.8,-144"/>
			<text textAnchor="middle" x="14309" y="-147.8">majority</text>
			</g>
			<g id="n84" className="node">
			<ellipse cx="14611" cy="-144" rx="55.4913" ry="18"/>
			<text textAnchor="middle" x="14611" y="-140.3">dyabolus </text>
			</g>
			<g id="edge26" className="edge majority">
			<path strokeWidth="3.2" d="M14458.2,-144C14484.5,-144 14517.2,-144 14545.5,-144"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="14555.7,-144 14545.7,-148.5 14550.7,-145.1 14545.7,-145.1 14545.7,-144 14545.7,-142.9 14550.7,-142.9 14545.7,-139.5 14555.7,-144 14555.7,-144"/>
			<text textAnchor="middle" x="14507" y="-147.8">majority</text>
			</g>
			<g id="n85" className="node">
			<ellipse cx="14805" cy="-144" rx="40.0939" ry="18"/>
			<text textAnchor="middle" x="14805" y="-140.3">Euam </text>
			</g>
			<g id="edge474" className="edge majority">
			<path strokeWidth="3.2" d="M14666.2,-144C14694,-144 14727.5,-144 14754.5,-144"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="14764.5,-144 14754.5,-148.5 14759.5,-145.1 14754.5,-145.1 14754.5,-144 14754.5,-142.9 14759.5,-142.9 14754.5,-139.5 14764.5,-144 14764.5,-144"/>
			<text textAnchor="middle" x="14715" y="-147.8">majority</text>
			</g>
			<g id="n86" className="node">
			<ellipse cx="14992" cy="-144" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="14992" y="-140.3">decepit </text>
			</g>
			<g id="edge23" className="edge majority">
			<path strokeWidth="3.2" d="M14845.7,-144C14871.3,-144 14905.1,-144 14933.6,-144"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="14943.8,-144 14933.8,-148.5 14938.8,-145.1 14933.8,-145.1 14933.8,-144 14933.8,-142.9 14938.8,-142.9 14933.8,-139.5 14943.8,-144 14943.8,-144"/>
			<text textAnchor="middle" x="14895" y="-147.8">majority</text>
			</g>
			<g id="n87" className="node">
			<ellipse cx="15167" cy="-144" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="15167" y="-140.3">per </text>
			</g>
			<g id="edge4" className="edge majority">
			<path strokeWidth="3.2" d="M15040.3,-144C15067.7,-144 15101.8,-144 15127.6,-144"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="15137.7,-144 15127.7,-148.5 15132.7,-145.1 15127.7,-145.1 15127.7,-144 15127.7,-142.9 15132.7,-142.9 15127.7,-139.5 15137.7,-144 15137.7,-144"/>
			<text textAnchor="middle" x="15089" y="-147.8">majority</text>
			</g>
			<g id="n88" className="node">
			<ellipse cx="15342" cy="-128" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="15342" y="-124.3">mellam </text>
			</g>
			<g id="edge1017" className="edge">
			<path d="M15196.2,-141.394C15220.1,-139.184 15255.1,-135.946 15284.7,-133.207"/>
			<polygon fill="#000000" stroke="#000000" points="15294.9,-132.262 15285.4,-137.664 15289.9,-132.722 15285,-133.183 15285,-133.183 15285,-133.183 15289.9,-132.722 15284.5,-128.702 15294.9,-132.262 15294.9,-132.262"/>
			<text textAnchor="middle" x="15245" y="-142.8">Sg524</text>
			</g>
			<g id="n89" className="node">
			<ellipse cx="15342" cy="-188" rx="44.6926" ry="18"/>
			<text textAnchor="middle" x="15342" y="-184.3">malam </text>
			</g>
			<g id="edge1281" className="edge majority">
			<path strokeWidth="3" d="M15193.2,-151.992C15200,-154.037 15207.2,-156.172 15214,-158 15239.7,-164.95 15268.7,-171.85 15292.4,-177.277"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="15302.2,-179.509 15291.5,-181.683 15297.1,-179.377 15292.2,-178.27 15292.5,-177.295 15292.7,-176.319 15297.6,-177.427 15293.5,-172.906 15302.2,-179.509 15302.2,-179.509"/>
			<text textAnchor="middle" x="15245" y="-175.8">majority</text>
			</g>
			<g id="n92" className="node">
			<ellipse cx="15855" cy="-183" rx="81.4863" ry="18"/>
			<text textAnchor="middle" x="15855" y="-179.3">suggestionem, </text>
			</g>
			<g id="edge750" className="edge">
			<path d="M15384.1,-119.241C15392,-117.891 15400.2,-116.711 15408,-116 15484.6,-108.991 15689.4,-74.2516 15754,-116 15770.4,-126.585 15757.5,-142.956 15772,-156 15776.4,-159.919 15781.3,-163.271 15786.5,-166.137"/>
			<polygon fill="#000000" stroke="#000000" points="15795.6,-170.517 15784.6,-170.211 15791.1,-168.339 15786.6,-166.161 15786.6,-166.161 15786.6,-166.161 15791.1,-168.339 15788.5,-162.11 15795.6,-170.517 15795.6,-170.517"/>
			<text textAnchor="middle" x="15581" y="-119.8">Sg524</text>
			</g>
			<g id="n91" className="node">
			<ellipse cx="15855" cy="-129" rx="77.1866" ry="18"/>
			<text textAnchor="middle" x="15855" y="-125.3">suggestiones, </text>
			</g>
			<g id="edge1063" className="edge">
			<path d="M15373.9,-175.209C15384.6,-171.313 15396.6,-167.424 15408,-165 15474.6,-150.787 15659.1,-139.16 15768.8,-133.241"/>
			<polygon fill="#000000" stroke="#000000" points="15778.8,-132.704 15769.1,-137.731 15773.9,-132.971 15768.9,-133.238 15768.9,-133.238 15768.9,-133.238 15773.9,-132.971 15768.6,-128.744 15778.8,-132.704 15778.8,-132.704"/>
			<text textAnchor="middle" x="15581" y="-168.8">Mü28315</text>
			</g>
			<g id="n90" className="node">
			<ellipse cx="15855" cy="-237" rx="83.3857" ry="18"/>
			<text textAnchor="middle" x="15855" y="-233.3">suggescionem, </text>
			</g>
			<g id="edge268" className="edge">
			<path strokeWidth="2" d="M15377.8,-199.02C15387.5,-201.709 15398.1,-204.299 15408,-206 15529,-226.741 15670.7,-233.686 15761.4,-235.966"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="15771.6,-236.209 15761.5,-240.47 15766.6,-236.59 15761.6,-236.471 15761.6,-235.972 15761.6,-235.472 15766.6,-235.59 15761.7,-231.473 15771.6,-236.209 15771.6,-236.209"/>
			<text textAnchor="middle" x="15581" y="-238.8">Gr314, Kf133, Kr185, Kr299, Mü22405, Wi3818</text>
			</g>
			<g id="edge407" className="edge">
			<path strokeWidth="1.6" d="M15387,-187.569C15470.4,-186.754 15652.7,-184.969 15763.3,-183.887"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="15773.4,-183.788 15763.5,-188.386 15768.4,-184.137 15763.4,-184.186 15763.4,-183.886 15763.4,-183.586 15768.4,-183.537 15763.4,-179.386 15773.4,-183.788 15773.4,-183.788"/>
			<text textAnchor="middle" x="15581" y="-190.8">Ba96, Er16, Mü11475, MüU151</text>
			</g>
			<g id="n93" className="node">
			<ellipse cx="16349" cy="-183" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="16349" y="-179.3">per </text>
			</g>
			<g id="edge787" className="edge">
			<path d="M15932.5,-127.792C16022.2,-128.022 16174.9,-133.572 16302,-164 16306.7,-165.123 16311.5,-166.659 16316.2,-168.376"/>
			<polygon fill="#000000" stroke="#000000" points="16325.5,-172.076 16314.6,-172.573 16320.9,-170.233 16316.2,-168.389 16316.2,-168.389 16316.2,-168.389 16320.9,-170.233 16317.9,-164.206 16325.5,-172.076 16325.5,-172.076"/>
			<text textAnchor="middle" x="16129" y="-167.8">Mü28315</text>
			</g>
			<g id="edge340" className="edge">
			<path strokeWidth="2" d="M15938.2,-238.186C16028.6,-237.736 16177.6,-231.795 16302,-202 16306.7,-200.877 16311.5,-199.341 16316.2,-197.624"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="16325.5,-193.924 16317.9,-201.794 16321.1,-196.232 16316.4,-198.075 16316.2,-197.611 16316.1,-197.146 16320.7,-195.303 16314.6,-193.427 16325.5,-193.924 16325.5,-193.924"/>
			<text textAnchor="middle" x="16129" y="-241.8">Gr314, Kf133, Kr185, Kr299, Mü22405, Wi3818</text>
			</g>
			<g id="edge92" className="edge">
			<path strokeWidth="1.8" d="M15936.4,-183C16043.7,-183 16229.5,-183 16309.5,-183"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="16319.6,-183 16309.6,-187.5 16314.6,-183.4 16309.6,-183.4 16309.6,-183 16309.6,-182.6 16314.6,-182.6 16309.6,-178.5 16319.6,-183 16319.6,-183"/>
			<text textAnchor="middle" x="16129" y="-186.8">Ba96, Er16, Mü11475, MüU151, Sg524</text>
			</g>
			<g id="n94" className="node">
			<ellipse cx="16520" cy="-183" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="16520" y="-179.3">falsam </text>
			</g>
			<g id="edge898" className="edge majority">
			<path strokeWidth="3.2" d="M16378.3,-183C16402,-183 16436.4,-183 16465.3,-183"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="16475.7,-183 16465.7,-187.5 16470.7,-184.1 16465.7,-184.1 16465.7,-183 16465.7,-181.9 16470.7,-181.9 16465.7,-178.5 16475.7,-183 16475.7,-183"/>
			<text textAnchor="middle" x="16427" y="-186.8">majority</text>
			</g>
			<g id="n96" className="node">
			<ellipse cx="17040" cy="-186" rx="75.2868" ry="18"/>
			<text textAnchor="middle" x="17040" y="-182.3">assercionem, </text>
			</g>
			<g id="edge230" className="edge">
			<path strokeWidth="2" d="M16564.3,-183.251C16649.9,-183.746 16842.2,-184.86 16954,-185.508"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="16964.2,-185.567 16954.2,-190.009 16959.2,-186.038 16954.2,-186.009 16954.2,-185.509 16954.2,-185.009 16959.2,-185.038 16954.2,-181.009 16964.2,-185.567 16964.2,-185.567"/>
			<text textAnchor="middle" x="16764" y="-188.8">Gr314, Kf133, Kr185, Kr299, Mü22405, Wi3818</text>
			</g>
			<g id="n95" className="node">
			<ellipse cx="17040" cy="-132" rx="73.387" ry="18"/>
			<text textAnchor="middle" x="17040" y="-128.3">assertionem, </text>
			</g>
			<g id="edge491" className="edge">
			<path strokeWidth="2" d="M16553.9,-171.226C16562.9,-168.423 16572.7,-165.743 16582,-164 16711.2,-139.696 16864.1,-133.436 16956.2,-132.052"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="16966.3,-131.916 16956.4,-136.55 16961.3,-132.483 16956.3,-132.551 16956.3,-132.051 16956.3,-131.551 16961.3,-131.483 16956.3,-127.551 16966.3,-131.916 16966.3,-131.916"/>
			<text textAnchor="middle" x="16764" y="-167.8">Ba96, Er16, Mü11475, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="n97" className="node">
			<ellipse cx="17250" cy="-178" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="17250" y="-174.3">uel </text>
			</g>
			<g id="edge482" className="edge">
			<path d="M17114.6,-183.168C17147.5,-181.902 17184.9,-180.466 17211.9,-179.429"/>
			<polygon fill="#000000" stroke="#000000" points="17222,-179.038 17212.2,-183.919 17217,-179.23 17212,-179.423 17212,-179.423 17212,-179.423 17217,-179.23 17211.8,-174.926 17222,-179.038 17222,-179.038"/>
			<text textAnchor="middle" x="17169" y="-185.8">Mü22405</text>
			</g>
			<g id="n99" className="node">
			<ellipse cx="17961" cy="-178" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="17961" y="-174.3">per </text>
			</g>
			<g id="edge1040" className="edge">
			<path strokeWidth="1.8" d="M17100.9,-196.695C17111.9,-198.361 17123.3,-199.894 17134,-201 17172.9,-205.013 17182.9,-204.111 17222,-205 17490.4,-211.096 17557.8,-217.164 17826,-205 17865.2,-203.22 17875.9,-206.38 17914,-197 17918.7,-195.848 17923.5,-194.295 17928.2,-192.571"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="17937.5,-188.866 17929.9,-196.739 17933,-191.083 17928.4,-192.929 17928.2,-192.557 17928.1,-192.185 17932.7,-190.34 17926.6,-188.375 17937.5,-188.866 17937.5,-188.866"/>
			<text textAnchor="middle" x="17478" y="-215.8">Gr314, Kf133, Kr185, Kr299, Wi3818</text>
			</g>
			<g id="edge398" className="edge">
			<path strokeWidth="2" d="M17113,-129.559C17251.5,-125.785 17564.7,-121.739 17826,-151 17859.3,-154.73 17896.7,-162.564 17923.4,-168.837"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="17933.5,-171.24 17922.7,-173.297 17928.5,-170.566 17923.7,-169.406 17923.8,-168.92 17923.9,-168.434 17928.8,-169.593 17924.8,-164.543 17933.5,-171.24 17933.5,-171.24"/>
			<text textAnchor="middle" x="17478" y="-139.8">Ba96, Er16, Mü11475, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="n98" className="node">
			<ellipse cx="17752" cy="-178" rx="73.387" ry="18"/>
			<text textAnchor="middle" x="17752" y="-174.3">affeccionem, </text>
			</g>
			<g id="edge142" className="edge">
			<path d="M17278.2,-178C17351.1,-178 17552.9,-178 17667.9,-178"/>
			<polygon fill="#000000" stroke="#000000" points="17678.1,-178 17668.1,-182.5 17673.1,-178 17668.1,-178 17668.1,-178 17668.1,-178 17673.1,-178 17668.1,-173.5 17678.1,-178 17678.1,-178"/>
			<text textAnchor="middle" x="17478" y="-181.8">Mü22405</text>
			</g>
			<g id="edge305" className="edge">
			<path d="M17825.7,-178C17858,-178 17894.7,-178 17921.5,-178"/>
			<polygon fill="#000000" stroke="#000000" points="17931.7,-178 17921.7,-182.5 17926.7,-178 17921.7,-178 17921.7,-178 17921.7,-178 17926.7,-178 17921.7,-173.5 17931.7,-178 17931.7,-178"/>
			<text textAnchor="middle" x="17879" y="-181.8">Mü22405</text>
			</g>
			<g id="n101" className="node">
			<ellipse cx="18168" cy="-179" rx="53.0913" ry="18"/>
			<text textAnchor="middle" x="18168" y="-175.3">fallacem </text>
			</g>
			<g id="edge766" className="edge majority">
			<path strokeWidth="3" d="M17990.5,-178.139C18019.8,-178.282 18066.3,-178.509 18104.2,-178.694"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="18114.6,-178.745 18104.6,-183.196 18109.6,-179.72 18104.6,-179.696 18104.6,-178.696 18104.6,-177.696 18109.6,-177.72 18104.7,-174.196 18114.6,-178.745 18114.6,-178.745"/>
			<text textAnchor="middle" x="18043" y="-181.8">majority</text>
			</g>
			<g id="n100" className="node">
			<ellipse cx="18168" cy="-125" rx="72.2875" ry="18"/>
			<text textAnchor="middle" x="18168" y="-121.3">saluacionum </text>
			</g>
			<g id="edge716" className="edge">
			<path d="M17985.1,-167.501C17992.3,-164.475 18000.4,-161.358 18008,-159 18036.9,-150.013 18069.5,-142.586 18097.7,-136.99"/>
			<polygon fill="#000000" stroke="#000000" points="18107.8,-135.012 18098.9,-141.343 18102.9,-135.969 18098,-136.926 18098,-136.926 18098,-136.926 18102.9,-135.969 18097.1,-132.509 18107.8,-135.012 18107.8,-135.012"/>
			<text textAnchor="middle" x="18043" y="-162.8">Mü22405</text>
			</g>
			<g id="n102" className="node">
			<ellipse cx="18428" cy="-137" rx="81.7856" ry="18"/>
			<text textAnchor="middle" x="18428" y="-133.3">promissionem, </text>
			</g>
			<g id="edge275" className="edge majority">
			<path strokeWidth="3" d="M18216.3,-171.297C18254.1,-165.145 18307.8,-156.407 18351.5,-149.291"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="18361.5,-147.659 18352.4,-153.708 18356.7,-149.45 18351.8,-150.253 18351.7,-149.266 18351.5,-148.279 18356.4,-147.476 18350.9,-144.825 18361.5,-147.659 18361.5,-147.659"/>
			<text textAnchor="middle" x="18293" y="-167.8">majority</text>
			</g>
			<g id="edge608" className="edge">
			<path d="M18239.2,-128.263C18269.5,-129.672 18305.3,-131.338 18337.4,-132.834"/>
			<polygon fill="#000000" stroke="#000000" points="18347.8,-133.314 18337.6,-137.344 18342.8,-133.082 18337.8,-132.849 18337.8,-132.849 18337.8,-132.849 18342.8,-133.082 18338,-128.354 18347.8,-133.314 18347.8,-133.314"/>
			<text textAnchor="middle" x="18293" y="-135.8">Mü22405</text>
			</g>
			<g id="n103" className="node">
			<ellipse cx="18635" cy="-137" rx="27" ry="18"/>
			<text textAnchor="middle" x="18635" y="-133.3">sic </text>
			</g>
			<g id="edge233" className="edge majority">
			<path strokeWidth="3.2" d="M18510,-137C18540.2,-137 18573.1,-137 18597.4,-137"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="18607.5,-137 18597.5,-141.5 18602.5,-138.1 18597.5,-138.1 18597.5,-137 18597.5,-135.9 18602.5,-135.9 18597.5,-132.5 18607.5,-137 18607.5,-137"/>
			<text textAnchor="middle" x="18559" y="-140.8">majority</text>
			</g>
			<g id="n104" className="node">
			<ellipse cx="18802" cy="-125" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="18802" y="-121.3">bonus </text>
			</g>
			<g id="edge197" className="edge majority">
			<path strokeWidth="3" d="M18662.1,-135.099C18685.9,-133.372 18721.5,-130.779 18750.8,-128.653"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="18760.8,-127.922 18751.2,-133.136 18755.9,-129.282 18750.9,-129.645 18750.8,-128.648 18750.8,-127.65 18755.8,-127.288 18750.5,-124.16 18760.8,-127.922 18760.8,-127.922"/>
			<text textAnchor="middle" x="18711" y="-136.8">majority</text>
			</g>
			<g id="n105" className="node">
			<ellipse cx="18992" cy="-175" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="18992" y="-171.3">angelus </text>
			</g>
			<g id="edge1005" className="edge">
			<path d="M18658.5,-145.911C18665.3,-148.264 18672.9,-150.549 18680,-152 18766.3,-169.602 18868.5,-174.12 18931.6,-175.076"/>
			<polygon fill="#000000" stroke="#000000" points="18941.7,-175.204 18931.7,-179.577 18936.7,-175.141 18931.7,-175.078 18931.7,-175.078 18931.7,-175.078 18936.7,-175.141 18931.8,-170.578 18941.7,-175.204 18941.7,-175.204"/>
			<text textAnchor="middle" x="18802" y="-174.8">Kr299</text>
			</g>
			<g id="edge1055" className="edge majority">
			<path strokeWidth="3" d="M18841,-131.299C18865,-135.664 18896.6,-142.104 18924,-150 18932.1,-152.346 18940.7,-155.22 18948.9,-158.172"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="18958.3,-161.647 18947.3,-162.394 18953.2,-160.848 18948.6,-159.111 18948.9,-158.174 18949.2,-157.236 18953.9,-158.972 18950.5,-153.954 18958.3,-161.647 18958.3,-161.647"/>
			<text textAnchor="middle" x="18893" y="-153.8">majority</text>
			</g>
			<g id="n106" className="node">
			<ellipse cx="19188" cy="-136" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="19188" y="-132.3">Gabriel </text>
			</g>
			<g id="edge926" className="edge majority">
			<path strokeWidth="3" d="M19035.5,-166.038C19043.6,-164.348 19052.1,-162.607 19060,-161 19084.7,-155.998 19112,-150.591 19135,-146.089"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="19144.9,-144.154 19136,-150.488 19140.2,-146.094 19135.3,-147.053 19135.1,-146.072 19134.9,-145.09 19139.8,-144.131 19134.3,-141.655 19144.9,-144.154 19144.9,-144.154"/>
			<text textAnchor="middle" x="19091" y="-164.8">majority</text>
			</g>
			<g id="n107" className="node">
			<ellipse cx="19385" cy="-183" rx="50.8918" ry="18"/>
			<text textAnchor="middle" x="19385" y="-179.3">salutem </text>
			</g>
			<g id="edge1042" className="edge">
			<path d="M19042.1,-176.005C19113.8,-177.471 19246.8,-180.193 19324.1,-181.774"/>
			<polygon fill="#000000" stroke="#000000" points="19334.2,-181.98 19324.1,-186.274 19329.2,-181.878 19324.2,-181.775 19324.2,-181.775 19324.2,-181.775 19329.2,-181.878 19324.2,-177.276 19334.2,-181.98 19334.2,-181.98"/>
			<text textAnchor="middle" x="19188" y="-182.8">Wi3818</text>
			</g>
			<g id="edge603" className="edge majority">
			<path strokeWidth="3" d="M19232.2,-143.191C19256.9,-147.63 19288.4,-153.839 19316,-161 19323.3,-162.905 19331.1,-165.156 19338.6,-167.479"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="19348.2,-170.551 19337.3,-171.813 19343.2,-169.991 19338.4,-168.477 19338.7,-167.524 19339,-166.571 19343.8,-168.085 19340.1,-163.235 19348.2,-170.551 19348.2,-170.551"/>
			<text textAnchor="middle" x="19285" y="-164.8">majority</text>
			</g>
			<g id="n108" className="node">
			<ellipse cx="19582" cy="-183" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="19582" y="-179.3">generis </text>
			</g>
			<g id="edge1026" className="edge majority">
			<path strokeWidth="3.2" d="M19435.7,-183C19462.5,-183 19495.8,-183 19523.7,-183"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="19533.7,-183 19523.7,-187.5 19528.7,-184.1 19523.7,-184.1 19523.7,-183 19523.7,-181.9 19528.7,-181.9 19523.7,-178.5 19533.7,-183 19533.7,-183"/>
			<text textAnchor="middle" x="19485" y="-186.8">majority</text>
			</g>
			<g id="n109" className="node">
			<ellipse cx="19776" cy="-183" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="19776" y="-179.3">humani </text>
			</g>
			<g id="edge792" className="edge majority">
			<path strokeWidth="3.2" d="M19630.5,-183C19656.8,-183 19689.6,-183 19717.4,-183"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="19727.8,-183 19717.8,-187.5 19722.8,-184.1 19717.8,-184.1 19717.8,-183 19717.8,-181.9 19722.8,-181.9 19717.8,-178.5 19727.8,-183 19727.8,-183"/>
			<text textAnchor="middle" x="19679" y="-186.8">majority</text>
			</g>
			<g id="n111" className="node">
			<ellipse cx="19964" cy="-234" rx="59.5901" ry="18"/>
			<text textAnchor="middle" x="19964" y="-230.3">annunciat </text>
			</g>
			<g id="edge1276" className="edge">
			<path d="M19815.5,-193.567C19842.7,-201.012 19879.4,-211.078 19909.4,-219.304"/>
			<polygon fill="#000000" stroke="#000000" points="19919.3,-222.017 19908.5,-223.712 19914.5,-220.694 19909.7,-219.372 19909.7,-219.372 19909.7,-219.372 19914.5,-220.694 19910.8,-215.032 19919.3,-222.017 19919.3,-222.017"/>
			<text textAnchor="middle" x="19864" y="-214.8">Kf133</text>
			</g>
			<g id="n110" className="node">
			<ellipse cx="19964" cy="-129" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="19964" y="-125.3">male </text>
			</g>
			<g id="edge25" className="edge">
			<path d="M19805.6,-168.638C19816.7,-163.466 19829.8,-157.941 19842,-154 19867,-145.949 19895.7,-139.882 19918.9,-135.742"/>
			<polygon fill="#000000" stroke="#000000" points="19928.9,-134.031 19919.8,-140.167 19923.9,-134.882 19919,-135.733 19919,-135.733 19919,-135.733 19923.9,-134.882 19918.2,-131.299 19928.9,-134.031 19928.9,-134.031"/>
			<text textAnchor="middle" x="19864" y="-157.8">Ba96</text>
			</g>
			<g id="n112" className="node">
			<ellipse cx="20150" cy="-200" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="20150" y="-196.3">Marie </text>
			</g>
			<g id="edge1021" className="edge majority">
			<path strokeWidth="2.8" d="M19824.4,-184.339C19874.1,-185.836 19954.6,-188.514 20024,-192 20048.6,-193.234 20075.9,-194.94 20098.6,-196.46"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="20108.8,-197.143 20098.5,-200.96 20103.7,-197.705 20098.7,-197.368 20098.8,-196.47 20098.8,-195.572 20103.8,-195.909 20099.1,-191.981 20108.8,-197.143 20108.8,-197.143"/>
			<text textAnchor="middle" x="19964" y="-195.8">majority</text>
			</g>
			<g id="edge775" className="edge">
			<path d="M20015.3,-224.709C20042.1,-219.762 20074.8,-213.711 20101.2,-208.834"/>
			<polygon fill="#000000" stroke="#000000" points="20111.3,-206.96 20102.3,-213.202 20106.4,-207.868 20101.5,-208.777 20101.5,-208.777 20101.5,-208.777 20106.4,-207.868 20100.7,-204.352 20111.3,-206.96 20111.3,-206.96"/>
			<text textAnchor="middle" x="20066" y="-222.8">Kf133</text>
			</g>
			<g id="n114" className="node">
			<ellipse cx="20643" cy="-131" rx="60.3893" ry="18"/>
			<text textAnchor="middle" x="20643" y="-127.3">nunciauit. </text>
			</g>
			<g id="edge795" className="edge">
			<path d="M20000.4,-129.105C20107.5,-129.421 20428.8,-130.37 20571.9,-130.793"/>
			<polygon fill="#000000" stroke="#000000" points="20582.3,-130.824 20572.3,-135.294 20577.3,-130.809 20572.3,-130.794 20572.3,-130.794 20572.3,-130.794 20577.3,-130.809 20572.3,-126.294 20582.3,-130.824 20582.3,-130.824"/>
			<text textAnchor="middle" x="20150" y="-132.8">Ba96</text>
			</g>
			<g id="edge715" className="edge">
			<path strokeWidth="1.6" d="M20173.9,-185.214C20184.5,-179.129 20197.4,-172.66 20210,-169 20358.1,-125.805 20402.4,-154.476 20556,-140 20562.4,-139.399 20569,-138.749 20575.7,-138.082"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="20586,-137.025 20576.5,-142.514 20581.1,-137.83 20576.1,-138.336 20576.1,-138.037 20576.1,-137.739 20581,-137.233 20575.6,-133.56 20586,-137.025 20586,-137.025"/>
			<text textAnchor="middle" x="20383" y="-172.8">Mü11475, Mü28315, Sg524, Wi3818</text>
			</g>
			<g id="n113" className="node">
			<ellipse cx="20643" cy="-186" rx="68.7879" ry="18"/>
			<text textAnchor="middle" x="20643" y="-182.3">annunciauit </text>
			</g>
			<g id="edge1255" className="edge">
			<path strokeWidth="2" d="M20191.6,-198.842C20273.2,-196.516 20458.3,-191.237 20564.1,-188.222"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="20574.4,-187.928 20564.5,-192.711 20569.4,-188.57 20564.4,-188.713 20564.4,-188.213 20564.4,-187.713 20569.4,-187.571 20564.3,-183.715 20574.4,-187.928 20574.4,-187.928"/>
			<text textAnchor="middle" x="20383" y="-201.8">Er16, Gr314, Kr185, Kr299, Mü22405, MüU151</text>
			</g>
			<g id="n115" className="node">
			<ellipse cx="21123" cy="-188" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="21123" y="-184.3">per </text>
			</g>
			<g id="edge769" className="edge">
			<path d="M20183.1,-211.015C20191.7,-213.487 20201.1,-215.748 20210,-217 20320.5,-232.606 21048.2,-211.541 21076,-206 21080.5,-205.107 21085.1,-203.808 21089.6,-202.31"/>
			<polygon fill="#000000" stroke="#000000" points="21099.1,-198.795 21091.3,-206.479 21094.4,-200.526 21089.7,-202.258 21089.7,-202.258 21089.7,-202.258 21094.4,-200.526 21088.1,-198.036 21099.1,-198.795 21099.1,-198.795"/>
			<text textAnchor="middle" x="20643" y="-224.8">Kf133</text>
			</g>
			<g id="edge369" className="edge">
			<path strokeWidth="1.6" d="M20703.1,-133.411C20804.5,-137.962 21007.2,-149.012 21076,-167 21081.1,-168.326 21086.3,-170.176 21091.3,-172.234"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="21100.6,-176.363 21089.6,-176.412 21095.9,-174.606 21091.3,-172.574 21091.4,-172.3 21091.6,-172.026 21096.1,-174.057 21093.3,-168.188 21100.6,-176.363 21100.6,-176.363"/>
			<text textAnchor="middle" x="20903" y="-170.8">Ba96, Mü11475, Mü28315, Sg524</text>
			</g>
			<g id="n117" className="node">
			<ellipse cx="21522" cy="-157" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="21522" y="-153.3">Primo </text>
			</g>
			<g id="edge982" className="edge">
			<path d="M20703.4,-130.075C20828.8,-128.538 21130.1,-127.041 21382,-143 21411.8,-144.888 21445.1,-148.2 21471.6,-151.128"/>
			<polygon fill="#000000" stroke="#000000" points="21481.8,-152.27 21471.4,-155.627 21476.9,-151.713 21471.9,-151.155 21471.9,-151.155 21471.9,-151.155 21476.9,-151.713 21472.4,-146.683 21481.8,-152.27 21481.8,-152.27"/>
			<text textAnchor="middle" x="21201" y="-138.8">Wi3818</text>
			</g>
			<g id="edge862" className="edge">
			<path strokeWidth="2" d="M20712,-186.284C20813.7,-186.71 21002.3,-187.499 21083.4,-187.838"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="21093.6,-187.881 21083.6,-192.339 21088.6,-188.36 21083.6,-188.339 21083.6,-187.839 21083.6,-187.339 21088.6,-187.36 21083.6,-183.339 21093.6,-187.881 21093.6,-187.881"/>
			<text textAnchor="middle" x="20903" y="-190.8">Er16, Gr314, Kr185, Kr299, Mü22405, MüU151</text>
			</g>
			<g id="n116" className="node">
			<ellipse cx="21316" cy="-170" rx="65.7887" ry="18"/>
			<text textAnchor="middle" x="21316" y="-166.3">oppositum. </text>
			</g>
			<g id="edge1051" className="edge majority">
			<path strokeWidth="3" d="M21152.2,-185.344C21176.2,-183.085 21211.6,-179.741 21243.4,-176.751"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="21253.5,-175.794 21244,-181.213 21248.6,-177.259 21243.7,-177.728 21243.6,-176.733 21243.5,-175.737 21248.4,-175.268 21243.1,-172.253 21253.5,-175.794 21253.5,-175.794"/>
			<text textAnchor="middle" x="21201" y="-186.8">majority</text>
			</g>
			<g id="edge1175" className="edge majority">
			<path strokeWidth="3" d="M21380.1,-165.976C21409.2,-164.124 21443.2,-161.958 21470.5,-160.217"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="21480.6,-159.573 21470.9,-164.699 21475.7,-160.889 21470.7,-161.207 21470.7,-160.209 21470.6,-159.211 21475.6,-158.893 21470.4,-155.718 21480.6,-159.573 21480.6,-159.573"/>
			<text textAnchor="middle" x="21431" y="-167.8">majority</text>
			</g>
			<g id="n118" className="node">
			<ellipse cx="21721" cy="-130" rx="50.8918" ry="18"/>
			<text textAnchor="middle" x="21721" y="-126.3">benigne </text>
			</g>
			<g id="edge1119" className="edge">
			<path d="M21561.9,-151.666C21590.9,-147.7 21630.8,-142.227 21663.3,-137.775"/>
			<polygon fill="#000000" stroke="#000000" points="21673.5,-136.368 21664.2,-142.184 21668.6,-137.047 21663.6,-137.726 21663.6,-137.726 21663.6,-137.726 21668.6,-137.047 21663,-133.268 21673.5,-136.368 21673.5,-136.368"/>
			<text textAnchor="middle" x="21617" y="-151.8">Mü28315</text>
			</g>
			<g id="n119" className="node">
			<ellipse cx="21920" cy="-183" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="21920" y="-179.3">ipsam </text>
			</g>
			<g id="edge504" className="edge majority">
			<path strokeWidth="3" d="M21560.4,-164.03C21567.5,-165.179 21575,-166.241 21582,-167 21683,-177.919 21801.9,-181.387 21868,-182.488"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="21878.2,-182.645 21868.1,-186.99 21873.1,-183.567 21868.1,-183.49 21868.2,-182.49 21868.2,-181.49 21873.2,-181.568 21868.2,-177.991 21878.2,-182.645 21878.2,-182.645"/>
			<text textAnchor="middle" x="21721" y="-182.8">majority</text>
			</g>
			<g id="edge42" className="edge">
			<path d="M21769.4,-135.435C21796.4,-139.306 21830.6,-145.533 21860,-155 21868.1,-157.591 21876.4,-161.052 21884.3,-164.655"/>
			<polygon fill="#000000" stroke="#000000" points="21893.5,-169.071 21882.5,-168.805 21889,-166.909 21884.4,-164.747 21884.4,-164.747 21884.4,-164.747 21889,-166.909 21886.4,-160.69 21893.5,-169.071 21893.5,-169.071"/>
			<text textAnchor="middle" x="21825" y="-158.8">Mü28315</text>
			</g>
			<g id="n120" className="node">
			<ellipse cx="22111" cy="-169" rx="50.8918" ry="18"/>
			<text textAnchor="middle" x="22111" y="-165.3">benigne </text>
			</g>
			<g id="edge336" className="edge majority">
			<path strokeWidth="3" d="M21961.1,-180.031C21987.3,-178.092 22021.9,-175.528 22051.1,-173.36"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="22061.3,-172.611 22051.6,-177.838 22056.3,-173.978 22051.4,-174.347 22051.3,-173.35 22051.2,-172.353 22056.2,-171.983 22050.9,-168.862 22061.3,-172.611 22061.3,-172.611"/>
			<text textAnchor="middle" x="22011" y="-181.8">majority</text>
			</g>
			<g id="n121" className="node">
			<ellipse cx="22322" cy="-221" rx="61.99" ry="18"/>
			<text textAnchor="middle" x="22322" y="-217.3">salutando, </text>
			</g>
			<g id="edge644" className="edge">
			<path d="M21955.8,-192.239C21963.7,-194.067 21972.1,-195.792 21980,-197 22072.6,-211.154 22180.7,-216.978 22250,-219.363"/>
			<polygon fill="#000000" stroke="#000000" points="22260.3,-219.704 22250.2,-223.872 22255.3,-219.54 22250.3,-219.375 22250.3,-219.375 22250.3,-219.375 22255.3,-219.54 22250.5,-214.877 22260.3,-219.704 22260.3,-219.704"/>
			<text textAnchor="middle" x="22111" y="-218.8">Mü28315</text>
			</g>
			<g id="edge181" className="edge majority">
			<path strokeWidth="3" d="M22157.8,-176.197C22182.8,-180.54 22214.3,-186.653 22242,-194 22252.3,-196.735 22263.2,-200.126 22273.5,-203.57"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="22283.2,-206.869 22272.2,-207.895 22278.1,-206.199 22273.4,-204.583 22273.7,-203.637 22274,-202.69 22278.7,-204.307 22275.1,-199.378 22283.2,-206.869 22283.2,-206.869"/>
			<text textAnchor="middle" x="22211" y="-197.8">majority</text>
			</g>
			<g id="n122" className="node">
			<ellipse cx="22529" cy="-221" rx="46.5926" ry="18"/>
			<text textAnchor="middle" x="22529" y="-217.3">dicens: </text>
			</g>
			<g id="edge1192" className="edge majority">
			<path strokeWidth="3.2" d="M22384,-221C22411.8,-221 22444.5,-221 22471.8,-221"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="22481.9,-221 22471.9,-225.5 22476.9,-222.1 22471.9,-222.1 22471.9,-221 22471.9,-219.9 22476.9,-219.9 22471.9,-216.5 22481.9,-221 22481.9,-221"/>
			<text textAnchor="middle" x="22433" y="-224.8">majority</text>
			</g>
			<g id="n123" className="node">
			<ellipse cx="22709" cy="-221" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="22709" y="-217.3">Aue. </text>
			</g>
			<g id="edge1033" className="edge majority">
			<path strokeWidth="3.2" d="M22575.8,-221C22603,-221 22637.3,-221 22664.1,-221"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="22674.4,-221 22664.4,-225.5 22669.4,-222.1 22664.4,-222.1 22664.4,-221 22664.4,-219.9 22669.4,-219.9 22664.4,-216.5 22674.4,-221 22674.4,-221"/>
			<text textAnchor="middle" x="22625" y="-224.8">majority</text>
			</g>
			<g id="n125" className="node">
			<ellipse cx="22918" cy="-167" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="22918" y="-163.3">gracia. </text>
			</g>
			<g id="edge150" className="edge">
			<path strokeWidth="1.2" d="M22737,-210.376C22745,-207.447 22753.8,-204.415 22762,-202 22796.4,-191.889 22835.7,-183.032 22866.2,-176.757"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="22876.2,-174.73 22867.3,-181.133 22871.3,-175.825 22866.4,-176.821 22866.4,-176.723 22866.3,-176.625 22871.2,-175.629 22865.5,-172.313 22876.2,-174.73 22876.2,-174.73"/>
			<text textAnchor="middle" x="22808" y="-205.8">Ba96, Sg524</text>
			</g>
			<g id="n124" className="node">
			<ellipse cx="22918" cy="-221" rx="27" ry="18"/>
			<text textAnchor="middle" x="22918" y="-217.3">et </text>
			</g>
			<g id="edge1006" className="edge">
			<path d="M22743.7,-221C22781.3,-221 22841.9,-221 22880.6,-221"/>
			<polygon fill="#000000" stroke="#000000" points="22890.8,-221 22880.8,-225.5 22885.8,-221 22880.8,-221 22880.8,-221 22880.8,-221 22885.8,-221 22880.8,-216.5 22890.8,-221 22890.8,-221"/>
			<text textAnchor="middle" x="22808" y="-224.8">Mü11475</text>
			</g>
			<g id="n127" className="node">
			<ellipse cx="23322" cy="-221" rx="53.0913" ry="18"/>
			<text textAnchor="middle" x="23322" y="-217.3">Secundo </text>
			</g>
			<g id="edge298" className="edge majority">
			<path strokeWidth="2.6" d="M22736.3,-232.217C22744.4,-235.233 22753.4,-238.164 22762,-240 22809.9,-250.288 22823,-246.221 22872,-248 23000.8,-252.678 23033.2,-253.841 23162,-248 23201.2,-246.22 23211.3,-246.879 23250,-240 23257.1,-238.74 23264.5,-237.114 23271.7,-235.343"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="23281.5,-232.861 23272.9,-239.693 23276.8,-234.872 23272,-236.108 23271.8,-235.332 23271.6,-234.557 23276.4,-233.321 23270.7,-230.972 23281.5,-232.861 23281.5,-232.861"/>
			<text textAnchor="middle" x="23017" y="-254.8">majority</text>
			</g>
			<g id="edge683" className="edge">
			<path d="M22964.5,-166.424C23013.6,-166.46 23093.8,-168.42 23162,-179 23200.1,-184.9 23242.2,-196.245 23273.5,-205.657"/>
			<polygon fill="#000000" stroke="#000000" points="23283.2,-208.636 23272.4,-210.024 23278.5,-207.178 23273.7,-205.719 23273.7,-205.719 23273.7,-205.719 23278.5,-207.178 23275,-201.415 23283.2,-208.636 23283.2,-208.636"/>
			<text textAnchor="middle" x="23116" y="-182.8">Sg524</text>
			</g>
			<g id="n131" className="node">
			<ellipse cx="23889" cy="-168" rx="27" ry="18"/>
			<text textAnchor="middle" x="23889" y="-164.3">et </text>
			</g>
			<g id="edge1018" className="edge">
			<path d="M22952.5,-155.022C22991.1,-142.299 23056.8,-124 23115,-124 23115,-124 23115,-124 23704,-124 23758.5,-124 23819.6,-142.479 23855.9,-155.486"/>
			<polygon fill="#000000" stroke="#000000" points="23865.5,-158.99 23854.5,-159.77 23860.8,-157.267 23856.1,-155.545 23856.1,-155.545 23856.1,-155.545 23860.8,-157.267 23857.6,-151.321 23865.5,-158.99 23865.5,-158.99"/>
			<text textAnchor="middle" x="23425" y="-127.8">Ba96</text>
			</g>
			<g id="n126" className="node">
			<ellipse cx="23116" cy="-221" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="23116" y="-217.3">cetera. </text>
			</g>
			<g id="edge12" className="edge">
			<path d="M22945,-221C22974.1,-221 23021.9,-221 23059.4,-221"/>
			<polygon fill="#000000" stroke="#000000" points="23069.7,-221 23059.7,-225.5 23064.7,-221 23059.7,-221 23059.7,-221 23059.7,-221 23064.7,-221 23059.7,-216.5 23069.7,-221 23069.7,-221"/>
			<text textAnchor="middle" x="23017" y="-224.8">Mü11475</text>
			</g>
			<g id="edge210" className="edge">
			<path d="M23162.3,-221C23190.5,-221 23227.3,-221 23258.4,-221"/>
			<polygon fill="#000000" stroke="#000000" points="23268.6,-221 23258.6,-225.5 23263.6,-221 23258.6,-221 23258.6,-221 23258.6,-221 23263.6,-221 23258.6,-216.5 23268.6,-221 23268.6,-221"/>
			<text textAnchor="middle" x="23215" y="-224.8">Mü11475</text>
			</g>
			<g id="n129" className="node">
			<ellipse cx="23509" cy="-224" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="23509" y="-220.3">uero </text>
			</g>
			<g id="edge1259" className="edge">
			<path d="M23375.5,-221.852C23403.5,-222.306 23437.6,-222.858 23464.2,-223.289"/>
			<polygon fill="#000000" stroke="#000000" points="23474.3,-223.454 23464.2,-227.791 23469.3,-223.373 23464.3,-223.292 23464.3,-223.292 23464.3,-223.292 23469.3,-223.373 23464.4,-218.792 23474.3,-223.454 23474.3,-223.454"/>
			<text textAnchor="middle" x="23425" y="-226.8">Gr314</text>
			</g>
			<g id="n128" className="node">
			<ellipse cx="23509" cy="-170" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="23509" y="-166.3">uera </text>
			</g>
			<g id="edge1336" className="edge majority">
			<path strokeWidth="2.8" d="M23364.1,-209.681C23395.1,-201.113 23437.6,-189.411 23468.3,-180.938"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="23478.3,-178.197 23469.8,-185.193 23473.7,-180.393 23468.9,-181.722 23468.6,-180.854 23468.4,-179.987 23473.2,-178.658 23467.4,-176.516 23478.3,-178.197 23478.3,-178.197"/>
			<text textAnchor="middle" x="23425" y="-203.8">majority</text>
			</g>
			<g id="n130" className="node">
			<ellipse cx="23703" cy="-170" rx="61.1893" ry="18"/>
			<text textAnchor="middle" x="23703" y="-166.3">asserendo </text>
			</g>
			<g id="edge1353" className="edge">
			<path d="M23539.6,-215.681C23568.5,-207.541 23613.3,-194.958 23648.5,-185.058"/>
			<polygon fill="#000000" stroke="#000000" points="23658.1,-182.343 23649.7,-189.382 23653.3,-183.697 23648.5,-185.05 23648.5,-185.05 23648.5,-185.05 23653.3,-183.697 23647.3,-180.719 23658.1,-182.343 23658.1,-182.343"/>
			<text textAnchor="middle" x="23593" y="-211.8">Gr314</text>
			</g>
			<g id="edge763" className="edge majority">
			<path strokeWidth="2.8" d="M23543.9,-170C23568.2,-170 23601.7,-170 23631.7,-170"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="23641.7,-170 23631.7,-174.5 23636.7,-170.9 23631.7,-170.9 23631.7,-170 23631.7,-169.1 23636.7,-169.1 23631.7,-165.5 23641.7,-170 23641.7,-170"/>
			<text textAnchor="middle" x="23593" y="-173.8">majority</text>
			</g>
			<g id="edge480" className="edge majority">
			<path strokeWidth="3" d="M23764.2,-169.345C23793,-169.032 23826.6,-168.668 23851.5,-168.397"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="23861.6,-168.287 23851.6,-172.896 23856.6,-169.342 23851.6,-169.396 23851.6,-168.396 23851.5,-167.396 23856.5,-167.342 23851.5,-163.896 23861.6,-168.287 23861.6,-168.287"/>
			<text textAnchor="middle" x="23813" y="-172.8">majority</text>
			</g>
			<g id="n132" className="node">
			<ellipse cx="24036" cy="-214" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="24036" y="-210.3">cetera. </text>
			</g>
			<g id="edge615" className="edge">
			<path d="M23913.7,-175.562C23920.3,-177.649 23927.4,-179.914 23934,-182 23952.2,-187.77 23972.2,-194.114 23989.6,-199.62"/>
			<polygon fill="#000000" stroke="#000000" points="23999.5,-202.756 23988.6,-204.026 23994.7,-201.246 23989.9,-199.736 23989.9,-199.736 23989.9,-199.736 23994.7,-201.246 23991.3,-195.446 23999.5,-202.756 23999.5,-202.756"/>
			<text textAnchor="middle" x="23953" y="-196.8">Ba96</text>
			</g>
			<g id="n136" className="node">
			<ellipse cx="24744" cy="-171" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="24744" y="-167.3">ipsam </text>
			</g>
			<g id="edge1181" className="edge majority">
			<path strokeWidth="2.8" d="M23916.2,-168C23945.2,-168 23993.5,-168 24035,-168 24035,-168 24035,-168 24568,-168 24609.7,-168 24657,-168.863 24691.9,-169.663"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="24702.3,-169.908 24692.2,-174.172 24697.3,-170.69 24692.3,-170.573 24692.3,-169.673 24692.4,-168.773 24697.4,-168.891 24692.4,-165.174 24702.3,-169.908 24702.3,-169.908"/>
			<text textAnchor="middle" x="24313" y="-171.8">majority</text>
			</g>
			<g id="n137" className="node">
			<ellipse cx="24965" cy="-154" rx="81.4863" ry="18"/>
			<text textAnchor="middle" x="24965" y="-150.3">commendando </text>
			</g>
			<g id="edge850" className="edge">
			<path d="M23911,-157.591C23938.7,-144.865 23989.3,-125 24035,-125 24035,-125 24035,-125 24745,-125 24795.4,-125 24851.8,-132.647 24894.7,-140.088"/>
			<polygon fill="#000000" stroke="#000000" points="24904.8,-141.869 24894.2,-144.556 24899.9,-140.997 24894.9,-140.125 24894.9,-140.125 24894.9,-140.125 24899.9,-140.997 24895.7,-135.694 24904.8,-141.869 24904.8,-141.869"/>
			<text textAnchor="middle" x="24397" y="-128.8">Mü22405</text>
			</g>
			<g id="n133" className="node">
			<ellipse cx="24210" cy="-214" rx="53.0913" ry="18"/>
			<text textAnchor="middle" x="24210" y="-210.3">Secundo </text>
			</g>
			<g id="edge1182" className="edge">
			<path d="M24082.2,-214C24101.8,-214 24125,-214 24146.3,-214"/>
			<polygon fill="#000000" stroke="#000000" points="24156.5,-214 24146.5,-218.5 24151.5,-214 24146.5,-214 24146.5,-214 24146.5,-214 24151.5,-214 24146.5,-209.5 24156.5,-214 24156.5,-214"/>
			<text textAnchor="middle" x="24119" y="-217.8">Ba96</text>
			</g>
			<g id="n134" className="node">
			<ellipse cx="24397" cy="-214" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="24397" y="-210.3">uere </text>
			</g>
			<g id="edge861" className="edge">
			<path d="M24263.5,-214C24291.5,-214 24325.6,-214 24352.2,-214"/>
			<polygon fill="#000000" stroke="#000000" points="24362.3,-214 24352.3,-218.5 24357.3,-214 24352.3,-214 24352.3,-214 24352.3,-214 24357.3,-214 24352.3,-209.5 24362.3,-214 24362.3,-214"/>
			<text textAnchor="middle" x="24313" y="-217.8">Ba96</text>
			</g>
			<g id="n135" className="node">
			<ellipse cx="24567" cy="-214" rx="61.1893" ry="18"/>
			<text textAnchor="middle" x="24567" y="-210.3">asserendo </text>
			</g>
			<g id="edge271" className="edge">
			<path d="M24431.6,-214C24449.9,-214 24473.4,-214 24495.5,-214"/>
			<polygon fill="#000000" stroke="#000000" points="24505.6,-214 24495.6,-218.5 24500.6,-214 24495.6,-214 24495.6,-214 24495.6,-214 24500.6,-214 24495.6,-209.5 24505.6,-214 24505.6,-214"/>
			<text textAnchor="middle" x="24469" y="-217.8">Ba96</text>
			</g>
			<g id="edge111" className="edge">
			<path d="M24614.4,-202.59C24640.2,-196.264 24672.1,-188.431 24697.6,-182.147"/>
			<polygon fill="#000000" stroke="#000000" points="24707.5,-179.734 24698.8,-186.49 24702.6,-180.927 24697.7,-182.12 24697.7,-182.12 24697.7,-182.12 24702.6,-180.927 24696.7,-177.75 24707.5,-179.734 24707.5,-179.734"/>
			<text textAnchor="middle" x="24665" y="-196.8">Ba96</text>
			</g>
			<g id="edge797" className="edge majority">
			<path strokeWidth="3" d="M24785.2,-167.882C24811.1,-165.867 24845.9,-163.166 24877.9,-160.682"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="24888.2,-159.884 24878.6,-165.145 24883.3,-161.268 24878.3,-161.655 24878.2,-160.658 24878.1,-159.661 24883.1,-159.274 24877.9,-156.172 24888.2,-159.884 24888.2,-159.884"/>
			<text textAnchor="middle" x="24835" y="-168.8">majority</text>
			</g>
			<g id="n138" className="node">
			<ellipse cx="25229" cy="-125" rx="46.5926" ry="18"/>
			<text textAnchor="middle" x="25229" y="-121.3">dicens: </text>
			</g>
			<g id="edge953" className="edge majority">
			<path strokeWidth="2.6" d="M25037.9,-146.037C25080.8,-141.296 25134.3,-135.376 25173.6,-131.025"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="25183.7,-129.898 25174.3,-135.471 25178.9,-131.243 25173.9,-131.794 25173.8,-130.998 25173.7,-130.203 25178.7,-129.653 25173.3,-126.526 25183.7,-129.898 25183.7,-129.898"/>
			<text textAnchor="middle" x="25095" y="-145.8">majority</text>
			</g>
			<g id="n139" className="node">
			<ellipse cx="25456" cy="-172" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="25456" y="-168.3">Gracia </text>
			</g>
			<g id="edge783" className="edge">
			<path strokeWidth="1.4" d="M25042.2,-159.767C25049.6,-160.227 25056.9,-160.648 25064,-161 25184.5,-166.995 25326,-169.967 25401.4,-171.224"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="25411.6,-171.39 25401.5,-175.727 25406.6,-171.509 25401.6,-171.427 25401.6,-171.227 25401.6,-171.027 25406.6,-171.109 25401.7,-166.728 25411.6,-171.39 25411.6,-171.39"/>
			<text textAnchor="middle" x="25229" y="-172.8">Ba96, Mü22405, Sg524</text>
			</g>
			<g id="edge139" className="edge majority">
			<path strokeWidth="2.6" d="M25274.7,-129.428C25307.9,-133.296 25354.2,-139.898 25394,-150 25400.7,-151.694 25407.6,-153.834 25414.4,-156.11"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="25424,-159.506 25413.1,-160.43 25419,-158.6 25414.3,-156.94 25414.6,-156.185 25414.9,-155.431 25419.6,-157.091 25416.1,-151.941 25424,-159.506 25424,-159.506"/>
			<text textAnchor="middle" x="25363" y="-153.8">majority</text>
			</g>
			<g id="n140" className="node">
			<ellipse cx="25640" cy="-172" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="25640" y="-168.3">plena. </text>
			</g>
			<g id="edge673" className="edge majority">
			<path strokeWidth="3.2" d="M25500.6,-172C25526.7,-172 25560,-172 25587.4,-172"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="25597.6,-172 25587.6,-176.5 25592.6,-173.1 25587.6,-173.1 25587.6,-172 25587.6,-170.9 25592.6,-170.9 25587.6,-167.5 25597.6,-172 25597.6,-172"/>
			<text textAnchor="middle" x="25549" y="-175.8">majority</text>
			</g>
			<g id="n141" className="node">
			<ellipse cx="25894" cy="-203" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="25894" y="-199.3">Tercio </text>
			</g>
			<g id="edge791" className="edge majority">
			<path strokeWidth="2.8" d="M25680.9,-176.912C25724.9,-182.32 25795.6,-191.022 25843.2,-196.872"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="25853.3,-198.111 25842.8,-201.356 25848.2,-198.394 25843.2,-197.783 25843.3,-196.89 25843.4,-195.997 25848.4,-196.607 25843.9,-192.424 25853.3,-198.111 25853.3,-198.111"/>
			<text textAnchor="middle" x="25767" y="-198.8">majority</text>
			</g>
			<g id="n142" className="node">
			<ellipse cx="25894" cy="-149" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="25894" y="-145.3">Tercia </text>
			</g>
			<g id="edge19" className="edge">
			<path strokeWidth="1.2" d="M25679,-164.98C25686,-163.859 25693.2,-162.804 25700,-162 25747.9,-156.341 25802.8,-152.939 25841.8,-151.044"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="25851.9,-150.571 25842.1,-155.536 25846.9,-150.906 25841.9,-151.141 25841.9,-151.041 25841.9,-150.941 25846.9,-150.706 25841.7,-146.546 25851.9,-150.571 25851.9,-150.571"/>
			<text textAnchor="middle" x="25767" y="-165.8">Mü11475, Wi3818</text>
			</g>
			<g id="n143" className="node">
			<ellipse cx="26145" cy="-186" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="26145" y="-182.3">certa </text>
			</g>
			<g id="edge737" className="edge majority">
			<path strokeWidth="2.8" d="M25935.8,-200.212C25980,-197.199 26050.2,-192.405 26096.7,-189.231"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="26106.8,-188.54 26097.1,-193.71 26101.9,-189.778 26096.9,-190.119 26096.8,-189.221 26096.8,-188.323 26101.8,-187.982 26096.5,-184.731 26106.8,-188.54 26106.8,-188.54"/>
			<text textAnchor="middle" x="26021" y="-201.8">majority</text>
			</g>
			<g id="edge247" className="edge">
			<path strokeWidth="1.2" d="M25935.9,-151.895C25975.2,-155.088 26036,-161.125 26088,-171 26092.7,-171.892 26097.6,-172.969 26102.4,-174.132"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="26112.2,-176.608 26101.4,-178.519 26107.3,-175.479 26102.5,-174.253 26102.5,-174.156 26102.5,-174.059 26107.4,-175.285 26103.6,-169.793 26112.2,-176.608 26112.2,-176.608"/>
			<text textAnchor="middle" x="26021" y="-174.8">Mü11475, Wi3818</text>
			</g>
			<g id="n145" className="node">
			<ellipse cx="26334" cy="-132" rx="70.3881" ry="18"/>
			<text textAnchor="middle" x="26334" y="-128.3">promitendo, </text>
			</g>
			<g id="edge3" className="edge">
			<path d="M26169.3,-172.007C26179.1,-166.633 26190.8,-160.867 26202,-157 26220.7,-150.519 26241.6,-145.577 26261,-141.87"/>
			<polygon fill="#000000" stroke="#000000" points="26271.1,-140.042 26262,-146.262 26266.1,-140.939 26261.2,-141.835 26261.2,-141.835 26261.2,-141.835 26266.1,-140.939 26260.4,-137.408 26271.1,-140.042 26271.1,-140.042"/>
			<text textAnchor="middle" x="26224" y="-160.8">Er16</text>
			</g>
			<g id="n144" className="node">
			<ellipse cx="26334" cy="-237" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="26334" y="-233.3">sibi </text>
			</g>
			<g id="edge1229" className="edge">
			<path d="M26178.6,-194.884C26211.3,-203.806 26261.6,-217.537 26295.9,-226.876"/>
			<polygon fill="#000000" stroke="#000000" points="26306,-229.623 26295.1,-231.334 26301.1,-228.308 26296.3,-226.992 26296.3,-226.992 26296.3,-226.992 26301.1,-228.308 26297.5,-222.651 26306,-229.623 26306,-229.623"/>
			<text textAnchor="middle" x="26224" y="-216.8">Kf133</text>
			</g>
			<g id="n146" className="node">
			<ellipse cx="26558" cy="-186" rx="74.187" ry="18"/>
			<text textAnchor="middle" x="26558" y="-182.3">promittendo, </text>
			</g>
			<g id="edge72" className="edge majority">
			<path strokeWidth="2.8" d="M26183.6,-186C26248.9,-186 26385,-186 26473.6,-186"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="26483.6,-186 26473.6,-190.5 26478.6,-186.9 26473.6,-186.9 26473.6,-186 26473.6,-185.1 26478.6,-185.1 26473.6,-181.5 26483.6,-186 26483.6,-186"/>
			<text textAnchor="middle" x="26334" y="-189.8">majority</text>
			</g>
			<g id="n147" className="node">
			<ellipse cx="26777" cy="-180" rx="46.5926" ry="18"/>
			<text textAnchor="middle" x="26777" y="-176.3">dicens: </text>
			</g>
			<g id="edge974" className="edge">
			<path d="M26404.1,-130.809C26464.5,-130.714 26554.5,-132.865 26632,-144 26665.3,-148.781 26702,-158.04 26730.1,-165.971"/>
			<polygon fill="#000000" stroke="#000000" points="26740,-168.822 26729.2,-170.384 26735.2,-167.44 26730.4,-166.059 26730.4,-166.059 26730.4,-166.059 26735.2,-167.44 26731.6,-161.734 26740,-168.822 26740,-168.822"/>
			<text textAnchor="middle" x="26558" y="-147.8">Er16</text>
			</g>
			<g id="edge355" className="edge">
			<path d="M26362.7,-230.644C26395.2,-223.163 26450.4,-210.501 26493.6,-200.568"/>
			<polygon fill="#000000" stroke="#000000" points="26503.5,-198.3 26494.7,-204.925 26498.6,-199.42 26493.7,-200.54 26493.7,-200.54 26493.7,-200.54 26498.6,-199.42 26492.7,-196.154 26503.5,-198.3 26503.5,-198.3"/>
			<text textAnchor="middle" x="26444" y="-219.8">Kf133</text>
			</g>
			<g id="edge635" className="edge majority">
			<path strokeWidth="3" d="M26631.9,-183.985C26660.7,-183.188 26693.3,-182.287 26720.2,-181.543"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="26730.2,-181.267 26720.3,-186.041 26725.2,-182.405 26720.2,-182.543 26720.2,-181.543 26720.2,-180.544 26725.2,-180.405 26720.1,-177.045 26730.2,-181.267 26730.2,-181.267"/>
			<text textAnchor="middle" x="26681" y="-186.8">majority</text>
			</g>
			<g id="n148" className="node">
			<ellipse cx="26962" cy="-180" rx="39.7935" ry="18"/>
			<text textAnchor="middle" x="26962" y="-176.3">Ecce, </text>
			</g>
			<g id="edge1239" className="edge majority">
			<path strokeWidth="3.2" d="M26824.2,-180C26851,-180 26884.8,-180 26912.1,-180"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="26922.3,-180 26912.3,-184.5 26917.3,-181.1 26912.3,-181.1 26912.3,-180 26912.3,-178.9 26917.3,-178.9 26912.3,-175.5 26922.3,-180 26922.3,-180"/>
			<text textAnchor="middle" x="26873" y="-183.8">majority</text>
			</g>
			<g id="n149" className="node">
			<ellipse cx="27164" cy="-180" rx="63.8893" ry="18"/>
			<text textAnchor="middle" x="27164" y="-176.3">concipies. &#160;</text>
			</g>
			<g id="edge223" className="edge majority">
			<path strokeWidth="3.2" d="M27002,-180C27027,-180 27060,-180 27089.7,-180"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="27100.1,-180 27090.1,-184.5 27095.1,-181.1 27090.1,-181.1 27090.1,-180 27090.1,-178.9 27095.1,-178.9 27090.1,-175.5 27100.1,-180 27100.1,-180"/>
			<text textAnchor="middle" x="27051" y="-183.8">majority</text>
			</g>
			<g id="n150" className="node">
			<ellipse cx="27353" cy="-177" rx="27" ry="18"/>
			<text textAnchor="middle" x="27353" y="-173.3">et </text>
			</g>
			<g id="edge266" className="edge majority">
			<path strokeWidth="3" d="M27227.8,-178.993C27256.9,-178.525 27290.6,-177.985 27315.5,-177.586"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="27325.6,-177.424 27315.7,-182.084 27320.6,-178.504 27315.6,-178.584 27315.6,-177.584 27315.6,-176.584 27320.6,-176.504 27315.5,-173.085 27325.6,-177.424 27325.6,-177.424"/>
			<text textAnchor="middle" x="27277" y="-181.8">majority</text>
			</g>
			<g id="n156" className="node">
			<ellipse cx="29149" cy="-168" rx="63.0888" ry="18"/>
			<text textAnchor="middle" x="29149" y="-164.3">Notandum </text>
			</g>
			<g id="edge1322" className="edge">
			<path d="M27203.4,-194.199C27240.8,-206.724 27299.5,-223 27352,-223 27352,-223 27352,-223 28873,-223 28952.5,-223 29042.5,-200.611 29097.2,-184.402"/>
			<polygon fill="#000000" stroke="#000000" points="29107,-181.455 29098.8,-188.645 29102.3,-182.895 29097.5,-184.335 29097.5,-184.335 29097.5,-184.335 29102.3,-182.895 29096.2,-180.026 29107,-181.455 29107,-181.455"/>
			<text textAnchor="middle" x="27846" y="-226.8">Wi3818</text>
			</g>
			<g id="n151" className="node">
			<ellipse cx="27520" cy="-177" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="27520" y="-173.3">paries </text>
			</g>
			<g id="edge902" className="edge majority">
			<path strokeWidth="3" d="M27380.1,-177C27403.5,-177 27438.3,-177 27467.2,-177"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="27477.5,-177 27467.5,-181.5 27472.5,-178 27467.5,-178 27467.5,-177 27467.5,-176 27472.5,-176 27467.5,-172.5 27477.5,-177 27477.5,-177"/>
			<text textAnchor="middle" x="27429" y="-180.8">majority</text>
			</g>
			<g id="n152" className="node">
			<ellipse cx="27703" cy="-126" rx="42.7926" ry="18"/>
			<text textAnchor="middle" x="27703" y="-122.3">filium. </text>
			</g>
			<g id="edge1015" className="edge majority">
			<path strokeWidth="2.8" d="M27548.4,-163.455C27558.2,-159.017 27569.4,-154.366 27580,-151 27603.4,-143.54 27630.1,-137.778 27652.5,-133.676"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="27662.4,-131.908 27653.4,-138.084 27657.7,-133.667 27652.8,-134.54 27652.6,-133.653 27652.4,-132.767 27657.4,-131.894 27651.8,-129.223 27662.4,-131.908 27662.4,-131.908"/>
			<text textAnchor="middle" x="27611" y="-154.8">majority</text>
			</g>
			<g id="n153" className="node">
			<ellipse cx="27973" cy="-163" rx="27" ry="18"/>
			<text textAnchor="middle" x="27973" y="-159.3">et </text>
			</g>
			<g id="edge84" className="edge">
			<path d="M27562.3,-176.443C27635.9,-175.327 27794.4,-172.358 27928,-166 27930.5,-165.879 27933.2,-165.739 27935.8,-165.586"/>
			<polygon fill="#000000" stroke="#000000" points="27946,-164.954 27936.3,-170.068 27941,-165.265 27936,-165.576 27936,-165.576 27936,-165.576 27941,-165.265 27935.7,-161.085 27946,-164.954 27946,-164.954"/>
			<text textAnchor="middle" x="27703" y="-177.8">Kr185</text>
			</g>
			<g id="edge8" className="edge">
			<path strokeWidth="1.4" d="M27745.6,-128.702C27790.8,-132.088 27865,-138.962 27928,-151 27931.3,-151.624 27934.6,-152.366 27938,-153.171"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="27948,-155.718 27937.1,-157.594 27943.1,-154.67 27938.2,-153.429 27938.3,-153.235 27938.3,-153.041 27943.2,-154.283 27939.4,-148.876 27948,-155.718 27948,-155.718"/>
			<text textAnchor="middle" x="27846" y="-154.8">Ba96, MüU151, Sg524</text>
			</g>
			<g id="n155" className="node">
			<ellipse cx="28872" cy="-148" rx="53.0913" ry="18"/>
			<text textAnchor="middle" x="28872" y="-144.3">Secundo </text>
			</g>
			<g id="edge1299" className="edge">
			<path strokeWidth="2.2" d="M27746.2,-126.075C27871.2,-126.388 28251.1,-127.979 28566,-136 28650.1,-138.143 28747.3,-142.245 28808.9,-145.051"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="28819.2,-145.524 28809,-149.562 28814.2,-145.895 28809.2,-145.666 28809.2,-145.067 28809.2,-144.467 28814.2,-144.696 28809.4,-140.571 28819.2,-145.524 28819.2,-145.524"/>
			<text textAnchor="middle" x="28233" y="-136.8">Er16, Gr314, Kf133, Kr299, Mü11475, Mü22405, Mü28315</text>
			</g>
			<g id="n154" className="node">
			<ellipse cx="28516" cy="-163" rx="49.2915" ry="18"/>
			<text textAnchor="middle" x="28516" y="-159.3">cetera. &#160;</text>
			</g>
			<g id="edge1363" className="edge">
			<path strokeWidth="1.6" d="M28000.1,-163C28082.7,-163 28339.6,-163 28456.3,-163"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="28466.5,-163 28456.5,-167.5 28461.5,-163.3 28456.5,-163.3 28456.5,-163 28456.5,-162.7 28461.5,-162.7 28456.5,-158.5 28466.5,-163 28466.5,-163"/>
			<text textAnchor="middle" x="28233" y="-166.8">Ba96, Kr185, MüU151, Sg524</text>
			</g>
			<g id="edge1359" className="edge">
			<path strokeWidth="1.6" d="M28565.1,-160.961C28628.2,-158.287 28739.1,-153.589 28808.6,-150.644"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="28819,-150.205 28809.2,-155.124 28814,-150.716 28809,-150.928 28809,-150.628 28809,-150.329 28814,-150.117 28808.8,-146.132 28819,-150.205 28819,-150.205"/>
			<text textAnchor="middle" x="28692" y="-163.8">Ba96, Kr185, MüU151, Sg524</text>
			</g>
			<g id="edge208" className="edge majority">
			<path strokeWidth="2.6" d="M28917.6,-138.525C28926.3,-136.862 28935.4,-135.263 28944,-134 28998.4,-125.994 29061.4,-120.37 29102.8,-117.167"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="29112.9,-116.405 29103.2,-121.648 29107.9,-117.58 29102.9,-117.958 29102.9,-117.161 29102.8,-116.363 29107.8,-115.985 29102.5,-112.674 29112.9,-116.405 29112.9,-116.405"/>
			<text textAnchor="middle" x="29006" y="-137.8">majority</text>
			</g>
			<g id="edge553" className="edge">
			<path strokeWidth="1.2" d="M28924.4,-151.738C28967.7,-154.884 29029.9,-159.412 29077.8,-162.892"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="29087.7,-163.618 29077.4,-167.381 29082.8,-163.355 29077.8,-162.992 29077.8,-162.893 29077.8,-162.793 29082.8,-163.156 29078.1,-158.404 29087.7,-163.618 29087.7,-163.618"/>
			<text textAnchor="middle" x="29006" y="-165.8">Gr314, Mü22405</text>
			</g>
			<g id="n158" className="node">
			<ellipse cx="29473" cy="-117" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="29473" y="-113.3">quod </text>
			</g>
			<g id="edge1351" className="edge majority">
			<path strokeWidth="2.8" d="M29185.7,-114.333C29244.3,-114.879 29361,-115.966 29425.8,-116.57"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="29436.2,-116.666 29426.1,-121.073 29431.1,-117.519 29426.1,-117.473 29426.2,-116.573 29426.2,-115.673 29431.2,-115.719 29426.2,-112.073 29436.2,-116.666 29436.2,-116.666"/>
			<text textAnchor="middle" x="29324" y="-119.8">majority</text>
			</g>
			<g id="edge1002" className="edge">
			<path strokeWidth="1.4" d="M29210.7,-163.99C29265.4,-159.56 29347.8,-150.854 29418,-135 29423.1,-133.846 29428.4,-132.398 29433.6,-130.827"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="29443.4,-127.7 29435.3,-135.025 29438.7,-129.409 29434,-130.928 29433.9,-130.737 29433.8,-130.547 29438.6,-129.028 29432.5,-126.45 29443.4,-127.7 29443.4,-127.7"/>
			<text textAnchor="middle" x="29324" y="-164.8">Gr314, Mü22405, Wi3818</text>
			</g>
			<g id="n159" className="node">
			<ellipse cx="29635" cy="-117" rx="27" ry="18"/>
			<text textAnchor="middle" x="29635" y="-113.3">in </text>
			</g>
			<g id="edge205" className="edge majority">
			<path strokeWidth="3.4" d="M29509.5,-117C29535.6,-117 29570.9,-117 29597.2,-117"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="29607.5,-117 29597.5,-121.5 29602.5,-118.2 29597.5,-118.2 29597.5,-117 29597.5,-115.8 29602.5,-115.8 29597.5,-112.5 29607.5,-117 29607.5,-117"/>
			<text textAnchor="middle" x="29559" y="-120.8">majority</text>
			</g>
			<g id="n160" className="node">
			<ellipse cx="29791" cy="-117" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="29791" y="-113.3">hac </text>
			</g>
			<g id="edge1084" className="edge majority">
			<path strokeWidth="3.4" d="M29662.1,-117C29686.2,-117 29722.4,-117 29750.2,-117"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="29760.3,-117 29750.3,-121.5 29755.3,-118.2 29750.3,-118.2 29750.3,-117 29750.3,-115.8 29755.3,-115.8 29750.3,-112.5 29760.3,-117 29760.3,-117"/>
			<text textAnchor="middle" x="29711" y="-120.8">majority</text>
			</g>
			<g id="n161" className="node">
			<ellipse cx="29990" cy="-117" rx="69.5877" ry="18"/>
			<text textAnchor="middle" x="29990" y="-113.3">salutacione, </text>
			</g>
			<g id="edge424" className="edge majority">
			<path strokeWidth="3.4" d="M29821.9,-117C29845.3,-117 29879,-117 29910,-117"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="29920.3,-117 29910.3,-121.5 29915.3,-118.2 29910.3,-118.2 29910.3,-117 29910.3,-115.8 29915.3,-115.8 29910.3,-112.5 29920.3,-117 29920.3,-117"/>
			<text textAnchor="middle" x="29871" y="-120.8">majority</text>
			</g>
			<g id="n162" className="node">
			<ellipse cx="30189" cy="-117" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="30189" y="-113.3">qua </text>
			</g>
			<g id="edge728" className="edge majority">
			<path strokeWidth="3.4" d="M30059.6,-117C30089.3,-117 30123,-117 30148.4,-117"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="30158.4,-117 30148.4,-121.5 30153.4,-118.2 30148.4,-118.2 30148.4,-117 30148.4,-115.8 30153.4,-115.8 30148.4,-112.5 30158.4,-117 30158.4,-117"/>
			<text textAnchor="middle" x="30109" y="-120.8">majority</text>
			</g>
			<g id="n163" className="node">
			<ellipse cx="30368" cy="-117" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="30368" y="-113.3">angelus </text>
			</g>
			<g id="edge950" className="edge majority">
			<path strokeWidth="3.4" d="M30219.6,-117C30243.6,-117 30278,-117 30307.6,-117"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="30317.9,-117 30307.9,-121.5 30312.9,-118.2 30307.9,-118.2 30307.9,-117 30307.9,-115.8 30312.9,-115.8 30307.9,-112.5 30317.9,-117 30317.9,-117"/>
			<text textAnchor="middle" x="30269" y="-120.8">majority</text>
			</g>
			<g id="n164" className="node">
			<ellipse cx="30635" cy="-84" rx="54.6905" ry="18"/>
			<text textAnchor="middle" x="30635" y="-80.3">salutauit </text>
			</g>
			<g id="edge185" className="edge">
			<path strokeWidth="1.2" d="M30415.5,-111.214C30459.4,-105.743 30525.6,-97.5046 30573.6,-91.5255"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="30583.5,-90.2857 30574.2,-95.987 30578.6,-91.0029 30573.6,-91.6208 30573.6,-91.5215 30573.6,-91.4223 30578.5,-90.8044 30573,-87.056 30583.5,-90.2857 30583.5,-90.2857"/>
			<text textAnchor="middle" x="30499" y="-111.8">Go325, Mü22405</text>
			</g>
			<g id="n165" className="node">
			<ellipse cx="30902" cy="-133" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="30902" y="-129.3">Mariam </text>
			</g>
			<g id="edge1349" className="edge majority">
			<path strokeWidth="3" d="M30415.8,-122.402C30422.6,-123.034 30429.5,-123.596 30436,-124 30581.5,-132.995 30753.2,-133.778 30841.6,-133.459"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="30851.7,-133.416 30841.8,-137.958 30846.7,-134.437 30841.7,-134.458 30841.7,-133.458 30841.7,-132.458 30846.7,-132.437 30841.7,-128.958 30851.7,-133.416 30851.7,-133.416"/>
			<text textAnchor="middle" x="30635" y="-135.8">majority</text>
			</g>
			<g id="edge188" className="edge">
			<path strokeWidth="1.2" d="M30688.7,-87.5037C30728.9,-90.934 30785.5,-97.3933 30834,-109 30842,-110.921 30850.4,-113.474 30858.5,-116.199"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="30868,-119.577 30857.1,-120.491 30863.3,-118.007 30858.6,-116.342 30858.6,-116.248 30858.6,-116.154 30863.4,-117.818 30860.1,-112.005 30868,-119.577 30868,-119.577"/>
			<text textAnchor="middle" x="30771" y="-112.8">Go325, Mü22405</text>
			</g>
			<g id="n166" className="node">
			<ellipse cx="31105" cy="-133" rx="54.6905" ry="18"/>
			<text textAnchor="middle" x="31105" y="-129.3">salutauit </text>
			</g>
			<g id="edge723" className="edge majority">
			<path strokeWidth="3" d="M30952.2,-133C30978.7,-133 31011.7,-133 31040.1,-133"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="31050.4,-133 31040.4,-137.5 31045.4,-134 31040.4,-134 31040.4,-133 31040.4,-132 31045.4,-132 31040.4,-128.5 31050.4,-133 31050.4,-133"/>
			<text textAnchor="middle" x="31001" y="-136.8">majority</text>
			</g>
			<g id="n168" className="node">
			<ellipse cx="31407" cy="-83" rx="32.4942" ry="18"/>
			<text textAnchor="middle" x="31407" y="-79.3">ipse </text>
			</g>
			<g id="edge1168" className="edge">
			<path d="M30937.8,-120.328C30967.2,-110.27 31010.8,-96.9448 31050,-91 31162.6,-73.9443 31297.4,-77.2865 31364.2,-80.5061"/>
			<polygon fill="#000000" stroke="#000000" points="31374.3,-81.0187 31364.1,-85.0073 31369.3,-80.7659 31364.3,-80.5131 31364.3,-80.5131 31364.3,-80.5131 31369.3,-80.7659 31364.6,-76.0188 31374.3,-81.0187 31374.3,-81.0187"/>
			<text textAnchor="middle" x="31105" y="-94.8">Mü22405</text>
			</g>
			<g id="n167" className="node">
			<ellipse cx="31407" cy="-158" rx="32.4942" ry="18"/>
			<text textAnchor="middle" x="31407" y="-154.3">ipsa </text>
			</g>
			<g id="edge713" className="edge">
			<path d="M30940.3,-144.833C30949.9,-147.532 30960.3,-150.147 30970,-152 31005.1,-158.678 31014.4,-156.555 31050,-160 31185.5,-173.124 31221.2,-190.521 31356,-172 31360.2,-171.42 31364.6,-170.578 31368.9,-169.589"/>
			<polygon fill="#000000" stroke="#000000" points="31378.8,-167.072 31370.2,-173.902 31373.9,-168.307 31369.1,-169.541 31369.1,-169.541 31369.1,-169.541 31373.9,-168.307 31368,-165.181 31378.8,-167.072 31378.8,-167.072"/>
			<text textAnchor="middle" x="31105" y="-176.8">Go325</text>
			</g>
			<g id="edge144" className="edge majority">
			<path strokeWidth="2.4" d="M31152.8,-124.273C31161.2,-122.79 31169.8,-121.308 31178,-120 31256.9,-107.345 31277.5,-109.895 31356,-95 31359.7,-94.3015 31363.5,-93.5095 31367.3,-92.6734"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="31377.3,-90.3913 31368.5,-97.0087 31372.6,-92.189 31367.7,-93.3044 31367.5,-92.622 31367.4,-91.9397 31372.3,-90.8243 31366.5,-88.2354 31377.3,-90.3913 31377.3,-90.3913"/>
			<text textAnchor="middle" x="31267" y="-123.8">majority</text>
			</g>
			<g id="edge565" className="edge">
			<path strokeWidth="1.4" d="M31158.3,-137.355C31216.8,-142.234 31310.5,-150.045 31364.4,-154.53"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="31374.6,-155.381 31364.2,-159.035 31369.6,-155.165 31364.6,-154.749 31364.6,-154.55 31364.6,-154.351 31369.6,-154.766 31365,-150.066 31374.6,-155.381 31374.6,-155.381"/>
			<text textAnchor="middle" x="31267" y="-156.8">Kr185, Mü11475, Sg524</text>
			</g>
			<g id="n170" className="node">
			<ellipse cx="31683" cy="-105" rx="27" ry="18"/>
			<text textAnchor="middle" x="31683" y="-101.3">ab </text>
			</g>
			<g id="edge211" className="edge majority">
			<path strokeWidth="2.6" d="M31439,-78.8922C31483.6,-73.9254 31568.3,-68.0654 31638,-84 31642.9,-85.1204 31647.9,-86.8507 31652.7,-88.8478"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="31662.1,-93.2118 31651.1,-93.0892 31657.2,-91.8349 31652.7,-89.7323 31653,-89.0065 31653.4,-88.2806 31657.9,-90.3833 31654.9,-84.9237 31662.1,-93.2118 31662.1,-93.2118"/>
			<text textAnchor="middle" x="31548" y="-87.8">majority</text>
			</g>
			<g id="n169" className="node">
			<ellipse cx="31683" cy="-159" rx="27" ry="18"/>
			<text textAnchor="middle" x="31683" y="-155.3">in </text>
			</g>
			<g id="edge777" className="edge">
			<path d="M31439.7,-158.116C31490.9,-158.303 31591.7,-158.67 31645.7,-158.868"/>
			<polygon fill="#000000" stroke="#000000" points="31655.9,-158.905 31645.8,-163.368 31650.9,-158.886 31645.9,-158.868 31645.9,-158.868 31645.9,-158.868 31650.9,-158.886 31645.9,-154.368 31655.9,-158.905 31655.9,-158.905"/>
			<text textAnchor="middle" x="31548" y="-161.8">Kr185</text>
			</g>
			<g id="edge331" className="edge">
			<path strokeWidth="1.4" d="M31433.1,-147.27C31441,-144.235 31449.7,-141.171 31458,-139 31523.2,-121.884 31601.4,-112.452 31646,-108.083"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="31656.1,-107.129 31646.6,-112.553 31651.1,-107.8 31646.2,-108.272 31646.2,-108.073 31646.1,-107.873 31651.1,-107.402 31645.7,-103.593 31656.1,-107.129 31656.1,-107.129"/>
			<text textAnchor="middle" x="31548" y="-142.8">Go325, Mü11475, Sg524</text>
			</g>
			<g id="n171" className="node">
			<ellipse cx="31835" cy="-105" rx="27" ry="18"/>
			<text textAnchor="middle" x="31835" y="-101.3">ea </text>
			</g>
			<g id="edge173" className="edge">
			<path d="M31707.8,-151.809C31729.4,-145.117 31762.1,-134.605 31790,-124 31794.2,-122.393 31798.6,-120.612 31803,-118.804"/>
			<polygon fill="#000000" stroke="#000000" points="31812.2,-114.857 31804.8,-122.921 31807.6,-116.82 31803,-118.782 31803,-118.782 31803,-118.782 31807.6,-116.82 31801.3,-114.643 31812.2,-114.857 31812.2,-114.857"/>
			<text textAnchor="middle" x="31759" y="-147.8">Kr185</text>
			</g>
			<g id="edge1007" className="edge majority">
			<path strokeWidth="3.2" d="M31710.1,-105C31734.4,-105 31770.6,-105 31797.7,-105"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="31807.9,-105 31797.9,-109.5 31802.9,-106.1 31797.9,-106.1 31797.9,-105 31797.9,-103.9 31802.9,-103.9 31797.9,-100.5 31807.9,-105 31807.9,-105"/>
			<text textAnchor="middle" x="31759" y="-108.8">majority</text>
			</g>
			<g id="n172" className="node">
			<ellipse cx="32008" cy="-92" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="32008" y="-88.3">omnes </text>
			</g>
			<g id="edge1207" className="edge">
			<path d="M31862,-103.026C31886.4,-101.169 31923.7,-98.3331 31954.3,-96.0028"/>
			<polygon fill="#000000" stroke="#000000" points="31964.5,-95.234 31954.8,-100.479 31959.5,-95.613 31954.5,-95.9921 31954.5,-95.9921 31954.5,-95.9921 31959.5,-95.613 31954.1,-91.5051 31964.5,-95.234 31964.5,-95.234"/>
			<text textAnchor="middle" x="31911" y="-104.8">Kf133</text>
			</g>
			<g id="n173" className="node">
			<ellipse cx="32008" cy="-146" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="32008" y="-142.3">omnem </text>
			</g>
			<g id="edge1358" className="edge majority">
			<path strokeWidth="3.2" d="M31859.1,-113.496C31865.8,-115.784 31873.1,-118.138 31880,-120 31904.1,-126.553 31931.2,-132.313 31954.2,-136.736"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="31964.1,-138.61 31953.4,-141.17 31958.9,-138.76 31954,-137.829 31954.2,-136.749 31954.4,-135.668 31959.4,-136.598 31955.1,-132.327 31964.1,-138.61 31964.1,-138.61"/>
			<text textAnchor="middle" x="31911" y="-136.8">majority</text>
			</g>
			<g id="n174" className="node">
			<ellipse cx="32208" cy="-92" rx="49.2915" ry="18"/>
			<text textAnchor="middle" x="32208" y="-88.3">timores </text>
			</g>
			<g id="edge245" className="edge">
			<path d="M32052.5,-92C32080.6,-92 32117.5,-92 32148.3,-92"/>
			<polygon fill="#000000" stroke="#000000" points="32158.4,-92 32148.4,-96.5001 32153.4,-92 32148.4,-92.0001 32148.4,-92.0001 32148.4,-92.0001 32153.4,-92 32148.4,-87.5001 32158.4,-92 32158.4,-92"/>
			<text textAnchor="middle" x="32105" y="-95.8">Kf133</text>
			</g>
			<g id="n175" className="node">
			<ellipse cx="32208" cy="-146" rx="53.0913" ry="18"/>
			<text textAnchor="middle" x="32208" y="-142.3">timorem </text>
			</g>
			<g id="edge1327" className="edge majority">
			<path strokeWidth="3.2" d="M32056.2,-146C32082.6,-146 32115.8,-146 32144.3,-146"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="32154.6,-146 32144.6,-150.5 32149.6,-147.1 32144.6,-147.1 32144.6,-146 32144.6,-144.9 32149.6,-144.9 32144.6,-141.5 32154.6,-146 32154.6,-146"/>
			<text textAnchor="middle" x="32105" y="-149.8">majority</text>
			</g>
			<g id="n176" className="node">
			<ellipse cx="32411" cy="-92" rx="50.8918" ry="18"/>
			<text textAnchor="middle" x="32411" y="-88.3">expulsit </text>
			</g>
			<g id="edge690" className="edge">
			<path d="M32257.4,-92C32285.2,-92 32320.5,-92 32350.1,-92"/>
			<polygon fill="#000000" stroke="#000000" points="32360.3,-92 32350.3,-96.5001 32355.3,-92 32350.3,-92.0001 32350.3,-92.0001 32350.3,-92.0001 32355.3,-92 32350.3,-87.5001 32360.3,-92 32360.3,-92"/>
			<text textAnchor="middle" x="32311" y="-95.8">Kf133</text>
			</g>
			<g id="n177" className="node">
			<ellipse cx="32411" cy="-146" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="32411" y="-142.3">expulit </text>
			</g>
			<g id="edge757" className="edge majority">
			<path strokeWidth="3.2" d="M32261.5,-146C32290,-146 32325.2,-146 32354.2,-146"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="32364.6,-146 32354.6,-150.5 32359.6,-147.1 32354.6,-147.1 32354.6,-146 32354.6,-144.9 32359.6,-144.9 32354.6,-141.5 32364.6,-146 32364.6,-146"/>
			<text textAnchor="middle" x="32311" y="-149.8">majority</text>
			</g>
			<g id="n179" className="node">
			<ellipse cx="32607" cy="-103" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="32607" y="-99.3">unde </text>
			</g>
			<g id="edge212" className="edge">
			<path d="M32461.8,-90.6692C32486,-90.4577 32515.6,-90.8451 32542,-93 32548.7,-93.5464 32555.8,-94.3832 32562.7,-95.3448"/>
			<polygon fill="#000000" stroke="#000000" points="32572.6,-96.8238 32562,-99.798 32567.6,-96.0856 32562.7,-95.3473 32562.7,-95.3473 32562.7,-95.3473 32567.6,-96.0856 32563.3,-90.8966 32572.6,-96.8238 32572.6,-96.8238"/>
			<text textAnchor="middle" x="32511" y="-96.8">Kf133</text>
			</g>
			<g id="edge1108" className="edge majority">
			<path strokeWidth="3" d="M32451.7,-137.195C32484.3,-129.98 32530.2,-119.794 32563.5,-112.418"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="32573.4,-110.225 32564.6,-116.783 32568.7,-112.284 32563.9,-113.366 32563.6,-112.389 32563.4,-111.413 32568.3,-110.331 32562.7,-107.996 32573.4,-110.225 32573.4,-110.225"/>
			<text textAnchor="middle" x="32511" y="-133.8">majority</text>
			</g>
			<g id="n178" className="node">
			<ellipse cx="32607" cy="-168" rx="46.5926" ry="18"/>
			<text textAnchor="middle" x="32607" y="-164.3">dicens: </text>
			</g>
			<g id="edge43" className="edge">
			<path d="M32455.5,-150.937C32484,-154.17 32521.5,-158.418 32551.9,-161.867"/>
			<polygon fill="#000000" stroke="#000000" points="32561.9,-163.003 32551.5,-166.348 32557,-162.44 32552,-161.876 32552,-161.876 32552,-161.876 32557,-162.44 32552.5,-157.405 32561.9,-163.003 32561.9,-163.003"/>
			<text textAnchor="middle" x="32511" y="-163.8">Gr314</text>
			</g>
			<g id="n180" className="node">
			<ellipse cx="33220" cy="-71" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="33220" y="-67.3">eciam </text>
			</g>
			<g id="edge63" className="edge">
			<path strokeWidth="2" d="M32642.5,-98.8213C32652,-97.7759 32662.4,-96.7424 32672,-96 32854.4,-81.868 33071.8,-74.8539 33168.4,-72.2433"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="33178.5,-71.9754 33168.6,-76.7398 33173.5,-72.6082 33168.5,-72.7412 33168.5,-72.2414 33168.4,-71.7416 33173.4,-71.6086 33168.3,-67.743 33178.5,-71.9754 33178.5,-71.9754"/>
			<text textAnchor="middle" x="32846" y="-99.8">Go325, Kf133, Kr185, Kr299, Mü22405, Wi3818</text>
			</g>
			<g id="n181" className="node">
			<ellipse cx="33772" cy="-118" rx="49.2915" ry="18"/>
			<text textAnchor="middle" x="33772" y="-114.3">addidit: </text>
			</g>
			<g id="edge627" className="edge">
			<path strokeWidth="2" d="M32642.1,-108.024C32651.8,-109.236 32662.3,-110.364 32672,-111 33068.8,-136.975 33548,-125.294 33712.4,-120.056"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="33722.7,-119.721 33712.9,-124.542 33717.7,-120.382 33712.7,-120.544 33712.7,-120.044 33712.7,-119.544 33717.7,-119.383 33712.6,-115.546 33722.7,-119.721 33722.7,-119.721"/>
			<text textAnchor="middle" x="33220" y="-130.8">Ba96, Er16, Mü11475, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="n183" className="node">
			<ellipse cx="33948" cy="-118" rx="27.0966" ry="18"/>
			<text textAnchor="middle" x="33948" y="-114.3">Ne </text>
			</g>
			<g id="edge1034" className="edge">
			<path d="M32653.8,-168.463C32814.4,-169.803 33366.9,-172.019 33822,-145 33857.7,-142.882 33867.4,-145.826 33902,-137 33906.7,-135.806 33911.5,-134.202 33916.2,-132.429"/>
			<polygon fill="#000000" stroke="#000000" points="33925.5,-128.632 33917.9,-136.58 33920.9,-130.523 33916.2,-132.415 33916.2,-132.415 33916.2,-132.415 33920.9,-130.523 33914.5,-128.249 33925.5,-128.632 33925.5,-128.632"/>
			<text textAnchor="middle" x="33562" y="-164.8">Gr314</text>
			</g>
			<g id="edge844" className="edge">
			<path strokeWidth="1.8" d="M33261.9,-71.7233C33362.5,-73.726 33619.7,-80.2694 33704,-96 33711.8,-97.4528 33719.9,-99.5761 33727.7,-101.938"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="33737.4,-105.026 33726.5,-106.267 33732.5,-103.884 33727.7,-102.361 33727.8,-101.98 33728,-101.599 33732.7,-103.122 33729.2,-97.694 33737.4,-105.026 33737.4,-105.026"/>
			<text textAnchor="middle" x="33562" y="-99.8">Go325, Kf133, Kr185, Kr299, Mü22405</text>
			</g>
			<g id="n182" className="node">
			<ellipse cx="33772" cy="-64" rx="37.8943" ry="18"/>
			<text textAnchor="middle" x="33772" y="-60.3">dixit: </text>
			</g>
			<g id="edge801" className="edge">
			<path d="M33261,-67.6187C33301.1,-64.4041 33364.8,-59.8009 33420,-58 33546.2,-53.8837 33577.9,-52.3652 33704,-58 33710.7,-58.3012 33717.9,-58.7722 33724.8,-59.3208"/>
			<polygon fill="#000000" stroke="#000000" points="33734.9,-60.1696 33724.5,-63.8123 33729.9,-59.7489 33724.9,-59.3282 33724.9,-59.3282 33724.9,-59.3282 33729.9,-59.7489 33725.3,-54.8442 33734.9,-60.1696 33734.9,-60.1696"/>
			<text textAnchor="middle" x="33562" y="-61.8">Wi3818</text>
			</g>
			<g id="edge157" className="edge majority">
			<path strokeWidth="3" d="M33821.5,-118C33849.6,-118 33884.4,-118 33910.2,-118"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="33920.4,-118 33910.4,-122.5 33915.4,-119 33910.4,-119 33910.4,-118 33910.4,-117 33915.4,-117 33910.4,-113.5 33920.4,-118 33920.4,-118"/>
			<text textAnchor="middle" x="33871" y="-121.8">majority</text>
			</g>
			<g id="edge402" className="edge">
			<path d="M33806.2,-71.7124C33832.5,-78.12 33870,-87.95 33902,-99 33906.4,-100.503 33910.9,-102.224 33915.3,-104.003"/>
			<polygon fill="#000000" stroke="#000000" points="33924.8,-107.927 33913.8,-108.255 33920.2,-106.013 33915.6,-104.098 33915.6,-104.098 33915.6,-104.098 33920.2,-106.013 33917.3,-99.9409 33924.8,-107.927 33924.8,-107.927"/>
			<text textAnchor="middle" x="33871" y="-102.8">Wi3818</text>
			</g>
			<g id="n184" className="node">
			<ellipse cx="34122" cy="-118" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="34122" y="-114.3">timeas, </text>
			</g>
			<g id="edge820" className="edge majority">
			<path strokeWidth="3.4" d="M33975.5,-118C33998.8,-118 34033.7,-118 34063.4,-118"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="34073.7,-118 34063.7,-122.5 34068.7,-119.2 34063.7,-119.2 34063.7,-118 34063.7,-116.8 34068.7,-116.8 34063.7,-113.5 34073.7,-118 34073.7,-118"/>
			<text textAnchor="middle" x="34025" y="-121.8">majority</text>
			</g>
			<g id="n185" className="node">
			<ellipse cx="34312" cy="-118" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="34312" y="-114.3">Maria. </text>
			</g>
			<g id="edge373" className="edge majority">
			<path strokeWidth="3.4" d="M34170.4,-118C34197,-118 34230.1,-118 34257.5,-118"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="34267.8,-118 34257.8,-122.5 34262.8,-119.2 34257.8,-119.2 34257.8,-118 34257.8,-116.8 34262.8,-116.8 34257.8,-113.5 34267.8,-118 34267.8,-118"/>
			<text textAnchor="middle" x="34219" y="-121.8">majority</text>
			</g>
			<g id="n188" className="node">
			<ellipse cx="34810" cy="-64" rx="53.8905" ry="18"/>
			<text textAnchor="middle" x="34810" y="-60.3">inuenisti </text>
			</g>
			<g id="edge204" className="edge">
			<path d="M34345.9,-106.29C34354.9,-103.487 34364.7,-100.791 34374,-99 34504.6,-73.7258 34660.7,-66.6569 34745.9,-64.7096"/>
			<polygon fill="#000000" stroke="#000000" points="34755.9,-64.4966 34746,-69.208 34750.9,-64.6028 34745.9,-64.7091 34745.9,-64.7091 34745.9,-64.7091 34750.9,-64.6028 34745.8,-60.2101 34755.9,-64.4966 34755.9,-64.4966"/>
			<text textAnchor="middle" x="34556" y="-102.8">Gr314</text>
			</g>
			<g id="n186" className="node">
			<ellipse cx="34810" cy="-172" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="34810" y="-168.3">Timuit </text>
			</g>
			<g id="edge297" className="edge">
			<path strokeWidth="2" d="M34345.9,-129.71C34354.9,-132.513 34364.7,-135.209 34374,-137 34509.7,-163.258 34672.9,-169.866 34755.5,-171.495"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="34765.7,-171.678 34755.6,-175.997 34760.7,-172.088 34755.7,-171.998 34755.7,-171.498 34755.7,-170.998 34760.7,-171.088 34755.7,-166.999 34765.7,-171.678 34765.7,-171.678"/>
			<text textAnchor="middle" x="34556" y="-174.8">Ba96, Er16, Mü11475, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="n187" className="node">
			<ellipse cx="34810" cy="-118" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="34810" y="-114.3">Timeat </text>
			</g>
			<g id="edge317" className="edge">
			<path strokeWidth="2" d="M34356.6,-118C34446.8,-118 34653.7,-118 34753.4,-118"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="34763.6,-118 34753.6,-122.5 34758.6,-118.5 34753.6,-118.5 34753.6,-118 34753.6,-117.5 34758.6,-117.5 34753.6,-113.5 34763.6,-118 34763.6,-118"/>
			<text textAnchor="middle" x="34556" y="-121.8">Go325, Kf133, Kr185, Kr299, Mü22405, Wi3818</text>
			</g>
			<g id="n190" className="node">
			<ellipse cx="35316" cy="-64" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="35316" y="-60.3">graciam </text>
			</g>
			<g id="edge908" className="edge">
			<path d="M34864,-64C34958.1,-64 35153.8,-64 35253.6,-64"/>
			<polygon fill="#000000" stroke="#000000" points="35263.9,-64 35253.9,-68.5001 35258.9,-64 35253.9,-64.0001 35253.9,-64.0001 35253.9,-64.0001 35258.9,-64 35253.9,-59.5001 35263.9,-64 35263.9,-64"/>
			<text textAnchor="middle" x="35064" y="-67.8">Gr314</text>
			</g>
			<g id="n189" className="node">
			<ellipse cx="35316" cy="-118" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="35316" y="-114.3">enim </text>
			</g>
			<g id="edge33" className="edge">
			<path strokeWidth="2" d="M34854.3,-171.212C34932.8,-169.185 35104,-162.025 35246,-137 35255.6,-135.303 35265.9,-132.855 35275.4,-130.277"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="35285.1,-127.57 35276.6,-134.603 35280.4,-129.402 35275.6,-130.752 35275.4,-130.271 35275.3,-129.789 35280.1,-128.439 35274.2,-125.938 35285.1,-127.57 35285.1,-127.57"/>
			<text textAnchor="middle" x="35064" y="-173.8">Ba96, Er16, Mü11475, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="edge448" className="edge">
			<path strokeWidth="2" d="M34856.2,-118C34951.7,-118 35173.1,-118 35269.2,-118"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="35279.4,-118 35269.4,-122.5 35274.4,-118.5 35269.4,-118.5 35269.4,-118 35269.4,-117.5 35274.4,-117.5 35269.4,-113.5 35279.4,-118 35279.4,-118"/>
			<text textAnchor="middle" x="35064" y="-121.8">Go325, Kf133, Kr185, Kr299, Mü22405, Wi3818</text>
			</g>
			<g id="n194" className="node">
			<ellipse cx="35988" cy="-70" rx="31.6951" ry="18"/>
			<text textAnchor="middle" x="35988" y="-66.3">Eua </text>
			</g>
			<g id="edge131" className="edge majority">
			<path strokeWidth="3.2" d="M35352.6,-118C35386.8,-118 35439.9,-118 35486,-118 35486,-118 35486,-118 35844,-118 35884,-118 35927.2,-100.914 35955.5,-87.13"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="35964.5,-82.6114 35957.6,-91.1171 35960.5,-85.8363 35956.1,-88.0779 35955.6,-87.0947 35955.1,-86.1114 35959.5,-83.8698 35953.5,-83.0722 35964.5,-82.6114 35964.5,-82.6114"/>
			<text textAnchor="middle" x="35668" y="-121.8">majority</text>
			</g>
			<g id="n191" className="node">
			<ellipse cx="35487" cy="-64" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="35487" y="-60.3">apud </text>
			</g>
			<g id="edge718" className="edge">
			<path d="M35368.2,-64C35391.1,-64 35418,-64 35440.3,-64"/>
			<polygon fill="#000000" stroke="#000000" points="35450.5,-64 35440.5,-68.5001 35445.5,-64 35440.5,-64.0001 35440.5,-64.0001 35440.5,-64.0001 35445.5,-64 35440.5,-59.5001 35450.5,-64 35450.5,-64"/>
			<text textAnchor="middle" x="35409" y="-67.8">Gr314</text>
			</g>
			<g id="n192" className="node">
			<ellipse cx="35668" cy="-64" rx="61.99" ry="18"/>
			<text textAnchor="middle" x="35668" y="-60.3">Dominum. </text>
			</g>
			<g id="edge1070" className="edge">
			<path d="M35523.8,-64C35544.5,-64 35571.3,-64 35596.1,-64"/>
			<polygon fill="#000000" stroke="#000000" points="35606.2,-64 35596.2,-68.5001 35601.2,-64 35596.2,-64.0001 35596.2,-64.0001 35596.2,-64.0001 35601.2,-64 35596.2,-59.5001 35606.2,-64 35606.2,-64"/>
			<text textAnchor="middle" x="35565" y="-67.8">Gr314</text>
			</g>
			<g id="n193" className="node">
			<ellipse cx="35843" cy="-70" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="35843" y="-66.3">Sed </text>
			</g>
			<g id="edge825" className="edge">
			<path d="M35729.5,-66.0985C35753.6,-66.9349 35780.7,-67.8743 35802.3,-68.6218"/>
			<polygon fill="#000000" stroke="#000000" points="35812.4,-68.972 35802.2,-73.1226 35807.4,-68.7986 35802.4,-68.6253 35802.4,-68.6253 35802.4,-68.6253 35807.4,-68.7986 35802.5,-64.128 35812.4,-68.972 35812.4,-68.972"/>
			<text textAnchor="middle" x="35771" y="-71.8">Gr314</text>
			</g>
			<g id="edge509" className="edge">
			<path d="M35873.6,-70C35894.5,-70 35922.7,-70 35945.7,-70"/>
			<polygon fill="#000000" stroke="#000000" points="35955.9,-70 35945.9,-74.5001 35950.9,-70 35945.9,-70.0001 35945.9,-70.0001 35945.9,-70.0001 35950.9,-70 35945.9,-65.5001 35955.9,-70 35955.9,-70"/>
			<text textAnchor="middle" x="35915" y="-73.8">Gr314</text>
			</g>
			<g id="n195" className="node">
			<ellipse cx="36145" cy="-70" rx="27" ry="18"/>
			<text textAnchor="middle" x="36145" y="-66.3">a </text>
			</g>
			<g id="edge1165" className="edge majority">
			<path strokeWidth="3.4" d="M36020,-70C36045.3,-70 36081,-70 36107.6,-70"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="36117.7,-70 36107.7,-74.5001 36112.7,-71.2 36107.7,-71.2001 36107.7,-70.0001 36107.7,-68.8001 36112.7,-68.8 36107.7,-65.5001 36117.7,-70 36117.7,-70"/>
			<text textAnchor="middle" x="36069" y="-73.8">majority</text>
			</g>
			<g id="n196" className="node">
			<ellipse cx="36320" cy="-70" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="36320" y="-66.3">dyabolo </text>
			</g>
			<g id="edge413" className="edge majority">
			<path strokeWidth="3.4" d="M36172.3,-70C36195.4,-70 36229.8,-70 36259.5,-70"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="36269.8,-70 36259.8,-74.5001 36264.8,-71.2 36259.8,-71.2001 36259.8,-70.0001 36259.8,-68.8001 36264.8,-68.8 36259.8,-65.5001 36269.8,-70 36269.8,-70"/>
			<text textAnchor="middle" x="36221" y="-73.8">majority</text>
			</g>
			<g id="n197" className="node">
			<ellipse cx="36519" cy="-64" rx="50.8918" ry="18"/>
			<text textAnchor="middle" x="36519" y="-60.3">decepto </text>
			</g>
			<g id="edge1356" className="edge">
			<path d="M36369.9,-68.5091C36396.6,-67.6962 36429.9,-66.6833 36458.1,-65.8236"/>
			<polygon fill="#000000" stroke="#000000" points="36468.3,-65.5145 36458.4,-70.3169 36463.3,-65.6667 36458.3,-65.819 36458.3,-65.819 36458.3,-65.819 36463.3,-65.6667 36458.1,-61.3211 36468.3,-65.5145 36468.3,-65.5145"/>
			<text textAnchor="middle" x="36419" y="-70.8">Sg524</text>
			</g>
			<g id="n198" className="node">
			<ellipse cx="36519" cy="-142" rx="50.8918" ry="18"/>
			<text textAnchor="middle" x="36519" y="-138.3">decepta </text>
			</g>
			<g id="edge634" className="edge majority">
			<path strokeWidth="3.2" d="M36355.8,-82.7064C36388.5,-94.6624 36437.6,-112.626 36473.3,-125.646"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="36482.9,-129.178 36472,-129.972 36477.8,-128.495 36473.1,-126.779 36473.5,-125.746 36473.9,-124.712 36478.6,-126.429 36475.1,-121.519 36482.9,-129.178 36482.9,-129.178"/>
			<text textAnchor="middle" x="36419" y="-119.8">majority</text>
			</g>
			<g id="n201" className="node">
			<ellipse cx="36877" cy="-119" rx="29.795" ry="18"/>
			<text textAnchor="middle" x="36877" y="-115.3">sed </text>
			</g>
			<g id="edge562" className="edge">
			<path d="M36566,-71.0797C36614.3,-78.5169 36692.5,-90.5606 36760,-101 36786,-105.025 36815.3,-109.573 36838,-113.09"/>
			<polygon fill="#000000" stroke="#000000" points="36847.9,-114.628 36837.3,-117.539 36842.9,-113.86 36838,-113.092 36838,-113.092 36838,-113.092 36842.9,-113.86 36838.7,-108.646 36847.9,-114.628 36847.9,-114.628"/>
			<text textAnchor="middle" x="36718" y="-104.8">Sg524</text>
			</g>
			<g id="n200" className="node">
			<ellipse cx="36718" cy="-166" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="36718" y="-162.3">timuit </text>
			</g>
			<g id="edge1161" className="edge">
			<path d="M36567.2,-147.749C36597.4,-151.424 36636.4,-156.185 36667.1,-159.923"/>
			<polygon fill="#000000" stroke="#000000" points="36677.2,-161.148 36666.7,-164.406 36672.2,-160.543 36667.2,-159.939 36667.2,-159.939 36667.2,-159.939 36672.2,-160.543 36667.8,-155.472 36677.2,-161.148 36677.2,-161.148"/>
			<text textAnchor="middle" x="36623" y="-161.8">Gr314</text>
			</g>
			<g id="n199" className="node">
			<ellipse cx="36718" cy="-220" rx="27" ry="18"/>
			<text textAnchor="middle" x="36718" y="-216.3">et </text>
			</g>
			<g id="edge962" className="edge">
			<path d="M36547,-157.112C36559.3,-163.676 36574.2,-171.177 36588,-177 36619.5,-190.264 36656.6,-202.279 36682.9,-210.214"/>
			<polygon fill="#000000" stroke="#000000" points="36692.8,-213.153 36682,-214.612 36688,-211.726 36683.2,-210.3 36683.2,-210.3 36683.2,-210.3 36688,-211.726 36684.5,-205.987 36692.8,-213.153 36692.8,-213.153"/>
			<text textAnchor="middle" x="36623" y="-205.8">Mü11475</text>
			</g>
			<g id="edge417" className="edge majority">
			<path strokeWidth="2.8" d="M36566.7,-135.506C36597.6,-131.473 36639.1,-126.581 36676,-124 36731.7,-120.101 36796.2,-119.126 36836.6,-118.941"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="36846.8,-118.909 36836.8,-123.441 36841.8,-119.825 36836.8,-119.841 36836.8,-118.941 36836.8,-118.041 36841.8,-118.025 36836.8,-114.441 36846.8,-118.909 36846.8,-118.909"/>
			<text textAnchor="middle" x="36718" y="-127.8">majority</text>
			</g>
			<g id="edge291" className="edge">
			<path d="M36753.1,-155.802C36778.7,-148.127 36813.8,-137.63 36839.9,-129.811"/>
			<polygon fill="#000000" stroke="#000000" points="36849.8,-126.851 36841.5,-134.03 36845,-128.285 36840.2,-129.719 36840.2,-129.719 36840.2,-129.719 36845,-128.285 36838.9,-125.408 36849.8,-126.851 36849.8,-126.851"/>
			<text textAnchor="middle" x="36801" y="-151.8">Gr314</text>
			</g>
			<g id="n202" className="node">
			<ellipse cx="37052" cy="-185" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="37052" y="-181.3">Maria </text>
			</g>
			<g id="edge855" className="edge">
			<path d="M36744.8,-217.283C36799.8,-211.481 36929.6,-197.796 37001.3,-190.24"/>
			<polygon fill="#000000" stroke="#000000" points="37011.4,-189.171 37002,-194.695 37006.5,-189.695 37001.5,-190.22 37001.5,-190.22 37001.5,-190.22 37006.5,-189.695 37001,-185.744 37011.4,-189.171 37011.4,-189.171"/>
			<text textAnchor="middle" x="36877" y="-209.8">Mü11475</text>
			</g>
			<g id="edge917" className="edge majority">
			<path strokeWidth="3.2" d="M36904.6,-126.472C36928,-133.297 36962.7,-144.112 36992,-156 36999.8,-159.172 37008,-162.931 37015.8,-166.673"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="37024.9,-171.188 37014,-170.796 37020,-169.961 37015.5,-167.748 37016,-166.761 37016.5,-165.775 37020.9,-167.989 37018,-162.726 37024.9,-171.188 37024.9,-171.188"/>
			<text textAnchor="middle" x="36961" y="-159.8">majority</text>
			</g>
			<g id="n203" className="node">
			<ellipse cx="37223" cy="-185" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="37223" y="-181.3">non </text>
			</g>
			<g id="edge411" className="edge majority">
			<path strokeWidth="3.4" d="M37093.9,-185C37120.7,-185 37155.6,-185 37182.2,-185"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="37192.3,-185 37182.3,-189.5 37187.3,-186.2 37182.3,-186.2 37182.3,-185 37182.3,-183.8 37187.3,-183.8 37182.3,-180.5 37192.3,-185 37192.3,-185"/>
			<text textAnchor="middle" x="37143" y="-188.8">majority</text>
			</g>
			<g id="n204" className="node">
			<ellipse cx="37386" cy="-185" rx="33.5952" ry="18"/>
			<text textAnchor="middle" x="37386" y="-181.3">quia </text>
			</g>
			<g id="edge1054" className="edge majority">
			<path strokeWidth="3.4" d="M37253.9,-185C37278.6,-185 37313.9,-185 37341.7,-185"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="37351.9,-185 37341.9,-189.5 37346.9,-186.2 37341.9,-186.2 37341.9,-185 37341.9,-183.8 37346.9,-183.8 37341.9,-180.5 37351.9,-185 37351.9,-185"/>
			<text textAnchor="middle" x="37303" y="-188.8">majority</text>
			</g>
			<g id="n205" className="node">
			<ellipse cx="38040" cy="-176" rx="31.6951" ry="18"/>
			<text textAnchor="middle" x="38040" y="-172.3">Aue </text>
			</g>
			<g id="edge249" className="edge">
			<path strokeWidth="2.2" d="M37420.2,-184.541C37529.6,-183.032 37877.9,-178.224 37997.9,-176.567"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="38008.1,-176.426 37998.2,-181.064 38003.1,-177.095 37998.1,-177.164 37998.1,-176.564 37998.1,-175.964 38003.1,-175.895 37998.1,-172.065 38008.1,-176.426 38008.1,-176.426"/>
			<text textAnchor="middle" x="37639" y="-187.8">Go325, Gr314, Kf133, Kr185, Kr299, Mü22405, Wi3818</text>
			</g>
			<g id="n206" className="node">
			<ellipse cx="38691" cy="-226" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="38691" y="-222.3">sibi </text>
			</g>
			<g id="edge374" className="edge">
			<path strokeWidth="2" d="M37413,-195.994C37420.9,-198.826 37429.7,-201.497 37438,-203 37908.5,-288.054 38494.7,-243.935 38650.5,-229.821"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="38660.5,-228.897 38651,-234.294 38655.6,-229.853 38650.6,-230.311 38650.6,-229.813 38650.5,-229.315 38655.5,-228.857 38650.2,-225.331 38660.5,-228.897 38660.5,-228.897"/>
			<text textAnchor="middle" x="38040" y="-256.8">Ba96, Er16, Mü11475, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="edge1079" className="edge">
			<path strokeWidth="2.2" d="M38071.4,-172.684C38160.8,-163.896 38429.9,-144.369 38642,-201 38648.3,-202.686 38654.7,-205.301 38660.8,-208.217"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="38669.8,-212.955 38658.8,-212.294 38665.1,-211.163 38660.7,-208.84 38660.9,-208.309 38661.2,-207.777 38665.6,-210.101 38663,-204.324 38669.8,-212.955 38669.8,-212.955"/>
			<text textAnchor="middle" x="38441" y="-204.8">Go325, Gr314, Kf133, Kr185, Kr299, Mü22405, Wi3818</text>
			</g>
			<g id="n207" className="node">
			<ellipse cx="39197" cy="-276" rx="61.1893" ry="18"/>
			<text textAnchor="middle" x="39197" y="-272.3">nunciatur. </text>
			</g>
			<g id="edge920" className="edge">
			<path strokeWidth="1.4" d="M38716,-236.552C38723.6,-239.443 38732,-242.258 38740,-244 38874.2,-273.227 39035.4,-277.561 39125.7,-277.302"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="39135.8,-277.253 39125.9,-281.801 39130.8,-277.477 39125.8,-277.502 39125.8,-277.302 39125.8,-277.102 39130.8,-277.077 39125.8,-272.802 39135.8,-277.253 39135.8,-277.253"/>
			<text textAnchor="middle" x="38922" y="-280.8">Go325, Gr314, Wi3818</text>
			</g>
			<g id="n209" className="node">
			<ellipse cx="39197" cy="-168" rx="68.4888" ry="18"/>
			<text textAnchor="middle" x="39197" y="-164.3">annunciata. </text>
			</g>
			<g id="edge70" className="edge">
			<path d="M38713.3,-213.692C38721.4,-209.585 38730.9,-205.439 38740,-203 38869.9,-168.198 39027.6,-164.129 39119.4,-165.358"/>
			<polygon fill="#000000" stroke="#000000" points="39129.4,-165.517 39119.3,-169.858 39124.4,-165.438 39119.4,-165.359 39119.4,-165.359 39119.4,-165.359 39124.4,-165.438 39119.5,-160.859 39129.4,-165.517 39129.4,-165.517"/>
			<text textAnchor="middle" x="38922" y="-206.8">Mü22405</text>
			</g>
			<g id="n208" className="node">
			<ellipse cx="39197" cy="-222" rx="31.6951" ry="18"/>
			<text textAnchor="middle" x="39197" y="-218.3">Aue </text>
			</g>
			<g id="edge1127" className="edge">
			<path strokeWidth="2" d="M38721.6,-225.765C38807.5,-225.084 39056.2,-223.109 39154.9,-222.326"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="39165.1,-222.245 39155.2,-226.824 39160.1,-222.785 39155.1,-222.825 39155.1,-222.325 39155.1,-221.825 39160.1,-221.785 39155.1,-217.825 39165.1,-222.245 39165.1,-222.245"/>
			<text textAnchor="middle" x="38922" y="-228.8">Ba96, Er16, Mü11475, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="n211" className="node">
			<ellipse cx="39744" cy="-303" rx="72.2875" ry="18"/>
			<text textAnchor="middle" x="39744" y="-299.3">annunciatur. </text>
			</g>
			<g id="edge333" className="edge">
			<path strokeWidth="1.4" d="M38698.6,-243.669C38705.9,-260.437 38719.5,-284.705 38740,-296 39059.8,-471.996 39528.5,-364.429 39687.7,-319.705"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="39697.8,-316.853 39689.4,-323.915 39693,-318.412 39688.2,-319.779 39688.1,-319.587 39688.1,-319.394 39692.9,-318.028 39686.9,-315.258 39697.8,-316.853 39697.8,-316.853"/>
			<text textAnchor="middle" x="39197" y="-396.8">Kf133, Kr185, Kr299</text>
			</g>
			<g id="n210" className="node">
			<ellipse cx="39744" cy="-357" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="39744" y="-353.3">Timent </text>
			</g>
			<g id="edge1272" className="edge">
			<path d="M39252.2,-284.063C39357.3,-299.669 39587,-333.822 39690.6,-349.21"/>
			<polygon fill="#000000" stroke="#000000" points="39700.5,-350.683 39689.9,-353.664 39695.6,-349.948 39690.6,-349.213 39690.6,-349.213 39690.6,-349.213 39695.6,-349.948 39691.3,-344.762 39700.5,-350.683 39700.5,-350.683"/>
			<text textAnchor="middle" x="39472" y="-346.8">Gr314</text>
			</g>
			<g id="n213" className="node">
			<ellipse cx="39979" cy="-252" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="39979" y="-248.3">Timeant </text>
			</g>
			<g id="edge296" className="edge">
			<path strokeWidth="1.2" d="M39257.9,-274.063C39347.8,-271.163 39523,-265.547 39672,-261 39756.9,-258.409 39855,-255.547 39916.8,-253.761"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="39927.1,-253.462 39917.2,-258.249 39922.1,-253.707 39917.1,-253.851 39917.1,-253.751 39917.1,-253.651 39922.1,-253.507 39917,-249.253 39927.1,-253.462 39927.1,-253.462"/>
			<text textAnchor="middle" x="39744" y="-264.8">Go325, Wi3818</text>
			</g>
			<g id="edge156" className="edge">
			<path d="M39263.4,-172.258C39352.1,-178.299 39515.3,-190.383 39654,-206 39748.1,-216.586 39856.9,-232.874 39921.5,-242.96"/>
			<polygon fill="#000000" stroke="#000000" points="39931.4,-244.523 39920.9,-247.42 39926.5,-243.749 39921.5,-242.974 39921.5,-242.974 39921.5,-242.974 39926.5,-243.749 39922.2,-238.529 39931.4,-244.523 39931.4,-244.523"/>
			<text textAnchor="middle" x="39744" y="-229.8">Mü22405</text>
			</g>
			<g id="edge1138" className="edge">
			<path strokeWidth="2" d="M39228.2,-218.118C39303.4,-209.727 39503.9,-195.242 39654,-256 39663.7,-259.907 39663.2,-265.476 39672,-271 39679.2,-275.536 39687.3,-279.784 39695.2,-283.609"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="39704.4,-287.898 39693.5,-287.771 39699.7,-286.247 39695.2,-284.142 39695.4,-283.689 39695.6,-283.235 39700.1,-285.34 39697.3,-279.607 39704.4,-287.898 39704.4,-287.898"/>
			<text textAnchor="middle" x="39472" y="-259.8">Ba96, Er16, Mü11475, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="edge341" className="edge majority">
			<path strokeWidth="2.6" d="M39798.7,-291.236C39836.6,-282.945 39887.1,-271.894 39924.9,-263.633"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="39934.6,-261.49 39925.8,-268.024 39929.9,-263.34 39925,-264.409 39924.9,-263.628 39924.7,-262.846 39929.6,-261.777 39923.9,-259.232 39934.6,-261.49 39934.6,-261.49"/>
			<text textAnchor="middle" x="39865" y="-285.8">majority</text>
			</g>
			<g id="n212" className="node">
			<ellipse cx="39979" cy="-357" rx="64.9885" ry="18"/>
			<text textAnchor="middle" x="39979" y="-353.3">peccatores </text>
			</g>
			<g id="edge58" className="edge">
			<path d="M39790.2,-357C39822.4,-357 39866.3,-357 39903.6,-357"/>
			<polygon fill="#000000" stroke="#000000" points="39914,-357 39904,-361.5 39909,-357 39904,-357 39904,-357 39904,-357 39909,-357 39904,-352.5 39914,-357 39914,-357"/>
			<text textAnchor="middle" x="39865" y="-360.8">Gr314</text>
			</g>
			<g id="n214" className="node">
			<ellipse cx="40207" cy="-252" rx="64.9885" ry="18"/>
			<text textAnchor="middle" x="40207" y="-248.3">peccatores </text>
			</g>
			<g id="edge1350" className="edge majority">
			<path strokeWidth="3.2" d="M40031,-252C40060.7,-252 40098.8,-252 40131.8,-252"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="40141.8,-252 40131.8,-256.5 40136.8,-253.1 40131.8,-253.1 40131.8,-252 40131.8,-250.9 40136.8,-250.9 40131.8,-247.5 40141.8,-252 40141.8,-252"/>
			<text textAnchor="middle" x="40093" y="-255.8">majority</text>
			</g>
			<g id="n228" className="node">
			<ellipse cx="42622" cy="-263" rx="29.795" ry="18"/>
			<text textAnchor="middle" x="42622" y="-259.3">sed </text>
			</g>
			<g id="edge1249" className="edge">
			<path d="M40044.3,-357C40089.5,-357 40151.5,-357 40206,-357 40206,-357 40206,-357 42443,-357 42504.3,-357 42522.5,-347.154 42574,-314 42584.8,-307.047 42594.8,-297.026 42602.7,-287.705"/>
			<polygon fill="#000000" stroke="#000000" points="42609.2,-279.788 42606.3,-290.386 42606,-283.668 42602.8,-287.548 42602.8,-287.548 42602.8,-287.548 42606,-283.668 42599.4,-284.71 42609.2,-279.788 42609.2,-279.788"/>
			<text textAnchor="middle" x="41249" y="-360.8">Gr314</text>
			</g>
			<g id="n215" className="node">
			<ellipse cx="40400" cy="-252" rx="29.795" ry="18"/>
			<text textAnchor="middle" x="40400" y="-248.3">sed </text>
			</g>
			<g id="edge1117" className="edge majority">
			<path strokeWidth="3.2" d="M40272.1,-252C40301.1,-252 40334.5,-252 40359.7,-252"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="40370,-252 40360,-256.5 40365,-253.1 40360,-253.1 40360,-252 40360,-250.9 40365,-250.9 40360,-247.5 40370,-252 40370,-252"/>
			<text textAnchor="middle" x="40321" y="-255.8">majority</text>
			</g>
			<g id="n216" className="node">
			<ellipse cx="40570" cy="-252" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="40570" y="-248.3">Maria </text>
			</g>
			<g id="edge1206" className="edge majority">
			<path strokeWidth="3.2" d="M40430.3,-252C40454.4,-252 40489.1,-252 40517.8,-252"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="40528.1,-252 40518.1,-256.5 40523.1,-253.1 40518.1,-253.1 40518.1,-252 40518.1,-250.9 40523.1,-250.9 40518.1,-247.5 40528.1,-252 40528.1,-252"/>
			<text textAnchor="middle" x="40479" y="-255.8">majority</text>
			</g>
			<g id="n217" className="node">
			<ellipse cx="40741" cy="-252" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="40741" y="-248.3">non </text>
			</g>
			<g id="edge21" className="edge majority">
			<path strokeWidth="3.2" d="M40611.9,-252C40638.7,-252 40673.6,-252 40700.2,-252"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="40710.3,-252 40700.3,-256.5 40705.3,-253.1 40700.3,-253.1 40700.3,-252 40700.3,-250.9 40705.3,-250.9 40700.3,-247.5 40710.3,-252 40710.3,-252"/>
			<text textAnchor="middle" x="40661" y="-255.8">majority</text>
			</g>
			<g id="n218" className="node">
			<ellipse cx="40904" cy="-252" rx="33.5952" ry="18"/>
			<text textAnchor="middle" x="40904" y="-248.3">quia </text>
			</g>
			<g id="edge859" className="edge majority">
			<path strokeWidth="3.2" d="M40771.9,-252C40796.6,-252 40831.9,-252 40859.7,-252"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="40869.9,-252 40859.9,-256.5 40864.9,-253.1 40859.9,-253.1 40859.9,-252 40859.9,-250.9 40864.9,-250.9 40859.9,-247.5 40869.9,-252 40869.9,-252"/>
			<text textAnchor="middle" x="40821" y="-255.8">majority</text>
			</g>
			<g id="n219" className="node">
			<ellipse cx="41118" cy="-222" rx="42.7926" ry="18"/>
			<text textAnchor="middle" x="41118" y="-218.3">gracia </text>
			</g>
			<g id="edge554" className="edge majority">
			<path strokeWidth="2.6" d="M40936.7,-247.509C40971.2,-242.626 41026.8,-234.759 41067.2,-229.051"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="41077.1,-227.65 41067.8,-233.507 41072.2,-229.143 41067.3,-229.843 41067.2,-229.051 41067.1,-228.259 41072,-227.558 41066.5,-224.596 41077.1,-227.65 41077.1,-227.65"/>
			<text textAnchor="middle" x="40987" y="-247.8">majority</text>
			</g>
			<g id="n220" className="node">
			<ellipse cx="41340" cy="-252" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="41340" y="-248.3">plena. </text>
			</g>
			<g id="edge789" className="edge">
			<path strokeWidth="1.4" d="M40935.3,-258.947C40942.1,-260.217 40949.3,-261.346 40956,-262 41099.3,-275.919 41136.5,-274.074 41280,-262 41283.7,-261.69 41287.5,-261.273 41291.3,-260.784"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="41301.4,-259.349 41292.1,-265.218 41296.4,-260.254 41291.5,-260.961 41291.5,-260.763 41291.4,-260.565 41296.4,-259.858 41290.8,-256.308 41301.4,-259.349 41301.4,-259.349"/>
			<text textAnchor="middle" x="41118" y="-274.8">Ba96, MüU151, Sg524</text>
			</g>
			<g id="edge471" className="edge majority">
			<path strokeWidth="2.6" d="M41159.1,-227.468C41195.8,-232.474 41250.3,-239.899 41289.6,-245.268"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="41299.6,-246.621 41289,-249.728 41294.5,-246.738 41289.5,-246.062 41289.6,-245.269 41289.8,-244.477 41294.7,-245.152 41290.3,-240.811 41299.6,-246.621 41299.6,-246.621"/>
			<text textAnchor="middle" x="41249" y="-246.8">majority</text>
			</g>
			<g id="n221" className="node">
			<ellipse cx="41628" cy="-215" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="41628" y="-211.3">gracia. </text>
			</g>
			<g id="edge80" className="edge">
			<path strokeWidth="1.4" d="M41378,-243.93C41385.3,-242.5 41392.9,-241.115 41400,-240 41458.6,-230.828 41526.3,-223.835 41572.4,-219.609"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="41582.5,-218.697 41572.9,-224.08 41577.5,-219.347 41572.5,-219.797 41572.5,-219.598 41572.5,-219.399 41577.5,-218.949 41572.1,-215.117 41582.5,-218.697 41582.5,-218.697"/>
			<text textAnchor="middle" x="41482" y="-243.8">Ba96, MüU151, Sg524</text>
			</g>
			<g id="n222" className="node">
			<ellipse cx="41926" cy="-257" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="41926" y="-253.3">Timeant </text>
			</g>
			<g id="edge98" className="edge majority">
			<path strokeWidth="2.6" d="M41381.9,-254.331C41388,-254.603 41394.2,-254.84 41400,-255 41567.9,-259.585 41766,-258.606 41863.9,-257.698"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="41873.9,-257.602 41864,-262.197 41868.9,-258.45 41863.9,-258.498 41863.9,-257.698 41863.9,-256.898 41868.9,-256.85 41863.9,-253.198 41873.9,-257.602 41873.9,-257.602"/>
			<text textAnchor="middle" x="41628" y="-261.8">majority</text>
			</g>
			<g id="edge591" className="edge">
			<path strokeWidth="1.4" d="M41673.6,-218.165C41719.6,-221.834 41793.1,-228.847 41856,-240 41861.9,-241.05 41868.1,-242.315 41874.2,-243.676"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="41884.3,-246.035 41873.6,-248.154 41879.4,-245.098 41874.5,-243.966 41874.6,-243.771 41874.6,-243.576 41879.5,-244.708 41875.6,-239.388 41884.3,-246.035 41884.3,-246.035"/>
			<text textAnchor="middle" x="41774" y="-243.8">Ba96, MüU151, Sg524</text>
			</g>
			<g id="n223" className="node">
			<ellipse cx="42103" cy="-257" rx="27" ry="18"/>
			<text textAnchor="middle" x="42103" y="-253.3">a </text>
			</g>
			<g id="edge1317" className="edge majority">
			<path strokeWidth="3.2" d="M41978.1,-257C42006.2,-257 42040.3,-257 42065.7,-257"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="42075.9,-257 42065.9,-261.5 42070.9,-258.1 42065.9,-258.1 42065.9,-257 42065.9,-255.9 42070.9,-255.9 42065.9,-252.5 42075.9,-257 42075.9,-257"/>
			<text textAnchor="middle" x="42027" y="-260.8">majority</text>
			</g>
			<g id="n224" className="node">
			<ellipse cx="42260" cy="-257" rx="31.6951" ry="18"/>
			<text textAnchor="middle" x="42260" y="-253.3">Deo </text>
			</g>
			<g id="edge105" className="edge majority">
			<path strokeWidth="3.2" d="M42130.3,-257C42154.3,-257 42190.1,-257 42217.8,-257"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="42228,-257 42218,-261.5 42223,-258.1 42218,-258.1 42218,-257 42218,-255.9 42223,-255.9 42218,-252.5 42228,-257 42228,-257"/>
			<text textAnchor="middle" x="42179" y="-260.8">majority</text>
			</g>
			<g id="n226" className="node">
			<ellipse cx="42442" cy="-311" rx="51.1914" ry="18"/>
			<text textAnchor="middle" x="42442" y="-307.3">elongati </text>
			</g>
			<g id="edge193" className="edge majority">
			<path strokeWidth="2.8" d="M42286.2,-267.392C42293.8,-270.347 42302.2,-273.452 42310,-276 42335.9,-284.442 42365.1,-292.395 42389.3,-298.58"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="42399.1,-301.033 42388.3,-302.951 42394,-300.683 42389.1,-299.46 42389.4,-298.588 42389.6,-297.715 42394.4,-298.938 42390.5,-294.224 42399.1,-301.033 42399.1,-301.033"/>
			<text textAnchor="middle" x="42341" y="-296.8">majority</text>
			</g>
			<g id="n227" className="node">
			<ellipse cx="42442" cy="-257" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="42442" y="-253.3">elongat </text>
			</g>
			<g id="edge137" className="edge">
			<path d="M42291.9,-257C42317,-257 42353.1,-257 42383.5,-257"/>
			<polygon fill="#000000" stroke="#000000" points="42393.6,-257 42383.6,-261.5 42388.6,-257 42383.6,-257 42383.6,-257 42383.6,-257 42388.6,-257 42383.6,-252.5 42393.6,-257 42393.6,-257"/>
			<text textAnchor="middle" x="42341" y="-260.8">Ba96</text>
			</g>
			<g id="n225" className="node">
			<ellipse cx="42442" cy="-203" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="42442" y="-199.3">longati </text>
			</g>
			<g id="edge931" className="edge">
			<path d="M42286.2,-246.608C42293.8,-243.653 42302.2,-240.548 42310,-238 42336.9,-229.205 42367.5,-220.94 42392.4,-214.653"/>
			<polygon fill="#000000" stroke="#000000" points="42402.3,-212.17 42393.7,-218.965 42397.4,-213.385 42392.6,-214.6 42392.6,-214.6 42392.6,-214.6 42397.4,-213.385 42391.5,-210.235 42402.3,-212.17 42402.3,-212.17"/>
			<text textAnchor="middle" x="42341" y="-241.8">Kr185</text>
			</g>
			<g id="edge248" className="edge majority">
			<path strokeWidth="2.8" d="M42486.7,-301.975C42512.3,-296.357 42545.2,-288.579 42574,-280 42578.1,-278.773 42582.4,-277.385 42586.6,-275.944"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="42596.3,-272.536 42588.4,-280.104 42591.9,-275.047 42587.2,-276.709 42586.9,-275.86 42586.6,-275.011 42591.3,-273.349 42585.4,-271.616 42596.3,-272.536 42596.3,-272.536"/>
			<text textAnchor="middle" x="42543" y="-298.8">majority</text>
			</g>
			<g id="edge1354" className="edge">
			<path d="M42490.2,-258.592C42518.8,-259.555 42554.8,-260.767 42581.7,-261.676"/>
			<polygon fill="#000000" stroke="#000000" points="42592,-262.021 42581.8,-266.182 42587,-261.853 42582,-261.684 42582,-261.684 42582,-261.684 42587,-261.853 42582.1,-257.187 42592,-262.021 42592,-262.021"/>
			<text textAnchor="middle" x="42543" y="-264.8">Ba96</text>
			</g>
			<g id="edge581" className="edge">
			<path d="M42482,-212.057C42508.4,-218.654 42543.8,-228.437 42574,-240 42579.2,-241.987 42584.6,-244.34 42589.8,-246.77"/>
			<polygon fill="#000000" stroke="#000000" points="42598.9,-251.164 42587.9,-250.861 42594.4,-248.987 42589.9,-246.81 42589.9,-246.81 42589.9,-246.81 42594.4,-248.987 42591.8,-242.759 42598.9,-251.164 42598.9,-251.164"/>
			<text textAnchor="middle" x="42543" y="-243.8">Kr185</text>
			</g>
			<g id="n229" className="node">
			<ellipse cx="42792" cy="-263" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="42792" y="-259.3">Maria </text>
			</g>
			<g id="edge389" className="edge majority">
			<path strokeWidth="3.4" d="M42652.3,-263C42676.4,-263 42711.1,-263 42739.8,-263"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="42750.1,-263 42740.1,-267.5 42745.1,-264.2 42740.1,-264.2 42740.1,-263 42740.1,-261.8 42745.1,-261.8 42740.1,-258.5 42750.1,-263 42750.1,-263"/>
			<text textAnchor="middle" x="42701" y="-266.8">majority</text>
			</g>
			<g id="n230" className="node">
			<ellipse cx="42963" cy="-263" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="42963" y="-259.3">non </text>
			</g>
			<g id="edge299" className="edge majority">
			<path strokeWidth="3.4" d="M42833.9,-263C42860.7,-263 42895.6,-263 42922.2,-263"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="42932.3,-263 42922.3,-267.5 42927.3,-264.2 42922.3,-264.2 42922.3,-263 42922.3,-261.8 42927.3,-261.8 42922.3,-258.5 42932.3,-263 42932.3,-263"/>
			<text textAnchor="middle" x="42883" y="-266.8">majority</text>
			</g>
			<g id="n231" className="node">
			<ellipse cx="43126" cy="-263" rx="33.5952" ry="18"/>
			<text textAnchor="middle" x="43126" y="-259.3">quia </text>
			</g>
			<g id="edge315" className="edge majority">
			<path strokeWidth="3.4" d="M42993.9,-263C43018.6,-263 43053.9,-263 43081.7,-263"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="43091.9,-263 43081.9,-267.5 43086.9,-264.2 43081.9,-264.2 43081.9,-263 43081.9,-261.8 43086.9,-261.8 43081.9,-258.5 43091.9,-263 43091.9,-263"/>
			<text textAnchor="middle" x="43043" y="-266.8">majority</text>
			</g>
			<g id="n232" className="node">
			<ellipse cx="43326" cy="-214" rx="59.5901" ry="18"/>
			<text textAnchor="middle" x="43326" y="-210.3">benedicta </text>
			</g>
			<g id="edge1129" className="edge">
			<path d="M43154.1,-252.709C43161.7,-249.993 43170.1,-247.207 43178,-245 43205.9,-237.158 43237.4,-230.276 43264,-225.002"/>
			<polygon fill="#000000" stroke="#000000" points="43273.9,-223.06 43265,-229.393 43269,-224.018 43264.1,-224.977 43264.1,-224.977 43264.1,-224.977 43269,-224.018 43263.2,-220.56 43273.9,-223.06 43273.9,-223.06"/>
			<text textAnchor="middle" x="43213" y="-248.8">Mü28315</text>
			</g>
			<g id="n233" className="node">
			<ellipse cx="43326" cy="-268" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="43326" y="-264.3">dicens </text>
			</g>
			<g id="edge1143" className="edge majority">
			<path strokeWidth="3.2" d="M43160.1,-263.837C43190.5,-264.604 43236,-265.752 43271.5,-266.649"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="43281.7,-266.906 43271.6,-271.152 43276.7,-267.88 43271.7,-267.753 43271.7,-266.654 43271.7,-265.554 43276.7,-265.68 43271.8,-262.155 43281.7,-266.906 43281.7,-266.906"/>
			<text textAnchor="middle" x="43213" y="-268.8">majority</text>
			</g>
			<g id="n234" className="node">
			<ellipse cx="43538" cy="-214" rx="27" ry="18"/>
			<text textAnchor="middle" x="43538" y="-210.3">tu </text>
			</g>
			<g id="edge610" className="edge">
			<path d="M43386.1,-214C43422.9,-214 43469.1,-214 43500.7,-214"/>
			<polygon fill="#000000" stroke="#000000" points="43510.8,-214 43500.8,-218.5 43505.8,-214 43500.8,-214 43500.8,-214 43500.8,-214 43505.8,-214 43500.8,-209.5 43510.8,-214 43510.8,-214"/>
			<text textAnchor="middle" x="43439" y="-217.8">Mü28315</text>
			</g>
			<g id="n235" className="node">
			<ellipse cx="43538" cy="-268" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="43538" y="-264.3">tecum. </text>
			</g>
			<g id="edge342" className="edge majority">
			<path strokeWidth="3.2" d="M43370.3,-268C43402.5,-268 43446.8,-268 43481.6,-268"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="43491.6,-268 43481.6,-272.5 43486.6,-269.1 43481.6,-269.1 43481.6,-268 43481.6,-266.9 43486.6,-266.9 43481.6,-263.5 43491.6,-268 43491.6,-268"/>
			<text textAnchor="middle" x="43439" y="-271.8">majority</text>
			</g>
			<g id="n237" className="node">
			<ellipse cx="43742" cy="-268" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="43742" y="-264.3">Timeant </text>
			</g>
			<g id="edge483" className="edge majority">
			<path strokeWidth="3.2" d="M43584.3,-268C43612.4,-268 43648.9,-268 43679.6,-268"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="43689.8,-268 43679.8,-272.5 43684.8,-269.1 43679.8,-269.1 43679.8,-268 43679.8,-266.9 43684.8,-266.9 43679.8,-263.5 43689.8,-268 43689.8,-268"/>
			<text textAnchor="middle" x="43637" y="-271.8">majority</text>
			</g>
			<g id="n236" className="node">
			<ellipse cx="43742" cy="-214" rx="27" ry="18"/>
			<text textAnchor="middle" x="43742" y="-210.3">in </text>
			</g>
			<g id="edge273" className="edge">
			<path d="M43565.4,-214C43601,-214 43664.7,-214 43704.8,-214"/>
			<polygon fill="#000000" stroke="#000000" points="43714.9,-214 43704.9,-218.5 43709.9,-214 43704.9,-214 43704.9,-214 43704.9,-214 43709.9,-214 43704.9,-209.5 43714.9,-214 43714.9,-214"/>
			<text textAnchor="middle" x="43637" y="-217.8">Mü28315</text>
			</g>
			<g id="n239" className="node">
			<ellipse cx="43967" cy="-322" rx="57.3905" ry="18"/>
			<text textAnchor="middle" x="43967" y="-318.3">maledicti </text>
			</g>
			<g id="edge1270" className="edge majority">
			<path strokeWidth="3" d="M43782.7,-279.259C43792.3,-281.884 43802.5,-284.609 43812,-287 43844.1,-295.066 43880.2,-303.311 43909.4,-309.77"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="43919.4,-311.978 43908.6,-314.218 43914.3,-311.877 43909.4,-310.8 43909.6,-309.824 43909.8,-308.847 43914.7,-309.924 43910.6,-305.43 43919.4,-311.978 43919.4,-311.978"/>
			<text textAnchor="middle" x="43847" y="-306.8">majority</text>
			</g>
			<g id="n240" className="node">
			<ellipse cx="43967" cy="-268" rx="57.3905" ry="18"/>
			<text textAnchor="middle" x="43967" y="-264.3">maledicit </text>
			</g>
			<g id="edge909" className="edge">
			<path d="M43794.2,-268C43825.4,-268 43865.7,-268 43899.4,-268"/>
			<polygon fill="#000000" stroke="#000000" points="43909.6,-268 43899.6,-272.5 43904.6,-268 43899.6,-268 43899.6,-268 43899.6,-268 43904.6,-268 43899.6,-263.5 43909.6,-268 43909.6,-268"/>
			<text textAnchor="middle" x="43847" y="-271.8">Er16</text>
			</g>
			<g id="n238" className="node">
			<ellipse cx="43967" cy="-214" rx="66.0889" ry="18"/>
			<text textAnchor="middle" x="43967" y="-210.3">mulieribus. </text>
			</g>
			<g id="edge475" className="edge">
			<path d="M43769,-214C43798.6,-214 43848.3,-214 43890.4,-214"/>
			<polygon fill="#000000" stroke="#000000" points="43900.7,-214 43890.7,-218.5 43895.7,-214 43890.7,-214 43890.7,-214 43890.7,-214 43895.7,-214 43890.7,-209.5 43900.7,-214 43900.7,-214"/>
			<text textAnchor="middle" x="43847" y="-217.8">Mü28315</text>
			</g>
			<g id="n241" className="node">
			<ellipse cx="44170" cy="-344" rx="27" ry="18"/>
			<text textAnchor="middle" x="44170" y="-340.3">et </text>
			</g>
			<g id="edge707" className="edge">
			<path d="M44021.3,-327.838C44056.8,-331.715 44102.3,-336.699 44133.4,-340.1"/>
			<polygon fill="#000000" stroke="#000000" points="44143.3,-341.189 44132.9,-344.574 44138.4,-340.645 44133.4,-340.101 44133.4,-340.101 44133.4,-340.101 44138.4,-340.645 44133.9,-335.628 44143.3,-341.189 44143.3,-341.189"/>
			<text textAnchor="middle" x="44087" y="-341.8">Mü11475</text>
			</g>
			<g id="n242" className="node">
			<ellipse cx="44170" cy="-290" rx="29.795" ry="18"/>
			<text textAnchor="middle" x="44170" y="-286.3">sed </text>
			</g>
			<g id="edge226" className="edge majority">
			<path strokeWidth="2.8" d="M44018.5,-313.966C44053.3,-308.427 44098.8,-301.178 44130.6,-296.109"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="44140.9,-294.479 44131.7,-300.495 44136.1,-296.154 44131.1,-296.94 44131,-296.051 44130.8,-295.163 44135.8,-294.376 44130.3,-291.607 44140.9,-294.479 44140.9,-294.479"/>
			<text textAnchor="middle" x="44087" y="-310.8">majority</text>
			</g>
			<g id="edge636" className="edge">
			<path d="M44022,-262.959C44051.9,-261.52 44089.3,-261.924 44122,-269 44127.2,-270.13 44132.6,-271.876 44137.7,-273.888"/>
			<polygon fill="#000000" stroke="#000000" points="44147.2,-277.995 44136.2,-278.154 44142.6,-276.01 44138,-274.024 44138,-274.024 44138,-274.024 44142.6,-276.01 44139.8,-269.894 44147.2,-277.995 44147.2,-277.995"/>
			<text textAnchor="middle" x="44087" y="-272.8">Er16</text>
			</g>
			<g id="n254" className="node">
			<ellipse cx="46393" cy="-300" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="46393" y="-296.3">Nota </text>
			</g>
			<g id="edge776" className="edge">
			<path d="M44033.6,-214C44072.9,-214 44123.8,-214 44169,-214 44169,-214 44169,-214 46005,-214 46135.5,-214 46285.1,-261.209 46353.8,-285.672"/>
			<polygon fill="#000000" stroke="#000000" points="46363.4,-289.108 46352.4,-289.954 46358.7,-287.414 46353.9,-285.72 46353.9,-285.72 46353.9,-285.72 46358.7,-287.414 46355.5,-281.486 46363.4,-289.108 46363.4,-289.108"/>
			<text textAnchor="middle" x="44874" y="-217.8">Mü28315</text>
			</g>
			<g id="n243" className="node">
			<ellipse cx="44348" cy="-306" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="44348" y="-302.3">Maria </text>
			</g>
			<g id="edge943" className="edge">
			<path d="M44195.8,-338.636C44222.9,-332.796 44266.8,-323.323 44300.3,-316.083"/>
			<polygon fill="#000000" stroke="#000000" points="44310.3,-313.915 44301.5,-320.424 44305.5,-314.97 44300.6,-316.025 44300.6,-316.025 44300.6,-316.025 44305.5,-314.97 44299.6,-311.626 44310.3,-313.915 44310.3,-313.915"/>
			<text textAnchor="middle" x="44253" y="-336.8">Mü11475</text>
			</g>
			<g id="edge781" className="edge majority">
			<path strokeWidth="3" d="M44199.7,-292.606C44225.9,-294.993 44265.4,-298.579 44296.8,-301.439"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="44307.2,-302.379 44296.8,-305.955 44302.1,-302.922 44297.1,-302.469 44297.2,-301.474 44297.3,-300.478 44302.3,-300.93 44297.6,-296.992 44307.2,-302.379 44307.2,-302.379"/>
			<text textAnchor="middle" x="44253" y="-303.8">majority</text>
			</g>
			<g id="n244" className="node">
			<ellipse cx="44519" cy="-306" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="44519" y="-302.3">non </text>
			</g>
			<g id="edge38" className="edge majority">
			<path strokeWidth="3.2" d="M44389.9,-306C44416.7,-306 44451.6,-306 44478.2,-306"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="44488.3,-306 44478.3,-310.5 44483.3,-307.1 44478.3,-307.1 44478.3,-306 44478.3,-304.9 44483.3,-304.9 44478.3,-301.5 44488.3,-306 44488.3,-306"/>
			<text textAnchor="middle" x="44439" y="-309.8">majority</text>
			</g>
			<g id="n245" className="node">
			<ellipse cx="44682" cy="-306" rx="33.5952" ry="18"/>
			<text textAnchor="middle" x="44682" y="-302.3">quia </text>
			</g>
			<g id="edge873" className="edge majority">
			<path strokeWidth="3.2" d="M44549.9,-306C44574.6,-306 44609.9,-306 44637.7,-306"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="44647.9,-306 44637.9,-310.5 44642.9,-307.1 44637.9,-307.1 44637.9,-306 44637.9,-304.9 44642.9,-304.9 44637.9,-301.5 44647.9,-306 44647.9,-306"/>
			<text textAnchor="middle" x="44599" y="-309.8">majority</text>
			</g>
			<g id="n246" className="node">
			<ellipse cx="44874" cy="-306" rx="59.5901" ry="18"/>
			<text textAnchor="middle" x="44874" y="-302.3">benedicta </text>
			</g>
			<g id="edge65" className="edge majority">
			<path strokeWidth="3.2" d="M44716.1,-306C44740.4,-306 44774.2,-306 44804.2,-306"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="44814.2,-306 44804.2,-310.5 44809.2,-307.1 44804.2,-307.1 44804.2,-306 44804.2,-304.9 44809.2,-304.9 44804.2,-301.5 44814.2,-306 44814.2,-306"/>
			<text textAnchor="middle" x="44765" y="-309.8">majority</text>
			</g>
			<g id="n247" className="node">
			<ellipse cx="45083" cy="-277" rx="27" ry="18"/>
			<text textAnchor="middle" x="45083" y="-273.3">tu </text>
			</g>
			<g id="edge358" className="edge majority">
			<path strokeWidth="2.8" d="M44928.6,-298.494C44965.7,-293.3 45014,-286.531 45046.4,-281.989"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="45056.3,-280.598 45047,-286.442 45051.5,-282.183 45046.5,-282.877 45046.4,-281.985 45046.3,-281.094 45051.2,-280.4 45045.8,-277.529 45056.3,-280.598 45056.3,-280.598"/>
			<text textAnchor="middle" x="44983" y="-297.8">majority</text>
			</g>
			<g id="n248" className="node">
			<ellipse cx="45259" cy="-326" rx="27" ry="18"/>
			<text textAnchor="middle" x="45259" y="-322.3">in </text>
			</g>
			<g id="edge828" className="edge">
			<path strokeWidth="1.2" d="M44931.3,-311.436C44938.3,-312.015 44945.3,-312.554 44952,-313 45049.4,-319.492 45164.5,-323.358 45221.8,-325.026"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="45231.8,-325.312 45221.7,-329.525 45226.8,-325.269 45221.8,-325.126 45221.8,-325.026 45221.8,-324.926 45226.8,-325.069 45221.9,-320.528 45231.8,-325.312 45231.8,-325.312"/>
			<text textAnchor="middle" x="45083" y="-324.8">Go325, Gr314</text>
			</g>
			<g id="edge1047" className="edge majority">
			<path strokeWidth="2.8" d="M45110,-279.608C45136.7,-282.833 45179.2,-289.497 45214,-302 45219.3,-303.911 45224.8,-306.399 45230,-309.047"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="45238.9,-313.898 45228,-313.081 45234.1,-312.303 45229.7,-309.917 45230.1,-309.127 45230.5,-308.336 45234.9,-310.722 45232.3,-305.172 45238.9,-313.898 45238.9,-313.898"/>
			<text textAnchor="middle" x="45183" y="-305.8">majority</text>
			</g>
			<g id="n249" className="node">
			<ellipse cx="45451" cy="-326" rx="66.0889" ry="18"/>
			<text textAnchor="middle" x="45451" y="-322.3">mulieribus. </text>
			</g>
			<g id="edge1287" className="edge majority">
			<path strokeWidth="3.2" d="M45286,-326C45308.9,-326 45343.2,-326 45374.6,-326"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="45384.7,-326 45374.7,-330.5 45379.7,-327.1 45374.7,-327.1 45374.7,-326 45374.7,-324.9 45379.7,-324.9 45374.7,-321.5 45384.7,-326 45384.7,-326"/>
			<text textAnchor="middle" x="45335" y="-329.8">majority</text>
			</g>
			<g id="n252" className="node">
			<ellipse cx="46004" cy="-314" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="46004" y="-310.3">Tercio </text>
			</g>
			<g id="edge1198" className="edge">
			<path strokeWidth="2" d="M45517.1,-324.582C45627.8,-322.171 45850.5,-317.321 45951.3,-315.125"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="45961.6,-314.903 45951.7,-319.619 45956.6,-315.511 45951.6,-315.62 45951.6,-315.12 45951.6,-314.62 45956.6,-314.512 45951.5,-310.621 45961.6,-314.903 45961.6,-314.903"/>
			<text textAnchor="middle" x="45709" y="-326.8">Gr314, Kf133, Kr185, Kr299, Mü22405, Wi3818</text>
			</g>
			<g id="n250" className="node">
			<ellipse cx="46004" cy="-260" rx="87.1846" ry="18"/>
			<text textAnchor="middle" x="46004" y="-256.3">Considerandum </text>
			</g>
			<g id="edge164" className="edge">
			<path d="M45488.6,-311.088C45503.2,-305.783 45520.1,-300.309 45536,-297 45662.4,-270.628 45811.5,-262.735 45906.7,-260.544"/>
			<polygon fill="#000000" stroke="#000000" points="45916.9,-260.326 45907,-265.039 45911.9,-260.433 45906.9,-260.54 45906.9,-260.54 45906.9,-260.54 45911.9,-260.433 45906.8,-256.041 45916.9,-260.326 45916.9,-260.326"/>
			<text textAnchor="middle" x="45709" y="-300.8">Mü11475</text>
			</g>
			<g id="n251" className="node">
			<ellipse cx="46004" cy="-419" rx="35.9954" ry="18"/>
			<text textAnchor="middle" x="46004" y="-415.3">Item </text>
			</g>
			<g id="edge727" className="edge">
			<path d="M45471.5,-343.224C45487.6,-356.352 45511.7,-373.565 45536,-382 45684.1,-433.312 45873.9,-428.338 45958.6,-422.742"/>
			<polygon fill="#000000" stroke="#000000" points="45968.7,-422.043 45959,-427.226 45963.7,-422.39 45958.7,-422.737 45958.7,-422.737 45958.7,-422.737 45963.7,-422.39 45958.4,-418.248 45968.7,-422.043 45968.7,-422.043"/>
			<text textAnchor="middle" x="45709" y="-429.8">Go325</text>
			</g>
			<g id="edge1188" className="edge">
			<path strokeWidth="1.6" d="M45503.3,-337.191C45514.1,-339.135 45525.4,-340.887 45536,-342 45796.9,-369.3 45863.7,-351.333 46126,-354 46209.6,-354.85 46240.3,-393.426 46314,-354 46326.7,-347.195 46321,-336.322 46332,-327 46338.1,-321.809 46345.4,-317.432 46352.8,-313.814"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="46362,-309.634 46354.8,-317.851 46357.6,-311.965 46353,-314.023 46352.9,-313.75 46352.8,-313.476 46357.3,-311.418 46351.1,-309.648 46362,-309.634 46362,-309.634"/>
			<text textAnchor="middle" x="46004" y="-359.8">Ba96, Er16, MüU151, Sg524</text>
			</g>
			<g id="edge1163" className="edge">
			<path strokeWidth="1.4" d="M46044.4,-308.724C46068,-305.824 46098.7,-302.515 46126,-301 46203.2,-296.721 46293.1,-297.609 46346.2,-298.737"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="46356.3,-298.965 46346.2,-303.238 46351.3,-299.052 46346.3,-298.939 46346.3,-298.74 46346.3,-298.54 46351.3,-298.652 46346.4,-294.241 46356.3,-298.965 46356.3,-298.965"/>
			<text textAnchor="middle" x="46220" y="-304.8">Kf133, Kr185, Kr299</text>
			</g>
			<g id="n253" className="node">
			<ellipse cx="46393" cy="-354" rx="60.3893" ry="18"/>
			<text textAnchor="middle" x="46393" y="-350.3">notandum </text>
			</g>
			<g id="edge871" className="edge">
			<path strokeWidth="1.4" d="M46045.3,-318.168C46111.8,-325.037 46245,-338.805 46325.5,-347.132"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="46335.6,-348.169 46325.2,-351.617 46330.6,-347.854 46325.6,-347.34 46325.6,-347.141 46325.7,-346.942 46330.6,-347.456 46326.1,-342.665 46335.6,-348.169 46335.6,-348.169"/>
			<text textAnchor="middle" x="46220" y="-348.8">Gr314, Mü22405, Wi3818</text>
			</g>
			<g id="n255" className="node">
			<ellipse cx="46917" cy="-258" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="46917" y="-254.3">quod </text>
			</g>
			<g id="edge1326" className="edge">
			<path d="M46091.1,-259.33C46157,-258.852 46250.2,-258.25 46332,-258 46532.5,-257.387 46771.8,-257.721 46870.3,-257.905"/>
			<polygon fill="#000000" stroke="#000000" points="46880.4,-257.924 46870.4,-262.405 46875.4,-257.915 46870.4,-257.905 46870.4,-257.905 46870.4,-257.905 46875.4,-257.915 46870.5,-253.405 46880.4,-257.924 46880.4,-257.924"/>
			<text textAnchor="middle" x="46393" y="-261.8">Mü11475</text>
			</g>
			<g id="n380" className="node">
			<ellipse cx="71397" cy="-378" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="71397" y="-374.3">nota </text>
			</g>
			<g id="edge292" className="edge">
			<path d="M46040,-419C46107.8,-419 46262.2,-419 46392,-419 46392,-419 46392,-419 70920,-419 71080.5,-419 71270.3,-395.582 71353.4,-384.143"/>
			<polygon fill="#000000" stroke="#000000" points="71363.5,-382.743 71354.2,-388.577 71358.5,-383.431 71353.6,-384.12 71353.6,-384.12 71353.6,-384.12 71358.5,-383.431 71353,-379.662 71363.5,-382.743 71363.5,-382.743"/>
			<text textAnchor="middle" x="57712" y="-422.8">Go325</text>
			</g>
			<g id="edge756" className="edge">
			<path strokeWidth="2.2" d="M46425.7,-291.904C46439.8,-288.612 46456.6,-285.096 46472,-283 46510.7,-277.729 46765.4,-265.181 46870.6,-260.145"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="46880.6,-259.668 46870.9,-264.64 46875.7,-260.506 46870.7,-260.744 46870.7,-260.145 46870.6,-259.546 46875.6,-259.307 46870.4,-255.65 46880.6,-259.668 46880.6,-259.668"/>
			<text textAnchor="middle" x="46667" y="-286.8">Ba96, Er16, Kf133, Kr185, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="n256" className="node">
			<ellipse cx="47114" cy="-312" rx="61.99" ry="18"/>
			<text textAnchor="middle" x="47114" y="-308.3">secundum </text>
			</g>
			<g id="edge1364" className="edge">
			<path d="M46429.7,-300.595C46542.2,-302.473 46891.3,-308.299 47042.2,-310.819"/>
			<polygon fill="#000000" stroke="#000000" points="47052.3,-310.987 47042.2,-315.32 47047.3,-310.904 47042.3,-310.82 47042.3,-310.82 47042.3,-310.82 47047.3,-310.904 47042.4,-306.321 47052.3,-310.987 47052.3,-310.987"/>
			<text textAnchor="middle" x="46917" y="-312.8">Kr299</text>
			</g>
			<g id="edge966" className="edge">
			<path strokeWidth="1.2" d="M46450.5,-348.143C46572.9,-335.394 46852.6,-305.948 46862,-302 46868.5,-299.271 46880.3,-289.889 46891.2,-280.486"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="46898.9,-273.73 46894.4,-283.708 46895.2,-277.103 46891.5,-280.401 46891.4,-280.326 46891.3,-280.251 46895.1,-276.953 46888.4,-276.943 46898.9,-273.73 46898.9,-273.73"/>
			<text textAnchor="middle" x="46667" y="-347.8">Mü22405, Wi3818</text>
			</g>
			<g id="edge529" className="edge">
			<path d="M46450.6,-359.68C46457.8,-360.225 46465.1,-360.69 46472,-361 46645.2,-368.754 46689.5,-377.683 46862,-361 46929.9,-354.43 47006.8,-338.077 47057.4,-326.062"/>
			<polygon fill="#000000" stroke="#000000" points="47067.1,-323.721 47058.5,-330.431 47062.3,-324.888 47057.4,-326.056 47057.4,-326.056 47057.4,-326.056 47062.3,-324.888 47056.4,-321.68 47067.1,-323.721 47067.1,-323.721"/>
			<text textAnchor="middle" x="46917" y="-361.8">Gr314</text>
			</g>
			<g id="edge985" className="edge majority">
			<path strokeWidth="2.8" d="M46951.6,-263.947C46974.9,-268.393 47006.6,-275.059 47034,-283 47044.9,-286.144 47056.4,-290.035 47067.1,-293.935"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="47076.8,-297.497 47065.8,-298.254 47071.8,-296.609 47067.1,-294.877 47067.4,-294.033 47067.7,-293.189 47072.4,-294.921 47069,-289.811 47076.8,-297.497 47076.8,-297.497"/>
			<text textAnchor="middle" x="47003" y="-286.8">majority</text>
			</g>
			<g id="n258" className="node">
			<ellipse cx="47340" cy="-365" rx="57.6901" ry="18"/>
			<text textAnchor="middle" x="47340" y="-361.3">doctorem </text>
			</g>
			<g id="edge321" className="edge">
			<path d="M47162.5,-323.24C47197.8,-331.6 47246.2,-343.034 47283.3,-351.824"/>
			<polygon fill="#000000" stroke="#000000" points="47293.5,-354.229 47282.7,-356.305 47288.6,-353.077 47283.7,-351.926 47283.7,-351.926 47283.7,-351.926 47288.6,-353.077 47284.8,-347.547 47293.5,-354.229 47293.5,-354.229"/>
			<text textAnchor="middle" x="47229" y="-349.8">Mü22405</text>
			</g>
			<g id="n257" className="node">
			<ellipse cx="47340" cy="-303" rx="53.8905" ry="18"/>
			<text textAnchor="middle" x="47340" y="-299.3">doctores </text>
			</g>
			<g id="edge534" className="edge majority">
			<path strokeWidth="3" d="M47175.3,-309.576C47206.5,-308.322 47244.6,-306.792 47276.2,-305.523"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="47286.2,-305.121 47276.4,-310.019 47281.2,-306.321 47276.2,-306.522 47276.2,-305.523 47276.2,-304.524 47281.2,-304.323 47276,-301.027 47286.2,-305.121 47286.2,-305.121"/>
			<text textAnchor="middle" x="47229" y="-311.8">majority</text>
			</g>
			<g id="n261" className="node">
			<ellipse cx="47833" cy="-362" rx="53.0913" ry="18"/>
			<text textAnchor="middle" x="47833" y="-358.3">theoloye </text>
			</g>
			<g id="edge1113" className="edge">
			<path d="M47398.3,-364.65C47491,-364.083 47673.4,-362.969 47769.4,-362.382"/>
			<polygon fill="#000000" stroke="#000000" points="47779.5,-362.32 47769.6,-366.882 47774.5,-362.351 47769.5,-362.382 47769.5,-362.382 47769.5,-362.382 47774.5,-362.351 47769.5,-357.882 47779.5,-362.32 47779.5,-362.32"/>
			<text textAnchor="middle" x="47582" y="-367.8">Mü22405</text>
			</g>
			<g id="edge631" className="edge">
			<path strokeWidth="1.6" d="M47388.5,-311.153C47397.6,-312.558 47407.1,-313.914 47416,-315 47563,-332.932 47601.7,-320.389 47748,-343 47758.4,-344.609 47769.5,-346.772 47780,-349.062"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="47789.9,-351.283 47779.2,-353.488 47785,-350.483 47780.1,-349.39 47780.2,-349.097 47780.2,-348.804 47785.1,-349.897 47781.1,-344.706 47789.9,-351.283 47789.9,-351.283"/>
			<text textAnchor="middle" x="47582" y="-346.8">Ba96, Mü11475, Mü28315, Sg524</text>
			</g>
			<g id="n260" className="node">
			<ellipse cx="47833" cy="-306" rx="66.8882" ry="18"/>
			<text textAnchor="middle" x="47833" y="-302.3">theologicos </text>
			</g>
			<g id="edge759" className="edge">
			<path d="M47393.8,-300.621C47401.3,-300.363 47408.8,-300.143 47416,-300 47563.5,-297.051 47600.5,-294.74 47748,-300 47751.3,-300.117 47754.6,-300.26 47758,-300.424"/>
			<polygon fill="#000000" stroke="#000000" points="47768.3,-300.969 47758,-304.93 47763.3,-300.703 47758.3,-300.437 47758.3,-300.437 47758.3,-300.437 47763.3,-300.703 47758.5,-295.943 47768.3,-300.969 47768.3,-300.969"/>
			<text textAnchor="middle" x="47582" y="-303.8">Kr299</text>
			</g>
			<g id="n259" className="node">
			<ellipse cx="47833" cy="-238" rx="56.59" ry="18"/>
			<text textAnchor="middle" x="47833" y="-234.3">theologie </text>
			</g>
			<g id="edge454" className="edge">
			<path strokeWidth="2" d="M47375.2,-289.192C47387.9,-284.62 47402.4,-279.95 47416,-277 47538,-250.542 47683.9,-242.032 47766.5,-239.296"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="47776.5,-238.982 47766.7,-243.793 47771.5,-239.639 47766.5,-239.795 47766.5,-239.296 47766.5,-238.796 47771.5,-238.639 47766.4,-234.798 47776.5,-238.982 47776.5,-238.982"/>
			<text textAnchor="middle" x="47582" y="-280.8">Er16, Gr314, Kf133, Kr185, MüU151, Wi3818</text>
			</g>
			<g id="n427" className="node">
			<ellipse cx="59458" cy="-278" rx="59.5901" ry="18"/>
			<text textAnchor="middle" x="59458" y="-274.3">postquam </text>
			</g>
			<g id="edge986" className="edge">
			<path strokeWidth="1.8" d="M47886.6,-362C47938.9,-362 48021.5,-362 48093,-362 48093,-362 48093,-362 59276,-362 59334.3,-362 59394.1,-325.72 59428.3,-300.846"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="59436.4,-294.797 59431.1,-304.379 59432.7,-298.104 59428.7,-301.091 59428.4,-300.77 59428.2,-300.449 59432.2,-297.463 59425.7,-297.161 59436.4,-294.797 59436.4,-294.797"/>
			<text textAnchor="middle" x="53743" y="-365.8">Ba96, Mü11475, Mü22405, Mü28315, Sg524</text>
			</g>
			<g id="edge548" className="edge">
			<path d="M47895.4,-312.677C47947.8,-317.8 48025.3,-324 48093,-324 48093,-324 48093,-324 59276,-324 59323.6,-324 59376.1,-308.893 59412.2,-295.994"/>
			<polygon fill="#000000" stroke="#000000" points="59422,-292.428 59414.1,-300.09 59417.3,-294.146 59412.6,-295.864 59412.6,-295.864 59412.6,-295.864 59417.3,-294.146 59411,-291.638 59422,-292.428 59422,-292.428"/>
			<text textAnchor="middle" x="53743" y="-327.8">Kr299</text>
			</g>
			<g id="n262" className="node">
			<ellipse cx="48094" cy="-186" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="48094" y="-182.3">quod </text>
			</g>
			<g id="edge1136" className="edge">
			<path strokeWidth="1.2" d="M47864.4,-222.768C47880,-215.592 47899.6,-207.613 47918,-203 47961,-192.217 48011.5,-188.196 48047.2,-186.737"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="48057.3,-186.375 48047.4,-191.23 48052.3,-186.654 48047.3,-186.832 48047.3,-186.733 48047.3,-186.633 48052.3,-186.454 48047.1,-182.235 48057.3,-186.375 48057.3,-186.375"/>
			<text textAnchor="middle" x="47967" y="-206.8">Kf133, Kr185</text>
			</g>
			<g id="n263" className="node">
			<ellipse cx="48094" cy="-278" rx="59.5901" ry="18"/>
			<text textAnchor="middle" x="48094" y="-274.3">postquam </text>
			</g>
			<g id="edge1218" className="edge">
			<path d="M47884.2,-245.76C47926,-252.202 47985.5,-261.397 48030.3,-268.32"/>
			<polygon fill="#000000" stroke="#000000" points="48040.2,-269.85 48029.7,-272.77 48035.3,-269.086 48030.3,-268.323 48030.3,-268.323 48030.3,-268.323 48035.3,-269.086 48031,-263.876 48040.2,-269.85 48040.2,-269.85"/>
			<text textAnchor="middle" x="47967" y="-268.8">Wi3818</text>
			</g>
			<g id="edge1072" className="edge">
			<path strokeWidth="1.4" d="M47889.3,-235.977C47941.7,-234.235 48022.7,-232 48093,-232 48093,-232 48093,-232 59276,-232 59323.6,-232 59376.1,-247.107 59412.2,-260.006"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="59422,-263.572 59411,-264.362 59417.2,-262.041 59412.5,-260.323 59412.6,-260.136 59412.6,-259.948 59417.3,-261.666 59414.1,-255.91 59422,-263.572 59422,-263.572"/>
			<text textAnchor="middle" x="53743" y="-235.8">Er16, Gr314, MüU151</text>
			</g>
			<g id="edge806" className="edge">
			<path strokeWidth="1.2" d="M48130.7,-186.297C48169.3,-186.592 48232.5,-187 48287,-187 48287,-187 48287,-187 59276,-187 59324.2,-187 59337.1,-195.907 59380,-218 59398.5,-227.539 59417,-241.745 59431.2,-253.94"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="59439.1,-260.837 59428.6,-257.614 59435.2,-257.611 59431.5,-254.309 59431.5,-254.234 59431.6,-254.159 59435.4,-257.46 59434.5,-250.854 59439.1,-260.837 59439.1,-260.837"/>
			<text textAnchor="middle" x="53973" y="-190.8">Kf133, Kr185</text>
			</g>
			<g id="n265" className="node">
			<ellipse cx="48288" cy="-278" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="48288" y="-274.3">Maria </text>
			</g>
			<g id="edge202" className="edge">
			<path d="M48153.9,-278C48180.2,-278 48210.8,-278 48236,-278"/>
			<polygon fill="#000000" stroke="#000000" points="48246.2,-278 48236.2,-282.5 48241.2,-278 48236.2,-278 48236.2,-278 48236.2,-278 48241.2,-278 48236.2,-273.5 48246.2,-278 48246.2,-278"/>
			<text textAnchor="middle" x="48200" y="-281.8">Wi3818</text>
			</g>
			<g id="n267" className="node">
			<ellipse cx="48480" cy="-278" rx="57.6901" ry="18"/>
			<text textAnchor="middle" x="48480" y="-274.3">consensit </text>
			</g>
			<g id="edge606" className="edge">
			<path d="M48329.8,-278C48353.6,-278 48384.4,-278 48411.8,-278"/>
			<polygon fill="#000000" stroke="#000000" points="48422.1,-278 48412.1,-282.5 48417.1,-278 48412.1,-278 48412.1,-278 48412.1,-278 48417.1,-278 48412.1,-273.5 48422.1,-278 48422.1,-278"/>
			<text textAnchor="middle" x="48376" y="-281.8">Wi3818</text>
			</g>
			<g id="n270" className="node">
			<ellipse cx="48673" cy="-278" rx="42.7926" ry="18"/>
			<text textAnchor="middle" x="48673" y="-274.3">uerbis </text>
			</g>
			<g id="edge428" className="edge">
			<path d="M48538,-278C48564,-278 48594.6,-278 48619.9,-278"/>
			<polygon fill="#000000" stroke="#000000" points="48630.1,-278 48620.1,-282.5 48625.1,-278 48620.1,-278 48620.1,-278 48620.1,-278 48625.1,-278 48620.1,-273.5 48630.1,-278 48630.1,-278"/>
			<text textAnchor="middle" x="48584" y="-281.8">Wi3818</text>
			</g>
			<g id="n273" className="node">
			<ellipse cx="48852" cy="-278" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="48852" y="-274.3">angelo </text>
			</g>
			<g id="edge1082" className="edge">
			<path d="M48715.9,-278C48740.3,-278 48771.3,-278 48797.4,-278"/>
			<polygon fill="#000000" stroke="#000000" points="48807.5,-278 48797.5,-282.5 48802.5,-278 48797.5,-278 48797.5,-278 48797.5,-278 48802.5,-278 48797.5,-273.5 48807.5,-278 48807.5,-278"/>
			<text textAnchor="middle" x="48762" y="-281.8">Wi3818</text>
			</g>
			<g id="n277" className="node">
			<ellipse cx="49015" cy="-278" rx="27" ry="18"/>
			<text textAnchor="middle" x="49015" y="-274.3">et </text>
			</g>
			<g id="edge182" className="edge">
			<path d="M48896.6,-278C48921.9,-278 48953.4,-278 48977.4,-278"/>
			<polygon fill="#000000" stroke="#000000" points="48987.5,-278 48977.5,-282.5 48982.5,-278 48977.5,-278 48977.5,-278 48977.5,-278 48982.5,-278 48977.5,-273.5 48987.5,-278 48987.5,-278"/>
			<text textAnchor="middle" x="48942" y="-281.8">Wi3818</text>
			</g>
			<g id="n280" className="node">
			<ellipse cx="49174" cy="-278" rx="39.7935" ry="18"/>
			<text textAnchor="middle" x="49174" y="-274.3">fidem </text>
			</g>
			<g id="edge1041" className="edge">
			<path d="M49042.3,-278C49064.6,-278 49097.1,-278 49124.2,-278"/>
			<polygon fill="#000000" stroke="#000000" points="49134.3,-278 49124.3,-282.5 49129.3,-278 49124.3,-278 49124.3,-278 49124.3,-278 49129.3,-278 49124.3,-273.5 49134.3,-278 49134.3,-278"/>
			<text textAnchor="middle" x="49088" y="-281.8">Wi3818</text>
			</g>
			<g id="n282" className="node">
			<ellipse cx="49358" cy="-278" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="49358" y="-274.3">adhibuit </text>
			</g>
			<g id="edge476" className="edge">
			<path d="M49214,-278C49237.8,-278 49268.8,-278 49295.8,-278"/>
			<polygon fill="#000000" stroke="#000000" points="49305.9,-278 49295.9,-282.5 49300.9,-278 49295.9,-278 49295.9,-278 49295.9,-278 49300.9,-278 49295.9,-273.5 49305.9,-278 49305.9,-278"/>
			<text textAnchor="middle" x="49260" y="-281.8">Wi3818</text>
			</g>
			<g id="n284" className="node">
			<ellipse cx="49549" cy="-278" rx="46.5926" ry="18"/>
			<text textAnchor="middle" x="49549" y="-274.3">dicens: </text>
			</g>
			<g id="edge40" className="edge">
			<path d="M49410.1,-278C49435.4,-278 49466,-278 49491.9,-278"/>
			<polygon fill="#000000" stroke="#000000" points="49502,-278 49492,-282.5 49497,-278 49492,-278 49492,-278 49492,-278 49497,-278 49492,-273.5 49502,-278 49502,-278"/>
			<text textAnchor="middle" x="49456" y="-281.8">Wi3818</text>
			</g>
			<g id="n286" className="node">
			<ellipse cx="49725" cy="-278" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="49725" y="-274.3">Ecce </text>
			</g>
			<g id="edge81" className="edge">
			<path d="M49596.2,-278C49621.6,-278 49653,-278 49678.3,-278"/>
			<polygon fill="#000000" stroke="#000000" points="49688.4,-278 49678.4,-282.5 49683.4,-278 49678.4,-278 49678.4,-278 49678.4,-278 49683.4,-278 49678.4,-273.5 49688.4,-278 49688.4,-278"/>
			<text textAnchor="middle" x="49642" y="-281.8">Wi3818</text>
			</g>
			<g id="n288" className="node">
			<ellipse cx="49898" cy="-278" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="49898" y="-274.3">ancilla </text>
			</g>
			<g id="edge485" className="edge">
			<path d="M49761.4,-278C49785.1,-278 49816.7,-278 49843.4,-278"/>
			<polygon fill="#000000" stroke="#000000" points="49853.7,-278 49843.7,-282.5 49848.7,-278 49843.7,-278 49843.7,-278 49843.7,-278 49848.7,-278 49843.7,-273.5 49853.7,-278 49853.7,-278"/>
			<text textAnchor="middle" x="49808" y="-281.8">Wi3818</text>
			</g>
			<g id="n290" className="node">
			<ellipse cx="50084" cy="-278" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="50084" y="-274.3">Domini. </text>
			</g>
			<g id="edge1121" className="edge">
			<path d="M49942.6,-278C49966.8,-278 49997.3,-278 50023.6,-278"/>
			<polygon fill="#000000" stroke="#000000" points="50033.9,-278 50023.9,-282.5 50028.9,-278 50023.9,-278 50023.9,-278 50023.9,-278 50028.9,-278 50023.9,-273.5 50033.9,-278 50033.9,-278"/>
			<text textAnchor="middle" x="49988" y="-281.8">Wi3818</text>
			</g>
			<g id="n292" className="node">
			<ellipse cx="50259" cy="-278" rx="32.4942" ry="18"/>
			<text textAnchor="middle" x="50259" y="-274.3">Fiat </text>
			</g>
			<g id="edge536" className="edge">
			<path d="M50134.1,-278C50160,-278 50191.4,-278 50216.1,-278"/>
			<polygon fill="#000000" stroke="#000000" points="50226.2,-278 50216.2,-282.5 50221.2,-278 50216.2,-278 50216.2,-278 50216.2,-278 50221.2,-278 50216.2,-273.5 50226.2,-278 50226.2,-278"/>
			<text textAnchor="middle" x="50180" y="-281.8">Wi3818</text>
			</g>
			<g id="n294" className="node">
			<ellipse cx="50419" cy="-278" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="50419" y="-274.3">mihi </text>
			</g>
			<g id="edge905" className="edge">
			<path d="M50291.6,-278C50315.4,-278 50348.2,-278 50374.5,-278"/>
			<polygon fill="#000000" stroke="#000000" points="50384.6,-278 50374.6,-282.5 50379.6,-278 50374.6,-278 50374.6,-278 50374.6,-278 50379.6,-278 50374.6,-273.5 50384.6,-278 50384.6,-278"/>
			<text textAnchor="middle" x="50338" y="-281.8">Wi3818</text>
			</g>
			<g id="n297" className="node">
			<ellipse cx="50608" cy="-278" rx="61.99" ry="18"/>
			<text textAnchor="middle" x="50608" y="-274.3">secundum </text>
			</g>
			<g id="edge363" className="edge">
			<path d="M50453.9,-278C50476.7,-278 50507.8,-278 50535.9,-278"/>
			<polygon fill="#000000" stroke="#000000" points="50546.2,-278 50536.2,-282.5 50541.2,-278 50536.2,-278 50536.2,-278 50536.2,-278 50541.2,-278 50536.2,-273.5 50546.2,-278 50546.2,-278"/>
			<text textAnchor="middle" x="50500" y="-281.8">Wi3818</text>
			</g>
			<g id="n300" className="node">
			<ellipse cx="50812" cy="-278" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="50812" y="-274.3">uerbum </text>
			</g>
			<g id="edge300" className="edge">
			<path d="M50669.9,-278C50695.8,-278 50726,-278 50751.8,-278"/>
			<polygon fill="#000000" stroke="#000000" points="50761.8,-278 50751.8,-282.5 50756.8,-278 50751.8,-278 50751.8,-278 50751.8,-278 50756.8,-278 50751.8,-273.5 50761.8,-278 50761.8,-278"/>
			<text textAnchor="middle" x="50716" y="-281.8">Wi3818</text>
			</g>
			<g id="n302" className="node">
			<ellipse cx="50995" cy="-278" rx="40.8928" ry="18"/>
			<text textAnchor="middle" x="50995" y="-274.3">tuum. </text>
			</g>
			<g id="edge989" className="edge">
			<path d="M50862.5,-278C50887.8,-278 50918.5,-278 50943.9,-278"/>
			<polygon fill="#000000" stroke="#000000" points="50954,-278 50944,-282.5 50949,-278 50944,-278 50944,-278 50944,-278 50949,-278 50944,-273.5 50954,-278 50954,-278"/>
			<text textAnchor="middle" x="50908" y="-281.8">Wi3818</text>
			</g>
			<g id="n304" className="node">
			<ellipse cx="51172" cy="-278" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="51172" y="-274.3">Statim </text>
			</g>
			<g id="edge977" className="edge">
			<path d="M51036.1,-278C51060.3,-278 51091.3,-278 51117.5,-278"/>
			<polygon fill="#000000" stroke="#000000" points="51127.7,-278 51117.7,-282.5 51122.7,-278 51117.7,-278 51117.7,-278 51117.7,-278 51122.7,-278 51117.7,-273.5 51127.7,-278 51127.7,-278"/>
			<text textAnchor="middle" x="51082" y="-281.8">Wi3818</text>
			</g>
			<g id="n306" className="node">
			<ellipse cx="51335" cy="-278" rx="27" ry="18"/>
			<text textAnchor="middle" x="51335" y="-274.3">in </text>
			</g>
			<g id="edge651" className="edge">
			<path d="M51216.6,-278C51241.9,-278 51273.4,-278 51297.4,-278"/>
			<polygon fill="#000000" stroke="#000000" points="51307.5,-278 51297.5,-282.5 51302.5,-278 51297.5,-278 51297.5,-278 51297.5,-278 51302.5,-278 51297.5,-273.5 51307.5,-278 51307.5,-278"/>
			<text textAnchor="middle" x="51262" y="-281.8">Wi3818</text>
			</g>
			<g id="n309" className="node">
			<ellipse cx="51481" cy="-278" rx="27" ry="18"/>
			<text textAnchor="middle" x="51481" y="-274.3">ea </text>
			</g>
			<g id="edge817" className="edge">
			<path d="M51362.1,-278C51384.9,-278 51418.2,-278 51443.6,-278"/>
			<polygon fill="#000000" stroke="#000000" points="51453.6,-278 51443.6,-282.5 51448.6,-278 51443.6,-278 51443.6,-278 51443.6,-278 51448.6,-278 51443.6,-273.5 51453.6,-278 51453.6,-278"/>
			<text textAnchor="middle" x="51408" y="-281.8">Wi3818</text>
			</g>
			<g id="n311" className="node">
			<ellipse cx="51630" cy="-278" rx="29.795" ry="18"/>
			<text textAnchor="middle" x="51630" y="-274.3">fuit </text>
			</g>
			<g id="edge110" className="edge">
			<path d="M51508.3,-278C51530.9,-278 51563.9,-278 51589.7,-278"/>
			<polygon fill="#000000" stroke="#000000" points="51599.9,-278 51589.9,-282.5 51594.9,-278 51589.9,-278 51589.9,-278 51589.9,-278 51594.9,-278 51589.9,-273.5 51599.9,-278 51599.9,-278"/>
			<text textAnchor="middle" x="51554" y="-281.8">Wi3818</text>
			</g>
			<g id="n313" className="node">
			<ellipse cx="51810" cy="-278" rx="57.6901" ry="18"/>
			<text textAnchor="middle" x="51810" y="-274.3">perfectus </text>
			</g>
			<g id="edge1308" className="edge">
			<path d="M51660,-278C51682.1,-278 51713.5,-278 51741.7,-278"/>
			<polygon fill="#000000" stroke="#000000" points="51752,-278 51742,-282.5 51747,-278 51742,-278 51742,-278 51742,-278 51747,-278 51742,-273.5 51752,-278 51752,-278"/>
			<text textAnchor="middle" x="51706" y="-281.8">Wi3818</text>
			</g>
			<g id="n315" className="node">
			<ellipse cx="51997" cy="-278" rx="37.0935" ry="18"/>
			<text textAnchor="middle" x="51997" y="-274.3">Deus </text>
			</g>
			<g id="edge846" className="edge">
			<path d="M51868,-278C51894.2,-278 51924.9,-278 51949.6,-278"/>
			<polygon fill="#000000" stroke="#000000" points="51959.8,-278 51949.8,-282.5 51954.8,-278 51949.8,-278 51949.8,-278 51949.8,-278 51954.8,-278 51949.8,-273.5 51959.8,-278 51959.8,-278"/>
			<text textAnchor="middle" x="51914" y="-281.8">Wi3818</text>
			</g>
			<g id="n317" className="node">
			<ellipse cx="52153" cy="-278" rx="27" ry="18"/>
			<text textAnchor="middle" x="52153" y="-274.3">et </text>
			</g>
			<g id="edge657" className="edge">
			<path d="M52034.1,-278C52058.7,-278 52091.1,-278 52115.7,-278"/>
			<polygon fill="#000000" stroke="#000000" points="52125.7,-278 52115.7,-282.5 52120.7,-278 52115.7,-278 52115.7,-278 52115.7,-278 52120.7,-278 52115.7,-273.5 52125.7,-278 52125.7,-278"/>
			<text textAnchor="middle" x="52080" y="-281.8">Wi3818</text>
			</g>
			<g id="n319" className="node">
			<ellipse cx="52314" cy="-278" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="52314" y="-274.3">homo, </text>
			</g>
			<g id="edge162" className="edge">
			<path d="M52180.3,-278C52202.2,-278 52234.3,-278 52261.3,-278"/>
			<polygon fill="#000000" stroke="#000000" points="52271.5,-278 52261.5,-282.5 52266.5,-278 52261.5,-278 52261.5,-278 52261.5,-278 52266.5,-278 52261.5,-273.5 52271.5,-278 52271.5,-278"/>
			<text textAnchor="middle" x="52226" y="-281.8">Wi3818</text>
			</g>
			<g id="n321" className="node">
			<ellipse cx="52485" cy="-278" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="52485" y="-274.3">unde </text>
			</g>
			<g id="edge405" className="edge">
			<path d="M52356.3,-278C52381.2,-278 52412.8,-278 52438.3,-278"/>
			<polygon fill="#000000" stroke="#000000" points="52448.5,-278 52438.5,-282.5 52443.5,-278 52438.5,-278 52438.5,-278 52438.5,-278 52443.5,-278 52438.5,-273.5 52448.5,-278 52448.5,-278"/>
			<text textAnchor="middle" x="52402" y="-281.8">Wi3818</text>
			</g>
			<g id="n323" className="node">
			<ellipse cx="52649" cy="-278" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="52649" y="-274.3">XXX </text>
			</g>
			<g id="edge1324" className="edge">
			<path d="M52521.6,-278C52545.9,-278 52578.3,-278 52604.2,-278"/>
			<polygon fill="#000000" stroke="#000000" points="52614.5,-278 52604.5,-282.5 52609.5,-278 52604.5,-278 52604.5,-278 52604.5,-278 52609.5,-278 52604.5,-273.5 52614.5,-278 52614.5,-278"/>
			<text textAnchor="middle" x="52568" y="-281.8">Wi3818</text>
			</g>
			<g id="n326" className="node">
			<ellipse cx="52818" cy="-278" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="52818" y="-274.3">ipsam </text>
			</g>
			<g id="edge543" className="edge">
			<path d="M52683.8,-278C52707.4,-278 52739.2,-278 52765.9,-278"/>
			<polygon fill="#000000" stroke="#000000" points="52776.2,-278 52766.2,-282.5 52771.2,-278 52766.2,-278 52766.2,-278 52766.2,-278 52771.2,-278 52766.2,-273.5 52776.2,-278 52776.2,-278"/>
			<text textAnchor="middle" x="52730" y="-281.8">Wi3818</text>
			</g>
			<g id="n328" className="node">
			<ellipse cx="53010" cy="-278" rx="57.6901" ry="18"/>
			<text textAnchor="middle" x="53010" y="-274.3">alloquens </text>
			</g>
			<g id="edge550" className="edge">
			<path d="M52859.8,-278C52883.6,-278 52914.4,-278 52941.8,-278"/>
			<polygon fill="#000000" stroke="#000000" points="52952.1,-278 52942.1,-282.5 52947.1,-278 52942.1,-278 52942.1,-278 52942.1,-278 52947.1,-278 52942.1,-273.5 52952.1,-278 52952.1,-278"/>
			<text textAnchor="middle" x="52906" y="-281.8">Wi3818</text>
			</g>
			<g id="n330" className="node">
			<ellipse cx="53187" cy="-278" rx="27" ry="18"/>
			<text textAnchor="middle" x="53187" y="-274.3">sic </text>
			</g>
			<g id="edge1177" className="edge">
			<path d="M53068.3,-278C53095.1,-278 53126.2,-278 53149.7,-278"/>
			<polygon fill="#000000" stroke="#000000" points="53159.9,-278 53149.9,-282.5 53154.9,-278 53149.9,-278 53149.9,-278 53149.9,-278 53154.9,-278 53149.9,-273.5 53159.9,-278 53159.9,-278"/>
			<text textAnchor="middle" x="53114" y="-281.8">Wi3818</text>
			</g>
			<g id="n332" className="node">
			<ellipse cx="53344" cy="-278" rx="37.8943" ry="18"/>
			<text textAnchor="middle" x="53344" y="-274.3">dicit: </text>
			</g>
			<g id="edge650" className="edge">
			<path d="M53214.3,-278C53236.6,-278 53269,-278 53295.8,-278"/>
			<polygon fill="#000000" stroke="#000000" points="53306.1,-278 53296.1,-282.5 53301.1,-278 53296.1,-278 53296.1,-278 53296.1,-278 53301.1,-278 53296.1,-273.5 53306.1,-278 53306.1,-278"/>
			<text textAnchor="middle" x="53260" y="-281.8">Wi3818</text>
			</g>
			<g id="n334" className="node">
			<ellipse cx="53518" cy="-278" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="53518" y="-274.3">Maria, </text>
			</g>
			<g id="edge790" className="edge">
			<path d="M53381.9,-278C53405.7,-278 53437,-278 53463.5,-278"/>
			<polygon fill="#000000" stroke="#000000" points="53473.8,-278 53463.8,-282.5 53468.8,-278 53463.8,-278 53463.8,-278 53463.8,-278 53468.8,-278 53463.8,-273.5 53473.8,-278 53473.8,-278"/>
			<text textAnchor="middle" x="53428" y="-281.8">Wi3818</text>
			</g>
			<g id="n336" className="node">
			<ellipse cx="53973" cy="-278" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="53973" y="-274.3">profer </text>
			</g>
			<g id="edge1365" className="edge">
			<path d="M53562.4,-278C53646.4,-278 53830.5,-278 53920.4,-278"/>
			<polygon fill="#000000" stroke="#000000" points="53930.7,-278 53920.7,-282.5 53925.7,-278 53920.7,-278 53920.7,-278 53920.7,-278 53925.7,-278 53920.7,-273.5 53930.7,-278 53930.7,-278"/>
			<text textAnchor="middle" x="53743" y="-281.8">Wi3818</text>
			</g>
			<g id="n338" className="node">
			<ellipse cx="54167" cy="-278" rx="52.7911" ry="18"/>
			<text textAnchor="middle" x="54167" y="-274.3">uerbum, </text>
			</g>
			<g id="edge174" className="edge">
			<path d="M54015.7,-278C54041.5,-278 54075.2,-278 54104.1,-278"/>
			<polygon fill="#000000" stroke="#000000" points="54114.1,-278 54104.1,-282.5 54109.1,-278 54104.1,-278 54104.1,-278 54104.1,-278 54109.1,-278 54104.1,-273.5 54114.1,-278 54114.1,-278"/>
			<text textAnchor="middle" x="54068" y="-281.8">Wi3818</text>
			</g>
			<g id="n341" className="node">
			<ellipse cx="54360" cy="-278" rx="47.3916" ry="18"/>
			<text textAnchor="middle" x="54360" y="-274.3">scilicet </text>
			</g>
			<g id="edge1089" className="edge">
			<path d="M54219.7,-278C54245.2,-278 54276.1,-278 54302.3,-278"/>
			<polygon fill="#000000" stroke="#000000" points="54312.5,-278 54302.5,-282.5 54307.5,-278 54302.5,-278 54302.5,-278 54302.5,-278 54307.5,-278 54302.5,-273.5 54312.5,-278 54312.5,-278"/>
			<text textAnchor="middle" x="54266" y="-281.8">Wi3818</text>
			</g>
			<g id="n344" className="node">
			<ellipse cx="54537" cy="-278" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="54537" y="-274.3">Ecce </text>
			</g>
			<g id="edge377" className="edge">
			<path d="M54407.9,-278C54433.4,-278 54464.9,-278 54490.3,-278"/>
			<polygon fill="#000000" stroke="#000000" points="54500.4,-278 54490.4,-282.5 54495.4,-278 54490.4,-278 54490.4,-278 54490.4,-278 54495.4,-278 54490.4,-273.5 54500.4,-278 54500.4,-278"/>
			<text textAnchor="middle" x="54454" y="-281.8">Wi3818</text>
			</g>
			<g id="n346" className="node">
			<ellipse cx="54710" cy="-278" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="54710" y="-274.3">ancilla </text>
			</g>
			<g id="edge1102" className="edge">
			<path d="M54573.4,-278C54597.1,-278 54628.7,-278 54655.4,-278"/>
			<polygon fill="#000000" stroke="#000000" points="54665.7,-278 54655.7,-282.5 54660.7,-278 54655.7,-278 54655.7,-278 54655.7,-278 54660.7,-278 54655.7,-273.5 54665.7,-278 54665.7,-278"/>
			<text textAnchor="middle" x="54620" y="-281.8">Wi3818</text>
			</g>
			<g id="n348" className="node">
			<ellipse cx="54893" cy="-278" rx="46.5926" ry="18"/>
			<text textAnchor="middle" x="54893" y="-274.3">Domini </text>
			</g>
			<g id="edge1056" className="edge">
			<path d="M54754.4,-278C54778.8,-278 54809.7,-278 54836,-278"/>
			<polygon fill="#000000" stroke="#000000" points="54846.2,-278 54836.2,-282.5 54841.2,-278 54836.2,-278 54836.2,-278 54836.2,-278 54841.2,-278 54836.2,-273.5 54846.2,-278 54846.2,-278"/>
			<text textAnchor="middle" x="54800" y="-281.8">Wi3818</text>
			</g>
			<g id="n350" className="node">
			<ellipse cx="55059" cy="-278" rx="27" ry="18"/>
			<text textAnchor="middle" x="55059" y="-274.3">et </text>
			</g>
			<g id="edge976" className="edge">
			<path d="M54940.1,-278C54965.9,-278 54997.5,-278 55021.5,-278"/>
			<polygon fill="#000000" stroke="#000000" points="55031.6,-278 55021.6,-282.5 55026.6,-278 55021.6,-278 55021.6,-278 55021.6,-278 55026.6,-278 55021.6,-273.5 55031.6,-278 55031.6,-278"/>
			<text textAnchor="middle" x="54986" y="-281.8">Wi3818</text>
			</g>
			<g id="n352" className="node">
			<ellipse cx="55227" cy="-278" rx="48.9926" ry="18"/>
			<text textAnchor="middle" x="55227" y="-274.3">suscipe </text>
			</g>
			<g id="edge149" className="edge">
			<path d="M55086.3,-278C55108.2,-278 55140.2,-278 55168,-278"/>
			<polygon fill="#000000" stroke="#000000" points="55178.1,-278 55168.1,-282.5 55173.1,-278 55168.1,-278 55168.1,-278 55168.1,-278 55173.1,-278 55168.1,-273.5 55178.1,-278 55178.1,-278"/>
			<text textAnchor="middle" x="55132" y="-281.8">Wi3818</text>
			</g>
			<g id="n354" className="node">
			<ellipse cx="55421" cy="-278" rx="52.7911" ry="18"/>
			<text textAnchor="middle" x="55421" y="-274.3">uerbum, </text>
			</g>
			<g id="edge623" className="edge">
			<path d="M55276,-278C55300.9,-278 55331.6,-278 55358.3,-278"/>
			<polygon fill="#000000" stroke="#000000" points="55368.3,-278 55358.3,-282.5 55363.3,-278 55358.3,-278 55358.3,-278 55358.3,-278 55363.3,-278 55358.3,-273.5 55368.3,-278 55368.3,-278"/>
			<text textAnchor="middle" x="55322" y="-281.8">Wi3818</text>
			</g>
			<g id="n357" className="node">
			<ellipse cx="55593" cy="-278" rx="27" ry="18"/>
			<text textAnchor="middle" x="55593" y="-274.3">id </text>
			</g>
			<g id="edge617" className="edge">
			<path d="M55473.9,-278C55500.5,-278 55532.1,-278 55555.9,-278"/>
			<polygon fill="#000000" stroke="#000000" points="55566,-278 55556,-282.5 55561,-278 55556,-278 55556,-278 55556,-278 55561,-278 55556,-273.5 55566,-278 55566,-278"/>
			<text textAnchor="middle" x="55520" y="-281.8">Wi3818</text>
			</g>
			<g id="n359" className="node">
			<ellipse cx="55740" cy="-278" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="55740" y="-274.3">est </text>
			</g>
			<g id="edge401" className="edge">
			<path d="M55620.3,-278C55643.1,-278 55676.4,-278 55701.9,-278"/>
			<polygon fill="#000000" stroke="#000000" points="55712,-278 55702,-282.5 55707,-278 55702,-278 55702,-278 55702,-278 55707,-278 55702,-273.5 55712,-278 55712,-278"/>
			<text textAnchor="middle" x="55666" y="-281.8">Wi3818</text>
			</g>
			<g id="n362" className="node">
			<ellipse cx="55904" cy="-278" rx="43.5923" ry="18"/>
			<text textAnchor="middle" x="55904" y="-274.3">Filium </text>
			</g>
			<g id="edge939" className="edge">
			<path d="M55768.1,-278C55790.4,-278 55822.6,-278 55850,-278"/>
			<polygon fill="#000000" stroke="#000000" points="55860.2,-278 55850.2,-282.5 55855.2,-278 55850.2,-278 55850.2,-278 55850.2,-278 55855.2,-278 55850.2,-273.5 55860.2,-278 55860.2,-278"/>
			<text textAnchor="middle" x="55814" y="-281.8">Wi3818</text>
			</g>
			<g id="n364" className="node">
			<ellipse cx="56073" cy="-278" rx="32.4942" ry="18"/>
			<text textAnchor="middle" x="56073" y="-274.3">Dei. </text>
			</g>
			<g id="edge345" className="edge">
			<path d="M55947.6,-278C55973,-278 56005.1,-278 56030.3,-278"/>
			<polygon fill="#000000" stroke="#000000" points="56040.3,-278 56030.3,-282.5 56035.3,-278 56030.3,-278 56030.3,-278 56030.3,-278 56035.3,-278 56030.3,-273.5 56040.3,-278 56040.3,-278"/>
			<text textAnchor="middle" x="55994" y="-281.8">Wi3818</text>
			</g>
			<g id="n366" className="node">
			<ellipse cx="56249" cy="-278" rx="50.8918" ry="18"/>
			<text textAnchor="middle" x="56249" y="-274.3">Vlterius </text>
			</g>
			<g id="edge968" className="edge">
			<path d="M56105.5,-278C56128.5,-278 56160.5,-278 56188.3,-278"/>
			<polygon fill="#000000" stroke="#000000" points="56198.3,-278 56188.3,-282.5 56193.3,-278 56188.3,-278 56188.3,-278 56188.3,-278 56193.3,-278 56188.3,-273.5 56198.3,-278 56198.3,-278"/>
			<text textAnchor="middle" x="56152" y="-281.8">Wi3818</text>
			</g>
			<g id="n368" className="node">
			<ellipse cx="56451" cy="-278" rx="58.4896" ry="18"/>
			<text textAnchor="middle" x="56451" y="-274.3">sciendum </text>
			</g>
			<g id="edge916" className="edge">
			<path d="M56300,-278C56324.8,-278 56355.2,-278 56382.1,-278"/>
			<polygon fill="#000000" stroke="#000000" points="56392.2,-278 56382.2,-282.5 56387.2,-278 56382.2,-278 56382.2,-278 56382.2,-278 56387.2,-278 56382.2,-273.5 56392.2,-278 56392.2,-278"/>
			<text textAnchor="middle" x="56346" y="-281.8">Wi3818</text>
			</g>
			<g id="n370" className="node">
			<ellipse cx="56629" cy="-278" rx="27" ry="18"/>
			<text textAnchor="middle" x="56629" y="-274.3">de </text>
			</g>
			<g id="edge964" className="edge">
			<path d="M56509.6,-278C56536.6,-278 56567.9,-278 56591.5,-278"/>
			<polygon fill="#000000" stroke="#000000" points="56601.8,-278 56591.8,-282.5 56596.8,-278 56591.8,-278 56591.8,-278 56591.8,-278 56596.8,-278 56591.8,-273.5 56601.8,-278 56601.8,-278"/>
			<text textAnchor="middle" x="56556" y="-281.8">Wi3818</text>
			</g>
			<g id="n372" className="node">
			<ellipse cx="56779" cy="-278" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="56779" y="-274.3">hoc </text>
			</g>
			<g id="edge973" className="edge">
			<path d="M56656.1,-278C56678.8,-278 56712,-278 56738,-278"/>
			<polygon fill="#000000" stroke="#000000" points="56748.3,-278 56738.3,-282.5 56743.3,-278 56738.3,-278 56738.3,-278 56738.3,-278 56743.3,-278 56738.3,-273.5 56748.3,-278 56748.3,-278"/>
			<text textAnchor="middle" x="56702" y="-281.8">Wi3818</text>
			</g>
			<g id="n376" className="node">
			<ellipse cx="56939" cy="-278" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="56939" y="-274.3">quod </text>
			</g>
			<g id="edge1060" className="edge">
			<path d="M56809.7,-278C56832.9,-278 56865.6,-278 56892.1,-278"/>
			<polygon fill="#000000" stroke="#000000" points="56902.3,-278 56892.3,-282.5 56897.3,-278 56892.3,-278 56892.3,-278 56892.3,-278 56897.3,-278 56892.3,-273.5 56902.3,-278 56902.3,-278"/>
			<text textAnchor="middle" x="56856" y="-281.8">Wi3818</text>
			</g>
			<g id="n382" className="node">
			<ellipse cx="57103" cy="-278" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="57103" y="-274.3">dicit </text>
			</g>
			<g id="edge1" className="edge">
			<path d="M56975.6,-278C56999.9,-278 57032.3,-278 57058.2,-278"/>
			<polygon fill="#000000" stroke="#000000" points="57068.5,-278 57058.5,-282.5 57063.5,-278 57058.5,-278 57058.5,-278 57058.5,-278 57063.5,-278 57058.5,-273.5 57068.5,-278 57068.5,-278"/>
			<text textAnchor="middle" x="57022" y="-281.8">Wi3818</text>
			</g>
			<g id="n386" className="node">
			<ellipse cx="57269" cy="-278" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="57269" y="-274.3">autor </text>
			</g>
			<g id="edge1124" className="edge">
			<path d="M57137.6,-278C57161.4,-278 57193.7,-278 57220.2,-278"/>
			<polygon fill="#000000" stroke="#000000" points="57230.5,-278 57220.5,-282.5 57225.5,-278 57220.5,-278 57220.5,-278 57220.5,-278 57225.5,-278 57220.5,-273.5 57230.5,-278 57230.5,-278"/>
			<text textAnchor="middle" x="57184" y="-281.8">Wi3818</text>
			</g>
			<g id="n390" className="node">
			<ellipse cx="57433" cy="-278" rx="33.2948" ry="18"/>
			<text textAnchor="middle" x="57433" y="-274.3">mox </text>
			</g>
			<g id="edge567" className="edge">
			<path d="M57307.6,-278C57332.1,-278 57364.3,-278 57389.7,-278"/>
			<polygon fill="#000000" stroke="#000000" points="57399.8,-278 57389.8,-282.5 57394.8,-278 57389.8,-278 57389.8,-278 57389.8,-278 57394.8,-278 57389.8,-273.5 57399.8,-278 57399.8,-278"/>
			<text textAnchor="middle" x="57354" y="-281.8">Wi3818</text>
			</g>
			<g id="n394" className="node">
			<ellipse cx="57612" cy="-278" rx="53.8905" ry="18"/>
			<text textAnchor="middle" x="57612" y="-274.3">concepit </text>
			</g>
			<g id="edge1202" className="edge">
			<path d="M57466.5,-278C57489.1,-278 57520.1,-278 57547.6,-278"/>
			<polygon fill="#000000" stroke="#000000" points="57557.9,-278 57547.9,-282.5 57552.9,-278 57547.9,-278 57547.9,-278 57547.9,-278 57552.9,-278 57547.9,-273.5 57557.9,-278 57557.9,-278"/>
			<text textAnchor="middle" x="57512" y="-281.8">Wi3818</text>
			</g>
			<g id="n398" className="node">
			<ellipse cx="57795" cy="-278" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="57795" y="-274.3">quod </text>
			</g>
			<g id="edge597" className="edge">
			<path d="M57666.3,-278C57692.3,-278 57723.3,-278 57748.2,-278"/>
			<polygon fill="#000000" stroke="#000000" points="57758.5,-278 57748.5,-282.5 57753.5,-278 57748.5,-278 57748.5,-278 57748.5,-278 57753.5,-278 57748.5,-273.5 57758.5,-278 57758.5,-278"/>
			<text textAnchor="middle" x="57712" y="-281.8">Wi3818</text>
			</g>
			<g id="n403" className="node">
			<ellipse cx="57951" cy="-278" rx="27" ry="18"/>
			<text textAnchor="middle" x="57951" y="-274.3">in </text>
			</g>
			<g id="edge890" className="edge">
			<path d="M57831.7,-278C57856.3,-278 57888.8,-278 57913.5,-278"/>
			<polygon fill="#000000" stroke="#000000" points="57923.6,-278 57913.6,-282.5 57918.6,-278 57913.6,-278 57913.6,-278 57913.6,-278 57918.6,-278 57913.6,-273.5 57923.6,-278 57923.6,-278"/>
			<text textAnchor="middle" x="57878" y="-281.8">Wi3818</text>
			</g>
			<g id="n406" className="node">
			<ellipse cx="58101" cy="-278" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="58101" y="-274.3">uno </text>
			</g>
			<g id="edge234" className="edge">
			<path d="M57978.1,-278C58000.8,-278 58034,-278 58060,-278"/>
			<polygon fill="#000000" stroke="#000000" points="58070.3,-278 58060.3,-282.5 58065.3,-278 58060.3,-278 58060.3,-278 58060.3,-278 58065.3,-278 58060.3,-273.5 58070.3,-278 58070.3,-278"/>
			<text textAnchor="middle" x="58024" y="-281.8">Wi3818</text>
			</g>
			<g id="n409" className="node">
			<ellipse cx="58251" cy="-278" rx="27" ry="18"/>
			<text textAnchor="middle" x="58251" y="-274.3">et </text>
			</g>
			<g id="edge28" className="edge">
			<path d="M58131.6,-278C58155.2,-278 58188.4,-278 58213.6,-278"/>
			<polygon fill="#000000" stroke="#000000" points="58223.9,-278 58213.9,-282.5 58218.9,-278 58213.9,-278 58213.9,-278 58213.9,-278 58218.9,-278 58213.9,-273.5 58223.9,-278 58223.9,-278"/>
			<text textAnchor="middle" x="58178" y="-281.8">Wi3818</text>
			</g>
			<g id="n412" className="node">
			<ellipse cx="58414" cy="-278" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="58414" y="-274.3">eodem </text>
			</g>
			<g id="edge1261" className="edge">
			<path d="M58278.2,-278C58300.2,-278 58332.2,-278 58359.6,-278"/>
			<polygon fill="#000000" stroke="#000000" points="58369.8,-278 58359.8,-282.5 58364.8,-278 58359.8,-278 58359.8,-278 58359.8,-278 58364.8,-278 58359.8,-273.5 58369.8,-278 58369.8,-278"/>
			<text textAnchor="middle" x="58324" y="-281.8">Wi3818</text>
			</g>
			<g id="n415" className="node">
			<ellipse cx="58602" cy="-278" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="58602" y="-274.3">instanti, </text>
			</g>
			<g id="edge140" className="edge">
			<path d="M58458.6,-278C58482.7,-278 58513,-278 58539.4,-278"/>
			<polygon fill="#000000" stroke="#000000" points="58549.7,-278 58539.7,-282.5 58544.7,-278 58539.7,-278 58539.7,-278 58539.7,-278 58544.7,-278 58539.7,-273.5 58549.7,-278 58549.7,-278"/>
			<text textAnchor="middle" x="58504" y="-281.8">Wi3818</text>
			</g>
			<g id="n418" className="node">
			<ellipse cx="58773" cy="-278" rx="27" ry="18"/>
			<text textAnchor="middle" x="58773" y="-274.3">ut </text>
			</g>
			<g id="edge814" className="edge">
			<path d="M58654.2,-278C58680.6,-278 58712.1,-278 58736,-278"/>
			<polygon fill="#000000" stroke="#000000" points="58746,-278 58736,-282.5 58741,-278 58736,-278 58736,-278 58736,-278 58741,-278 58736,-273.5 58746,-278 58746,-278"/>
			<text textAnchor="middle" x="58700" y="-281.8">Wi3818</text>
			</g>
			<g id="n420" className="node">
			<ellipse cx="58930" cy="-278" rx="37.8943" ry="18"/>
			<text textAnchor="middle" x="58930" y="-274.3">prius </text>
			</g>
			<g id="edge343" className="edge">
			<path d="M58800.3,-278C58822.6,-278 58855,-278 58881.8,-278"/>
			<polygon fill="#000000" stroke="#000000" points="58892.1,-278 58882.1,-282.5 58887.1,-278 58882.1,-278 58882.1,-278 58882.1,-278 58887.1,-278 58882.1,-273.5 58892.1,-278 58892.1,-278"/>
			<text textAnchor="middle" x="58846" y="-281.8">Wi3818</text>
			</g>
			<g id="n423" className="node">
			<ellipse cx="59106" cy="-278" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="59106" y="-274.3">dictum </text>
			</g>
			<g id="edge56" className="edge">
			<path d="M58967.9,-278C58991.6,-278 59022.8,-278 59049.5,-278"/>
			<polygon fill="#000000" stroke="#000000" points="59059.8,-278 59049.8,-282.5 59054.8,-278 59049.8,-278 59049.8,-278 59049.8,-278 59054.8,-278 59049.8,-273.5 59059.8,-278 59059.8,-278"/>
			<text textAnchor="middle" x="59014" y="-281.8">Wi3818</text>
			</g>
			<g id="n425" className="node">
			<ellipse cx="59275" cy="-278" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="59275" y="-274.3">est, </text>
			</g>
			<g id="edge351" className="edge">
			<path d="M59152.2,-278C59177.8,-278 59209.6,-278 59234.2,-278"/>
			<polygon fill="#000000" stroke="#000000" points="59244.3,-278 59234.3,-282.5 59239.3,-278 59234.3,-278 59234.3,-278 59234.3,-278 59239.3,-278 59234.3,-273.5 59244.3,-278 59244.3,-278"/>
			<text textAnchor="middle" x="59198" y="-281.8">Wi3818</text>
			</g>
			<g id="edge64" className="edge">
			<path d="M59305.9,-278C59328.2,-278 59359.5,-278 59387.8,-278"/>
			<polygon fill="#000000" stroke="#000000" points="59398.1,-278 59388.1,-282.5 59393.1,-278 59388.1,-278 59388.1,-278 59388.1,-278 59393.1,-278 59388.1,-273.5 59398.1,-278 59398.1,-278"/>
			<text textAnchor="middle" x="59352" y="-281.8">Wi3818</text>
			</g>
			<g id="n266" className="node">
			<ellipse cx="59658" cy="-285" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="59658" y="-281.3">Maria </text>
			</g>
			<g id="edge865" className="edge majority">
			<path strokeWidth="3" d="M59517.6,-280.072C59545.8,-281.069 59579.3,-282.253 59606.4,-283.211"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="59616.4,-283.566 59606.3,-287.71 59611.4,-284.389 59606.4,-284.212 59606.4,-283.212 59606.5,-282.213 59611.5,-282.39 59606.6,-278.715 59616.4,-283.566 59616.4,-283.566"/>
			<text textAnchor="middle" x="59567" y="-285.8">majority</text>
			</g>
			<g id="n272" className="node">
			<ellipse cx="60079" cy="-308" rx="42.7926" ry="18"/>
			<text textAnchor="middle" x="60079" y="-304.3">uerbis </text>
			</g>
			<g id="edge1199" className="edge">
			<path d="M59511.2,-269.67C59541.6,-265.227 59580.9,-260.227 59616,-258 59794.3,-246.688 59857,-181.573 60018,-259 60029.4,-264.475 60026.6,-272.592 60036,-281 60038.6,-283.32 60041.4,-285.578 60044.3,-287.735"/>
			<polygon fill="#000000" stroke="#000000" points="60052.6,-293.519 60041.9,-291.5 60048.5,-290.663 60044.4,-287.806 60044.4,-287.806 60044.4,-287.806 60048.5,-290.663 60047,-284.113 60052.6,-293.519 60052.6,-293.519"/>
			<text textAnchor="middle" x="59749" y="-247.8">Kr185</text>
			</g>
			<g id="n268" className="node">
			<ellipse cx="59864" cy="-285" rx="65.7887" ry="18"/>
			<text textAnchor="middle" x="59864" y="-281.3">consensum </text>
			</g>
			<g id="edge1057" className="edge majority">
			<path strokeWidth="2.8" d="M59699.8,-285C59725,-285 59758,-285 59787.8,-285"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="59798.2,-285 59788.2,-289.5 59793.2,-285.9 59788.2,-285.9 59788.2,-285 59788.2,-284.1 59793.2,-284.1 59788.2,-280.5 59798.2,-285 59798.2,-285"/>
			<text textAnchor="middle" x="59749" y="-288.8">majority</text>
			</g>
			<g id="n269" className="node">
			<ellipse cx="59864" cy="-342" rx="57.3905" ry="18"/>
			<text textAnchor="middle" x="59864" y="-338.3">consensu </text>
			</g>
			<g id="edge71" className="edge">
			<path d="M59691.4,-295.776C59700,-298.552 59709.3,-301.468 59718,-304 59747.8,-312.7 59781.3,-321.547 59808.6,-328.513"/>
			<polygon fill="#000000" stroke="#000000" points="59818.4,-330.991 59807.6,-332.891 59813.6,-329.76 59808.7,-328.53 59808.7,-328.53 59808.7,-328.53 59813.6,-329.76 59809.8,-324.168 59818.4,-330.991 59818.4,-330.991"/>
			<text textAnchor="middle" x="59749" y="-323.8">Sg524</text>
			</g>
			<g id="edge1315" className="edge majority">
			<path strokeWidth="2.6" d="M59925.5,-291.529C59957.6,-295.002 59996.7,-299.222 60027.3,-302.522"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="60037.3,-303.603 60026.9,-307.004 60032.2,-303.862 60027.3,-303.325 60027.3,-302.53 60027.4,-301.734 60032.4,-302.271 60027.8,-298.056 60037.3,-303.603 60037.3,-303.603"/>
			<text textAnchor="middle" x="59983" y="-304.8">majority</text>
			</g>
			<g id="n271" className="node">
			<ellipse cx="60079" cy="-254" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="60079" y="-250.3">uerbi </text>
			</g>
			<g id="edge731" className="edge">
			<path d="M59922.4,-276.652C59956.8,-271.635 60000.1,-265.339 60032.2,-260.659"/>
			<polygon fill="#000000" stroke="#000000" points="60042.3,-259.199 60033,-265.093 60037.3,-259.92 60032.4,-260.64 60032.4,-260.64 60032.4,-260.64 60037.3,-259.92 60031.7,-256.187 60042.3,-259.199 60042.3,-259.199"/>
			<text textAnchor="middle" x="59983" y="-275.8">Mü22405</text>
			</g>
			<g id="edge630" className="edge">
			<path d="M59917.2,-335.218C59946.8,-331.186 59984.5,-325.747 60018,-320 60022,-319.321 60026,-318.582 60030.1,-317.815"/>
			<polygon fill="#000000" stroke="#000000" points="60040.3,-315.868 60031.3,-322.172 60035.4,-316.81 60030.5,-317.752 60030.5,-317.752 60030.5,-317.752 60035.4,-316.81 60029.6,-313.333 60040.3,-315.868 60040.3,-315.868"/>
			<text textAnchor="middle" x="59983" y="-333.8">Sg524</text>
			</g>
			<g id="n276" className="node">
			<ellipse cx="60275" cy="-308" rx="46.5926" ry="18"/>
			<text textAnchor="middle" x="60275" y="-304.3">angelis </text>
			</g>
			<g id="edge559" className="edge">
			<path d="M60122.1,-308C60150.1,-308 60187.3,-308 60217.8,-308"/>
			<polygon fill="#000000" stroke="#000000" points="60227.9,-308 60217.9,-312.5 60222.9,-308 60217.9,-308 60217.9,-308 60217.9,-308 60222.9,-308 60217.9,-303.5 60227.9,-308 60227.9,-308"/>
			<text textAnchor="middle" x="60175" y="-311.8">Kf133</text>
			</g>
			<g id="n440" className="node">
			<ellipse cx="60275" cy="-362" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="60275" y="-358.3">angeli </text>
			</g>
			<g id="edge1312" className="edge majority">
			<path strokeWidth="2.8" d="M60113.2,-318.857C60121.9,-321.603 60131.3,-324.484 60140,-327 60169.2,-335.42 60202.1,-344.047 60228.1,-350.629"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="60238,-353.137 60227.2,-355.053 60233,-352.786 60228.1,-351.562 60228.3,-350.69 60228.6,-349.817 60233.4,-351.041 60229.4,-346.326 60238,-353.137 60238,-353.137"/>
			<text textAnchor="middle" x="60175" y="-348.8">majority</text>
			</g>
			<g id="n274" className="node">
			<ellipse cx="60275" cy="-254" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="60275" y="-250.3">angelo </text>
			</g>
			<g id="edge261" className="edge">
			<path d="M60117.4,-254C60146.6,-254 60187.6,-254 60220.3,-254"/>
			<polygon fill="#000000" stroke="#000000" points="60230.6,-254 60220.6,-258.5 60225.6,-254 60220.6,-254 60220.6,-254 60220.6,-254 60225.6,-254 60220.6,-249.5 60230.6,-254 60230.6,-254"/>
			<text textAnchor="middle" x="60175" y="-257.8">Mü22405</text>
			</g>
			<g id="n278" className="node">
			<ellipse cx="60483" cy="-254" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="60483" y="-250.3">adhibuit </text>
			</g>
			<g id="edge334" className="edge">
			<path d="M60319.4,-254C60348.8,-254 60388.1,-254 60420.7,-254"/>
			<polygon fill="#000000" stroke="#000000" points="60431,-254 60421,-258.5 60426,-254 60421,-254 60421,-254 60421,-254 60426,-254 60421,-249.5 60431,-254 60431,-254"/>
			<text textAnchor="middle" x="60375" y="-257.8">Mü22405</text>
			</g>
			<g id="n279" className="node">
			<ellipse cx="60483" cy="-308" rx="54.6905" ry="18"/>
			<text textAnchor="middle" x="60483" y="-304.3">adhybuit </text>
			</g>
			<g id="edge496" className="edge">
			<path d="M60322,-308C60350.2,-308 60386.8,-308 60417.8,-308"/>
			<polygon fill="#000000" stroke="#000000" points="60428.1,-308 60418.1,-312.5 60423.1,-308 60418.1,-308 60418.1,-308 60418.1,-308 60423.1,-308 60418.1,-303.5 60428.1,-308 60428.1,-308"/>
			<text textAnchor="middle" x="60375" y="-311.8">Kf133</text>
			</g>
			<g id="edge600" className="edge majority">
			<path strokeWidth="2.6" d="M60312.3,-353.435C60349.4,-344.406 60402.6,-330.597 60410,-324 60425.5,-310.256 60413.9,-296.134 60428,-281 60430.9,-277.856 60434.3,-275.026 60437.9,-272.49"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="60446.7,-267.097 60440.5,-276.178 60442.8,-270.404 60438.6,-273.029 60438.2,-272.348 60437.7,-271.667 60442,-269.042 60435.8,-268.518 60446.7,-267.097 60446.7,-267.097"/>
			<text textAnchor="middle" x="60375" y="-348.8">majority</text>
			</g>
			<g id="n468" className="node">
			<ellipse cx="82374" cy="-400" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="82374" y="-396.3">adhibuit </text>
			</g>
			<g id="edge242" className="edge">
			<path d="M60316.2,-366.353C60357.7,-370.463 60424.3,-376 60482,-376 60482,-376 60482,-376 69946,-376 70251.7,-376 70323.3,-457 70629,-457 70629,-457 70629,-457 81886,-457 82072.4,-457 82121.1,-458.324 82304,-422 82311.8,-420.45 82320,-418.322 82327.8,-415.996"/>
			<polygon fill="#000000" stroke="#000000" points="82337.6,-412.973 82329.4,-420.231 82332.8,-414.453 82328,-415.933 82328,-415.933 82328,-415.933 82332.8,-414.453 82326.7,-411.634 82337.6,-412.973 82337.6,-412.973"/>
			<text textAnchor="middle" x="70026" y="-382.8">Wi3818</text>
			</g>
			<g id="n281" className="node">
			<ellipse cx="60683" cy="-264" rx="46.5926" ry="18"/>
			<text textAnchor="middle" x="60683" y="-260.3">dicens: </text>
			</g>
			<g id="edge620" className="edge">
			<path d="M60529.3,-298.393C60555.3,-292.835 60588.5,-285.646 60618,-279 60622.8,-277.927 60627.7,-276.795 60632.7,-275.652"/>
			<polygon fill="#000000" stroke="#000000" points="60642.8,-273.308 60634,-279.953 60637.9,-274.439 60633,-275.569 60633,-275.569 60633,-275.569 60637.9,-274.439 60632,-271.186 60642.8,-273.308 60642.8,-273.308"/>
			<text textAnchor="middle" x="60587" y="-294.8">Kf133</text>
			</g>
			<g id="edge1237" className="edge majority">
			<path strokeWidth="2.8" d="M60534.5,-256.549C60562.4,-257.961 60597.3,-259.72 60626,-261.174"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="60636.4,-261.695 60626.1,-265.684 60631.3,-262.341 60626.3,-262.089 60626.4,-261.19 60626.4,-260.291 60631.4,-260.544 60626.6,-256.696 60636.4,-261.695 60636.4,-261.695"/>
			<text textAnchor="middle" x="60587" y="-263.8">majority</text>
			</g>
			<g id="n283" className="node">
			<ellipse cx="60865" cy="-264" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="60865" y="-260.3">Ecce </text>
			</g>
			<g id="edge320" className="edge majority">
			<path strokeWidth="3" d="M60729.9,-264C60757,-264 60791.3,-264 60818.4,-264"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="60828.4,-264 60818.4,-268.5 60823.4,-265 60818.4,-265 60818.4,-264 60818.4,-263 60823.4,-263 60818.4,-259.5 60828.4,-264 60828.4,-264"/>
			<text textAnchor="middle" x="60779" y="-267.8">majority</text>
			</g>
			<g id="n285" className="node">
			<ellipse cx="61044" cy="-264" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="61044" y="-260.3">ancilla </text>
			</g>
			<g id="edge1240" className="edge majority">
			<path strokeWidth="3" d="M60901.8,-264C60927,-264 60961.2,-264 60989.6,-264"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="60999.7,-264 60989.7,-268.5 60994.7,-265 60989.7,-265 60989.7,-264 60989.7,-263 60994.7,-263 60989.7,-259.5 60999.7,-264 60999.7,-264"/>
			<text textAnchor="middle" x="60951" y="-267.8">majority</text>
			</g>
			<g id="n287" className="node">
			<ellipse cx="61236" cy="-264" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="61236" y="-260.3">Domini. </text>
			</g>
			<g id="edge1148" className="edge majority">
			<path strokeWidth="3" d="M61088.6,-264C61114.4,-264 61147.6,-264 61175.8,-264"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="61185.9,-264 61175.9,-268.5 61180.9,-265 61175.9,-265 61175.9,-264 61175.9,-263 61180.9,-263 61175.9,-259.5 61185.9,-264 61185.9,-264"/>
			<text textAnchor="middle" x="61137" y="-267.8">majority</text>
			</g>
			<g id="n289" className="node">
			<ellipse cx="61417" cy="-187" rx="32.4942" ry="18"/>
			<text textAnchor="middle" x="61417" y="-183.3">Fiat </text>
			</g>
			<g id="edge73" className="edge majority">
			<path strokeWidth="2.4" d="M61268.7,-250.257C61279.8,-245.425 61292.5,-239.964 61304,-235 61329.9,-223.847 61359.2,-211.297 61381.3,-201.827"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="61390.6,-197.84 61383.2,-205.911 61386.3,-200.45 61381.7,-202.417 61381.4,-201.773 61381.2,-201.13 61385.8,-199.163 61379.7,-197.636 61390.6,-197.84 61390.6,-197.84"/>
			<text textAnchor="middle" x="61335" y="-238.8">majority</text>
			</g>
			<g id="n295" className="node">
			<ellipse cx="62482" cy="-180" rx="27" ry="18"/>
			<text textAnchor="middle" x="62482" y="-176.3">et </text>
			</g>
			<g id="edge1194" className="edge">
			<path strokeWidth="1.2" d="M61286.4,-264C61322.3,-264 61372.2,-264 61416,-264 61416,-264 61416,-264 62201,-264 62295.9,-264 62335.5,-303.335 62414,-250 62429.5,-239.494 62419.7,-226.083 62432,-212 62437.4,-205.863 62444.2,-200.432 62451,-195.866"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="62459.5,-190.558 62453.4,-199.658 62455.3,-193.282 62451.1,-195.92 62451,-195.835 62451,-195.75 62455.2,-193.112 62448.7,-192.013 62459.5,-190.558 62459.5,-190.558"/>
			<text textAnchor="middle" x="61877" y="-267.8">Er16, Kr185</text>
			</g>
			<g id="n303" className="node">
			<ellipse cx="63382" cy="-207" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="63382" y="-203.3">Statim </text>
			</g>
			<g id="edge1303" className="edge">
			<path d="M61270.7,-277.135C61306.3,-289.781 61364.2,-307 61416,-307 61416,-307 61416,-307 63049,-307 63160.7,-307 63284.9,-254.453 63344.8,-225.541"/>
			<polygon fill="#000000" stroke="#000000" points="63353.9,-221.115 63346.8,-229.552 63349.4,-223.312 63344.9,-225.509 63344.9,-225.509 63344.9,-225.509 63349.4,-223.312 63342.9,-221.467 63353.9,-221.115 63353.9,-221.115"/>
			<text textAnchor="middle" x="62365" y="-310.8">Mü22405</text>
			</g>
			<g id="n291" className="node">
			<ellipse cx="61877" cy="-187" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="61877" y="-183.3">mihi </text>
			</g>
			<g id="edge166" className="edge">
			<path strokeWidth="2" d="M61449.8,-187C61530.1,-187 61740.9,-187 61832.5,-187"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="61842.5,-187 61832.5,-191.5 61837.5,-187.5 61832.5,-187.5 61832.5,-187 61832.5,-186.5 61837.5,-186.5 61832.5,-182.5 61842.5,-187 61842.5,-187"/>
			<text textAnchor="middle" x="61641" y="-190.8">Ba96, Gr314, Kf133, Mü11475, MüU151, Sg524</text>
			</g>
			<g id="edge1282" className="edge">
			<path strokeWidth="1.2" d="M61449.2,-184.425C61455.4,-183.933 61461.9,-183.436 61468,-183 61741.4,-163.377 61810,-146.775 62084,-153 62230.8,-156.334 62268.1,-151.689 62414,-168 62424.5,-169.172 62435.8,-170.985 62446.1,-172.85"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="62456,-174.71 62445.3,-177.283 62451,-173.884 62446.1,-172.959 62446.2,-172.861 62446.2,-172.763 62451.1,-173.687 62447,-168.439 62456,-174.71 62456,-174.71"/>
			<text textAnchor="middle" x="62012" y="-156.8">Kr299, Mü28315</text>
			</g>
			<g id="n293" className="node">
			<ellipse cx="62200" cy="-214" rx="61.99" ry="18"/>
			<text textAnchor="middle" x="62200" y="-210.3">secundum </text>
			</g>
			<g id="edge1031" className="edge">
			<path strokeWidth="1.4" d="M61911.1,-189.788C61962.6,-194.113 62062.7,-202.533 62130.2,-208.212"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="62140.3,-209.064 62130,-212.71 62135.3,-208.845 62130.3,-208.425 62130.4,-208.226 62130.4,-208.027 62135.4,-208.446 62130.7,-203.742 62140.3,-209.064 62140.3,-209.064"/>
			<text textAnchor="middle" x="62012" y="-206.8">Ba96, Gr314, Kf133</text>
			</g>
			<g id="edge505" className="edge">
			<path strokeWidth="1.4" d="M61911.4,-184.067C61955.1,-180.382 62034.2,-174.267 62102,-172 62189.1,-169.088 62210.9,-170.097 62298,-172 62348.9,-173.113 62407.8,-175.965 62444.7,-177.945"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="62454.9,-178.503 62444.7,-182.453 62449.9,-178.431 62445,-178.159 62445,-177.96 62445,-177.76 62450,-178.031 62445.2,-173.466 62454.9,-178.503 62454.9,-178.503"/>
			<text textAnchor="middle" x="62200" y="-175.8">Mü11475, MüU151, Sg524</text>
			</g>
			<g id="edge919" className="edge">
			<path d="M62257.3,-207.16C62313.3,-200.364 62397.5,-190.145 62445,-184.374"/>
			<polygon fill="#000000" stroke="#000000" points="62455.1,-183.144 62445.7,-188.817 62450.1,-183.747 62445.2,-184.35 62445.2,-184.35 62445.2,-184.35 62450.1,-183.747 62444.6,-179.883 62455.1,-183.144 62455.1,-183.144"/>
			<text textAnchor="middle" x="62365" y="-202.8">Ba96</text>
			</g>
			<g id="n296" className="node">
			<ellipse cx="62482" cy="-239" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="62482" y="-235.3">uerbum </text>
			</g>
			<g id="edge1310" className="edge">
			<path strokeWidth="1.2" d="M62259.4,-219.21C62307.3,-223.49 62374.8,-229.522 62422.7,-233.799"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="62433,-234.711 62422.6,-238.303 62428,-234.365 62423,-233.921 62423,-233.821 62423,-233.721 62428,-234.166 62423.4,-229.339 62433,-234.711 62433,-234.711"/>
			<text textAnchor="middle" x="62365" y="-235.8">Gr314, Kf133</text>
			</g>
			<g id="n298" className="node">
			<ellipse cx="62712" cy="-180" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="62712" y="-176.3">cetera. </text>
			</g>
			<g id="edge611" className="edge majority">
			<path strokeWidth="2.4" d="M62509.2,-180C62544.6,-180 62608.8,-180 62655.3,-180"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="62665.5,-180 62655.5,-184.5 62660.5,-180.7 62655.5,-180.7 62655.5,-180 62655.5,-179.3 62660.5,-179.3 62655.5,-175.5 62665.5,-180 62665.5,-180"/>
			<text textAnchor="middle" x="62599" y="-183.8">majority</text>
			</g>
			<g id="n299" className="node">
			<ellipse cx="62712" cy="-244" rx="40.8928" ry="18"/>
			<text textAnchor="middle" x="62712" y="-240.3">tuum. </text>
			</g>
			<g id="edge107" className="edge">
			<path strokeWidth="1.2" d="M62532.2,-240.079C62570.1,-240.911 62622.4,-242.057 62660.6,-242.895"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="62671,-243.123 62660.9,-247.402 62666,-243.113 62661,-243.004 62661,-242.904 62661,-242.804 62666,-242.913 62661.1,-238.405 62671,-243.123 62671,-243.123"/>
			<text textAnchor="middle" x="62599" y="-245.8">Gr314, Kf133</text>
			</g>
			<g id="edge455" className="edge">
			<path strokeWidth="1.2" d="M62752.9,-242.684C62842.7,-239.654 63067.8,-231.693 63256,-222 63284.5,-220.534 63291.7,-221.424 63320,-218 63323.9,-217.526 63328,-216.963 63332,-216.345"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="63342.1,-214.718 63332.9,-220.76 63337.1,-215.617 63332.2,-216.417 63332.2,-216.318 63332.2,-216.219 63337.1,-215.419 63331.5,-211.876 63342.1,-214.718 63342.1,-214.718"/>
			<text textAnchor="middle" x="63048" y="-242.8">Gr314, Kf133</text>
			</g>
			<g id="n301" className="node">
			<ellipse cx="63048" cy="-144" rx="27" ry="18"/>
			<text textAnchor="middle" x="63048" y="-140.3">Et </text>
			</g>
			<g id="edge178" className="edge">
			<path d="M62753.9,-172.359C62761.3,-171.131 62768.8,-169.953 62776,-169 62859.7,-157.852 62958.6,-150.087 63010.7,-146.413"/>
			<polygon fill="#000000" stroke="#000000" points="63020.8,-145.712 63011.1,-150.895 63015.8,-146.059 63010.8,-146.406 63010.8,-146.406 63010.8,-146.406 63015.8,-146.059 63010.5,-141.917 63020.8,-145.712 63020.8,-145.712"/>
			<text textAnchor="middle" x="62799" y="-172.8">Kr299</text>
			</g>
			<g id="edge1075" className="edge">
			<path strokeWidth="2.2" d="M62757.7,-182.981C62763.9,-183.349 62770.1,-183.7 62776,-184 62979.7,-194.337 63222.2,-202.217 63327.6,-205.427"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="63337.7,-205.732 63327.6,-209.927 63332.7,-206.18 63327.7,-206.029 63327.7,-205.429 63327.7,-204.829 63332.7,-204.981 63327.8,-200.931 63337.7,-205.732 63337.7,-205.732"/>
			<text textAnchor="middle" x="63048" y="-206.8">Ba96, Er16, Kr185, Mü11475, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="edge886" className="edge">
			<path d="M63075.2,-142.482C63124.6,-140.473 63234,-140.071 63320,-169 63331.2,-172.777 63342.5,-178.979 63352.3,-185.288"/>
			<polygon fill="#000000" stroke="#000000" points="63360.8,-191.045 63350,-189.156 63356.6,-188.238 63352.5,-185.432 63352.5,-185.432 63352.5,-185.432 63356.6,-188.238 63355,-181.708 63360.8,-191.045 63360.8,-191.045"/>
			<text textAnchor="middle" x="63297" y="-172.8">Kr299</text>
			</g>
			<g id="n305" className="node">
			<ellipse cx="63551" cy="-240" rx="27" ry="18"/>
			<text textAnchor="middle" x="63551" y="-236.3">in </text>
			</g>
			<g id="edge421" className="edge majority">
			<path strokeWidth="2.8" d="M63422.2,-214.737C63450.2,-220.278 63487.6,-227.676 63514.7,-233.033"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="63524.6,-234.978 63513.9,-237.454 63519.5,-234.892 63514.6,-233.922 63514.8,-233.039 63514.9,-232.156 63519.9,-233.126 63515.6,-228.625 63524.6,-234.978 63524.6,-234.978"/>
			<text textAnchor="middle" x="63475" y="-234.8">majority</text>
			</g>
			<g id="n310" className="node">
			<ellipse cx="63866" cy="-240" rx="29.795" ry="18"/>
			<text textAnchor="middle" x="63866" y="-236.3">fuit </text>
			</g>
			<g id="edge200" className="edge">
			<path d="M63426.1,-205.068C63493,-202.661 63626.1,-200.277 63738,-213 63768.9,-216.513 63803.4,-224.084 63828.6,-230.317"/>
			<polygon fill="#000000" stroke="#000000" points="63838.5,-232.803 63827.7,-234.723 63833.6,-231.581 63828.8,-230.359 63828.8,-230.359 63828.8,-230.359 63833.6,-231.581 63829.9,-225.996 63838.5,-232.803 63838.5,-232.803"/>
			<text textAnchor="middle" x="63631" y="-209.8">Mü22405</text>
			</g>
			<g id="n307" className="node">
			<ellipse cx="63711" cy="-240" rx="27" ry="18"/>
			<text textAnchor="middle" x="63711" y="-236.3">eo </text>
			</g>
			<g id="edge1067" className="edge">
			<path d="M63578.1,-240C63604.2,-240 63644.5,-240 63673.7,-240"/>
			<polygon fill="#000000" stroke="#000000" points="63683.9,-240 63673.9,-244.5 63678.9,-240 63673.9,-240 63673.9,-240 63673.9,-240 63678.9,-240 63673.9,-235.5 63683.9,-240 63683.9,-240"/>
			<text textAnchor="middle" x="63631" y="-243.8">Ba96</text>
			</g>
			<g id="n308" className="node">
			<ellipse cx="63711" cy="-294" rx="27" ry="18"/>
			<text textAnchor="middle" x="63711" y="-290.3">ea </text>
			</g>
			<g id="edge1223" className="edge majority">
			<path strokeWidth="2.6" d="M63573.7,-249.95C63580.8,-253.018 63588.7,-256.298 63596,-259 63622.5,-268.738 63653,-278.018 63675.8,-284.572"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="63685.7,-287.384 63674.9,-288.98 63680.7,-286.787 63675.9,-285.42 63676.1,-284.651 63676.3,-283.881 63681.1,-285.248 63677.3,-280.322 63685.7,-287.384 63685.7,-287.384"/>
			<text textAnchor="middle" x="63631" y="-283.8">majority</text>
			</g>
			<g id="edge1222" className="edge">
			<path d="M63738.3,-240C63762.4,-240 63798.4,-240 63825.8,-240"/>
			<polygon fill="#000000" stroke="#000000" points="63835.9,-240 63825.9,-244.5 63830.9,-240 63825.9,-240 63825.9,-240 63825.9,-240 63830.9,-240 63825.9,-235.5 63835.9,-240 63835.9,-240"/>
			<text textAnchor="middle" x="63787" y="-243.8">Ba96</text>
			</g>
			<g id="edge206" className="edge majority">
			<path strokeWidth="2.6" d="M63735.7,-286.653C63757.3,-279.855 63790,-269.277 63818,-259 63822.3,-257.423 63826.8,-255.702 63831.2,-253.961"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="63840.7,-250.166 63833.1,-258.055 63836.4,-252.764 63831.7,-254.619 63831.4,-253.876 63831.1,-253.133 63835.8,-251.278 63829.8,-249.697 63840.7,-250.166 63840.7,-250.166"/>
			<text textAnchor="middle" x="63787" y="-282.8">majority</text>
			</g>
			<g id="n312" className="node">
			<ellipse cx="64052" cy="-240" rx="57.6901" ry="18"/>
			<text textAnchor="middle" x="64052" y="-236.3">perfectus </text>
			</g>
			<g id="edge988" className="edge majority">
			<path strokeWidth="3" d="M63896.2,-240C63919.6,-240 63953.6,-240 63983.7,-240"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="63993.8,-240 63983.8,-244.5 63988.8,-241 63983.8,-241 63983.8,-240 63983.8,-239 63988.8,-239 63983.8,-235.5 63993.8,-240 63993.8,-240"/>
			<text textAnchor="middle" x="63945" y="-243.8">majority</text>
			</g>
			<g id="n314" className="node">
			<ellipse cx="64245" cy="-240" rx="37.0935" ry="18"/>
			<text textAnchor="middle" x="64245" y="-236.3">Deus </text>
			</g>
			<g id="edge1157" className="edge majority">
			<path strokeWidth="3" d="M64110,-240C64138,-240 64171.2,-240 64197.6,-240"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="64207.7,-240 64197.7,-244.5 64202.7,-241 64197.7,-241 64197.7,-240 64197.7,-239 64202.7,-239 64197.7,-235.5 64207.7,-240 64207.7,-240"/>
			<text textAnchor="middle" x="64159" y="-243.8">majority</text>
			</g>
			<g id="n316" className="node">
			<ellipse cx="64407" cy="-240" rx="27" ry="18"/>
			<text textAnchor="middle" x="64407" y="-236.3">et </text>
			</g>
			<g id="edge319" className="edge majority">
			<path strokeWidth="3" d="M64282.3,-240C64308.4,-240 64343.4,-240 64369.6,-240"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="64379.8,-240 64369.8,-244.5 64374.8,-241 64369.8,-241 64369.8,-240 64369.8,-239 64374.8,-239 64369.8,-235.5 64379.8,-240 64379.8,-240"/>
			<text textAnchor="middle" x="64331" y="-243.8">majority</text>
			</g>
			<g id="n318" className="node">
			<ellipse cx="64574" cy="-240" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="64574" y="-236.3">homo, </text>
			</g>
			<g id="edge677" className="edge majority">
			<path strokeWidth="3" d="M64434.1,-240C64457.5,-240 64492.3,-240 64521.2,-240"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="64531.5,-240 64521.5,-244.5 64526.5,-241 64521.5,-241 64521.5,-240 64521.5,-239 64526.5,-239 64521.5,-235.5 64531.5,-240 64531.5,-240"/>
			<text textAnchor="middle" x="64483" y="-243.8">majority</text>
			</g>
			<g id="n320" className="node">
			<ellipse cx="64751" cy="-240" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="64751" y="-236.3">unde </text>
			</g>
			<g id="edge773" className="edge majority">
			<path strokeWidth="3" d="M64616.5,-240C64642.9,-240 64677.2,-240 64704.4,-240"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="64714.4,-240 64704.4,-244.5 64709.4,-241 64704.4,-241 64704.4,-240 64704.4,-239 64709.4,-239 64704.4,-235.5 64714.4,-240 64714.4,-240"/>
			<text textAnchor="middle" x="64665" y="-243.8">majority</text>
			</g>
			<g id="n322" className="node">
			<ellipse cx="64954" cy="-240" rx="68.4888" ry="18"/>
			<text textAnchor="middle" x="64954" y="-236.3">Bernhardus </text>
			</g>
			<g id="edge352" className="edge majority">
			<path strokeWidth="3" d="M64787.5,-240C64811.8,-240 64845,-240 64875.2,-240"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="64885.4,-240 64875.4,-244.5 64880.4,-241 64875.4,-241 64875.4,-240 64875.4,-239 64880.4,-239 64875.4,-235.5 64885.4,-240 64885.4,-240"/>
			<text textAnchor="middle" x="64837" y="-243.8">majority</text>
			</g>
			<g id="n325" className="node">
			<ellipse cx="65170" cy="-291" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="65170" y="-287.3">ipsam </text>
			</g>
			<g id="edge499" className="edge majority">
			<path strokeWidth="2.4" d="M65005.2,-251.957C65040.9,-260.478 65088.6,-271.842 65123.3,-280.111"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="65133.2,-282.464 65122.4,-284.523 65128.2,-281.986 65123.3,-280.827 65123.5,-280.146 65123.6,-279.465 65128.5,-280.624 65124.5,-275.768 65133.2,-282.464 65133.2,-282.464"/>
			<text textAnchor="middle" x="65071" y="-277.8">majority</text>
			</g>
			<g id="n324" className="node">
			<ellipse cx="65170" cy="-186" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="65170" y="-182.3">loquens </text>
			</g>
			<g id="edge487" className="edge">
			<path d="M64994.4,-225.285C65008.7,-220.312 65024.9,-215.01 65040,-211 65064,-204.612 65090.9,-199.135 65113.9,-194.95"/>
			<polygon fill="#000000" stroke="#000000" points="65123.9,-193.178 65114.8,-199.363 65119,-194.056 65114,-194.933 65114,-194.933 65114,-194.933 65119,-194.056 65113.2,-190.503 65123.9,-193.178 65123.9,-193.178"/>
			<text textAnchor="middle" x="65071" y="-214.8">Gr314</text>
			</g>
			<g id="n327" className="node">
			<ellipse cx="65376" cy="-250" rx="57.6901" ry="18"/>
			<text textAnchor="middle" x="65376" y="-246.3">alloquens </text>
			</g>
			<g id="edge279" className="edge">
			<path strokeWidth="1.2" d="M65022,-241.596C65100.4,-243.461 65229.3,-246.531 65307.7,-248.399"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="65318,-248.643 65307.9,-252.903 65313,-248.624 65308,-248.505 65308,-248.405 65308,-248.305 65313,-248.424 65308.1,-243.906 65318,-248.643 65318,-248.643"/>
			<text textAnchor="middle" x="65170" y="-249.8">Ba96, Sg524</text>
			</g>
			<g id="edge132" className="edge majority">
			<path strokeWidth="2.4" d="M65207.9,-283.575C65238.2,-277.484 65281.7,-268.75 65316.7,-261.717"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="65326.8,-259.688 65317.9,-266.071 65322,-261.36 65317.1,-262.345 65317,-261.659 65316.9,-260.973 65321.8,-259.987 65316.1,-257.247 65326.8,-259.688 65326.8,-259.688"/>
			<text textAnchor="middle" x="65269" y="-279.8">majority</text>
			</g>
			<g id="n331" className="node">
			<ellipse cx="65801" cy="-232" rx="27" ry="18"/>
			<text textAnchor="middle" x="65801" y="-228.3">sic </text>
			</g>
			<g id="edge96" className="edge">
			<path d="M65220,-185.808C65306.4,-185.949 65491.1,-188.399 65646,-205 65687.2,-209.418 65734.1,-218.175 65765.2,-224.521"/>
			<polygon fill="#000000" stroke="#000000" points="65775.1,-226.571 65764.4,-228.952 65770.2,-225.558 65765.3,-224.545 65765.3,-224.545 65765.3,-224.545 65770.2,-225.558 65766.2,-220.138 65775.1,-226.571 65775.1,-226.571"/>
			<text textAnchor="middle" x="65498" y="-199.8">Gr314</text>
			</g>
			<g id="n329" className="node">
			<ellipse cx="65604" cy="-232" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="65604" y="-228.3">ipsam </text>
			</g>
			<g id="edge383" className="edge">
			<path strokeWidth="1.2" d="M65432.3,-245.597C65469,-242.67 65516.9,-238.856 65552.6,-236.012"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="65562.8,-235.201 65553.2,-240.48 65557.8,-235.697 65552.9,-236.094 65552.8,-235.995 65552.8,-235.895 65557.8,-235.498 65552.5,-231.509 65562.8,-235.201 65562.8,-235.201"/>
			<text textAnchor="middle" x="65498" y="-246.8">Ba96, Sg524</text>
			</g>
			<g id="edge1094" className="edge majority">
			<path strokeWidth="2.4" d="M65426.5,-259.055C65435,-260.281 65443.7,-261.342 65452,-262 65586.8,-272.714 65624.7,-283.152 65756,-251 65760.5,-249.902 65765.1,-248.387 65769.6,-246.687"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="65779,-242.762 65771.5,-250.753 65774.7,-245.326 65770,-247.244 65769.8,-246.597 65769.5,-245.951 65774.1,-244.033 65768.1,-242.441 65779,-242.762 65779,-242.762"/>
			<text textAnchor="middle" x="65604" y="-275.8">majority</text>
			</g>
			<g id="edge811" className="edge">
			<path strokeWidth="1.2" d="M65645.9,-232C65680.6,-232 65730.1,-232 65763.5,-232"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="65773.8,-232 65763.8,-236.5 65768.8,-232.1 65763.8,-232.1 65763.8,-232 65763.8,-231.9 65768.8,-231.9 65763.8,-227.5 65773.8,-232 65773.8,-232"/>
			<text textAnchor="middle" x="65710" y="-235.8">Ba96, Sg524</text>
			</g>
			<g id="n333" className="node">
			<ellipse cx="65964" cy="-241" rx="37.8943" ry="18"/>
			<text textAnchor="middle" x="65964" y="-237.3">dicit: </text>
			</g>
			<g id="edge1170" className="edge majority">
			<path strokeWidth="2.8" d="M65828.2,-233.466C65852,-234.792 65887.5,-236.777 65916.1,-238.377"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="65926.3,-238.946 65916,-242.881 65921.2,-239.566 65916.2,-239.287 65916.3,-238.388 65916.3,-237.49 65921.3,-237.769 65916.5,-233.895 65926.3,-238.946 65926.3,-238.946"/>
			<text textAnchor="middle" x="65877" y="-240.8">majority</text>
			</g>
			<g id="n337" className="node">
			<ellipse cx="66318" cy="-241" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="66318" y="-237.3">Maria </text>
			</g>
			<g id="edge368" className="edge">
			<path d="M65827.1,-227.278C65852,-222.831 65891.5,-216.491 65926,-214 66049.5,-205.085 66194.9,-222.48 66268.8,-233.29"/>
			<polygon fill="#000000" stroke="#000000" points="66278.7,-234.769 66268.1,-237.747 66273.8,-234.032 66268.8,-233.296 66268.8,-233.296 66268.8,-233.296 66273.8,-234.032 66269.5,-228.845 66278.7,-234.769 66278.7,-234.769"/>
			<text textAnchor="middle" x="66055" y="-217.8">Gr314</text>
			</g>
			<g id="n335" className="node">
			<ellipse cx="66139" cy="-292" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="66139" y="-288.3">Dic </text>
			</g>
			<g id="edge863" className="edge">
			<path d="M65996.7,-250.354C66026.6,-259.164 66071.3,-272.342 66102.4,-281.506"/>
			<polygon fill="#000000" stroke="#000000" points="66112.4,-284.448 66101.5,-285.937 66107.6,-283.034 66102.8,-281.62 66102.8,-281.62 66102.8,-281.62 66107.6,-283.034 66104.1,-277.304 66112.4,-284.448 66112.4,-284.448"/>
			<text textAnchor="middle" x="66055" y="-279.8">Mü11475</text>
			</g>
			<g id="edge508" className="edge majority">
			<path strokeWidth="2.6" d="M66002,-241C66065.3,-241 66194.3,-241 66266,-241"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="66276.2,-241 66266.2,-245.5 66271.2,-241.8 66266.2,-241.8 66266.2,-241 66266.2,-240.2 66271.2,-240.2 66266.2,-236.5 66276.2,-241 66276.2,-241"/>
			<text textAnchor="middle" x="66139" y="-244.8">majority</text>
			</g>
			<g id="edge1013" className="edge">
			<path d="M66165.7,-284.584C66193.9,-276.463 66239.6,-263.298 66273.4,-253.56"/>
			<polygon fill="#000000" stroke="#000000" points="66283,-250.785 66274.7,-257.877 66278.2,-252.169 66273.4,-253.553 66273.4,-253.553 66273.4,-253.553 66278.2,-252.169 66272.2,-249.229 66283,-250.785 66283,-250.785"/>
			<text textAnchor="middle" x="66223" y="-279.8">Mü11475</text>
			</g>
			<g id="n340" className="node">
			<ellipse cx="66846" cy="-248" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="66846" y="-244.3">profer </text>
			</g>
			<g id="edge524" className="edge">
			<path strokeWidth="1.6" d="M66359.8,-241.543C66454.5,-242.803 66688.6,-245.919 66793.2,-247.31"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="66803.5,-247.447 66793.4,-251.814 66798.5,-247.681 66793.5,-247.614 66793.5,-247.314 66793.5,-247.014 66798.5,-247.081 66793.5,-242.814 66803.5,-247.447 66803.5,-247.447"/>
			<text textAnchor="middle" x="66580" y="-250.8">Ba96, Mü22405, MüU151, Sg524</text>
			</g>
			<g id="n339" className="node">
			<ellipse cx="66846" cy="-194" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="66846" y="-190.3">profert </text>
			</g>
			<g id="edge932" className="edge">
			<path strokeWidth="2.2" d="M66350.2,-229.352C66359,-226.477 66368.8,-223.729 66378,-222 66524.9,-194.409 66701.8,-192.013 66789.8,-192.85"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="66799.8,-192.963 66789.7,-197.349 66794.8,-193.506 66789.8,-193.45 66789.8,-192.85 66789.8,-192.25 66794.8,-192.306 66789.8,-188.35 66799.8,-192.963 66799.8,-192.963"/>
			<text textAnchor="middle" x="66580" y="-225.8">Er16, Gr314, Kf133, Kr185, Kr299, Mü11475, Mü28315</text>
			</g>
			<g id="n343" className="node">
			<ellipse cx="67333" cy="-233" rx="52.7911" ry="18"/>
			<text textAnchor="middle" x="67333" y="-229.3">uerbum, </text>
			</g>
			<g id="edge465" className="edge">
			<path strokeWidth="1.6" d="M66888.4,-246.721C66973.7,-244.081 67169.9,-238.014 67270.3,-234.908"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="67280.3,-234.599 67270.5,-239.406 67275.3,-235.053 67270.3,-235.208 67270.3,-234.908 67270.3,-234.608 67275.3,-234.453 67270.2,-230.41 67280.3,-234.599 67280.3,-234.599"/>
			<text textAnchor="middle" x="67086" y="-248.8">Ba96, Mü22405, MüU151, Sg524</text>
			</g>
			<g id="edge1139" className="edge">
			<path strokeWidth="2" d="M66892.4,-193.667C66969,-193.716 67128.7,-196.451 67262,-216 67268.3,-216.929 67274.9,-218.166 67281.4,-219.551"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="67291.5,-221.826 67280.8,-224.017 67286.5,-221.214 67281.7,-220.115 67281.8,-219.627 67281.9,-219.139 67286.8,-220.239 67282.8,-215.237 67291.5,-221.826 67291.5,-221.826"/>
			<text textAnchor="middle" x="67086" y="-219.8">Er16, Gr314, Kf133, Kr299, Mü11475, Mü28315</text>
			</g>
			<g id="n342" className="node">
			<ellipse cx="67333" cy="-172" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="67333" y="-168.3">uerbis, </text>
			</g>
			<g id="edge361" className="edge">
			<path d="M66878.9,-181.184C66888.7,-177.836 66899.6,-174.693 66910,-173 67040.6,-151.646 67197,-159.93 67277.8,-166.658"/>
			<polygon fill="#000000" stroke="#000000" points="67288.2,-167.551 67277.8,-171.179 67283.2,-167.124 67278.2,-166.696 67278.2,-166.696 67278.2,-166.696 67283.2,-167.124 67278.6,-162.212 67288.2,-167.551 67288.2,-167.551"/>
			<text textAnchor="middle" x="67086" y="-176.8">Kr185</text>
			</g>
			<g id="n345" className="node">
			<ellipse cx="67532" cy="-186" rx="47.3916" ry="18"/>
			<text textAnchor="middle" x="67532" y="-182.3">scilicet </text>
			</g>
			<g id="edge980" className="edge majority">
			<path strokeWidth="2.6" d="M67371.2,-220.473C67381.7,-217.153 67393.3,-213.736 67404,-211 67428.3,-204.815 67455.5,-199.275 67478.5,-194.992"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="67488.4,-193.175 67479.4,-199.405 67483.6,-194.863 67478.7,-195.765 67478.6,-194.978 67478.4,-194.192 67483.3,-193.29 67477.8,-190.552 67488.4,-193.175 67488.4,-193.175"/>
			<text textAnchor="middle" x="67435" y="-214.8">majority</text>
			</g>
			<g id="n347" className="node">
			<ellipse cx="67715" cy="-190" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="67715" y="-186.3">Ecce </text>
			</g>
			<g id="edge959" className="edge">
			<path d="M67385.6,-232.741C67450.4,-231.537 67564.5,-226.498 67660,-207 67665,-205.97 67670.3,-204.649 67675.4,-203.2"/>
			<polygon fill="#000000" stroke="#000000" points="67685.1,-200.298 67676.9,-207.474 67680.4,-201.73 67675.6,-203.163 67675.6,-203.163 67675.6,-203.163 67680.4,-201.73 67674.3,-198.852 67685.1,-200.298 67685.1,-200.298"/>
			<text textAnchor="middle" x="67532" y="-231.8">Gr314</text>
			</g>
			<g id="edge1122" className="edge">
			<path d="M67379,-170.232C67404.6,-169.755 67437.2,-170.034 67466,-173 67470.8,-173.496 67475.8,-174.182 67480.8,-174.98"/>
			<polygon fill="#000000" stroke="#000000" points="67491,-176.755 67480.3,-179.466 67486,-175.894 67481.1,-175.033 67481.1,-175.033 67481.1,-175.033 67486,-175.894 67481.9,-170.6 67491,-176.755 67491,-176.755"/>
			<text textAnchor="middle" x="67435" y="-176.8">Kr185</text>
			</g>
			<g id="edge576" className="edge majority">
			<path strokeWidth="2.8" d="M67579.6,-187.03C67606.9,-187.634 67641.3,-188.392 67668.4,-188.992"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="67678.4,-189.213 67668.3,-193.491 67673.4,-190.003 67668.4,-189.892 67668.4,-188.992 67668.4,-188.093 67673.4,-188.203 67668.5,-184.493 67678.4,-189.213 67678.4,-189.213"/>
			<text textAnchor="middle" x="67629" y="-191.8">majority</text>
			</g>
			<g id="n349" className="node">
			<ellipse cx="67894" cy="-190" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="67894" y="-186.3">ancilla </text>
			</g>
			<g id="edge1024" className="edge majority">
			<path strokeWidth="3" d="M67751.8,-190C67777,-190 67811.2,-190 67839.6,-190"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="67849.7,-190 67839.7,-194.5 67844.7,-191 67839.7,-191 67839.7,-190 67839.7,-189 67844.7,-189 67839.7,-185.5 67849.7,-190 67849.7,-190"/>
			<text textAnchor="middle" x="67801" y="-193.8">majority</text>
			</g>
			<g id="n351" className="node">
			<ellipse cx="68083" cy="-143" rx="46.5926" ry="18"/>
			<text textAnchor="middle" x="68083" y="-139.3">Domini </text>
			</g>
			<g id="edge251" className="edge majority">
			<path strokeWidth="2.8" d="M67926.4,-177.667C67935.8,-174.237 67946.2,-170.712 67956,-168 67980,-161.343 68006.9,-155.743 68029.8,-151.541"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="68039.6,-149.769 68030.6,-155.97 68034.9,-151.541 68029.9,-152.427 68029.8,-151.541 68029.6,-150.655 68034.5,-149.769 68029,-147.112 68039.6,-149.769 68039.6,-149.769"/>
			<text textAnchor="middle" x="67987" y="-171.8">majority</text>
			</g>
			<g id="n353" className="node">
			<ellipse cx="68255" cy="-197" rx="27" ry="18"/>
			<text textAnchor="middle" x="68255" y="-193.3">et </text>
			</g>
			<g id="edge655" className="edge">
			<path d="M67938.3,-190.844C68009.8,-192.239 68151.3,-194.998 68217.8,-196.295"/>
			<polygon fill="#000000" stroke="#000000" points="68227.8,-196.49 68217.8,-200.794 68222.8,-196.392 68217.8,-196.295 68217.8,-196.295 68217.8,-196.295 68222.8,-196.392 68217.9,-191.796 68227.8,-196.49 68227.8,-196.49"/>
			<text textAnchor="middle" x="68083" y="-197.8">Kf133</text>
			</g>
			<g id="edge66" className="edge majority">
			<path strokeWidth="2.4" d="M68128.4,-147.542C68153.1,-151.112 68184,-157.335 68210,-168 68216.2,-170.552 68222.5,-174.029 68228.3,-177.69"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="68236.9,-183.487 68226.1,-181.636 68232.4,-181.276 68228.2,-178.483 68228.6,-177.903 68229,-177.322 68233.1,-180.114 68231.1,-174.17 68236.9,-183.487 68236.9,-183.487"/>
			<text textAnchor="middle" x="68179" y="-171.8">majority</text>
			</g>
			<g id="n358" className="node">
			<ellipse cx="68821" cy="-152" rx="27" ry="18"/>
			<text textAnchor="middle" x="68821" y="-148.3">et </text>
			</g>
			<g id="edge900" className="edge">
			<path strokeWidth="1.2" d="M68115.9,-129.986C68157.4,-113.793 68232.7,-87.0504 68300,-77 68361.6,-67.8013 68773.1,-82.3653 68776,-84 68791.9,-92.9088 68803,-110.227 68810,-125.156"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="68814.1,-134.509 68806,-127.137 68812,-129.964 68810,-125.38 68810.1,-125.34 68810.2,-125.3 68812.2,-129.885 68814.2,-123.544 68814.1,-134.509 68814.1,-134.509"/>
			<text textAnchor="middle" x="68398" y="-80.8">MüU151, Sg524</text>
			</g>
			<g id="n356" className="node">
			<ellipse cx="68564" cy="-197" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="68564" y="-193.3">cetera, </text>
			</g>
			<g id="edge954" className="edge">
			<path strokeWidth="1.6" d="M68282.2,-197C68331.9,-197 68440.8,-197 68507.5,-197"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="68517.8,-197 68507.8,-201.5 68512.8,-197.3 68507.8,-197.3 68507.8,-197 68507.8,-196.7 68512.8,-196.7 68507.8,-192.5 68517.8,-197 68517.8,-197"/>
			<text textAnchor="middle" x="68398" y="-200.8">Ba96, Gr314, Kf133, Kr185</text>
			</g>
			<g id="n355" className="node">
			<ellipse cx="68564" cy="-295" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="68564" y="-291.3">suscipit </text>
			</g>
			<g id="edge730" className="edge">
			<path strokeWidth="1.2" d="M68262.7,-214.487C68269.5,-229.974 68281.8,-251.808 68300,-263 68362.5,-301.484 68449.3,-304.425 68505.8,-301.181"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="68515.9,-300.51 68506.3,-305.658 68511,-300.939 68506,-301.267 68506,-301.167 68506,-301.068 68511,-300.739 68505.7,-296.677 68515.9,-300.51 68515.9,-300.51"/>
			<text textAnchor="middle" x="68398" y="-305.8">Er16, Mü11475</text>
			</g>
			<g id="n360" className="node">
			<ellipse cx="69151" cy="-156" rx="48.9926" ry="18"/>
			<text textAnchor="middle" x="69151" y="-152.3">suscipe </text>
			</g>
			<g id="edge685" className="edge">
			<path strokeWidth="1.2" d="M68281.4,-192.182C68341.9,-180.882 68499.4,-152.467 68632,-137 68703.7,-128.637 68721.9,-127.668 68794,-125 68818,-124.113 68824,-124.897 68848,-125 68951.1,-125.444 68979,-106.444 69080,-127 69090.8,-129.206 69102.1,-133.093 69112.4,-137.319"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="69121.8,-141.43 69110.9,-141.575 69117.2,-139.53 69112.6,-137.539 69112.7,-137.447 69112.7,-137.355 69117.3,-139.347 69114.5,-133.319 69121.8,-141.43 69121.8,-141.43"/>
			<text textAnchor="middle" x="68704" y="-140.8">Kr299, Mü22405</text>
			</g>
			<g id="n361" className="node">
			<ellipse cx="69151" cy="-227" rx="52.7911" ry="18"/>
			<text textAnchor="middle" x="69151" y="-223.3">suscepit </text>
			</g>
			<g id="edge742" className="edge">
			<path d="M68276.9,-207.918C68284.1,-211.12 68292.2,-214.233 68300,-216 68537.7,-269.905 68604.3,-238.227 68848,-235 68931.2,-233.899 69027.2,-231.092 69088.2,-229.115"/>
			<polygon fill="#000000" stroke="#000000" points="69098.4,-228.781 69088.6,-233.605 69093.4,-228.945 69088.4,-229.108 69088.4,-229.108 69088.4,-229.108 69093.4,-228.945 69088.3,-224.61 69098.4,-228.781 69098.4,-228.781"/>
			<text textAnchor="middle" x="68704" y="-247.8">Mü28315</text>
			</g>
			<g id="edge1333" className="edge">
			<path strokeWidth="1.4" d="M68599.9,-185.462C68610.1,-182.371 68621.4,-179.264 68632,-177 68684.2,-165.804 68745.8,-158.758 68783.8,-155.098"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="68793.9,-154.155 68784.4,-159.567 68789,-154.82 68784,-155.285 68784,-155.086 68784,-154.887 68788.9,-154.422 68783.6,-150.606 68793.9,-154.155 68793.9,-154.155"/>
			<text textAnchor="middle" x="68704" y="-180.8">Ba96, Gr314, Kf133</text>
			</g>
			<g id="edge1233" className="edge">
			<path d="M68607.2,-203.323C68696.3,-215.22 68909.2,-236.067 69080,-193 69093.1,-189.685 69106.6,-183.432 69118.1,-176.997"/>
			<polygon fill="#000000" stroke="#000000" points="69126.9,-171.85 69120.5,-180.787 69122.5,-174.377 69118.2,-176.904 69118.2,-176.904 69118.2,-176.904 69122.5,-174.377 69116,-173.021 69126.9,-171.85 69126.9,-171.85"/>
			<text textAnchor="middle" x="68821" y="-221.8">Kr185</text>
			</g>
			<g id="n363" className="node">
			<ellipse cx="69690" cy="-227" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="69690" y="-223.3">uerbum </text>
			</g>
			<g id="edge1244" className="edge">
			<path strokeWidth="1.2" d="M68613.9,-296.699C68765,-301.108 69237.6,-308.557 69622,-246 69628.7,-244.904 69635.8,-243.368 69642.6,-241.639"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="69652.5,-238.996 69644,-245.929 69647.7,-240.386 69642.8,-241.679 69642.8,-241.582 69642.8,-241.486 69647.6,-240.193 69641.7,-237.235 69652.5,-238.996 69652.5,-238.996"/>
			<text textAnchor="middle" x="68973" y="-302.8">Er16, Mü11475</text>
			</g>
			<g id="edge281" className="edge">
			<path strokeWidth="1.6" d="M68845.5,-144.349C68852.1,-142.555 68859.3,-140.904 68866,-140 68960.3,-127.376 68985.5,-129.336 69080,-140 69086.8,-140.77 69094,-141.95 69100.9,-143.327"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="69111,-145.462 69100.3,-147.793 69106.1,-144.719 69101.2,-143.684 69101.2,-143.39 69101.3,-143.097 69106.2,-144.132 69102.2,-138.988 69111,-145.462 69111,-145.462"/>
			<text textAnchor="middle" x="68973" y="-143.8">Ba96, Kf133, MüU151, Sg524</text>
			</g>
			<g id="edge432" className="edge">
			<path d="M68846.7,-157.637C68899.6,-169.741 69025.1,-198.447 69097,-214.885"/>
			<polygon fill="#000000" stroke="#000000" points="69106.8,-217.12 69096,-219.278 69101.9,-216.006 69097,-214.891 69097,-214.891 69097,-214.891 69101.9,-216.006 69098,-210.504 69106.8,-217.12 69106.8,-217.12"/>
			<text textAnchor="middle" x="68973" y="-213.8">Gr314</text>
			</g>
			<g id="edge285" className="edge">
			<path strokeWidth="2.2" d="M69199.4,-158.634C69284.7,-163.947 69469.1,-178.082 69622,-208 69628.4,-209.25 69635,-210.813 69641.6,-212.504"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="69651.7,-215.238 69640.9,-216.974 69646.7,-214.513 69641.9,-213.209 69642,-212.629 69642.2,-212.05 69647,-213.355 69643.2,-208.285 69651.7,-215.238 69651.7,-215.238"/>
			<text textAnchor="middle" x="69422" y="-211.8">Ba96, Kf133, Kr185, Kr299, Mü22405, MüU151, Sg524</text>
			</g>
			<g id="edge1360" className="edge">
			<path strokeWidth="1.2" d="M69204,-227C69304.2,-227 69523.7,-227 69629.5,-227"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="69639.7,-227 69629.7,-231.5 69634.7,-227.1 69629.7,-227.1 69629.7,-227 69629.7,-226.9 69634.7,-226.9 69629.7,-222.5 69639.7,-227 69639.7,-227"/>
			<text textAnchor="middle" x="69422" y="-230.8">Gr314, Mü28315</text>
			</g>
			<g id="n365" className="node">
			<ellipse cx="69865" cy="-218" rx="27" ry="18"/>
			<text textAnchor="middle" x="69865" y="-214.3">id </text>
			</g>
			<g id="edge1342" className="edge majority">
			<path strokeWidth="2.8" d="M69739.7,-224.469C69767.6,-223.016 69802.1,-221.222 69827.6,-219.892"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="69837.7,-219.37 69827.9,-224.384 69832.7,-220.529 69827.7,-220.789 69827.7,-219.89 69827.6,-218.991 69832.6,-218.731 69827.4,-215.396 69837.7,-219.37 69837.7,-219.37"/>
			<text textAnchor="middle" x="69789" y="-226.8">majority</text>
			</g>
			<g id="n369" className="node">
			<ellipse cx="70196" cy="-260" rx="43.5923" ry="18"/>
			<text textAnchor="middle" x="70196" y="-256.3">Filium </text>
			</g>
			<g id="edge899" className="edge">
			<path d="M69731.5,-237.298C69740.2,-239.159 69749.4,-240.866 69758,-242 69895.7,-260.104 70059.7,-261.526 70142.2,-260.863"/>
			<polygon fill="#000000" stroke="#000000" points="70152.3,-260.767 70142.3,-265.361 70147.3,-260.814 70142.3,-260.862 70142.3,-260.862 70142.3,-260.862 70147.3,-260.814 70142.2,-256.362 70152.3,-260.767 70152.3,-260.767"/>
			<text textAnchor="middle" x="69945" y="-261.8">Mü28315</text>
			</g>
			<g id="n367" className="node">
			<ellipse cx="70026" cy="-218" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="70026" y="-214.3">est </text>
			</g>
			<g id="edge523" className="edge majority">
			<path strokeWidth="2.8" d="M69892.3,-218C69918.3,-218 69958.3,-218 69987.6,-218"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="69997.9,-218 69987.9,-222.5 69992.9,-218.9 69987.9,-218.9 69987.9,-218 69987.9,-217.1 69992.9,-217.1 69987.9,-213.5 69997.9,-218 69997.9,-218"/>
			<text textAnchor="middle" x="69945" y="-221.8">majority</text>
			</g>
			<g id="edge310" className="edge majority">
			<path strokeWidth="2.8" d="M70053.8,-220.513C70075.6,-222.979 70107.2,-227.487 70134,-235 70141.6,-237.128 70149.5,-239.922 70157,-242.869"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="70166.3,-246.645 70155.4,-247.039 70161.3,-245.592 70156.7,-243.705 70157.1,-242.872 70157.4,-242.039 70162,-243.925 70158.8,-238.705 70166.3,-246.645 70166.3,-246.645"/>
			<text textAnchor="middle" x="70103" y="-238.8">majority</text>
			</g>
			<g id="n371" className="node">
			<ellipse cx="70371" cy="-260" rx="32.4942" ry="18"/>
			<text textAnchor="middle" x="70371" y="-256.3">Dei. </text>
			</g>
			<g id="edge191" className="edge majority">
			<path strokeWidth="3" d="M70239.8,-260C70266.7,-260 70301.3,-260 70328.1,-260"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="70338.3,-260 70328.3,-264.5 70333.3,-261 70328.3,-261 70328.3,-260 70328.3,-259 70333.3,-259 70328.3,-255.5 70338.3,-260 70338.3,-260"/>
			<text textAnchor="middle" x="70289" y="-263.8">majority</text>
			</g>
			<g id="n375" className="node">
			<ellipse cx="70919" cy="-243" rx="35.9954" ry="18"/>
			<text textAnchor="middle" x="70919" y="-239.3">Item </text>
			</g>
			<g id="edge160" className="edge">
			<path d="M70403.7,-259.013C70496.1,-256.136 70765.3,-247.753 70872.9,-244.405"/>
			<polygon fill="#000000" stroke="#000000" points="70883.1,-244.088 70873.2,-248.897 70878.1,-244.244 70873.1,-244.399 70873.1,-244.399 70873.1,-244.399 70878.1,-244.244 70872.9,-239.901 70883.1,-244.088 70883.1,-244.088"/>
			<text textAnchor="middle" x="70630" y="-261.8">Gr314</text>
			</g>
			<g id="n373" className="node">
			<ellipse cx="70919" cy="-170" rx="63.0888" ry="18"/>
			<text textAnchor="middle" x="70919" y="-166.3">Notandum </text>
			</g>
			<g id="edge1164" className="edge">
			<path d="M70389.3,-245.114C70398.5,-238.12 70410.2,-230.376 70422,-226 70565.6,-172.79 70747.4,-166.36 70846.1,-167.479"/>
			<polygon fill="#000000" stroke="#000000" points="70856.3,-167.624 70846.2,-171.981 70851.3,-167.553 70846.3,-167.481 70846.3,-167.481 70846.3,-167.481 70851.3,-167.553 70846.3,-162.982 70856.3,-167.624 70856.3,-167.624"/>
			<text textAnchor="middle" x="70630" y="-229.8">Mü22405</text>
			</g>
			<g id="n374" className="node">
			<ellipse cx="70919" cy="-306" rx="50.8918" ry="18"/>
			<text textAnchor="middle" x="70919" y="-302.3">Vlterius </text>
			</g>
			<g id="edge459" className="edge">
			<path strokeWidth="2.2" d="M70398.4,-269.805C70405.9,-272.226 70414.2,-274.541 70422,-276 70577.3,-305.07 70764.2,-307.901 70858.1,-307.158"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="70868.2,-307.06 70858.3,-311.656 70863.2,-307.708 70858.2,-307.756 70858.2,-307.156 70858.2,-306.556 70863.2,-306.508 70858.2,-302.656 70868.2,-307.06 70868.2,-307.06"/>
			<text textAnchor="middle" x="70630" y="-310.8">Ba96, Er16, Kr299, Mü11475, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="edge82" className="edge">
			<path strokeWidth="1.2" d="M70379.9,-277.492C70388,-293.21 70402.2,-315.4 70422,-326 70648.8,-447.663 70743,-348.804 71000,-362 71128,-368.573 71279.5,-374.054 71352.4,-376.551"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="71362.6,-376.897 71352.5,-381.054 71357.6,-376.827 71352.6,-376.657 71352.6,-376.557 71352.6,-376.457 71357.6,-376.627 71352.8,-372.06 71362.6,-376.897 71362.6,-376.897"/>
			<text textAnchor="middle" x="70919" y="-368.8">Kf133, Kr185</text>
			</g>
			<g id="n381" className="node">
			<ellipse cx="71397" cy="-216" rx="39.7935" ry="18"/>
			<text textAnchor="middle" x="71397" y="-212.3">notus </text>
			</g>
			<g id="edge798" className="edge">
			<path d="M70953.8,-238.156C70968,-236.276 70984.8,-234.274 71000,-233 71124.8,-222.542 71272.2,-218.362 71347.1,-216.819"/>
			<polygon fill="#000000" stroke="#000000" points="71357.1,-216.619 71347.2,-221.317 71352.2,-216.718 71347.2,-216.818 71347.2,-216.818 71347.2,-216.818 71352.2,-216.718 71347.1,-212.319 71357.1,-216.619 71357.1,-216.619"/>
			<text textAnchor="middle" x="71160" y="-236.8">Gr314</text>
			</g>
			<g id="n377" className="node">
			<ellipse cx="71397" cy="-162" rx="27" ry="18"/>
			<text textAnchor="middle" x="71397" y="-158.3">ibi </text>
			</g>
			<g id="edge967" className="edge">
			<path d="M70982.2,-168.954C71083,-167.26 71278.9,-163.968 71359.8,-162.609"/>
			<polygon fill="#000000" stroke="#000000" points="71369.9,-162.438 71360,-167.106 71364.9,-162.522 71359.9,-162.606 71359.9,-162.606 71359.9,-162.606 71364.9,-162.522 71359.9,-158.107 71369.9,-162.438 71369.9,-162.438"/>
			<text textAnchor="middle" x="71160" y="-171.8">Mü22405</text>
			</g>
			<g id="n379" className="node">
			<ellipse cx="71397" cy="-324" rx="58.4896" ry="18"/>
			<text textAnchor="middle" x="71397" y="-320.3">sciendum </text>
			</g>
			<g id="edge507" className="edge">
			<path strokeWidth="1.8" d="M70969.4,-303.407C71045.1,-300.103 71194.3,-296.233 71320,-309 71326.3,-309.642 71332.9,-310.558 71339.4,-311.625"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="71349.6,-313.408 71339,-316.112 71344.6,-312.938 71339.7,-312.073 71339.7,-311.679 71339.8,-311.285 71344.7,-312.15 71340.5,-307.247 71349.6,-313.408 71349.6,-313.408"/>
			<text textAnchor="middle" x="71160" y="-312.8">Ba96, Mü11475, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="n378" className="node">
			<ellipse cx="71397" cy="-270" rx="27" ry="18"/>
			<text textAnchor="middle" x="71397" y="-266.3">de </text>
			</g>
			<g id="edge794" className="edge">
			<path d="M70954.5,-292.924C70968.5,-288.261 70984.8,-283.538 71000,-281 71131,-259.145 71289.7,-264 71359.7,-267.707"/>
			<polygon fill="#000000" stroke="#000000" points="71369.8,-268.265 71359.6,-272.205 71364.8,-267.988 71359.8,-267.712 71359.8,-267.712 71359.8,-267.712 71364.8,-267.988 71360.1,-263.219 71369.8,-268.265 71369.8,-268.265"/>
			<text textAnchor="middle" x="71160" y="-284.8">Kr299</text>
			</g>
			<g id="edge689" className="edge">
			<path d="M70960.9,-316.436C70973.4,-319.287 70987.2,-322.108 71000,-324 71141.1,-344.819 71181.2,-314.559 71320,-347 71334.3,-350.333 71349.3,-355.987 71362.2,-361.562"/>
			<polygon fill="#000000" stroke="#000000" points="71371.7,-365.769 71360.7,-365.797 71367.1,-363.729 71362.5,-361.689 71362.5,-361.689 71362.5,-361.689 71367.1,-363.729 71364.4,-357.581 71371.7,-365.769 71371.7,-365.769"/>
			<text textAnchor="middle" x="71160" y="-350.8">Er16</text>
			</g>
			<g id="n385" className="node">
			<ellipse cx="71843" cy="-324" rx="27" ry="18"/>
			<text textAnchor="middle" x="71843" y="-320.3">de </text>
			</g>
			<g id="edge152" className="edge">
			<path strokeWidth="1.8" d="M71455.6,-324C71548.5,-324 71728.7,-324 71805.7,-324"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="71815.9,-324 71805.9,-328.5 71810.9,-324.4 71805.9,-324.4 71805.9,-324 71805.9,-323.6 71810.9,-323.6 71805.9,-319.5 71815.9,-324 71815.9,-324"/>
			<text textAnchor="middle" x="71634" y="-327.8">Ba96, Mü11475, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="n383" className="node">
			<ellipse cx="71843" cy="-270" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="71843" y="-266.3">hoc </text>
			</g>
			<g id="edge821" className="edge">
			<path d="M71424.1,-270C71498.7,-270 71712.9,-270 71802.2,-270"/>
			<polygon fill="#000000" stroke="#000000" points="71812.2,-270 71802.2,-274.5 71807.2,-270 71802.2,-270 71802.2,-270 71802.2,-270 71807.2,-270 71802.2,-265.5 71812.2,-270 71812.2,-270"/>
			<text textAnchor="middle" x="71634" y="-273.8">Kr299</text>
			</g>
			<g id="edge1074" className="edge">
			<path strokeWidth="1.6" d="M71431.6,-378.27C71500.6,-378.119 71662.5,-374.133 71794,-343 71799.6,-341.683 71805.3,-339.844 71810.9,-337.824"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="71820.4,-334.068 71812.8,-341.905 71815.9,-336.171 71811.2,-337.994 71811.1,-337.715 71811,-337.435 71815.7,-335.612 71809.5,-333.525 71820.4,-334.068 71820.4,-334.068"/>
			<text textAnchor="middle" x="71634" y="-380.8">Er16, Go325, Kf133, Kr185</text>
			</g>
			<g id="n401" className="node">
			<ellipse cx="73225" cy="-225" rx="33.2948" ry="18"/>
			<text textAnchor="middle" x="73225" y="-221.3">mox </text>
			</g>
			<g id="edge437" className="edge">
			<path d="M71424,-162C71492.5,-162 71683.2,-162 71842,-162 71842,-162 71842,-162 73074,-162 73119.3,-162 73166.7,-186.735 73195.8,-205.207"/>
			<polygon fill="#000000" stroke="#000000" points="73204.2,-210.704 73193.4,-209.005 73200.1,-207.971 73195.9,-205.237 73195.9,-205.237 73195.9,-205.237 73200.1,-207.971 73198.3,-201.469 73204.2,-210.704 73204.2,-210.704"/>
			<text textAnchor="middle" x="72271" y="-165.8">Mü22405</text>
			</g>
			<g id="n392" className="node">
			<ellipse cx="72181" cy="-270" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="72181" y="-266.3">quod </text>
			</g>
			<g id="edge32" className="edge">
			<path d="M71436.9,-215.497C71537.8,-214.652 71816.3,-215.246 72046,-243 72077.1,-246.757 72111.7,-253.816 72138,-259.775"/>
			<polygon fill="#000000" stroke="#000000" points="72148,-262.079 72137.3,-264.217 72143.1,-260.955 72138.3,-259.832 72138.3,-259.832 72138.3,-259.832 72143.1,-260.955 72139.3,-255.447 72148,-262.079 72148,-262.079"/>
			<text textAnchor="middle" x="71923" y="-236.8">Gr314</text>
			</g>
			<g id="n388" className="node">
			<ellipse cx="72009" cy="-324" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="72009" y="-320.3">hoc </text>
			</g>
			<g id="edge327" className="edge majority">
			<path strokeWidth="2.6" d="M71870.3,-324C71896.8,-324 71937.7,-324 71968.1,-324"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="71978.4,-324 71968.4,-328.5 71973.4,-324.8 71968.4,-324.8 71968.4,-324 71968.4,-323.2 71973.4,-323.2 71968.4,-319.5 71978.4,-324 71978.4,-324"/>
			<text textAnchor="middle" x="71923" y="-327.8">majority</text>
			</g>
			<g id="n387" className="node">
			<ellipse cx="72009" cy="-270" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="72009" y="-266.3">quod </text>
			</g>
			<g id="edge975" className="edge">
			<path d="M71873.7,-270C71898.4,-270 71934.1,-270 71962.4,-270"/>
			<polygon fill="#000000" stroke="#000000" points="71972.5,-270 71962.5,-274.5 71967.5,-270 71962.5,-270 71962.5,-270 71962.5,-270 71967.5,-270 71962.5,-265.5 71972.5,-270 71972.5,-270"/>
			<text textAnchor="middle" x="71923" y="-273.8">Kr299</text>
			</g>
			<g id="edge970" className="edge">
			<path d="M72045.6,-270C72071.4,-270 72106.3,-270 72134.1,-270"/>
			<polygon fill="#000000" stroke="#000000" points="72144.4,-270 72134.4,-274.5 72139.4,-270 72134.4,-270 72134.4,-270 72134.4,-270 72139.4,-270 72134.4,-265.5 72144.4,-270 72144.4,-270"/>
			<text textAnchor="middle" x="72095" y="-273.8">Kr299</text>
			</g>
			<g id="edge311" className="edge majority">
			<path strokeWidth="2.6" d="M72036.8,-316.279C72060.4,-309.404 72095.6,-298.927 72126,-289 72131,-287.364 72136.3,-285.591 72141.4,-283.808"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="72151.2,-280.399 72143.3,-287.939 72146.8,-282.8 72142,-284.445 72141.8,-283.69 72141.5,-282.934 72146.2,-281.289 72140.3,-279.44 72151.2,-280.399 72151.2,-280.399"/>
			<text textAnchor="middle" x="72095" y="-310.8">majority</text>
			</g>
			<g id="n395" className="node">
			<ellipse cx="72406" cy="-229" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="72406" y="-225.3">dicit </text>
			</g>
			<g id="edge31" className="edge majority">
			<path strokeWidth="2.4" d="M72214.8,-263.178C72221.8,-261.764 72229.1,-260.308 72236,-259 72279.1,-250.785 72328.5,-242.094 72362.8,-236.193"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="72372.9,-234.455 72363.8,-240.584 72368.1,-235.992 72363.1,-236.839 72363,-236.149 72362.9,-235.46 72367.8,-234.612 72362.3,-231.715 72372.9,-234.455 72372.9,-234.455"/>
			<text textAnchor="middle" x="72271" y="-262.8">majority</text>
			</g>
			<g id="n397" className="node">
			<ellipse cx="72915" cy="-280" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="72915" y="-276.3">autor </text>
			</g>
			<g id="edge1355" className="edge">
			<path strokeWidth="1.4" d="M72217.1,-272.935C72223.4,-273.365 72229.9,-273.747 72236,-274 72472.4,-283.792 72755.6,-281.906 72866.3,-280.644"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="72876.5,-280.524 72866.5,-285.141 72871.5,-280.783 72866.5,-280.842 72866.5,-280.642 72866.5,-280.442 72871.5,-280.383 72866.4,-276.142 72876.5,-280.524 72876.5,-280.524"/>
			<text textAnchor="middle" x="72406" y="-283.8">Ba96, Go325, MüU151</text>
			</g>
			<g id="edge350" className="edge">
			<path strokeWidth="2" d="M72440.4,-231.41C72459.6,-232.781 72484.2,-234.515 72506,-236 72662.4,-246.64 72704.7,-226.01 72858,-259 72864.3,-260.348 72870.8,-262.265 72877,-264.4"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="72886.6,-267.882 72875.6,-268.687 72881.7,-266.64 72877,-264.929 72877.2,-264.459 72877.3,-263.989 72882,-265.701 72878.7,-260.231 72886.6,-267.882 72886.6,-267.882"/>
			<text textAnchor="middle" x="72682" y="-262.8">Er16, Kf133, Kr185, Mü11475, Mü28315, Sg524</text>
			</g>
			<g id="n399" className="node">
			<ellipse cx="72915" cy="-116" rx="33.2948" ry="18"/>
			<text textAnchor="middle" x="72915" y="-112.3">mox </text>
			</g>
			<g id="edge418" className="edge">
			<path d="M72434.5,-218.795C72454.2,-211.727 72481.5,-202.464 72506,-196 72638.4,-161.11 72798.6,-134.005 72872.7,-122.302"/>
			<polygon fill="#000000" stroke="#000000" points="72883,-120.688 72873.8,-126.682 72878,-121.462 72873.1,-122.236 72873.1,-122.236 72873.1,-122.236 72878,-121.462 72872.4,-117.791 72883,-120.688 72883,-120.688"/>
			<text textAnchor="middle" x="72682" y="-199.8">Kr299</text>
			</g>
			<g id="edge681" className="edge">
			<path d="M72440.6,-228.836C72570,-228.202 73037.1,-225.915 73181.3,-225.209"/>
			<polygon fill="#000000" stroke="#000000" points="73191.5,-225.159 73181.5,-229.708 73186.5,-225.184 73181.5,-225.208 73181.5,-225.208 73181.5,-225.208 73186.5,-225.184 73181.5,-220.708 73191.5,-225.159 73191.5,-225.159"/>
			<text textAnchor="middle" x="72996" y="-229.8">Gr314</text>
			</g>
			<g id="n402" className="node">
			<ellipse cx="73073" cy="-322" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="73073" y="-318.3">dicit </text>
			</g>
			<g id="edge37" className="edge">
			<path d="M72948.7,-288.805C72973,-295.345 73006.3,-304.301 73032.1,-311.262"/>
			<polygon fill="#000000" stroke="#000000" points="73042,-313.918 73031.2,-315.664 73037.2,-312.618 73032.3,-311.318 73032.3,-311.318 73032.3,-311.318 73037.2,-312.618 73033.5,-306.973 73042,-313.918 73042,-313.918"/>
			<text textAnchor="middle" x="72996" y="-310.8">Go325</text>
			</g>
			<g id="edge1217" className="edge majority">
			<path strokeWidth="2.4" d="M72952.6,-275.542C73002.8,-269.111 73095.8,-256.102 73174,-239 73177.9,-238.157 73181.8,-237.194 73185.8,-236.176"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="73195.6,-233.568 73187.1,-240.497 73190.9,-235.535 73186.1,-236.826 73185.9,-236.149 73185.7,-235.473 73190.6,-234.183 73184.8,-231.802 73195.6,-233.568 73195.6,-233.568"/>
			<text textAnchor="middle" x="73073" y="-266.8">majority</text>
			</g>
			<g id="n408" className="node">
			<ellipse cx="73812" cy="-171" rx="53.8905" ry="18"/>
			<text textAnchor="middle" x="73812" y="-167.3">concepit </text>
			</g>
			<g id="edge1214" className="edge">
			<path d="M72948.3,-117.637C72979.8,-119.095 73029.2,-121 73072,-121 73072,-121 73072,-121 73641,-121 73686.9,-121 73737.1,-137.998 73770.9,-152.173"/>
			<polygon fill="#000000" stroke="#000000" points="73780.5,-156.269 73769.5,-156.453 73775.9,-154.294 73771.3,-152.319 73771.3,-152.319 73771.3,-152.319 73775.9,-154.294 73773.1,-148.185 73780.5,-156.269 73780.5,-156.269"/>
			<text textAnchor="middle" x="73359" y="-124.8">Kr299</text>
			</g>
			<g id="edge540" className="edge">
			<path d="M73104.9,-315.061C73125.7,-309.343 73153.1,-299.743 73174,-285 73187.1,-275.743 73198.8,-262.23 73207.5,-250.371"/>
			<polygon fill="#000000" stroke="#000000" points="73213.4,-242.113 73211.3,-252.875 73210.5,-246.194 73207.6,-250.274 73207.6,-250.274 73207.6,-250.274 73210.5,-246.194 73203.9,-247.674 73213.4,-242.113 73213.4,-242.113"/>
			<text textAnchor="middle" x="73150" y="-311.8">Go325</text>
			</g>
			<g id="n404" className="node">
			<ellipse cx="73359" cy="-174" rx="27" ry="18"/>
			<text textAnchor="middle" x="73359" y="-170.3">id </text>
			</g>
			<g id="edge514" className="edge">
			<path d="M73246.8,-211.299C73255.5,-205.97 73266,-200.159 73276,-196 73290.9,-189.796 73308.1,-184.869 73322.9,-181.265"/>
			<polygon fill="#000000" stroke="#000000" points="73332.7,-178.981 73324,-185.636 73327.8,-180.118 73322.9,-181.254 73322.9,-181.254 73322.9,-181.254 73327.8,-180.118 73321.9,-176.872 73332.7,-178.981 73332.7,-178.981"/>
			<text textAnchor="middle" x="73295" y="-199.8">Ba96</text>
			</g>
			<g id="edge854" className="edge majority">
			<path strokeWidth="2.8" d="M73258.3,-225C73285,-225 73324,-225 73358,-225 73358,-225 73358,-225 73641,-225 73687.9,-225 73738.9,-206.078 73772.6,-190.635"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="73782.1,-186.186 73775,-194.51 73778,-189.126 73773.4,-191.252 73773,-190.437 73772.7,-189.622 73777.2,-187.497 73771.1,-186.364 73782.1,-186.186 73782.1,-186.186"/>
			<text textAnchor="middle" x="73491" y="-228.8">majority</text>
			</g>
			<g id="n407" className="node">
			<ellipse cx="73491" cy="-171" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="73491" y="-167.3">est </text>
			</g>
			<g id="edge1262" className="edge">
			<path d="M73386,-173.4C73405.1,-172.959 73431.3,-172.354 73452.7,-171.861"/>
			<polygon fill="#000000" stroke="#000000" points="73462.7,-171.63 73452.8,-176.359 73457.7,-171.745 73452.7,-171.861 73452.7,-171.861 73452.7,-171.861 73457.7,-171.745 73452.6,-167.362 73462.7,-171.63 73462.7,-171.63"/>
			<text textAnchor="middle" x="73423" y="-175.8">Ba96</text>
			</g>
			<g id="n410" className="node">
			<ellipse cx="73640" cy="-171" rx="43.5923" ry="18"/>
			<text textAnchor="middle" x="73640" y="-167.3">statim </text>
			</g>
			<g id="edge17" className="edge">
			<path d="M73519,-171C73537.7,-171 73563.4,-171 73586.1,-171"/>
			<polygon fill="#000000" stroke="#000000" points="73596.3,-171 73586.3,-175.5 73591.3,-171 73586.3,-171 73586.3,-171 73586.3,-171 73591.3,-171 73586.3,-166.5 73596.3,-171 73596.3,-171"/>
			<text textAnchor="middle" x="73559" y="-174.8">Ba96</text>
			</g>
			<g id="edge686" className="edge">
			<path d="M73683.9,-171C73703.2,-171 73726.3,-171 73747.5,-171"/>
			<polygon fill="#000000" stroke="#000000" points="73757.8,-171 73747.8,-175.5 73752.8,-171 73747.8,-171 73747.8,-171 73747.8,-171 73752.8,-171 73747.8,-166.5 73757.8,-171 73757.8,-171"/>
			<text textAnchor="middle" x="73721" y="-174.8">Ba96</text>
			</g>
			<g id="n411" className="node">
			<ellipse cx="74001" cy="-117" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="74001" y="-113.3">quod </text>
			</g>
			<g id="edge172" className="edge majority">
			<path strokeWidth="2.8" d="M73844.7,-156.649C73856.8,-151.539 73870.9,-146.053 73884,-142 73907.5,-134.72 73934.4,-128.787 73956.3,-124.531"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="73966.3,-122.636 73957.4,-128.916 73961.6,-124.449 73956.7,-125.378 73956.5,-124.494 73956.4,-123.61 73961.3,-122.681 73955.7,-120.072 73966.3,-122.636 73966.3,-122.636"/>
			<text textAnchor="middle" x="73915" y="-145.8">majority</text>
			</g>
			<g id="n419" className="node">
			<ellipse cx="75633" cy="-146" rx="27" ry="18"/>
			<text textAnchor="middle" x="75633" y="-142.3">et </text>
			</g>
			<g id="edge829" className="edge">
			<path d="M73866.2,-171C73903.6,-171 73954.9,-171 74000,-171 74000,-171 74000,-171 75071,-171 75300.9,-171 75360.3,-188.171 75588,-157 75591.3,-156.552 75594.7,-155.954 75598,-155.269"/>
			<polygon fill="#000000" stroke="#000000" points="75608,-153.01 75599.2,-159.613 75603.1,-154.117 75598.2,-155.225 75598.2,-155.225 75598.2,-155.225 75603.1,-154.117 75597.2,-150.837 75608,-153.01 75608,-153.01"/>
			<text textAnchor="middle" x="74507" y="-174.8">Gr314</text>
			</g>
			<g id="n421" className="node">
			<ellipse cx="75838" cy="-147" rx="27" ry="18"/>
			<text textAnchor="middle" x="75838" y="-143.3">in </text>
			</g>
			<g id="edge733" className="edge">
			<path d="M73848.6,-184.252C73885.9,-196.887 73946.2,-214 74000,-214 74000,-214 74000,-214 75634,-214 75697.4,-214 75717.8,-225.093 75776,-200 75784.7,-196.253 75801.2,-181.719 75814.8,-168.817"/>
			<polygon fill="#000000" stroke="#000000" points="75822,-161.896 75817.9,-172.065 75818.4,-165.356 75814.8,-168.816 75814.8,-168.816 75814.8,-168.816 75818.4,-165.356 75811.7,-165.568 75822,-161.896 75822,-161.896"/>
			<text textAnchor="middle" x="74755" y="-217.8">Kr299</text>
			</g>
			<g id="n414" className="node">
			<ellipse cx="74507" cy="-117" rx="27" ry="18"/>
			<text textAnchor="middle" x="74507" y="-113.3">in </text>
			</g>
			<g id="edge1280" className="edge">
			<path strokeWidth="2.2" d="M74037.4,-117C74129.7,-117 74376.5,-117 74469.7,-117"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="74479.8,-117 74469.8,-121.5 74474.8,-117.6 74469.8,-117.6 74469.8,-117 74469.8,-116.4 74474.8,-116.4 74469.8,-112.5 74479.8,-117 74479.8,-117"/>
			<text textAnchor="middle" x="74259" y="-120.8">Er16, Go325, Kf133, Kr185, Mü11475, Mü28315, Sg524</text>
			</g>
			<g id="edge86" className="edge">
			<path strokeWidth="1.4" d="M74036.1,-111.723C74117.3,-99.6405 74328.5,-71 74506,-71 74506,-71 74506,-71 75634,-71 75700.1,-71 75771,-106.766 75809.1,-129.226"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="75818,-134.62 75807.1,-133.307 75813.6,-132.208 75809.3,-129.625 75809.4,-129.454 75809.6,-129.282 75813.8,-131.866 75811.8,-125.601 75818,-134.62 75818,-134.62"/>
			<text textAnchor="middle" x="75070" y="-74.8">Ba96, Mü22405, MüU151</text>
			</g>
			<g id="n417" className="node">
			<ellipse cx="75070" cy="-124" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="75070" y="-120.3">uno </text>
			</g>
			<g id="edge116" className="edge">
			<path strokeWidth="2.2" d="M74534.3,-117.328C74624.5,-118.453 74921.3,-122.157 75029.3,-123.504"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="75039.4,-123.631 75029.4,-128.006 75034.4,-124.168 75029.4,-124.106 75029.4,-123.506 75029.4,-122.906 75034.4,-122.968 75029.5,-119.006 75039.4,-123.631 75039.4,-123.631"/>
			<text textAnchor="middle" x="74755" y="-125.8">Er16, Go325, Kf133, Kr185, Mü11475, Mü28315, Sg524</text>
			</g>
			<g id="edge808" className="edge">
			<path strokeWidth="2.2" d="M75100.8,-124.455C75180,-125.792 75402.9,-130.374 75588,-142 75590.5,-142.16 75593.2,-142.346 75595.8,-142.548"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="75606,-143.39 75595.6,-147.047 75600.9,-143.575 75595.9,-143.161 75596,-142.563 75596,-141.965 75601,-142.379 75596.4,-138.078 75606,-143.39 75606,-143.39"/>
			<text textAnchor="middle" x="75385" y="-145.8">Er16, Go325, Kf133, Kr185, Mü11475, Mü28315, Sg524</text>
			</g>
			<g id="n422" className="node">
			<ellipse cx="75838" cy="-216" rx="43.5923" ry="18"/>
			<text textAnchor="middle" x="75838" y="-212.3">cetera </text>
			</g>
			<g id="edge984" className="edge">
			<path d="M75657.3,-154.563C75663.9,-156.995 75671.3,-159.628 75678,-162 75717.1,-175.758 75761.9,-190.903 75793.9,-201.644"/>
			<polygon fill="#000000" stroke="#000000" points="75803.4,-204.83 75792.5,-205.922 75798.7,-203.242 75793.9,-201.654 75793.9,-201.654 75793.9,-201.654 75798.7,-203.242 75795.4,-197.387 75803.4,-204.83 75803.4,-204.83"/>
			<text textAnchor="middle" x="75727" y="-197.8">Gr314</text>
			</g>
			<g id="edge1284" className="edge">
			<path strokeWidth="1.2" d="M75660.1,-146.129C75695.9,-146.305 75760.3,-146.622 75800.7,-146.821"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="75811,-146.872 75801,-151.322 75806,-146.947 75801,-146.922 75801,-146.822 75801,-146.722 75806,-146.747 75801,-142.323 75811,-146.872 75811,-146.872"/>
			<text textAnchor="middle" x="75727" y="-149.8">Kf133, Kr185</text>
			</g>
			<g id="n429" className="node">
			<ellipse cx="77110" cy="-156" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="77110" y="-152.3">eodem </text>
			</g>
			<g id="edge481" className="edge">
			<path strokeWidth="1.8" d="M75656.4,-136.713C75693.3,-122.253 75769.7,-96 75837,-96 75837,-96 75837,-96 76764,-96 76872.8,-96 76998,-125.311 77063.6,-142.96"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="77073.6,-145.686 77062.8,-147.396 77068.7,-144.756 77063.8,-143.441 77063.9,-143.055 77064.1,-142.669 77068.9,-143.984 77065.1,-138.713 77073.6,-145.686 77073.6,-145.686"/>
			<text textAnchor="middle" x="76309" y="-99.8">Er16, Go325, Mü11475, Mü28315, Sg524</text>
			</g>
			<g id="n436" className="node">
			<ellipse cx="77793" cy="-227" rx="27" ry="18"/>
			<text textAnchor="middle" x="77793" y="-223.3">ut </text>
			</g>
			<g id="edge556" className="edge">
			<path d="M75881.3,-218.262C75963.6,-222.452 76150.6,-231 76308,-231 76308,-231 76308,-231 77305,-231 77473.5,-231 77674.8,-228.576 77755.7,-227.502"/>
			<polygon fill="#000000" stroke="#000000" points="77765.9,-227.366 77755.9,-231.999 77760.9,-227.433 77755.9,-227.5 77755.9,-227.5 77755.9,-227.5 77760.9,-227.433 77755.8,-223 77765.9,-227.366 77765.9,-227.366"/>
			<text textAnchor="middle" x="76928" y="-234.8">Gr314</text>
			</g>
			<g id="n424" className="node">
			<ellipse cx="76309" cy="-147" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="76309" y="-143.3">uno </text>
			</g>
			<g id="edge282" className="edge">
			<path strokeWidth="1.6" d="M75865.2,-147C75943.3,-147 76174.8,-147 76268.2,-147"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="76278.4,-147 76268.4,-151.5 76273.4,-147.3 76268.4,-147.3 76268.4,-147 76268.4,-146.7 76273.4,-146.7 76268.4,-142.5 76278.4,-147 76278.4,-147"/>
			<text textAnchor="middle" x="76020" y="-150.8">Ba96, Kr299, Mü22405, MüU151</text>
			</g>
			<g id="edge1105" className="edge">
			<path strokeWidth="1.2" d="M75861.8,-155.72C75873.1,-159.625 75887.1,-163.831 75900,-166 76013.1,-185.01 76043.3,-172.222 76158,-174 76438.9,-178.353 76509.1,-174.544 76790,-174 76904.7,-173.778 76934.4,-188.755 77048,-173 77053.6,-172.226 77059.4,-171.08 77065.1,-169.743"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="77075.1,-167.168 77066.6,-174.004 77070.3,-168.503 77065.5,-169.741 77065.5,-169.644 77065.4,-169.547 77070.3,-168.309 77064.3,-165.284 77075.1,-167.168 77075.1,-167.168"/>
			<text textAnchor="middle" x="76598" y="-178.8">Kf133, Kr185</text>
			</g>
			<g id="n426" className="node">
			<ellipse cx="76763" cy="-147" rx="27" ry="18"/>
			<text textAnchor="middle" x="76763" y="-143.3">et </text>
			</g>
			<g id="edge1019" className="edge">
			<path strokeWidth="1.6" d="M76339.7,-147C76419.5,-147 76638.8,-147 76725.8,-147"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="76736,-147 76726,-151.5 76731,-147.3 76726,-147.3 76726,-147 76726,-146.7 76731,-146.7 76726,-142.5 76736,-147 76736,-147"/>
			<text textAnchor="middle" x="76598" y="-150.8">Ba96, Kr299, Mü22405, MüU151</text>
			</g>
			<g id="edge484" className="edge">
			<path strokeWidth="1.6" d="M76790.2,-147.684C76846.6,-149.155 76980.4,-152.645 77055.5,-154.604"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="77065.7,-154.87 77055.6,-159.108 77060.7,-155.04 77055.7,-154.909 77055.7,-154.609 77055.7,-154.31 77060.7,-154.44 77055.8,-150.111 77065.7,-154.87 77065.7,-154.87"/>
			<text textAnchor="middle" x="76928" y="-157.8">Ba96, Kr299, Mü22405, MüU151</text>
			</g>
			<g id="n432" className="node">
			<ellipse cx="77304" cy="-162" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="77304" y="-158.3">instanti, </text>
			</g>
			<g id="edge99" className="edge majority">
			<path strokeWidth="3" d="M77154.1,-157.347C77179.9,-158.153 77213.1,-159.191 77241.6,-160.082"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="77251.9,-160.403 77241.7,-164.588 77246.9,-161.246 77241.9,-161.09 77241.9,-160.09 77241.9,-159.091 77246.9,-159.247 77242,-155.592 77251.9,-160.403 77251.9,-160.403"/>
			<text textAnchor="middle" x="77203" y="-162.8">majority</text>
			</g>
			<g id="edge586" className="edge">
			<path strokeWidth="1.8" d="M77345.3,-173.197C77354.6,-175.446 77364.6,-177.558 77374,-179 77534.2,-203.598 77580.9,-162.156 77738,-202 77746.3,-204.112 77754.9,-207.491 77762.8,-211.091"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="77771.9,-215.52 77760.9,-215.192 77767.2,-213.692 77762.7,-211.505 77762.9,-211.145 77763.1,-210.785 77767.6,-212.973 77764.9,-207.099 77771.9,-215.52 77771.9,-215.52"/>
			<text textAnchor="middle" x="77556" y="-205.8">Go325, Kf133, Kr185, Kr299, Mü22405</text>
			</g>
			<g id="n435" className="node">
			<ellipse cx="77793" cy="-162" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="77793" y="-158.3">sicut </text>
			</g>
			<g id="edge1201" className="edge">
			<path strokeWidth="2" d="M77356.2,-162C77451.7,-162 77655.4,-162 77746.4,-162"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="77756.4,-162 77746.4,-166.5 77751.4,-162.5 77746.4,-162.5 77746.4,-162 77746.4,-161.5 77751.4,-161.5 77746.4,-157.5 77756.4,-162 77756.4,-162"/>
			<text textAnchor="middle" x="77556" y="-165.8">Ba96, Er16, Mü11475, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="n439" className="node">
			<ellipse cx="78191" cy="-276" rx="37.8943" ry="18"/>
			<text textAnchor="middle" x="78191" y="-272.3">prius </text>
			</g>
			<g id="edge1027" className="edge">
			<path strokeWidth="1.8" d="M77818.6,-233.075C77827.8,-235.18 77838.3,-237.408 77848,-239 77953,-256.295 78077.6,-267.441 78143.6,-272.618"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="78153.6,-273.398 78143.3,-277.113 78148.6,-273.411 78143.6,-273.025 78143.7,-272.626 78143.7,-272.227 78148.7,-272.613 78144,-268.14 78153.6,-273.398 78153.6,-273.398"/>
			<text textAnchor="middle" x="77990" y="-274.8">Go325, Gr314, Kf133, Kr299, Mü22405</text>
			</g>
			<g id="n441" className="node">
			<ellipse cx="78376" cy="-267" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="78376" y="-263.3">dictum </text>
			</g>
			<g id="edge87" className="edge">
			<path d="M77820,-225.513C77888.1,-222.04 78076.7,-215.052 78232,-234 78264.8,-237.998 78301,-246.404 78328.8,-253.731"/>
			<polygon fill="#000000" stroke="#000000" points="78338.6,-256.372 78327.8,-258.125 78333.8,-255.075 78329,-253.779 78329,-253.779 78329,-253.779 78333.8,-255.075 78330.1,-249.433 78338.6,-256.372 78338.6,-256.372"/>
			<text textAnchor="middle" x="78191" y="-237.8">Kr185</text>
			</g>
			<g id="n438" className="node">
			<ellipse cx="78191" cy="-116" rx="40.8928" ry="18"/>
			<text textAnchor="middle" x="78191" y="-112.3">primo </text>
			</g>
			<g id="edge858" className="edge">
			<path d="M77815.4,-147.674C77825,-142.037 77836.6,-136.165 77848,-133 77948.8,-104.953 78072.8,-107.446 78140.3,-111.736"/>
			<polygon fill="#000000" stroke="#000000" points="78150.6,-112.435 78140.4,-116.25 78145.7,-112.098 78140.7,-111.76 78140.7,-111.76 78140.7,-111.76 78145.7,-112.098 78141,-107.271 78150.6,-112.435 78150.6,-112.435"/>
			<text textAnchor="middle" x="77990" y="-136.8">Sg524</text>
			</g>
			<g id="edge207" className="edge">
			<path strokeWidth="1.6" d="M77826.8,-168.884C77833.8,-170.294 77841.1,-171.733 77848,-173 77973.8,-196.217 78022.6,-153.603 78132,-220 78143.4,-226.92 78140.7,-234.426 78150,-244 78153.5,-247.564 78157.3,-251.095 78161.2,-254.438"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="78169.2,-260.986 78158.6,-258.132 78165.1,-258.051 78161.3,-254.883 78161.5,-254.651 78161.7,-254.419 78165.5,-257.586 78164.3,-251.169 78169.2,-260.986 78169.2,-260.986"/>
			<text textAnchor="middle" x="77990" y="-223.8">Er16, Mü11475, Mü28315, MüU151</text>
			</g>
			<g id="n445" className="node">
			<ellipse cx="78732" cy="-217" rx="40.0939" ry="18"/>
			<text textAnchor="middle" x="78732" y="-213.3">prius, </text>
			</g>
			<g id="edge592" className="edge">
			<path d="M77829.5,-162C77898.8,-162 78057,-162 78190,-162 78190,-162 78190,-162 78552,-162 78604.8,-162 78621.1,-155.943 78670,-176 78679.4,-179.849 78679.7,-184.187 78688,-190 78691.3,-192.323 78694.8,-194.681 78698.4,-196.988"/>
			<polygon fill="#000000" stroke="#000000" points="78707.1,-202.565 78696.2,-200.961 78702.9,-199.868 78698.6,-197.171 78698.6,-197.171 78698.6,-197.171 78702.9,-199.868 78701.1,-193.382 78707.1,-202.565 78707.1,-202.565"/>
			<text textAnchor="middle" x="78376" y="-165.8">Ba96</text>
			</g>
			<g id="n447" className="node">
			<ellipse cx="79044" cy="-171" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="79044" y="-167.3">dictum </text>
			</g>
			<g id="edge601" className="edge">
			<path d="M78232,-116C78269.1,-116 78325.8,-116 78375,-116 78375,-116 78375,-116 78733,-116 78827.8,-116 78936.5,-141.253 78996.7,-157.536"/>
			<polygon fill="#000000" stroke="#000000" points="79006.6,-160.265 78995.8,-161.959 79001.8,-158.942 78997,-157.62 78997,-157.62 78997,-157.62 79001.8,-158.942 78998.2,-153.28 79006.6,-160.265 79006.6,-160.265"/>
			<text textAnchor="middle" x="78551" y="-119.8">Sg524</text>
			</g>
			<g id="edge914" className="edge majority">
			<path strokeWidth="2.6" d="M78228.6,-274.2C78254.7,-272.916 78290.3,-271.165 78319.9,-269.711"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="78330.1,-269.211 78320.3,-274.197 78325.1,-270.255 78320.1,-270.501 78320.1,-269.702 78320,-268.903 78325,-268.657 78319.8,-265.207 78330.1,-269.211 78330.1,-269.211"/>
			<text textAnchor="middle" x="78281" y="-276.8">majority</text>
			</g>
			<g id="n442" className="node">
			<ellipse cx="78551" cy="-263" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="78551" y="-259.3">est, </text>
			</g>
			<g id="edge452" className="edge majority">
			<path strokeWidth="2.6" d="M78422.5,-265.949C78449.6,-265.32 78483.9,-264.529 78510,-263.924"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="78520.3,-263.686 78510.4,-268.416 78515.4,-264.601 78510.4,-264.717 78510.3,-263.917 78510.3,-263.117 78515.3,-263.002 78510.2,-259.418 78520.3,-263.686 78520.3,-263.686"/>
			<text textAnchor="middle" x="78471" y="-268.8">majority</text>
			</g>
			<g id="n452" className="node">
			<ellipse cx="79644" cy="-225" rx="59.5901" ry="18"/>
			<text textAnchor="middle" x="79644" y="-221.3">postquam </text>
			</g>
			<g id="edge386" className="edge">
			<path d="M78395.2,-283.552C78425.1,-309.044 78487.7,-355 78550,-355 78550,-355 78550,-355 79407,-355 79493.6,-355 79578.4,-286.995 79618.7,-249.357"/>
			<polygon fill="#000000" stroke="#000000" points="79626.1,-242.263 79622,-252.417 79622.5,-245.71 79618.9,-249.158 79618.9,-249.158 79618.9,-249.158 79622.5,-245.71 79615.8,-245.898 79626.1,-242.263 79626.1,-242.263"/>
			<text textAnchor="middle" x="78818" y="-358.8">Go325</text>
			</g>
			<g id="edge1234" className="edge">
			<path d="M78570.7,-249.211C78579.2,-243.599 78589.7,-237.598 78600,-234 78626.1,-224.888 78656.6,-220.587 78681.6,-218.587"/>
			<polygon fill="#000000" stroke="#000000" points="78691.6,-217.885 78682,-223.074 78686.6,-218.235 78681.6,-218.585 78681.6,-218.585 78681.6,-218.585 78686.6,-218.235 78681.3,-214.096 78691.6,-217.885 78691.6,-217.885"/>
			<text textAnchor="middle" x="78635" y="-237.8">Kr185</text>
			</g>
			<g id="n444" className="node">
			<ellipse cx="78732" cy="-309" rx="43.5923" ry="18"/>
			<text textAnchor="middle" x="78732" y="-305.3">statim </text>
			</g>
			<g id="edge364" className="edge">
			<path d="M78578.6,-270.986C78585.5,-273.009 78593,-275.136 78600,-277 78627.6,-284.4 78658.7,-292.024 78683.7,-297.974"/>
			<polygon fill="#000000" stroke="#000000" points="78693.6,-300.333 78682.9,-302.403 78688.8,-299.179 78683.9,-298.024 78683.9,-298.024 78683.9,-298.024 78688.8,-299.179 78684.9,-293.646 78693.6,-300.333 78693.6,-300.333"/>
			<text textAnchor="middle" x="78635" y="-297.8">Gr314</text>
			</g>
			<g id="n443" className="node">
			<ellipse cx="78732" cy="-163" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="78732" y="-159.3">quod </text>
			</g>
			<g id="edge353" className="edge">
			<path d="M78561.2,-245.819C78569.5,-231.794 78583.1,-212.482 78600,-201 78625.8,-183.466 78659.7,-173.916 78686.6,-168.776"/>
			<polygon fill="#000000" stroke="#000000" points="78696.5,-167.014 78687.4,-173.194 78691.6,-167.889 78686.6,-168.763 78686.6,-168.763 78686.6,-168.763 78691.6,-167.889 78685.9,-164.333 78696.5,-167.014 78696.5,-167.014"/>
			<text textAnchor="middle" x="78635" y="-204.8">Mü28315</text>
			</g>
			<g id="edge1104" className="edge">
			<path strokeWidth="2" d="M78581.8,-263C78617.3,-263 78678.5,-263 78731,-263 78731,-263 78731,-263 79407,-263 79469.8,-263 79540.7,-249.737 79588.3,-238.882"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="79598.1,-236.608 79589.4,-243.255 79593.3,-238.227 79588.5,-239.358 79588.4,-238.871 79588.2,-238.384 79593.1,-237.253 79587.3,-234.488 79598.1,-236.608 79598.1,-236.608"/>
			<text textAnchor="middle" x="79044" y="-266.8">Er16, Kf133, Kr299, Mü11475, Mü22405, MüU151</text>
			</g>
			<g id="edge696" className="edge">
			<path d="M78757.4,-202.8C78768.3,-197.185 78781.4,-191.296 78794,-188 78859.1,-170.963 78936.9,-168.34 78987.9,-168.913"/>
			<polygon fill="#000000" stroke="#000000" points="78998.1,-169.074 78988,-173.415 78993.1,-168.995 78988.1,-168.916 78988.1,-168.916 78988.1,-168.916 78993.1,-168.995 78988.2,-164.416 78998.1,-169.074 78998.1,-169.074"/>
			<text textAnchor="middle" x="78818" y="-191.8">Ba96</text>
			</g>
			<g id="edge640" className="edge">
			<path d="M78772.4,-217.346C78913.4,-218.586 79393.9,-222.81 79574,-224.394"/>
			<polygon fill="#000000" stroke="#000000" points="79584.2,-224.483 79574.1,-228.895 79579.2,-224.439 79574.2,-224.395 79574.2,-224.395 79574.2,-224.395 79579.2,-224.439 79574.2,-219.895 79584.2,-224.483 79584.2,-224.483"/>
			<text textAnchor="middle" x="79292" y="-225.8">Kr185</text>
			</g>
			<g id="n446" className="node">
			<ellipse cx="79044" cy="-401" rx="27" ry="18"/>
			<text textAnchor="middle" x="79044" y="-397.3">ut </text>
			</g>
			<g id="edge961" className="edge">
			<path d="M78775.7,-309.478C78796,-310.476 78820.5,-312.806 78842,-318 78905.4,-333.321 78974.8,-365.792 79013.2,-385.269"/>
			<polygon fill="#000000" stroke="#000000" points="79022.3,-389.922 79011.4,-389.362 79017.9,-387.64 79013.4,-385.358 79013.4,-385.358 79013.4,-385.358 79017.9,-387.64 79015.5,-381.354 79022.3,-389.922 79022.3,-389.922"/>
			<text textAnchor="middle" x="78818" y="-321.8">Gr314</text>
			</g>
			<g id="edge782" className="edge">
			<path d="M78766.3,-156.64C78791.8,-152.096 78828,-146.382 78860,-144 79124.2,-124.349 79192.8,-114.463 79456,-144 79505.8,-149.59 79520.3,-148.276 79566,-169 79584.1,-177.225 79602.2,-190.096 79616.3,-201.426"/>
			<polygon fill="#000000" stroke="#000000" points="79624.1,-207.872 79613.6,-204.976 79620.3,-204.689 79616.4,-201.505 79616.4,-201.505 79616.4,-201.505 79620.3,-204.689 79619.3,-198.035 79624.1,-207.872 79624.1,-207.872"/>
			<text textAnchor="middle" x="79292" y="-135.8">Mü28315</text>
			</g>
			<g id="n449" className="node">
			<ellipse cx="79406" cy="-171" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="79406" y="-167.3">est, </text>
			</g>
			<g id="edge525" className="edge">
			<path strokeWidth="1.2" d="M79090.2,-171C79161.2,-171 79297.6,-171 79365.1,-171"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="79375.4,-171 79365.4,-175.5 79370.4,-171.1 79365.4,-171.1 79365.4,-171 79365.4,-170.9 79370.4,-170.9 79365.4,-166.5 79375.4,-171 79375.4,-171"/>
			<text textAnchor="middle" x="79292" y="-174.8">Ba96, Sg524</text>
			</g>
			<g id="n448" className="node">
			<ellipse cx="79406" cy="-401" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="79406" y="-397.3">angelus </text>
			</g>
			<g id="edge965" className="edge">
			<path d="M79071.2,-401C79128.4,-401 79265.8,-401 79345.4,-401"/>
			<polygon fill="#000000" stroke="#000000" points="79355.7,-401 79345.7,-405.5 79350.7,-401 79345.7,-401 79345.7,-401 79345.7,-401 79350.7,-401 79345.7,-396.5 79355.7,-401 79355.7,-401"/>
			<text textAnchor="middle" x="79292" y="-404.8">Gr314</text>
			</g>
			<g id="edge1286" className="edge">
			<path strokeWidth="1.2" d="M79436.6,-171.173C79468.9,-172.046 79522.1,-175.501 79566,-188 79579.8,-191.914 79594.1,-198.128 79606.6,-204.355"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="79615.7,-209.082 79604.8,-208.5 79611.3,-206.88 79606.8,-204.589 79606.9,-204.5 79606.9,-204.411 79611.3,-206.702 79608.9,-200.5 79615.7,-209.082 79615.7,-209.082"/>
			<text textAnchor="middle" x="79520" y="-191.8">Ba96, Sg524</text>
			</g>
			<g id="n450" className="node">
			<ellipse cx="79644" cy="-386" rx="54.6905" ry="18"/>
			<text textAnchor="middle" x="79644" y="-382.3">salutauit </text>
			</g>
			<g id="edge948" className="edge">
			<path d="M79455.3,-397.928C79491.4,-395.639 79540.9,-392.491 79580,-390.004"/>
			<polygon fill="#000000" stroke="#000000" points="79590.2,-389.355 79580.5,-394.48 79585.2,-389.672 79580.2,-389.989 79580.2,-389.989 79580.2,-389.989 79585.2,-389.672 79580,-385.498 79590.2,-389.355 79590.2,-389.355"/>
			<text textAnchor="middle" x="79520" y="-399.8">Gr314</text>
			</g>
			<g id="n454" className="node">
			<ellipse cx="79850" cy="-243" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="79850" y="-239.3">Maria </text>
			</g>
			<g id="edge46" className="edge majority">
			<path strokeWidth="3" d="M79701.6,-229.99C79732.1,-232.689 79769.6,-235.993 79799.1,-238.596"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="79809.2,-239.485 79798.8,-243.089 79804.1,-240.042 79799.1,-239.602 79799.2,-238.606 79799.3,-237.61 79804.3,-238.049 79799.6,-234.123 79809.2,-239.485 79809.2,-239.485"/>
			<text textAnchor="middle" x="79753" y="-240.8">majority</text>
			</g>
			<g id="n453" className="node">
			<ellipse cx="79850" cy="-383" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="79850" y="-379.3">beatam </text>
			</g>
			<g id="edge942" className="edge">
			<path d="M79698.6,-385.212C79727.2,-384.791 79762.5,-384.273 79791.6,-383.844"/>
			<polygon fill="#000000" stroke="#000000" points="79801.7,-383.696 79791.7,-388.343 79796.7,-383.77 79791.7,-383.843 79791.7,-383.843 79791.7,-383.843 79796.7,-383.77 79791.6,-379.344 79801.7,-383.696 79801.7,-383.696"/>
			<text textAnchor="middle" x="79753" y="-387.8">Gr314</text>
			</g>
			<g id="n456" className="node">
			<ellipse cx="80071" cy="-382" rx="55.7903" ry="18"/>
			<text textAnchor="middle" x="80071" y="-378.3">uirginem </text>
			</g>
			<g id="edge918" className="edge">
			<path d="M79898.3,-382.784C79929.4,-382.642 79970.5,-382.454 80004.7,-382.298"/>
			<polygon fill="#000000" stroke="#000000" points="80015.1,-382.251 80005.1,-386.796 80010.1,-382.274 80005.1,-382.296 80005.1,-382.296 80005.1,-382.296 80010.1,-382.274 80005.1,-377.796 80015.1,-382.251 80015.1,-382.251"/>
			<text textAnchor="middle" x="79951" y="-385.8">Gr314</text>
			</g>
			<g id="n459" className="node">
			<ellipse cx="80071" cy="-255" rx="66.0889" ry="18"/>
			<text textAnchor="middle" x="80071" y="-251.3">concensum </text>
			</g>
			<g id="edge255" className="edge">
			<path d="M79891.4,-245.215C79920.6,-246.811 79960.7,-249.012 79995.6,-250.922"/>
			<polygon fill="#000000" stroke="#000000" points="80005.7,-251.478 79995.5,-255.424 80000.7,-251.205 79995.7,-250.931 79995.7,-250.931 79995.7,-250.931 80000.7,-251.205 79996,-246.438 80005.7,-251.478 80005.7,-251.478"/>
			<text textAnchor="middle" x="79951" y="-253.8">Mü28315</text>
			</g>
			<g id="n457" className="node">
			<ellipse cx="80071" cy="-201" rx="57.6901" ry="18"/>
			<text textAnchor="middle" x="80071" y="-197.3">consensit </text>
			</g>
			<g id="edge810" className="edge">
			<path d="M79886,-233.886C79895.7,-231.499 79906.2,-229.028 79916,-227 79946.3,-220.729 79980.1,-214.887 80008.4,-210.336"/>
			<polygon fill="#000000" stroke="#000000" points="80018.5,-208.719 80009.3,-214.738 80013.6,-209.507 80008.6,-210.295 80008.6,-210.295 80008.6,-210.295 80013.6,-209.507 80007.9,-205.851 80018.5,-208.719 80018.5,-208.719"/>
			<text textAnchor="middle" x="79951" y="-230.8">Go325</text>
			</g>
			<g id="n458" className="node">
			<ellipse cx="80582" cy="-335" rx="65.7887" ry="18"/>
			<text textAnchor="middle" x="80582" y="-331.3">consensum </text>
			</g>
			<g id="edge77" className="edge majority">
			<path strokeWidth="2.6" d="M79875,-257.671C79914.2,-280.266 79995.3,-321 80070,-321 80070,-321 80070,-321 80400,-321 80436.7,-321 80477.5,-323.897 80511,-327.055"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="80521.2,-328.041 80510.8,-331.555 80516.1,-328.355 80511.1,-327.872 80511.2,-327.076 80511.3,-326.279 80516.3,-326.762 80511.6,-322.597 80521.2,-328.041 80521.2,-328.041"/>
			<text textAnchor="middle" x="80251" y="-324.8">majority</text>
			</g>
			<g id="n469" className="node">
			<ellipse cx="80953" cy="-251" rx="42.7926" ry="18"/>
			<text textAnchor="middle" x="80953" y="-247.3">uerbis </text>
			</g>
			<g id="edge91" className="edge">
			<path d="M80137.5,-254.456C80171.1,-254.222 80212.8,-254 80250,-254 80250,-254 80250,-254 80583,-254 80696,-254 80828.4,-252.577 80899.8,-251.691"/>
			<polygon fill="#000000" stroke="#000000" points="80909.9,-251.564 80900,-256.189 80904.9,-251.627 80899.9,-251.69 80899.9,-251.69 80899.9,-251.69 80904.9,-251.627 80899.9,-247.19 80909.9,-251.564 80909.9,-251.564"/>
			<text textAnchor="middle" x="80399" y="-257.8">Mü28315</text>
			</g>
			<g id="n460" className="node">
			<ellipse cx="80251" cy="-372" rx="27" ry="18"/>
			<text textAnchor="middle" x="80251" y="-368.3">et </text>
			</g>
			<g id="edge256" className="edge">
			<path d="M80126.4,-378.945C80154.6,-377.357 80188.4,-375.459 80213.5,-374.048"/>
			<polygon fill="#000000" stroke="#000000" points="80223.7,-373.476 80214,-378.53 80218.7,-373.757 80213.7,-374.037 80213.7,-374.037 80213.7,-374.037 80218.7,-373.757 80213.5,-369.544 80223.7,-373.476 80223.7,-373.476"/>
			<text textAnchor="middle" x="80179" y="-380.8">Gr314</text>
			</g>
			<g id="edge1357" className="edge">
			<path d="M80128.9,-201.482C80163.9,-201.738 80209.5,-202 80250,-202 80250,-202 80250,-202 80583,-202 80699.6,-202 80835.1,-226.327 80904.9,-240.699"/>
			<polygon fill="#000000" stroke="#000000" points="80914.8,-242.743 80904.1,-245.112 80909.9,-241.725 80905,-240.706 80905,-240.706 80905,-240.706 80909.9,-241.725 80905.9,-236.3 80914.8,-242.743 80914.8,-242.743"/>
			<text textAnchor="middle" x="80399" y="-205.8">Go325</text>
			</g>
			<g id="n462" className="node">
			<ellipse cx="80399" cy="-369" rx="32.4942" ry="18"/>
			<text textAnchor="middle" x="80399" y="-365.3">ipsa </text>
			</g>
			<g id="edge1066" className="edge">
			<path d="M80278.1,-371.464C80299.8,-371.018 80331.1,-370.375 80356.3,-369.858"/>
			<polygon fill="#000000" stroke="#000000" points="80366.3,-369.652 80356.4,-374.356 80361.3,-369.755 80356.3,-369.857 80356.3,-369.857 80356.3,-369.857 80361.3,-369.755 80356.2,-365.358 80366.3,-369.652 80366.3,-369.652"/>
			<text textAnchor="middle" x="80323" y="-373.8">Gr314</text>
			</g>
			<g id="edge441" className="edge">
			<path d="M80429.9,-363.386C80453.6,-358.929 80487.6,-352.54 80517.4,-346.952"/>
			<polygon fill="#000000" stroke="#000000" points="80527.3,-345.091 80518.3,-351.36 80522.4,-346.014 80517.5,-346.937 80517.5,-346.937 80517.5,-346.937 80522.4,-346.014 80516.6,-342.515 80527.3,-345.091 80527.3,-345.091"/>
			<text textAnchor="middle" x="80475" y="-361.8">Gr314</text>
			</g>
			<g id="n467" className="node">
			<ellipse cx="80953" cy="-305" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="80953" y="-301.3">uerbi </text>
			</g>
			<g id="edge163" className="edge">
			<path d="M80645.2,-329.945C80718.6,-323.977 80839,-314.187 80905,-308.818"/>
			<polygon fill="#000000" stroke="#000000" points="80915.2,-307.996 80905.6,-313.291 80910.2,-308.401 80905.2,-308.806 80905.2,-308.806 80905.2,-308.806 80910.2,-308.401 80904.8,-304.321 80915.2,-307.996 80915.2,-307.996"/>
			<text textAnchor="middle" x="80701" y="-330.8">Mü22405</text>
			</g>
			<g id="edge613" className="edge">
			<path d="M80619.5,-320.096C80633.9,-314.444 80650.6,-308.138 80666,-303 80704.6,-290.118 80714.2,-286.323 80754,-278 80803.4,-267.678 80860.5,-260.373 80900.7,-255.987"/>
			<polygon fill="#000000" stroke="#000000" points="80910.8,-254.908 80901.3,-260.446 80905.8,-255.439 80900.8,-255.971 80900.8,-255.971 80900.8,-255.971 80905.8,-255.439 80900.3,-251.497 80910.8,-254.908 80910.8,-254.908"/>
			<text textAnchor="middle" x="80701" y="-306.8">Ba96</text>
			</g>
			<g id="n461" className="node">
			<ellipse cx="81404" cy="-359" rx="42.7926" ry="18"/>
			<text textAnchor="middle" x="81404" y="-355.3">uerbis </text>
			</g>
			<g id="edge146" className="edge">
			<path strokeWidth="2.2" d="M80641.4,-342.789C80649.7,-343.669 80658,-344.446 80666,-345 80922.5,-362.841 81230.3,-361.302 81350.9,-359.813"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="81361,-359.684 81351,-364.312 81356,-360.348 81351,-360.412 81351,-359.812 81351,-359.212 81356,-359.148 81350.9,-355.313 81361,-359.684 81361,-359.684"/>
			<text textAnchor="middle" x="80953" y="-363.8">Er16, Kf133, Kr185, Kr299, Mü11475, MüU151, Sg524</text>
			</g>
			<g id="edge662" className="edge">
			<path d="M80622.5,-349.215C80689.4,-371.959 80829.7,-414 80952,-414 80952,-414 80952,-414 81886,-414 82039.3,-414 82219.7,-406.981 82311.9,-402.883"/>
			<polygon fill="#000000" stroke="#000000" points="82322.2,-402.423 82312.4,-407.366 82317.2,-402.647 82312.2,-402.871 82312.2,-402.871 82312.2,-402.871 82317.2,-402.647 82312,-398.375 82322.2,-402.423 82322.2,-402.423"/>
			<text textAnchor="middle" x="81404" y="-417.8">Gr314</text>
			</g>
			<g id="n471" className="node">
			<ellipse cx="81404" cy="-305" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="81404" y="-301.3">angelo </text>
			</g>
			<g id="edge103" className="edge">
			<path d="M80991.5,-305C81071.2,-305 81257.4,-305 81349.5,-305"/>
			<polygon fill="#000000" stroke="#000000" points="81359.7,-305 81349.7,-309.5 81354.7,-305 81349.7,-305 81349.7,-305 81349.7,-305 81354.7,-305 81349.7,-300.5 81359.7,-305 81359.7,-305"/>
			<text textAnchor="middle" x="81256" y="-308.8">Mü22405</text>
			</g>
			<g id="n474" className="node">
			<ellipse cx="81404" cy="-251" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="81404" y="-247.3">angeli </text>
			</g>
			<g id="edge388" className="edge">
			<path strokeWidth="1.4" d="M80996.2,-251C81078.9,-251 81261.6,-251 81351.3,-251"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="81361.5,-251 81351.5,-255.5 81356.5,-251.2 81351.5,-251.2 81351.5,-251 81351.5,-250.8 81356.5,-250.8 81351.5,-246.5 81361.5,-251 81361.5,-251"/>
			<text textAnchor="middle" x="81256" y="-254.8">Ba96, Go325, Mü28315</text>
			</g>
			<g id="n476" className="node">
			<ellipse cx="81885" cy="-206" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="81885" y="-202.3">adhibuit </text>
			</g>
			<g id="edge303" className="edge">
			<path strokeWidth="1.2" d="M81422.1,-234.613C81433.5,-224.82 81449.5,-213.287 81466,-208 81590.6,-168.162 81747,-183.444 81828.6,-195.968"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="81838.7,-197.555 81828.1,-200.44 81833.7,-196.874 81828.8,-196.094 81828.8,-195.996 81828.8,-195.897 81833.8,-196.677 81829.5,-191.551 81838.7,-197.555 81838.7,-197.555"/>
			<text textAnchor="middle" x="81639" y="-211.8">Ba96, Mü28315</text>
			</g>
			<g id="n481" className="node">
			<ellipse cx="81885" cy="-314" rx="37.0935" ry="18"/>
			<text textAnchor="middle" x="81885" y="-310.3">facta </text>
			</g>
			<g id="edge89" className="edge">
			<path d="M81441.3,-259.612C81449.4,-261.286 81458,-262.87 81466,-264 81618.6,-285.451 81661.2,-256.184 81812,-288 81823.8,-290.482 81836.2,-294.458 81847.4,-298.562"/>
			<polygon fill="#000000" stroke="#000000" points="81856.8,-302.167 81845.9,-302.804 81852.2,-300.384 81847.5,-298.6 81847.5,-298.6 81847.5,-298.6 81852.2,-300.384 81849.1,-294.396 81856.8,-302.167 81856.8,-302.167"/>
			<text textAnchor="middle" x="81639" y="-291.8">Go325</text>
			</g>
			<g id="n463" className="node">
			<ellipse cx="81885" cy="-260" rx="54.6905" ry="18"/>
			<text textAnchor="middle" x="81885" y="-256.3">adhybuit </text>
			</g>
			<g id="edge994" className="edge">
			<path d="M81438.3,-348.015C81447.2,-345.392 81456.9,-342.826 81466,-341 81617.7,-310.544 81670.6,-365.801 81812,-303 81821.8,-298.655 81821.1,-293.001 81830,-287 81834,-284.279 81838.4,-281.658 81842.8,-279.191"/>
			<polygon fill="#000000" stroke="#000000" points="81851.8,-274.36 81845.1,-283.039 81847.4,-276.715 81843,-279.069 81843,-279.069 81843,-279.069 81847.4,-276.715 81840.9,-275.099 81851.8,-274.36 81851.8,-274.36"/>
			<text textAnchor="middle" x="81639" y="-344.8">Kf133</text>
			</g>
			<g id="n464" className="node">
			<ellipse cx="81885" cy="-368" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="81885" y="-364.3">angeli </text>
			</g>
			<g id="edge359" className="edge">
			<path strokeWidth="2" d="M81447.1,-359.791C81534.8,-361.438 81736.8,-365.234 81832.2,-367.028"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="81842.5,-367.221 81832.4,-371.532 81837.5,-367.627 81832.5,-367.533 81832.5,-367.033 81832.5,-366.533 81837.5,-366.627 81832.6,-362.533 81842.5,-367.221 81842.5,-367.221"/>
			<text textAnchor="middle" x="81639" y="-369.8">Er16, Kr185, Kr299, Mü11475, MüU151, Sg524</text>
			</g>
			<g id="edge568" className="edge">
			<path d="M81432.1,-290.964C81437.8,-287.242 81443.4,-282.88 81448,-278 81459.4,-265.83 81451.9,-253.98 81466,-245 81498.5,-224.294 81773.9,-228.668 81812,-223 81818.8,-221.984 81826,-220.646 81833,-219.164"/>
			<polygon fill="#000000" stroke="#000000" points="81843.1,-216.913 81834.3,-223.475 81838.2,-217.997 81833.3,-219.082 81833.3,-219.082 81833.3,-219.082 81838.2,-217.997 81832.4,-214.689 81843.1,-216.913 81843.1,-216.913"/>
			<text textAnchor="middle" x="81639" y="-248.8">Mü22405</text>
			</g>
			<g id="n484" className="node">
			<ellipse cx="82374" cy="-152" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="82374" y="-148.3">factum </text>
			</g>
			<g id="edge1361" className="edge">
			<path d="M81939.2,-262.316C82038.7,-265.568 82247.7,-267.006 82304,-225 82321.6,-211.877 82307.4,-195.382 82322,-179 82325,-175.629 82328.5,-172.608 82332.3,-169.918"/>
			<polygon fill="#000000" stroke="#000000" points="82340.9,-164.55 82334.8,-173.678 82336.6,-167.209 82332.4,-169.867 82332.4,-169.867 82332.4,-169.867 82336.6,-167.209 82330,-166.056 82340.9,-164.55 82340.9,-164.55"/>
			<text textAnchor="middle" x="82131" y="-266.8">Kf133</text>
			</g>
			<g id="edge108" className="edge">
			<path strokeWidth="2" d="M81927.4,-367.315C82002.7,-366.596 82166.9,-367.45 82304,-385 82309.5,-385.71 82315.3,-386.644 82321,-387.699"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="82331.2,-389.706 82320.6,-392.192 82326.2,-389.232 82321.3,-388.267 82321.4,-387.776 82321.5,-387.286 82326.4,-388.25 82322.3,-383.361 82331.2,-389.706 82331.2,-389.706"/>
			<text textAnchor="middle" x="82131" y="-388.8">Er16, Kr185, Kr299, Mü11475, MüU151, Sg524</text>
			</g>
			<g id="edge366" className="edge">
			<path d="M81925,-194.397C81935.6,-191.594 81947.2,-188.871 81958,-187 82085.5,-164.971 82237.6,-156.637 82317.5,-153.616"/>
			<polygon fill="#000000" stroke="#000000" points="82327.8,-153.241 82318,-158.101 82322.8,-153.423 82317.9,-153.604 82317.9,-153.604 82317.9,-153.604 82322.8,-153.423 82317.7,-149.107 82327.8,-153.241 82327.8,-153.241"/>
			<text textAnchor="middle" x="82131" y="-190.8">Ba96</text>
			</g>
			<g id="n482" className="node">
			<ellipse cx="82374" cy="-206" rx="27" ry="18"/>
			<text textAnchor="middle" x="82374" y="-202.3">et </text>
			</g>
			<g id="edge1016" className="edge">
			<path d="M81937.2,-206C82036.1,-206 82251.3,-206 82336.9,-206"/>
			<polygon fill="#000000" stroke="#000000" points="82346.9,-206 82336.9,-210.5 82341.9,-206 82336.9,-206 82336.9,-206 82336.9,-206 82341.9,-206 82336.9,-201.5 82346.9,-206 82346.9,-206"/>
			<text textAnchor="middle" x="82131" y="-209.8">Mü22405</text>
			</g>
			<g id="n473" className="node">
			<ellipse cx="82868" cy="-260" rx="37.0935" ry="18"/>
			<text textAnchor="middle" x="82868" y="-256.3">facta </text>
			</g>
			<g id="edge947" className="edge">
			<path d="M81924.5,-217.801C81935.3,-220.64 81947,-223.332 81958,-225 82285.2,-274.656 82685.9,-266.467 82820.4,-261.863"/>
			<polygon fill="#000000" stroke="#000000" points="82830.8,-261.499 82820.9,-266.349 82825.8,-261.675 82820.8,-261.851 82820.8,-261.851 82820.8,-261.851 82825.8,-261.675 82820.6,-257.354 82830.8,-261.499 82830.8,-261.499"/>
			<text textAnchor="middle" x="82374" y="-265.8">Mü28315</text>
			</g>
			<g id="n478" className="node">
			<ellipse cx="83607" cy="-314" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="83607" y="-310.3">est </text>
			</g>
			<g id="edge1247" className="edge">
			<path d="M81922.3,-314C82003.3,-314 82204.5,-314 82373,-314 82373,-314 82373,-314 83274,-314 83380.8,-314 83507,-314 83568.5,-314"/>
			<polygon fill="#000000" stroke="#000000" points="83578.9,-314 83568.9,-318.5 83573.9,-314 83568.9,-314 83568.9,-314 83568.9,-314 83573.9,-314 83568.9,-309.5 83578.9,-314 83578.9,-314"/>
			<text textAnchor="middle" x="82868" y="-317.8">Go325</text>
			</g>
			<g id="edge376" className="edge">
			<path strokeWidth="1.2" d="M82413.5,-142.586C82559.4,-108.99 83089.4,-6.46539 83458,-190 83509.8,-215.771 83492.7,-257.778 83540,-291 83549.1,-297.393 83560.2,-302.157 83570.6,-305.639"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="83580.3,-308.596 83569.4,-309.994 83575.5,-307.238 83570.7,-305.784 83570.8,-305.688 83570.8,-305.593 83575.6,-307.046 83572.1,-301.383 83580.3,-308.596 83580.3,-308.596"/>
			<text textAnchor="middle" x="83003" y="-92.8">Ba96, Kf133</text>
			</g>
			<g id="n470" className="node">
			<ellipse cx="82868" cy="-366" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="82868" y="-362.3">uerbum </text>
			</g>
			<g id="edge616" className="edge">
			<path d="M82416,-389.179C82425.2,-387.131 82434.9,-385.243 82444,-384 82572.9,-366.471 82725.7,-364.574 82807.8,-365.074"/>
			<polygon fill="#000000" stroke="#000000" points="82817.9,-365.151 82807.9,-369.575 82812.9,-365.113 82807.9,-365.075 82807.9,-365.075 82807.9,-365.075 82812.9,-365.113 82807.9,-360.575 82817.9,-365.151 82817.9,-365.151"/>
			<text textAnchor="middle" x="82622" y="-387.8">Sg524</text>
			</g>
			<g id="edge189" className="edge">
			<path strokeWidth="2" d="M82391.9,-383.046C82405,-370.886 82424.2,-355.104 82444,-346 82590.6,-278.442 82641.9,-306.509 82800,-274 82807.7,-272.418 82815.9,-270.72 82823.8,-269.071"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="82833.6,-267.021 82824.7,-273.47 82828.8,-268.532 82823.9,-269.554 82823.8,-269.065 82823.7,-268.576 82828.6,-267.554 82822.9,-264.66 82833.6,-267.021 82833.6,-267.021"/>
			<text textAnchor="middle" x="82622" y="-349.8">Er16, Kr185, Kr299, Mü11475, MüU151, Wi3818</text>
			</g>
			<g id="n472" className="node">
			<ellipse cx="82868" cy="-421" rx="43.5923" ry="18"/>
			<text textAnchor="middle" x="82868" y="-417.3">statim </text>
			</g>
			<g id="edge326" className="edge">
			<path d="M82425.8,-402.168C82519.6,-406.173 82719.2,-414.692 82814.4,-418.754"/>
			<polygon fill="#000000" stroke="#000000" points="82824.6,-419.192 82814.5,-423.261 82819.6,-418.978 82814.6,-418.765 82814.6,-418.765 82814.6,-418.765 82819.6,-418.978 82814.8,-414.269 82824.6,-419.192 82824.6,-419.192"/>
			<text textAnchor="middle" x="82622" y="-420.8">Gr314</text>
			</g>
			<g id="edge258" className="edge">
			<path d="M82401.3,-204.405C82468.7,-200.993 82652.6,-195.923 82800,-231 82811.1,-233.651 82822.8,-238.043 82833.1,-242.616"/>
			<polygon fill="#000000" stroke="#000000" points="82842.3,-246.823 82831.3,-246.725 82837.7,-244.73 82833.2,-242.638 82833.2,-242.638 82833.2,-242.638 82837.7,-244.73 82835.1,-238.551 82842.3,-246.823 82842.3,-246.823"/>
			<text textAnchor="middle" x="82622" y="-234.8">Mü22405</text>
			</g>
			<g id="n475" className="node">
			<ellipse cx="83273" cy="-361" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="83273" y="-357.3">factum </text>
			</g>
			<g id="edge584" className="edge">
			<path d="M82918.4,-365.387C82993.9,-364.45 83137.6,-362.667 83216.6,-361.687"/>
			<polygon fill="#000000" stroke="#000000" points="83226.8,-361.56 83216.9,-366.184 83221.8,-361.622 83216.8,-361.685 83216.8,-361.685 83216.8,-361.685 83221.8,-361.622 83216.8,-357.185 83226.8,-361.56 83226.8,-361.56"/>
			<text textAnchor="middle" x="83003" y="-368.8">Sg524</text>
			</g>
			<g id="n479" className="node">
			<ellipse cx="83273" cy="-217" rx="27" ry="18"/>
			<text textAnchor="middle" x="83273" y="-213.3">et </text>
			</g>
			<g id="edge569" className="edge">
			<path strokeWidth="1.2" d="M82899.8,-250.436C82911,-247.27 82924,-244.038 82936,-242 83043.9,-223.654 83173.7,-218.771 83235.6,-217.471"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="83245.7,-217.28 83235.7,-221.969 83240.7,-217.475 83235.7,-217.57 83235.7,-217.47 83235.7,-217.37 83240.7,-217.275 83235.6,-212.971 83245.7,-217.28 83245.7,-217.28"/>
			<text textAnchor="middle" x="83003" y="-245.8">Mü11475, Wi3818</text>
			</g>
			<g id="edge849" className="edge">
			<path strokeWidth="2" d="M82905.3,-259.64C82997.9,-259.133 83249.9,-260.338 83458,-285 83496.8,-289.603 83540.7,-298.709 83570.6,-305.495"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="83580.5,-307.788 83569.8,-309.924 83575.5,-307.151 83570.7,-306.026 83570.8,-305.539 83570.9,-305.052 83575.8,-306.176 83571.8,-301.154 83580.5,-307.788 83580.5,-307.788"/>
			<text textAnchor="middle" x="83273" y="-288.8">Er16, Kr185, Kr299, Mü22405, Mü28315, MüU151</text>
			</g>
			<g id="n477" className="node">
			<ellipse cx="83273" cy="-416" rx="53.8905" ry="18"/>
			<text textAnchor="middle" x="83273" y="-412.3">concepit </text>
			</g>
			<g id="edge231" className="edge">
			<path d="M82911.7,-420.47C82982.9,-419.587 83126.1,-417.811 83208.9,-416.783"/>
			<polygon fill="#000000" stroke="#000000" points="83218.9,-416.659 83209,-421.282 83213.9,-416.721 83208.9,-416.783 83208.9,-416.783 83208.9,-416.783 83213.9,-416.721 83208.9,-412.283 83218.9,-416.659 83218.9,-416.659"/>
			<text textAnchor="middle" x="83003" y="-423.8">Gr314</text>
			</g>
			<g id="edge1068" className="edge">
			<path d="M83317.5,-355.649C83367.1,-349.452 83450.5,-338.716 83522,-328 83537.6,-325.656 83554.9,-322.824 83569.7,-320.323"/>
			<polygon fill="#000000" stroke="#000000" points="83579.9,-318.572 83570.8,-324.69 83575,-319.413 83570.1,-320.255 83570.1,-320.255 83570.1,-320.255 83575,-319.413 83569.3,-315.819 83579.9,-318.572 83579.9,-318.572"/>
			<text textAnchor="middle" x="83499" y="-336.8">Sg524</text>
			</g>
			<g id="n489" className="node">
			<ellipse cx="83801" cy="-314" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="83801" y="-310.3">per </text>
			</g>
			<g id="edge246" className="edge">
			<path d="M83322.9,-409.006C83360,-403.587 83412.3,-395.724 83458,-388 83589.9,-365.71 83625.7,-370.968 83754,-333 83758.4,-331.696 83763,-330.114 83767.4,-328.425"/>
			<polygon fill="#000000" stroke="#000000" points="83776.9,-324.625 83769.3,-332.515 83772.3,-326.481 83767.7,-328.336 83767.7,-328.336 83767.7,-328.336 83772.3,-326.481 83766,-324.157 83776.9,-324.625 83776.9,-324.625"/>
			<text textAnchor="middle" x="83607" y="-378.8">Gr314</text>
			</g>
			<g id="edge44" className="edge">
			<path strokeWidth="1.2" d="M83300,-218.902C83364.3,-223.953 83535.1,-239.591 83674,-272 83705.9,-279.446 83741.2,-291.571 83766.3,-300.883"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="83775.8,-304.426 83764.8,-305.12 83771,-302.76 83766.4,-301.001 83766.4,-300.907 83766.4,-300.814 83771.1,-302.573 83768,-296.695 83775.8,-304.426 83775.8,-304.426"/>
			<text textAnchor="middle" x="83607" y="-275.8">Mü11475, Wi3818</text>
			</g>
			<g id="edge1112" className="edge majority">
			<path strokeWidth="2.8" d="M83635.1,-314C83668.1,-314 83724,-314 83761.4,-314"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="83771.5,-314 83761.5,-318.5 83766.5,-314.9 83761.5,-314.9 83761.5,-314 83761.5,-313.1 83766.5,-313.1 83761.5,-309.5 83771.5,-314 83771.5,-314"/>
			<text textAnchor="middle" x="83723" y="-317.8">majority</text>
			</g>
			<g id="n486" className="node">
			<ellipse cx="84128" cy="-314" rx="53.8905" ry="18"/>
			<text textAnchor="middle" x="84128" y="-310.3">Spiritum </text>
			</g>
			<g id="edge670" className="edge">
			<path strokeWidth="1.6" d="M83830.3,-314C83882,-314 83993.1,-314 84063.7,-314"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="84073.8,-314 84063.8,-318.5 84068.8,-314.3 84063.8,-314.3 84063.8,-314 84063.8,-313.7 84068.8,-313.7 84063.8,-309.5 84073.8,-314 84073.8,-314"/>
			<text textAnchor="middle" x="83952" y="-317.8">Er16, Gr314, Kr185, Wi3818</text>
			</g>
			<g id="n491" className="node">
			<ellipse cx="84480" cy="-368" rx="53.8905" ry="18"/>
			<text textAnchor="middle" x="84480" y="-364.3">sanctum </text>
			</g>
			<g id="edge1294" className="edge">
			<path d="M83824.4,-325.013C83831.8,-328.138 83840.1,-331.183 83848,-333 84051.8,-379.775 84301.8,-376.309 84416.3,-371.479"/>
			<polygon fill="#000000" stroke="#000000" points="84426.6,-371.024 84416.8,-375.96 84421.6,-371.244 84416.6,-371.464 84416.6,-371.464 84416.6,-371.464 84421.6,-371.244 84416.5,-366.968 84426.6,-371.024 84426.6,-371.024"/>
			<text textAnchor="middle" x="84128" y="-375.8">Kf133</text>
			</g>
			<g id="n492" className="node">
			<ellipse cx="84686" cy="-273" rx="53.8905" ry="18"/>
			<text textAnchor="middle" x="84686" y="-269.3">Spiritum </text>
			</g>
			<g id="edge1216" className="edge majority">
			<path strokeWidth="2.4" d="M83829.7,-310.542C83878.9,-304.575 83984.5,-292.461 84074,-287 84273.8,-274.815 84510.8,-272.985 84621.8,-272.867"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="84631.8,-272.86 84621.8,-277.367 84626.8,-273.563 84621.8,-273.567 84621.8,-272.867 84621.8,-272.167 84626.8,-272.163 84621.8,-268.367 84631.8,-272.86 84631.8,-272.86"/>
			<text textAnchor="middle" x="84304" y="-283.8">majority</text>
			</g>
			<g id="edge59" className="edge">
			<path strokeWidth="1.6" d="M84182,-314.079C84238.6,-315.239 84330.9,-320.239 84408,-339 84418.4,-341.528 84429.3,-345.324 84439.3,-349.345"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="84448.6,-353.234 84437.6,-353.526 84443.8,-351.581 84439.2,-349.651 84439.3,-349.374 84439.5,-349.098 84444.1,-351.027 84441.1,-345.223 84448.6,-353.234 84448.6,-353.234"/>
			<text textAnchor="middle" x="84304" y="-342.8">Er16, Gr314, Kr185, Wi3818</text>
			</g>
			<g id="n494" className="node">
			<ellipse cx="84686" cy="-436" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="84686" y="-432.3">Marie </text>
			</g>
			<g id="edge664" className="edge">
			<path d="M84515.5,-381.633C84527.1,-386.057 84540,-390.883 84552,-395 84581.6,-405.172 84615.3,-415.541 84641.3,-423.307"/>
			<polygon fill="#000000" stroke="#000000" points="84650.9,-426.15 84640,-427.623 84646.1,-424.729 84641.3,-423.308 84641.3,-423.308 84641.3,-423.308 84646.1,-424.729 84642.6,-418.994 84650.9,-426.15 84650.9,-426.15"/>
			<text textAnchor="middle" x="84580" y="-415.8">Wi3818</text>
			</g>
			<g id="n493" className="node">
			<ellipse cx="84686" cy="-382" rx="27" ry="18"/>
			<text textAnchor="middle" x="84686" y="-378.3">et </text>
			</g>
			<g id="edge1172" className="edge">
			<path d="M84533,-371.569C84569.2,-374.051 84616.5,-377.297 84648.6,-379.505"/>
			<polygon fill="#000000" stroke="#000000" points="84658.9,-380.211 84648.6,-384.016 84653.9,-379.869 84649,-379.526 84649,-379.526 84649,-379.526 84653.9,-379.869 84649.3,-375.037 84658.9,-380.211 84658.9,-380.211"/>
			<text textAnchor="middle" x="84580" y="-379.8">Gr314</text>
			</g>
			<g id="edge830" className="edge">
			<path d="M84494.9,-350.636C84508,-335.454 84529,-314.01 84552,-302 84574,-290.505 84600.3,-283.561 84623.7,-279.369"/>
			<polygon fill="#000000" stroke="#000000" points="84633.9,-277.682 84624.7,-283.757 84628.9,-278.5 84624,-279.318 84624,-279.318 84624,-279.318 84628.9,-278.5 84623.3,-274.878 84633.9,-277.682 84633.9,-277.682"/>
			<text textAnchor="middle" x="84580" y="-305.8">Kf133</text>
			</g>
			<g id="n495" className="node">
			<ellipse cx="84686" cy="-490" rx="59.5901" ry="18"/>
			<text textAnchor="middle" x="84686" y="-486.3">sangwinis </text>
			</g>
			<g id="edge94" className="edge">
			<path d="M84497.3,-385.132C84511,-398.81 84531.5,-417.805 84552,-431 84578.4,-447.965 84610.4,-462.351 84636.5,-472.669"/>
			<polygon fill="#000000" stroke="#000000" points="84646.1,-476.421 84635.2,-476.995 84641.5,-474.611 84636.8,-472.801 84636.8,-472.801 84636.8,-472.801 84641.5,-474.611 84638.5,-468.606 84646.1,-476.421 84646.1,-476.421"/>
			<text textAnchor="middle" x="84580" y="-462.8">Er16</text>
			</g>
			<g id="n496" className="node">
			<ellipse cx="84902" cy="-328" rx="57.6901" ry="18"/>
			<text textAnchor="middle" x="84902" y="-324.3">sanguinis </text>
			</g>
			<g id="edge1103" className="edge">
			<path d="M84524.8,-357.79C84553.5,-351.556 84591.8,-344.032 84626,-340 84696.6,-331.69 84778,-328.985 84833.8,-328.178"/>
			<polygon fill="#000000" stroke="#000000" points="84843.9,-328.048 84834,-332.676 84838.9,-328.112 84833.9,-328.176 84833.9,-328.176 84833.9,-328.176 84838.9,-328.112 84833.9,-323.677 84843.9,-328.048 84843.9,-328.048"/>
			<text textAnchor="middle" x="84686" y="-343.8">Kr185</text>
			</g>
			<g id="n500" className="node">
			<ellipse cx="85495" cy="-388" rx="57.6901" ry="18"/>
			<text textAnchor="middle" x="85495" y="-384.3">sanguinis </text>
			</g>
			<g id="edge841" className="edge">
			<path d="M84727.6,-434.948C84837.2,-431.885 85148.3,-421.709 85406,-399 85414.3,-398.272 85423,-397.362 85431.5,-396.38"/>
			<polygon fill="#000000" stroke="#000000" points="85441.5,-395.201 85432.1,-400.845 85436.5,-395.789 85431.6,-396.376 85431.6,-396.376 85431.6,-396.376 85436.5,-395.789 85431,-391.907 85441.5,-395.201 85441.5,-395.201"/>
			<text textAnchor="middle" x="84902" y="-434.8">Wi3818</text>
			</g>
			<g id="edge169" className="edge">
			<path d="M84713.4,-382.196C84824.8,-383.025 85258.7,-386.25 85426.9,-387.501"/>
			<polygon fill="#000000" stroke="#000000" points="85437.1,-387.577 85427,-392.002 85432.1,-387.54 85427.1,-387.502 85427.1,-387.502 85427.1,-387.502 85432.1,-387.54 85427.1,-383.002 85437.1,-387.577 85437.1,-387.577"/>
			<text textAnchor="middle" x="84902" y="-387.8">Gr314</text>
			</g>
			<g id="edge440" className="edge">
			<path d="M84734,-281.255C84761.1,-286.4 84795.7,-293.626 84826,-302 84835.4,-304.589 84845.3,-307.724 84854.7,-310.908"/>
			<polygon fill="#000000" stroke="#000000" points="84864.3,-314.223 84853.4,-315.215 84859.6,-312.592 84854.8,-310.961 84854.8,-310.961 84854.8,-310.961 84859.6,-312.592 84856.3,-306.707 84864.3,-314.223 84864.3,-314.223"/>
			<text textAnchor="middle" x="84795" y="-305.8">Kf133</text>
			</g>
			<g id="n497" className="node">
			<ellipse cx="84902" cy="-268" rx="53.8905" ry="18"/>
			<text textAnchor="middle" x="84902" y="-264.3">sanctum </text>
			</g>
			<g id="edge1260" className="edge majority">
			<path strokeWidth="2.4" d="M84736.2,-266.384C84745.4,-265.391 84755,-264.524 84764,-264 84791.5,-262.398 84798.5,-263.266 84826,-264 84830,-264.106 84834.1,-264.245 84838.2,-264.405"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="84848.6,-264.847 84838.4,-268.915 84843.5,-265.332 84838.5,-265.119 84838.6,-264.419 84838.6,-263.72 84843.6,-263.934 84838.8,-259.923 84848.6,-264.847 84848.6,-264.847"/>
			<text textAnchor="middle" x="84795" y="-267.8">majority</text>
			</g>
			<g id="n502" className="node">
			<ellipse cx="86085" cy="-388" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="86085" y="-384.3">Marie </text>
			</g>
			<g id="edge1307" className="edge">
			<path d="M84745.8,-491.177C84887.2,-493.479 85257.9,-496.339 85566,-471 85765.6,-454.584 85815.7,-446.836 86012,-407 86021.1,-405.149 86030.8,-402.837 86040,-400.47"/>
			<polygon fill="#000000" stroke="#000000" points="86049.8,-397.899 86041.2,-404.799 86044.9,-399.173 86040.1,-400.447 86040.1,-400.447 86040.1,-400.447 86044.9,-399.173 86038.9,-396.096 86049.8,-397.899 86049.8,-397.899"/>
			<text textAnchor="middle" x="85192" y="-495.8">Er16</text>
			</g>
			<g id="n498" className="node">
			<ellipse cx="85495" cy="-444" rx="70.6878" ry="18"/>
			<text textAnchor="middle" x="85495" y="-440.3">congregacio </text>
			</g>
			<g id="edge705" className="edge">
			<path d="M84931.2,-343.561C84940.5,-348.895 84950.8,-355.029 84960,-361 84968.3,-366.368 84968.8,-370.338 84978,-374 85124,-432.356 85309.9,-443.726 85414,-445.02"/>
			<polygon fill="#000000" stroke="#000000" points="85424.1,-445.118 85414.1,-449.521 85419.1,-445.07 85414.1,-445.021 85414.1,-445.021 85414.1,-445.021 85419.1,-445.07 85414.1,-440.522 85424.1,-445.118 85424.1,-445.118"/>
			<text textAnchor="middle" x="85192" y="-447.8">Kr185</text>
			</g>
			<g id="edge1209" className="edge">
			<path d="M84960,-328.044C85053.2,-328.31 85244.3,-329.666 85406,-336 85641.6,-345.233 85922.4,-371.72 86034.3,-382.911"/>
			<polygon fill="#000000" stroke="#000000" points="86044.3,-383.914 86033.9,-387.392 86039.3,-383.414 86034.4,-382.915 86034.4,-382.915 86034.4,-382.915 86039.3,-383.414 86034.8,-378.437 86044.3,-383.914 86044.3,-383.914"/>
			<text textAnchor="middle" x="85495" y="-346.8">Kf133</text>
			</g>
			<g id="n499" className="node">
			<ellipse cx="85495" cy="-268" rx="53.8905" ry="18"/>
			<text textAnchor="middle" x="85495" y="-264.3">sagwinis </text>
			</g>
			<g id="edge1368" className="edge">
			<path d="M84956,-268C85064.9,-268 85313.5,-268 85430.7,-268"/>
			<polygon fill="#000000" stroke="#000000" points="85440.9,-268 85430.9,-272.5 85435.9,-268 85430.9,-268 85430.9,-268 85430.9,-268 85435.9,-268 85430.9,-263.5 85440.9,-268 85440.9,-268"/>
			<text textAnchor="middle" x="85192" y="-271.8">Mü11475</text>
			</g>
			<g id="edge1150" className="edge">
			<path strokeWidth="2.2" d="M84944.5,-279.209C84955.4,-281.95 84967.1,-284.742 84978,-287 85166.7,-326.03 85219.5,-307.527 85406,-356 85420.4,-359.752 85435.8,-364.924 85449.6,-370.016"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="85459.4,-373.689 85448.4,-374.37 85454.5,-372.486 85449.8,-370.721 85450,-370.16 85450.2,-369.598 85454.9,-371.363 85451.6,-365.949 85459.4,-373.689 85459.4,-373.689"/>
			<text textAnchor="middle" x="85192" y="-359.8">Ba96, Go325, Kr299, Mü22405, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="edge594" className="edge">
			<path d="M85540.7,-258.237C85634.4,-240.203 85855.7,-210.575 86012,-293 86039.9,-307.699 86060.1,-338.515 86071.8,-361.08"/>
			<polygon fill="#000000" stroke="#000000" points="86076.4,-370.174 86067.9,-363.232 86074.1,-365.699 86071.9,-361.224 86071.9,-361.224 86071.9,-361.224 86074.1,-365.699 86075.9,-359.216 86076.4,-370.174 86076.4,-370.174"/>
			<text textAnchor="middle" x="85798" y="-296.8">Mü11475</text>
			</g>
			<g id="n521" className="node">
			<ellipse cx="87442" cy="-458" rx="27" ry="18"/>
			<text textAnchor="middle" x="87442" y="-454.3">et </text>
			</g>
			<g id="edge11" className="edge">
			<path d="M85539,-458.208C85635.3,-488.767 85876.6,-558 86084,-558 86084,-558 86084,-558 87253,-558 87319.1,-558 87384.6,-509.195 87418.1,-479.776"/>
			<polygon fill="#000000" stroke="#000000" points="87425.9,-472.755 87421.5,-482.79 87422.2,-476.1 87418.4,-479.445 87418.4,-479.445 87418.4,-479.445 87422.2,-476.1 87415.4,-476.1 87425.9,-472.755 87425.9,-472.755"/>
			<text textAnchor="middle" x="86635" y="-561.8">Kr185</text>
			</g>
			<g id="edge688" className="edge">
			<path strokeWidth="2.2" d="M85552.9,-388C85667.4,-388 85923.9,-388 86033.1,-388"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="86043.2,-388 86033.2,-392.5 86038.2,-388.6 86033.2,-388.6 86033.2,-388 86033.2,-387.4 86038.2,-387.4 86033.2,-383.5 86043.2,-388 86043.2,-388"/>
			<text textAnchor="middle" x="85798" y="-391.8">Ba96, Go325, Gr314, Mü22405, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="n503" className="node">
			<ellipse cx="86310" cy="-442" rx="70.6878" ry="18"/>
			<text textAnchor="middle" x="86310" y="-438.3">congregacio </text>
			</g>
			<g id="edge680" className="edge">
			<path strokeWidth="1.2" d="M85541,-399.133C85554.7,-402.147 85569.9,-405.097 85584,-407 85837.2,-441.178 85902.7,-429.35 86158,-439 86181.1,-439.871 86206.1,-440.498 86229,-440.945"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="86239.1,-441.132 86229,-445.445 86234.1,-441.139 86229.1,-441.046 86229.1,-440.946 86229.1,-440.846 86234.1,-440.939 86229.2,-436.447 86239.1,-441.132 86239.1,-441.132"/>
			<text textAnchor="middle" x="86085" y="-441.8">Kr299, Wi3818</text>
			</g>
			<g id="edge372" className="edge majority">
			<path strokeWidth="2.6" d="M86120.7,-397.393C86132.5,-400.526 86145.8,-403.984 86158,-407 86187,-414.176 86219.2,-421.702 86246.4,-427.929"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="86256.1,-430.161 86245.4,-432.323 86251.1,-429.828 86246.2,-428.716 86246.4,-427.936 86246.6,-427.156 86251.4,-428.268 86247.4,-423.548 86256.1,-430.161 86256.1,-430.161"/>
			<text textAnchor="middle" x="86189" y="-423.8">majority</text>
			</g>
			<g id="n504" className="node">
			<ellipse cx="86310" cy="-388" rx="71.4873" ry="18"/>
			<text textAnchor="middle" x="86310" y="-384.3">congregatus </text>
			</g>
			<g id="edge39" className="edge">
			<path d="M86126.6,-388C86155,-388 86193.8,-388 86228.3,-388"/>
			<polygon fill="#000000" stroke="#000000" points="86238.4,-388 86228.4,-392.5 86233.4,-388 86228.4,-388 86228.4,-388 86228.4,-388 86233.4,-388 86228.4,-383.5 86238.4,-388 86238.4,-388"/>
			<text textAnchor="middle" x="86189" y="-391.8">Gr314</text>
			</g>
			<g id="n508" className="node">
			<ellipse cx="86635" cy="-435" rx="27" ry="18"/>
			<text textAnchor="middle" x="86635" y="-431.3">et </text>
			</g>
			<g id="edge694" className="edge majority">
			<path strokeWidth="3" d="M86380.7,-440.49C86447.3,-439.046 86545.2,-436.925 86597.6,-435.789"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="86607.8,-435.568 86597.9,-440.284 86602.8,-436.677 86597.8,-436.785 86597.8,-435.785 86597.8,-434.785 86602.8,-434.677 86597.7,-431.286 86607.8,-435.568 86607.8,-435.568"/>
			<text textAnchor="middle" x="86495" y="-441.8">majority</text>
			</g>
			<g id="n506" className="node">
			<ellipse cx="86495" cy="-388" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="86495" y="-384.3">est </text>
			</g>
			<g id="edge764" className="edge">
			<path d="M86381.8,-388C86407.3,-388 86435.2,-388 86456.8,-388"/>
			<polygon fill="#000000" stroke="#000000" points="86466.8,-388 86456.8,-392.5 86461.8,-388 86456.8,-388 86456.8,-388 86456.8,-388 86461.8,-388 86456.8,-383.5 86466.8,-388 86466.8,-388"/>
			<text textAnchor="middle" x="86423" y="-391.8">Gr314</text>
			</g>
			<g id="edge1300" className="edge">
			<path d="M86522,-393.408C86541.1,-397.749 86567.6,-404.513 86590,-413 86594.9,-414.842 86599.9,-417.054 86604.8,-419.355"/>
			<polygon fill="#000000" stroke="#000000" points="86613.8,-423.816 86602.8,-423.418 86609.3,-421.6 86604.8,-419.384 86604.8,-419.384 86604.8,-419.384 86609.3,-421.6 86606.8,-415.35 86613.8,-423.816 86613.8,-423.816"/>
			<text textAnchor="middle" x="86567" y="-416.8">Gr314</text>
			</g>
			<g id="n511" className="node">
			<ellipse cx="86801" cy="-416" rx="40.8928" ry="18"/>
			<text textAnchor="middle" x="86801" y="-412.3">ipsius </text>
			</g>
			<g id="edge286" className="edge majority">
			<path strokeWidth="3" d="M86662,-431.989C86685.9,-429.219 86722,-425.038 86751.3,-421.646"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="86761.3,-420.482 86751.9,-426.103 86756.5,-422.051 86751.5,-422.627 86751.4,-421.633 86751.3,-420.64 86756.2,-420.065 86750.9,-417.163 86761.3,-420.482 86761.3,-420.482"/>
			<text textAnchor="middle" x="86711" y="-432.8">majority</text>
			</g>
			<g id="n510" className="node">
			<ellipse cx="86801" cy="-502" rx="27" ry="18"/>
			<text textAnchor="middle" x="86801" y="-498.3">in </text>
			</g>
			<g id="edge1162" className="edge">
			<path d="M86658.5,-444.176C86686.8,-455.771 86735.9,-475.801 86768.1,-488.976"/>
			<polygon fill="#000000" stroke="#000000" points="86777.5,-492.828 86766.6,-493.212 86772.9,-490.937 86768.3,-489.046 86768.3,-489.046 86768.3,-489.046 86772.9,-490.937 86770,-484.88 86777.5,-492.828 86777.5,-492.828"/>
			<text textAnchor="middle" x="86711" y="-479.8">Gr314</text>
			</g>
			<g id="n514" className="node">
			<ellipse cx="87042" cy="-458" rx="62.2891" ry="18"/>
			<text textAnchor="middle" x="87042" y="-454.3">consolacio </text>
			</g>
			<g id="edge1152" className="edge">
			<path strokeWidth="1.2" d="M86838.2,-423.712C86845.4,-425.188 86852.9,-426.682 86860,-428 86898.6,-435.192 86942,-442.417 86976.7,-447.974"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="86986.6,-449.569 86976.1,-452.435 86981.7,-448.879 86976.8,-448.091 86976.8,-447.992 86976.8,-447.893 86981.7,-448.682 86977.5,-443.548 86986.6,-449.569 86986.6,-449.569"/>
			<text textAnchor="middle" x="86906" y="-446.8">Ba96, Sg524</text>
			</g>
			<g id="n513" className="node">
			<ellipse cx="87042" cy="-350" rx="54.6905" ry="18"/>
			<text textAnchor="middle" x="87042" y="-346.3">solidacio </text>
			</g>
			<g id="edge857" className="edge">
			<path d="M86828.1,-402.358C86837.9,-397.625 86849.3,-392.606 86860,-389 86899.8,-375.636 86946.1,-365.757 86981.9,-359.285"/>
			<polygon fill="#000000" stroke="#000000" points="86992.2,-357.468 86983.1,-363.64 86987.3,-358.339 86982.3,-359.209 86982.3,-359.209 86982.3,-359.209 86987.3,-358.339 86981.6,-354.777 86992.2,-357.468 86992.2,-357.468"/>
			<text textAnchor="middle" x="86906" y="-392.8">Er16</text>
			</g>
			<g id="n517" className="node">
			<ellipse cx="87042" cy="-404" rx="71.4873" ry="18"/>
			<text textAnchor="middle" x="87042" y="-400.3">consolidacio </text>
			</g>
			<g id="edge1045" className="edge majority">
			<path strokeWidth="2.4" d="M86841.9,-413.924C86848,-413.612 86854.2,-413.296 86860,-413 86893.2,-411.317 86929.8,-409.492 86961.3,-407.928"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="86971.4,-407.429 86961.6,-412.419 86966.4,-408.376 86961.4,-408.623 86961.4,-407.924 86961.4,-407.225 86966.3,-406.978 86961.2,-403.43 86971.4,-407.429 86971.4,-407.429"/>
			<text textAnchor="middle" x="86906" y="-416.8">majority</text>
			</g>
			<g id="n515" className="node">
			<ellipse cx="87042" cy="-512" rx="32.4942" ry="18"/>
			<text textAnchor="middle" x="87042" y="-508.3">ipsa </text>
			</g>
			<g id="edge693" className="edge">
			<path d="M86828,-503.089C86869.3,-504.814 86949.9,-508.19 86999.3,-510.255"/>
			<polygon fill="#000000" stroke="#000000" points="87009.3,-510.675 86999.2,-514.753 87004.3,-510.466 86999.3,-510.257 86999.3,-510.257 86999.3,-510.257 87004.3,-510.466 86999.5,-505.761 87009.3,-510.675 87009.3,-510.675"/>
			<text textAnchor="middle" x="86906" y="-511.8">Gr314</text>
			</g>
			<g id="edge10" className="edge">
			<path strokeWidth="1.2" d="M87104.8,-458C87188.7,-458 87336.1,-458 87404.4,-458"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="87414.7,-458 87404.7,-462.5 87409.7,-458.1 87404.7,-458.1 87404.7,-458 87404.7,-457.9 87409.7,-457.9 87404.7,-453.5 87414.7,-458 87414.7,-458"/>
			<text textAnchor="middle" x="87252" y="-461.8">Ba96, Sg524</text>
			</g>
			<g id="n518" className="node">
			<ellipse cx="87252" cy="-351" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="87252" y="-347.3">eciam </text>
			</g>
			<g id="edge1191" className="edge">
			<path d="M87096.8,-350.259C87128.6,-350.412 87168.7,-350.604 87199.9,-350.755"/>
			<polygon fill="#000000" stroke="#000000" points="87210.2,-350.804 87200.2,-355.256 87205.2,-350.78 87200.2,-350.756 87200.2,-350.756 87200.2,-350.756 87205.2,-350.78 87200.2,-346.256 87210.2,-350.804 87210.2,-350.804"/>
			<text textAnchor="middle" x="87155" y="-353.8">Er16</text>
			</g>
			<g id="n519" className="node">
			<ellipse cx="87252" cy="-511" rx="55.7903" ry="18"/>
			<text textAnchor="middle" x="87252" y="-507.3">solidatus </text>
			</g>
			<g id="edge1231" className="edge">
			<path d="M87074.6,-511.848C87104,-511.707 87148.7,-511.492 87185.8,-511.314"/>
			<polygon fill="#000000" stroke="#000000" points="87196,-511.264 87186,-515.813 87191,-511.289 87186,-511.313 87186,-511.313 87186,-511.313 87191,-511.289 87186,-506.813 87196,-511.264 87196,-511.264"/>
			<text textAnchor="middle" x="87155" y="-514.8">Gr314</text>
			</g>
			<g id="edge813" className="edge majority">
			<path strokeWidth="2.4" d="M87105.9,-412.122C87159.6,-419.099 87238.9,-429.505 87308,-439 87341,-443.543 87378.7,-448.94 87405.5,-452.819"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="87415.5,-454.277 87405,-457.295 87410.5,-454.252 87405.5,-453.534 87405.6,-452.841 87405.7,-452.149 87410.7,-452.867 87406.3,-448.388 87415.5,-454.277 87415.5,-454.277"/>
			<text textAnchor="middle" x="87252" y="-442.8">majority</text>
			</g>
			<g id="n520" className="node">
			<ellipse cx="87442" cy="-352" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="87442" y="-348.3">corporis </text>
			</g>
			<g id="edge761" className="edge">
			<path d="M87293.8,-351.217C87318.9,-351.351 87351.5,-351.524 87379.7,-351.674"/>
			<polygon fill="#000000" stroke="#000000" points="87389.9,-351.728 87379.9,-356.175 87384.9,-351.701 87379.9,-351.675 87379.9,-351.675 87379.9,-351.675 87384.9,-351.701 87379.9,-347.175 87389.9,-351.728 87389.9,-351.728"/>
			<text textAnchor="middle" x="87349" y="-354.8">Er16</text>
			</g>
			<g id="edge209" className="edge">
			<path d="M87294.7,-499.238C87328.6,-489.689 87375.7,-476.396 87407.3,-467.511"/>
			<polygon fill="#000000" stroke="#000000" points="87416.9,-464.791 87408.5,-471.835 87412.1,-466.147 87407.3,-467.504 87407.3,-467.504 87407.3,-467.504 87412.1,-466.147 87406.1,-463.173 87416.9,-464.791 87416.9,-464.791"/>
			<text textAnchor="middle" x="87349" y="-492.8">Gr314</text>
			</g>
			<g id="n524" className="node">
			<ellipse cx="87840" cy="-404" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="87840" y="-400.3">Christi </text>
			</g>
			<g id="edge511" className="edge">
			<path d="M87494.3,-350.354C87545.6,-349.562 87626.8,-350.651 87696,-362 87730.5,-367.658 87768.4,-379.038 87796.5,-388.526"/>
			<polygon fill="#000000" stroke="#000000" points="87806,-391.791 87795.1,-392.802 87801.3,-390.168 87796.6,-388.545 87796.6,-388.545 87796.6,-388.545 87801.3,-390.168 87798,-384.289 87806,-391.791 87806,-391.791"/>
			<text textAnchor="middle" x="87644" y="-365.8">Er16</text>
			</g>
			<g id="n522" className="node">
			<ellipse cx="87644" cy="-404" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="87644" y="-400.3">corporis </text>
			</g>
			<g id="edge544" className="edge majority">
			<path strokeWidth="3" d="M87467.3,-451.272C87480.5,-447.617 87497.1,-443.034 87512,-439 87538.6,-431.796 87568.2,-423.873 87592.5,-417.39"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="87602.3,-414.798 87593.8,-421.719 87597.7,-417.05 87592.9,-418.336 87592.6,-417.37 87592.3,-416.403 87597.2,-415.118 87591.4,-413.021 87602.3,-414.798 87602.3,-414.798"/>
			<text textAnchor="middle" x="87543" y="-442.8">majority</text>
			</g>
			<g id="n523" className="node">
			<ellipse cx="87644" cy="-458" rx="45.4919" ry="18"/>
			<text textAnchor="middle" x="87644" y="-454.3">corpus </text>
			</g>
			<g id="edge1297" className="edge">
			<path d="M87469.1,-458C87499.3,-458 87549.6,-458 87588.4,-458"/>
			<polygon fill="#000000" stroke="#000000" points="87598.5,-458 87588.5,-462.5 87593.5,-458 87588.5,-458 87588.5,-458 87588.5,-458 87593.5,-458 87588.5,-453.5 87598.5,-458 87598.5,-458"/>
			<text textAnchor="middle" x="87543" y="-461.8">Gr314</text>
			</g>
			<g id="edge1059" className="edge majority">
			<path strokeWidth="3" d="M87696.2,-404C87723.1,-404 87756.1,-404 87783.5,-404"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="87793.8,-404 87783.8,-408.5 87788.8,-405 87783.8,-405 87783.8,-404 87783.8,-403 87788.8,-403 87783.8,-399.5 87793.8,-404 87793.8,-404"/>
			<text textAnchor="middle" x="87745" y="-407.8">majority</text>
			</g>
			<g id="edge558" className="edge">
			<path d="M87682.6,-448.283C87708.9,-441.429 87744.6,-431.916 87776,-423 87781.6,-421.399 87787.5,-419.677 87793.4,-417.948"/>
			<polygon fill="#000000" stroke="#000000" points="87803.1,-415.049 87794.8,-422.223 87798.3,-416.48 87793.5,-417.911 87793.5,-417.911 87793.5,-417.911 87798.3,-416.48 87792.2,-413.599 87803.1,-415.049 87803.1,-415.049"/>
			<text textAnchor="middle" x="87745" y="-442.8">Gr314</text>
			</g>
			<g id="n527" className="node">
			<ellipse cx="88034" cy="-344" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="88034" y="-340.3">formata </text>
			</g>
			<g id="edge1292" className="edge">
			<path d="M87876.7,-392.855C87907.5,-383.231 87952.2,-369.255 87985.9,-358.714"/>
			<polygon fill="#000000" stroke="#000000" points="87995.6,-355.7 87987.4,-362.978 87990.8,-357.191 87986,-358.683 87986,-358.683 87986,-358.683 87990.8,-357.191 87984.7,-354.388 87995.6,-355.7 87995.6,-355.7"/>
			<text textAnchor="middle" x="87935" y="-385.8">Gr314</text>
			</g>
			<g id="n529" className="node">
			<ellipse cx="88034" cy="-404" rx="27" ry="18"/>
			<text textAnchor="middle" x="88034" y="-400.3">ex </text>
			</g>
			<g id="edge1009" className="edge">
			<path d="M87886.5,-404C87920.2,-404 87965.4,-404 87996.7,-404"/>
			<polygon fill="#000000" stroke="#000000" points="88006.7,-404 87996.7,-408.5 88001.7,-404 87996.7,-404 87996.7,-404 87996.7,-404 88001.7,-404 87996.7,-399.5 88006.7,-404 88006.7,-404"/>
			<text textAnchor="middle" x="87935" y="-407.8">Kr185</text>
			</g>
			<g id="n526" className="node">
			<ellipse cx="88034" cy="-469" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="88034" y="-465.3">exinde </text>
			</g>
			<g id="edge575" className="edge majority">
			<path strokeWidth="2.8" d="M87875.3,-415.621C87907.2,-426.422 87954.9,-442.56 87989.5,-454.262"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="87999.3,-457.589 87988.4,-458.645 87994.3,-456.838 87989.5,-455.235 87989.8,-454.382 87990.1,-453.53 87994.8,-455.133 87991.3,-450.12 87999.3,-457.589 87999.3,-457.589"/>
			<text textAnchor="middle" x="87935" y="-449.8">majority</text>
			</g>
			<g id="n530" className="node">
			<ellipse cx="88262" cy="-518" rx="54.6905" ry="18"/>
			<text textAnchor="middle" x="88262" y="-514.3">formacio </text>
			</g>
			<g id="edge1320" className="edge">
			<path d="M87855.3,-421.19C87867.2,-434.601 87885.2,-452.922 87904,-465 87983.5,-515.959 88009.2,-524.59 88102,-542 88132.6,-547.736 88141.2,-546.085 88172,-542 88185.5,-540.208 88199.9,-536.947 88213.1,-533.395"/>
			<polygon fill="#000000" stroke="#000000" points="88222.9,-530.641 88214.5,-537.678 88218.1,-531.993 88213.3,-533.345 88213.3,-533.345 88213.3,-533.345 88218.1,-531.993 88212.1,-529.013 88222.9,-530.641 88222.9,-530.641"/>
			<text textAnchor="middle" x="88034" y="-541.8">Sg524</text>
			</g>
			<g id="n532" className="node">
			<ellipse cx="88262" cy="-337" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="88262" y="-333.3">per </text>
			</g>
			<g id="edge1232" className="edge">
			<path d="M88084,-342.481C88125.6,-341.195 88184.3,-339.376 88222.5,-338.192"/>
			<polygon fill="#000000" stroke="#000000" points="88232.7,-337.876 88222.9,-342.684 88227.7,-338.031 88222.7,-338.186 88222.7,-338.186 88222.7,-338.186 88227.7,-338.031 88222.6,-333.688 88232.7,-337.876 88232.7,-337.876"/>
			<text textAnchor="middle" x="88137" y="-344.8">Gr314</text>
			</g>
			<g id="n535" className="node">
			<ellipse cx="88262" cy="-404" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="88262" y="-400.3">Maria </text>
			</g>
			<g id="edge938" className="edge">
			<path d="M88061.4,-404C88097.7,-404 88164,-404 88210.2,-404"/>
			<polygon fill="#000000" stroke="#000000" points="88220.3,-404 88210.3,-408.5 88215.3,-404 88210.3,-404 88210.3,-404 88210.3,-404 88215.3,-404 88210.3,-399.5 88220.3,-404 88220.3,-404"/>
			<text textAnchor="middle" x="88137" y="-407.8">Kr185</text>
			</g>
			<g id="n531" className="node">
			<ellipse cx="88262" cy="-458" rx="71.4873" ry="18"/>
			<text textAnchor="middle" x="88262" y="-454.3">consolidacio </text>
			</g>
			<g id="edge1296" className="edge">
			<path d="M88069.1,-457.994C88079.5,-455.123 88091.1,-452.434 88102,-451 88129.7,-447.345 88160.3,-447.668 88187.2,-449.397"/>
			<polygon fill="#000000" stroke="#000000" points="88197.3,-450.124 88187,-453.896 88192.3,-449.766 88187.4,-449.408 88187.4,-449.408 88187.4,-449.408 88192.3,-449.766 88187.7,-444.919 88197.3,-450.124 88197.3,-450.124"/>
			<text textAnchor="middle" x="88137" y="-454.8">Go325</text>
			</g>
			<g id="n534" className="node">
			<ellipse cx="88262" cy="-577" rx="71.4873" ry="18"/>
			<text textAnchor="middle" x="88262" y="-573.3">conformacio </text>
			</g>
			<g id="edge283" className="edge">
			<path d="M88061.6,-483.245C88073.8,-489.71 88088.6,-497.376 88102,-504 88140.1,-522.831 88184.1,-542.901 88216.1,-557.221"/>
			<polygon fill="#000000" stroke="#000000" points="88225.7,-561.472 88214.7,-561.51 88221.1,-559.436 88216.5,-557.4 88216.5,-557.4 88216.5,-557.4 88221.1,-559.436 88218.4,-553.29 88225.7,-561.472 88225.7,-561.472"/>
			<text textAnchor="middle" x="88137" y="-539.8">Mü28315</text>
			</g>
			<g id="edge587" className="edge majority">
			<path strokeWidth="2.4" d="M88077,-473.259C88104.3,-476.484 88140.5,-481.63 88172,-489 88186.3,-492.339 88201.5,-496.921 88215.3,-501.457"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="88225,-504.734 88214.1,-505.809 88220.1,-503.802 88215.3,-502.207 88215.5,-501.544 88215.8,-500.88 88220.5,-502.475 88217,-497.279 88225,-504.734 88225,-504.734"/>
			<text textAnchor="middle" x="88137" y="-492.8">majority</text>
			</g>
			<g id="n543" className="node">
			<ellipse cx="89433" cy="-489" rx="27" ry="18"/>
			<text textAnchor="middle" x="89433" y="-485.3">et </text>
			</g>
			<g id="edge1078" className="edge">
			<path d="M88333.6,-458.994C88484.1,-461.227 88847.5,-467.221 89152,-477 89239.5,-479.811 89342.4,-484.602 89395.8,-487.198"/>
			<polygon fill="#000000" stroke="#000000" points="89405.8,-487.687 89395.5,-491.693 89400.8,-487.443 89395.8,-487.198 89395.8,-487.198 89395.8,-487.198 89400.8,-487.443 89396,-482.704 89405.8,-487.687 89405.8,-487.687"/>
			<text textAnchor="middle" x="88860" y="-476.8">Go325</text>
			</g>
			<g id="n539" className="node">
			<ellipse cx="88625" cy="-410" rx="54.6905" ry="18"/>
			<text textAnchor="middle" x="88625" y="-406.3">formacio </text>
			</g>
			<g id="edge400" className="edge">
			<path d="M88303.7,-404.677C88366.1,-405.714 88486.1,-407.707 88560.1,-408.939"/>
			<polygon fill="#000000" stroke="#000000" points="88570.3,-409.107 88560.2,-413.44 88565.3,-409.024 88560.3,-408.941 88560.3,-408.941 88560.3,-408.941 88565.3,-409.024 88560.4,-404.441 88570.3,-409.107 88570.3,-409.107"/>
			<text textAnchor="middle" x="88452" y="-411.8">Kr185</text>
			</g>
			<g id="edge221" className="edge">
			<path d="M88328.5,-583.615C88496.8,-598.678 88956.7,-627.666 89324,-538 89352.2,-531.11 89382.2,-516.926 89403.3,-505.584"/>
			<polygon fill="#000000" stroke="#000000" points="89412.1,-500.768 89405.5,-509.519 89407.7,-503.171 89403.3,-505.573 89403.3,-505.573 89403.3,-505.573 89407.7,-503.171 89401.2,-501.626 89412.1,-500.768 89412.1,-500.768"/>
			<text textAnchor="middle" x="88860" y="-603.8">Mü28315</text>
			</g>
			<g id="n536" className="node">
			<ellipse cx="88625" cy="-504" rx="27" ry="18"/>
			<text textAnchor="middle" x="88625" y="-500.3">et </text>
			</g>
			<g id="edge88" className="edge">
			<path strokeWidth="1.6" d="M88316.3,-515.934C88390.8,-513.045 88524.1,-507.874 88588,-505.397"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="88598,-505.009 88588.2,-509.894 88593,-505.503 88588,-505.697 88588,-505.397 88588,-505.097 88593,-504.904 88587.8,-500.9 88598,-505.009 88598,-505.009"/>
			<text textAnchor="middle" x="88452" y="-517.8">Ba96, Er16, Sg524, Wi3818</text>
			</g>
			<g id="edge13" className="edge">
			<path strokeWidth="1.8" d="M88309,-527.258C88322.8,-529.621 88337.9,-531.824 88352,-533 88440.6,-540.412 88463.1,-533.148 88552,-533 88818.7,-532.556 88885.5,-540.73 89152,-531 89228.6,-528.204 89248.5,-531.987 89324,-519 89349.5,-514.607 89377.7,-506.663 89398.9,-500.053"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="89408.7,-496.937 89400.6,-504.259 89404.1,-498.835 89399.3,-500.352 89399.2,-499.971 89399.1,-499.589 89403.8,-498.073 89397.8,-495.683 89408.7,-496.937 89408.7,-496.937"/>
			<text textAnchor="middle" x="88860" y="-538.8">Kf133, Kr299, Mü11475, Mü22405, MüU151</text>
			</g>
			<g id="n537" className="node">
			<ellipse cx="88625" cy="-328" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="88625" y="-324.3">sancti </text>
			</g>
			<g id="edge671" className="edge">
			<path d="M88291.3,-336.294C88351.9,-334.784 88494.7,-331.223 88572.1,-329.295"/>
			<polygon fill="#000000" stroke="#000000" points="88582.5,-329.034 88572.7,-333.782 88577.5,-329.158 88572.5,-329.283 88572.5,-329.283 88572.5,-329.283 88577.5,-329.158 88572.4,-324.784 88582.5,-329.034 88582.5,-329.034"/>
			<text textAnchor="middle" x="88452" y="-337.8">Gr314</text>
			</g>
			<g id="n540" className="node">
			<ellipse cx="89096" cy="-323" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="89096" y="-319.3">Spiritus </text>
			</g>
			<g id="edge147" className="edge">
			<path d="M88667.6,-327.556C88751.1,-326.666 88939.3,-324.66 89035.7,-323.633"/>
			<polygon fill="#000000" stroke="#000000" points="89045.8,-323.524 89035.9,-328.131 89040.8,-323.578 89035.8,-323.631 89035.8,-323.631 89035.8,-323.631 89040.8,-323.578 89035.8,-319.131 89045.8,-323.524 89045.8,-323.524"/>
			<text textAnchor="middle" x="88860" y="-330.8">Gr314</text>
			</g>
			<g id="edge856" className="edge">
			<path d="M88678.2,-405.829C88795.6,-397.893 89088.7,-386.184 89324,-444 89351.4,-450.724 89380.8,-463.378 89402,-473.559"/>
			<polygon fill="#000000" stroke="#000000" points="89411.1,-478.033 89400.2,-477.675 89406.7,-475.833 89402.2,-473.633 89402.2,-473.633 89402.2,-473.633 89406.7,-475.833 89404.1,-469.592 89411.1,-478.033 89411.1,-478.033"/>
			<text textAnchor="middle" x="89096" y="-416.8">Kr185</text>
			</g>
			<g id="n541" className="node">
			<ellipse cx="89096" cy="-504" rx="55.7903" ry="18"/>
			<text textAnchor="middle" x="89096" y="-500.3">animacio </text>
			</g>
			<g id="edge746" className="edge">
			<path strokeWidth="1.4" d="M88652.2,-504C88724,-504 88925.3,-504 89030,-504"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="89040.1,-504 89030.1,-508.5 89035.1,-504.2 89030.1,-504.2 89030.1,-504 89030.1,-503.8 89035.1,-503.8 89030.1,-499.5 89040.1,-504 89040.1,-504"/>
			<text textAnchor="middle" x="88860" y="-507.8">Er16, Sg524, Wi3818</text>
			</g>
			<g id="n546" className="node">
			<ellipse cx="89683" cy="-483" rx="55.7903" ry="18"/>
			<text textAnchor="middle" x="89683" y="-479.3">animacio </text>
			</g>
			<g id="edge119" className="edge">
			<path d="M88637.8,-487.948C88650.6,-471.801 88672.7,-447.67 88698,-436 88951.1,-319.221 89046.2,-375.332 89324,-398 89449.7,-408.256 89486.7,-397.759 89604,-444 89612.9,-447.525 89613.6,-451.345 89622,-456 89627.3,-458.905 89632.9,-461.755 89638.5,-464.45"/>
			<polygon fill="#000000" stroke="#000000" points="89647.9,-468.821 89636.9,-468.681 89643.3,-466.711 89638.8,-464.601 89638.8,-464.601 89638.8,-464.601 89643.3,-466.711 89640.7,-460.521 89647.9,-468.821 89647.9,-468.821"/>
			<text textAnchor="middle" x="89247" y="-401.8">Ba96</text>
			</g>
			<g id="n542" className="node">
			<ellipse cx="89433" cy="-323" rx="90.1842" ry="18"/>
			<text textAnchor="middle" x="89433" y="-319.3">fecundacionem. &#160;</text>
			</g>
			<g id="edge404" className="edge">
			<path d="M89146.1,-323C89194.8,-323 89270.9,-323 89332.3,-323"/>
			<polygon fill="#000000" stroke="#000000" points="89342.4,-323 89332.4,-327.5 89337.4,-323 89332.4,-323 89332.4,-323 89332.4,-323 89337.4,-323 89332.4,-318.5 89342.4,-323 89342.4,-323"/>
			<text textAnchor="middle" x="89247" y="-326.8">Gr314</text>
			</g>
			<g id="edge836" className="edge">
			<path strokeWidth="1.4" d="M89151.6,-501.557C89220.3,-498.477 89336.6,-493.27 89395.5,-490.633"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="89405.8,-490.172 89396,-495.115 89400.8,-490.596 89395.8,-490.819 89395.8,-490.62 89395.8,-490.42 89400.8,-490.196 89395.6,-486.124 89405.8,-490.172 89405.8,-490.172"/>
			<text textAnchor="middle" x="89247" y="-503.8">Er16, Sg524, Wi3818</text>
			</g>
			<g id="n545" className="node">
			<ellipse cx="89683" cy="-429" rx="61.1893" ry="18"/>
			<text textAnchor="middle" x="89683" y="-425.3">deificacio. </text>
			</g>
			<g id="edge1248" className="edge">
			<path d="M89458.7,-483.028C89497.2,-473.699 89572.8,-455.425 89625.3,-442.728"/>
			<polygon fill="#000000" stroke="#000000" points="89635.1,-440.346 89626.4,-447.072 89630.2,-441.522 89625.4,-442.698 89625.4,-442.698 89625.4,-442.698 89630.2,-441.522 89624.3,-438.324 89635.1,-440.346 89635.1,-440.346"/>
			<text textAnchor="middle" x="89573" y="-465.8">Wi3818</text>
			</g>
			<g id="edge430" className="edge majority">
			<path strokeWidth="2.4" d="M89460.1,-488.369C89497,-487.475 89565.9,-485.81 89617.1,-484.57"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="89627.1,-484.328 89617.2,-489.069 89622.1,-485.149 89617.1,-485.27 89617.1,-484.57 89617.1,-483.87 89622.1,-483.749 89617,-480.071 89627.1,-484.328 89627.1,-484.328"/>
			<text textAnchor="middle" x="89573" y="-489.8">majority</text>
			</g>
			<g id="n551" className="node">
			<ellipse cx="90087" cy="-521" rx="64.9885" ry="18"/>
			<text textAnchor="middle" x="90087" y="-517.3">deifficacio. </text>
			</g>
			<g id="edge527" className="edge">
			<path strokeWidth="1.2" d="M89459.2,-493.357C89481.1,-496.978 89513.5,-502.007 89542,-505 89709.3,-522.592 89907.1,-523.452 90012,-522.345"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="90022.1,-522.229 90012.2,-526.843 90017.1,-522.386 90012.1,-522.443 90012.1,-522.343 90012.1,-522.243 90017.1,-522.186 90012.1,-517.844 90022.1,-522.229 90022.1,-522.229"/>
			<text textAnchor="middle" x="89807" y="-524.8">Er16, Sg524</text>
			</g>
			<g id="n561" className="node">
			<ellipse cx="92078" cy="-376" rx="31.6951" ry="18"/>
			<text textAnchor="middle" x="92078" y="-372.3">Aue </text>
			</g>
			<g id="edge220" className="edge">
			<path d="M89523.5,-323C89570.7,-323 89629.5,-323 89682,-323 89682,-323 89682,-323 91889,-323 91944.9,-323 92006.7,-344.957 92043.7,-360.606"/>
			<polygon fill="#000000" stroke="#000000" points="92053,-364.63 92042,-364.787 92048.4,-362.644 92043.8,-360.657 92043.8,-360.657 92043.8,-360.657 92048.4,-362.644 92045.6,-356.527 92053,-364.63 92053,-364.63"/>
			<text textAnchor="middle" x="90997" y="-326.8">Gr314</text>
			</g>
			<g id="n548" className="node">
			<ellipse cx="89897" cy="-466" rx="27" ry="18"/>
			<text textAnchor="middle" x="89897" y="-462.3">Et </text>
			</g>
			<g id="edge1213" className="edge">
			<path d="M89742.9,-433.105C89775.4,-436.18 89816.3,-441.389 89852,-450 89855.9,-450.938 89859.9,-452.106 89863.9,-453.382"/>
			<polygon fill="#000000" stroke="#000000" points="89873.5,-456.705 89862.5,-457.685 89868.7,-455.069 89864,-453.433 89864,-453.433 89864,-453.433 89868.7,-455.069 89865.5,-449.18 89873.5,-456.705 89873.5,-456.705"/>
			<text textAnchor="middle" x="89807" y="-453.8">Wi3818</text>
			</g>
			<g id="edge641" className="edge majority">
			<path strokeWidth="2.6" d="M89737.5,-478.71C89775.7,-475.648 89826,-471.611 89859.6,-468.916"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="89869.9,-468.091 89860.3,-473.376 89865,-469.289 89860,-469.688 89860,-468.891 89859.9,-468.093 89864.9,-467.694 89859.6,-464.405 89869.9,-468.091 89869.9,-468.091"/>
			<text textAnchor="middle" x="89807" y="-479.8">majority</text>
			</g>
			<g id="edge27" className="edge">
			<path d="M89922.2,-473.078C89949.8,-481.14 89995.6,-494.566 90031.9,-505.16"/>
			<polygon fill="#000000" stroke="#000000" points="90041.8,-508.066 90030.9,-509.577 90037,-506.662 90032.2,-505.258 90032.2,-505.258 90032.2,-505.258 90037,-506.662 90033.5,-500.939 90041.8,-508.066 90041.8,-508.066"/>
			<text textAnchor="middle" x="89973" y="-499.8">Ba96</text>
			</g>
			<g id="n550" className="node">
			<ellipse cx="90087" cy="-420" rx="61.1893" ry="18"/>
			<text textAnchor="middle" x="90087" y="-416.3">deificacio. </text>
			</g>
			<g id="edge658" className="edge majority">
			<path strokeWidth="2.4" d="M89915,-452.132C89922.7,-446.505 89932.4,-440.515 89942,-437 89965.2,-428.538 89991.7,-424.063 90015.6,-421.763"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="90025.7,-420.905 90016.1,-426.238 90020.8,-422.027 90015.8,-422.451 90015.7,-421.754 90015.7,-421.056 90020.7,-420.632 90015.4,-417.27 90025.7,-420.905 90025.7,-420.905"/>
			<text textAnchor="middle" x="89973" y="-440.8">majority</text>
			</g>
			<g id="n554" className="node">
			<ellipse cx="90897" cy="-444" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="90897" y="-440.3">Ergo </text>
			</g>
			<g id="edge1001" className="edge">
			<path d="M89924.3,-466.882C90035.8,-470.344 90479.3,-481.425 90842,-452 90845.3,-451.732 90848.7,-451.387 90852.1,-450.993"/>
			<polygon fill="#000000" stroke="#000000" points="90862.4,-449.683 90853,-455.416 90857.4,-450.318 90852.5,-450.953 90852.5,-450.953 90852.5,-450.953 90857.4,-450.318 90851.9,-446.489 90862.4,-449.683 90862.4,-449.683"/>
			<text textAnchor="middle" x="90215" y="-474.8">Wi3818</text>
			</g>
			<g id="n547" className="node">
			<ellipse cx="90506" cy="-563" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="90506" y="-559.3">Ergo </text>
			</g>
			<g id="edge1046" className="edge">
			<path strokeWidth="1.2" d="M90148.6,-527.107C90233.2,-535.625 90384.6,-550.878 90459.9,-558.461"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="90470,-559.479 90459.6,-562.954 90465.1,-559.077 90460.1,-558.576 90460.1,-558.477 90460.1,-558.377 90465.1,-558.878 90460.5,-553.999 90470,-559.479 90470,-559.479"/>
			<text textAnchor="middle" x="90215" y="-541.8">Er16, Sg524</text>
			</g>
			<g id="edge449" className="edge">
			<path d="M90152,-519.454C90322.2,-515.071 90777.5,-501.468 90842,-480 90851.7,-476.779 90861.3,-471.333 90869.6,-465.639"/>
			<polygon fill="#000000" stroke="#000000" points="90877.8,-459.698 90872.4,-469.208 90873.8,-462.63 90869.7,-465.563 90869.7,-465.563 90869.7,-465.563 90873.8,-462.63 90867.1,-461.918 90877.8,-459.698 90877.8,-459.698"/>
			<text textAnchor="middle" x="90506" y="-518.8">Ba96</text>
			</g>
			<g id="n553" className="node">
			<ellipse cx="90506" cy="-369" rx="40.0939" ry="18"/>
			<text textAnchor="middle" x="90506" y="-365.3">Igitur </text>
			</g>
			<g id="edge392" className="edge">
			<path d="M90125.9,-405.957C90139.6,-401.419 90155.3,-396.832 90170,-394 90270.2,-374.659 90389.8,-370.077 90455.6,-369.114"/>
			<polygon fill="#000000" stroke="#000000" points="90465.7,-368.989 90455.7,-373.613 90460.7,-369.051 90455.7,-369.113 90455.7,-369.113 90455.7,-369.113 90460.7,-369.051 90455.6,-364.614 90465.7,-368.989 90465.7,-368.989"/>
			<text textAnchor="middle" x="90215" y="-397.8">Go325</text>
			</g>
			<g id="edge464" className="edge">
			<path strokeWidth="2.2" d="M90148.1,-421.244C90262.3,-423.681 90518.4,-429.507 90734,-437 90773.3,-438.368 90818.1,-440.33 90850.5,-441.83"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="90860.6,-442.299 90850.4,-446.329 90855.6,-442.666 90850.6,-442.434 90850.6,-441.834 90850.7,-441.235 90855.6,-441.467 90850.8,-437.339 90860.6,-442.299 90860.6,-442.299"/>
			<text textAnchor="middle" x="90506" y="-440.8">Kf133, Kr185, Kr299, Mü11475, Mü22405, Mü28315, MüU151</text>
			</g>
			<g id="n549" className="node">
			<ellipse cx="90897" cy="-526" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="90897" y="-522.3">bene </text>
			</g>
			<g id="edge1003" className="edge">
			<path strokeWidth="1.2" d="M90541.9,-559.684C90612.5,-552.962 90772.6,-537.736 90851,-530.278"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="90861.1,-529.322 90851.5,-534.749 90856.1,-529.895 90851.1,-530.368 90851.1,-530.269 90851.1,-530.169 90856.1,-529.696 90850.7,-525.789 90861.1,-529.322 90861.1,-529.322"/>
			<text textAnchor="middle" x="90797" y="-542.8">Er16, Sg524</text>
			</g>
			<g id="n558" className="node">
			<ellipse cx="91299" cy="-388" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="91299" y="-384.3">dicit </text>
			</g>
			<g id="edge1274" className="edge">
			<path d="M90546.5,-369.949C90680.1,-373.157 91114.2,-383.586 91254.1,-386.946"/>
			<polygon fill="#000000" stroke="#000000" points="91264.5,-387.194 91254.4,-391.453 91259.5,-387.074 91254.5,-386.954 91254.5,-386.954 91254.5,-386.954 91259.5,-387.074 91254.6,-382.455 91264.5,-387.194 91264.5,-387.194"/>
			<text textAnchor="middle" x="90997" y="-384.8">Go325</text>
			</g>
			<g id="n552" className="node">
			<ellipse cx="91097" cy="-492" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="91097" y="-488.3">dicit </text>
			</g>
			<g id="edge721" className="edge">
			<path strokeWidth="1.2" d="M90931.6,-520.232C90965.2,-514.456 91017.1,-505.547 91053.6,-499.285"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="91063.9,-497.514 91054.8,-503.641 91059,-498.459 91054.1,-499.305 91054,-499.206 91054,-499.108 91058.9,-498.261 91053.3,-494.771 91063.9,-497.514 91063.9,-497.514"/>
			<text textAnchor="middle" x="90997" y="-518.8">Er16, Sg524</text>
			</g>
			<g id="n556" className="node">
			<ellipse cx="91097" cy="-428" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="91097" y="-424.3">bene </text>
			</g>
			<g id="edge1258" className="edge majority">
			<path strokeWidth="2.6" d="M90933.4,-441.14C90966.2,-438.489 91015.2,-434.533 91050.8,-431.654"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="91060.9,-430.836 91051.3,-436.127 91056,-432.036 91051,-432.439 91050.9,-431.641 91050.9,-430.844 91055.9,-430.441 91050.6,-427.156 91060.9,-430.836 91060.9,-430.836"/>
			<text textAnchor="middle" x="90997" y="-442.8">majority</text>
			</g>
			<g id="edge75" className="edge majority">
			<path strokeWidth="2.6" d="M91131,-421.395C91165.4,-414.519 91219.3,-403.734 91256.5,-396.29"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="91266.6,-394.285 91257.7,-400.659 91261.8,-396.05 91256.9,-397.031 91256.8,-396.246 91256.6,-395.462 91261.5,-394.481 91255.9,-391.834 91266.6,-394.285 91266.6,-394.285"/>
			<text textAnchor="middle" x="91197" y="-419.8">majority</text>
			</g>
			<g id="n555" className="node">
			<ellipse cx="91299" cy="-457" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="91299" y="-453.3">autor </text>
			</g>
			<g id="edge138" className="edge">
			<path strokeWidth="1.2" d="M91130.1,-486.377C91163.3,-480.566 91215.5,-471.446 91252.8,-464.91"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="91262.9,-463.139 91253.8,-469.296 91258,-464.1 91253.1,-464.962 91253.1,-464.863 91253.1,-464.765 91258,-463.903 91252.3,-460.431 91262.9,-463.139 91262.9,-463.139"/>
			<text textAnchor="middle" x="91197" y="-484.8">Er16, Sg524</text>
			</g>
			<g id="n560" className="node">
			<ellipse cx="91503" cy="-388" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="91503" y="-384.3">autor </text>
			</g>
			<g id="edge1293" className="edge majority">
			<path strokeWidth="2.8" d="M91333.8,-388C91366.9,-388 91417.5,-388 91454.6,-388"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="91464.6,-388 91454.6,-392.5 91459.6,-388.9 91454.6,-388.9 91454.6,-388 91454.6,-387.1 91459.6,-387.1 91454.6,-383.5 91464.6,-388 91464.6,-388"/>
			<text textAnchor="middle" x="91401" y="-391.8">majority</text>
			</g>
			<g id="n557" className="node">
			<ellipse cx="91503" cy="-446" rx="33.2948" ry="18"/>
			<text textAnchor="middle" x="91503" y="-442.3">mox </text>
			</g>
			<g id="edge722" className="edge">
			<path strokeWidth="1.2" d="M91337.5,-454.957C91372.2,-453.068 91423.7,-450.265 91459.8,-448.299"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="91470,-447.743 91460.3,-452.78 91465,-448.114 91460,-448.386 91460,-448.286 91460,-448.186 91465,-447.915 91459.8,-443.793 91470,-447.743 91470,-447.743"/>
			<text textAnchor="middle" x="91401" y="-456.8">Er16, Sg524</text>
			</g>
			<g id="n564" className="node">
			<ellipse cx="91888" cy="-388" rx="59.5901" ry="18"/>
			<text textAnchor="middle" x="91888" y="-384.3">concepit. &#160;</text>
			</g>
			<g id="edge1144" className="edge">
			<path strokeWidth="1.2" d="M91535.9,-443.155C91591.8,-437.903 91710.8,-425.504 91810,-407 91817.4,-405.614 91825.2,-403.947 91832.9,-402.185"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="91842.8,-399.829 91834.1,-406.516 91838,-401.08 91833.1,-402.234 91833.1,-402.137 91833.1,-402.04 91837.9,-400.886 91832,-397.759 91842.8,-399.829 91842.8,-399.829"/>
			<text textAnchor="middle" x="91685" y="-434.8">Er16, Sg524</text>
			</g>
			<g id="n562" className="node">
			<ellipse cx="91685" cy="-388" rx="33.2948" ry="18"/>
			<text textAnchor="middle" x="91685" y="-384.3">mox </text>
			</g>
			<g id="edge1311" className="edge majority">
			<path strokeWidth="2.8" d="M91541.7,-388C91570.9,-388 91611.2,-388 91641.5,-388"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="91651.7,-388 91641.7,-392.5 91646.7,-388.9 91641.7,-388.9 91641.7,-388 91641.7,-387.1 91646.7,-387.1 91641.7,-383.5 91651.7,-388 91651.7,-388"/>
			<text textAnchor="middle" x="91591" y="-391.8">majority</text>
			</g>
			<g id="edge838" className="edge majority">
			<path strokeWidth="2.8" d="M91718.3,-388C91745,-388 91784,-388 91817.7,-388"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="91828,-388 91818,-392.5 91823,-388.9 91818,-388.9 91818,-388 91818,-387.1 91823,-387.1 91818,-383.5 91828,-388 91828,-388"/>
			<text textAnchor="middle" x="91779" y="-391.8">majority</text>
			</g>
			<g id="edge354" className="edge majority">
			<path strokeWidth="3.2" d="M91946.7,-384.318C91975.5,-382.477 92009.8,-380.292 92035.9,-378.624"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="92046.2,-377.966 92036.5,-383.094 92041.3,-379.382 92036.3,-379.701 92036.2,-378.603 92036.1,-377.505 92041.1,-377.187 92035.9,-374.112 92046.2,-377.966 92046.2,-377.966"/>
			<text textAnchor="middle" x="91997" y="-386.8">majority</text>
			</g>
			<g id="n568" className="node">
			<ellipse cx="92241" cy="-376" rx="32.4942" ry="18"/>
			<text textAnchor="middle" x="92241" y="-372.3">ueri </text>
			</g>
			<g id="edge971" className="edge majority">
			<path strokeWidth="3.4" d="M92110,-376C92135.1,-376 92170.5,-376 92198.1,-376"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="92208.2,-376 92198.2,-380.5 92203.2,-377.2 92198.2,-377.2 92198.2,-376 92198.2,-374.8 92203.2,-374.8 92198.2,-371.5 92208.2,-376 92208.2,-376"/>
			<text textAnchor="middle" x="92159" y="-379.8">majority</text>
			</g>
			<g id="n565" className="node">
			<ellipse cx="92431" cy="-376" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="92431" y="-372.3">Hic </text>
			</g>
			<g id="edge895" className="edge">
			<path strokeWidth="1.2" d="M92273.9,-376C92306,-376 92355.5,-376 92390.2,-376"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="92400.4,-376 92390.4,-380.5 92395.4,-376.1 92390.4,-376.1 92390.4,-376 92390.4,-375.9 92395.4,-375.9 92390.4,-371.5 92400.4,-376 92400.4,-376"/>
			<text textAnchor="middle" x="92337" y="-379.8">Er16, Sg524</text>
			</g>
			<g id="n570" className="node">
			<ellipse cx="92627" cy="-322" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="92627" y="-318.3">Hic </text>
			</g>
			<g id="edge1235" className="edge majority">
			<path strokeWidth="2.8" d="M92269.3,-366.889C92300.5,-356.914 92353.3,-341.362 92400,-334 92464.6,-323.806 92540.8,-321.797 92586.2,-321.637"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="92596.2,-321.631 92586.2,-326.137 92591.2,-322.534 92586.2,-322.537 92586.2,-321.637 92586.2,-320.737 92591.2,-320.734 92586.2,-317.137 92596.2,-321.631 92596.2,-321.631"/>
			<text textAnchor="middle" x="92431" y="-337.8">majority</text>
			</g>
			<g id="n588" className="node">
			<ellipse cx="95133" cy="-334" rx="63.0888" ry="18"/>
			<text textAnchor="middle" x="95133" y="-330.3">Notandum </text>
			</g>
			<g id="edge960" className="edge">
			<path d="M92265.7,-387.876C92300.7,-404.314 92368.7,-432 92430,-432 92430,-432 92430,-432 94863,-432 94951.7,-432 95047.4,-384.41 95097.3,-355.557"/>
			<polygon fill="#000000" stroke="#000000" points="95106,-350.403 95099.7,-359.35 95101.7,-352.936 95097.4,-355.47 95097.4,-355.47 95097.4,-355.47 95101.7,-352.936 95095.1,-351.59 95106,-350.403 95106,-350.403"/>
			<text textAnchor="middle" x="93407" y="-435.8">Mü22405</text>
			</g>
			<g id="n567" className="node">
			<ellipse cx="92627" cy="-376" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="92627" y="-372.3">autor </text>
			</g>
			<g id="edge893" className="edge">
			<path strokeWidth="1.2" d="M92461.9,-376C92492.8,-376 92541.7,-376 92578,-376"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="92588.4,-376 92578.4,-380.5 92583.4,-376.1 92578.4,-376.1 92578.4,-376 92578.4,-375.9 92583.4,-375.9 92578.4,-371.5 92588.4,-376 92588.4,-376"/>
			<text textAnchor="middle" x="92525" y="-379.8">Er16, Sg524</text>
			</g>
			<g id="n569" className="node">
			<ellipse cx="92838" cy="-376" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="92838" y="-372.3">salutat </text>
			</g>
			<g id="edge1134" className="edge">
			<path strokeWidth="1.2" d="M92665.4,-376C92697.7,-376 92744.8,-376 92781.5,-376"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="92791.6,-376 92781.6,-380.5 92786.6,-376.1 92781.6,-376.1 92781.6,-376 92781.6,-375.9 92786.6,-375.9 92781.6,-371.5 92791.6,-376 92791.6,-376"/>
			<text textAnchor="middle" x="92729" y="-379.8">Er16, Sg524</text>
			</g>
			<g id="n572" className="node">
			<ellipse cx="92838" cy="-322" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="92838" y="-318.3">autor </text>
			</g>
			<g id="edge1133" className="edge majority">
			<path strokeWidth="2.8" d="M92657.9,-322C92692.2,-322 92748.8,-322 92789.2,-322"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="92799.3,-322 92789.3,-326.5 92794.3,-322.9 92789.3,-322.9 92789.3,-322 92789.3,-321.1 92794.3,-321.1 92789.3,-317.5 92799.3,-322 92799.3,-322"/>
			<text textAnchor="middle" x="92729" y="-325.8">majority</text>
			</g>
			<g id="n571" className="node">
			<ellipse cx="93058" cy="-376" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="93058" y="-372.3">beatam </text>
			</g>
			<g id="edge745" className="edge">
			<path strokeWidth="1.2" d="M92884.2,-376C92917.5,-376 92963.2,-376 92999.3,-376"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="93009.6,-376 92999.6,-380.5 93004.6,-376.1 92999.6,-376.1 92999.6,-376 92999.6,-375.9 93004.6,-375.9 92999.6,-371.5 93009.6,-376 93009.6,-376"/>
			<text textAnchor="middle" x="92947" y="-379.8">Er16, Sg524</text>
			</g>
			<g id="n574" className="node">
			<ellipse cx="93058" cy="-322" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="93058" y="-318.3">salutat </text>
			</g>
			<g id="edge420" className="edge majority">
			<path strokeWidth="2.8" d="M92876.5,-322C92910.9,-322 92962.3,-322 93001.5,-322"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="93011.7,-322 93001.7,-326.5 93006.7,-322.9 93001.7,-322.9 93001.7,-322 93001.7,-321.1 93006.7,-321.1 93001.7,-317.5 93011.7,-322 93011.7,-322"/>
			<text textAnchor="middle" x="92947" y="-325.8">majority</text>
			</g>
			<g id="n576" className="node">
			<ellipse cx="93288" cy="-322" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="93288" y="-318.3">beatam </text>
			</g>
			<g id="edge1176" className="edge majority">
			<path strokeWidth="2.8" d="M93104.3,-322C93140.3,-322 93190.9,-322 93229.7,-322"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="93239.8,-322 93229.8,-326.5 93234.8,-322.9 93229.8,-322.9 93229.8,-322 93229.8,-321.1 93234.8,-321.1 93229.8,-317.5 93239.8,-322 93239.8,-322"/>
			<text textAnchor="middle" x="93169" y="-325.8">majority</text>
			</g>
			<g id="n573" className="node">
			<ellipse cx="93288" cy="-376" rx="55.7903" ry="18"/>
			<text textAnchor="middle" x="93288" y="-372.3">uirginem </text>
			</g>
			<g id="edge802" className="edge">
			<path strokeWidth="1.2" d="M93106.2,-376C93139.6,-376 93184.8,-376 93221.6,-376"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="93231.8,-376 93221.8,-380.5 93226.8,-376.1 93221.8,-376.1 93221.8,-376 93221.8,-375.9 93226.8,-375.9 93221.8,-371.5 93231.8,-376 93231.8,-376"/>
			<text textAnchor="middle" x="93169" y="-379.8">Er16, Sg524</text>
			</g>
			<g id="n575" className="node">
			<ellipse cx="93526" cy="-376" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="93526" y="-372.3">ipsam </text>
			</g>
			<g id="edge129" className="edge">
			<path strokeWidth="1.2" d="M93344,-376C93383.3,-376 93435.6,-376 93473.9,-376"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="93484.3,-376 93474.3,-380.5 93479.3,-376.1 93474.3,-376.1 93474.3,-376 93474.3,-375.9 93479.3,-375.9 93474.3,-371.5 93484.3,-376 93484.3,-376"/>
			<text textAnchor="middle" x="93407" y="-379.8">Er16, Sg524</text>
			</g>
			<g id="n578" className="node">
			<ellipse cx="93526" cy="-291" rx="55.7903" ry="18"/>
			<text textAnchor="middle" x="93526" y="-287.3">uirginem </text>
			</g>
			<g id="edge431" className="edge majority">
			<path strokeWidth="2.8" d="M93333.7,-316.133C93370.5,-311.294 93423.1,-304.381 93463.9,-299.03"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="93474,-297.705 93464.6,-303.469 93469.1,-299.249 93464.2,-299.9 93464,-299.007 93463.9,-298.115 93468.9,-297.464 93463.5,-294.546 93474,-297.705 93474,-297.705"/>
			<text textAnchor="middle" x="93407" y="-314.8">majority</text>
			</g>
			<g id="n580" className="node">
			<ellipse cx="93789" cy="-227" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="93789" y="-223.3">ipsam </text>
			</g>
			<g id="edge49" className="edge majority">
			<path strokeWidth="2.8" d="M93571,-280.216C93618.6,-268.542 93694.2,-250.012 93742.4,-238.185"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="93752.2,-235.767 93743.6,-242.52 93747.6,-237.832 93742.7,-239.023 93742.5,-238.149 93742.3,-237.275 93747.2,-236.084 93741.5,-233.779 93752.2,-235.767 93752.2,-235.767"/>
			<text textAnchor="middle" x="93645" y="-275.8">majority</text>
			</g>
			<g id="n577" className="node">
			<ellipse cx="93789" cy="-376" rx="81.4863" ry="18"/>
			<text textAnchor="middle" x="93789" y="-372.3">commendando </text>
			</g>
			<g id="edge1109" className="edge">
			<path strokeWidth="1.2" d="M93567.8,-376C93602.4,-376 93653.2,-376 93697.4,-376"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="93707.6,-376 93697.6,-380.5 93702.6,-376.1 93697.6,-376.1 93697.6,-376 93697.6,-375.9 93702.6,-375.9 93697.6,-371.5 93707.6,-376 93707.6,-376"/>
			<text textAnchor="middle" x="93645" y="-379.8">Er16, Sg524</text>
			</g>
			<g id="n579" className="node">
			<ellipse cx="94077" cy="-376" rx="46.5926" ry="18"/>
			<text textAnchor="middle" x="94077" y="-372.3">dicens. </text>
			</g>
			<g id="edge660" className="edge">
			<path strokeWidth="1.2" d="M93870.4,-376C93918,-376 93977.2,-376 94019.8,-376"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="94030,-376 94020,-380.5 94025,-376.1 94020,-376.1 94020,-376 94020,-375.9 94025,-375.9 94020,-371.5 94030,-376 94030,-376"/>
			<text textAnchor="middle" x="93933" y="-379.8">Er16, Sg524</text>
			</g>
			<g id="n581" className="node">
			<ellipse cx="94077" cy="-200" rx="81.4863" ry="18"/>
			<text textAnchor="middle" x="94077" y="-196.3">commendando </text>
			</g>
			<g id="edge427" className="edge majority">
			<path strokeWidth="2.8" d="M93829.8,-223.246C93871.5,-219.305 93938.4,-212.992 93991.9,-207.938"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="94002.1,-206.978 93992.6,-212.398 93997.2,-208.344 93992.2,-208.814 93992.1,-207.918 93992,-207.022 93997,-206.552 93991.7,-203.438 94002.1,-206.978 94002.1,-206.978"/>
			<text textAnchor="middle" x="93933" y="-220.8">majority</text>
			</g>
			<g id="n582" className="node">
			<ellipse cx="94607" cy="-116" rx="46.5926" ry="18"/>
			<text textAnchor="middle" x="94607" y="-112.3">dicens. </text>
			</g>
			<g id="edge1050" className="edge">
			<path strokeWidth="1.4" d="M94107,-183.085C94126,-172.856 94151.7,-160.56 94176,-154 94306.6,-118.761 94466.9,-114.325 94550,-114.773"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="94560.2,-114.855 94550.2,-119.274 94555.2,-115.014 94550.2,-114.974 94550.2,-114.774 94550.2,-114.574 94555.2,-114.614 94550.2,-110.274 94560.2,-114.855 94560.2,-114.855"/>
			<text textAnchor="middle" x="94359" y="-157.8">Ba96, Go325, Mü28315</text>
			</g>
			<g id="n583" className="node">
			<ellipse cx="94607" cy="-243" rx="37.8943" ry="18"/>
			<text textAnchor="middle" x="94607" y="-239.3">dicit. </text>
			</g>
			<g id="edge436" className="edge">
			<path strokeWidth="2" d="M94153.6,-206.161C94264.7,-215.206 94468.6,-231.808 94559.8,-239.235"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="94569.8,-240.052 94559.5,-243.726 94564.8,-240.145 94559.8,-239.739 94559.8,-239.24 94559.9,-238.742 94564.9,-239.148 94560.2,-234.755 94569.8,-240.052 94569.8,-240.052"/>
			<text textAnchor="middle" x="94359" y="-240.8">Gr314, Kr185, Kr299, Mü11475, MüU151, Wi3818</text>
			</g>
			<g id="n585" className="node">
			<ellipse cx="94862" cy="-259" rx="29.795" ry="18"/>
			<text textAnchor="middle" x="94862" y="-255.3">sic. </text>
			</g>
			<g id="edge593" className="edge">
			<path d="M94148.5,-191.358C94257.9,-179.891 94474.8,-165.004 94654,-201 94693.7,-208.966 94699.2,-224.442 94738,-236 94765.7,-244.257 94797.8,-250.143 94822.3,-253.892"/>
			<polygon fill="#000000" stroke="#000000" points="94832.3,-255.369 94821.7,-258.357 94827.3,-254.637 94822.4,-253.906 94822.4,-253.906 94822.4,-253.906 94827.3,-254.637 94823,-249.454 94832.3,-255.369 94832.3,-255.369"/>
			<text textAnchor="middle" x="94607" y="-204.8">Kf133</text>
			</g>
			<g id="edge1052" className="edge">
			<path d="M94123.1,-379.441C94256,-388.774 94657.1,-411.203 94986,-370 95017.6,-366.04 95052.3,-357.677 95079.9,-350.007"/>
			<polygon fill="#000000" stroke="#000000" points="95089.7,-347.223 95081.3,-354.277 95084.9,-348.585 95080.1,-349.947 95080.1,-349.947 95080.1,-349.947 95084.9,-348.585 95078.8,-345.618 95089.7,-347.223 95089.7,-347.223"/>
			<text textAnchor="middle" x="94696" y="-394.8">Er16</text>
			</g>
			<g id="n587" className="node">
			<ellipse cx="95133" cy="-232" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="95133" y="-228.3">Nota </text>
			</g>
			<g id="edge768" className="edge">
			<path d="M94123.8,-375.556C94303.4,-373.634 94951.1,-364.924 94986,-339 95005.6,-324.412 94987.3,-304.91 95004,-287 95016.6,-273.477 95059.7,-256.517 95092.4,-245.032"/>
			<polygon fill="#000000" stroke="#000000" points="95102.2,-241.654 95094.2,-249.171 95097.5,-243.286 95092.8,-244.918 95092.8,-244.918 95092.8,-244.918 95097.5,-243.286 95091.3,-240.664 95102.2,-241.654 95102.2,-241.654"/>
			<text textAnchor="middle" x="94696" y="-367.8">Sg524</text>
			</g>
			<g id="n584" className="node">
			<ellipse cx="94862" cy="-103" rx="38.9931" ry="18"/>
			<text textAnchor="middle" x="94862" y="-99.3">Circa </text>
			</g>
			<g id="edge1011" className="edge">
			<path d="M94653.5,-113.661C94698.5,-111.35 94767,-107.829 94812.9,-105.473"/>
			<polygon fill="#000000" stroke="#000000" points="94822.9,-104.96 94813.1,-109.967 94817.9,-105.216 94812.9,-105.473 94812.9,-105.473 94812.9,-105.473 94817.9,-105.216 94812.6,-100.979 94822.9,-104.96 94822.9,-104.96"/>
			<text textAnchor="middle" x="94696" y="-115.8">Go325</text>
			</g>
			<g id="edge148" className="edge">
			<path d="M94647.2,-125.44C94655.4,-127.339 94664,-129.279 94672,-131 94811,-160.781 94847.6,-159.639 94986,-192 95021.9,-200.402 95062.4,-211.624 95091.6,-220.043"/>
			<polygon fill="#000000" stroke="#000000" points="95101.4,-222.895 95090.6,-224.43 95096.6,-221.501 95091.8,-220.108 95091.8,-220.108 95091.8,-220.108 95096.6,-221.501 95093.1,-215.786 95101.4,-222.895 95101.4,-222.895"/>
			<text textAnchor="middle" x="94862" y="-195.8">Mü28315</text>
			</g>
			<g id="n589" className="node">
			<ellipse cx="95504" cy="-103" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="95504" y="-99.3">Nota </text>
			</g>
			<g id="edge1098" className="edge">
			<path d="M94640.2,-103.129C94666.2,-93.5 94703.8,-81.144 94738,-76 95009.7,-35.1422 95341.5,-77.8947 95459.1,-95.8528"/>
			<polygon fill="#000000" stroke="#000000" points="95469.2,-97.408 95458.6,-100.326 95464.3,-96.6437 95459.3,-95.8793 95459.3,-95.8793 95459.3,-95.8793 95464.3,-96.6437 95460,-91.4322 95469.2,-97.408 95469.2,-97.408"/>
			<text textAnchor="middle" x="95028" y="-62.8">Ba96</text>
			</g>
			<g id="edge201" className="edge">
			<path d="M94644.5,-245.309C94691.7,-248.293 94773.5,-253.464 94821.9,-256.526"/>
			<polygon fill="#000000" stroke="#000000" points="94832,-257.164 94821.7,-261.024 94827,-256.848 94822,-256.533 94822,-256.533 94822,-256.533 94827,-256.848 94822.3,-252.042 94832,-257.164 94832,-257.164"/>
			<text textAnchor="middle" x="94696" y="-253.8">Gr314</text>
			</g>
			<g id="edge639" className="edge">
			<path d="M94635.4,-255.081C94646.6,-259.773 94659.8,-264.976 94672,-269 94700.8,-278.499 94708.3,-280.291 94738,-286 94850.2,-307.535 94982.3,-321.31 95061.5,-328.343"/>
			<polygon fill="#000000" stroke="#000000" points="95071.9,-329.25 95061.5,-332.859 95066.9,-328.813 95061.9,-328.376 95061.9,-328.376 95061.9,-328.376 95066.9,-328.813 95062.3,-323.893 95071.9,-329.25 95071.9,-329.25"/>
			<text textAnchor="middle" x="94862" y="-323.8">Wi3818</text>
			</g>
			<g id="edge1049" className="edge">
			<path strokeWidth="1.6" d="M94640.6,-234.622C94666.7,-228.357 94704.4,-220.323 94738,-217 94864.3,-204.496 95014.3,-217.967 95087.4,-226.351"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="95097.6,-227.547 95087.2,-230.854 95092.6,-227.264 95087.7,-226.683 95087.7,-226.385 95087.8,-226.087 95092.7,-226.668 95088.2,-221.915 95097.6,-227.547 95097.6,-227.547"/>
			<text textAnchor="middle" x="94862" y="-220.8">Kr185, Kr299, Mü11475, MüU151</text>
			</g>
			<g id="n586" className="node">
			<ellipse cx="95133" cy="-103" rx="51.1914" ry="18"/>
			<text textAnchor="middle" x="95133" y="-99.3">litteram </text>
			</g>
			<g id="edge1014" className="edge">
			<path d="M94901.3,-103C94945.6,-103 95019.2,-103 95071.4,-103"/>
			<polygon fill="#000000" stroke="#000000" points="95081.5,-103 95071.5,-107.5 95076.5,-103 95071.5,-103 95071.5,-103 95071.5,-103 95076.5,-103 95071.5,-98.5001 95081.5,-103 95081.5,-103"/>
			<text textAnchor="middle" x="95028" y="-106.8">Go325</text>
			</g>
			<g id="edge626" className="edge">
			<path d="M94890.5,-264.703C94927.5,-272.607 94995.3,-287.868 95052,-305 95062.8,-308.27 95074.3,-312.177 95085.1,-316.049"/>
			<polygon fill="#000000" stroke="#000000" points="95094.8,-319.575 95083.9,-320.386 95090.1,-317.866 95085.4,-316.157 95085.4,-316.157 95085.4,-316.157 95090.1,-317.866 95087,-311.928 95094.8,-319.575 95094.8,-319.575"/>
			<text textAnchor="middle" x="95028" y="-308.8">Gr314</text>
			</g>
			<g id="edge847" className="edge">
			<path d="M94891.3,-255.231C94919.8,-251.529 94964.9,-245.886 95004,-242 95031.4,-239.283 95062.1,-236.862 95086.6,-235.083"/>
			<polygon fill="#000000" stroke="#000000" points="95096.7,-234.361 95087,-239.564 95091.7,-234.718 95086.7,-235.075 95086.7,-235.075 95086.7,-235.075 95091.7,-234.718 95086.4,-230.587 95096.7,-234.361 95096.7,-234.361"/>
			<text textAnchor="middle" x="95028" y="-245.8">Kf133</text>
			</g>
			<g id="n590" className="node">
			<ellipse cx="95504" cy="-334" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="95504" y="-330.3">est </text>
			</g>
			<g id="edge133" className="edge">
			<path d="M95196.2,-334C95273.3,-334 95402.2,-334 95465.5,-334"/>
			<polygon fill="#000000" stroke="#000000" points="95475.9,-334 95465.9,-338.5 95470.9,-334 95465.9,-334 95465.9,-334 95465.9,-334 95470.9,-334 95465.9,-329.5 95475.9,-334 95475.9,-334"/>
			<text textAnchor="middle" x="95242" y="-337.8">Wi3818</text>
			</g>
			<g id="n592" className="node">
			<ellipse cx="95862" cy="-237" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="95862" y="-233.3">qualiter </text>
			</g>
			<g id="edge1314" className="edge">
			<path strokeWidth="1.4" d="M95175.4,-320.497C95206.1,-311.008 95249.2,-298.833 95288,-292 95510.2,-252.814 95570.5,-280.871 95794,-250 95798.7,-249.355 95803.5,-248.597 95808.3,-247.776"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="95818.2,-246.019 95809.2,-252.2 95813.3,-247.091 95808.4,-247.966 95808.4,-247.77 95808.3,-247.573 95813.3,-246.697 95807.6,-243.339 95818.2,-246.019 95818.2,-246.019"/>
			<text textAnchor="middle" x="95504" y="-295.8">Er16, Gr314, Mü22405</text>
			</g>
			<g id="edge90" className="edge">
			<path strokeWidth="2.2" d="M95169.6,-232.245C95285.9,-233.045 95656.3,-235.592 95801.6,-236.592"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="95811.7,-236.661 95801.7,-241.092 95806.7,-237.226 95801.7,-237.192 95801.7,-236.592 95801.7,-235.992 95806.7,-236.026 95801.7,-232.092 95811.7,-236.661 95811.7,-236.661"/>
			<text textAnchor="middle" x="95504" y="-238.8">Kf133, Kr185, Kr299, Mü11475, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="edge656" className="edge">
			<path d="M95184.5,-103C95256.6,-103 95387.9,-103 95457.3,-103"/>
			<polygon fill="#000000" stroke="#000000" points="95467.5,-103 95457.5,-107.5 95462.5,-103 95457.5,-103 95457.5,-103 95457.5,-103 95462.5,-103 95457.5,-98.5001 95467.5,-103 95467.5,-103"/>
			<text textAnchor="middle" x="95242" y="-106.8">Go325</text>
			</g>
			<g id="edge1319" className="edge">
			<path d="M95531.9,-335.721C95584.8,-338.013 95704.8,-337.804 95794,-297 95811.6,-288.935 95827.9,-274.57 95840,-261.917"/>
			<polygon fill="#000000" stroke="#000000" points="95847,-254.333 95843.6,-264.741 95843.6,-258.015 95840.2,-261.697 95840.2,-261.697 95840.2,-261.697 95843.6,-258.015 95836.9,-258.652 95847,-254.333 95847,-254.333"/>
			<text textAnchor="middle" x="95766" y="-318.8">Wi3818</text>
			</g>
			<g id="edge602" className="edge">
			<path d="M95535.9,-112.165C95589.3,-128.354 95702.1,-164.005 95794,-203 95804.1,-207.287 95814.8,-212.427 95824.6,-217.397"/>
			<polygon fill="#000000" stroke="#000000" points="95833.7,-222.077 95822.7,-221.499 95829.2,-219.788 95824.8,-217.498 95824.8,-217.498 95824.8,-217.498 95829.2,-219.788 95826.9,-213.498 95833.7,-222.077 95833.7,-222.077"/>
			<text textAnchor="middle" x="95766" y="-206.8">Ba96</text>
			</g>
			<g id="n654" className="node">
			<ellipse cx="102937" cy="-348" rx="27" ry="18"/>
			<text textAnchor="middle" x="102937" y="-344.3">de </text>
			</g>
			<g id="edge995" className="edge">
			<path d="M95540.6,-103C95604.7,-103 95743.7,-103 95861,-103 95861,-103 95861,-103 102612,-103 102757,-103 102878,-260.718 102920,-323.067"/>
			<polygon fill="#000000" stroke="#000000" points="102926,-331.544 102916,-325.714 102923,-327.382 102920,-323.22 102920,-323.22 102920,-323.22 102923,-327.382 102924,-320.727 102926,-331.544 102926,-331.544"/>
			<text textAnchor="middle" x="98876" y="-106.8">Go325</text>
			</g>
			<g id="n594" className="node">
			<ellipse cx="96052" cy="-237" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="96052" y="-233.3">Maria </text>
			</g>
			<g id="edge41" className="edge majority">
			<path strokeWidth="3.2" d="M95912.4,-237C95939.4,-237 95972.8,-237 96000.1,-237"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="96010.2,-237 96000.2,-241.5 96005.2,-238.1 96000.2,-238.1 96000.2,-237 96000.2,-235.9 96005.2,-235.9 96000.2,-232.5 96010.2,-237 96010.2,-237"/>
			<text textAnchor="middle" x="95961" y="-240.8">majority</text>
			</g>
			<g id="n596" className="node">
			<ellipse cx="96240" cy="-232" rx="44.6926" ry="18"/>
			<text textAnchor="middle" x="96240" y="-228.3">dicitur </text>
			</g>
			<g id="edge1131" className="edge">
			<path d="M96093.8,-235.903C96120.6,-235.183 96155.9,-234.233 96185,-233.451"/>
			<polygon fill="#000000" stroke="#000000" points="96195,-233.182 96185.2,-237.949 96190,-233.316 96185,-233.451 96185,-233.451 96185,-233.451 96190,-233.316 96184.9,-228.952 96195,-233.182 96195,-233.182"/>
			<text textAnchor="middle" x="96143" y="-238.8">Gr314</text>
			</g>
			<g id="n595" className="node">
			<ellipse cx="96240" cy="-286" rx="47.3916" ry="18"/>
			<text textAnchor="middle" x="96240" y="-282.3">dicatur </text>
			</g>
			<g id="edge1023" className="edge majority">
			<path strokeWidth="3" d="M96087,-246.995C96095.1,-249.346 96103.9,-251.805 96112,-254 96137.6,-260.923 96166.3,-268.19 96189.9,-274.047"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="96199.7,-276.465 96188.9,-278.434 96194.6,-276.236 96189.8,-275.037 96190,-274.066 96190.3,-273.095 96195.1,-274.295 96191.1,-269.697 96199.7,-276.465 96199.7,-276.465"/>
			<text textAnchor="middle" x="96143" y="-272.8">majority</text>
			</g>
			<g id="n598" className="node">
			<ellipse cx="96428" cy="-244" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="96428" y="-240.3">mater </text>
			</g>
			<g id="edge422" className="edge">
			<path d="M96284.6,-234.813C96312.1,-236.584 96347.6,-238.877 96376.3,-240.728"/>
			<polygon fill="#000000" stroke="#000000" points="96386.5,-241.389 96376.3,-245.236 96381.5,-241.067 96376.5,-240.745 96376.5,-240.745 96376.5,-240.745 96381.5,-241.067 96376.8,-236.254 96386.5,-241.389 96386.5,-241.389"/>
			<text textAnchor="middle" x="96337" y="-243.8">Gr314</text>
			</g>
			<g id="edge997" className="edge majority">
			<path strokeWidth="3" d="M96282.3,-277.655C96307.2,-272.517 96339.5,-265.658 96368,-259 96372.6,-257.916 96377.5,-256.749 96382.3,-255.56"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="96392.1,-253.112 96383.5,-259.9 96387.5,-255.293 96382.7,-256.504 96382.4,-255.534 96382.2,-254.564 96387,-253.353 96381.3,-251.168 96392.1,-253.112 96392.1,-253.112"/>
			<text textAnchor="middle" x="96337" y="-275.8">majority</text>
			</g>
			<g id="n600" className="node">
			<ellipse cx="96601" cy="-244" rx="32.4942" ry="18"/>
			<text textAnchor="middle" x="96601" y="-240.3">ueri </text>
			</g>
			<g id="edge238" className="edge majority">
			<path strokeWidth="3.2" d="M96470,-244C96496.7,-244 96531.4,-244 96558.2,-244"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="96568.5,-244 96558.5,-248.5 96563.5,-245.1 96558.5,-245.1 96558.5,-244 96558.5,-242.9 96563.5,-242.9 96558.5,-239.5 96568.5,-244 96568.5,-244"/>
			<text textAnchor="middle" x="96519" y="-247.8">majority</text>
			</g>
			<g id="n602" className="node">
			<ellipse cx="96793" cy="-244" rx="61.1893" ry="18"/>
			<text textAnchor="middle" x="96793" y="-240.3">Salomonis </text>
			</g>
			<g id="edge7" className="edge majority">
			<path strokeWidth="3.2" d="M96633.8,-244C96657.7,-244 96691.4,-244 96721.6,-244"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="96731.6,-244 96721.6,-248.5 96726.6,-245.1 96721.6,-245.1 96721.6,-244 96721.6,-242.9 96726.6,-242.9 96721.6,-239.5 96731.6,-244 96731.6,-244"/>
			<text textAnchor="middle" x="96683" y="-247.8">majority</text>
			</g>
			<g id="n604" className="node">
			<ellipse cx="96980" cy="-224" rx="27" ry="18"/>
			<text textAnchor="middle" x="96980" y="-220.3">id </text>
			</g>
			<g id="edge1279" className="edge majority">
			<path strokeWidth="3" d="M96850.5,-237.891C96880.6,-234.64 96916.7,-230.739 96942.9,-227.899"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="96953.2,-226.791 96943.7,-232.34 96948.3,-228.322 96943.4,-228.86 96943.2,-227.866 96943.1,-226.871 96948.1,-226.334 96942.8,-223.392 96953.2,-226.791 96953.2,-226.791"/>
			<text textAnchor="middle" x="96903" y="-238.8">majority</text>
			</g>
			<g id="n606" className="node">
			<ellipse cx="96980" cy="-305" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="96980" y="-301.3">uel </text>
			</g>
			<g id="edge1204" className="edge">
			<path d="M96834.6,-257.387C96867.8,-268.336 96914.2,-283.637 96945.4,-293.91"/>
			<polygon fill="#000000" stroke="#000000" points="96954.9,-297.057 96944,-298.199 96950.2,-295.491 96945.4,-293.926 96945.4,-293.926 96945.4,-293.926 96950.2,-295.491 96946.8,-289.652 96954.9,-297.057 96954.9,-297.057"/>
			<text textAnchor="middle" x="96903" y="-291.8">Wi3818</text>
			</g>
			<g id="n607" className="node">
			<ellipse cx="97141" cy="-215" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="97141" y="-211.3">est </text>
			</g>
			<g id="edge1211" className="edge majority">
			<path strokeWidth="3" d="M97007.3,-222.514C97033.3,-221.042 97073.3,-218.774 97102.6,-217.115"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="97112.9,-216.534 97103.2,-221.592 97108,-217.815 97103,-218.097 97102.9,-217.099 97102.9,-216.1 97107.9,-215.818 97102.7,-212.606 97112.9,-216.534 97112.9,-216.534"/>
			<text textAnchor="middle" x="97057" y="-224.8">majority</text>
			</g>
			<g id="n609" className="node">
			<ellipse cx="97141" cy="-320" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="97141" y="-316.3">solis </text>
			</g>
			<g id="edge318" className="edge">
			<path d="M97008,-307.545C97032.3,-309.837 97068.4,-313.249 97096.8,-315.922"/>
			<polygon fill="#000000" stroke="#000000" points="97106.8,-316.87 97096.4,-320.411 97101.8,-316.4 97096.9,-315.93 97096.9,-315.93 97096.9,-315.93 97101.8,-316.4 97097.3,-311.45 97106.8,-316.87 97106.8,-316.87"/>
			<text textAnchor="middle" x="97057" y="-317.8">Wi3818</text>
			</g>
			<g id="n611" className="node">
			<ellipse cx="97408" cy="-267" rx="53.8905" ry="18"/>
			<text textAnchor="middle" x="97408" y="-263.3">Christus </text>
			</g>
			<g id="edge123" className="edge">
			<path strokeWidth="1.2" d="M97165.3,-224.038C97174.2,-227.225 97184.5,-230.606 97194,-233 97244.8,-245.736 97303.6,-254.701 97346.6,-260.216"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="97356.6,-261.476 97346.1,-264.692 97351.6,-260.951 97346.6,-260.326 97346.7,-260.227 97346.7,-260.128 97351.6,-260.752 97347.2,-255.762 97356.6,-261.476 97356.6,-261.476"/>
			<text textAnchor="middle" x="97265" y="-261.8">Mü11475, MüU151</text>
			</g>
			<g id="n610" className="node">
			<ellipse cx="97408" cy="-213" rx="40.0939" ry="18"/>
			<text textAnchor="middle" x="97408" y="-209.3">Cristi </text>
			</g>
			<g id="edge897" className="edge">
			<path d="M97169.4,-214.793C97213.6,-214.46 97301.4,-213.797 97357,-213.377"/>
			<polygon fill="#000000" stroke="#000000" points="97367.4,-213.299 97357.4,-217.875 97362.4,-213.337 97357.4,-213.375 97357.4,-213.375 97357.4,-213.375 97362.4,-213.337 97357.3,-208.875 97367.4,-213.299 97367.4,-213.299"/>
			<text textAnchor="middle" x="97265" y="-217.8">Ba96</text>
			</g>
			<g id="n612" className="node">
			<ellipse cx="97408" cy="-159" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="97408" y="-155.3">Christi </text>
			</g>
			<g id="edge1038" className="edge majority">
			<path strokeWidth="2.4" d="M97164.1,-204.797C97173.2,-200.942 97184,-196.812 97194,-194 97247.1,-179.109 97309.6,-169.771 97353.1,-164.523"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="97363.1,-163.339 97353.7,-168.975 97358.3,-164.617 97353.3,-165.201 97353.2,-164.506 97353.1,-163.81 97358.1,-163.227 97352.7,-160.036 97363.1,-163.339 97363.1,-163.339"/>
			<text textAnchor="middle" x="97265" y="-197.8">majority</text>
			</g>
			<g id="n613" className="node">
			<ellipse cx="97667" cy="-267" rx="27" ry="18"/>
			<text textAnchor="middle" x="97667" y="-263.3">et </text>
			</g>
			<g id="edge1135" className="edge">
			<path d="M97175.5,-321.446C97254.5,-324.04 97458.3,-325.929 97622,-286 97626.5,-284.906 97631.1,-283.393 97635.6,-281.695"/>
			<polygon fill="#000000" stroke="#000000" points="97645,-277.771 97637.5,-285.761 97640.4,-279.688 97635.8,-281.605 97635.8,-281.605 97635.8,-281.605 97640.4,-279.688 97634.1,-277.449 97645,-277.771 97645,-277.771"/>
			<text textAnchor="middle" x="97408" y="-323.8">Wi3818</text>
			</g>
			<g id="edge896" className="edge">
			<path strokeWidth="1.2" d="M97462.3,-267C97512.4,-267 97586.1,-267 97629.7,-267"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="97639.9,-267 97629.9,-271.5 97634.9,-267.1 97629.9,-267.1 97629.9,-267 97629.9,-266.9 97634.9,-266.9 97629.9,-262.5 97639.9,-267 97639.9,-267"/>
			<text textAnchor="middle" x="97551" y="-270.8">Mü11475, MüU151</text>
			</g>
			<g id="edge434" className="edge">
			<path d="M97447.7,-216.486C97490.9,-221.033 97562.5,-230.548 97622,-248 97626.4,-249.299 97631,-250.929 97635.5,-252.683"/>
			<polygon fill="#000000" stroke="#000000" points="97644.9,-256.646 97633.9,-256.925 97640.3,-254.711 97635.7,-252.776 97635.7,-252.776 97635.7,-252.776 97640.3,-254.711 97637.4,-248.627 97644.9,-256.646 97644.9,-256.646"/>
			<text textAnchor="middle" x="97551" y="-251.8">Ba96</text>
			</g>
			<g id="edge379" className="edge majority">
			<path strokeWidth="2.4" d="M97454.4,-158.137C97500.3,-159.378 97571.5,-167.302 97622,-201 97636.3,-210.569 97647.2,-226.551 97654.5,-240.391"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="97659,-249.525 97650.5,-242.555 97656.2,-245.353 97654,-240.871 97654.6,-240.561 97655.2,-240.251 97657.4,-244.733 97658.6,-238.567 97659,-249.525 97659,-249.525"/>
			<text textAnchor="middle" x="97551" y="-204.8">majority</text>
			</g>
			<g id="n618" className="node">
			<ellipse cx="97842" cy="-267" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="97842" y="-263.3">qualiter </text>
			</g>
			<g id="edge605" className="edge majority">
			<path strokeWidth="3.2" d="M97694.3,-267C97717.4,-267 97751.8,-267 97781.5,-267"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="97791.8,-267 97781.8,-271.5 97786.8,-268.1 97781.8,-268.1 97781.8,-267 97781.8,-265.9 97786.8,-265.9 97781.8,-262.5 97791.8,-267 97791.8,-267"/>
			<text textAnchor="middle" x="97743" y="-270.8">majority</text>
			</g>
			<g id="n621" className="node">
			<ellipse cx="98044" cy="-267" rx="53.8905" ry="18"/>
			<text textAnchor="middle" x="98044" y="-263.3">Christus </text>
			</g>
			<g id="edge314" className="edge majority">
			<path strokeWidth="3" d="M97892.2,-267C97918.6,-267 97951.3,-267 97979.6,-267"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="97989.8,-267 97979.8,-271.5 97984.8,-268 97979.8,-268 97979.8,-267 97979.8,-266 97984.8,-266 97979.8,-262.5 97989.8,-267 97989.8,-267"/>
			<text textAnchor="middle" x="97941" y="-270.8">majority</text>
			</g>
			<g id="n622" className="node">
			<ellipse cx="98292" cy="-309" rx="47.3916" ry="18"/>
			<text textAnchor="middle" x="98292" y="-305.3">dicatur </text>
			</g>
			<g id="edge50" className="edge">
			<path d="M97880.3,-278.82C97889.9,-281.519 97900.3,-284.138 97910,-286 98023.6,-307.725 98159.4,-310.518 98234.3,-310.095"/>
			<polygon fill="#000000" stroke="#000000" points="98244.5,-310.016 98234.5,-314.594 98239.5,-310.055 98234.5,-310.094 98234.5,-310.094 98234.5,-310.094 98239.5,-310.055 98234.5,-305.594 98244.5,-310.016 98244.5,-310.016"/>
			<text textAnchor="middle" x="98044" y="-309.8">Kr185</text>
			</g>
			<g id="edge101" className="edge majority">
			<path strokeWidth="2.4" d="M98092.4,-275.098C98134.2,-282.226 98194.9,-292.592 98238.2,-299.982"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="98248.2,-301.699 98237.6,-304.452 98243.2,-301.548 98238.3,-300.706 98238.4,-300.016 98238.5,-299.326 98243.4,-300.168 98239.1,-295.58 98248.2,-301.699 98248.2,-301.699"/>
			<text textAnchor="middle" x="98147" y="-292.8">majority</text>
			</g>
			<g id="n623" className="node">
			<ellipse cx="98542" cy="-309" rx="55.7903" ry="18"/>
			<text textAnchor="middle" x="98542" y="-305.3">Salomon, </text>
			</g>
			<g id="edge1110" className="edge">
			<path strokeWidth="1.4" d="M98096.4,-262.741C98163.8,-258.135 98285.3,-253.162 98388,-267 98424.3,-271.892 98464.2,-283.033 98494.1,-292.612"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="98503.9,-295.789 98493,-296.97 98499,-294.43 98494.3,-292.881 98494.3,-292.691 98494.4,-292.501 98499.2,-294.05 98495.7,-288.412 98503.9,-295.789 98503.9,-295.789"/>
			<text textAnchor="middle" x="98292" y="-270.8">Er16, Mü11475, Mü28315</text>
			</g>
			<g id="edge22" className="edge majority">
			<path strokeWidth="2.6" d="M98339.6,-309C98378.1,-309 98433.1,-309 98475.9,-309"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="98485.9,-309 98475.9,-313.5 98480.9,-309.8 98475.9,-309.8 98475.9,-309 98475.9,-308.2 98480.9,-308.2 98475.9,-304.5 98485.9,-309 98485.9,-309"/>
			<text textAnchor="middle" x="98437" y="-312.8">majority</text>
			</g>
			<g id="n625" className="node">
			<ellipse cx="98876" cy="-156" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="98876" y="-152.3">habetur </text>
			</g>
			<g id="edge788" className="edge">
			<path d="M98547.8,-290.707C98556.3,-262.317 98577,-208.289 98616,-183 98677.1,-143.434 98763.8,-142.952 98819.7,-148.045"/>
			<polygon fill="#000000" stroke="#000000" points="98829.8,-149.053 98819.4,-152.535 98824.8,-148.555 98819.8,-148.057 98819.8,-148.057 98819.8,-148.057 98824.8,-148.555 98820.3,-143.58 98829.8,-149.053 98829.8,-149.053"/>
			<text textAnchor="middle" x="98712" y="-186.8">Gr314</text>
			</g>
			<g id="n624" className="node">
			<ellipse cx="98876" cy="-263" rx="32.4942" ry="18"/>
			<text textAnchor="middle" x="98876" y="-259.3">heri </text>
			</g>
			<g id="edge1137" className="edge">
			<path strokeWidth="1.2" d="M98573.9,-294.226C98586.7,-288.804 98601.8,-283.211 98616,-280 98691.3,-263.025 98781.7,-261.152 98833.3,-261.773"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="98843.5,-261.933 98833.4,-266.274 98838.5,-261.953 98833.5,-261.874 98833.5,-261.774 98833.5,-261.674 98838.5,-261.753 98833.5,-257.275 98843.5,-261.933 98843.5,-261.933"/>
			<text textAnchor="middle" x="98712" y="-283.8">Kr299, Mü22405</text>
			</g>
			<g id="n626" className="node">
			<ellipse cx="98876" cy="-398" rx="49.2915" ry="18"/>
			<text textAnchor="middle" x="98876" y="-394.3">dicatur, </text>
			</g>
			<g id="edge771" className="edge">
			<path strokeWidth="1.4" d="M98559.6,-326.279C98573.3,-339.498 98594.2,-356.949 98616,-366 98681.1,-392.973 98762.6,-398.986 98816.7,-399.549"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="98826.8,-399.594 98816.7,-404.05 98821.8,-399.772 98816.8,-399.75 98816.8,-399.55 98816.8,-399.35 98821.8,-399.372 98816.8,-395.05 98826.8,-399.594 98826.8,-399.594"/>
			<text textAnchor="middle" x="98712" y="-402.8">Er16, Mü11475, Mü28315</text>
			</g>
			<g id="n627" className="node">
			<ellipse cx="99092" cy="-212" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="99092" y="-208.3">dictum </text>
			</g>
			<g id="edge1167" className="edge">
			<path d="M98561.7,-292.051C98575.7,-280.348 98595.7,-265.43 98616,-257 98758.9,-197.547 98946.1,-200.898 99037,-207.054"/>
			<polygon fill="#000000" stroke="#000000" points="99047,-207.775 99036.7,-211.549 99042,-207.418 99037,-207.061 99037,-207.061 99037,-207.061 99042,-207.418 99037.4,-202.572 99047,-207.775 99047,-207.775"/>
			<text textAnchor="middle" x="98876" y="-212.8">Kr185</text>
			</g>
			<g id="n633" className="node">
			<ellipse cx="99578" cy="-255" rx="43.5923" ry="18"/>
			<text textAnchor="middle" x="99578" y="-251.3">prius. &#160;</text>
			</g>
			<g id="edge607" className="edge">
			<path strokeWidth="1.2" d="M98597.5,-306.365C98671.8,-302.76 98809,-296.048 98926,-290 99148.6,-278.497 99413.9,-263.984 99524.5,-257.896"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="99534.7,-257.333 99525,-262.376 99529.7,-257.708 99524.8,-257.983 99524.7,-257.883 99524.7,-257.783 99529.7,-257.508 99524.5,-253.39 99534.7,-257.333 99534.7,-257.333"/>
			<text textAnchor="middle" x="99092" y="-287.8">Ba96, Kf133</text>
			</g>
			<g id="n629" className="node">
			<ellipse cx="99578" cy="-398" rx="37.8943" ry="18"/>
			<text textAnchor="middle" x="99578" y="-394.3">prius </text>
			</g>
			<g id="edge883" className="edge">
			<path strokeWidth="1.2" d="M98549.4,-326.959C98559.3,-352.092 98581,-397.027 98616,-418 98715.2,-477.516 98759.3,-444 98875,-444 98875,-444 98875,-444 99417,-444 99461.1,-444 99509.5,-427.633 99541.4,-414.424"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="99550.8,-410.448 99543.3,-418.505 99546.2,-412.499 99541.6,-414.457 99541.6,-414.365 99541.5,-414.273 99546.1,-412.315 99539.8,-410.224 99550.8,-410.448 99550.8,-410.448"/>
			<text textAnchor="middle" x="99092" y="-447.8">MüU151, Sg524</text>
			</g>
			<g id="n632" className="node">
			<ellipse cx="100022" cy="-343" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="100022" y="-339.3">dictum </text>
			</g>
			<g id="edge1225" className="edge">
			<path d="M98589.2,-318.811C98653.1,-331.502 98772.3,-352 98875,-352 98875,-352 98875,-352 99579,-352 99718.3,-352 99882.1,-347.479 99965.8,-344.846"/>
			<polygon fill="#000000" stroke="#000000" points="99975.8,-344.527 99966,-349.342 99970.8,-344.686 99965.8,-344.845 99965.8,-344.845 99965.8,-344.845 99970.8,-344.686 99965.7,-340.347 99975.8,-344.527 99975.8,-344.527"/>
			<text textAnchor="middle" x="99266" y="-355.8">Wi3818</text>
			</g>
			<g id="n628" className="node">
			<ellipse cx="99092" cy="-152" rx="59.5901" ry="18"/>
			<text textAnchor="middle" x="99092" y="-148.3">superius. &#160;</text>
			</g>
			<g id="edge996" className="edge">
			<path d="M98926.1,-155.082C98954.5,-154.552 98990.6,-153.876 99021.9,-153.292"/>
			<polygon fill="#000000" stroke="#000000" points="99032.2,-153.098 99022.3,-157.785 99027.2,-153.192 99022.2,-153.285 99022.2,-153.285 99022.2,-153.285 99027.2,-153.192 99022.2,-148.786 99032.2,-153.098 99032.2,-153.098"/>
			<text textAnchor="middle" x="98979" y="-157.8">Gr314</text>
			</g>
			<g id="edge851" className="edge">
			<path d="M98906.3,-256.016C98941.3,-247.674 99000.4,-233.596 99042.3,-223.609"/>
			<polygon fill="#000000" stroke="#000000" points="99052.3,-221.228 99043.6,-227.923 99047.4,-222.387 99042.6,-223.546 99042.6,-223.546 99042.6,-223.546 99047.4,-222.387 99041.5,-219.169 99052.3,-221.228 99052.3,-221.228"/>
			<text textAnchor="middle" x="98979" y="-249.8">Mü22405</text>
			</g>
			<g id="edge121" className="edge">
			<path d="M98905.9,-270.271C98936.9,-277.75 98987.6,-289.114 99032,-295 99134.8,-308.634 99161.3,-309 99265,-309 99265,-309 99265,-309 99579,-309 99719.7,-309 99885,-326.35 99967.9,-336.262"/>
			<polygon fill="#000000" stroke="#000000" points="99977.8,-337.462 99967.3,-340.73 99972.8,-336.862 99967.9,-336.263 99967.9,-336.263 99967.9,-336.263 99972.8,-336.862 99968.4,-331.795 99977.8,-337.462 99977.8,-337.462"/>
			<text textAnchor="middle" x="99416" y="-312.8">Kr299</text>
			</g>
			<g id="edge1331" className="edge">
			<path strokeWidth="1.4" d="M98925.7,-398C99054.4,-398 99402.9,-398 99529.9,-398"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="99540.1,-398 99530.1,-402.5 99535.1,-398.2 99530.1,-398.2 99530.1,-398 99530.1,-397.8 99535.1,-397.8 99530.1,-393.5 99540.1,-398 99540.1,-398"/>
			<text textAnchor="middle" x="99266" y="-401.8">Er16, Mü11475, Mü28315</text>
			</g>
			<g id="n630" className="node">
			<ellipse cx="99416" cy="-212" rx="33.5952" ry="18"/>
			<text textAnchor="middle" x="99416" y="-208.3">est. &#160;</text>
			</g>
			<g id="edge347" className="edge">
			<path strokeWidth="1.2" d="M99138.5,-212C99200.6,-212 99311.2,-212 99372,-212"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="99382,-212 99372,-216.5 99377,-212.1 99372,-212.1 99372,-212 99372,-211.9 99377,-211.9 99372,-207.5 99382,-212 99382,-212"/>
			<text textAnchor="middle" x="99266" y="-215.8">Kr185, Mü22405</text>
			</g>
			<g id="n631" className="node">
			<ellipse cx="99416" cy="-149" rx="35.9954" ry="18"/>
			<text textAnchor="middle" x="99416" y="-145.3">Item </text>
			</g>
			<g id="edge531" className="edge">
			<path d="M99152.1,-151.45C99215,-150.864 99313.1,-149.949 99370,-149.419"/>
			<polygon fill="#000000" stroke="#000000" points="99380.2,-149.325 99370.2,-153.918 99375.2,-149.371 99370.2,-149.418 99370.2,-149.418 99370.2,-149.418 99375.2,-149.371 99370.1,-144.918 99380.2,-149.325 99380.2,-149.325"/>
			<text textAnchor="middle" x="99266" y="-154.8">Gr314</text>
			</g>
			<g id="edge67" className="edge">
			<path d="M99448,-217.95C99467.6,-221.949 99493.5,-227.639 99516,-234 99522.2,-235.757 99528.7,-237.79 99535.1,-239.885"/>
			<polygon fill="#000000" stroke="#000000" points="99544.9,-243.198 99534,-244.263 99540.2,-241.598 99535.4,-239.999 99535.4,-239.999 99535.4,-239.999 99540.2,-241.598 99536.9,-235.735 99544.9,-243.198 99544.9,-243.198"/>
			<text textAnchor="middle" x="99493" y="-237.8">Kr185</text>
			</g>
			<g id="n653" className="node">
			<ellipse cx="102611" cy="-297" rx="63.0888" ry="18"/>
			<text textAnchor="middle" x="102611" y="-293.3">Notandum </text>
			</g>
			<g id="edge1334" className="edge">
			<path d="M99449.1,-208.17C99481.4,-204.658 99532.6,-200 99577,-200 99577,-200 99577,-200 102401,-200 102471,-200 102542,-244.975 102581,-273.675"/>
			<polygon fill="#000000" stroke="#000000" points="102589,-279.882 102579,-277.425 102585,-276.861 102581,-273.84 102581,-273.84 102581,-273.84 102585,-276.861 102584,-270.254 102589,-279.882 102589,-279.882"/>
			<text textAnchor="middle" x="101197" y="-203.8">Mü22405</text>
			</g>
			<g id="edge114" className="edge">
			<path d="M99452,-149C99484.4,-149 99533.9,-149 99577,-149 99577,-149 99577,-149 102401,-149 102485,-149 102558,-228.791 102591,-271.199"/>
			<polygon fill="#000000" stroke="#000000" points="102597,-279.148 102588,-273.945 102594,-275.178 102591,-271.209 102591,-271.209 102591,-271.209 102594,-275.178 102595,-268.473 102597,-279.148 102597,-279.148"/>
			<text textAnchor="middle" x="101197" y="-152.8">Gr314</text>
			</g>
			<g id="edge1337" className="edge">
			<path strokeWidth="1.2" d="M99621.7,-254.084C99707.8,-252.837 99899.1,-253.283 99958,-280 99976,-288.145 99991.7,-303.81 100003,-317.481"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="100009,-325.65 99999.6,-320.551 100006,-321.775 100003,-317.838 100003,-317.777 100003,-317.715 100006,-321.652 100007,-315.002 100009,-325.65 100009,-325.65"/>
			<text textAnchor="middle" x="99799" y="-283.8">Ba96, Kf133</text>
			</g>
			<g id="n641" className="node">
			<ellipse cx="100625" cy="-343" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="100625" y="-339.3">Nota </text>
			</g>
			<g id="edge884" className="edge">
			<path d="M99621.4,-252.56C99798.4,-242.69 100473,-208.285 100556,-252 100568,-258.523 100566,-266.649 100574,-278 100584,-291.417 100595,-306.106 100604,-318.121"/>
			<polygon fill="#000000" stroke="#000000" points="100611,-326.34 100601,-321.23 100608,-322.4 100605,-318.46 100605,-318.46 100605,-318.46 100608,-322.4 100608,-315.69 100611,-326.34 100611,-326.34"/>
			<text textAnchor="middle" x="100117" y="-235.8">Kr185</text>
			</g>
			<g id="edge679" className="edge">
			<path strokeWidth="1.8" d="M99615.8,-398.116C99684.1,-397.623 99834.7,-393.207 99958,-366 99965.3,-364.379 99973,-362.111 99980.3,-359.625"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="99990.1,-356.142 99982.2,-363.744 99985.5,-358.201 99980.8,-359.883 99980.7,-359.507 99980.5,-359.13 99985.2,-357.447 99979.2,-355.269 99990.1,-356.142 99990.1,-356.142"/>
			<text textAnchor="middle" x="99799" y="-400.8">Er16, Mü11475, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="n634" className="node">
			<ellipse cx="100200" cy="-343" rx="33.5952" ry="18"/>
			<text textAnchor="middle" x="100200" y="-339.3">est. &#160;</text>
			</g>
			<g id="edge695" className="edge majority">
			<path strokeWidth="2.6" d="M100068,-343C100095,-343 100129,-343 100156,-343"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="100166,-343 100156,-347.5 100161,-343.8 100156,-343.8 100156,-343 100156,-342.2 100161,-342.2 100156,-338.5 100166,-343 100166,-343"/>
			<text textAnchor="middle" x="100117" y="-346.8">majority</text>
			</g>
			<g id="edge570" className="edge">
			<path d="M100234,-343C100309,-343 100492,-343 100578,-343"/>
			<polygon fill="#000000" stroke="#000000" points="100589,-343 100579,-347.5 100584,-343 100579,-343 100579,-343 100579,-343 100584,-343 100579,-338.5 100589,-343 100589,-343"/>
			<text textAnchor="middle" x="100404" y="-346.8">Kf133</text>
			</g>
			<g id="n636" className="node">
			<ellipse cx="100625" cy="-406" rx="50.8918" ry="18"/>
			<text textAnchor="middle" x="100625" y="-402.3">Vlterius </text>
			</g>
			<g id="edge933" className="edge">
			<path strokeWidth="1.8" d="M100227,-353.987C100235,-356.995 100244,-359.98 100252,-362 100360,-388.196 100490,-399.039 100565,-403.344"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="100575,-403.909 100564,-407.842 100570,-404.028 100565,-403.748 100565,-403.349 100565,-402.949 100570,-403.229 100565,-398.856 100575,-403.909 100575,-403.909"/>
			<text textAnchor="middle" x="100404" y="-405.8">Er16, Kr299, Mü11475, MüU151, Wi3818</text>
			</g>
			<g id="n640" className="node">
			<ellipse cx="100625" cy="-251" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="100625" y="-247.3">Hic </text>
			</g>
			<g id="edge755" className="edge">
			<path d="M100208,-325.466C100216,-308.5 100231,-283.687 100252,-272 100361,-212.329 100515,-230.236 100586,-243.005"/>
			<polygon fill="#000000" stroke="#000000" points="100596,-244.92 100585,-247.502 100591,-244 100586,-243.079 100586,-243.079 100586,-243.079 100591,-244 100587,-238.656 100596,-244.92 100596,-244.92"/>
			<text textAnchor="middle" x="100404" y="-275.8">Ba96</text>
			</g>
			<g id="n639" className="node">
			<ellipse cx="100953" cy="-482" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="100953" y="-478.3">Nota </text>
			</g>
			<g id="edge1347" className="edge">
			<path d="M100207,-360.617C100215,-379.039 100229,-407.157 100252,-421 100468,-552.891 100793,-511.215 100909,-490.557"/>
			<polygon fill="#000000" stroke="#000000" points="100919,-488.749 100910,-494.968 100914,-489.645 100909,-490.54 100909,-490.54 100909,-490.54 100914,-489.645 100908,-486.113 100919,-488.749 100919,-488.749"/>
			<text textAnchor="middle" x="100625" y="-516.8">Mü28315</text>
			</g>
			<g id="edge533" className="edge">
			<path d="M100233,-338.714C100321,-327.294 100573,-297 100784,-297 100784,-297 100784,-297 102401,-297 102446,-297 102497,-297 102538,-297"/>
			<polygon fill="#000000" stroke="#000000" points="102548,-297 102538,-301.5 102543,-297 102538,-297 102538,-297 102538,-297 102543,-297 102538,-292.5 102548,-297 102548,-297"/>
			<text textAnchor="middle" x="101679" y="-300.8">Sg524</text>
			</g>
			<g id="edge329" className="edge">
			<path strokeWidth="1.2" d="M100662,-341.551C100722,-339.246 100846,-335 100952,-335 100952,-335 100952,-335 101680,-335 102130,-335 102242,-343.412 102692,-347 102766,-347.589 102852,-347.84 102900,-347.939"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="102910,-347.96 102900,-352.44 102905,-348.05 102900,-348.04 102900,-347.94 102900,-347.84 102905,-347.85 102900,-343.44 102910,-347.96 102910,-347.96"/>
			<text textAnchor="middle" x="101939" y="-339.8">Kf133, Kr185</text>
			</g>
			<g id="edge840" className="edge">
			<path d="M100659,-419.411C100670,-423.332 100683,-427.288 100694,-430 100773,-448.786 100797,-433.215 100876,-453 100889,-456.326 100903,-461.298 100916,-466.191"/>
			<polygon fill="#000000" stroke="#000000" points="100925,-470.064 100914,-470.477 100921,-468.186 100916,-466.307 100916,-466.307 100916,-466.307 100921,-468.186 100918,-462.137 100925,-470.064 100925,-470.064"/>
			<text textAnchor="middle" x="100785" y="-456.8">Er16</text>
			</g>
			<g id="n638" className="node">
			<ellipse cx="100953" cy="-427" rx="58.4896" ry="18"/>
			<text textAnchor="middle" x="100953" y="-423.3">sciendum </text>
			</g>
			<g id="edge528" className="edge">
			<path strokeWidth="1.4" d="M100676,-406.029C100726,-406.474 100807,-408.319 100876,-415 100881,-415.493 100886,-416.108 100892,-416.797"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="100902,-418.202 100891,-421.288 100897,-417.715 100892,-417.029 100892,-416.831 100892,-416.633 100897,-417.318 100893,-412.373 100902,-418.202 100902,-418.202"/>
			<text textAnchor="middle" x="100785" y="-418.8">Kr299, MüU151, Wi3818</text>
			</g>
			<g id="edge869" className="edge">
			<path d="M100673,-400.107C100736,-392.716 100853,-381 100952,-381 100952,-381 100952,-381 101680,-381 101760,-381 102404,-327.279 102530,-311 102536,-310.247 102542,-309.368 102548,-308.425"/>
			<polygon fill="#000000" stroke="#000000" points="102558,-306.787 102549,-312.826 102553,-307.586 102548,-308.384 102548,-308.384 102548,-308.384 102553,-307.586 102547,-303.942 102558,-306.787 102558,-306.787"/>
			<text textAnchor="middle" x="101827" y="-377.8">Mü11475</text>
			</g>
			<g id="n643" className="node">
			<ellipse cx="100953" cy="-251" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="100953" y="-247.3">non </text>
			</g>
			<g id="edge126" className="edge">
			<path d="M100656,-251C100715,-251 100846,-251 100912,-251"/>
			<polygon fill="#000000" stroke="#000000" points="100922,-251 100912,-255.5 100917,-251 100912,-251 100912,-251 100912,-251 100917,-251 100912,-246.5 100922,-251 100922,-251"/>
			<text textAnchor="middle" x="100785" y="-254.8">Ba96</text>
			</g>
			<g id="n642" className="node">
			<ellipse cx="101197" cy="-483" rx="27" ry="18"/>
			<text textAnchor="middle" x="101197" y="-479.3">de </text>
			</g>
			<g id="edge1169" className="edge">
			<path strokeWidth="1.2" d="M100989,-482.146C101035,-482.335 101114,-482.66 101160,-482.85"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="101170,-482.892 101160,-487.35 101165,-482.971 101160,-482.95 101160,-482.85 101160,-482.75 101165,-482.771 101160,-478.35 101170,-482.892 101170,-482.892"/>
			<text textAnchor="middle" x="101087" y="-485.8">Er16, Mü28315</text>
			</g>
			<g id="edge785" className="edge">
			<path d="M101007,-434.36C101045,-440.371 101098,-449.999 101144,-463 101151,-464.903 101158,-467.314 101164,-469.799"/>
			<polygon fill="#000000" stroke="#000000" points="101174,-473.44 101163,-474.023 101169,-471.633 101164,-469.827 101164,-469.827 101164,-469.827 101169,-471.633 101166,-465.631 101174,-473.44 101174,-473.44"/>
			<text textAnchor="middle" x="101087" y="-466.8">MüU151</text>
			</g>
			<g id="edge113" className="edge">
			<path strokeWidth="1.2" d="M101012,-425.883C101061,-425.03 101133,-424 101196,-424 101196,-424 101196,-424 102612,-424 102723,-424 102763,-460.45 102862,-410 102873,-404.273 102871,-396.636 102880,-388 102889,-379.934 102899,-372.138 102908,-365.604"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="102917,-359.987 102911,-369.314 102913,-362.869 102908,-365.669 102908,-365.586 102908,-365.503 102912,-362.703 102906,-361.857 102917,-359.987 102917,-359.987"/>
			<text textAnchor="middle" x="102069" y="-427.8">Kr299, Wi3818</text>
			</g>
			<g id="n645" className="node">
			<ellipse cx="101197" cy="-251" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="101197" y="-247.3">est </text>
			</g>
			<g id="edge805" className="edge">
			<path d="M100984,-251C101028,-251 101111,-251 101159,-251"/>
			<polygon fill="#000000" stroke="#000000" points="101169,-251 101159,-255.5 101164,-251 101159,-251 101159,-251 101159,-251 101164,-251 101159,-246.5 101169,-251 101169,-251"/>
			<text textAnchor="middle" x="101087" y="-254.8">Ba96</text>
			</g>
			<g id="n647" className="node">
			<ellipse cx="101511" cy="-251" rx="57.3905" ry="18"/>
			<text textAnchor="middle" x="101511" y="-247.3">deffectus </text>
			</g>
			<g id="edge14" className="edge">
			<path d="M101225,-251C101273,-251 101376,-251 101444,-251"/>
			<polygon fill="#000000" stroke="#000000" points="101454,-251 101444,-255.5 101449,-251 101444,-251 101444,-251 101444,-251 101449,-251 101444,-246.5 101454,-251 101454,-251"/>
			<text textAnchor="middle" x="101343" y="-254.8">Ba96</text>
			</g>
			<g id="n644" className="node">
			<ellipse cx="101511" cy="-483" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="101511" y="-479.3">hoc </text>
			</g>
			<g id="edge1179" className="edge">
			<path strokeWidth="1.4" d="M101224,-483C101279,-483 101405,-483 101470,-483"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="101480,-483 101470,-487.5 101475,-483.2 101470,-483.2 101470,-483 101470,-482.8 101475,-482.8 101470,-478.5 101480,-483 101480,-483"/>
			<text textAnchor="middle" x="101343" y="-486.8">Er16, Mü28315, MüU151</text>
			</g>
			<g id="n649" className="node">
			<ellipse cx="101827" cy="-251" rx="27" ry="18"/>
			<text textAnchor="middle" x="101827" y="-247.3">ut </text>
			</g>
			<g id="edge907" className="edge">
			<path d="M101568,-251C101633,-251 101735,-251 101789,-251"/>
			<polygon fill="#000000" stroke="#000000" points="101800,-251 101790,-255.5 101795,-251 101790,-251 101790,-251 101790,-251 101795,-251 101790,-246.5 101800,-251 101800,-251"/>
			<text textAnchor="middle" x="101679" y="-254.8">Ba96</text>
			</g>
			<g id="n646" className="node">
			<ellipse cx="101827" cy="-483" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="101827" y="-479.3">quod </text>
			</g>
			<g id="edge654" className="edge">
			<path strokeWidth="1.4" d="M101542,-483C101597,-483 101715,-483 101780,-483"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="101790,-483 101780,-487.5 101785,-483.2 101780,-483.2 101780,-483 101780,-482.8 101785,-482.8 101780,-478.5 101790,-483 101790,-483"/>
			<text textAnchor="middle" x="101679" y="-486.8">Er16, Mü28315, MüU151</text>
			</g>
			<g id="n648" className="node">
			<ellipse cx="102069" cy="-516" rx="44.6926" ry="18"/>
			<text textAnchor="middle" x="102069" y="-512.3">dicitur </text>
			</g>
			<g id="edge793" className="edge">
			<path strokeWidth="1.2" d="M101862,-487.728C101903,-493.262 101970,-502.482 102016,-508.882"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="102026,-510.283 102016,-513.379 102021,-509.701 102017,-509.02 102017,-508.921 102017,-508.822 102021,-509.503 102017,-504.463 102026,-510.283 102026,-510.283"/>
			<text textAnchor="middle" x="101939" y="-508.8">Er16, Mü28315</text>
			</g>
			<g id="n658" className="node">
			<ellipse cx="103459" cy="-399" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="103459" y="-395.3">dicit </text>
			</g>
			<g id="edge687" className="edge">
			<path d="M101863,-479.919C101910,-476.075 101995,-470 102068,-470 102068,-470 102068,-470 102938,-470 103079,-470 103112,-441.612 103252,-423 103308,-415.514 103373,-408.147 103415,-403.591"/>
			<polygon fill="#000000" stroke="#000000" points="103425,-402.495 103416,-408.049 103420,-403.035 103415,-403.576 103415,-403.576 103415,-403.576 103420,-403.035 103415,-399.102 103425,-402.495 103425,-402.495"/>
			<text textAnchor="middle" x="102611" y="-473.8">MüU151</text>
			</g>
			<g id="n650" className="node">
			<ellipse cx="102069" cy="-251" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="102069" y="-247.3">patet </text>
			</g>
			<g id="edge161" className="edge">
			<path d="M101854,-251C101894,-251 101970,-251 102020,-251"/>
			<polygon fill="#000000" stroke="#000000" points="102031,-251 102021,-255.5 102026,-251 102021,-251 102021,-251 102021,-251 102026,-251 102021,-246.5 102031,-251 102031,-251"/>
			<text textAnchor="middle" x="101939" y="-254.8">Ba96</text>
			</g>
			<g id="n659" className="node">
			<ellipse cx="103634" cy="-445" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="103634" y="-441.3">uellus </text>
			</g>
			<g id="edge469" className="edge">
			<path strokeWidth="1.2" d="M102114,-516C102145,-516 102187,-516 102224,-516 102224,-516 102224,-516 103460,-516 103513,-516 103569,-486.835 103603,-465.89"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="103611,-460.231 103606,-469.427 103607,-463.021 103603,-465.726 103603,-465.642 103603,-465.558 103607,-462.853 103601,-461.858 103611,-460.231 103611,-460.231"/>
			<text textAnchor="middle" x="102937" y="-519.8">Er16, Mü28315</text>
			</g>
			<g id="n651" className="node">
			<ellipse cx="102225" cy="-251" rx="27" ry="18"/>
			<text textAnchor="middle" x="102225" y="-247.3">in </text>
			</g>
			<g id="edge888" className="edge">
			<path d="M102108,-251C102132,-251 102164,-251 102188,-251"/>
			<polygon fill="#000000" stroke="#000000" points="102198,-251 102188,-255.5 102193,-251 102188,-251 102188,-251 102188,-251 102193,-251 102188,-246.5 102198,-251 102198,-251"/>
			<text textAnchor="middle" x="102161" y="-254.8">Ba96</text>
			</g>
			<g id="n652" className="node">
			<ellipse cx="102400" cy="-251" rx="73.387" ry="18"/>
			<text textAnchor="middle" x="102400" y="-247.3">sequentibus. </text>
			</g>
			<g id="edge127" className="edge">
			<path d="M102252,-251C102269,-251 102293,-251 102316,-251"/>
			<polygon fill="#000000" stroke="#000000" points="102326,-251 102316,-255.5 102321,-251 102316,-251 102316,-251 102316,-251 102321,-251 102316,-246.5 102326,-251 102326,-251"/>
			<text textAnchor="middle" x="102289" y="-254.8">Ba96</text>
			</g>
			<g id="edge24" className="edge">
			<path d="M102469,-257.179C102489,-259.726 102510,-263.233 102530,-268 102541,-270.791 102553,-274.653 102565,-278.649"/>
			<polygon fill="#000000" stroke="#000000" points="102574,-282.172 102563,-282.943 102570,-280.446 102565,-278.72 102565,-278.72 102565,-278.72 102570,-280.446 102566,-274.497 102574,-282.172 102574,-282.172"/>
			<text textAnchor="middle" x="102511" y="-271.8">Ba96</text>
			</g>
			<g id="edge1180" className="edge">
			<path strokeWidth="1.4" d="M102667,-305.367C102675,-306.605 102684,-307.85 102692,-309 102767,-319.766 102787,-318.822 102862,-332 102875,-334.272 102889,-337.21 102901,-339.948"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="102911,-342.181 102901,-344.382 102907,-341.281 102902,-340.187 102902,-339.991 102902,-339.796 102907,-340.891 102903,-335.601 102911,-342.181 102911,-342.181"/>
			<text textAnchor="middle" x="102777" y="-335.8">Ba96, Mü11475, Sg524</text>
			</g>
			<g id="n655" className="node">
			<ellipse cx="102937" cy="-415" rx="27" ry="18"/>
			<text textAnchor="middle" x="102937" y="-411.3">ibi </text>
			</g>
			<g id="edge992" className="edge">
			<path d="M102633,-314.001C102648,-325.863 102670,-341.255 102692,-351 102762,-382.889 102852,-401.232 102900,-409.547"/>
			<polygon fill="#000000" stroke="#000000" points="102910,-411.217 102900,-414.014 102906,-410.396 102901,-409.575 102901,-409.575 102901,-409.575 102906,-410.396 102901,-405.136 102910,-411.217 102910,-411.217"/>
			<text textAnchor="middle" x="102777" y="-404.8">Mü22405</text>
			</g>
			<g id="n657" className="node">
			<ellipse cx="103289" cy="-348" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="103289" y="-344.3">quod </text>
			</g>
			<g id="edge2" className="edge">
			<path d="M102674,-296.639C102775,-296.748 102981,-299.874 103154,-321 103185,-324.797 103220,-331.856 103246,-337.803"/>
			<polygon fill="#000000" stroke="#000000" points="103256,-340.103 103245,-342.245 103251,-338.981 103246,-337.86 103246,-337.86 103246,-337.86 103251,-338.981 103247,-333.475 103256,-340.103 103256,-340.103"/>
			<text textAnchor="middle" x="103043" y="-315.8">Gr314</text>
			</g>
			<g id="n656" className="node">
			<ellipse cx="103123" cy="-348" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="103123" y="-344.3">hoc </text>
			</g>
			<g id="edge467" className="edge majority">
			<path strokeWidth="2.4" d="M102964,-348C102995,-348 103047,-348 103082,-348"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="103092,-348 103082,-352.5 103087,-348.7 103082,-348.7 103082,-348 103082,-347.3 103087,-347.3 103082,-343.5 103092,-348 103092,-348"/>
			<text textAnchor="middle" x="103043" y="-351.8">majority</text>
			</g>
			<g id="edge276" className="edge">
			<path d="M102962,-421.51C102997,-430.333 103064,-445 103122,-445 103122,-445 103122,-445 103460,-445 103501,-445 103547,-445 103582,-445"/>
			<polygon fill="#000000" stroke="#000000" points="103592,-445 103582,-449.5 103587,-445 103582,-445 103582,-445 103582,-445 103587,-445 103582,-440.5 103592,-445 103592,-445"/>
			<text textAnchor="middle" x="103289" y="-448.8">Mü22405</text>
			</g>
			<g id="edge371" className="edge majority">
			<path strokeWidth="2.4" d="M103154,-348C103178,-348 103214,-348 103242,-348"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="103253,-348 103243,-352.5 103248,-348.7 103243,-348.7 103243,-348 103243,-347.3 103248,-347.3 103243,-343.5 103253,-348 103253,-348"/>
			<text textAnchor="middle" x="103203" y="-351.8">majority</text>
			</g>
			<g id="edge118" className="edge majority">
			<path strokeWidth="2.6" d="M103325,-351.633C103348,-354.794 103380,-360.421 103406,-370 103413,-372.642 103421,-376.222 103428,-379.965"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="103437,-385.097 103426,-384.076 103432,-383.325 103428,-380.858 103428,-380.162 103428,-379.466 103433,-381.933 103430,-376.248 103437,-385.097 103437,-385.097"/>
			<text textAnchor="middle" x="103375" y="-373.8">majority</text>
			</g>
			<g id="edge76" className="edge majority">
			<path strokeWidth="2.8" d="M103494,-401.263C103517,-403.478 103548,-407.775 103574,-416 103582,-418.614 103591,-422.275 103599,-426.118"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="103608,-430.66 103597,-430.208 103603,-429.227 103599,-426.989 103599,-426.184 103600,-425.38 103604,-427.618 103601,-422.16 103608,-430.66 103608,-430.66"/>
			<text textAnchor="middle" x="103543" y="-419.8">majority</text>
			</g>
			<g id="n661" className="node">
			<ellipse cx="103936" cy="-445" rx="59.5901" ry="18"/>
			<text textAnchor="middle" x="103936" y="-441.3">Gedeonis. </text>
			</g>
			<g id="edge665" className="edge majority">
			<path strokeWidth="2.8" d="M103676,-445C103725,-445 103807,-445 103866,-445"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="103876,-445 103866,-449.5 103871,-445.9 103866,-445.9 103866,-445 103866,-444.1 103871,-444.1 103866,-440.5 103876,-445 103876,-445"/>
			<text textAnchor="middle" x="103776" y="-448.8">majority</text>
			</g>
			<g id="n660" className="node">
			<ellipse cx="103936" cy="-383" rx="57.3905" ry="18"/>
			<text textAnchor="middle" x="103936" y="-379.3">Gedionis. </text>
			</g>
			<g id="edge1174" className="edge">
			<path strokeWidth="1.4" d="M103667,-433.852C103676,-431.047 103685,-428.21 103694,-426 103754,-410.995 103824,-399.111 103873,-391.673"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="103883,-390.154 103874,-396.089 103878,-391.094 103873,-391.836 103873,-391.638 103873,-391.441 103878,-390.698 103873,-387.188 103883,-390.154 103883,-390.154"/>
			<text textAnchor="middle" x="103776" y="-429.8">Ba96, Gr314, MüU151</text>
			</g>
			<g id="n663" className="node">
			<ellipse cx="104144" cy="-366" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="104144" y="-362.3">Legitur </text>
			</g>
			<g id="edge653" className="edge majority">
			<path strokeWidth="2.6" d="M103977,-431.818C104005,-422.183 104044,-408.495 104078,-395 104086,-391.635 104095,-387.816 104104,-384.08"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="104113,-379.926 104106,-388.113 104109,-382.696 104104,-384.735 104104,-384.005 104104,-383.274 104108,-381.235 104102,-379.896 104113,-379.926 104113,-379.926"/>
			<text textAnchor="middle" x="104046" y="-421.8">majority</text>
			</g>
			<g id="n666" className="node">
			<ellipse cx="104666" cy="-358" rx="53.8905" ry="18"/>
			<text textAnchor="middle" x="104666" y="-354.3">iudicum: </text>
			</g>
			<g id="edge1291" className="edge">
			<path d="M103984,-455.831C104026,-464.424 104088,-475 104143,-475 104143,-475 104143,-475 104480,-475 104548,-475 104612,-417.413 104644,-383.041"/>
			<polygon fill="#000000" stroke="#000000" points="104651,-375.264 104647,-385.699 104647,-378.972 104644,-382.68 104644,-382.68 104644,-382.68 104647,-378.972 104641,-379.662 104651,-375.264 104651,-375.264"/>
			<text textAnchor="middle" x="104317" y="-478.8">Sg524</text>
			</g>
			<g id="edge1147" className="edge">
			<path d="M103991,-378.511C104021,-376.091 104057,-373.109 104087,-370.663"/>
			<polygon fill="#000000" stroke="#000000" points="104097,-369.822 104087,-375.129 104092,-370.233 104087,-370.644 104087,-370.644 104087,-370.644 104092,-370.233 104086,-366.159 104097,-369.822 104097,-369.822"/>
			<text textAnchor="middle" x="104046" y="-379.8">Gr314</text>
			</g>
			<g id="n662" className="node">
			<ellipse cx="104144" cy="-312" rx="27" ry="18"/>
			<text textAnchor="middle" x="104144" y="-308.3">et </text>
			</g>
			<g id="edge622" className="edge">
			<path d="M103971,-368.66C103984,-363.197 104000,-357.07 104014,-352 104046,-340.693 104083,-329.459 104109,-321.789"/>
			<polygon fill="#000000" stroke="#000000" points="104119,-318.931 104110,-326.048 104114,-320.329 104109,-321.728 104109,-321.728 104109,-321.728 104114,-320.329 104108,-317.407 104119,-318.931 104119,-318.931"/>
			<text textAnchor="middle" x="104046" y="-355.8">MüU151</text>
			</g>
			<g id="edge316" className="edge">
			<path d="M103983,-393.306C104025,-401.641 104088,-412 104143,-412 104143,-412 104143,-412 104480,-412 104532,-412 104588,-392.403 104625,-376.82"/>
			<polygon fill="#000000" stroke="#000000" points="104634,-372.756 104627,-380.86 104630,-374.743 104625,-376.731 104625,-376.731 104625,-376.731 104630,-374.743 104623,-372.602 104634,-372.756 104634,-372.756"/>
			<text textAnchor="middle" x="104317" y="-415.8">Ba96</text>
			</g>
			<g id="n664" className="node">
			<ellipse cx="104317" cy="-358" rx="27" ry="18"/>
			<text textAnchor="middle" x="104317" y="-354.3">in </text>
			</g>
			<g id="edge378" className="edge majority">
			<path strokeWidth="2.8" d="M104192,-363.793C104220,-362.5 104254,-360.893 104280,-359.699"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="104290,-359.231 104280,-364.194 104285,-360.364 104280,-360.598 104280,-359.699 104280,-358.8 104285,-358.566 104279,-355.204 104290,-359.231 104290,-359.231"/>
			<text textAnchor="middle" x="104241" y="-365.8">majority</text>
			</g>
			<g id="edge260" className="edge">
			<path d="M104171,-312.22C104231,-312.974 104386,-316.309 104514,-331 104546,-334.662 104581,-340.871 104610,-346.413"/>
			<polygon fill="#000000" stroke="#000000" points="104620,-348.418 104609,-350.897 104615,-347.45 104610,-346.482 104610,-346.482 104610,-346.482 104615,-347.45 104611,-342.067 104620,-348.418 104620,-348.418"/>
			<text textAnchor="middle" x="104394" y="-325.8">MüU151</text>
			</g>
			<g id="n665" className="node">
			<ellipse cx="104479" cy="-358" rx="35.194" ry="18"/>
			<text textAnchor="middle" x="104479" y="-354.3">libro </text>
			</g>
			<g id="edge868" className="edge majority">
			<path strokeWidth="2.8" d="M104344,-358C104368,-358 104405,-358 104434,-358"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="104444,-358 104434,-362.5 104439,-358.9 104434,-358.9 104434,-358 104434,-357.1 104439,-357.1 104434,-353.5 104444,-358 104444,-358"/>
			<text textAnchor="middle" x="104394" y="-361.8">majority</text>
			</g>
			<g id="edge666" className="edge majority">
			<path strokeWidth="2.8" d="M104514,-358C104539,-358 104572,-358 104602,-358"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="104612,-358 104602,-362.5 104607,-358.9 104602,-358.9 104602,-358 104602,-357.1 104607,-357.1 104602,-353.5 104612,-358 104612,-358"/>
			<text textAnchor="middle" x="104563" y="-361.8">majority</text>
			</g>
			<g id="n668" className="node">
			<ellipse cx="105213" cy="-412" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="105213" y="-408.3">quod </text>
			</g>
			<g id="edge1212" className="edge">
			<path strokeWidth="1.6" d="M104707,-369.982C104717,-372.678 104728,-375.255 104738,-377 104894,-403.327 105081,-409.852 105166,-411.468"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="105176,-411.646 105166,-415.969 105171,-411.858 105166,-411.77 105166,-411.47 105166,-411.17 105171,-411.258 105166,-406.97 105176,-411.646 105176,-411.646"/>
			<text textAnchor="middle" x="104862" y="-406.8">Er16, Go325, Mü11475, Mü28315</text>
			</g>
			<g id="n667" className="node">
			<ellipse cx="105213" cy="-358" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="105213" y="-354.3">Legitur </text>
			</g>
			<g id="edge760" className="edge">
			<path strokeWidth="1.2" d="M104720,-358C104823,-358 105049,-358 105155,-358"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="105165,-358 105155,-362.5 105160,-358.1 105155,-358.1 105155,-358 105155,-357.9 105160,-357.9 105155,-353.5 105165,-358 105165,-358"/>
			<text textAnchor="middle" x="104862" y="-361.8">Ba96, Sg524</text>
			</g>
			<g id="n669" className="node">
			<ellipse cx="105743" cy="-358" rx="37.0935" ry="18"/>
			<text textAnchor="middle" x="105743" y="-354.3">Deus </text>
			</g>
			<g id="edge301" className="edge">
			<path strokeWidth="2.2" d="M104715,-350.142C104780,-339.87 104900,-322.429 105004,-316 105189,-304.49 105237,-303.886 105422,-316 105521,-322.459 105636,-340.024 105697,-350.278"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="105708,-351.98 105697,-354.765 105703,-351.745 105698,-350.918 105698,-350.327 105698,-349.735 105703,-350.562 105698,-345.888 105708,-351.98 105708,-351.98"/>
			<text textAnchor="middle" x="105213" y="-319.8">Gr314, Kf133, Kr185, Kr299, Mü22405, MüU151, Wi3818</text>
			</g>
			<g id="edge922" className="edge">
			<path strokeWidth="1.6" d="M105250,-412.559C105329,-413.12 105527,-410.675 105688,-377 105693,-375.869 105699,-374.333 105704,-372.62"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="105714,-369.397 105706,-376.844 105709,-371.272 105705,-372.862 105705,-372.577 105705,-372.293 105709,-370.703 105703,-368.311 105714,-369.397 105714,-369.397"/>
			<text textAnchor="middle" x="105564" y="-410.8">Er16, Go325, Mü11475, Mü28315</text>
			</g>
			<g id="edge571" className="edge">
			<path strokeWidth="1.2" d="M105261,-358C105362,-358 105596,-358 105696,-358"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="105706,-358 105696,-362.5 105701,-358.1 105696,-358.1 105696,-358 105696,-357.9 105701,-357.9 105696,-353.5 105706,-358 105706,-358"/>
			<text textAnchor="middle" x="105564" y="-361.8">Ba96, Sg524</text>
			</g>
			<g id="n670" className="node">
			<ellipse cx="106113" cy="-304" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="106113" y="-300.3">Gedioni, </text>
			</g>
			<g id="edge700" className="edge">
			<path strokeWidth="1.6" d="M105772,-346.709C105780,-343.802 105789,-340.948 105798,-339 105884,-319.235 105987,-310.474 106051,-306.702"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="106061,-306.117 106051,-311.178 106056,-306.701 106051,-306.985 106051,-306.685 106051,-306.386 106056,-306.102 106051,-302.192 106061,-306.117 106061,-306.117"/>
			<text textAnchor="middle" x="105919" y="-342.8">Ba96, Gr314, Mü28315, MüU151</text>
			</g>
			<g id="n672" className="node">
			<ellipse cx="106113" cy="-412" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="106113" y="-408.3">Gedeon, </text>
			</g>
			<g id="edge740" className="edge">
			<path d="M105772,-369.291C105780,-372.198 105789,-375.052 105798,-377 105884,-396.765 105987,-405.526 106051,-409.298"/>
			<polygon fill="#000000" stroke="#000000" points="106061,-409.883 106051,-413.808 106056,-409.599 106051,-409.315 106051,-409.315 106051,-409.315 106056,-409.599 106051,-404.822 106061,-409.883 106061,-409.883"/>
			<text textAnchor="middle" x="105919" y="-411.8">Kr299</text>
			</g>
			<g id="n671" className="node">
			<ellipse cx="106113" cy="-358" rx="54.6905" ry="18"/>
			<text textAnchor="middle" x="106113" y="-354.3">Gedeoni, </text>
			</g>
			<g id="edge928" className="edge majority">
			<path strokeWidth="2.4" d="M105780,-358C105843,-358 105971,-358 106048,-358"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="106058,-358 106048,-362.5 106053,-358.7 106048,-358.7 106048,-358 106048,-357.3 106053,-357.3 106048,-353.5 106058,-358 106058,-358"/>
			<text textAnchor="middle" x="105919" y="-361.8">majority</text>
			</g>
			<g id="n673" className="node">
			<ellipse cx="106475" cy="-358" rx="28.6953" ry="18"/>
			<text textAnchor="middle" x="106475" y="-354.3">qui </text>
			</g>
			<g id="edge52" className="edge">
			<path strokeWidth="1.6" d="M106165,-305.309C106228,-307.915 106337,-315.706 106428,-339 106433,-340.199 106437,-341.779 106442,-343.516"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="106452,-347.231 106441,-347.711 106447,-345.659 106442,-343.809 106442,-343.531 106442,-343.252 106447,-345.102 106444,-339.35 106452,-347.231 106452,-347.231"/>
			<text textAnchor="middle" x="106307" y="-342.8">Ba96, Gr314, Mü28315, MüU151</text>
			</g>
			<g id="edge262" className="edge">
			<path d="M106165,-410.691C106228,-408.085 106337,-400.294 106428,-377 106433,-375.801 106437,-374.221 106442,-372.484"/>
			<polygon fill="#000000" stroke="#000000" points="106452,-368.769 106444,-376.65 106447,-370.619 106442,-372.469 106442,-372.469 106442,-372.469 106447,-370.619 106441,-368.289 106452,-368.769 106452,-368.769"/>
			<text textAnchor="middle" x="106307" y="-412.8">Kr299</text>
			</g>
			<g id="edge423" className="edge majority">
			<path strokeWidth="2.4" d="M106168,-358C106242,-358 106372,-358 106436,-358"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="106446,-358 106436,-362.5 106441,-358.7 106436,-358.7 106436,-358 106436,-357.3 106441,-357.3 106436,-353.5 106446,-358 106446,-358"/>
			<text textAnchor="middle" x="106307" y="-361.8">majority</text>
			</g>
			<g id="n674" className="node">
			<ellipse cx="106632" cy="-358" rx="29.795" ry="18"/>
			<text textAnchor="middle" x="106632" y="-354.3">fuit </text>
			</g>
			<g id="edge1010" className="edge majority">
			<path strokeWidth="3.4" d="M106504,-358C106528,-358 106564,-358 106592,-358"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="106602,-358 106592,-362.5 106597,-359.2 106592,-359.2 106592,-358 106592,-356.8 106597,-356.8 106592,-353.5 106602,-358 106602,-358"/>
			<text textAnchor="middle" x="106553" y="-361.8">majority</text>
			</g>
			<g id="n676" className="node">
			<ellipse cx="106812" cy="-304" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="106812" y="-300.3">auctor </text>
			</g>
			<g id="edge415" className="edge">
			<path d="M106657,-347.759C106664,-344.743 106672,-341.567 106680,-339 106707,-329.882 106738,-321.495 106763,-315.219"/>
			<polygon fill="#000000" stroke="#000000" points="106773,-312.749 106765,-319.52 106769,-313.95 106764,-315.152 106764,-315.152 106764,-315.152 106769,-313.95 106763,-310.784 106773,-312.749 106773,-312.749"/>
			<text textAnchor="middle" x="106715" y="-342.8">Wi3818</text>
			</g>
			<g id="n675" className="node">
			<ellipse cx="106812" cy="-412" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="106812" y="-408.3">doctor </text>
			</g>
			<g id="edge506" className="edge">
			<path d="M106657,-368.241C106664,-371.257 106672,-374.433 106680,-377 106707,-386.118 106738,-394.505 106763,-400.781"/>
			<polygon fill="#000000" stroke="#000000" points="106773,-403.251 106763,-405.216 106769,-402.05 106764,-400.848 106764,-400.848 106764,-400.848 106769,-402.05 106765,-396.48 106773,-403.251 106773,-403.251"/>
			<text textAnchor="middle" x="106715" y="-399.8">Mü28315</text>
			</g>
			<g id="n677" className="node">
			<ellipse cx="106812" cy="-358" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="106812" y="-354.3">ductor </text>
			</g>
			<g id="edge1369" className="edge majority">
			<path strokeWidth="3" d="M106662,-358C106688,-358 106726,-358 106757,-358"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="106768,-358 106758,-362.5 106763,-359 106758,-359 106758,-358 106758,-357 106763,-357 106758,-353.5 106768,-358 106768,-358"/>
			<text textAnchor="middle" x="106715" y="-361.8">majority</text>
			</g>
			<g id="n678" className="node">
			<ellipse cx="107004" cy="-358" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="107004" y="-354.3">populi </text>
			</g>
			<g id="edge513" className="edge">
			<path d="M106850,-313.313C106876,-320.097 106912,-329.692 106944,-339 106949,-340.558 106955,-342.253 106960,-343.969"/>
			<polygon fill="#000000" stroke="#000000" points="106970,-347.053 106959,-348.316 106965,-345.54 106960,-344.027 106960,-344.027 106960,-344.027 106965,-345.54 106962,-339.738 106970,-347.053 106970,-347.053"/>
			<text textAnchor="middle" x="106909" y="-342.8">Wi3818</text>
			</g>
			<g id="edge1128" className="edge">
			<path d="M106850,-402.687C106876,-395.903 106912,-386.308 106944,-377 106949,-375.442 106955,-373.747 106960,-372.031"/>
			<polygon fill="#000000" stroke="#000000" points="106970,-368.947 106962,-376.262 106965,-370.46 106960,-371.973 106960,-371.973 106960,-371.973 106965,-370.46 106959,-367.684 106970,-368.947 106970,-368.947"/>
			<text textAnchor="middle" x="106909" y="-398.8">Mü28315</text>
			</g>
			<g id="edge1346" className="edge majority">
			<path strokeWidth="3" d="M106857,-358C106885,-358 106922,-358 106951,-358"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="106962,-358 106952,-362.5 106957,-359 106952,-359 106952,-358 106952,-357 106957,-357 106952,-353.5 106962,-358 106962,-358"/>
			<text textAnchor="middle" x="106909" y="-361.8">majority</text>
			</g>
			<g id="n679" className="node">
			<ellipse cx="107212" cy="-358" rx="67.6881" ry="18"/>
			<text textAnchor="middle" x="107212" y="-354.3">Israhelitici, </text>
			</g>
			<g id="edge772" className="edge majority">
			<path strokeWidth="3.4" d="M107047,-358C107072,-358 107104,-358 107134,-358"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="107144,-358 107134,-362.5 107139,-359.2 107134,-359.2 107134,-358 107134,-356.8 107139,-356.8 107134,-353.5 107144,-358 107144,-358"/>
			<text textAnchor="middle" x="107095" y="-361.8">majority</text>
			</g>
			<g id="n680" className="node">
			<ellipse cx="107405" cy="-358" rx="27" ry="18"/>
			<text textAnchor="middle" x="107405" y="-354.3">ad </text>
			</g>
			<g id="edge889" className="edge majority">
			<path strokeWidth="3.4" d="M107280,-358C107309,-358 107343,-358 107368,-358"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="107378,-358 107368,-362.5 107373,-359.2 107368,-359.2 107368,-358 107368,-356.8 107373,-356.8 107368,-353.5 107378,-358 107378,-358"/>
			<text textAnchor="middle" x="107329" y="-361.8">majority</text>
			</g>
			<g id="n682" className="node">
			<ellipse cx="107610" cy="-359" rx="76.8869" ry="18"/>
			<text textAnchor="middle" x="107610" y="-355.3">ostendendum </text>
			</g>
			<g id="edge1064" className="edge majority">
			<path strokeWidth="3.2" d="M107432,-358.129C107455,-358.242 107490,-358.415 107523,-358.577"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="107533,-358.626 107523,-363.077 107528,-359.702 107523,-359.677 107523,-358.577 107523,-357.477 107528,-357.502 107523,-354.077 107533,-358.626 107533,-358.626"/>
			<text textAnchor="middle" x="107481" y="-361.8">majority</text>
			</g>
			<g id="n681" className="node">
			<ellipse cx="107610" cy="-305" rx="79.0865" ry="18"/>
			<text textAnchor="middle" x="107610" y="-301.3">significandum </text>
			</g>
			<g id="edge758" className="edge">
			<path d="M107428,-347.663C107435,-344.573 107443,-341.38 107450,-339 107478,-330.204 107508,-323.004 107536,-317.53"/>
			<polygon fill="#000000" stroke="#000000" points="107546,-315.592 107537,-321.938 107541,-316.558 107536,-317.523 107536,-317.523 107536,-317.523 107541,-316.558 107535,-313.108 107546,-315.592 107546,-315.592"/>
			<text textAnchor="middle" x="107481" y="-342.8">Gr314</text>
			</g>
			<g id="n683" className="node">
			<ellipse cx="107825" cy="-319" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="107825" y="-315.3">quod </text>
			</g>
			<g id="edge1302" className="edge majority">
			<path strokeWidth="3" d="M107670,-347.858C107705,-341.266 107749,-333.066 107781,-327.094"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="107791,-325.238 107782,-331.506 107786,-327.143 107781,-328.066 107781,-327.083 107781,-326.101 107786,-325.178 107780,-322.661 107791,-325.238 107791,-325.238"/>
			<text textAnchor="middle" x="107739" y="-343.8">majority</text>
			</g>
			<g id="n684" className="node">
			<ellipse cx="108019" cy="-319" rx="58.4896" ry="18"/>
			<text textAnchor="middle" x="108019" y="-315.3">uictoriam </text>
			</g>
			<g id="edge612" className="edge">
			<path d="M107687,-360.874C107713,-361.031 107743,-360.651 107770,-359 107847,-354.325 107866,-352.032 107942,-338 107949,-336.639 107957,-334.987 107965,-333.232"/>
			<polygon fill="#000000" stroke="#000000" points="107974,-330.881 107966,-337.588 107970,-332.047 107965,-333.212 107965,-333.212 107965,-333.212 107970,-332.047 107964,-328.836 107974,-330.881 107974,-330.881"/>
			<text textAnchor="middle" x="107825" y="-360.8">Go325</text>
			</g>
			<g id="edge265" className="edge">
			<path d="M107688,-301.928C107714,-301.842 107744,-302.778 107770,-306 107774,-306.518 107779,-307.248 107783,-308.101"/>
			<polygon fill="#000000" stroke="#000000" points="107793,-310.271 107782,-312.563 107788,-309.218 107783,-308.164 107783,-308.164 107783,-308.164 107788,-309.218 107784,-303.765 107793,-310.271 107793,-310.271"/>
			<text textAnchor="middle" x="107739" y="-309.8">Gr314</text>
			</g>
			<g id="edge955" className="edge majority">
			<path strokeWidth="3.2" d="M107862,-319C107886,-319 107920,-319 107950,-319"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="107960,-319 107950,-323.5 107955,-320.1 107950,-320.1 107950,-319 107950,-317.9 107955,-317.9 107950,-314.5 107960,-319 107960,-319"/>
			<text textAnchor="middle" x="107911" y="-322.8">majority</text>
			</g>
			<g id="n687" className="node">
			<ellipse cx="108375" cy="-265" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="108375" y="-261.3">Dei </text>
			</g>
			<g id="edge478" className="edge majority">
			<path strokeWidth="2.4" d="M108064,-307.147C108074,-304.544 108085,-301.978 108096,-300 108181,-284.094 108282,-273.409 108336,-268.358"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="108346,-267.424 108336,-272.825 108341,-268.581 108336,-269.041 108336,-268.344 108336,-267.647 108341,-267.187 108335,-263.863 108346,-267.424 108346,-267.424"/>
			<text textAnchor="middle" x="108212" y="-303.8">majority</text>
			</g>
			<g id="n686" className="node">
			<ellipse cx="108375" cy="-373" rx="27" ry="18"/>
			<text textAnchor="middle" x="108375" y="-369.3">et </text>
			</g>
			<g id="edge1185" className="edge">
			<path d="M108064,-330.853C108074,-333.456 108085,-336.022 108096,-338 108182,-354.124 108285,-364.883 108338,-369.846"/>
			<polygon fill="#000000" stroke="#000000" points="108348,-370.789 108338,-374.357 108343,-370.332 108338,-369.876 108338,-369.876 108338,-369.876 108343,-370.332 108339,-365.394 108348,-370.789 108348,-370.789"/>
			<text textAnchor="middle" x="108212" y="-371.8">Go325</text>
			</g>
			<g id="n685" className="node">
			<ellipse cx="108375" cy="-319" rx="27" ry="18"/>
			<text textAnchor="middle" x="108375" y="-315.3">De </text>
			</g>
			<g id="edge312" className="edge">
			<path strokeWidth="1.6" d="M108078,-319C108151,-319 108276,-319 108338,-319"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="108348,-319 108338,-323.5 108343,-319.3 108338,-319.3 108338,-319 108338,-318.7 108343,-318.7 108338,-314.5 108348,-319 108348,-319"/>
			<text textAnchor="middle" x="108212" y="-322.8">Ba96, Er16, Mü28315, MüU151</text>
			</g>
			<g id="n688" className="node">
			<ellipse cx="108722" cy="-319" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="108722" y="-315.3">inimicis </text>
			</g>
			<g id="edge450" className="edge majority">
			<path strokeWidth="2.4" d="M108404,-267.137C108455,-271.271 108564,-281.615 108654,-300 108660,-301.298 108667,-302.889 108674,-304.594"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="108684,-307.34 108673,-309.063 108679,-306.705 108674,-305.396 108674,-304.72 108674,-304.044 108679,-305.354 108675,-300.377 108684,-307.34 108684,-307.34"/>
			<text textAnchor="middle" x="108538" y="-303.8">majority</text>
			</g>
			<g id="edge557" className="edge">
			<path d="M108402,-371.055C108451,-367.055 108562,-356.676 108654,-338 108660,-336.702 108667,-335.111 108674,-333.406"/>
			<polygon fill="#000000" stroke="#000000" points="108684,-330.66 108675,-337.623 108679,-331.97 108674,-333.28 108674,-333.28 108674,-333.28 108679,-331.97 108673,-328.937 108684,-330.66 108684,-330.66"/>
			<text textAnchor="middle" x="108538" y="-372.8">Go325</text>
			</g>
			<g id="edge177" className="edge">
			<path strokeWidth="1.6" d="M108402,-319C108457,-319 108585,-319 108661,-319"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="108672,-319 108662,-323.5 108667,-319.3 108662,-319.3 108662,-319 108662,-318.7 108667,-318.7 108662,-314.5 108672,-319 108672,-319"/>
			<text textAnchor="middle" x="108538" y="-322.8">Ba96, Er16, Mü28315, MüU151</text>
			</g>
			<g id="n689" className="node">
			<ellipse cx="109032" cy="-376" rx="37.8943" ry="18"/>
			<text textAnchor="middle" x="109032" y="-372.3">dedit </text>
			</g>
			<g id="edge866" className="edge">
			<path d="M108761,-330.55C108770,-333.223 108780,-335.898 108790,-338 108857,-352.783 108936,-364.115 108985,-370.417"/>
			<polygon fill="#000000" stroke="#000000" points="108995,-371.723 108985,-374.919 108990,-371.089 108985,-370.455 108985,-370.455 108985,-370.455 108990,-371.089 108986,-365.992 108995,-371.723 108995,-371.723"/>
			<text textAnchor="middle" x="108874" y="-369.8">Go325</text>
			</g>
			<g id="n690" className="node">
			<ellipse cx="109032" cy="-319" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="109032" y="-315.3">deberet </text>
			</g>
			<g id="edge235" className="edge majority">
			<path strokeWidth="2.6" d="M108772,-319C108826,-319 108914,-319 108972,-319"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="108982,-319 108972,-323.5 108977,-319.8 108972,-319.8 108972,-319 108972,-318.2 108977,-318.2 108972,-314.5 108982,-319 108982,-319"/>
			<text textAnchor="middle" x="108874" y="-322.8">majority</text>
			</g>
			<g id="n691" className="node">
			<ellipse cx="109032" cy="-247" rx="55.7903" ry="18"/>
			<text textAnchor="middle" x="109032" y="-243.3">deberent </text>
			</g>
			<g id="edge409" className="edge">
			<path strokeWidth="1.4" d="M108761,-307.752C108771,-305.099 108781,-302.359 108790,-300 108853,-284.245 108925,-268.664 108974,-258.516"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="108984,-256.436 108975,-262.864 108979,-257.642 108974,-258.653 108974,-258.457 108974,-258.261 108979,-257.25 108973,-254.05 108984,-256.436 108984,-256.436"/>
			<text textAnchor="middle" x="108874" y="-303.8">Ba96, Kf133, Mü28315</text>
			</g>
			<g id="n692" className="node">
			<ellipse cx="109614" cy="-407" rx="27" ry="18"/>
			<text textAnchor="middle" x="109614" y="-403.3">ei </text>
			</g>
			<g id="edge551" className="edge">
			<path d="M109070,-377.963C109174,-383.554 109473,-399.517 109577,-405.069"/>
			<polygon fill="#000000" stroke="#000000" points="109587,-405.603 109577,-409.563 109582,-405.336 109577,-405.069 109577,-405.069 109577,-405.069 109582,-405.336 109577,-400.576 109587,-405.603 109587,-405.603"/>
			<text textAnchor="middle" x="109323" y="-405.8">Go325</text>
			</g>
			<g id="n693" className="node">
			<ellipse cx="109614" cy="-353" rx="55.7903" ry="18"/>
			<text textAnchor="middle" x="109614" y="-349.3">obtinere, </text>
			</g>
			<g id="edge1318" className="edge">
			<path strokeWidth="2.2" d="M109074,-328.763C109085,-330.831 109096,-332.76 109106,-334 109264,-353.034 109451,-354.676 109548,-353.987"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="109558,-353.903 109548,-358.485 109553,-354.544 109548,-354.585 109548,-353.985 109548,-353.385 109553,-353.344 109548,-349.485 109558,-353.903 109558,-353.903"/>
			<text textAnchor="middle" x="109323" y="-357.8">Er16, Kr185, Kr299, Mü11475, Mü22405, MüU151, Wi3818</text>
			</g>
			<g id="n695" className="node">
			<ellipse cx="109614" cy="-245" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="109614" y="-241.3">habere </text>
			</g>
			<g id="edge945" className="edge">
			<path strokeWidth="1.2" d="M109082,-316.258C109090,-315.822 109098,-315.387 109106,-315 109154,-312.624 109497,-318.525 109540,-296 109552,-289.778 109548,-280.506 109558,-272 109562,-268.48 109567,-265.278 109572,-262.409"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="109581,-257.609 109574,-266.303 109577,-260.062 109572,-262.426 109572,-262.337 109572,-262.249 109576,-259.885 109570,-258.372 109581,-257.609 109581,-257.609"/>
			<text textAnchor="middle" x="109323" y="-318.8">Gr314, Sg524</text>
			</g>
			<g id="n696" className="node">
			<ellipse cx="109614" cy="-299" rx="55.7903" ry="18"/>
			<text textAnchor="middle" x="109614" y="-295.3">pbtinere, </text>
			</g>
			<g id="edge819" className="edge">
			<path d="M109082,-255.048C109090,-256.172 109098,-257.21 109106,-258 109298,-277.525 109349,-252.641 109540,-281 109547,-282.017 109554,-283.386 109561,-284.918"/>
			<polygon fill="#000000" stroke="#000000" points="109571,-287.256 109560,-289.399 109566,-286.135 109561,-285.014 109561,-285.014 109561,-285.014 109566,-286.135 109562,-280.628 109571,-287.256 109571,-287.256"/>
			<text textAnchor="middle" x="109323" y="-284.8">Mü28315</text>
			</g>
			<g id="n694" className="node">
			<ellipse cx="109614" cy="-191" rx="55.7903" ry="18"/>
			<text textAnchor="middle" x="109614" y="-187.3">optinere, </text>
			</g>
			<g id="edge34" className="edge">
			<path d="M109066,-232.5C109078,-227.673 109093,-222.815 109106,-220 109262,-187.423 109451,-186.406 109548,-188.613"/>
			<polygon fill="#000000" stroke="#000000" points="109558,-188.865 109548,-193.118 109553,-188.742 109548,-188.619 109548,-188.619 109548,-188.619 109553,-188.742 109548,-184.121 109558,-188.865 109558,-188.865"/>
			<text textAnchor="middle" x="109323" y="-223.8">Kf133</text>
			</g>
			<g id="edge1242" className="edge">
			<path d="M109087,-243.699C109094,-243.412 109100,-243.167 109106,-243 109299,-237.721 109347,-240.358 109540,-243 109546,-243.079 109552,-243.193 109558,-243.327"/>
			<polygon fill="#000000" stroke="#000000" points="109568,-243.569 109558,-247.827 109563,-243.449 109558,-243.328 109558,-243.328 109558,-243.328 109563,-243.449 109558,-238.829 109568,-243.569 109568,-243.569"/>
			<text textAnchor="middle" x="109323" y="-246.8">Ba96</text>
			</g>
			<g id="n697" className="node">
			<ellipse cx="110188" cy="-299" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="110188" y="-295.3">signum </text>
			</g>
			<g id="edge1273" className="edge">
			<path strokeWidth="2.2" d="M109670,-353.062C109764,-352.306 109960,-346.995 110122,-318 110128,-316.861 110135,-315.332 110142,-313.633"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="110152,-310.855 110143,-317.859 110147,-312.767 110142,-314.1 110142,-313.522 110142,-312.943 110147,-311.61 110141,-309.184 110152,-310.855 110152,-310.855"/>
			<text textAnchor="middle" x="109905" y="-355.8">Er16, Kr185, Kr299, Mü11475, Mü22405, MüU151, Wi3818</text>
			</g>
			<g id="edge1000" className="edge">
			<path d="M109670,-299C109779,-299 110019,-299 110129,-299"/>
			<polygon fill="#000000" stroke="#000000" points="110140,-299 110130,-303.5 110135,-299 110130,-299 110130,-299 110130,-299 110135,-299 110130,-294.5 110140,-299 110140,-299"/>
			<text textAnchor="middle" x="109905" y="-302.8">Mü28315</text>
			</g>
			<g id="edge595" className="edge">
			<path d="M109664,-182.741C109758,-169.238 109969,-150.899 110122,-226 110143,-236.154 110160,-256.087 110171,-272.561"/>
			<polygon fill="#000000" stroke="#000000" points="110177,-281.274 110168,-275.415 110174,-277.104 110171,-272.933 110171,-272.933 110171,-272.933 110174,-277.104 110175,-270.451 110177,-281.274 110177,-281.274"/>
			<text textAnchor="middle" x="109905" y="-229.8">Kf133</text>
			</g>
			<g id="n698" className="node">
			<ellipse cx="110365" cy="-310" rx="31.3957" ry="18"/>
			<text textAnchor="middle" x="110365" y="-306.3">tale </text>
			</g>
			<g id="edge100" className="edge">
			<path d="M109641,-406.636C109716,-405.269 109939,-398.965 110122,-371 110210,-357.596 110231,-348.452 110316,-325 110320,-323.951 110324,-322.803 110328,-321.623"/>
			<polygon fill="#000000" stroke="#000000" points="110337,-318.665 110329,-325.889 110333,-320.125 110328,-321.585 110328,-321.585 110328,-321.585 110333,-320.125 110327,-317.281 110337,-318.665 110337,-318.665"/>
			<text textAnchor="middle" x="110188" y="-370.8">Go325</text>
			</g>
			<g id="edge1348" className="edge">
			<path strokeWidth="1.4" d="M109660,-244.871C109749,-245.33 109953,-249.92 110122,-280 110128,-281.139 110135,-282.668 110142,-284.367"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="110152,-287.145 110141,-288.816 110147,-286.004 110142,-284.671 110142,-284.478 110142,-284.286 110147,-285.619 110143,-280.141 110152,-287.145 110152,-287.145"/>
			<text textAnchor="middle" x="109905" y="-283.8">Ba96, Gr314, Sg524</text>
			</g>
			<g id="edge106" className="edge majority">
			<path strokeWidth="3.2" d="M110236,-301.948C110263,-303.665 110297,-305.809 110323,-307.452"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="110334,-308.101 110324,-311.964 110329,-308.885 110324,-308.571 110324,-307.473 110324,-306.375 110329,-306.689 110324,-302.982 110334,-308.101 110334,-308.101"/>
			<text textAnchor="middle" x="110285" y="-309.8">majority</text>
			</g>
			<g id="n700" className="node">
			<ellipse cx="110528" cy="-256" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="110528" y="-252.3">sibi </text>
			</g>
			<g id="edge852" className="edge">
			<path d="M110385,-296.344C110394,-290.892 110404,-284.978 110414,-281 110438,-271.528 110466,-265.304 110488,-261.434"/>
			<polygon fill="#000000" stroke="#000000" points="110498,-259.77 110489,-265.841 110493,-260.586 110488,-261.401 110488,-261.401 110488,-261.401 110493,-260.586 110487,-256.961 110498,-259.77 110498,-259.77"/>
			<text textAnchor="middle" x="110438" y="-284.8">Gr314</text>
			</g>
			<g id="n699" className="node">
			<ellipse cx="110528" cy="-361" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="110528" y="-357.3">signum </text>
			</g>
			<g id="edge20" className="edge">
			<path d="M110393,-318.422C110417,-326.014 110452,-337.345 110481,-346.409"/>
			<polygon fill="#000000" stroke="#000000" points="110491,-349.511 110480,-350.781 110486,-348.001 110481,-346.491 110481,-346.491 110481,-346.491 110486,-348.001 110483,-342.201 110491,-349.511 110491,-349.511"/>
			<text textAnchor="middle" x="110438" y="-343.8">Go325</text>
			</g>
			<g id="n701" className="node">
			<ellipse cx="110696" cy="-307" rx="37.8943" ry="18"/>
			<text textAnchor="middle" x="110696" y="-303.3">dedit </text>
			</g>
			<g id="edge532" className="edge majority">
			<path strokeWidth="3" d="M110396,-309.723C110454,-309.197 110580,-308.052 110648,-307.427"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="110658,-307.335 110648,-311.926 110653,-308.381 110648,-308.426 110648,-307.426 110648,-306.426 110653,-306.381 110648,-302.927 110658,-307.335 110658,-307.335"/>
			<text textAnchor="middle" x="110528" y="-311.8">majority</text>
			</g>
			<g id="edge1154" className="edge">
			<path d="M110558,-260.681C110580,-264.801 110613,-271.612 110640,-281 110647,-283.333 110654,-286.256 110661,-289.292"/>
			<polygon fill="#000000" stroke="#000000" points="110670,-293.767 110659,-293.575 110665,-291.635 110661,-289.504 110661,-289.504 110661,-289.504 110665,-291.635 110663,-285.433 110670,-293.767 110670,-293.767"/>
			<text textAnchor="middle" x="110617" y="-284.8">Gr314</text>
			</g>
			<g id="n702" className="node">
			<ellipse cx="110869" cy="-310" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="110869" y="-306.3">quod </text>
			</g>
			<g id="edge1118" className="edge">
			<path d="M110576,-358.544C110633,-354.885 110731,-346.356 110814,-328 110819,-326.864 110824,-325.427 110830,-323.862"/>
			<polygon fill="#000000" stroke="#000000" points="110839,-320.74 110831,-328.061 110835,-322.256 110830,-323.773 110830,-323.773 110830,-323.773 110835,-322.256 110829,-319.485 110839,-320.74 110839,-320.74"/>
			<text textAnchor="middle" x="110696" y="-354.8">Go325</text>
			</g>
			<g id="edge702" className="edge majority">
			<path strokeWidth="3.2" d="M110734,-307.644C110760,-308.099 110795,-308.712 110822,-309.198"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="110833,-309.378 110822,-313.702 110828,-310.39 110823,-310.302 110823,-309.203 110823,-308.103 110828,-308.19 110823,-304.703 110833,-309.378 110833,-309.378"/>
			<text textAnchor="middle" x="110783" y="-312.8">majority</text>
			</g>
			<g id="n703" className="node">
			<ellipse cx="111043" cy="-249" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="111043" y="-245.3">male </text>
			</g>
			<g id="edge762" className="edge">
			<path d="M110899,-299.652C110928,-289.5 110972,-273.955 111003,-262.765"/>
			<polygon fill="#000000" stroke="#000000" points="111013,-259.297 111005,-266.88 111008,-260.968 111004,-262.639 111004,-262.639 111004,-262.639 111008,-260.968 111002,-258.398 111013,-259.297 111013,-259.297"/>
			<text textAnchor="middle" x="110955" y="-293.8">Sg524</text>
			</g>
			<g id="n704" className="node">
			<ellipse cx="111043" cy="-310" rx="38.9931" ry="18"/>
			<text textAnchor="middle" x="111043" y="-306.3">mane </text>
			</g>
			<g id="edge287" className="edge majority">
			<path strokeWidth="3" d="M110906,-310C110931,-310 110965,-310 110993,-310"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="111004,-310 110994,-314.5 110999,-311 110994,-311 110994,-310 110994,-309 110999,-309 110994,-305.5 111004,-310 111004,-310"/>
			<text textAnchor="middle" x="110955" y="-313.8">majority</text>
			</g>
			<g id="n707" className="node">
			<ellipse cx="111603" cy="-310" rx="32.4942" ry="18"/>
			<text textAnchor="middle" x="111603" y="-306.3">ipse </text>
			</g>
			<g id="edge446" className="edge">
			<path d="M110898,-321.155C110906,-324.132 110915,-327.057 110924,-329 110959,-336.763 110968,-335.22 111004,-337 111167,-345.147 111208,-340.632 111372,-337 111452,-335.222 111474,-345.206 111552,-329 111557,-327.935 111562,-326.41 111568,-324.682"/>
			<polygon fill="#000000" stroke="#000000" points="111577,-321.174 111569,-328.82 111573,-322.882 111568,-324.591 111568,-324.591 111568,-324.591 111573,-322.882 111566,-320.362 111577,-321.174 111577,-321.174"/>
			<text textAnchor="middle" x="111181" y="-344.8">Gr314</text>
			</g>
			<g id="n705" className="node">
			<ellipse cx="111326" cy="-256" rx="37.0935" ry="18"/>
			<text textAnchor="middle" x="111326" y="-252.3">facto </text>
			</g>
			<g id="edge1277" className="edge">
			<path d="M111077,-242.154C111084,-240.843 111092,-239.671 111100,-239 111172,-232.647 111191,-229.539 111262,-239 111270,-240.004 111278,-241.659 111285,-243.552"/>
			<polygon fill="#000000" stroke="#000000" points="111295,-246.144 111284,-247.923 111290,-244.859 111285,-243.574 111285,-243.574 111285,-243.574 111290,-244.859 111286,-239.225 111295,-246.144 111295,-246.144"/>
			<text textAnchor="middle" x="111181" y="-242.8">Sg524</text>
			</g>
			<g id="n706" className="node">
			<ellipse cx="111326" cy="-310" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="111326" y="-306.3">factum </text>
			</g>
			<g id="edge1035" className="edge">
			<path strokeWidth="1.4" d="M111082,-310C111130,-310 111214,-310 111269,-310"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="111279,-310 111269,-314.5 111274,-310.2 111269,-310.2 111269,-310 111269,-309.8 111274,-309.8 111269,-305.5 111279,-310 111279,-310"/>
			<text textAnchor="middle" x="111181" y="-313.8">Kf133, Kr185, Wi3818</text>
			</g>
			<g id="edge579" className="edge majority">
			<path strokeWidth="2.4" d="M111074,-298.777C111082,-295.94 111091,-293.105 111100,-291 111161,-275.962 111234,-266.072 111279,-260.756"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="111290,-259.596 111280,-265.197 111285,-260.857 111280,-261.422 111280,-260.726 111280,-260.031 111285,-259.466 111279,-256.255 111290,-259.596 111290,-259.596"/>
			<text textAnchor="middle" x="111181" y="-294.8">majority</text>
			</g>
			<g id="edge1362" className="edge">
			<path strokeWidth="1.4" d="M111372,-310C111425,-310 111509,-310 111560,-310"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="111570,-310 111560,-314.5 111565,-310.2 111560,-310.2 111560,-310 111560,-309.8 111565,-309.8 111560,-305.5 111570,-310 111570,-310"/>
			<text textAnchor="middle" x="111471" y="-313.8">Kf133, Kr185, Wi3818</text>
			</g>
			<g id="edge1345" className="edge majority">
			<path strokeWidth="2.6" d="M111363,-259.213C111407,-263.784 111486,-273.603 111552,-291 111557,-292.318 111562,-293.956 111567,-295.714"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="111577,-299.19 111566,-299.963 111572,-298.216 111567,-296.491 111567,-295.74 111568,-294.989 111572,-296.714 111569,-291.516 111577,-299.19 111577,-299.19"/>
			<text textAnchor="middle" x="111471" y="-294.8">majority</text>
			</g>
			<g id="n708" className="node">
			<ellipse cx="111790" cy="-310" rx="55.7903" ry="18"/>
			<text textAnchor="middle" x="111790" y="-306.3">inueniret </text>
			</g>
			<g id="edge1053" className="edge majority">
			<path strokeWidth="3.4" d="M111636,-310C111660,-310 111694,-310 111724,-310"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="111734,-310 111724,-314.5 111729,-311.2 111724,-311.2 111724,-310 111724,-308.8 111729,-308.8 111724,-305.5 111734,-310 111734,-310"/>
			<text textAnchor="middle" x="111685" y="-313.8">majority</text>
			</g>
			<g id="n709" className="node">
			<ellipse cx="111986" cy="-310" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="111986" y="-306.3">uellus </text>
			</g>
			<g id="edge796" className="edge majority">
			<path strokeWidth="3.4" d="M111846,-310C111874,-310 111907,-310 111934,-310"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="111944,-310 111934,-314.5 111939,-311.2 111934,-311.2 111934,-310 111934,-308.8 111939,-308.8 111934,-305.5 111944,-310 111944,-310"/>
			<text textAnchor="middle" x="111895" y="-313.8">majority</text>
			</g>
			<g id="n711" className="node">
			<ellipse cx="112178" cy="-242" rx="51.1914" ry="18"/>
			<text textAnchor="middle" x="112178" y="-238.3">positum </text>
			</g>
			<g id="edge122" className="edge majority">
			<path strokeWidth="3.2" d="M112013,-296.193C112023,-291.032 112035,-285.368 112046,-281 112072,-270.889 112101,-261.88 112126,-255.075"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="112136,-252.391 112127,-259.37 112131,-254.771 112126,-256.091 112126,-255.03 112126,-253.969 112131,-252.649 112125,-250.689 112136,-252.391 112136,-252.391"/>
			<text textAnchor="middle" x="112077" y="-284.8">majority</text>
			</g>
			<g id="n710" className="node">
			<ellipse cx="112956" cy="-213" rx="72.2875" ry="18"/>
			<text textAnchor="middle" x="112956" y="-209.3">humefactum </text>
			</g>
			<g id="edge552" className="edge">
			<path d="M112028,-310C112066,-310 112126,-310 112177,-310 112177,-310 112177,-310 112733,-310 112807,-310 112883,-264.647 112925,-235.964"/>
			<polygon fill="#000000" stroke="#000000" points="112933,-230.118 112927,-239.577 112929,-233.013 112925,-235.908 112925,-235.908 112925,-235.908 112929,-233.013 112922,-232.239 112933,-230.118 112933,-230.118"/>
			<text textAnchor="middle" x="112446" y="-313.8">Gr314</text>
			</g>
			<g id="n713" className="node">
			<ellipse cx="112355" cy="-216" rx="27" ry="18"/>
			<text textAnchor="middle" x="112355" y="-212.3">in </text>
			</g>
			<g id="edge493" className="edge majority">
			<path strokeWidth="3.2" d="M112225,-235.101C112255,-230.771 112292,-225.274 112318,-221.29"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="112328,-219.789 112319,-225.71 112324,-221.612 112319,-222.347 112319,-221.259 112318,-220.171 112323,-219.436 112318,-216.808 112328,-219.789 112328,-219.789"/>
			<text textAnchor="middle" x="112279" y="-234.8">majority</text>
			</g>
			<g id="n715" className="node">
			<ellipse cx="112545" cy="-156" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="112545" y="-152.3">area </text>
			</g>
			<g id="edge62" className="edge majority">
			<path strokeWidth="2.6" d="M112376,-203.898C112383,-199.693 112392,-195.227 112400,-192 112433,-178.966 112473,-169.467 112502,-163.511"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="112512,-161.551 112503,-167.912 112507,-163.309 112502,-164.282 112502,-163.498 112502,-162.713 112507,-161.74 112501,-159.084 112512,-161.551 112512,-161.551"/>
			<text textAnchor="middle" x="112446" y="-195.8">majority</text>
			</g>
			<g id="n714" className="node">
			<ellipse cx="112545" cy="-264" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="112545" y="-260.3">aera </text>
			</g>
			<g id="edge541" className="edge">
			<path d="M112378,-225.336C112385,-228.041 112393,-230.843 112400,-233 112434,-243.075 112473,-251.275 112502,-256.706"/>
			<polygon fill="#000000" stroke="#000000" points="112512,-258.579 112501,-261.193 112507,-257.674 112502,-256.768 112502,-256.768 112502,-256.768 112507,-257.674 112503,-252.342 112512,-258.579 112512,-258.579"/>
			<text textAnchor="middle" x="112446" y="-257.8">Go325</text>
			</g>
			<g id="n717" className="node">
			<ellipse cx="112545" cy="-210" rx="28.6953" ry="18"/>
			<text textAnchor="middle" x="112545" y="-206.3">ara </text>
			</g>
			<g id="edge1245" className="edge">
			<path strokeWidth="1.2" d="M112382,-215.166C112414,-214.14 112469,-212.391 112506,-211.216"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="112516,-210.886 112506,-215.703 112511,-211.145 112506,-211.305 112506,-211.205 112506,-211.105 112511,-210.945 112506,-206.707 112516,-210.886 112516,-210.886"/>
			<text textAnchor="middle" x="112446" y="-217.8">Ba96, Sg524</text>
			</g>
			<g id="n718" className="node">
			<ellipse cx="112732" cy="-108" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="112732" y="-104.3">XXX </text>
			</g>
			<g id="edge628" className="edge">
			<path d="M112570,-143.81C112579,-139.912 112589,-135.869 112598,-133 112628,-123.834 112662,-117.487 112688,-113.482"/>
			<polygon fill="#000000" stroke="#000000" points="112698,-112.01 112689,-117.911 112693,-112.734 112688,-113.459 112688,-113.459 112688,-113.459 112693,-112.734 112688,-109.006 112698,-112.01 112698,-112.01"/>
			<text textAnchor="middle" x="112633" y="-136.8">Mü28315</text>
			</g>
			<g id="edge934" className="edge majority">
			<path strokeWidth="2.4" d="M112578,-160.52C112644,-169.635 112793,-190.414 112883,-202.918"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="112893,-204.326 112882,-207.402 112888,-204.329 112883,-203.638 112883,-202.945 112883,-202.252 112888,-202.942 112883,-198.488 112893,-204.326 112893,-204.326"/>
			<text textAnchor="middle" x="112732" y="-191.8">majority</text>
			</g>
			<g id="edge510" className="edge">
			<path d="M112579,-260.354C112637,-253.901 112761,-239.84 112866,-226 112872,-225.239 112878,-224.424 112884,-223.589"/>
			<polygon fill="#000000" stroke="#000000" points="112894,-222.167 112884,-228.022 112889,-222.867 112884,-223.567 112884,-223.567 112884,-223.567 112889,-222.867 112883,-219.111 112894,-222.167 112894,-222.167"/>
			<text textAnchor="middle" x="112732" y="-251.8">Go325</text>
			</g>
			<g id="edge691" className="edge">
			<path strokeWidth="1.2" d="M112574,-210.204C112634,-210.649 112781,-211.721 112873,-212.401"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="112884,-212.476 112874,-216.902 112879,-212.539 112874,-212.503 112874,-212.403 112874,-212.303 112879,-212.339 112874,-207.903 112884,-212.476 112884,-212.476"/>
			<text textAnchor="middle" x="112732" y="-214.8">Ba96, Sg524</text>
			</g>
			<g id="edge1092" className="edge">
			<path d="M112767,-109.3C112794,-111.526 112835,-117.438 112866,-133 112892,-146.091 112917,-169.327 112934,-187.396"/>
			<polygon fill="#000000" stroke="#000000" points="112941,-195.279 112931,-190.811 112937,-191.547 112934,-187.816 112934,-187.816 112934,-187.816 112937,-191.547 112937,-184.821 112941,-195.279 112941,-195.279"/>
			<text textAnchor="middle" x="112831" y="-136.8">Mü28315</text>
			</g>
			<g id="n723" className="node">
			<ellipse cx="113155" cy="-250" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="113155" y="-246.3">per </text>
			</g>
			<g id="edge647" className="edge majority">
			<path strokeWidth="3.2" d="M113014,-223.752C113047,-229.947 113088,-237.556 113117,-242.984"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="113127,-244.879 113116,-247.455 113122,-245.037 113117,-244.114 113117,-243.033 113117,-241.951 113122,-242.874 113118,-238.61 113127,-244.879 113127,-244.879"/>
			<text textAnchor="middle" x="113077" y="-244.8">majority</text>
			</g>
			<g id="n722" className="node">
			<ellipse cx="113155" cy="-196" rx="27" ry="18"/>
			<text textAnchor="middle" x="113155" y="-192.3">te </text>
			</g>
			<g id="edge566" className="edge">
			<path d="M113025,-207.173C113056,-204.47 113092,-201.365 113118,-199.116"/>
			<polygon fill="#000000" stroke="#000000" points="113128,-198.238 113118,-203.581 113123,-198.668 113118,-199.098 113118,-199.098 113118,-199.098 113123,-198.668 113118,-194.614 113128,-198.238 113128,-198.238"/>
			<text textAnchor="middle" x="113077" y="-208.8">Er16</text>
			</g>
			<g id="n725" className="node">
			<ellipse cx="113324" cy="-240" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="113324" y="-236.3">rorem </text>
			</g>
			<g id="edge36" className="edge majority">
			<path strokeWidth="3.2" d="M113184,-248.304C113208,-246.874 113243,-244.793 113272,-243.072"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="113282,-242.456 113272,-247.546 113277,-243.853 113272,-244.152 113272,-243.054 113272,-241.956 113277,-241.657 113272,-238.562 113282,-242.456 113282,-242.456"/>
			<text textAnchor="middle" x="113233" y="-250.8">majority</text>
			</g>
			<g id="edge453" className="edge">
			<path d="M113180,-202.261C113202,-207.885 113235,-216.403 113264,-224 113269,-225.228 113273,-226.52 113278,-227.815"/>
			<polygon fill="#000000" stroke="#000000" points="113288,-230.46 113277,-232.199 113283,-229.157 113278,-227.854 113278,-227.854 113278,-227.854 113283,-229.157 113280,-223.51 113288,-230.46 113288,-230.46"/>
			<text textAnchor="middle" x="113233" y="-227.8">Er16</text>
			</g>
			<g id="n730" className="node">
			<ellipse cx="113546" cy="-119" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="113546" y="-115.3">aere </text>
			</g>
			<g id="edge743" className="edge">
			<path d="M113335,-222.398C113345,-205.781 113363,-181.333 113384,-167 113420,-143.014 113468,-130.727 113502,-124.624"/>
			<polygon fill="#000000" stroke="#000000" points="113512,-122.923 113503,-129.012 113507,-123.748 113502,-124.574 113502,-124.574 113502,-124.574 113507,-123.748 113502,-120.135 113512,-122.923 113512,-122.923"/>
			<text textAnchor="middle" x="113430" y="-170.8">Go325</text>
			</g>
			<g id="n728" className="node">
			<ellipse cx="113546" cy="-173" rx="28.6953" ry="18"/>
			<text textAnchor="middle" x="113546" y="-169.3">ara </text>
			</g>
			<g id="edge1087" className="edge">
			<path strokeWidth="1.2" d="M113351,-225.856C113361,-220.651 113373,-215.045 113384,-211 113425,-196.129 113475,-185.436 113508,-179.253"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="113518,-177.404 113509,-183.627 113513,-178.4 113508,-179.298 113508,-179.2 113508,-179.101 113513,-178.204 113508,-174.773 113518,-177.404 113518,-177.404"/>
			<text textAnchor="middle" x="113430" y="-214.8">Ba96, Sg524</text>
			</g>
			<g id="n727" className="node">
			<ellipse cx="113546" cy="-281" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="113546" y="-277.3">arefacta </text>
			</g>
			<g id="edge1086" className="edge">
			<path d="M113363,-247.142C113398,-253.663 113450,-263.38 113490,-270.733"/>
			<polygon fill="#000000" stroke="#000000" points="113500,-272.596 113489,-275.188 113495,-271.68 113490,-270.764 113490,-270.764 113490,-270.764 113495,-271.68 113491,-266.34 113500,-272.596 113500,-272.596"/>
			<text textAnchor="middle" x="113430" y="-270.8">Kf133</text>
			</g>
			<g id="n726" className="node">
			<ellipse cx="113546" cy="-375" rx="51.1914" ry="18"/>
			<text textAnchor="middle" x="113546" y="-371.3">positum </text>
			</g>
			<g id="edge652" className="edge">
			<path d="M113330,-258.085C113338,-281.094 113355,-320.322 113384,-341 113413,-361.893 113452,-370.49 113484,-373.816"/>
			<polygon fill="#000000" stroke="#000000" points="113495,-374.72 113484,-378.326 113490,-374.282 113485,-373.843 113485,-373.843 113485,-373.843 113490,-374.282 113485,-369.36 113495,-374.72 113495,-374.72"/>
			<text textAnchor="middle" x="113430" y="-375.8">Gr314</text>
			</g>
			<g id="n729" className="node">
			<ellipse cx="113546" cy="-227" rx="27" ry="18"/>
			<text textAnchor="middle" x="113546" y="-223.3">a </text>
			</g>
			<g id="edge1197" className="edge">
			<path d="M113366,-237.161C113372,-236.76 113378,-236.361 113384,-236 113427,-233.353 113476,-230.651 113509,-228.908"/>
			<polygon fill="#000000" stroke="#000000" points="113519,-228.355 113509,-233.38 113514,-228.621 113509,-228.886 113509,-228.886 113509,-228.886 113514,-228.621 113509,-224.393 113519,-228.355 113519,-228.355"/>
			<text textAnchor="middle" x="113430" y="-239.8">Kr299</text>
			</g>
			<g id="n735" className="node">
			<ellipse cx="114431" cy="-307" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="114431" y="-303.3">area </text>
			</g>
			<g id="edge48" className="edge">
			<path strokeWidth="2.2" d="M113342,-256.387C113353,-266.277 113368,-278.396 113384,-286 113450,-318.502 113471,-327 113545,-327 113545,-327 113545,-327 114269,-327 114310,-327 114356,-320.599 114388,-315.04"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="114398,-313.273 114389,-319.442 114394,-314.733 114389,-315.601 114389,-315.011 114388,-314.42 114393,-313.551 114388,-310.579 114398,-313.273 114398,-313.273"/>
			<text textAnchor="middle" x="113910" y="-330.8">Er16, Kr185, Mü11475, Mü22405, Mü28315, MüU151, Wi3818</text>
			</g>
			<g id="n738" className="node">
			<ellipse cx="114631" cy="-173" rx="66.8882" ry="18"/>
			<text textAnchor="middle" x="114631" y="-169.3">remanente. </text>
			</g>
			<g id="edge1062" className="edge">
			<path d="M113581,-119.312C113645,-119.875 113788,-121 113909,-121 113909,-121 113909,-121 114432,-121 114486,-121 114545,-139.247 114585,-154.123"/>
			<polygon fill="#000000" stroke="#000000" points="114595,-157.82 114584,-158.432 114590,-156.025 114585,-154.231 114585,-154.231 114585,-154.231 114590,-156.025 114587,-150.031 114595,-157.82 114595,-157.82"/>
			<text textAnchor="middle" x="114268" y="-124.8">Go325</text>
			</g>
			<g id="edge835" className="edge">
			<path strokeWidth="1.2" d="M113575,-173C113635,-173 113784,-173 113909,-173 113909,-173 113909,-173 114432,-173 114472,-173 114517,-173 114554,-173"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="114564,-173 114554,-177.5 114559,-173.1 114554,-173.1 114554,-173 114554,-172.9 114559,-172.9 114554,-168.5 114564,-173 114564,-173"/>
			<text textAnchor="middle" x="114268" y="-176.8">Ba96, Sg524</text>
			</g>
			<g id="edge588" className="edge">
			<path d="M113598,-282.08C113709,-284.47 113978,-290.583 114204,-298 114267,-300.081 114341,-303.116 114386,-305.075"/>
			<polygon fill="#000000" stroke="#000000" points="114396,-305.512 114386,-309.576 114391,-305.296 114386,-305.08 114386,-305.08 114386,-305.08 114391,-305.296 114387,-300.584 114396,-305.512 114396,-305.512"/>
			<text textAnchor="middle" x="114181" y="-301.8">Kf133</text>
			</g>
			<g id="n731" className="node">
			<ellipse cx="113910" cy="-378" rx="27" ry="18"/>
			<text textAnchor="middle" x="113910" y="-374.3">in </text>
			</g>
			<g id="edge425" className="edge">
			<path d="M113597,-375.417C113671,-376.03 113808,-377.16 113873,-377.699"/>
			<polygon fill="#000000" stroke="#000000" points="113883,-377.783 113873,-382.2 113878,-377.742 113873,-377.7 113873,-377.7 113873,-377.7 113878,-377.742 113873,-373.2 113883,-377.783 113883,-377.783"/>
			<text textAnchor="middle" x="113639" y="-378.8">Gr314</text>
			</g>
			<g id="n732" className="node">
			<ellipse cx="113910" cy="-233" rx="28.6953" ry="18"/>
			<text textAnchor="middle" x="113910" y="-229.3">ros </text>
			</g>
			<g id="edge134" className="edge">
			<path d="M113573,-227.432C113636,-228.476 113797,-231.146 113871,-232.37"/>
			<polygon fill="#000000" stroke="#000000" points="113881,-232.54 113871,-236.873 113876,-232.457 113871,-232.374 113871,-232.374 113871,-232.374 113876,-232.457 113871,-227.875 113881,-232.54 113881,-232.54"/>
			<text textAnchor="middle" x="113639" y="-231.8">Kr299</text>
			</g>
			<g id="n733" className="node">
			<ellipse cx="114268" cy="-374" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="114268" y="-370.3">area </text>
			</g>
			<g id="edge749" className="edge">
			<path d="M113937,-377.706C113998,-377.024 114149,-375.331 114223,-374.49"/>
			<polygon fill="#000000" stroke="#000000" points="114233,-374.377 114223,-378.99 114228,-374.434 114223,-374.49 114223,-374.49 114223,-374.49 114228,-374.434 114223,-369.99 114233,-374.377 114233,-374.377"/>
			<text textAnchor="middle" x="114181" y="-378.8">Gr314</text>
			</g>
			<g id="n734" className="node">
			<ellipse cx="114268" cy="-235" rx="35.9954" ry="18"/>
			<text textAnchor="middle" x="114268" y="-231.3">roris </text>
			</g>
			<g id="edge250" className="edge">
			<path d="M113939,-233.155C114000,-233.499 114147,-234.328 114222,-234.748"/>
			<polygon fill="#000000" stroke="#000000" points="114232,-234.804 114222,-239.248 114227,-234.776 114222,-234.748 114222,-234.748 114222,-234.748 114227,-234.776 114222,-230.248 114232,-234.804 114232,-234.804"/>
			<text textAnchor="middle" x="114181" y="-237.8">Kr299</text>
			</g>
			<g id="edge1253" className="edge">
			<path d="M114300,-367.141C114322,-361.601 114353,-352.787 114378,-341 114386,-337.198 114395,-332.266 114402,-327.343"/>
			<polygon fill="#000000" stroke="#000000" points="114411,-321.637 114405,-330.961 114406,-324.434 114402,-327.231 114402,-327.231 114402,-327.231 114406,-324.434 114400,-323.5 114411,-321.637 114411,-321.637"/>
			<text textAnchor="middle" x="114355" y="-360.8">Gr314</text>
			</g>
			<g id="n736" className="node">
			<ellipse cx="114431" cy="-236" rx="33.5952" ry="18"/>
			<text textAnchor="middle" x="114431" y="-232.3">nam </text>
			</g>
			<g id="edge892" className="edge">
			<path d="M114304,-235.217C114328,-235.368 114361,-235.57 114387,-235.731"/>
			<polygon fill="#000000" stroke="#000000" points="114397,-235.795 114387,-240.233 114392,-235.764 114387,-235.733 114387,-235.733 114387,-235.733 114392,-235.764 114387,-231.233 114397,-235.795 114397,-235.795"/>
			<text textAnchor="middle" x="114355" y="-238.8">Kr299</text>
			</g>
			<g id="n739" className="node">
			<ellipse cx="114848" cy="-236" rx="40.0939" ry="18"/>
			<text textAnchor="middle" x="114848" y="-232.3">sicca. </text>
			</g>
			<g id="edge839" className="edge">
			<path d="M114465,-236C114537,-236 114712,-236 114797,-236"/>
			<polygon fill="#000000" stroke="#000000" points="114808,-236 114798,-240.5 114803,-236 114798,-236 114798,-236 114798,-236 114803,-236 114798,-231.5 114808,-236 114808,-236"/>
			<text textAnchor="middle" x="114631" y="-239.8">Kr299</text>
			</g>
			<g id="n737" className="node">
			<ellipse cx="114631" cy="-297" rx="53.8905" ry="18"/>
			<text textAnchor="middle" x="114631" y="-293.3">manente </text>
			</g>
			<g id="edge1344" className="edge">
			<path d="M114466,-305.304C114493,-303.9 114534,-301.867 114567,-300.164"/>
			<polygon fill="#000000" stroke="#000000" points="114578,-299.647 114568,-304.646 114573,-299.899 114568,-300.152 114568,-300.152 114568,-300.152 114573,-299.899 114567,-295.657 114578,-299.647 114578,-299.647"/>
			<text textAnchor="middle" x="114515" y="-307.8">Er16</text>
			</g>
			<g id="edge1099" className="edge majority">
			<path strokeWidth="2.4" d="M114452,-292.454C114477,-273.832 114524,-240.773 114564,-214 114574,-207.614 114584,-200.907 114594,-194.809"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="114603,-189.407 114597,-198.489 114599,-192.629 114595,-195.255 114594,-194.66 114594,-194.064 114598,-191.438 114592,-190.83 114603,-189.407 114603,-189.407"/>
			<text textAnchor="middle" x="114515" y="-271.8">majority</text>
			</g>
			<g id="edge218" className="edge">
			<path d="M114673,-285.455C114710,-274.833 114765,-259.13 114804,-248.281"/>
			<polygon fill="#000000" stroke="#000000" points="114814,-245.496 114805,-252.555 114809,-246.861 114804,-248.226 114804,-248.226 114804,-248.226 114809,-246.861 114803,-243.896 114814,-245.496 114814,-245.496"/>
			<text textAnchor="middle" x="114747" y="-274.8">Er16</text>
			</g>
			<g id="n741" className="node">
			<ellipse cx="114848" cy="-119" rx="40.0939" ry="18"/>
			<text textAnchor="middle" x="114848" y="-115.3">sicco. </text>
			</g>
			<g id="edge1241" className="edge">
			<path d="M114671,-158.394C114685,-153.374 114701,-148.013 114716,-144 114743,-136.688 114775,-130.646 114800,-126.334"/>
			<polygon fill="#000000" stroke="#000000" points="114810,-124.651 114801,-130.75 114805,-125.482 114800,-126.313 114800,-126.313 114800,-126.313 114805,-125.482 114799,-121.875 114810,-124.651 114810,-124.651"/>
			<text textAnchor="middle" x="114747" y="-147.8">Go325</text>
			</g>
			<g id="edge344" className="edge majority">
			<path strokeWidth="2.4" d="M114686,-183.295C114714,-189.167 114748,-197.293 114778,-207 114789,-210.43 114800,-214.81 114810,-219.121"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="114820,-223.199 114809,-223.38 114815,-221.866 114810,-219.89 114810,-219.247 114811,-218.604 114815,-220.58 114812,-215.113 114820,-223.199 114820,-223.199"/>
			<text textAnchor="middle" x="114747" y="-210.8">majority</text>
			</g>
			<g id="n740" className="node">
			<ellipse cx="114848" cy="-65" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="114848" y="-61.3">desicca. </text>
			</g>
			<g id="edge754" className="edge">
			<path d="M114652,-155.63C114668,-142.057 114692,-123.464 114716,-111 114741,-97.5123 114772,-86.5857 114797,-78.7717"/>
			<polygon fill="#000000" stroke="#000000" points="114806,-75.8257 114798,-83.0465 114802,-77.2839 114797,-78.7421 114797,-78.7421 114797,-78.7421 114802,-77.2839 114796,-74.4377 114806,-75.8257 114806,-75.8257"/>
			<text textAnchor="middle" x="114747" y="-114.8">Sg524</text>
			</g>
			<g id="n743" className="node">
			<ellipse cx="115040" cy="-173" rx="32.4942" ry="18"/>
			<text textAnchor="middle" x="115040" y="-169.3">Hoc </text>
			</g>
			<g id="edge461" className="edge">
			<path d="M114698,-173C114783,-173 114926,-173 114997,-173"/>
			<polygon fill="#000000" stroke="#000000" points="115007,-173 114997,-177.5 115002,-173 114997,-173 114997,-173 114997,-173 115002,-173 114997,-168.5 115007,-173 115007,-173"/>
			<text textAnchor="middle" x="114848" y="-176.8">Wi3818</text>
			</g>
			<g id="edge367" className="edge">
			<path d="M114887,-123.538C114914,-127.347 114950,-133.83 114980,-144 114989,-147.083 114999,-151.326 115008,-155.615"/>
			<polygon fill="#000000" stroke="#000000" points="115017,-160.234 115006,-159.702 115012,-157.963 115008,-155.693 115008,-155.693 115008,-155.693 115012,-157.963 115010,-151.684 115017,-160.234 115017,-160.234"/>
			<text textAnchor="middle" x="114949" y="-147.8">Go325</text>
			</g>
			<g id="n742" className="node">
			<ellipse cx="115040" cy="-235" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="115040" y="-231.3">Huius </text>
			</g>
			<g id="edge346" className="edge">
			<path d="M114888,-235.793C114917,-235.641 114957,-235.433 114988,-235.268"/>
			<polygon fill="#000000" stroke="#000000" points="114998,-235.214 114988,-239.767 114993,-235.24 114988,-235.267 114988,-235.267 114988,-235.267 114993,-235.24 114988,-230.767 114998,-235.214 114998,-235.214"/>
			<text textAnchor="middle" x="114949" y="-238.8">Kr299</text>
			</g>
			<g id="edge1140" className="edge majority">
			<path strokeWidth="2.6" d="M114881,-225.455C114914,-214.392 114967,-197.019 115002,-185.329"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="115012,-182.045 115004,-189.464 115007,-184.378 115002,-185.952 115002,-185.192 115002,-184.433 115007,-182.859 115001,-180.921 115012,-182.045 115012,-182.045"/>
			<text textAnchor="middle" x="114949" y="-214.8">majority</text>
			</g>
			<g id="edge1285" className="edge">
			<path d="M114893,-74.0008C114920,-80.7859 114954,-91.9069 114980,-109 114996,-119.315 115010,-134.899 115021,-148.106"/>
			<polygon fill="#000000" stroke="#000000" points="115027,-156.363 115018,-151.224 115024,-152.413 115021,-148.464 115021,-148.464 115021,-148.464 115024,-152.413 115025,-145.704 115027,-156.363 115027,-156.363"/>
			<text textAnchor="middle" x="114949" y="-112.8">Sg524</text>
			</g>
			<g id="n744" className="node">
			<ellipse cx="115222" cy="-185" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="115222" y="-181.3">uellus </text>
			</g>
			<g id="edge684" className="edge">
			<path d="M115076,-225.359C115104,-217.37 115146,-205.964 115177,-197.315"/>
			<polygon fill="#000000" stroke="#000000" points="115186,-194.611 115178,-201.623 115182,-195.949 115177,-197.287 115177,-197.287 115177,-197.287 115182,-195.949 115176,-192.952 115186,-194.611 115186,-194.611"/>
			<text textAnchor="middle" x="115131" y="-220.8">Kr299</text>
			</g>
			<g id="edge726" className="edge majority">
			<path strokeWidth="3.2" d="M115072,-175.09C115099,-176.894 115139,-179.533 115171,-181.634"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="115181,-182.324 115171,-186.149 115176,-183.089 115171,-182.757 115171,-181.659 115171,-180.561 115176,-180.894 115171,-177.169 115181,-182.324 115181,-182.324"/>
			<text textAnchor="middle" x="115131" y="-183.8">majority</text>
			</g>
			<g id="n745" className="node">
			<ellipse cx="115390" cy="-185" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="115390" y="-181.3">est </text>
			</g>
			<g id="edge1008" className="edge majority">
			<path strokeWidth="3.4" d="M115264,-185C115291,-185 115326,-185 115352,-185"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="115362,-185 115352,-189.5 115357,-186.2 115352,-186.2 115352,-185 115352,-183.8 115357,-183.8 115352,-180.5 115362,-185 115362,-185"/>
			<text textAnchor="middle" x="115313" y="-188.8">majority</text>
			</g>
			<g id="n746" className="node">
			<ellipse cx="115556" cy="-185" rx="39.7935" ry="18"/>
			<text textAnchor="middle" x="115556" y="-181.3">beata </text>
			</g>
			<g id="edge583" className="edge majority">
			<path strokeWidth="3.4" d="M115418,-185C115442,-185 115477,-185 115506,-185"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="115516,-185 115506,-189.5 115511,-186.2 115506,-186.2 115506,-185 115506,-183.8 115511,-183.8 115506,-180.5 115516,-185 115516,-185"/>
			<text textAnchor="middle" x="115467" y="-188.8">majority</text>
			</g>
			<g id="n747" className="node">
			<ellipse cx="115733" cy="-185" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="115733" y="-181.3">uirgo </text>
			</g>
			<g id="edge1208" className="edge majority">
			<path strokeWidth="3.4" d="M115596,-185C115622,-185 115656,-185 115684,-185"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="115694,-185 115684,-189.5 115689,-186.2 115684,-186.2 115684,-185 115684,-183.8 115689,-183.8 115684,-180.5 115694,-185 115694,-185"/>
			<text textAnchor="middle" x="115645" y="-188.8">majority</text>
			</g>
			<g id="n748" className="node">
			<ellipse cx="115901" cy="-185" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="115901" y="-181.3">que </text>
			</g>
			<g id="edge1100" className="edge majority">
			<path strokeWidth="3.4" d="M115772,-185C115798,-185 115833,-185 115860,-185"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="115870,-185 115860,-189.5 115865,-186.2 115860,-186.2 115860,-185 115860,-183.8 115865,-183.8 115860,-180.5 115870,-185 115870,-185"/>
			<text textAnchor="middle" x="115821" y="-188.8">majority</text>
			</g>
			<g id="n749" className="node">
			<ellipse cx="116055" cy="-148" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="116055" y="-144.3">est </text>
			</g>
			<g id="edge57" className="edge">
			<path d="M115929,-178.104C115936,-176.422 115943,-174.636 115950,-173 115973,-167.427 115998,-161.282 116018,-156.479"/>
			<polygon fill="#000000" stroke="#000000" points="116028,-154.1 116020,-160.799 116023,-155.261 116019,-156.422 116019,-156.422 116019,-156.422 116023,-155.261 116018,-152.045 116028,-154.1 116028,-154.1"/>
			<text textAnchor="middle" x="115978" y="-176.8">Wi3818</text>
			</g>
			<g id="n750" className="node">
			<ellipse cx="116241" cy="-151" rx="63.0888" ry="18"/>
			<text textAnchor="middle" x="116241" y="-147.3">humefacta </text>
			</g>
			<g id="edge822" className="edge majority">
			<path strokeWidth="3.2" d="M115931,-187.131C115938,-187.493 115944,-187.812 115950,-188 116044,-190.926 116068,-183.794 116160,-168 116167,-166.843 116174,-165.516 116181,-164.125"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="116191,-162.053 116182,-168.455 116186,-164.127 116181,-165.123 116181,-164.045 116181,-162.967 116186,-161.971 116180,-159.636 116191,-162.053 116191,-162.053"/>
			<text textAnchor="middle" x="116055" y="-190.8">majority</text>
			</g>
			<g id="edge1022" className="edge">
			<path d="M116083,-148.443C116105,-148.804 116138,-149.333 116167,-149.815"/>
			<polygon fill="#000000" stroke="#000000" points="116178,-149.984 116168,-154.32 116173,-149.902 116168,-149.821 116168,-149.821 116168,-149.821 116173,-149.902 116168,-145.321 116178,-149.984 116178,-149.984"/>
			<text textAnchor="middle" x="116132" y="-152.8">Wi3818</text>
			</g>
			<g id="n751" className="node">
			<ellipse cx="116430" cy="-98" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="116430" y="-94.3">est </text>
			</g>
			<g id="edge1224" className="edge majority">
			<path strokeWidth="3.2" d="M116280,-136.772C116293,-132.076 116308,-127.028 116322,-123 116345,-116.208 116372,-109.981 116393,-105.441"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="116403,-103.29 116394,-109.787 116398,-105.414 116393,-106.463 116393,-105.387 116393,-104.312 116398,-103.263 116392,-100.988 116403,-103.29 116403,-103.29"/>
			<text textAnchor="middle" x="116353" y="-126.8">majority</text>
			</g>
			<g id="n752" className="node">
			<ellipse cx="116585" cy="-151" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="116585" y="-147.3">per </text>
			</g>
			<g id="edge732" className="edge">
			<path d="M116304,-151C116375,-151 116486,-151 116545,-151"/>
			<polygon fill="#000000" stroke="#000000" points="116555,-151 116545,-155.5 116550,-151 116545,-151 116545,-151 116545,-151 116550,-151 116545,-146.5 116555,-151 116555,-151"/>
			<text textAnchor="middle" x="116430" y="-154.8">Wi3818</text>
			</g>
			<g id="edge120" className="edge majority">
			<path strokeWidth="3.2" d="M116458,-101.813C116480,-105.538 116512,-112.242 116538,-123 116544,-125.508 116550,-128.773 116556,-132.185"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="116565,-137.577 116554,-136.176 116560,-135.897 116556,-133.28 116557,-132.342 116557,-131.405 116561,-134.023 116559,-128.508 116565,-137.577 116565,-137.577"/>
			<text textAnchor="middle" x="116507" y="-126.8">majority</text>
			</g>
			<g id="n753" className="node">
			<ellipse cx="116764" cy="-151" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="116764" y="-147.3">graciam </text>
			</g>
			<g id="edge526" className="edge majority">
			<path strokeWidth="3.4" d="M116614,-151C116638,-151 116672,-151 116702,-151"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="116712,-151 116702,-155.5 116707,-152.2 116702,-152.2 116702,-151 116702,-149.8 116707,-149.8 116702,-146.5 116712,-151 116712,-151"/>
			<text textAnchor="middle" x="116663" y="-154.8">majority</text>
			</g>
			<g id="n754" className="node">
			<ellipse cx="116948" cy="-113" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="116948" y="-109.3">Spiritus </text>
			</g>
			<g id="edge384" className="edge">
			<path d="M116809,-141.801C116835,-136.445 116867,-129.658 116894,-124.018"/>
			<polygon fill="#000000" stroke="#000000" points="116904,-121.918 116895,-128.366 116899,-122.94 116895,-123.961 116895,-123.961 116895,-123.961 116899,-122.94 116894,-119.556 116904,-121.918 116904,-121.918"/>
			<text textAnchor="middle" x="116857" y="-139.8">Sg524</text>
			</g>
			<g id="n755" className="node">
			<ellipse cx="117122" cy="-165" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="117122" y="-161.3">sancti </text>
			</g>
			<g id="edge236" className="edge majority">
			<path strokeWidth="3.2" d="M116816,-153.006C116884,-155.663 117002,-160.324 117070,-162.986"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="117080,-163.379 117070,-167.483 117075,-164.282 117070,-164.085 117070,-162.986 117070,-161.887 117075,-162.083 117070,-158.49 117080,-163.379 117080,-163.379"/>
			<text textAnchor="middle" x="116948" y="-163.8">majority</text>
			</g>
			<g id="edge987" className="edge">
			<path d="M116994,-120.606C117015,-124.764 117040,-130.592 117062,-138 117070,-140.543 117078,-143.752 117085,-147.063"/>
			<polygon fill="#000000" stroke="#000000" points="117094,-151.269 117083,-151.197 117090,-149.187 117085,-147.106 117085,-147.106 117085,-147.106 117090,-149.187 117087,-143.014 117094,-151.269 117094,-151.269"/>
			<text textAnchor="middle" x="117039" y="-141.8">Sg524</text>
			</g>
			<g id="n756" className="node">
			<ellipse cx="117312" cy="-154" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="117312" y="-150.3">Spiritus </text>
			</g>
			<g id="edge1186" className="edge majority">
			<path strokeWidth="3.2" d="M117164,-162.586C117190,-161.076 117224,-159.108 117252,-157.437"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="117263,-156.837 117253,-161.913 117258,-158.227 117253,-158.519 117253,-157.421 117252,-156.323 117257,-156.031 117252,-152.928 117263,-156.837 117263,-156.837"/>
			<text textAnchor="middle" x="117213" y="-164.8">majority</text>
			</g>
			<g id="n759" className="node">
			<ellipse cx="117477" cy="-170" rx="28.6953" ry="18"/>
			<text textAnchor="middle" x="117477" y="-166.3">ara </text>
			</g>
			<g id="edge498" className="edge">
			<path d="M117158,-174.592C117166,-176.544 117174,-178.466 117182,-180 117269,-197.197 117291,-201.762 117380,-208 117401,-209.497 117408,-215.01 117428,-208 117433,-206.109 117443,-199.019 117452,-191.467"/>
			<polygon fill="#000000" stroke="#000000" points="117460,-184.83 117455,-194.748 117456,-188.078 117452,-191.327 117452,-191.327 117452,-191.327 117456,-188.078 117449,-187.906 117460,-184.83 117460,-184.83"/>
			<text textAnchor="middle" x="117312" y="-209.8">Sg524</text>
			</g>
			<g id="edge1246" className="edge">
			<path d="M117362,-151.275C117382,-150.935 117406,-151.608 117428,-155 117433,-155.721 117437,-156.789 117442,-158.03"/>
			<polygon fill="#000000" stroke="#000000" points="117452,-160.954 117441,-162.443 117447,-159.54 117442,-158.126 117442,-158.126 117442,-158.126 117447,-159.54 117444,-153.81 117452,-160.954 117452,-160.954"/>
			<text textAnchor="middle" x="117404" y="-158.8">Ba96</text>
			</g>
			<g id="n758" className="node">
			<ellipse cx="117477" cy="-224" rx="28.6953" ry="18"/>
			<text textAnchor="middle" x="117477" y="-220.3">aer </text>
			</g>
			<g id="edge678" className="edge">
			<path d="M117345,-167.663C117373,-179.888 117415,-197.73 117444,-210.044"/>
			<polygon fill="#000000" stroke="#000000" points="117453,-213.992 117442,-214.181 117448,-212.019 117444,-210.046 117444,-210.046 117444,-210.046 117448,-212.019 117445,-205.911 117453,-213.992 117453,-213.992"/>
			<text textAnchor="middle" x="117404" y="-206.8">Go325</text>
			</g>
			<g id="n757" className="node">
			<ellipse cx="117477" cy="-116" rx="27" ry="18"/>
			<text textAnchor="middle" x="117477" y="-112.3">in </text>
			</g>
			<g id="edge403" className="edge">
			<path d="M117348,-141.337C117358,-137.977 117370,-134.574 117380,-132 117400,-127.175 117422,-123.368 117440,-120.679"/>
			<polygon fill="#000000" stroke="#000000" points="117450,-119.227 117441,-125.098 117445,-119.935 117440,-120.644 117440,-120.644 117440,-120.644 117445,-119.935 117440,-116.189 117450,-119.227 117450,-119.227"/>
			<text textAnchor="middle" x="117404" y="-135.8">Gr314</text>
			</g>
			<g id="n760" className="node">
			<ellipse cx="117636" cy="-116" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="117636" y="-112.3">area </text>
			</g>
			<g id="edge232" className="edge majority">
			<path strokeWidth="2.6" d="M117333,-137.474C117357,-117.878 117402,-86.324 117446,-74 117500,-58.9574 117564,-81.5201 117602,-98.9569"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="117611,-103.254 117600,-103.029 117606,-101.832 117602,-99.6871 117602,-98.9644 117603,-98.2417 117607,-100.386 117604,-94.8993 117611,-103.254 117611,-103.254"/>
			<text textAnchor="middle" x="117477" y="-77.8">majority</text>
			</g>
			<g id="n761" className="node">
			<ellipse cx="117807" cy="-170" rx="27" ry="18"/>
			<text textAnchor="middle" x="117807" y="-166.3">id </text>
			</g>
			<g id="edge442" className="edge">
			<path strokeWidth="1.2" d="M117506,-170C117565,-170 117703,-170 117770,-170"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="117780,-170 117770,-174.5 117775,-170.1 117770,-170.1 117770,-170 117770,-169.9 117775,-169.9 117770,-165.5 117780,-170 117780,-170"/>
			<text textAnchor="middle" x="117636" y="-173.8">Ba96, Sg524</text>
			</g>
			<g id="n762" className="node">
			<ellipse cx="117960" cy="-173" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="117960" y="-169.3">est </text>
			</g>
			<g id="edge991" className="edge">
			<path d="M117506,-224.796C117575,-226.177 117763,-226.049 117914,-191 117918,-189.966 117923,-188.56 117928,-186.987"/>
			<polygon fill="#000000" stroke="#000000" points="117937,-183.354 117929,-191.132 117932,-185.142 117928,-186.93 117928,-186.93 117928,-186.93 117932,-185.142 117926,-182.727 117937,-183.354 117937,-183.354"/>
			<text textAnchor="middle" x="117731" y="-223.8">Go325</text>
			</g>
			<g id="edge983" className="edge">
			<path d="M117504,-116C117528,-116 117563,-116 117591,-116"/>
			<polygon fill="#000000" stroke="#000000" points="117602,-116 117592,-120.5 117597,-116 117592,-116 117592,-116 117592,-116 117597,-116 117592,-111.5 117602,-116 117602,-116"/>
			<text textAnchor="middle" x="117549" y="-119.8">Gr314</text>
			</g>
			<g id="edge530" className="edge majority">
			<path strokeWidth="2.8" d="M117670,-119.109C117696,-122.354 117732,-128.756 117762,-141 117768,-143.557 117774,-147.036 117780,-150.697"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="117789,-156.494 117778,-154.643 117784,-154.449 117780,-151.657 117781,-150.91 117781,-150.163 117785,-152.955 117783,-147.177 117789,-156.494 117789,-156.494"/>
			<text textAnchor="middle" x="117731" y="-144.8">majority</text>
			</g>
			<g id="edge946" className="edge majority">
			<path strokeWidth="3.2" d="M117834,-170.523C117858,-171.003 117895,-171.72 117922,-172.259"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="117932,-172.463 117922,-176.764 117927,-173.464 117922,-173.364 117922,-172.264 117922,-171.165 117927,-171.264 117922,-167.765 117932,-172.463 117932,-172.463"/>
			<text textAnchor="middle" x="117883" y="-175.8">majority</text>
			</g>
			<g id="n763" className="node">
			<ellipse cx="118111" cy="-119" rx="27" ry="18"/>
			<text textAnchor="middle" x="118111" y="-115.3">in </text>
			</g>
			<g id="edge522" className="edge">
			<path d="M117979,-159.385C117987,-153.94 117997,-148.021 118006,-144 118028,-134.629 118054,-128.371 118075,-124.46"/>
			<polygon fill="#000000" stroke="#000000" points="118084,-122.675 118075,-128.878 118080,-123.562 118075,-124.449 118075,-124.449 118075,-124.449 118080,-123.562 118074,-120.02 118084,-122.675 118084,-122.675"/>
			<text textAnchor="middle" x="118030" y="-147.8">Gr314</text>
			</g>
			<g id="n764" className="node">
			<ellipse cx="118111" cy="-224" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="118111" y="-220.3">plebs </text>
			</g>
			<g id="edge599" className="edge">
			<path d="M117985,-181.194C118008,-189.018 118043,-200.958 118070,-210.242"/>
			<polygon fill="#000000" stroke="#000000" points="118079,-213.529 118068,-214.548 118075,-211.91 118070,-210.291 118070,-210.291 118070,-210.291 118075,-211.91 118071,-206.033 118079,-213.529 118079,-213.529"/>
			<text textAnchor="middle" x="118030" y="-207.8">Go325</text>
			</g>
			<g id="n765" className="node">
			<ellipse cx="118271" cy="-170" rx="38.9931" ry="18"/>
			<text textAnchor="middle" x="118271" y="-166.3">plebe </text>
			</g>
			<g id="edge729" className="edge majority">
			<path strokeWidth="3" d="M117988,-172.736C118041,-172.228 118156,-171.107 118222,-170.468"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="118232,-170.37 118222,-174.967 118227,-171.419 118222,-171.467 118222,-170.467 118222,-169.467 118227,-169.419 118222,-165.968 118232,-170.37 118232,-170.37"/>
			<text textAnchor="middle" x="118111" y="-174.8">majority</text>
			</g>
			<g id="edge323" className="edge">
			<path d="M118137,-123.737C118158,-128.011 118188,-135.004 118214,-144 118221,-146.44 118228,-149.445 118235,-152.535"/>
			<polygon fill="#000000" stroke="#000000" points="118244,-156.757 118233,-156.639 118240,-154.656 118235,-152.555 118235,-152.555 118235,-152.555 118240,-154.656 118237,-148.472 118244,-156.757 118244,-156.757"/>
			<text textAnchor="middle" x="118191" y="-147.8">Gr314</text>
			</g>
			<g id="n766" className="node">
			<ellipse cx="118470" cy="-170" rx="61.99" ry="18"/>
			<text textAnchor="middle" x="118470" y="-166.3">Iudeorum, </text>
			</g>
			<g id="edge596" className="edge">
			<path d="M118149,-220.651C118203,-215.522 118304,-204.643 118390,-189 118398,-187.61 118406,-185.944 118413,-184.183"/>
			<polygon fill="#000000" stroke="#000000" points="118423,-181.916 118415,-188.552 118418,-183.042 118413,-184.168 118413,-184.168 118413,-184.168 118418,-183.042 118412,-179.783 118423,-181.916 118423,-181.916"/>
			<text textAnchor="middle" x="118271" y="-214.8">Go325</text>
			</g>
			<g id="edge159" className="edge majority">
			<path strokeWidth="3.2" d="M118310,-170C118335,-170 118368,-170 118398,-170"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="118408,-170 118398,-174.5 118403,-171.1 118398,-171.1 118398,-170 118398,-168.9 118403,-168.9 118398,-165.5 118408,-170 118408,-170"/>
			<text textAnchor="middle" x="118359" y="-173.8">majority</text>
			</g>
			<g id="n767" className="node">
			<ellipse cx="118657" cy="-170" rx="27" ry="18"/>
			<text textAnchor="middle" x="118657" y="-166.3">de </text>
			</g>
			<g id="edge278" className="edge majority">
			<path strokeWidth="3.4" d="M118532,-170C118561,-170 118595,-170 118620,-170"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="118630,-170 118620,-174.5 118625,-171.2 118620,-171.2 118620,-170 118620,-168.8 118625,-168.8 118620,-165.5 118630,-170 118630,-170"/>
			<text textAnchor="middle" x="118581" y="-173.8">majority</text>
			</g>
			<g id="n768" className="node">
			<ellipse cx="118832" cy="-170" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="118832" y="-166.3">quorum </text>
			</g>
			<g id="edge1271" className="edge majority">
			<path strokeWidth="3.4" d="M118684,-170C118707,-170 118742,-170 118772,-170"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="118782,-170 118772,-174.5 118777,-171.2 118772,-171.2 118772,-170 118772,-168.8 118777,-168.8 118772,-165.5 118782,-170 118782,-170"/>
			<text textAnchor="middle" x="118733" y="-173.8">majority</text>
			</g>
			<g id="n769" className="node">
			<ellipse cx="119021" cy="-170" rx="40.8928" ry="18"/>
			<text textAnchor="middle" x="119021" y="-166.3">stirpe </text>
			</g>
			<g id="edge1048" className="edge majority">
			<path strokeWidth="3.4" d="M118882,-170C118909,-170 118943,-170 118970,-170"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.4" points="118980,-170 118970,-174.5 118975,-171.2 118970,-171.2 118970,-170 118970,-168.8 118975,-168.8 118970,-165.5 118980,-170 118980,-170"/>
			<text textAnchor="middle" x="118931" y="-173.8">majority</text>
			</g>
			<g id="n770" className="node">
			<ellipse cx="119206" cy="-119" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="119206" y="-115.3">nata </text>
			</g>
			<g id="edge555" className="edge majority">
			<path strokeWidth="3" d="M119049,-156.546C119058,-152.062 119069,-147.36 119080,-144 119107,-135.421 119138,-129.192 119162,-125.097"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="119172,-123.472 119163,-129.512 119168,-125.258 119163,-126.057 119163,-125.07 119162,-124.083 119167,-123.284 119162,-120.628 119172,-123.472 119172,-123.472"/>
			<text textAnchor="middle" x="119111" y="-147.8">majority</text>
			</g>
			<g id="n771" className="node">
			<ellipse cx="119383" cy="-119" rx="32.4942" ry="18"/>
			<text textAnchor="middle" x="119383" y="-115.3">fuit, </text>
			</g>
			<g id="edge74" className="edge">
			<path strokeWidth="1.2" d="M119062,-169.265C119122,-167.411 119237,-160.893 119332,-138 119337,-136.78 119342,-135.183 119347,-133.432"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="119357,-129.936 119349,-137.599 119352,-131.749 119348,-133.467 119348,-133.373 119348,-133.28 119352,-131.561 119346,-129.148 119357,-129.936 119357,-129.936"/>
			<text textAnchor="middle" x="119206" y="-166.8">Ba96, Sg524</text>
			</g>
			<g id="edge748" className="edge majority">
			<path strokeWidth="3" d="M119241,-119C119269,-119 119310,-119 119340,-119"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="119350,-119 119340,-123.5 119345,-120 119340,-120 119340,-119 119340,-118 119345,-118 119340,-114.5 119350,-119 119350,-119"/>
			<text textAnchor="middle" x="119301" y="-122.8">majority</text>
			</g>
			<g id="n772" className="node">
			<ellipse cx="119581" cy="-124" rx="37.0935" ry="18"/>
			<text textAnchor="middle" x="119581" y="-120.3">nata, </text>
			</g>
			<g id="edge155" className="edge">
			<path strokeWidth="1.2" d="M119415,-119.803C119447,-120.617 119497,-121.886 119534,-122.815"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="119544,-123.08 119534,-127.323 119539,-123.052 119534,-122.925 119534,-122.825 119534,-122.725 119539,-122.852 119534,-118.326 119544,-123.08 119544,-123.08"/>
			<text textAnchor="middle" x="119480" y="-125.8">Ba96, Sg524</text>
			</g>
			<g id="n774" className="node">
			<ellipse cx="119764" cy="-82" rx="63.8893" ry="18"/>
			<text textAnchor="middle" x="119764" y="-78.3">remanente </text>
			</g>
			<g id="edge141" className="edge majority">
			<path strokeWidth="3" d="M119412,-110.486C119444,-101.331 119497,-87.3662 119544,-82 119593,-76.4126 119648,-76.4829 119691,-77.9142"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="119701,-78.2825 119691,-82.4136 119696,-79.0989 119691,-78.9159 119691,-77.9166 119691,-76.9173 119696,-77.1002 119692,-73.4196 119701,-78.2825 119701,-78.2825"/>
			<text textAnchor="middle" x="119581" y="-85.8">majority</text>
			</g>
			<g id="n773" className="node">
			<ellipse cx="119764" cy="-144" rx="58.4896" ry="18"/>
			<text textAnchor="middle" x="119764" y="-140.3">remanent </text>
			</g>
			<g id="edge1058" className="edge">
			<path d="M119617,-127.904C119640,-130.444 119671,-133.833 119698,-136.846"/>
			<polygon fill="#000000" stroke="#000000" points="119709,-137.979 119698,-141.354 119704,-137.43 119699,-136.881 119699,-136.881 119699,-136.881 119704,-137.43 119699,-132.408 119709,-137.979 119709,-137.979"/>
			<text textAnchor="middle" x="119659" y="-137.8">Sg524</text>
			</g>
			<g id="edge834" className="edge">
			<path d="M119615,-116.101C119622,-114.403 119629,-112.629 119636,-111 119658,-105.806 119682,-100.218 119704,-95.3458"/>
			<polygon fill="#000000" stroke="#000000" points="119714,-93.0895 119705,-99.6943 119709,-94.1979 119704,-95.3062 119704,-95.3062 119704,-95.3062 119709,-94.1979 119703,-90.9182 119714,-93.0895 119714,-93.0895"/>
			<text textAnchor="middle" x="119659" y="-114.8">Ba96</text>
			</g>
			<g id="n775" className="node">
			<ellipse cx="119978" cy="-144" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="119978" y="-140.3">desicca, </text>
			</g>
			<g id="edge176" className="edge">
			<path d="M119823,-144C119851,-144 119886,-144 119916,-144"/>
			<polygon fill="#000000" stroke="#000000" points="119926,-144 119916,-148.5 119921,-144 119916,-144 119916,-144 119916,-144 119921,-144 119916,-139.5 119926,-144 119926,-144"/>
			<text textAnchor="middle" x="119877" y="-147.8">Sg524</text>
			</g>
			<g id="n776" className="node">
			<ellipse cx="119978" cy="-82" rx="40.0939" ry="18"/>
			<text textAnchor="middle" x="119978" y="-78.3">sicca, </text>
			</g>
			<g id="edge1330" className="edge majority">
			<path strokeWidth="3.2" d="M119828,-82C119860,-82 119898,-82 119927,-82"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="119937,-82 119927,-86.5001 119932,-83.1 119927,-83.1001 119927,-82.0001 119927,-80.9001 119932,-80.9 119927,-77.5001 119937,-82 119937,-82"/>
			<text textAnchor="middle" x="119877" y="-85.8">majority</text>
			</g>
			<g id="n778" className="node">
			<ellipse cx="120234" cy="-68" rx="27" ry="18"/>
			<text textAnchor="middle" x="120234" y="-64.3">id </text>
			</g>
			<g id="edge308" className="edge">
			<path strokeWidth="1.2" d="M120014,-74.0827C120025,-72.0106 120037,-70.0612 120048,-69 120099,-64.0639 120159,-64.929 120196,-66.2583"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="120207,-66.6604 120197,-70.7701 120202,-66.5668 120197,-66.3734 120197,-66.2735 120197,-66.1736 120202,-66.367 120197,-61.7768 120207,-66.6604 120207,-66.6604"/>
			<text textAnchor="middle" x="120115" y="-72.8">Mü22405, Wi3818</text>
			</g>
			<g id="n777" className="node">
			<ellipse cx="120234" cy="-122" rx="33.5952" ry="18"/>
			<text textAnchor="middle" x="120234" y="-118.3">quia </text>
			</g>
			<g id="edge35" className="edge majority">
			<path strokeWidth="2.8" d="M120018,-84.8839C120059,-88.3756 120125,-95.2936 120182,-107 120186,-107.874 120191,-108.928 120195,-110.068"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="120205,-112.837 120194,-114.491 120200,-112.364 120195,-111.023 120195,-110.156 120195,-109.289 120200,-110.63 120196,-105.821 120205,-112.837 120205,-112.837"/>
			<text textAnchor="middle" x="120115" y="-110.8">majority</text>
			</g>
			<g id="edge563" className="edge">
			<path d="M120029,-139.706C120076,-135.631 120146,-129.571 120190,-125.703"/>
			<polygon fill="#000000" stroke="#000000" points="120200,-124.817 120191,-130.163 120195,-125.249 120191,-125.68 120191,-125.68 120191,-125.68 120195,-125.249 120190,-121.197 120200,-124.817 120200,-124.817"/>
			<text textAnchor="middle" x="120115" y="-140.8">Sg524</text>
			</g>
			<g id="n779" className="node">
			<ellipse cx="120469" cy="-68" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="120469" y="-64.3">est </text>
			</g>
			<g id="edge225" className="edge">
			<path strokeWidth="1.2" d="M120261,-68C120303,-68 120383,-68 120431,-68"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="120441,-68 120431,-72.5001 120436,-68.1 120431,-68.1001 120431,-68.0001 120431,-67.9001 120436,-67.9 120431,-63.5001 120441,-68 120441,-68"/>
			<text textAnchor="middle" x="120353" y="-71.8">Mü22405, Wi3818</text>
			</g>
			<g id="n780" className="node">
			<ellipse cx="120697" cy="-110" rx="27" ry="18"/>
			<text textAnchor="middle" x="120697" y="-106.3">in </text>
			</g>
			<g id="edge1367" className="edge majority">
			<path strokeWidth="3" d="M120268,-121.147C120351,-118.97 120572,-113.222 120660,-110.947"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="120670,-110.681 120660,-115.44 120665,-111.811 120660,-111.941 120660,-110.941 120660,-109.941 120665,-109.811 120660,-106.443 120670,-110.681 120670,-110.681"/>
			<text textAnchor="middle" x="120469" y="-119.8">majority</text>
			</g>
			<g id="edge252" className="edge">
			<path strokeWidth="1.2" d="M120497,-69.7351C120533,-72.4902 120598,-79.0506 120652,-93 120656,-94.0592 120660,-95.3848 120665,-96.8259"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="120674,-100.327 120663,-101.069 120669,-98.6823 120665,-96.9439 120665,-96.8501 120665,-96.7563 120669,-98.4947 120666,-92.6308 120674,-100.327 120674,-100.327"/>
			<text textAnchor="middle" x="120585" y="-96.8">Mü22405, Wi3818</text>
			</g>
			<g id="n782" className="node">
			<ellipse cx="121076" cy="-141" rx="73.387" ry="18"/>
			<text textAnchor="middle" x="121076" y="-137.3">incredulitate </text>
			</g>
			<g id="edge198" className="edge majority">
			<path strokeWidth="2.6" d="M120724,-113.113C120730,-113.776 120736,-114.443 120742,-115 120828,-123.274 120927,-130.755 120995,-135.545"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="121005,-136.261 120995,-140.045 121000,-136.707 120995,-136.355 120995,-135.557 120995,-134.759 121000,-135.111 120995,-131.068 121005,-136.261 121005,-136.261"/>
			<text textAnchor="middle" x="120863" y="-137.8">majority</text>
			</g>
			<g id="n781" className="node">
			<ellipse cx="121076" cy="-87" rx="64.9885" ry="18"/>
			<text textAnchor="middle" x="121076" y="-83.3">credulitate </text>
			</g>
			<g id="edge711" className="edge">
			<path strokeWidth="1.6" d="M120723,-103.586C120729,-102.169 120736,-100.841 120742,-100 120830,-88.3327 120933,-86.0009 121001,-85.9933"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="121011,-86.0096 121001,-90.4935 121006,-86.3015 121001,-86.2935 121001,-85.9935 121001,-85.6935 121006,-85.7015 121001,-81.4935 121011,-86.0096 121011,-86.0096"/>
			<text textAnchor="middle" x="120863" y="-103.8">Go325, Kf133, Mü28315, Wi3818</text>
			</g>
			<g id="n783" className="node">
			<ellipse cx="121492" cy="-115" rx="63.8893" ry="18"/>
			<text textAnchor="middle" x="121492" y="-111.3">permansit. </text>
			</g>
			<g id="edge891" className="edge majority">
			<path strokeWidth="2.6" d="M121147,-136.589C121223,-131.827 121343,-124.28 121420,-119.487"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="121430,-118.859 121420,-123.977 121425,-119.971 121420,-120.284 121420,-119.486 121420,-118.687 121425,-118.374 121419,-114.995 121430,-118.859 121430,-118.859"/>
			<text textAnchor="middle" x="121289" y="-137.8">majority</text>
			</g>
			<g id="edge937" className="edge">
			<path strokeWidth="1.6" d="M121141,-87.243C121208,-88.0704 121317,-91.0279 121410,-101 121416,-101.658 121423,-102.493 121429,-103.428"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="121439,-104.968 121428,-107.886 121434,-104.5 121429,-103.736 121429,-103.439 121429,-103.143 121434,-103.907 121430,-98.9921 121439,-104.968 121439,-104.968"/>
			<text textAnchor="middle" x="121289" y="-104.8">Go325, Kf133, Mü28315, Wi3818</text>
			</g>
			<g id="n785" className="node">
			<ellipse cx="121758" cy="-69" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="121758" y="-65.3">Tercio </text>
			</g>
			<g id="edge1071" className="edge">
			<path d="M121528,-100.178C121542,-94.884 121559,-89.3953 121574,-86 121618,-76.3079 121668,-72.1332 121705,-70.3394"/>
			<polygon fill="#000000" stroke="#000000" points="121715,-69.894 121706,-74.8329 121710,-70.1157 121705,-70.3373 121705,-70.3373 121705,-70.3373 121710,-70.1157 121705,-65.8417 121715,-69.894 121715,-69.894"/>
			<text textAnchor="middle" x="121636" y="-89.8">Kr185</text>
			</g>
			<g id="n784" className="node">
			<ellipse cx="121758" cy="-161" rx="35.9954" ry="18"/>
			<text textAnchor="middle" x="121758" y="-157.3">Item </text>
			</g>
			<g id="edge572" className="edge">
			<path strokeWidth="1.2" d="M121547,-124.364C121596,-132.961 121668,-145.535 121714,-153.49"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="121724,-155.212 121713,-157.928 121719,-154.452 121714,-153.594 121714,-153.495 121714,-153.397 121719,-154.255 121715,-149.062 121724,-155.212 121724,-155.212"/>
			<text textAnchor="middle" x="121636" y="-152.8">Gr314, Mü11475</text>
			</g>
			<g id="n787" className="node">
			<ellipse cx="122182" cy="-161" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="122182" y="-157.3">Qualiter </text>
			</g>
			<g id="edge720" className="edge majority">
			<path strokeWidth="2.8" d="M121556,-114.52C121655,-114.37 121855,-116.566 122024,-134 122059,-137.578 122097,-144.158 122127,-149.926"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="122137,-151.846 122127,-154.362 122132,-151.779 122127,-150.828 122127,-149.945 122128,-149.061 122132,-150.012 122128,-145.527 122137,-151.846 122137,-151.846"/>
			<text textAnchor="middle" x="121853" y="-126.8">majority</text>
			</g>
			<g id="n823" className="node">
			<ellipse cx="129709" cy="-166" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="129709" y="-162.3">Nota </text>
			</g>
			<g id="edge306" className="edge">
			<path d="M121801,-69C121842,-69 121907,-69 121964,-69 121964,-69 121964,-69 129310,-69 129446,-69 129601,-123.323 129671,-150.664"/>
			<polygon fill="#000000" stroke="#000000" points="129681,-154.492 129670,-154.975 129676,-152.643 129671,-150.794 129671,-150.794 129671,-150.794 129676,-152.643 129673,-146.613 129681,-154.492 129681,-154.492"/>
			<text textAnchor="middle" x="124639" y="-72.8">Kr185</text>
			</g>
			<g id="n786" className="node">
			<ellipse cx="121965" cy="-161" rx="58.4896" ry="18"/>
			<text textAnchor="middle" x="121965" y="-157.3">sciendum </text>
			</g>
			<g id="edge940" className="edge">
			<path d="M121794,-161C121822,-161 121862,-161 121896,-161"/>
			<polygon fill="#000000" stroke="#000000" points="121906,-161 121896,-165.5 121901,-161 121896,-161 121896,-161 121896,-161 121901,-161 121896,-156.5 121906,-161 121906,-161"/>
			<text textAnchor="middle" x="121853" y="-164.8">Mü11475</text>
			</g>
			<g id="edge877" className="edge">
			<path d="M121787,-171.471C121797,-174.682 121808,-177.915 121818,-180 121946,-206.101 121983,-203.352 122112,-180 122119,-178.777 122126,-177.2 122133,-175.478"/>
			<polygon fill="#000000" stroke="#000000" points="122143,-172.877 122134,-179.762 122138,-174.143 122133,-175.409 122133,-175.409 122133,-175.409 122138,-174.143 122132,-171.056 122143,-172.877 122143,-172.877"/>
			<text textAnchor="middle" x="121965" y="-201.8">Gr314</text>
			</g>
			<g id="edge302" className="edge">
			<path d="M122024,-161C122053,-161 122089,-161 122119,-161"/>
			<polygon fill="#000000" stroke="#000000" points="122130,-161 122120,-165.5 122125,-161 122120,-161 122120,-161 122120,-161 122125,-161 122120,-156.5 122130,-161 122130,-161"/>
			<text textAnchor="middle" x="122077" y="-164.8">Mü11475</text>
			</g>
			<g id="n788" className="node">
			<ellipse cx="122369" cy="-182" rx="42.7926" ry="18"/>
			<text textAnchor="middle" x="122369" y="-178.3">autem </text>
			</g>
			<g id="edge195" className="edge">
			<path d="M122232,-166.518C122258,-169.5 122290,-173.181 122317,-176.205"/>
			<polygon fill="#000000" stroke="#000000" points="122327,-177.371 122317,-180.714 122322,-176.807 122317,-176.243 122317,-176.243 122317,-176.243 122322,-176.807 122318,-171.772 122327,-177.371 122327,-177.371"/>
			<text textAnchor="middle" x="122280" y="-177.8">Wi3818</text>
			</g>
			<g id="n789" className="node">
			<ellipse cx="122537" cy="-132" rx="32.4942" ry="18"/>
			<text textAnchor="middle" x="122537" y="-128.3">tres </text>
			</g>
			<g id="edge97" className="edge majority">
			<path strokeWidth="3" d="M122229,-152.975C122257,-148.405 122293,-143.007 122326,-140 122384,-134.642 122452,-132.856 122494,-132.271"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="122504,-132.146 122494,-136.768 122499,-133.207 122494,-133.268 122494,-132.268 122494,-131.268 122499,-131.207 122494,-127.768 122504,-132.146 122504,-132.146"/>
			<text textAnchor="middle" x="122369" y="-143.8">majority</text>
			</g>
			<g id="edge416" className="edge">
			<path d="M122404,-171.64C122432,-163.411 122470,-151.916 122498,-143.422"/>
			<polygon fill="#000000" stroke="#000000" points="122508,-140.44 122500,-147.633 122503,-141.882 122498,-143.324 122498,-143.324 122498,-143.324 122503,-141.882 122497,-139.015 122508,-140.44 122508,-140.44"/>
			<text textAnchor="middle" x="122458" y="-165.8">Wi3818</text>
			</g>
			<g id="n790" className="node">
			<ellipse cx="122705" cy="-132" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="122705" y="-128.3">magi </text>
			</g>
			<g id="edge837" className="edge majority">
			<path strokeWidth="3.2" d="M122570,-132C122595,-132 122630,-132 122658,-132"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="122668,-132 122658,-136.5 122663,-133.1 122658,-133.1 122658,-132 122658,-130.9 122663,-130.9 122658,-127.5 122668,-132 122668,-132"/>
			<text textAnchor="middle" x="122619" y="-135.8">majority</text>
			</g>
			<g id="n791" className="node">
			<ellipse cx="122890" cy="-176" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="122890" y="-172.3">Marie </text>
			</g>
			<g id="edge1313" className="edge majority">
			<path strokeWidth="2.8" d="M122738,-139.765C122767,-146.785 122811,-157.195 122843,-165.058"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="122853,-167.41 122842,-169.447 122848,-167.116 122843,-165.947 122844,-165.072 122844,-164.197 122849,-165.366 122845,-160.697 122853,-167.41 122853,-167.41"/>
			<text textAnchor="middle" x="122791" y="-162.8">majority</text>
			</g>
			<g id="n792" className="node">
			<ellipse cx="123088" cy="-172" rx="49.2915" ry="18"/>
			<text textAnchor="middle" x="123088" y="-168.3">munera </text>
			</g>
			<g id="edge170" className="edge">
			<path strokeWidth="1.2" d="M122741,-129.626C122787,-127.158 122870,-124.81 122940,-134 122974,-138.535 123012,-148.489 123041,-157.072"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="123051,-160.04 123040,-161.433 123046,-158.68 123041,-157.224 123041,-157.128 123041,-157.033 123046,-158.489 123043,-152.823 123051,-160.04 123051,-160.04"/>
			<text textAnchor="middle" x="122890" y="-137.8">Go325, Kr299</text>
			</g>
			<g id="edge167" className="edge majority">
			<path strokeWidth="2.8" d="M122932,-175.171C122960,-174.602 122997,-173.837 123028,-173.201"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="123038,-172.99 123029,-177.694 123033,-173.992 123028,-174.094 123028,-173.194 123028,-172.295 123033,-172.193 123028,-168.695 123038,-172.99 123038,-172.99"/>
			<text textAnchor="middle" x="122989" y="-177.8">majority</text>
			</g>
			<g id="n793" className="node">
			<ellipse cx="123299" cy="-115" rx="63.0888" ry="18"/>
			<text textAnchor="middle" x="123299" y="-111.3">optulerunt </text>
			</g>
			<g id="edge419" className="edge">
			<path d="M123125,-160.188C123135,-157.087 123146,-153.824 123156,-151 123184,-143.199 123214,-135.298 123240,-128.894"/>
			<polygon fill="#000000" stroke="#000000" points="123250,-126.426 123242,-133.189 123245,-127.623 123240,-128.819 123240,-128.819 123240,-128.819 123245,-127.623 123239,-124.45 123250,-126.426 123250,-126.426"/>
			<text textAnchor="middle" x="123187" y="-154.8">Gr314</text>
			</g>
			<g id="n796" className="node">
			<ellipse cx="123299" cy="-277" rx="62.2891" ry="18"/>
			<text textAnchor="middle" x="123299" y="-273.3">obtulerent </text>
			</g>
			<g id="edge516" className="edge">
			<path d="M123108,-188.749C123121,-199.556 123139,-213.346 123156,-223 123184,-238.626 123218,-251.624 123245,-260.949"/>
			<polygon fill="#000000" stroke="#000000" points="123255,-264.217 123244,-265.326 123250,-262.636 123245,-261.056 123245,-261.056 123245,-261.056 123250,-262.636 123247,-256.787 123255,-264.217 123255,-264.217"/>
			<text textAnchor="middle" x="123187" y="-253.8">Wi3818</text>
			</g>
			<g id="n795" className="node">
			<ellipse cx="123299" cy="-223" rx="63.0888" ry="18"/>
			<text textAnchor="middle" x="123299" y="-219.3">obtulerunt </text>
			</g>
			<g id="edge215" className="edge majority">
			<path strokeWidth="2.6" d="M123128,-182.695C123137,-185.155 123147,-187.718 123156,-190 123183,-196.813 123213,-203.909 123239,-209.768"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="123249,-212.033 123238,-214.194 123244,-211.699 123239,-210.586 123239,-209.807 123239,-209.027 123244,-210.14 123240,-205.419 123249,-212.033 123249,-212.033"/>
			<text textAnchor="middle" x="123187" y="-207.8">majority</text>
			</g>
			<g id="n794" className="node">
			<ellipse cx="123299" cy="-169" rx="63.0888" ry="18"/>
			<text textAnchor="middle" x="123299" y="-165.3">obtulerint, </text>
			</g>
			<g id="edge239" className="edge">
			<path d="M123137,-171.304C123164,-170.928 123197,-170.456 123226,-170.037"/>
			<polygon fill="#000000" stroke="#000000" points="123236,-169.891 123226,-174.535 123231,-169.963 123226,-170.035 123226,-170.035 123226,-170.035 123231,-169.963 123226,-165.536 123236,-169.891 123236,-169.891"/>
			<text textAnchor="middle" x="123187" y="-174.8">Kf133</text>
			</g>
			<g id="n797" className="node">
			<ellipse cx="123506" cy="-194" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="123506" y="-190.3">dictum </text>
			</g>
			<g id="edge1025" className="edge">
			<path d="M123349,-125.884C123377,-132.841 123412,-143.004 123442,-156 123453,-160.698 123464,-166.919 123474,-172.964"/>
			<polygon fill="#000000" stroke="#000000" points="123482,-178.417 123472,-176.898 123478,-175.753 123474,-173.09 123474,-173.09 123474,-173.09 123478,-175.753 123476,-169.282 123482,-178.417 123482,-178.417"/>
			<text textAnchor="middle" x="123411" y="-159.8">Gr314</text>
			</g>
			<g id="edge9" className="edge">
			<path d="M123345,-264.711C123373,-256.292 123410,-244.117 123442,-230 123452,-225.491 123463,-219.833 123472,-214.348"/>
			<polygon fill="#000000" stroke="#000000" points="123481,-209.185 123475,-218.129 123477,-211.717 123472,-214.249 123472,-214.249 123472,-214.249 123477,-211.717 123470,-210.369 123481,-209.185 123481,-209.185"/>
			<text textAnchor="middle" x="123411" y="-256.8">Wi3818</text>
			</g>
			<g id="edge1265" className="edge majority">
			<path strokeWidth="2.6" d="M123356,-215.114C123386,-210.868 123423,-205.659 123452,-201.477"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="123462,-200.044 123453,-205.901 123457,-201.537 123452,-202.237 123452,-201.445 123452,-200.653 123457,-199.953 123452,-196.99 123462,-200.044 123462,-200.044"/>
			<text textAnchor="middle" x="123411" y="-214.8">majority</text>
			</g>
			<g id="edge582" className="edge">
			<path d="M123361,-173.247C123386,-175.353 123415,-178.258 123442,-182 123446,-182.585 123450,-183.257 123455,-183.979"/>
			<polygon fill="#000000" stroke="#000000" points="123465,-185.735 123454,-188.439 123460,-184.871 123455,-184.006 123455,-184.006 123455,-184.006 123460,-184.871 123456,-179.574 123465,-185.735 123465,-185.735"/>
			<text textAnchor="middle" x="123411" y="-185.8">Kf133</text>
			</g>
			<g id="n798" className="node">
			<ellipse cx="123678" cy="-194" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="123678" y="-190.3">est </text>
			</g>
			<g id="edge244" className="edge majority">
			<path strokeWidth="3.2" d="M123553,-194C123580,-194 123614,-194 123640,-194"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="123650,-194 123640,-198.5 123645,-195.1 123640,-195.1 123640,-194 123640,-192.9 123645,-192.9 123640,-189.5 123650,-194 123650,-194"/>
			<text textAnchor="middle" x="123601" y="-197.8">majority</text>
			</g>
			<g id="n799" className="node">
			<ellipse cx="123829" cy="-215" rx="37.8943" ry="18"/>
			<text textAnchor="middle" x="123829" y="-211.3">prius </text>
			</g>
			<g id="edge580" className="edge">
			<path d="M123706,-197.754C123727,-200.761 123757,-205.048 123783,-208.596"/>
			<polygon fill="#000000" stroke="#000000" points="123793,-210.015 123782,-213.075 123788,-209.317 123783,-208.619 123783,-208.619 123783,-208.619 123788,-209.317 123783,-204.163 123793,-210.015 123793,-210.015"/>
			<text textAnchor="middle" x="123747" y="-209.8">Kf133</text>
			</g>
			<g id="n800" className="node">
			<ellipse cx="123829" cy="-161" rx="40.0939" ry="18"/>
			<text textAnchor="middle" x="123829" y="-157.3">supra </text>
			</g>
			<g id="edge253" className="edge">
			<path d="M123704,-186.44C123710,-184.542 123717,-182.595 123724,-181 123742,-176.566 123763,-172.454 123781,-169.126"/>
			<polygon fill="#000000" stroke="#000000" points="123791,-167.311 123782,-173.539 123786,-168.212 123781,-169.112 123781,-169.112 123781,-169.112 123786,-168.212 123780,-164.686 123791,-167.311 123791,-167.311"/>
			<text textAnchor="middle" x="123747" y="-184.8">Gr314</text>
			</g>
			<g id="n801" className="node">
			<ellipse cx="123979" cy="-265" rx="27" ry="18"/>
			<text textAnchor="middle" x="123979" y="-261.3">in </text>
			</g>
			<g id="edge1340" className="edge majority">
			<path strokeWidth="2.4" d="M123696,-207.858C123704,-213.835 123714,-220.477 123724,-225 123796,-258.2 123891,-264.576 123942,-265.375"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="123952,-265.468 123942,-269.876 123947,-266.122 123942,-266.076 123942,-265.376 123942,-264.677 123947,-264.722 123942,-260.877 123952,-265.468 123952,-265.468"/>
			<text textAnchor="middle" x="123829" y="-263.8">majority</text>
			</g>
			<g id="n822" className="node">
			<ellipse cx="129309" cy="-154" rx="50.8918" ry="18"/>
			<text textAnchor="middle" x="129309" y="-150.3">Vlterius </text>
			</g>
			<g id="edge784" className="edge">
			<path strokeWidth="1.2" d="M123695,-179.141C123720,-156.256 123774,-115 123828,-115 123828,-115 123828,-115 128920,-115 129039,-115 129177,-133.378 129253,-144.902"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="129263,-146.48 129252,-149.394 129258,-145.813 129253,-145.046 129253,-144.947 129253,-144.849 129258,-145.615 129254,-140.501 129263,-146.48 129263,-146.48"/>
			<text textAnchor="middle" x="126082" y="-118.8">Ba96, Sg524</text>
			</g>
			<g id="edge629" className="edge">
			<path d="M123865,-220.854C123885,-224.918 123912,-231.197 123934,-240 123939,-242.099 123945,-244.743 123950,-247.521"/>
			<polygon fill="#000000" stroke="#000000" points="123959,-252.577 123948,-251.568 123955,-250.114 123950,-247.652 123950,-247.652 123950,-247.652 123955,-250.114 123952,-243.735 123959,-252.577 123959,-252.577"/>
			<text textAnchor="middle" x="123911" y="-243.8">Kf133</text>
			</g>
			<g id="n802" className="node">
			<ellipse cx="123979" cy="-163" rx="27" ry="18"/>
			<text textAnchor="middle" x="123979" y="-159.3">ibi </text>
			</g>
			<g id="edge512" className="edge">
			<path d="M123870,-161.536C123892,-161.838 123920,-162.213 123942,-162.508"/>
			<polygon fill="#000000" stroke="#000000" points="123952,-162.646 123942,-167.01 123947,-162.578 123942,-162.51 123942,-162.51 123942,-162.51 123947,-162.578 123942,-158.011 123952,-162.646 123952,-162.646"/>
			<text textAnchor="middle" x="123911" y="-165.8">Gr314</text>
			</g>
			<g id="n806" className="node">
			<ellipse cx="125067" cy="-265" rx="38.9931" ry="18"/>
			<text textAnchor="middle" x="125067" y="-261.3">Festa </text>
			</g>
			<g id="edge468" className="edge">
			<path d="M124006,-162.139C124107,-159.198 124484,-152.02 124790,-196 124875,-208.188 124971,-235.503 125025,-251.873"/>
			<polygon fill="#000000" stroke="#000000" points="125035,-254.895 125024,-256.247 125030,-253.421 125025,-251.947 125025,-251.947 125025,-251.947 125030,-253.421 125026,-247.647 125035,-254.895 125035,-254.895"/>
			<text textAnchor="middle" x="124639" y="-199.8">Gr314</text>
			</g>
			<g id="n804" className="node">
			<ellipse cx="124407" cy="-265" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="124407" y="-261.3">ista </text>
			</g>
			<g id="edge1268" className="edge">
			<path strokeWidth="1.8" d="M124006,-265C124078,-265 124280,-265 124366,-265"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="124376,-265 124366,-269.5 124371,-265.4 124366,-265.4 124366,-265 124366,-264.6 124371,-264.6 124366,-260.5 124376,-265 124376,-265"/>
			<text textAnchor="middle" x="124175" y="-268.8">Er16, Kf133, Mü28315, MüU151, Wi3818</text>
			</g>
			<g id="n803" className="node">
			<ellipse cx="124407" cy="-211" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="124407" y="-207.3">illa </text>
			</g>
			<g id="edge272" className="edge">
			<path strokeWidth="1.2" d="M124001,-254.323C124008,-251.137 124016,-247.972 124024,-246 124147,-214.626 124299,-210.576 124368,-210.549"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="124379,-210.575 124369,-215.05 124374,-210.663 124369,-210.65 124369,-210.55 124369,-210.45 124374,-210.463 124369,-206.05 124379,-210.575 124379,-210.575"/>
			<text textAnchor="middle" x="124175" y="-249.8">Kr299, Mü22405</text>
			</g>
			<g id="n805" className="node">
			<ellipse cx="124869" cy="-265" rx="60.3893" ry="18"/>
			<text textAnchor="middle" x="124869" y="-261.3">sequencia </text>
			</g>
			<g id="edge1012" className="edge">
			<path strokeWidth="1.2" d="M124001,-275.979C124008,-279.185 124016,-282.286 124024,-284 124163,-314.535 124202,-290.222 124344,-292 124542,-294.478 124593,-310.087 124790,-284 124798,-282.931 124806,-281.363 124815,-279.58"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="124825,-277.316 124816,-283.936 124820,-278.531 124815,-279.647 124815,-279.55 124815,-279.452 124820,-278.336 124814,-275.163 124825,-277.316 124825,-277.316"/>
			<text textAnchor="middle" x="124407" y="-298.8">Go325, Mü11475</text>
			</g>
			<g id="edge752" className="edge">
			<path strokeWidth="1.8" d="M124438,-265C124510,-265 124696,-265 124798,-265"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="124809,-265 124799,-269.5 124804,-265.4 124799,-265.4 124799,-265 124799,-264.6 124804,-264.6 124799,-260.5 124809,-265 124809,-265"/>
			<text textAnchor="middle" x="124639" y="-268.8">Er16, Kf133, Mü28315, MüU151, Wi3818</text>
			</g>
			<g id="edge102" className="edge">
			<path strokeWidth="1.2" d="M124435,-212.105C124498,-214.967 124658,-223.993 124790,-246 124798,-247.289 124806,-248.929 124814,-250.703"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="124824,-253.006 124813,-255.128 124819,-251.973 124814,-250.842 124814,-250.744 124814,-250.647 124819,-251.778 124815,-246.361 124824,-253.006 124824,-253.006"/>
			<text textAnchor="middle" x="124639" y="-249.8">Kr299, Mü22405</text>
			</g>
			<g id="edge85" className="edge majority">
			<path strokeWidth="2.6" d="M124930,-265C124958,-265 124991,-265 125018,-265"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="125028,-265 125018,-269.5 125023,-265.8 125018,-265.8 125018,-265 125018,-264.2 125023,-264.2 125018,-260.5 125028,-265 125028,-265"/>
			<text textAnchor="middle" x="124979" y="-268.8">majority</text>
			</g>
			<g id="n807" className="node">
			<ellipse cx="125253" cy="-302" rx="48.9926" ry="18"/>
			<text textAnchor="middle" x="125253" y="-298.3">Christi. </text>
			</g>
			<g id="edge590" className="edge majority">
			<path strokeWidth="2.8" d="M125103,-272.047C125130,-277.528 125169,-285.222 125199,-291.439"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="125210,-293.486 125199,-295.926 125205,-293.382 125200,-292.397 125200,-291.514 125200,-290.632 125205,-291.618 125201,-287.103 125210,-293.486 125210,-293.486"/>
			<text textAnchor="middle" x="125155" y="-290.8">majority</text>
			</g>
			<g id="n808" className="node">
			<ellipse cx="125848" cy="-265" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="125848" y="-261.3">Qualiter </text>
			</g>
			<g id="edge194" className="edge">
			<path strokeWidth="2.2" d="M125291,-290.882C125301,-288.541 125311,-286.368 125320,-285 125487,-260.561 125688,-260.977 125786,-263.104"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="125796,-263.335 125786,-267.604 125791,-263.82 125786,-263.705 125786,-263.105 125786,-262.505 125791,-262.62 125786,-258.606 125796,-263.335 125796,-263.335"/>
			<text textAnchor="middle" x="125549" y="-288.8">Er16, Kf133, Mü11475, Mü22405, Mü28315, MüU151, Wi3818</text>
			</g>
			<g id="n809" className="node">
			<ellipse cx="125848" cy="-319" rx="27" ry="18"/>
			<text textAnchor="middle" x="125848" y="-315.3">et </text>
			</g>
			<g id="edge872" className="edge">
			<path strokeWidth="1.2" d="M125302,-303.37C125417,-306.674 125708,-315.026 125811,-317.961"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="125821,-318.252 125811,-322.463 125816,-318.208 125811,-318.065 125811,-317.965 125811,-317.865 125816,-318.008 125811,-313.467 125821,-318.252 125821,-318.252"/>
			<text textAnchor="middle" x="125549" y="-319.8">Gr314, Kr299</text>
			</g>
			<g id="n810" className="node">
			<ellipse cx="125848" cy="-392" rx="35.9954" ry="18"/>
			<text textAnchor="middle" x="125848" y="-388.3">Item </text>
			</g>
			<g id="edge659" className="edge">
			<path d="M125279,-317.226C125291,-323.767 125306,-330.848 125320,-335 125493,-385.757 125709,-392.221 125802,-392.45"/>
			<polygon fill="#000000" stroke="#000000" points="125812,-392.451 125802,-396.95 125807,-392.451 125802,-392.45 125802,-392.45 125802,-392.45 125807,-392.451 125802,-387.95 125812,-392.451 125812,-392.451"/>
			<text textAnchor="middle" x="125549" y="-395.8">Go325</text>
			</g>
			<g id="n815" className="node">
			<ellipse cx="126884" cy="-265" rx="53.8905" ry="18"/>
			<text textAnchor="middle" x="126884" y="-261.3">Christus </text>
			</g>
			<g id="edge495" className="edge">
			<path strokeWidth="2.2" d="M125900,-265C126073,-265 126631,-265 126820,-265"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="126830,-265 126820,-269.5 126825,-265.6 126820,-265.6 126820,-265 126820,-264.4 126825,-264.4 126820,-260.5 126830,-265 126830,-265"/>
			<text textAnchor="middle" x="126375" y="-268.8">Er16, Kf133, Mü11475, Mü22405, Mü28315, MüU151, Wi3818</text>
			</g>
			<g id="n811" className="node">
			<ellipse cx="126082" cy="-319" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="126082" y="-315.3">cetera. </text>
			</g>
			<g id="edge604" className="edge">
			<path strokeWidth="1.2" d="M125875,-319C125911,-319 125978,-319 126026,-319"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="126036,-319 126026,-323.5 126031,-319.1 126026,-319.1 126026,-319 126026,-318.9 126031,-318.9 126026,-314.5 126036,-319 126036,-319"/>
			<text textAnchor="middle" x="125968" y="-322.8">Gr314, Kr299</text>
			</g>
			<g id="n812" className="node">
			<ellipse cx="126082" cy="-406" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="126082" y="-402.3">Nota </text>
			</g>
			<g id="edge609" className="edge">
			<path d="M125884,-394.096C125924,-396.532 125991,-400.561 126035,-403.248"/>
			<polygon fill="#000000" stroke="#000000" points="126046,-403.867 126035,-407.756 126041,-403.566 126036,-403.264 126036,-403.264 126036,-403.264 126041,-403.566 126036,-398.772 126046,-403.867 126046,-403.867"/>
			<text textAnchor="middle" x="125968" y="-404.8">Go325</text>
			</g>
			<g id="n903" className="node">
			<ellipse cx="143536" cy="-270" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="143536" y="-266.3">Maria </text>
			</g>
			<g id="edge304" className="edge">
			<path d="M126119,-406.502C126212,-407.77 126469,-411 126684,-411 126684,-411 126684,-411 143088,-411 143261,-411 143332,-484.172 143476,-389 143507,-368.494 143522,-326.551 143530,-298.348"/>
			<polygon fill="#000000" stroke="#000000" points="143532,-288.285 143534,-299.043 143531,-293.155 143530,-298.026 143530,-298.026 143530,-298.026 143531,-293.155 143525,-297.009 143532,-288.285 143532,-288.285"/>
			<text textAnchor="middle" x="135927" y="-414.8">Go325</text>
			</g>
			<g id="n813" className="node">
			<ellipse cx="126685" cy="-311" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="126685" y="-307.3">Qualier </text>
			</g>
			<g id="edge356" className="edge">
			<path d="M126128,-318.399C126236,-316.965 126508,-313.348 126627,-311.764"/>
			<polygon fill="#000000" stroke="#000000" points="126637,-311.63 126627,-316.263 126632,-311.697 126627,-311.764 126627,-311.764 126627,-311.764 126632,-311.697 126627,-307.264 126637,-311.63 126637,-311.63"/>
			<text textAnchor="middle" x="126375" y="-321.8">Kr299</text>
			</g>
			<g id="n814" className="node">
			<ellipse cx="126685" cy="-365" rx="63.0888" ry="18"/>
			<text textAnchor="middle" x="126685" y="-361.3">Notandum </text>
			</g>
			<g id="edge747" className="edge">
			<path d="M126118,-330.424C126127,-333.01 126137,-335.448 126146,-337 126311,-364.492 126508,-367.24 126612,-366.397"/>
			<polygon fill="#000000" stroke="#000000" points="126622,-366.302 126612,-370.897 126617,-366.349 126612,-366.397 126612,-366.397 126612,-366.397 126617,-366.349 126612,-361.897 126622,-366.302 126622,-366.302"/>
			<text textAnchor="middle" x="126375" y="-369.8">Gr314</text>
			</g>
			<g id="edge240" className="edge">
			<path d="M126726,-301.58C126756,-294.625 126797,-285.087 126829,-277.495"/>
			<polygon fill="#000000" stroke="#000000" points="126839,-275.206 126831,-281.862 126834,-276.343 126830,-277.48 126830,-277.48 126830,-277.48 126834,-276.343 126829,-273.098 126839,-275.206 126839,-275.206"/>
			<text textAnchor="middle" x="126789" y="-295.8">Kr299</text>
			</g>
			<g id="n828" className="node">
			<ellipse cx="130675" cy="-332" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="130675" y="-328.3">quod </text>
			</g>
			<g id="edge290" className="edge">
			<path d="M126748,-366.43C126787,-367.202 126838,-368 126883,-368 126883,-368 126883,-368 130510,-368 130554,-368 130603,-355.643 130635,-345.408"/>
			<polygon fill="#000000" stroke="#000000" points="130645,-342.316 130637,-349.646 130640,-343.838 130636,-345.359 130636,-345.359 130636,-345.359 130640,-343.838 130634,-341.073 130645,-342.316 130645,-342.316"/>
			<text textAnchor="middle" x="128919" y="-371.8">Gr314</text>
			</g>
			<g id="n816" className="node">
			<ellipse cx="127063" cy="-265" rx="27" ry="18"/>
			<text textAnchor="middle" x="127063" y="-261.3">sol </text>
			</g>
			<g id="edge277" className="edge majority">
			<path strokeWidth="2.4" d="M126938,-265C126966,-265 127000,-265 127025,-265"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="127036,-265 127026,-269.5 127031,-265.7 127026,-265.7 127026,-265 127026,-264.3 127031,-264.3 127026,-260.5 127036,-265 127036,-265"/>
			<text textAnchor="middle" x="126987" y="-268.8">majority</text>
			</g>
			<g id="n817" className="node">
			<ellipse cx="127236" cy="-265" rx="47.3916" ry="18"/>
			<text textAnchor="middle" x="127236" y="-261.3">dicatur </text>
			</g>
			<g id="edge1166" className="edge majority">
			<path strokeWidth="2.4" d="M127090,-265C127114,-265 127148,-265 127178,-265"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="127188,-265 127178,-269.5 127183,-265.7 127178,-265.7 127178,-265 127178,-264.3 127183,-264.3 127178,-260.5 127188,-265 127188,-265"/>
			<text textAnchor="middle" x="127139" y="-268.8">majority</text>
			</g>
			<g id="n818" className="node">
			<ellipse cx="127789" cy="-267" rx="35.194" ry="18"/>
			<text textAnchor="middle" x="127789" y="-263.3">sepe </text>
			</g>
			<g id="edge466" className="edge">
			<path strokeWidth="2.2" d="M127284,-265.169C127388,-265.549 127641,-266.468 127744,-266.84"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="127754,-266.876 127744,-271.34 127749,-267.458 127744,-267.44 127744,-266.84 127744,-266.24 127749,-266.258 127744,-262.34 127754,-266.876 127754,-266.876"/>
			<text textAnchor="middle" x="127519" y="-269.8">Er16, Kf133, Kr299, Mü11475, Mü28315, MüU151, Wi3818</text>
			</g>
			<g id="n819" className="node">
			<ellipse cx="128340" cy="-219" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="128340" y="-215.3">dictum </text>
			</g>
			<g id="edge406" className="edge">
			<path d="M127282,-260.475C127372,-251.719 127579,-232.646 127754,-225 127948,-216.489 128180,-217.359 128284,-218.334"/>
			<polygon fill="#000000" stroke="#000000" points="128294,-218.434 128284,-222.836 128289,-218.385 128284,-218.336 128284,-218.336 128284,-218.336 128289,-218.385 128284,-213.836 128294,-218.434 128294,-218.434"/>
			<text textAnchor="middle" x="127789" y="-228.8">Mü22405</text>
			</g>
			<g id="edge1039" className="edge">
			<path strokeWidth="2.2" d="M127824,-265.547C127903,-261.906 128107,-251.134 128276,-230 128280,-229.51 128284,-228.944 128288,-228.333"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="128298,-226.737 128289,-232.748 128293,-228.113 128288,-228.896 128288,-228.304 128288,-227.711 128293,-226.928 128287,-223.859 128298,-226.737 128298,-226.737"/>
			<text textAnchor="middle" x="128059" y="-267.8">Er16, Kf133, Kr299, Mü11475, Mü28315, MüU151, Wi3818</text>
			</g>
			<g id="n820" className="node">
			<ellipse cx="128919" cy="-220" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="128919" y="-216.3">est. </text>
			</g>
			<g id="edge439" className="edge">
			<path strokeWidth="2.2" d="M128386,-219.078C128496,-219.269 128774,-219.751 128878,-219.931"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="128888,-219.948 128878,-224.431 128883,-220.54 128878,-220.531 128878,-219.931 128878,-219.331 128883,-219.34 128878,-215.431 128888,-219.948 128888,-219.948"/>
			<text textAnchor="middle" x="128637" y="-222.8">Kf133, Kr299, Mü11475, Mü22405, Mü28315, MüU151, Wi3818</text>
			</g>
			<g id="edge549" className="edge">
			<path d="M128385,-215.191C128488,-206.49 128749,-184.838 128968,-171 129066,-164.788 129180,-159.467 129248,-156.505"/>
			<polygon fill="#000000" stroke="#000000" points="129258,-156.067 129249,-160.997 129253,-156.284 129248,-156.501 129248,-156.501 129248,-156.501 129253,-156.284 129248,-152.005 129258,-156.067 129258,-156.067"/>
			<text textAnchor="middle" x="128919" y="-178.8">Er16</text>
			</g>
			<g id="n821" className="node">
			<ellipse cx="129309" cy="-322" rx="63.0888" ry="18"/>
			<text textAnchor="middle" x="129309" y="-318.3">Notandum </text>
			</g>
			<g id="edge435" className="edge">
			<path d="M128928,-237.311C128936,-252.623 128949,-274.167 128968,-285 129052,-333.498 129168,-335.055 129240,-329.903"/>
			<polygon fill="#000000" stroke="#000000" points="129251,-329.098 129241,-334.36 129246,-329.486 129241,-329.873 129241,-329.873 129241,-329.873 129246,-329.486 129240,-325.387 129251,-329.098 129251,-329.098"/>
			<text textAnchor="middle" x="129098" y="-334.8">Mü22405</text>
			</g>
			<g id="edge1126" className="edge">
			<path strokeWidth="1.6" d="M128939,-206.011C128947,-200.361 128958,-194.387 128968,-191 129078,-154.965 129113,-183.123 129228,-168 129236,-166.89 129245,-165.525 129254,-164.087"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="129264,-162.376 129255,-168.49 129259,-163.511 129254,-164.35 129254,-164.054 129254,-163.758 129259,-162.919 129253,-159.618 129264,-162.376 129264,-162.376"/>
			<text textAnchor="middle" x="129098" y="-194.8">Kr299, Mü28315, MüU151, Wi3818</text>
			</g>
			<g id="edge1044" className="edge">
			<path d="M128950,-221.228C129067,-225.815 129500,-239.996 129632,-206 129648,-201.861 129665,-193.758 129678,-185.922"/>
			<polygon fill="#000000" stroke="#000000" points="129687,-180.592 129681,-189.618 129683,-183.18 129678,-185.768 129678,-185.768 129678,-185.768 129683,-183.18 129676,-181.918 129687,-180.592 129687,-180.592"/>
			<text textAnchor="middle" x="129309" y="-231.8">Kf133</text>
			</g>
			<g id="n824" className="node">
			<ellipse cx="129709" cy="-250" rx="58.4896" ry="18"/>
			<text textAnchor="middle" x="129709" y="-246.3">sciendum </text>
			</g>
			<g id="edge848" className="edge">
			<path d="M128946,-228.892C128953,-230.957 128961,-232.878 128968,-234 129214,-271.825 129511,-261.609 129641,-254.367"/>
			<polygon fill="#000000" stroke="#000000" points="129651,-253.786 129642,-258.846 129646,-254.07 129641,-254.354 129641,-254.354 129641,-254.354 129646,-254.07 129641,-249.861 129651,-253.786 129651,-253.786"/>
			<text textAnchor="middle" x="129309" y="-264.8">Mü11475</text>
			</g>
			<g id="n826" className="node">
			<ellipse cx="130353" cy="-241" rx="27" ry="18"/>
			<text textAnchor="middle" x="130353" y="-237.3">de </text>
			</g>
			<g id="edge1061" className="edge">
			<path d="M129370,-326.222C129517,-335.22 129904,-351.362 130220,-298 130260,-291.169 130271,-287.682 130308,-270 130314,-267.155 130320,-263.608 130326,-259.982"/>
			<polygon fill="#000000" stroke="#000000" points="130334,-254.308 130328,-263.599 130330,-257.081 130326,-259.855 130326,-259.855 130326,-259.855 130330,-257.081 130323,-256.111 130334,-254.308 130334,-254.308"/>
			<text textAnchor="middle" x="129821" y="-337.8">Mü22405</text>
			</g>
			<g id="edge1226" className="edge">
			<path strokeWidth="1.6" d="M129359,-151.172C129422,-148.151 129536,-144.818 129632,-153 129643,-153.918 129654,-155.559 129665,-157.373"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="129675,-159.146 129665,-161.839 129670,-158.572 129665,-157.703 129665,-157.407 129665,-157.112 129670,-157.981 129666,-152.976 129675,-159.146 129675,-159.146"/>
			<text textAnchor="middle" x="129511" y="-156.8">Ba96, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="edge1205" className="edge">
			<path strokeWidth="1.2" d="M129351,-164.002C129423,-181.364 129572,-217.087 129652,-236.583"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="129662,-238.993 129652,-241.022 129657,-237.917 129653,-236.745 129653,-236.648 129653,-236.55 129658,-237.723 129654,-232.273 129662,-238.993 129662,-238.993"/>
			<text textAnchor="middle" x="129511" y="-234.8">Er16, Wi3818</text>
			</g>
			<g id="edge648" className="edge">
			<path d="M129356,-146.759C129367,-145.245 129379,-143.852 129390,-143 129505,-134.224 129534,-139.889 129650,-139 129904,-137.049 129973,-109.666 130220,-166 130261,-175.386 130272,-179.669 130308,-202 130316,-206.808 130323,-212.995 130330,-219.018"/>
			<polygon fill="#000000" stroke="#000000" points="130338,-225.921 130327,-222.397 130334,-222.513 130330,-219.104 130330,-219.104 130330,-219.104 130334,-222.513 130333,-215.812 130338,-225.921 130338,-225.921"/>
			<text textAnchor="middle" x="129821" y="-138.8">Kr299</text>
			</g>
			<g id="edge1203" className="edge">
			<path strokeWidth="2" d="M129746,-166.345C129829,-167.639 130044,-173.789 130220,-203 130255,-208.732 130293,-220.435 130320,-229.348"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="130329,-232.609 130318,-233.621 130324,-231.46 130319,-229.837 130320,-229.364 130320,-228.891 130324,-230.514 130321,-225.108 130329,-232.609 130329,-232.609"/>
			<text textAnchor="middle" x="130047" y="-206.8">Ba96, Kf133, Kr185, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="n825" className="node">
			<ellipse cx="130047" cy="-271" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="130047" y="-267.3">ulterius </text>
			</g>
			<g id="edge649" className="edge">
			<path d="M129767,-253.539C129828,-257.375 129926,-263.469 129988,-267.349"/>
			<polygon fill="#000000" stroke="#000000" points="129998,-267.976 129987,-271.843 129993,-267.664 129988,-267.352 129988,-267.352 129988,-267.352 129993,-267.664 129988,-262.861 129998,-267.976 129998,-267.976"/>
			<text textAnchor="middle" x="129821" y="-261.8">Mü11475</text>
			</g>
			<g id="edge1158" className="edge">
			<path strokeWidth="1.2" d="M129761,-241.743C129793,-236.961 129836,-231.42 129874,-229 130027,-219.214 130066,-222.032 130220,-229 130253,-230.482 130290,-234.017 130316,-236.869"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="130326,-237.962 130316,-241.346 130321,-237.517 130316,-236.972 130316,-236.872 130316,-236.773 130321,-237.318 130317,-232.399 130326,-237.962 130326,-237.962"/>
			<text textAnchor="middle" x="130047" y="-232.8">Er16, Wi3818</text>
			</g>
			<g id="edge1043" className="edge">
			<path d="M130096,-266.312C130157,-260.29 130261,-249.969 130316,-244.554"/>
			<polygon fill="#000000" stroke="#000000" points="130326,-243.571 130316,-249.031 130321,-244.062 130316,-244.553 130316,-244.553 130316,-244.553 130321,-244.062 130316,-240.075 130326,-243.571 130326,-243.571"/>
			<text textAnchor="middle" x="130273" y="-254.8">Mü11475</text>
			</g>
			<g id="n827" className="node">
			<ellipse cx="130509" cy="-302" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="130509" y="-298.3">hoc </text>
			</g>
			<g id="edge972" className="edge majority">
			<path strokeWidth="3" d="M130377,-250.001C130402,-260.124 130444,-276.677 130474,-288.385"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="130483,-292.153 130472,-292.654 130478,-291.241 130473,-289.4 130474,-288.47 130474,-287.54 130479,-289.382 130475,-284.286 130483,-292.153 130483,-292.153"/>
			<text textAnchor="middle" x="130429" y="-285.8">majority</text>
			</g>
			<g id="edge284" className="edge majority">
			<path strokeWidth="3" d="M130539,-307.226C130564,-311.881 130602,-318.761 130631,-324.09"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="130641,-325.904 130630,-328.531 130636,-325.988 130631,-325.088 130631,-324.105 130631,-323.121 130636,-324.021 130632,-319.678 130641,-325.904 130641,-325.904"/>
			<text textAnchor="middle" x="130589" y="-324.8">majority</text>
			</g>
			<g id="n829" className="node">
			<ellipse cx="130845" cy="-332" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="130845" y="-328.3">dicit </text>
			</g>
			<g id="edge165" className="edge majority">
			<path strokeWidth="3.2" d="M130712,-332C130738,-332 130773,-332 130800,-332"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="130810,-332 130800,-336.5 130805,-333.1 130800,-333.1 130800,-332 130800,-330.9 130805,-330.9 130800,-327.5 130810,-332 130810,-332"/>
			<text textAnchor="middle" x="130761" y="-335.8">majority</text>
			</g>
			<g id="n830" className="node">
			<ellipse cx="131024" cy="-332" rx="45.4919" ry="18"/>
			<text textAnchor="middle" x="131024" y="-328.3">mundo </text>
			</g>
			<g id="edge903" className="edge majority">
			<path strokeWidth="3.2" d="M130880,-332C130905,-332 130939,-332 130968,-332"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="130978,-332 130968,-336.5 130973,-333.1 130968,-333.1 130968,-332 130968,-330.9 130973,-330.9 130968,-327.5 130978,-332 130978,-332"/>
			<text textAnchor="middle" x="130929" y="-335.8">majority</text>
			</g>
			<g id="n831" className="node">
			<ellipse cx="131207" cy="-332" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="131207" y="-328.3">lapso </text>
			</g>
			<g id="edge870" className="edge majority">
			<path strokeWidth="3.2" d="M131070,-332C131097,-332 131131,-332 131158,-332"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="131168,-332 131158,-336.5 131163,-333.1 131158,-333.1 131158,-332 131158,-330.9 131163,-330.9 131158,-327.5 131168,-332 131168,-332"/>
			<text textAnchor="middle" x="131119" y="-335.8">majority</text>
			</g>
			<g id="n832" className="node">
			<ellipse cx="131459" cy="-290" rx="60.3893" ry="18"/>
			<text textAnchor="middle" x="131459" y="-286.3">contulisti. </text>
			</g>
			<g id="edge241" className="edge majority">
			<path strokeWidth="2.4" d="M131239,-321.716C131247,-319.237 131256,-316.791 131264,-315 131306,-306.075 131353,-299.9 131390,-295.919"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="131401,-294.854 131391,-300.359 131396,-296.065 131391,-296.579 131391,-295.883 131391,-295.186 131396,-294.672 131390,-291.406 131401,-294.854 131401,-294.854"/>
			<text textAnchor="middle" x="131295" y="-318.8">majority</text>
			</g>
			<g id="n833" className="node">
			<ellipse cx="131683" cy="-336" rx="27" ry="18"/>
			<text textAnchor="middle" x="131683" y="-332.3">et </text>
			</g>
			<g id="edge1309" className="edge">
			<path strokeWidth="1.6" d="M131246,-332.317C131335,-333.069 131558,-334.953 131646,-335.694"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="131656,-335.78 131646,-340.196 131651,-336.038 131646,-335.996 131646,-335.696 131646,-335.396 131651,-335.438 131646,-331.196 131656,-335.78 131656,-335.78"/>
			<text textAnchor="middle" x="131459" y="-338.8">Gr314, Kf133, Kr185, Mü22405</text>
			</g>
			<g id="edge1298" className="edge">
			<path d="M131518,-293.67C131554,-296.993 131599,-303.261 131638,-315 131643,-316.42 131648,-318.279 131652,-320.305"/>
			<polygon fill="#000000" stroke="#000000" points="131661,-324.609 131651,-324.47 131657,-322.499 131652,-320.39 131652,-320.39 131652,-320.39 131657,-322.499 131654,-316.31 131661,-324.609 131661,-324.609"/>
			<text textAnchor="middle" x="131615" y="-318.8">Kr299</text>
			</g>
			<g id="n835" className="node">
			<ellipse cx="132576" cy="-298" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="132576" y="-294.3">Dicit </text>
			</g>
			<g id="edge216" className="edge">
			<path strokeWidth="2.2" d="M131520,-289.39C131680,-287.941 132134,-285.114 132512,-295 132518,-295.147 132523,-295.355 132529,-295.594"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="132540,-296.052 132530,-300.106 132535,-296.431 132530,-296.21 132530,-295.611 132530,-295.011 132535,-295.232 132530,-291.115 132540,-296.052 132540,-296.052"/>
			<text textAnchor="middle" x="131942" y="-292.8">Ba96, Er16, Mü11475, Mü28315, MüU151, Sg524, Wi3818</text>
			</g>
			<g id="n834" className="node">
			<ellipse cx="132220" cy="-336" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="132220" y="-332.3">cetera. </text>
			</g>
			<g id="edge362" className="edge">
			<path strokeWidth="1.8" d="M131710,-336C131793,-336 132049,-336 132163,-336"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="132174,-336 132164,-340.5 132169,-336.4 132164,-336.4 132164,-336 132164,-335.6 132169,-335.6 132164,-331.5 132174,-336 132174,-336"/>
			<text textAnchor="middle" x="131942" y="-339.8">Gr314, Kf133, Kr185, Kr299, Mü22405</text>
			</g>
			<g id="edge322" className="edge">
			<path strokeWidth="1.6" d="M132258,-325.528C132266,-323.408 132275,-321.402 132284,-320 132370,-305.953 132472,-300.852 132529,-299.015"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="132539,-298.709 132530,-303.507 132534,-299.159 132529,-299.309 132529,-299.009 132529,-298.709 132534,-298.559 132529,-294.511 132539,-298.709 132539,-298.709"/>
			<text textAnchor="middle" x="132398" y="-323.8">Kf133, Kr185, Kr299, Mü22405</text>
			</g>
			<g id="n836" className="node">
			<ellipse cx="132576" cy="-352" rx="45.4919" ry="18"/>
			<text textAnchor="middle" x="132576" y="-348.3">Dicens </text>
			</g>
			<g id="edge1125" className="edge">
			<path d="M132266,-338.043C132331,-340.976 132450,-346.373 132520,-349.527"/>
			<polygon fill="#000000" stroke="#000000" points="132531,-349.995 132520,-354.038 132526,-349.769 132521,-349.543 132521,-349.543 132521,-349.543 132526,-349.769 132521,-345.048 132531,-349.995 132531,-349.995"/>
			<text textAnchor="middle" x="132398" y="-351.8">Gr314</text>
			</g>
			<g id="n837" className="node">
			<ellipse cx="132770" cy="-318" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="132770" y="-314.3">sanctus </text>
			</g>
			<g id="edge254" className="edge majority">
			<path strokeWidth="3" d="M132612,-301.61C132637,-304.216 132672,-307.822 132702,-311 132705,-311.333 132708,-311.676 132712,-312.022"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="132722,-313.064 132711,-316.501 132717,-313.539 132712,-313.02 132712,-312.026 132712,-311.031 132717,-311.55 132712,-307.55 132722,-313.064 132722,-313.064"/>
			<text textAnchor="middle" x="132671" y="-314.8">majority</text>
			</g>
			<g id="edge624" className="edge">
			<path d="M132618,-344.789C132646,-339.798 132684,-333.099 132715,-327.649"/>
			<polygon fill="#000000" stroke="#000000" points="132725,-325.852 132716,-332.027 132720,-326.724 132715,-327.596 132715,-327.596 132715,-327.596 132720,-326.724 132714,-323.165 132725,-325.852 132725,-325.852"/>
			<text textAnchor="middle" x="132671" y="-343.8">Gr314</text>
			</g>
			<g id="n838" className="node">
			<ellipse cx="132986" cy="-299" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="132986" y="-295.3">XXX </text>
			</g>
			<g id="edge264" className="edge">
			<path d="M132816,-310.737C132823,-309.709 132831,-308.749 132838,-308 132873,-304.372 132912,-302.061 132941,-300.69"/>
			<polygon fill="#000000" stroke="#000000" points="132951,-300.226 132942,-305.171 132946,-300.451 132941,-300.676 132941,-300.676 132941,-300.676 132946,-300.451 132941,-296.18 132951,-300.226 132951,-300.226"/>
			<text textAnchor="middle" x="132869" y="-311.8">Wi3818</text>
			</g>
			<g id="n839" className="node">
			<ellipse cx="132986" cy="-353" rx="68.4888" ry="18"/>
			<text textAnchor="middle" x="132986" y="-349.3">Bernhardus </text>
			</g>
			<g id="edge399" className="edge majority">
			<path strokeWidth="3" d="M132816,-325.337C132845,-330.151 132884,-336.535 132917,-341.957"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="132928,-343.606 132917,-346.433 132922,-343.786 132918,-342.979 132918,-341.992 132918,-341.005 132923,-341.812 132918,-337.551 132928,-343.606 132928,-343.606"/>
			<text textAnchor="middle" x="132869" y="-341.8">majority</text>
			</g>
			<g id="n840" className="node">
			<ellipse cx="133210" cy="-319" rx="57.6901" ry="18"/>
			<text textAnchor="middle" x="133210" y="-315.3">alloquens </text>
			</g>
			<g id="edge958" className="edge">
			<path d="M133020,-301.897C133050,-304.501 133095,-308.452 133134,-312 133137,-312.311 133141,-312.632 133144,-312.958"/>
			<polygon fill="#000000" stroke="#000000" points="133155,-313.884 133144,-317.447 133150,-313.425 133145,-312.966 133145,-312.966 133145,-312.966 133150,-313.425 133145,-308.485 133155,-313.884 133155,-313.884"/>
			<text textAnchor="middle" x="133103" y="-315.8">Wi3818</text>
			</g>
			<g id="edge1215" className="edge majority">
			<path strokeWidth="3" d="M133045,-344.067C133077,-339.238 133116,-333.278 133148,-328.382"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="133158,-326.832 133149,-332.794 133153,-328.578 133148,-329.335 133148,-328.346 133148,-327.358 133153,-326.601 133147,-323.898 133158,-326.832 133158,-326.832"/>
			<text textAnchor="middle" x="133103" y="-342.8">majority</text>
			</g>
			<g id="n841" className="node">
			<ellipse cx="133414" cy="-319" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="133414" y="-315.3">beatam </text>
			</g>
			<g id="edge222" className="edge majority">
			<path strokeWidth="3.2" d="M133268,-319C133295,-319 133328,-319 133355,-319"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="133366,-319 133356,-323.5 133361,-320.1 133356,-320.1 133356,-319 133356,-317.9 133361,-317.9 133356,-314.5 133366,-319 133366,-319"/>
			<text textAnchor="middle" x="133317" y="-322.8">majority</text>
			</g>
			<g id="n842" className="node">
			<ellipse cx="133616" cy="-319" rx="55.7903" ry="18"/>
			<text textAnchor="middle" x="133616" y="-315.3">uirginem </text>
			</g>
			<g id="edge183" className="edge majority">
			<path strokeWidth="3.2" d="M133462,-319C133488,-319 133521,-319 133550,-319"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="133560,-319 133550,-323.5 133555,-320.1 133550,-320.1 133550,-319 133550,-317.9 133555,-317.9 133550,-314.5 133560,-319 133560,-319"/>
			<text textAnchor="middle" x="133511" y="-322.8">majority</text>
			</g>
			<g id="n843" className="node">
			<ellipse cx="133811" cy="-340" rx="46.5926" ry="18"/>
			<text textAnchor="middle" x="133811" y="-336.3">dicens: </text>
			</g>
			<g id="edge676" className="edge">
			<path d="M133669,-324.683C133696,-327.591 133728,-331.129 133756,-334.071"/>
			<polygon fill="#000000" stroke="#000000" points="133766,-335.167 133755,-338.559 133761,-334.626 133756,-334.085 133756,-334.085 133756,-334.085 133761,-334.626 133756,-329.612 133766,-335.167 133766,-335.167"/>
			<text textAnchor="middle" x="133718" y="-335.8">Wi3818</text>
			</g>
			<g id="n844" className="node">
			<ellipse cx="133996" cy="-314" rx="45.4919" ry="18"/>
			<text textAnchor="middle" x="133996" y="-310.3">Merito </text>
			</g>
			<g id="edge175" className="edge majority">
			<path strokeWidth="3" d="M133665,-310.364C133694,-305.671 133731,-300.357 133764,-298 133806,-295.038 133816,-295.573 133858,-298 133886,-299.639 133917,-303.156 133943,-306.476"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="133953,-307.832 133943,-310.976 133948,-308.165 133943,-307.506 133943,-306.515 133943,-305.524 133948,-306.182 133944,-302.054 133953,-307.832 133953,-307.832"/>
			<text textAnchor="middle" x="133811" y="-301.8">majority</text>
			</g>
			<g id="edge1156" className="edge">
			<path d="M133855,-333.838C133882,-330.107 133915,-325.325 133943,-321.391"/>
			<polygon fill="#000000" stroke="#000000" points="133953,-319.983 133944,-325.845 133948,-320.686 133943,-321.39 133943,-321.39 133943,-321.39 133948,-320.686 133942,-316.934 133953,-319.983 133953,-319.983"/>
			<text textAnchor="middle" x="133904" y="-333.8">Wi3818</text>
			</g>
			<g id="n845" className="node">
			<ellipse cx="134167" cy="-314" rx="27" ry="18"/>
			<text textAnchor="middle" x="134167" y="-310.3">in </text>
			</g>
			<g id="edge1254" className="edge majority">
			<path strokeWidth="3.2" d="M134042,-314C134069,-314 134104,-314 134130,-314"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="134140,-314 134130,-318.5 134135,-315.1 134130,-315.1 134130,-314 134130,-312.9 134135,-312.9 134130,-309.5 134140,-314 134140,-314"/>
			<text textAnchor="middle" x="134091" y="-317.8">majority</text>
			</g>
			<g id="n846" className="node">
			<ellipse cx="134319" cy="-314" rx="27" ry="18"/>
			<text textAnchor="middle" x="134319" y="-310.3">te, </text>
			</g>
			<g id="edge500" className="edge majority">
			<path strokeWidth="3.2" d="M134194,-314C134218,-314 134255,-314 134282,-314"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="134292,-314 134282,-318.5 134287,-315.1 134282,-315.1 134282,-314 134282,-312.9 134287,-312.9 134282,-309.5 134292,-314 134292,-314"/>
			<text textAnchor="middle" x="134243" y="-317.8">majority</text>
			</g>
			<g id="n847" className="node">
			<ellipse cx="134471" cy="-314" rx="27" ry="18"/>
			<text textAnchor="middle" x="134471" y="-310.3">o </text>
			</g>
			<g id="edge477" className="edge majority">
			<path strokeWidth="3.2" d="M134346,-314C134370,-314 134407,-314 134434,-314"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="134444,-314 134434,-318.5 134439,-315.1 134434,-315.1 134434,-314 134434,-312.9 134439,-312.9 134434,-309.5 134444,-314 134444,-314"/>
			<text textAnchor="middle" x="134395" y="-317.8">majority</text>
			</g>
			<g id="n848" className="node">
			<ellipse cx="134647" cy="-314" rx="50.8918" ry="18"/>
			<text textAnchor="middle" x="134647" y="-310.3">domina, </text>
			</g>
			<g id="edge462" className="edge majority">
			<path strokeWidth="3.2" d="M134498,-314C134521,-314 134556,-314 134586,-314"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="134596,-314 134586,-318.5 134591,-315.1 134586,-315.1 134586,-314 134586,-312.9 134591,-312.9 134586,-309.5 134596,-314 134596,-314"/>
			<text textAnchor="middle" x="134547" y="-317.8">majority</text>
			</g>
			<g id="n849" className="node">
			<ellipse cx="134857" cy="-314" rx="61.1893" ry="18"/>
			<text textAnchor="middle" x="134857" y="-310.3">respiciunt </text>
			</g>
			<g id="edge489" className="edge majority">
			<path strokeWidth="3.2" d="M134698,-314C134724,-314 134757,-314 134786,-314"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="134796,-314 134786,-318.5 134791,-315.1 134786,-315.1 134786,-314 134786,-312.9 134791,-312.9 134786,-309.5 134796,-314 134796,-314"/>
			<text textAnchor="middle" x="134747" y="-317.8">majority</text>
			</g>
			<g id="n850" className="node">
			<ellipse cx="135053" cy="-314" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="135053" y="-310.3">oculi </text>
			</g>
			<g id="edge60" className="edge majority">
			<path strokeWidth="3.2" d="M134918,-314C134947,-314 134980,-314 135007,-314"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="135017,-314 135007,-318.5 135012,-315.1 135007,-315.1 135007,-314 135007,-312.9 135012,-312.9 135007,-309.5 135017,-314 135017,-314"/>
			<text textAnchor="middle" x="134967" y="-317.8">majority</text>
			</g>
			<g id="n851" className="node">
			<ellipse cx="135230" cy="-314" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="135230" y="-310.3">tocius </text>
			</g>
			<g id="edge894" className="edge majority">
			<path strokeWidth="3.2" d="M135089,-314C135115,-314 135149,-314 135177,-314"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="135187,-314 135177,-318.5 135182,-315.1 135177,-315.1 135177,-314 135177,-312.9 135182,-312.9 135177,-309.5 135187,-314 135187,-314"/>
			<text textAnchor="middle" x="135139" y="-317.8">majority</text>
			</g>
			<g id="n852" className="node">
			<ellipse cx="135427" cy="-314" rx="56.59" ry="18"/>
			<text textAnchor="middle" x="135427" y="-310.3">creature, </text>
			</g>
			<g id="edge1171" className="edge majority">
			<path strokeWidth="3.2" d="M135272,-314C135298,-314 135331,-314 135360,-314"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="135370,-314 135360,-318.5 135365,-315.1 135360,-315.1 135360,-314 135360,-312.9 135365,-312.9 135360,-309.5 135370,-314 135370,-314"/>
			<text textAnchor="middle" x="135321" y="-317.8">majority</text>
			</g>
			<g id="n853" className="node">
			<ellipse cx="135616" cy="-314" rx="33.5952" ry="18"/>
			<text textAnchor="middle" x="135616" y="-310.3">quia </text>
			</g>
			<g id="edge1250" className="edge majority">
			<path strokeWidth="3.2" d="M135484,-314C135512,-314 135546,-314 135572,-314"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="135582,-314 135572,-318.5 135577,-315.1 135572,-315.1 135572,-314 135572,-312.9 135577,-312.9 135572,-309.5 135582,-314 135582,-314"/>
			<text textAnchor="middle" x="135533" y="-317.8">majority</text>
			</g>
			<g id="n854" className="node">
			<ellipse cx="135775" cy="-314" rx="27" ry="18"/>
			<text textAnchor="middle" x="135775" y="-310.3">in </text>
			</g>
			<g id="edge1036" className="edge majority">
			<path strokeWidth="3.2" d="M135650,-314C135676,-314 135711,-314 135738,-314"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="135748,-314 135738,-318.5 135743,-315.1 135738,-315.1 135738,-314 135738,-312.9 135743,-312.9 135738,-309.5 135748,-314 135748,-314"/>
			<text textAnchor="middle" x="135699" y="-317.8">majority</text>
			</g>
			<g id="n855" className="node">
			<ellipse cx="135927" cy="-314" rx="27" ry="18"/>
			<text textAnchor="middle" x="135927" y="-310.3">te, </text>
			</g>
			<g id="edge633" className="edge majority">
			<path strokeWidth="3.2" d="M135802,-314C135826,-314 135863,-314 135890,-314"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="135900,-314 135890,-318.5 135895,-315.1 135890,-315.1 135890,-314 135890,-312.9 135895,-312.9 135890,-309.5 135900,-314 135900,-314"/>
			<text textAnchor="middle" x="135851" y="-317.8">majority</text>
			</g>
			<g id="n856" className="node">
			<ellipse cx="136091" cy="-314" rx="27" ry="18"/>
			<text textAnchor="middle" x="136091" y="-310.3">et </text>
			</g>
			<g id="edge668" className="edge">
			<path d="M135954,-314C135981,-314 136023,-314 136054,-314"/>
			<polygon fill="#000000" stroke="#000000" points="136064,-314 136054,-318.5 136059,-314 136054,-314 136054,-314 136054,-314 136059,-314 136054,-309.5 136064,-314 136064,-314"/>
			<text textAnchor="middle" x="136007" y="-317.8">Mü28315</text>
			</g>
			<g id="n857" className="node">
			<ellipse cx="136091" cy="-260" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="136091" y="-256.3">per </text>
			</g>
			<g id="edge1101" className="edge">
			<path d="M135950,-304.008C135957,-300.937 135965,-297.667 135972,-295 135999,-285.225 136030,-276.084 136054,-269.596"/>
			<polygon fill="#000000" stroke="#000000" points="136063,-266.897 136055,-273.869 136059,-268.212 136054,-269.528 136054,-269.528 136054,-269.528 136059,-268.212 136053,-265.186 136063,-266.897 136063,-266.897"/>
			<text textAnchor="middle" x="136007" y="-298.8">Mü11475</text>
			</g>
			<g id="n858" className="node">
			<ellipse cx="136263" cy="-314" rx="27" ry="18"/>
			<text textAnchor="middle" x="136263" y="-310.3">de </text>
			</g>
			<g id="edge547" className="edge majority">
			<path strokeWidth="2.8" d="M135949,-324.68C135956,-327.866 135964,-331.03 135972,-333 136075,-359.082 136107,-356.134 136210,-333 136217,-331.489 136224,-329.328 136230,-327.002"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="136240,-323.531 136232,-331.217 136235,-326.108 136231,-327.84 136230,-326.996 136230,-326.152 136235,-324.419 136229,-322.774 136240,-323.531 136240,-323.531"/>
			<text textAnchor="middle" x="136091" y="-354.8">majority</text>
			</g>
			<g id="edge698" className="edge">
			<path d="M136118,-314C136147,-314 136193,-314 136225,-314"/>
			<polygon fill="#000000" stroke="#000000" points="136236,-314 136226,-318.5 136231,-314 136226,-314 136226,-314 136226,-314 136231,-314 136226,-309.5 136236,-314 136236,-314"/>
			<text textAnchor="middle" x="136175" y="-317.8">Mü28315</text>
			</g>
			<g id="n859" className="node">
			<ellipse cx="136423" cy="-298" rx="27" ry="18"/>
			<text textAnchor="middle" x="136423" y="-294.3">te </text>
			</g>
			<g id="edge470" className="edge">
			<path d="M136120,-260.324C136160,-261.081 136235,-263.603 136298,-272 136329,-276.066 136363,-283.461 136387,-289.327"/>
			<polygon fill="#000000" stroke="#000000" points="136397,-291.734 136387,-293.766 136393,-290.563 136388,-289.391 136388,-289.391 136388,-289.391 136393,-290.563 136389,-285.017 136397,-291.734 136397,-291.734"/>
			<text textAnchor="middle" x="136263" y="-275.8">Mü11475</text>
			</g>
			<g id="edge135" className="edge majority">
			<path strokeWidth="3" d="M136290,-311.394C136316,-308.744 136357,-304.616 136386,-301.643"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="136396,-300.605 136387,-306.09 136391,-302.104 136386,-302.608 136386,-301.613 136386,-300.618 136391,-300.114 136386,-297.136 136396,-300.605 136396,-300.605"/>
			<text textAnchor="middle" x="136347" y="-311.8">majority</text>
			</g>
			<g id="n860" className="node">
			<ellipse cx="136597" cy="-290" rx="27" ry="18"/>
			<text textAnchor="middle" x="136597" y="-286.3">et </text>
			</g>
			<g id="edge1283" className="edge majority">
			<path strokeWidth="2.8" d="M136450,-296.785C136479,-295.424 136527,-293.21 136560,-291.683"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="136570,-291.213 136560,-296.173 136565,-292.345 136560,-292.577 136560,-291.678 136560,-290.779 136565,-290.547 136560,-287.183 136570,-291.213 136570,-291.213"/>
			<text textAnchor="middle" x="136499" y="-298.8">majority</text>
			</g>
			<g id="n862" className="node">
			<ellipse cx="136781" cy="-330" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="136781" y="-326.3">per </text>
			</g>
			<g id="edge396" className="edge">
			<path strokeWidth="1.2" d="M136446,-307.488C136453,-309.997 136461,-312.438 136468,-314 136565,-335.133 136682,-334.264 136742,-332.024"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="136752,-331.61 136742,-336.518 136747,-331.916 136742,-332.121 136742,-332.022 136742,-331.922 136747,-331.716 136741,-327.525 136752,-331.61 136752,-331.61"/>
			<text textAnchor="middle" x="136597" y="-335.8">Gr314, Kf133</text>
			</g>
			<g id="n861" className="node">
			<ellipse cx="136781" cy="-276" rx="27" ry="18"/>
			<text textAnchor="middle" x="136781" y="-272.3">de </text>
			</g>
			<g id="edge667" className="edge">
			<path d="M136623,-284.026C136635,-281.317 136650,-278.409 136664,-277 136690,-274.303 136720,-274.123 136743,-274.581"/>
			<polygon fill="#000000" stroke="#000000" points="136754,-274.838 136744,-279.086 136749,-274.713 136744,-274.588 136744,-274.588 136744,-274.588 136749,-274.713 136744,-270.089 136754,-274.838 136754,-274.838"/>
			<text textAnchor="middle" x="136699" y="-280.8">Mü11475</text>
			</g>
			<g id="edge738" className="edge majority">
			<path strokeWidth="2.6" d="M136624,-293.652C136651,-297.826 136696,-305.346 136734,-315 136738,-315.972 136742,-317.093 136746,-318.275"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="136755,-321.292 136744,-322.589 136750,-320.557 136746,-319.059 136746,-318.296 136746,-317.533 136751,-319.031 136747,-314.003 136755,-321.292 136755,-321.292"/>
			<text textAnchor="middle" x="136699" y="-318.8">majority</text>
			</g>
			<g id="n863" className="node">
			<ellipse cx="136943" cy="-304" rx="27" ry="18"/>
			<text textAnchor="middle" x="136943" y="-300.3">te </text>
			</g>
			<g id="edge109" className="edge">
			<path d="M136808,-278.61C136832,-281.213 136867,-285.729 136898,-292 136901,-292.666 136905,-293.437 136908,-294.259"/>
			<polygon fill="#000000" stroke="#000000" points="136918,-296.832 136907,-298.681 136913,-295.578 136908,-294.325 136908,-294.325 136908,-294.325 136913,-295.578 136909,-289.968 136918,-296.832 136918,-296.832"/>
			<text textAnchor="middle" x="136863" y="-295.8">Mü11475</text>
			</g>
			<g id="edge463" className="edge majority">
			<path strokeWidth="3" d="M136810,-325.53C136836,-321.173 136877,-314.525 136906,-309.77"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="136917,-308.112 136908,-314.157 136912,-309.901 136907,-310.703 136907,-309.716 136907,-308.729 136912,-307.927 136906,-305.274 136917,-308.112 136917,-308.112"/>
			<text textAnchor="middle" x="136863" y="-325.8">majority</text>
			</g>
			<g id="n864" className="node">
			<ellipse cx="137112" cy="-304" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="137112" y="-300.3">manus </text>
			</g>
			<g id="edge1305" className="edge majority">
			<path strokeWidth="3.2" d="M136970,-304C136993,-304 137028,-304 137057,-304"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="137068,-304 137058,-308.5 137063,-305.1 137058,-305.1 137058,-304 137058,-302.9 137063,-302.9 137058,-299.5 137068,-304 137068,-304"/>
			<text textAnchor="middle" x="137019" y="-307.8">majority</text>
			</g>
			<g id="n865" className="node">
			<ellipse cx="137329" cy="-304" rx="74.9875" ry="18"/>
			<text textAnchor="middle" x="137329" y="-300.3">omnipotentis </text>
			</g>
			<g id="edge875" className="edge majority">
			<path strokeWidth="3.2" d="M137156,-304C137181,-304 137214,-304 137244,-304"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="137254,-304 137244,-308.5 137249,-305.1 137244,-305.1 137244,-304 137244,-302.9 137249,-302.9 137244,-299.5 137254,-304 137254,-304"/>
			<text textAnchor="middle" x="137205" y="-307.8">majority</text>
			</g>
			<g id="n867" className="node">
			<ellipse cx="137557" cy="-262" rx="53.8905" ry="18"/>
			<text textAnchor="middle" x="137557" y="-258.3">quicquid </text>
			</g>
			<g id="edge179" className="edge">
			<path d="M137389,-293.075C137423,-286.731 137466,-278.78 137499,-272.508"/>
			<polygon fill="#000000" stroke="#000000" points="137510,-270.62 137501,-276.871 137505,-271.533 137500,-272.447 137500,-272.447 137500,-272.447 137505,-271.533 137499,-268.023 137510,-270.62 137510,-270.62"/>
			<text textAnchor="middle" x="137453" y="-289.8">Er16</text>
			</g>
			<g id="n866" className="node">
			<ellipse cx="137557" cy="-316" rx="54.6905" ry="18"/>
			<text textAnchor="middle" x="137557" y="-312.3">quidquid </text>
			</g>
			<g id="edge706" className="edge majority">
			<path strokeWidth="3" d="M137402,-307.83C137431,-309.375 137465,-311.143 137493,-312.638"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="137503,-313.175 137493,-317.139 137498,-313.909 137493,-313.644 137493,-312.645 137493,-311.646 137498,-311.912 137493,-308.151 137503,-313.175 137503,-313.175"/>
			<text textAnchor="middle" x="137453" y="-315.8">majority</text>
			</g>
			<g id="n869" className="node">
			<ellipse cx="137905" cy="-313" rx="46.5926" ry="18"/>
			<text textAnchor="middle" x="137905" y="-309.3">creauit </text>
			</g>
			<g id="edge887" className="edge">
			<path d="M137607,-269.199C137671,-278.699 137784,-295.361 137851,-305.168"/>
			<polygon fill="#000000" stroke="#000000" points="137861,-306.681 137851,-309.674 137856,-305.952 137851,-305.222 137851,-305.222 137851,-305.222 137856,-305.952 137852,-300.771 137861,-306.681 137861,-306.681"/>
			<text textAnchor="middle" x="137735" y="-295.8">Er16</text>
			</g>
			<g id="n868" className="node">
			<ellipse cx="137735" cy="-364" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="137735" y="-360.3">iste </text>
			</g>
			<g id="edge309" className="edge">
			<path d="M137600,-327.375C137629,-335.449 137669,-346.188 137697,-353.948"/>
			<polygon fill="#000000" stroke="#000000" points="137707,-356.661 137696,-358.371 137702,-355.346 137697,-354.03 137697,-354.03 137697,-354.03 137702,-355.346 137699,-349.689 137707,-356.661 137707,-356.661"/>
			<text textAnchor="middle" x="137658" y="-352.8">Wi3818</text>
			</g>
			<g id="edge1159" className="edge majority">
			<path strokeWidth="2.8" d="M137612,-315.535C137676,-314.978 137783,-314.05 137848,-313.484"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="137858,-313.397 137848,-317.984 137853,-314.34 137848,-314.384 137848,-313.484 137848,-312.584 137853,-312.54 137848,-308.984 137858,-313.397 137858,-313.397"/>
			<text textAnchor="middle" x="137735" y="-317.8">majority</text>
			</g>
			<g id="edge410" className="edge">
			<path d="M137763,-355.919C137788,-348.138 137828,-336.213 137858,-326.906"/>
			<polygon fill="#000000" stroke="#000000" points="137868,-323.985 137860,-331.195 137863,-325.437 137858,-326.889 137858,-326.889 137858,-326.889 137863,-325.437 137857,-322.584 137868,-323.985 137868,-323.985"/>
			<text textAnchor="middle" x="137812" y="-351.8">Wi3818</text>
			</g>
			<g id="n871" className="node">
			<ellipse cx="138110" cy="-259" rx="27" ry="18"/>
			<text textAnchor="middle" x="138110" y="-255.3">in </text>
			</g>
			<g id="edge1236" className="edge">
			<path d="M137942,-301.983C137951,-299.296 137961,-296.483 137970,-294 138005,-284.271 138046,-274.106 138075,-267.253"/>
			<polygon fill="#000000" stroke="#000000" points="138084,-264.885 138076,-271.612 138079,-266.062 138075,-267.239 138075,-267.239 138075,-267.239 138079,-266.062 138074,-262.865 138084,-264.885 138084,-264.885"/>
			<text textAnchor="middle" x="138001" y="-297.8">Wi3818</text>
			</g>
			<g id="n870" className="node">
			<ellipse cx="138110" cy="-313" rx="59.5901" ry="18"/>
			<text textAnchor="middle" x="138110" y="-309.3">recreauit. </text>
			</g>
			<g id="edge1325" className="edge majority">
			<path strokeWidth="2.8" d="M137952,-313C137978,-313 138011,-313 138040,-313"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="138050,-313 138040,-317.5 138045,-313.9 138040,-313.9 138040,-313 138040,-312.1 138045,-312.1 138040,-308.5 138050,-313 138050,-313"/>
			<text textAnchor="middle" x="138001" y="-316.8">majority</text>
			</g>
			<g id="n874" className="node">
			<ellipse cx="138640" cy="-313" rx="33.5952" ry="18"/>
			<text textAnchor="middle" x="138640" y="-309.3">Ipsa </text>
			</g>
			<g id="edge990" className="edge">
			<path d="M137939,-325.327C137979,-338.953 138048,-359 138109,-359 138109,-359 138109,-359 138465,-359 138514,-359 138569,-341.497 138604,-328.085"/>
			<polygon fill="#000000" stroke="#000000" points="138613,-324.253 138606,-332.125 138609,-326.098 138604,-327.942 138604,-327.942 138604,-327.942 138609,-326.098 138602,-323.76 138613,-324.253 138613,-324.253"/>
			<text textAnchor="middle" x="138289" y="-362.8">Er16</text>
			</g>
			<g id="n872" className="node">
			<ellipse cx="138289" cy="-265" rx="27" ry="18"/>
			<text textAnchor="middle" x="138289" y="-261.3">te </text>
			</g>
			<g id="edge564" className="edge">
			<path d="M138137,-259.885C138167,-260.913 138218,-262.616 138252,-263.771"/>
			<polygon fill="#000000" stroke="#000000" points="138262,-264.111 138252,-268.27 138257,-263.942 138252,-263.772 138252,-263.772 138252,-263.772 138257,-263.942 138252,-259.275 138262,-264.111 138262,-264.111"/>
			<text textAnchor="middle" x="138216" y="-266.8">Wi3818</text>
			</g>
			<g id="edge735" className="edge majority">
			<path strokeWidth="2.8" d="M138170,-313C138277,-313 138502,-313 138596,-313"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="138606,-313 138596,-317.5 138601,-313.9 138596,-313.9 138596,-313 138596,-312.1 138601,-312.1 138596,-308.5 138606,-313 138606,-313"/>
			<text textAnchor="middle" x="138365" y="-316.8">majority</text>
			</g>
			<g id="n873" className="node">
			<ellipse cx="138464" cy="-267" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="138464" y="-263.3">creauit. </text>
			</g>
			<g id="edge1267" className="edge">
			<path d="M138316,-265.304C138339,-265.571 138374,-265.969 138404,-266.312"/>
			<polygon fill="#000000" stroke="#000000" points="138414,-266.431 138404,-270.815 138409,-266.373 138404,-266.316 138404,-266.316 138404,-266.316 138409,-266.373 138404,-261.816 138414,-266.431 138414,-266.431"/>
			<text textAnchor="middle" x="138365" y="-269.8">Wi3818</text>
			</g>
			<g id="edge339" className="edge">
			<path d="M138514,-269.452C138537,-271.683 138564,-275.929 138588,-284 138595,-286.476 138603,-290.019 138610,-293.784"/>
			<polygon fill="#000000" stroke="#000000" points="138619,-298.975 138608,-297.836 138614,-296.461 138610,-293.947 138610,-293.947 138610,-293.947 138614,-296.461 138612,-290.057 138619,-298.975 138619,-298.975"/>
			<text textAnchor="middle" x="138560" y="-287.8">Wi3818</text>
			</g>
			<g id="n875" className="node">
			<ellipse cx="138809" cy="-313" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="138809" y="-309.3">enim </text>
			</g>
			<g id="edge1264" className="edge majority">
			<path strokeWidth="3.2" d="M138674,-313C138699,-313 138734,-313 138762,-313"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="138772,-313 138762,-317.5 138767,-314.1 138762,-314.1 138762,-313 138762,-311.9 138767,-311.9 138762,-308.5 138772,-313 138772,-313"/>
			<text textAnchor="middle" x="138723" y="-316.8">majority</text>
			</g>
			<g id="n876" className="node">
			<ellipse cx="138994" cy="-313" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="138994" y="-309.3">mortem </text>
			</g>
			<g id="edge1020" className="edge majority">
			<path strokeWidth="3.2" d="M138846,-313C138871,-313 138905,-313 138934,-313"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="138944,-313 138934,-317.5 138939,-314.1 138934,-314.1 138934,-313 138934,-311.9 138939,-311.9 138934,-308.5 138944,-313 138944,-313"/>
			<text textAnchor="middle" x="138895" y="-316.8">majority</text>
			</g>
			<g id="n877" className="node">
			<ellipse cx="139182" cy="-313" rx="39.7935" ry="18"/>
			<text textAnchor="middle" x="139182" y="-309.3">quam </text>
			</g>
			<g id="edge927" className="edge majority">
			<path strokeWidth="3.2" d="M139044,-313C139072,-313 139105,-313 139132,-313"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="139142,-313 139132,-317.5 139137,-314.1 139132,-314.1 139132,-313 139132,-311.9 139137,-311.9 139132,-308.5 139142,-313 139142,-313"/>
			<text textAnchor="middle" x="139093" y="-316.8">majority</text>
			</g>
			<g id="n878" className="node">
			<ellipse cx="139352" cy="-313" rx="31.6951" ry="18"/>
			<text textAnchor="middle" x="139352" y="-309.3">Eua </text>
			</g>
			<g id="edge1263" className="edge majority">
			<path strokeWidth="3.2" d="M139222,-313C139248,-313 139283,-313 139310,-313"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="139320,-313 139310,-317.5 139315,-314.1 139310,-314.1 139310,-313 139310,-311.9 139315,-311.9 139310,-308.5 139320,-313 139320,-313"/>
			<text textAnchor="middle" x="139271" y="-316.8">majority</text>
			</g>
			<g id="n880" className="node">
			<ellipse cx="139589" cy="-295" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="139589" y="-291.3">intulit </text>
			</g>
			<g id="edge949" className="edge majority">
			<path strokeWidth="2.8" d="M139382,-306.981C139389,-305.825 139396,-304.744 139402,-304 139447,-298.778 139499,-296.578 139536,-295.655"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="139547,-295.427 139537,-300.15 139542,-296.439 139537,-296.551 139537,-295.651 139536,-294.752 139541,-294.639 139536,-291.153 139547,-295.427 139547,-295.427"/>
			<text textAnchor="middle" x="139464" y="-307.8">majority</text>
			</g>
			<g id="n879" className="node">
			<ellipse cx="139589" cy="-349" rx="44.6926" ry="18"/>
			<text textAnchor="middle" x="139589" y="-345.3">intullit </text>
			</g>
			<g id="edge187" className="edge">
			<path strokeWidth="1.2" d="M139383,-317.633C139422,-323.577 139490,-333.978 139537,-341.164"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="139547,-342.691 139536,-345.624 139542,-342.032 139537,-341.275 139537,-341.176 139537,-341.077 139542,-341.835 139538,-336.728 139547,-342.691 139547,-342.691"/>
			<text textAnchor="middle" x="139464" y="-342.8">Mü28315, Sg524</text>
			</g>
			<g id="n881" className="node">
			<ellipse cx="139841" cy="-299" rx="46.5926" ry="18"/>
			<text textAnchor="middle" x="139841" y="-295.3">fugauit </text>
			</g>
			<g id="edge280" className="edge majority">
			<path strokeWidth="2.8" d="M139631,-295.661C139673,-296.327 139738,-297.36 139784,-298.101"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="139794,-298.264 139784,-302.603 139789,-299.084 139784,-299.004 139784,-298.104 139784,-297.204 139789,-297.284 139784,-293.604 139794,-298.264 139794,-298.264"/>
			<text textAnchor="middle" x="139714" y="-300.8">majority</text>
			</g>
			<g id="edge45" className="edge">
			<path strokeWidth="1.2" d="M139631,-342.71C139669,-336.694 139727,-326.939 139776,-316 139781,-314.806 139787,-313.459 139793,-312.061"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="139803,-309.508 139794,-316.353 139798,-310.848 139793,-312.092 139793,-311.995 139793,-311.898 139798,-310.655 139792,-307.636 139803,-309.508 139803,-309.508"/>
			<text textAnchor="middle" x="139714" y="-342.8">Mü28315, Sg524</text>
			</g>
			<g id="n882" className="node">
			<ellipse cx="140030" cy="-299" rx="43.5923" ry="18"/>
			<text textAnchor="middle" x="140030" y="-295.3">Filium </text>
			</g>
			<g id="edge1275" className="edge majority">
			<path strokeWidth="3.2" d="M139888,-299C139915,-299 139948,-299 139976,-299"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="139986,-299 139976,-303.5 139981,-300.1 139976,-300.1 139976,-299 139976,-297.9 139981,-297.9 139976,-294.5 139986,-299 139986,-299"/>
			<text textAnchor="middle" x="139937" y="-302.8">majority</text>
			</g>
			<g id="n883" className="node">
			<ellipse cx="140201" cy="-299" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="140201" y="-295.3">Dei </text>
			</g>
			<g id="edge16" className="edge majority">
			<path strokeWidth="3.2" d="M140074,-299C140101,-299 140135,-299 140161,-299"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="140172,-299 140162,-303.5 140167,-300.1 140162,-300.1 140162,-299 140162,-297.9 140167,-297.9 140162,-294.5 140172,-299 140172,-299"/>
			<text textAnchor="middle" x="140123" y="-302.8">majority</text>
			</g>
			<g id="n884" className="node">
			<ellipse cx="140394" cy="-255" rx="59.5901" ry="18"/>
			<text textAnchor="middle" x="140394" y="-251.3">generans, </text>
			</g>
			<g id="edge1116" className="edge">
			<path d="M140226,-289.218C140233,-286.623 140241,-283.992 140248,-282 140274,-274.699 140304,-268.776 140330,-264.359"/>
			<polygon fill="#000000" stroke="#000000" points="140340,-262.679 140331,-268.778 140335,-263.51 140330,-264.34 140330,-264.34 140330,-264.34 140335,-263.51 140329,-259.903 140340,-262.679 140340,-262.679"/>
			<text textAnchor="middle" x="140279" y="-285.8">Wi3818</text>
			</g>
			<g id="n885" className="node">
			<ellipse cx="140394" cy="-309" rx="65.7887" ry="18"/>
			<text textAnchor="middle" x="140394" y="-305.3">generando, </text>
			</g>
			<g id="edge786" className="edge majority">
			<path strokeWidth="3" d="M140230,-300.476C140253,-301.696 140288,-303.486 140319,-305.111"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="140329,-305.655 140319,-309.626 140324,-306.392 140319,-306.131 140319,-305.132 140319,-304.133 140324,-304.395 140319,-300.638 140329,-305.655 140329,-305.655"/>
			<text textAnchor="middle" x="140279" y="-307.8">majority</text>
			</g>
			<g id="n886" className="node">
			<ellipse cx="140587" cy="-257" rx="28.6953" ry="18"/>
			<text textAnchor="middle" x="140587" y="-253.3">qui </text>
			</g>
			<g id="edge1289" className="edge">
			<path d="M140454,-255.616C140485,-255.938 140521,-256.321 140548,-256.603"/>
			<polygon fill="#000000" stroke="#000000" points="140558,-256.709 140548,-261.104 140553,-256.657 140548,-256.604 140548,-256.604 140548,-256.604 140553,-256.657 140548,-252.105 140558,-256.709 140558,-256.709"/>
			<text textAnchor="middle" x="140509" y="-259.8">Wi3818</text>
			</g>
			<g id="edge1080" className="edge majority">
			<path strokeWidth="3" d="M140448,-298.509C140476,-292.533 140510,-284.372 140540,-275 140544,-273.645 140549,-272.076 140553,-270.44"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="140563,-266.811 140555,-274.585 140559,-269.53 140554,-271.315 140553,-270.381 140553,-269.447 140558,-267.662 140552,-266.178 140563,-266.811 140563,-266.811"/>
			<text textAnchor="middle" x="140509" y="-294.8">majority</text>
			</g>
			<g id="n887" className="node">
			<ellipse cx="140741" cy="-257" rx="27" ry="18"/>
			<text textAnchor="middle" x="140741" y="-253.3">se </text>
			</g>
			<g id="edge1266" className="edge majority">
			<path strokeWidth="3.2" d="M140616,-257C140641,-257 140677,-257 140704,-257"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="140714,-257 140704,-261.5 140709,-258.1 140704,-258.1 140704,-257 140704,-255.9 140709,-255.9 140704,-252.5 140714,-257 140714,-257"/>
			<text textAnchor="middle" x="140665" y="-260.8">majority</text>
			</g>
			<g id="n888" className="node">
			<ellipse cx="140907" cy="-257" rx="40.0939" ry="18"/>
			<text textAnchor="middle" x="140907" y="-253.3">uitam </text>
			</g>
			<g id="edge192" className="edge majority">
			<path strokeWidth="3.2" d="M140768,-257C140792,-257 140827,-257 140856,-257"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="140867,-257 140857,-261.5 140862,-258.1 140857,-258.1 140857,-257 140857,-255.9 140862,-255.9 140857,-252.5 140867,-257 140867,-257"/>
			<text textAnchor="middle" x="140817" y="-260.8">majority</text>
			</g>
			<g id="n889" className="node">
			<ellipse cx="141101" cy="-257" rx="54.6905" ry="18"/>
			<text textAnchor="middle" x="141101" y="-253.3">nominat, </text>
			</g>
			<g id="edge259" className="edge majority">
			<path strokeWidth="3.2" d="M140947,-257C140973,-257 141007,-257 141036,-257"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="141046,-257 141036,-261.5 141041,-258.1 141036,-258.1 141036,-257 141036,-255.9 141041,-255.9 141036,-252.5 141046,-257 141046,-257"/>
			<text textAnchor="middle" x="140997" y="-260.8">majority</text>
			</g>
			<g id="n890" className="node">
			<ellipse cx="141301" cy="-257" rx="46.5926" ry="18"/>
			<text textAnchor="middle" x="141301" y="-253.3">dicens: </text>
			</g>
			<g id="edge843" className="edge majority">
			<path strokeWidth="3.2" d="M141156,-257C141183,-257 141216,-257 141244,-257"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="141254,-257 141244,-261.5 141249,-258.1 141244,-258.1 141244,-257 141244,-255.9 141249,-255.9 141244,-252.5 141254,-257 141254,-257"/>
			<text textAnchor="middle" x="141205" y="-260.8">majority</text>
			</g>
			<g id="n891" className="node">
			<ellipse cx="141478" cy="-257" rx="31.6951" ry="18"/>
			<text textAnchor="middle" x="141478" y="-253.3">Ego </text>
			</g>
			<g id="edge360" className="edge majority">
			<path strokeWidth="3.2" d="M141348,-257C141375,-257 141410,-257 141436,-257"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="141446,-257 141436,-261.5 141441,-258.1 141436,-258.1 141436,-257 141436,-255.9 141441,-255.9 141436,-252.5 141446,-257 141446,-257"/>
			<text textAnchor="middle" x="141397" y="-260.8">majority</text>
			</g>
			<g id="n892" className="node">
			<ellipse cx="141643" cy="-260" rx="33.2948" ry="18"/>
			<text textAnchor="middle" x="141643" y="-256.3">sum </text>
			</g>
			<g id="edge911" className="edge majority">
			<path strokeWidth="3" d="M141510,-257.571C141535,-258.037 141571,-258.7 141599,-259.215"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="141610,-259.405 141600,-263.72 141605,-260.313 141600,-260.221 141600,-259.221 141600,-258.221 141605,-258.313 141600,-254.722 141610,-259.405 141610,-259.405"/>
			<text textAnchor="middle" x="141559" y="-262.8">majority</text>
			</g>
			<g id="n893" className="node">
			<ellipse cx="141807" cy="-210" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="141807" y="-206.3">uia, </text>
			</g>
			<g id="edge1339" className="edge">
			<path d="M141505,-247.109C141530,-237.73 141571,-224.183 141608,-218 141662,-208.867 141726,-208.016 141766,-208.668"/>
			<polygon fill="#000000" stroke="#000000" points="141776,-208.874 141766,-213.171 141771,-208.773 141766,-208.672 141766,-208.672 141766,-208.672 141771,-208.773 141766,-204.173 141776,-208.874 141776,-208.874"/>
			<text textAnchor="middle" x="141643" y="-221.8">Mü28315</text>
			</g>
			<g id="edge458" className="edge majority">
			<path strokeWidth="3" d="M141672,-251.291C141699,-242.931 141740,-230.268 141770,-221.17"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="141780,-218.113 141771,-225.362 141775,-220.543 141770,-222.018 141770,-221.063 141770,-220.107 141775,-218.632 141769,-216.763 141780,-218.113 141780,-218.113"/>
			<text textAnchor="middle" x="141727" y="-246.8">majority</text>
			</g>
			<g id="n894" className="node">
			<ellipse cx="141982" cy="-210" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="141982" y="-206.3">ueritas </text>
			</g>
			<g id="edge1187" className="edge majority">
			<path strokeWidth="3.2" d="M141838,-210C141862,-210 141896,-210 141926,-210"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="141936,-210 141926,-214.5 141931,-211.1 141926,-211.1 141926,-210 141926,-208.9 141931,-208.9 141926,-205.5 141936,-210 141936,-210"/>
			<text textAnchor="middle" x="141887" y="-213.8">majority</text>
			</g>
			<g id="n895" className="node">
			<ellipse cx="142153" cy="-210" rx="27" ry="18"/>
			<text textAnchor="middle" x="142153" y="-206.3">et </text>
			</g>
			<g id="edge1178" className="edge majority">
			<path strokeWidth="3.2" d="M142028,-210C142056,-210 142090,-210 142116,-210"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="142126,-210 142116,-214.5 142121,-211.1 142116,-211.1 142116,-210 142116,-208.9 142121,-208.9 142116,-205.5 142126,-210 142126,-210"/>
			<text textAnchor="middle" x="142077" y="-213.8">majority</text>
			</g>
			<g id="n896" className="node">
			<ellipse cx="142313" cy="-210" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="142313" y="-206.3">uita. </text>
			</g>
			<g id="edge332" className="edge majority">
			<path strokeWidth="3.2" d="M142180,-210C142204,-210 142240,-210 142268,-210"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="142278,-210 142268,-214.5 142273,-211.1 142268,-211.1 142268,-210 142268,-208.9 142273,-208.9 142268,-205.5 142278,-210 142278,-210"/>
			<text textAnchor="middle" x="142229" y="-213.8">majority</text>
			</g>
			<g id="n897" className="node">
			<ellipse cx="142803" cy="-210" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="142803" y="-206.3">Quarto </text>
			</g>
			<g id="edge882" className="edge">
			<path d="M142348,-210C142430,-210 142645,-210 142747,-210"/>
			<polygon fill="#000000" stroke="#000000" points="142757,-210 142747,-214.5 142752,-210 142747,-210 142747,-210 142747,-210 142752,-210 142747,-205.5 142757,-210 142757,-210"/>
			<text textAnchor="middle" x="142545" y="-213.8">Kr185</text>
			</g>
			<g id="n899" className="node">
			<ellipse cx="142803" cy="-264" rx="50.8918" ry="18"/>
			<text textAnchor="middle" x="142803" y="-260.3">Vlterius </text>
			</g>
			<g id="edge1093" className="edge">
			<path strokeWidth="2" d="M142340,-221.177C142348,-224.191 142357,-227.132 142366,-229 142498,-257.839 142657,-263.5 142742,-264.269"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="142752,-264.341 142742,-268.771 142747,-264.806 142742,-264.771 142742,-264.271 142742,-263.771 142747,-263.806 142742,-259.771 142752,-264.341 142752,-264.341"/>
			<text textAnchor="middle" x="142545" y="-266.8">Ba96, Kr299, Mü28315, MüU151, Sg524, Wi3818</text>
			</g>
			<g id="n898" className="node">
			<ellipse cx="142803" cy="-105" rx="35.9954" ry="18"/>
			<text textAnchor="middle" x="142803" y="-101.3">Item </text>
			</g>
			<g id="edge365" className="edge">
			<path d="M142320,-192.061C142328,-172.987 142342,-143.719 142366,-130 142493,-56.0954 142678,-79.9289 142760,-95.7448"/>
			<polygon fill="#000000" stroke="#000000" points="142770,-97.7218 142760,-100.183 142765,-96.7457 142760,-95.7696 142760,-95.7696 142760,-95.7696 142765,-96.7457 142761,-91.3562 142770,-97.7218 142770,-97.7218"/>
			<text textAnchor="middle" x="142545" y="-133.8">Gr314</text>
			</g>
			<g id="n900" className="node">
			<ellipse cx="143087" cy="-311" rx="63.0888" ry="18"/>
			<text textAnchor="middle" x="143087" y="-307.3">Notandum </text>
			</g>
			<g id="edge981" className="edge">
			<path d="M142322,-227.472C142330,-244.436 142345,-269.415 142366,-282 142565,-399.909 142651,-332.527 142882,-347 142937,-350.451 142952,-359.662 143006,-347 143015,-344.945 143016,-341.787 143024,-338 143030,-335.325 143036,-332.582 143042,-329.917"/>
			<polygon fill="#000000" stroke="#000000" points="143051,-325.815 143044,-333.963 143047,-327.83 143042,-329.844 143042,-329.844 143042,-329.844 143047,-327.83 143040,-325.725 143051,-325.815 143051,-325.815"/>
			<text textAnchor="middle" x="142803" y="-349.8">Mü22405</text>
			</g>
			<g id="n901" className="node">
			<ellipse cx="143087" cy="-199" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="143087" y="-195.3">Nota </text>
			</g>
			<g id="edge709" className="edge">
			<path strokeWidth="1.2" d="M142346,-204.526C142430,-190.691 142667,-156.24 142864,-168 142927,-171.73 142998,-183.025 143043,-190.897"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="143053,-192.669 143042,-195.338 143048,-191.887 143043,-191.007 143043,-190.909 143043,-190.81 143048,-191.69 143044,-186.479 143053,-192.669 143053,-192.669"/>
			<text textAnchor="middle" x="142803" y="-171.8">Kf133, Mü11475</text>
			</g>
			<g id="n1044" className="node">
			<ellipse cx="169582" cy="-76" rx="67.6881" ry="18"/>
			<text textAnchor="middle" x="169582" y="-72.3">Suplicamus </text>
			</g>
			<g id="edge213" className="edge">
			<path d="M142315,-191.811C142318,-161.743 142328,-102.286 142366,-75 142445,-18.6739 142705,-59 142802,-59 142802,-59 142802,-59 169369,-59 169416,-59 169469,-63.2288 169510,-67.4681"/>
			<polygon fill="#000000" stroke="#000000" points="169520,-68.5436 169510,-71.9697 169515,-68.019 169510,-67.4945 169510,-67.4945 169510,-67.4945 169515,-68.019 169511,-63.0194 169520,-68.5436 169520,-68.5436"/>
			<text textAnchor="middle" x="158086" y="-62.8">Er16</text>
			</g>
			<g id="edge438" className="edge">
			<path d="M142842,-200.049C142854,-197.172 142869,-194.425 142882,-193 142937,-187.123 143000,-190.553 143041,-194.18"/>
			<polygon fill="#000000" stroke="#000000" points="143051,-195.101 143041,-198.669 143046,-194.644 143041,-194.188 143041,-194.188 143041,-194.188 143046,-194.644 143042,-189.706 143051,-195.101 143051,-195.101"/>
			<text textAnchor="middle" x="142944" y="-196.8">Kr185</text>
			</g>
			<g id="edge1243" className="edge">
			<path strokeWidth="1.2" d="M142851,-270.15C142892,-275.711 142953,-284.468 143006,-294 143013,-295.202 143020,-296.546 143027,-297.938"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="143037,-300.001 143026,-302.399 143032,-299.094 143027,-298.089 143027,-297.991 143027,-297.893 143032,-298.898 143028,-293.583 143037,-300.001 143037,-300.001"/>
			<text textAnchor="middle" x="142944" y="-297.8">Ba96, MüU151</text>
			</g>
			<g id="n902" className="node">
			<ellipse cx="143087" cy="-365" rx="58.4896" ry="18"/>
			<text textAnchor="middle" x="143087" y="-361.3">sciendum </text>
			</g>
			<g id="edge6" className="edge">
			<path d="M142828,-279.848C142843,-289.332 142863,-301.048 142882,-309 142929,-328.808 142986,-343.696 143027,-353.123"/>
			<polygon fill="#000000" stroke="#000000" points="143037,-355.343 143027,-357.557 143033,-354.254 143028,-353.165 143028,-353.165 143028,-353.165 143033,-354.254 143029,-348.773 143037,-355.343 143037,-355.343"/>
			<text textAnchor="middle" x="142944" y="-349.8">Wi3818</text>
			</g>
			<g id="edge734" className="edge">
			<path strokeWidth="1.2" d="M142835,-249.97C142853,-242.222 142873,-233.642 142882,-231 142911,-222.696 142991,-211.423 143041,-204.712"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="143051,-203.392 143042,-209.156 143046,-204.142 143041,-204.793 143041,-204.694 143041,-204.595 143046,-203.944 143041,-200.233 143051,-203.392 143051,-203.392"/>
			<text textAnchor="middle" x="142944" y="-234.8">Mü28315, Sg524</text>
			</g>
			<g id="edge385" className="edge">
			<path d="M142854,-264.41C142987,-265.503 143350,-268.48 143484,-269.582"/>
			<polygon fill="#000000" stroke="#000000" points="143494,-269.664 143484,-274.082 143489,-269.623 143484,-269.582 143484,-269.582 143484,-269.582 143489,-269.623 143484,-265.082 143494,-269.664 143494,-269.664"/>
			<text textAnchor="middle" x="143087" y="-269.8">Kr299</text>
			</g>
			<g id="edge901" className="edge">
			<path d="M142838,-100.371C142941,-87.8706 143261,-62.3877 143476,-189 143497,-201.417 143513,-224.604 143523,-242.999"/>
			<polygon fill="#000000" stroke="#000000" points="143527,-252.099 143519,-245.235 143525,-247.645 143523,-243.191 143523,-243.191 143523,-243.191 143525,-247.645 143527,-241.146 143527,-252.099 143527,-252.099"/>
			<text textAnchor="middle" x="143087" y="-98.8">Gr314</text>
			</g>
			<g id="edge151" className="edge">
			<path strokeWidth="1.4" d="M143147,-305.556C143236,-297.409 143402,-282.192 143485,-274.581"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="143495,-273.647 143486,-279.042 143490,-274.303 143485,-274.76 143485,-274.561 143485,-274.362 143490,-273.905 143485,-270.079 143495,-273.647 143495,-273.647"/>
			<text textAnchor="middle" x="143322" y="-306.8">Ba96, Mü22405, MüU151</text>
			</g>
			<g id="edge393" className="edge">
			<path d="M143144,-369.075C143222,-372.512 143366,-370.657 143476,-322 143490,-315.645 143504,-304.497 143514,-294.149"/>
			<polygon fill="#000000" stroke="#000000" points="143521,-286.835 143517,-297.173 143518,-290.449 143514,-294.064 143514,-294.064 143514,-294.064 143518,-290.449 143511,-290.955 143521,-286.835 143521,-286.835"/>
			<text textAnchor="middle" x="143322" y="-373.8">Wi3818</text>
			</g>
			<g id="edge831" className="edge">
			<path strokeWidth="1.8" d="M143123,-196.192C143193,-191.86 143352,-188.06 143476,-231 143487,-234.874 143498,-241.366 143508,-247.954"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="143516,-253.957 143505,-251.717 143512,-251.341 143508,-248.401 143508,-248.077 143508,-247.754 143512,-250.694 143511,-244.437 143516,-253.957 143516,-253.957"/>
			<text textAnchor="middle" x="143322" y="-234.8">Kf133, Kr185, Mü11475, Mü28315, Sg524</text>
			</g>
			<g id="n904" className="node">
			<ellipse cx="143721" cy="-270" rx="44.6926" ry="18"/>
			<text textAnchor="middle" x="143721" y="-266.3">dicitur </text>
			</g>
			<g id="edge184" className="edge majority">
			<path strokeWidth="3.2" d="M143578,-270C143604,-270 143638,-270 143666,-270"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="143676,-270 143666,-274.5 143671,-271.1 143666,-271.1 143666,-270 143666,-268.9 143671,-268.9 143666,-265.5 143676,-270 143676,-270"/>
			<text textAnchor="middle" x="143627" y="-273.8">majority</text>
			</g>
			<g id="n905" className="node">
			<ellipse cx="143914" cy="-305" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="143914" y="-301.3">filia </text>
			</g>
			<g id="edge963" className="edge majority">
			<path strokeWidth="3" d="M143762,-277.337C143795,-283.397 143842,-291.943 143874,-297.929"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="143884,-299.775 143874,-302.399 143879,-299.858 143874,-298.956 143875,-297.973 143875,-296.989 143880,-297.89 143875,-293.547 143884,-299.775 143884,-299.775"/>
			<text textAnchor="middle" x="143819" y="-296.8">majority</text>
			</g>
			<g id="n906" className="node">
			<ellipse cx="143914" cy="-251" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="143914" y="-247.3">mater </text>
			</g>
			<g id="edge479" className="edge">
			<path d="M143762,-262.962C143769,-261.856 143777,-260.812 143784,-260 143810,-257.032 143838,-254.911 143862,-253.476"/>
			<polygon fill="#000000" stroke="#000000" points="143873,-252.884 143863,-257.955 143868,-253.173 143863,-253.463 143863,-253.463 143863,-253.463 143868,-253.173 143862,-248.97 143873,-252.884 143873,-252.884"/>
			<text textAnchor="middle" x="143819" y="-263.8">Mü22405</text>
			</g>
			<g id="n907" className="node">
			<ellipse cx="144091" cy="-270" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="144091" y="-266.3">Dei </text>
			</g>
			<g id="edge885" className="edge majority">
			<path strokeWidth="3" d="M143943,-299.377C143973,-293.431 144020,-284.022 144053,-277.459"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="144063,-275.437 144054,-281.81 144058,-277.398 144053,-278.378 144053,-277.398 144053,-276.417 144058,-275.437 144052,-272.985 144063,-275.437 144063,-275.437"/>
			<text textAnchor="middle" x="144009" y="-295.8">majority</text>
			</g>
			<g id="edge154" className="edge">
			<path d="M143955,-254.711C143980,-257.163 144014,-260.55 144044,-264 144047,-264.31 144049,-264.642 144052,-264.984"/>
			<polygon fill="#000000" stroke="#000000" points="144062,-266.252 144052,-269.465 144057,-265.626 144052,-265 144052,-265 144052,-265 144057,-265.626 144053,-260.535 144062,-266.252 144062,-266.252"/>
			<text textAnchor="middle" x="144009" y="-267.8">Mü22405</text>
			</g>
			<g id="n908" className="node">
			<ellipse cx="144262" cy="-270" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="144262" y="-266.3">Patris, </text>
			</g>
			<g id="edge337" className="edge majority">
			<path strokeWidth="3.2" d="M144120,-270C144144,-270 144178,-270 144207,-270"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="144218,-270 144208,-274.5 144213,-271.1 144208,-271.1 144208,-270 144208,-268.9 144213,-268.9 144208,-265.5 144218,-270 144218,-270"/>
			<text textAnchor="middle" x="144169" y="-273.8">majority</text>
			</g>
			<g id="n909" className="node">
			<ellipse cx="144421" cy="-257" rx="27" ry="18"/>
			<text textAnchor="middle" x="144421" y="-253.3">et </text>
			</g>
			<g id="edge1029" className="edge">
			<path d="M144305,-266.482C144330,-264.461 144360,-261.948 144384,-260.017"/>
			<polygon fill="#000000" stroke="#000000" points="144394,-259.175 144384,-264.485 144389,-259.587 144384,-260 144384,-260 144384,-260 144389,-259.587 144383,-255.515 144394,-259.175 144394,-259.175"/>
			<text textAnchor="middle" x="144348" y="-267.8">Go325</text>
			</g>
			<g id="n910" className="node">
			<ellipse cx="144581" cy="-274" rx="44.6926" ry="18"/>
			<text textAnchor="middle" x="144581" y="-270.3">dicitur </text>
			</g>
			<g id="edge833" className="edge majority">
			<path strokeWidth="3" d="M144300,-279.104C144308,-280.683 144316,-282.103 144324,-283 144410,-292.917 144432,-294.231 144518,-286 144522,-285.577 144527,-284.987 144532,-284.295"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="144541,-282.639 144532,-288.724 144537,-284.448 144532,-285.272 144532,-284.285 144531,-283.299 144536,-282.476 144531,-279.847 144541,-282.639 144541,-282.639"/>
			<text textAnchor="middle" x="144421" y="-294.8">majority</text>
			</g>
			<g id="edge294" className="edge">
			<path d="M144448,-259.769C144469,-262.088 144501,-265.473 144528,-268.36"/>
			<polygon fill="#000000" stroke="#000000" points="144538,-269.439 144527,-272.843 144533,-268.904 144528,-268.369 144528,-268.369 144528,-268.369 144533,-268.904 144528,-263.895 144538,-269.439 144538,-269.439"/>
			<text textAnchor="middle" x="144494" y="-270.8">Go325</text>
			</g>
			<g id="n911" className="node">
			<ellipse cx="144766" cy="-274" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="144766" y="-270.3">mater </text>
			</g>
			<g id="edge1088" className="edge majority">
			<path strokeWidth="3.2" d="M144626,-274C144653,-274 144686,-274 144714,-274"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="144724,-274 144714,-278.5 144719,-275.1 144714,-275.1 144714,-274 144714,-272.9 144719,-272.9 144714,-269.5 144724,-274 144724,-274"/>
			<text textAnchor="middle" x="144675" y="-277.8">majority</text>
			</g>
			<g id="n912" className="node">
			<ellipse cx="144991" cy="-256" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="144991" y="-252.3">Dei </text>
			</g>
			<g id="edge387" className="edge majority">
			<path strokeWidth="2.6" d="M144807,-270.761C144848,-267.446 144912,-262.333 144952,-259.078"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="144962,-258.272 144952,-263.563 144957,-259.472 144952,-259.875 144952,-259.077 144952,-258.28 144957,-257.877 144952,-254.592 144962,-258.272 144962,-258.272"/>
			<text textAnchor="middle" x="144857" y="-272.8">majority</text>
			</g>
			<g id="n913" className="node">
			<ellipse cx="145209" cy="-310" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="145209" y="-306.3">Filii, </text>
			</g>
			<g id="edge807" className="edge">
			<path strokeWidth="1.4" d="M144802,-283.313C144810,-285.138 144818,-286.842 144826,-288 144947,-305.766 145093,-309.347 145164,-309.964"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="145174,-310.038 145164,-314.467 145169,-310.202 145164,-310.167 145164,-309.967 145164,-309.767 145169,-309.802 145164,-305.467 145174,-310.038 145174,-310.038"/>
			<text textAnchor="middle" x="144991" y="-311.8">Ba96, Mü22405, Sg524</text>
			</g>
			<g id="edge390" className="edge majority">
			<path strokeWidth="2.6" d="M145020,-257.254C145054,-259.419 145110,-265.274 145156,-281 145163,-283.533 145171,-287.1 145178,-290.87"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="145187,-296.057 145176,-295.015 145182,-294.276 145178,-291.8 145178,-291.105 145179,-290.41 145183,-292.886 145181,-287.196 145187,-296.057 145187,-296.057"/>
			<text textAnchor="middle" x="145125" y="-284.8">majority</text>
			</g>
			<g id="n914" className="node">
			<ellipse cx="145405" cy="-256" rx="32.4942" ry="18"/>
			<text textAnchor="middle" x="145405" y="-252.3">Dei, </text>
			</g>
			<g id="edge1257" className="edge">
			<path strokeWidth="1.2" d="M145231,-296.028C145240,-290.591 145251,-284.773 145262,-281 145295,-269.353 145334,-262.984 145363,-259.595"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="145373,-258.477 145363,-264.047 145368,-259.125 145363,-259.673 145363,-259.574 145363,-259.475 145368,-258.926 145362,-255.101 145373,-258.477 145373,-258.477"/>
			<text textAnchor="middle" x="145308" y="-284.8">Ba96, Sg524</text>
			</g>
			<g id="n915" className="node">
			<ellipse cx="145405" cy="-361" rx="27" ry="18"/>
			<text textAnchor="middle" x="145405" y="-357.3">et </text>
			</g>
			<g id="edge79" className="edge">
			<path d="M145240,-318.111C145247,-320.052 145255,-322.109 145262,-324 145299,-333.732 145341,-344.686 145370,-352.133"/>
			<polygon fill="#000000" stroke="#000000" points="145380,-354.709 145369,-356.562 145375,-353.457 145370,-352.205 145370,-352.205 145370,-352.205 145375,-353.457 145371,-347.848 145380,-354.709 145380,-354.709"/>
			<text textAnchor="middle" x="145308" y="-350.8">Go325</text>
			</g>
			<g id="n916" className="node">
			<ellipse cx="145611" cy="-310" rx="44.6926" ry="18"/>
			<text textAnchor="middle" x="145611" y="-306.3">dicitur </text>
			</g>
			<g id="edge881" className="edge majority">
			<path strokeWidth="2.6" d="M145244,-310C145313,-310 145472,-310 145556,-310"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="145566,-310 145556,-314.5 145561,-310.8 145556,-310.8 145556,-310 145556,-309.2 145561,-309.2 145556,-305.5 145566,-310 145566,-310"/>
			<text textAnchor="middle" x="145405" y="-313.8">majority</text>
			</g>
			<g id="edge224" className="edge">
			<path strokeWidth="1.2" d="M145437,-259.081C145466,-262.529 145511,-269.24 145548,-281 145557,-283.756 145566,-287.478 145574,-291.336"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="145583,-295.705 145572,-295.481 145579,-293.651 145574,-291.507 145574,-291.416 145574,-291.326 145579,-293.471 145576,-287.351 145583,-295.705 145583,-295.705"/>
			<text textAnchor="middle" x="145502" y="-284.8">Ba96, Sg524</text>
			</g>
			<g id="edge143" className="edge">
			<path d="M145431,-354.848C145463,-346.698 145521,-332.151 145563,-321.836"/>
			<polygon fill="#000000" stroke="#000000" points="145572,-319.377 145564,-326.168 145568,-320.59 145563,-321.803 145563,-321.803 145563,-321.803 145568,-320.59 145562,-317.437 145572,-319.377 145572,-319.377"/>
			<text textAnchor="middle" x="145502" y="-350.8">Go325</text>
			</g>
			<g id="n918" className="node">
			<ellipse cx="145814" cy="-310" rx="51.1914" ry="18"/>
			<text textAnchor="middle" x="145814" y="-306.3">sponsus </text>
			</g>
			<g id="edge999" className="edge">
			<path d="M145656,-310C145684,-310 145721,-310 145752,-310"/>
			<polygon fill="#000000" stroke="#000000" points="145763,-310 145753,-314.5 145758,-310 145753,-310 145753,-310 145753,-310 145758,-310 145753,-305.5 145763,-310 145763,-310"/>
			<text textAnchor="middle" x="145709" y="-313.8">Mü28315</text>
			</g>
			<g id="n917" className="node">
			<ellipse cx="145814" cy="-256" rx="50.8918" ry="18"/>
			<text textAnchor="middle" x="145814" y="-252.3">sponssa </text>
			</g>
			<g id="edge289" className="edge">
			<path d="M145647,-299.037C145656,-296.321 145665,-293.48 145674,-291 145703,-282.937 145735,-274.704 145762,-268.25"/>
			<polygon fill="#000000" stroke="#000000" points="145771,-265.868 145763,-272.611 145767,-267.053 145762,-268.239 145762,-268.239 145762,-268.239 145767,-267.053 145761,-263.867 145771,-265.868 145771,-265.868"/>
			<text textAnchor="middle" x="145709" y="-294.8">Sg524</text>
			</g>
			<g id="n919" className="node">
			<ellipse cx="146018" cy="-328" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="146018" y="-324.3">sponsa </text>
			</g>
			<g id="edge710" className="edge majority">
			<path strokeWidth="2.8" d="M145645,-321.637C145655,-324.441 145665,-327.155 145674,-329 145796,-353.015 145830,-353.652 145954,-341 145959,-340.534 145963,-339.884 145968,-339.12"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="145978,-337.293 145969,-343.482 145973,-339.059 145969,-339.938 145968,-339.052 145968,-338.166 145973,-337.287 145968,-334.622 145978,-337.293 145978,-337.293"/>
			<text textAnchor="middle" x="145814" y="-352.8">majority</text>
			</g>
			<g id="edge736" className="edge">
			<path d="M145864,-314.357C145894,-317.012 145932,-320.409 145963,-323.149"/>
			<polygon fill="#000000" stroke="#000000" points="145973,-324.051 145962,-327.646 145968,-323.607 145963,-323.164 145963,-323.164 145963,-323.164 145968,-323.607 145963,-318.681 145973,-324.051 145973,-324.051"/>
			<text textAnchor="middle" x="145919" y="-325.8">Mü28315</text>
			</g>
			<g id="n921" className="node">
			<ellipse cx="146214" cy="-256" rx="49.2915" ry="18"/>
			<text textAnchor="middle" x="146214" y="-252.3">spiritus </text>
			</g>
			<g id="edge257" className="edge">
			<path d="M145865,-256C145939,-256 146076,-256 146154,-256"/>
			<polygon fill="#000000" stroke="#000000" points="146164,-256 146154,-260.5 146159,-256 146154,-256 146154,-256 146154,-256 146159,-256 146154,-251.5 146164,-256 146164,-256"/>
			<text textAnchor="middle" x="146018" y="-259.8">Sg524</text>
			</g>
			<g id="edge589" className="edge majority">
			<path strokeWidth="2.8" d="M146052,-315.786C146084,-303.831 146133,-285.54 146169,-272.339"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="146179,-268.759 146171,-276.458 146174,-271.343 146170,-273.083 146169,-272.239 146169,-271.395 146174,-269.655 146168,-268.02 146179,-268.759 146179,-268.759"/>
			<text textAnchor="middle" x="146113" y="-305.8">majority</text>
			</g>
			<g id="n920" className="node">
			<ellipse cx="146214" cy="-347" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="146214" y="-343.3">Christi. &#160;</text>
			</g>
			<g id="edge642" className="edge">
			<path d="M146063,-332.311C146090,-334.936 146124,-338.323 146154,-341.183"/>
			<polygon fill="#000000" stroke="#000000" points="146164,-342.171 146153,-345.675 146159,-341.684 146154,-341.196 146154,-341.196 146154,-341.196 146159,-341.684 146154,-336.718 146164,-342.171 146164,-342.171"/>
			<text textAnchor="middle" x="146113" y="-342.8">Go325</text>
			</g>
			<g id="n922" className="node">
			<ellipse cx="146412" cy="-252" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="146412" y="-248.3">sancti. &#160;</text>
			</g>
			<g id="edge229" className="edge majority">
			<path strokeWidth="3" d="M146263,-255.011C146291,-254.455 146325,-253.757 146354,-253.173"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="146364,-252.964 146354,-257.667 146359,-254.065 146354,-254.168 146354,-253.168 146354,-252.168 146359,-252.066 146354,-248.669 146364,-252.964 146364,-252.964"/>
			<text textAnchor="middle" x="146315" y="-257.8">majority</text>
			</g>
			<g id="n926" className="node">
			<ellipse cx="146995" cy="-323" rx="35.9954" ry="18"/>
			<text textAnchor="middle" x="146995" y="-319.3">Item </text>
			</g>
			<g id="edge1220" className="edge">
			<path d="M146265,-350.778C146380,-358.607 146672,-373.458 146914,-343 146927,-341.333 146941,-338.234 146954,-334.963"/>
			<polygon fill="#000000" stroke="#000000" points="146964,-332.328 146955,-339.266 146959,-333.624 146954,-334.92 146954,-334.92 146954,-334.92 146959,-333.624 146953,-330.574 146964,-332.328 146964,-332.328"/>
			<text textAnchor="middle" x="146412" y="-362.8">Go325</text>
			</g>
			<g id="edge1077" className="edge">
			<path d="M146452,-262.154C146461,-264.049 146470,-265.806 146478,-267 146670,-294.03 146725,-247.28 146914,-290 146923,-292.023 146942,-299.65 146959,-307.062"/>
			<polygon fill="#000000" stroke="#000000" points="146968,-311.12 146957,-311.216 146963,-309.108 146959,-307.096 146959,-307.096 146959,-307.096 146963,-309.108 146961,-302.976 146968,-311.12 146968,-311.12"/>
			<text textAnchor="middle" x="146696" y="-293.8">Gr314</text>
			</g>
			<g id="n924" className="node">
			<ellipse cx="146995" cy="-269" rx="44.6926" ry="18"/>
			<text textAnchor="middle" x="146995" y="-265.3">Quinto </text>
			</g>
			<g id="edge826" className="edge">
			<path d="M146459,-248.77C146548,-243.32 146747,-234.503 146914,-252 146925,-253.124 146936,-255.073 146947,-257.259"/>
			<polygon fill="#000000" stroke="#000000" points="146957,-259.408 146946,-261.712 146952,-258.36 146947,-257.312 146947,-257.312 146947,-257.312 146952,-258.36 146948,-252.912 146957,-259.408 146957,-259.408"/>
			<text textAnchor="middle" x="146696" y="-255.8">Kr185</text>
			</g>
			<g id="n925" className="node">
			<ellipse cx="146995" cy="-377" rx="63.0888" ry="18"/>
			<text textAnchor="middle" x="146995" y="-373.3">Notandum </text>
			</g>
			<g id="edge1004" className="edge">
			<path d="M146429,-268.997C146441,-281.113 146459,-296.675 146478,-305 146626,-369.599 146819,-379.104 146922,-378.949"/>
			<polygon fill="#000000" stroke="#000000" points="146932,-378.9 146922,-383.447 146927,-378.924 146922,-378.947 146922,-378.947 146922,-378.947 146927,-378.924 146922,-374.447 146932,-378.9 146932,-378.9"/>
			<text textAnchor="middle" x="146696" y="-381.8">Mü22405</text>
			</g>
			<g id="n923" className="node">
			<ellipse cx="146995" cy="-161" rx="50.8918" ry="18"/>
			<text textAnchor="middle" x="146995" y="-157.3">Vlterius </text>
			</g>
			<g id="edge1251" className="edge">
			<path strokeWidth="2.2" d="M146425,-234.581C146437,-219.521 146456,-198.691 146478,-189 146634,-120.993 146841,-138.252 146939,-151.862"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="146949,-153.29 146938,-156.323 146944,-153.173 146939,-152.463 146939,-151.869 146939,-151.275 146944,-151.985 146940,-147.414 146949,-153.29 146949,-153.29"/>
			<text textAnchor="middle" x="146696" y="-192.8">Ba96, Kr299, Mü11475, Mü28315, MüU151, Sg524, Wi3818</text>
			</g>
			<g id="n928" className="node">
			<ellipse cx="147473" cy="-227" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="147473" y="-223.3">nota </text>
			</g>
			<g id="edge492" className="edge">
			<path d="M146452,-241.724C146460,-239.812 146469,-238.078 146478,-237 146843,-191.344 147289,-214.797 147429,-223.916"/>
			<polygon fill="#000000" stroke="#000000" points="147439,-224.598 147429,-228.423 147434,-224.266 147429,-223.933 147429,-223.933 147429,-223.933 147434,-224.266 147429,-219.443 147439,-224.598 147439,-224.598"/>
			<text textAnchor="middle" x="146995" y="-212.8">Kf133</text>
			</g>
			<g id="edge719" className="edge">
			<path d="M147022,-311.306C147038,-305.074 147058,-297.907 147076,-294 147215,-264.309 147260,-312.903 147396,-271 147413,-265.781 147430,-256.202 147444,-247.311"/>
			<polygon fill="#000000" stroke="#000000" points="147453,-241.62 147447,-250.92 147448,-244.4 147444,-247.179 147444,-247.179 147444,-247.179 147448,-244.4 147442,-243.438 147453,-241.62 147453,-241.62"/>
			<text textAnchor="middle" x="147236" y="-297.8">Go325</text>
			</g>
			<g id="n929" className="node">
			<ellipse cx="148019" cy="-242" rx="27" ry="18"/>
			<text textAnchor="middle" x="148019" y="-238.3">de </text>
			</g>
			<g id="edge267" className="edge">
			<path d="M147031,-322.382C147100,-321.017 147261,-317.19 147396,-309 147653,-293.374 147723,-317.154 147974,-259 147978,-258.044 147982,-256.78 147987,-255.371"/>
			<polygon fill="#000000" stroke="#000000" points="147996,-251.899 147988,-259.572 147991,-253.624 147987,-255.349 147987,-255.349 147987,-255.349 147991,-253.624 147985,-251.125 147996,-251.899 147996,-251.899"/>
			<text textAnchor="middle" x="147473" y="-310.8">Gr314</text>
			</g>
			<g id="edge117" className="edge">
			<path d="M147036,-261.749C147049,-259.651 147063,-257.52 147076,-256 147218,-239.437 147254,-243.722 147396,-233 147407,-232.201 147418,-231.312 147429,-230.469"/>
			<polygon fill="#000000" stroke="#000000" points="147439,-229.679 147429,-234.954 147434,-230.074 147429,-230.468 147429,-230.468 147429,-230.468 147434,-230.074 147428,-225.982 147439,-229.679 147439,-229.679"/>
			<text textAnchor="middle" x="147236" y="-259.8">Kr185</text>
			</g>
			<g id="edge1238" className="edge">
			<path d="M147050,-385.99C147204,-409.082 147657,-457.775 147974,-294 147986,-287.897 147996,-277.115 148003,-266.946"/>
			<polygon fill="#000000" stroke="#000000" points="148009,-258.664 148007,-269.465 148006,-262.8 148003,-266.937 148003,-266.937 148003,-266.937 148006,-262.8 147999,-264.408 148009,-258.664 148009,-258.664"/>
			<text textAnchor="middle" x="147473" y="-413.8">Mü22405</text>
			</g>
			<g id="n927" className="node">
			<ellipse cx="147473" cy="-105" rx="58.4896" ry="18"/>
			<text textAnchor="middle" x="147473" y="-101.3">sciendum </text>
			</g>
			<g id="edge104" className="edge">
			<path d="M147026,-146.655C147041,-140.422 147059,-133.709 147076,-130 147189,-105.126 147325,-102.145 147404,-103.027"/>
			<polygon fill="#000000" stroke="#000000" points="147415,-103.168 147404,-107.532 147410,-103.1 147405,-103.032 147405,-103.032 147405,-103.032 147410,-103.1 147405,-98.5324 147415,-103.168 147415,-103.168"/>
			<text textAnchor="middle" x="147236" y="-133.8">Wi3818</text>
			</g>
			<g id="edge456" className="edge">
			<path strokeWidth="1.8" d="M147043,-166.646C147054,-167.836 147065,-169.025 147076,-170 147218,-183.084 147258,-158.247 147396,-193 147411,-196.742 147427,-203.232 147440,-209.546"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="147449,-214.07 147438,-213.657 147444,-212.206 147440,-209.984 147440,-209.625 147440,-209.267 147445,-211.489 147442,-205.594 147449,-214.07 147449,-214.07"/>
			<text textAnchor="middle" x="147236" y="-196.8">Ba96, Mü11475, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="edge739" className="edge">
			<path d="M147046,-161.568C147122,-162.64 147270,-165.565 147396,-173 147547,-181.906 147886,-204.388 147974,-225 147978,-225.964 147982,-227.233 147987,-228.644"/>
			<polygon fill="#000000" stroke="#000000" points="147996,-232.119 147985,-232.891 147991,-230.393 147987,-228.667 147987,-228.667 147987,-228.667 147991,-230.393 147988,-224.444 147996,-232.119 147996,-232.119"/>
			<text textAnchor="middle" x="147473" y="-184.8">Kr299</text>
			</g>
			<g id="edge1227" className="edge">
			<path d="M147530,-100.441C147645,-92.1952 147904,-79.9706 147974,-130 148001,-149.29 148011,-187.511 148015,-213.898"/>
			<polygon fill="#000000" stroke="#000000" points="148017,-224.051 148011,-214.731 148016,-219.094 148015,-214.138 148015,-214.138 148015,-214.138 148016,-219.094 148020,-213.545 148017,-224.051 148017,-224.051"/>
			<text textAnchor="middle" x="147762" y="-133.8">Wi3818</text>
			</g>
			<g id="edge328" className="edge">
			<path strokeWidth="2.2" d="M147508,-227.927C147604,-230.589 147882,-238.244 147982,-240.998"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="147992,-241.279 147982,-245.501 147987,-241.741 147982,-241.603 147982,-241.003 147982,-240.403 147987,-240.541 147982,-236.505 147992,-241.279 147992,-241.279"/>
			<text textAnchor="middle" x="147762" y="-243.8">Ba96, Kf133, Kr185, Mü11475, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="n947" className="node">
			<ellipse cx="152406" cy="-307" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="152406" y="-303.3">Maria </text>
			</g>
			<g id="edge1115" className="edge">
			<path d="M147507,-223.799C147592,-215.879 147824,-196 148018,-196 148018,-196 148018,-196 152072,-196 152197,-196 152232,-210.951 152346,-264 152357,-269.347 152369,-277.057 152379,-284.477"/>
			<polygon fill="#000000" stroke="#000000" points="152387,-290.856 152376,-288.193 152383,-287.758 152379,-284.66 152379,-284.66 152379,-284.66 152383,-287.758 152382,-281.128 152387,-290.856 152387,-290.856"/>
			<text textAnchor="middle" x="149710" y="-199.8">Go325</text>
			</g>
			<g id="n930" className="node">
			<ellipse cx="148184" cy="-242" rx="39.7935" ry="18"/>
			<text textAnchor="middle" x="148184" y="-238.3">dumo </text>
			</g>
			<g id="edge412" className="edge majority">
			<path strokeWidth="3" d="M148046,-242C148070,-242 148105,-242 148134,-242"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="148144,-242 148134,-246.5 148139,-243 148134,-243 148134,-242 148134,-241 148139,-241 148134,-237.5 148144,-242 148144,-242"/>
			<text textAnchor="middle" x="148095" y="-245.8">majority</text>
			</g>
			<g id="n932" className="node">
			<ellipse cx="148667" cy="-296" rx="32.4942" ry="18"/>
			<text textAnchor="middle" x="148667" y="-292.3">siue </text>
			</g>
			<g id="edge818" className="edge">
			<path strokeWidth="2" d="M148215,-253.428C148223,-256.337 148233,-259.158 148242,-261 148380,-289.243 148547,-294.833 148624,-295.845"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="148634,-295.959 148624,-300.347 148629,-296.403 148624,-296.347 148624,-295.847 148624,-295.347 148629,-295.403 148624,-291.347 148634,-295.959 148634,-295.959"/>
			<text textAnchor="middle" x="148429" y="-298.8">Ba96, Gr314, Mü11475, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="n931" className="node">
			<ellipse cx="148667" cy="-242" rx="29.795" ry="18"/>
			<text textAnchor="middle" x="148667" y="-238.3">seu </text>
			</g>
			<g id="edge93" className="edge">
			<path strokeWidth="1.8" d="M148224,-242C148314,-242 148536,-242 148627,-242"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="148637,-242 148627,-246.5 148632,-242.4 148627,-242.4 148627,-242 148627,-241.6 148632,-241.6 148627,-237.5 148637,-242 148637,-242"/>
			<text textAnchor="middle" x="148429" y="-245.8">Kf133, Kr185, Kr299, Mü22405, Wi3818</text>
			</g>
			<g id="n933" className="node">
			<ellipse cx="149067" cy="-256" rx="27" ry="18"/>
			<text textAnchor="middle" x="149067" y="-252.3">de </text>
			</g>
			<g id="edge486" className="edge">
			<path strokeWidth="1.8" d="M148695,-286.725C148702,-284.512 148710,-282.391 148718,-281 148777,-270.161 148953,-261.121 149030,-257.591"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="149040,-257.13 149030,-262.081 149035,-257.757 149030,-257.985 149030,-257.585 149030,-257.186 149035,-256.958 149030,-253.09 149040,-257.13 149040,-257.13"/>
			<text textAnchor="middle" x="148866" y="-284.8">Ba96, Gr314, Mü11475, MüU151, Sg524</text>
			</g>
			<g id="n934" className="node">
			<ellipse cx="149235" cy="-302" rx="35.194" ry="18"/>
			<text textAnchor="middle" x="149235" y="-298.3">rubo </text>
			</g>
			<g id="edge115" className="edge">
			<path d="M148700,-296.335C148795,-297.346 149079,-300.361 149190,-301.53"/>
			<polygon fill="#000000" stroke="#000000" points="149200,-301.637 149190,-306.03 149195,-301.584 149190,-301.531 149190,-301.531 149190,-301.531 149195,-301.584 149190,-297.031 149200,-301.637 149200,-301.637"/>
			<text textAnchor="middle" x="149067" y="-303.8">Mü28315</text>
			</g>
			<g id="edge725" className="edge">
			<path strokeWidth="1.8" d="M148697,-239.741C148756,-235.591 148897,-228.446 149014,-243 149020,-243.744 149026,-244.943 149032,-246.318"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="149042,-248.752 149031,-250.724 149037,-247.942 149032,-246.743 149032,-246.355 149033,-245.967 149037,-247.165 149034,-241.986 149042,-248.752 149042,-248.752"/>
			<text textAnchor="middle" x="148866" y="-246.8">Kf133, Kr185, Kr299, Mü22405, Wi3818</text>
			</g>
			<g id="edge867" className="edge majority">
			<path strokeWidth="2.8" d="M149094,-260.354C149117,-264.608 149152,-271.783 149182,-281 149187,-282.654 149193,-284.624 149198,-286.685"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="149208,-290.445 149197,-290.956 149203,-289.445 149198,-287.608 149199,-286.771 149199,-285.934 149204,-287.771 149200,-282.585 149208,-290.445 149208,-290.445"/>
			<text textAnchor="middle" x="149151" y="-284.8">majority</text>
			</g>
			<g id="n935" className="node">
			<ellipse cx="149410" cy="-302" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="149410" y="-298.3">Moysi </text>
			</g>
			<g id="edge219" className="edge majority">
			<path strokeWidth="3" d="M149270,-302C149295,-302 149329,-302 149357,-302"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="149368,-302 149358,-306.5 149363,-303 149358,-303 149358,-302 149358,-301 149363,-301 149358,-297.5 149368,-302 149368,-302"/>
			<text textAnchor="middle" x="149319" y="-305.8">majority</text>
			</g>
			<g id="n937" className="node">
			<ellipse cx="149710" cy="-302" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="149710" y="-298.3">dictum </text>
			</g>
			<g id="edge661" className="edge">
			<path strokeWidth="1.4" d="M149452,-302C149505,-302 149595,-302 149653,-302"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="149664,-302 149654,-306.5 149659,-302.2 149654,-302.2 149654,-302 149654,-301.8 149659,-301.8 149654,-297.5 149664,-302 149664,-302"/>
			<text textAnchor="middle" x="149558" y="-305.8">Kr185, Kr299, Mü22405</text>
			</g>
			<g id="n936" className="node">
			<ellipse cx="149710" cy="-248" rx="40.8928" ry="18"/>
			<text textAnchor="middle" x="149710" y="-244.3">primo </text>
			</g>
			<g id="edge637" className="edge">
			<path d="M149443,-290.666C149452,-287.862 149461,-285.072 149470,-283 149535,-267.925 149611,-258.09 149660,-252.791"/>
			<polygon fill="#000000" stroke="#000000" points="149670,-251.729 149660,-257.266 149665,-252.26 149660,-252.791 149660,-252.791 149660,-252.791 149665,-252.26 149659,-248.317 149670,-251.729 149670,-251.729"/>
			<text textAnchor="middle" x="149558" y="-286.8">Sg524</text>
			</g>
			<g id="n939" className="node">
			<ellipse cx="150470" cy="-345" rx="37.8943" ry="18"/>
			<text textAnchor="middle" x="150470" y="-341.3">prius </text>
			</g>
			<g id="edge910" className="edge">
			<path strokeWidth="2.2" d="M149442,-313.761C149451,-316.637 149461,-319.357 149470,-321 149555,-336.142 149578,-326.365 149664,-329 149952,-337.794 150298,-342.795 150422,-344.414"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="150432,-344.547 150422,-348.917 150427,-345.082 150422,-345.017 150422,-344.417 150422,-343.817 150427,-343.882 150422,-339.918 150432,-344.547 150432,-344.547"/>
			<text textAnchor="middle" x="149992" y="-344.8">Ba96, Gr314, Kf133, Mü11475, Mü28315, MüU151, Wi3818</text>
			</g>
			<g id="n938" className="node">
			<ellipse cx="150259" cy="-302" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="150259" y="-298.3">est. </text>
			</g>
			<g id="edge1130" className="edge">
			<path strokeWidth="1.4" d="M149756,-302C149861,-302 150119,-302 150218,-302"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="150228,-302 150218,-306.5 150223,-302.2 150218,-302.2 150218,-302 150218,-301.8 150223,-301.8 150218,-297.5 150228,-302 150228,-302"/>
			<text textAnchor="middle" x="149992" y="-305.8">Kr185, Kr299, Mü22405</text>
			</g>
			<g id="n941" className="node">
			<ellipse cx="151034" cy="-343" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="151034" y="-339.3">dictum </text>
			</g>
			<g id="edge83" className="edge">
			<path d="M149751,-245.912C149868,-240.263 150223,-226.8 150516,-253 150690,-268.562 150893,-311.231 150984,-331.724"/>
			<polygon fill="#000000" stroke="#000000" points="150994,-333.932 150983,-336.12 150989,-332.831 150984,-331.73 150984,-331.73 150984,-331.73 150989,-332.831 150985,-327.341 150994,-333.932 150994,-333.932"/>
			<text textAnchor="middle" x="150357" y="-247.8">Sg524</text>
			</g>
			<g id="edge1328" className="edge">
			<path strokeWidth="1.2" d="M150290,-303.056C150319,-304.675 150366,-308.754 150406,-319 150415,-321.377 150425,-324.809 150434,-328.405"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="150443,-332.328 150432,-332.574 150438,-330.471 150434,-328.522 150434,-328.43 150434,-328.337 150438,-330.287 150435,-324.286 150443,-332.328 150443,-332.328"/>
			<text textAnchor="middle" x="150357" y="-322.8">Kr185, Kr299</text>
			</g>
			<g id="n940" className="node">
			<ellipse cx="150470" cy="-280" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="150470" y="-276.3">Iterum </text>
			</g>
			<g id="edge638" className="edge">
			<path d="M150282,-289.993C150290,-286.364 150299,-282.852 150308,-281 150343,-273.564 150383,-273.316 150415,-274.925"/>
			<polygon fill="#000000" stroke="#000000" points="150425,-275.535 150415,-279.438 150420,-275.24 150415,-274.946 150415,-274.946 150415,-274.946 150420,-275.24 150415,-270.453 150425,-275.535 150425,-275.535"/>
			<text textAnchor="middle" x="150357" y="-284.8">Mü22405</text>
			</g>
			<g id="edge325" className="edge">
			<path strokeWidth="2.2" d="M150508,-344.869C150604,-344.527 150863,-343.606 150977,-343.198"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="150988,-343.162 150978,-347.697 150983,-343.78 150978,-343.797 150978,-343.197 150978,-342.597 150983,-342.58 150978,-338.697 150988,-343.162 150988,-343.162"/>
			<text textAnchor="middle" x="150752" y="-347.8">Ba96, Gr314, Kf133, Mü11475, Mü28315, MüU151, Wi3818</text>
			</g>
			<g id="n944" className="node">
			<ellipse cx="151732" cy="-410" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="151732" y="-406.3">Iterum </text>
			</g>
			<g id="edge1120" className="edge">
			<path strokeWidth="1.2" d="M150501,-355.255C150512,-358.283 150523,-361.251 150534,-363 150868,-417.147 150956,-383.254 151294,-396 151431,-401.173 151592,-406.021 151675,-408.424"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="151686,-408.718 151676,-412.928 151681,-408.674 151676,-408.53 151676,-408.43 151676,-408.33 151681,-408.474 151676,-403.932 151686,-408.718 151686,-408.718"/>
			<text textAnchor="middle" x="151147" y="-396.8">Kr185, Kr299</text>
			</g>
			<g id="edge1352" className="edge">
			<path d="M150516,-277.19C150611,-271.467 150840,-259 151033,-259 151033,-259 151033,-259 152072,-259 152175,-259 152295,-281.982 152359,-296.141"/>
			<polygon fill="#000000" stroke="#000000" points="152369,-298.419 152359,-300.62 152364,-297.324 152360,-296.229 152360,-296.229 152360,-296.229 152364,-297.324 152360,-291.838 152369,-298.419 152369,-298.419"/>
			<text textAnchor="middle" x="151481" y="-262.8">Mü22405</text>
			</g>
			<g id="n942" className="node">
			<ellipse cx="151245" cy="-343" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="151245" y="-339.3">est. </text>
			</g>
			<g id="edge18" className="edge majority">
			<path strokeWidth="2.4" d="M151080,-343C151117,-343 151168,-343 151204,-343"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.4" points="151214,-343 151204,-347.5 151209,-343.7 151204,-343.7 151204,-343 151204,-342.3 151209,-342.3 151204,-338.5 151214,-343 151214,-343"/>
			<text textAnchor="middle" x="151147" y="-346.8">majority</text>
			</g>
			<g id="n943" className="node">
			<ellipse cx="151732" cy="-342" rx="35.9954" ry="18"/>
			<text textAnchor="middle" x="151732" y="-338.3">Item </text>
			</g>
			<g id="edge1335" className="edge">
			<path strokeWidth="2" d="M151276,-342.939C151358,-342.77 151588,-342.295 151686,-342.093"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="151696,-342.072 151686,-346.593 151691,-342.582 151686,-342.593 151686,-342.093 151686,-341.593 151691,-341.582 151686,-337.593 151696,-342.072 151696,-342.072"/>
			<text textAnchor="middle" x="151481" y="-345.8">Ba96, Gr314, Mü11475, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="edge708" className="edge">
			<path strokeWidth="1.2" d="M151271,-352.181C151279,-354.451 151287,-356.624 151294,-358 151458,-388.168 151506,-340.378 151668,-381 151677,-383.329 151687,-386.999 151696,-390.955"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="151705,-395.31 151694,-395.095 151700,-393.259 151696,-391.119 151696,-391.029 151696,-390.938 151700,-393.079 151698,-386.962 151705,-395.31 151705,-395.31"/>
			<text textAnchor="middle" x="151481" y="-384.8">Kf133, Wi3818</text>
			</g>
			<g id="n945" className="node">
			<ellipse cx="152071" cy="-305" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="152071" y="-301.3">nota </text>
			</g>
			<g id="edge800" className="edge">
			<path strokeWidth="1.2" d="M151765,-335.228C151775,-333.334 151786,-331.41 151796,-330 151877,-318.628 151972,-311.29 152026,-307.673"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="152037,-306.999 152027,-312.144 152032,-307.426 152027,-307.753 152027,-307.653 152027,-307.554 152032,-307.226 152026,-303.163 152037,-306.999 152037,-306.999"/>
			<text textAnchor="middle" x="151870" y="-333.8">Mü11475, Mü28315</text>
			</g>
			<g id="edge130" className="edge">
			<path strokeWidth="1.6" d="M151768,-343.947C151777,-344.383 151787,-344.781 151796,-345 151862,-346.565 151878,-346.635 151944,-345 152123,-340.554 152170,-355.778 152346,-325 152352,-323.997 152358,-322.606 152364,-321.038"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="152373,-318.268 152365,-325.354 152368,-319.937 152364,-321.317 152364,-321.029 152364,-320.74 152368,-319.36 152362,-316.704 152373,-318.268 152373,-318.268"/>
			<text textAnchor="middle" x="152071" y="-347.8">Ba96, Gr314, MüU151, Sg524</text>
			</g>
			<g id="n946" className="node">
			<ellipse cx="152071" cy="-461" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="152071" y="-457.3">alia </text>
			</g>
			<g id="edge488" className="edge">
			<path d="M151772,-419.179C151780,-420.905 151788,-422.604 151796,-424 151879,-438.811 151977,-450.727 152031,-456.741"/>
			<polygon fill="#000000" stroke="#000000" points="152041,-457.864 152030,-461.226 152036,-457.309 152031,-456.754 152031,-456.754 152031,-456.754 152036,-457.309 152031,-452.282 152041,-457.864 152041,-457.864"/>
			<text textAnchor="middle" x="151870" y="-448.8">Kf133</text>
			</g>
			<g id="edge1076" className="edge">
			<path strokeWidth="1.4" d="M151778,-412.966C151881,-418.251 152144,-422.542 152346,-348 152358,-343.685 152369,-336.506 152379,-329.35"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="152387,-323.141 152382,-332.813 152383,-326.354 152379,-329.408 152379,-329.25 152379,-329.092 152383,-326.037 152376,-325.688 152387,-323.141 152387,-323.141"/>
			<text textAnchor="middle" x="152071" y="-416.8">Kr185, Kr299, Wi3818</text>
			</g>
			<g id="edge203" className="edge">
			<path strokeWidth="1.2" d="M152105,-305.201C152164,-305.552 152285,-306.281 152354,-306.695"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="152364,-306.756 152354,-311.196 152359,-306.826 152354,-306.796 152354,-306.696 152354,-306.596 152359,-306.626 152354,-302.196 152364,-306.756 152364,-306.756"/>
			<text textAnchor="middle" x="152272" y="-309.8">Mü11475, Mü28315</text>
			</g>
			<g id="n948" className="node">
			<ellipse cx="152591" cy="-309" rx="44.6926" ry="18"/>
			<text textAnchor="middle" x="152591" y="-305.3">dicitur </text>
			</g>
			<g id="edge704" className="edge">
			<path d="M152099,-453.948C152121,-448.206 152153,-439.802 152180,-432 152313,-394.087 152470,-346.085 152545,-322.852"/>
			<polygon fill="#000000" stroke="#000000" points="152555,-319.875 152547,-327.129 152550,-321.353 152545,-322.83 152545,-322.83 152545,-322.83 152550,-321.353 152544,-318.531 152555,-319.875 152555,-319.875"/>
			<text textAnchor="middle" x="152406" y="-379.8">Kf133</text>
			</g>
			<g id="edge853" className="edge majority">
			<path strokeWidth="3" d="M152448,-307.444C152474,-307.728 152508,-308.099 152536,-308.408"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="152546,-308.519 152536,-312.909 152541,-309.464 152536,-309.409 152536,-308.41 152536,-307.41 152541,-307.464 152536,-303.91 152546,-308.519 152546,-308.519"/>
			<text textAnchor="middle" x="152497" y="-311.8">majority</text>
			</g>
			<g id="n949" className="node">
			<ellipse cx="152773" cy="-309" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="152773" y="-305.3">uirga </text>
			</g>
			<g id="edge180" className="edge majority">
			<path strokeWidth="3.2" d="M152636,-309C152663,-309 152697,-309 152724,-309"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="152735,-309 152725,-313.5 152730,-310.1 152725,-310.1 152725,-309 152725,-307.9 152730,-307.9 152725,-304.5 152735,-309 152735,-309"/>
			<text textAnchor="middle" x="152685" y="-312.8">majority</text>
			</g>
			<g id="n950" className="node">
			<ellipse cx="152948" cy="-275" rx="37.8943" ry="18"/>
			<text textAnchor="middle" x="152948" y="-271.3">fumi. </text>
			</g>
			<g id="edge1301" className="edge majority">
			<path strokeWidth="3" d="M152805,-298.718C152813,-296.269 152822,-293.836 152830,-292 152853,-286.83 152879,-282.861 152901,-280.063"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="152911,-278.822 152902,-284.527 152906,-280.434 152901,-281.054 152901,-280.062 152901,-279.07 152906,-278.45 152900,-275.597 152911,-278.822 152911,-278.822"/>
			<text textAnchor="middle" x="152861" y="-295.8">majority</text>
			</g>
			<g id="n954" className="node">
			<ellipse cx="153611" cy="-321" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="153611" y="-317.3">que </text>
			</g>
			<g id="edge112" className="edge">
			<path d="M152810,-312.996C152845,-316.487 152900,-321 152947,-321 152947,-321 152947,-321 153444,-321 153487,-321 153536,-321 153570,-321"/>
			<polygon fill="#000000" stroke="#000000" points="153580,-321 153570,-325.5 153575,-321 153570,-321 153570,-321 153570,-321 153575,-321 153570,-316.5 153580,-321 153580,-321"/>
			<text textAnchor="middle" x="153201" y="-324.8">Gr314</text>
			</g>
			<g id="n951" className="node">
			<ellipse cx="153118" cy="-275" rx="33.5952" ry="18"/>
			<text textAnchor="middle" x="153118" y="-271.3">Ipsa </text>
			</g>
			<g id="edge293" className="edge majority">
			<path strokeWidth="3" d="M152986,-275C153012,-275 153047,-275 153074,-275"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="153084,-275 153074,-279.5 153079,-276 153074,-276 153074,-275 153074,-274 153079,-274 153074,-270.5 153084,-275 153084,-275"/>
			<text textAnchor="middle" x="153035" y="-278.8">majority</text>
			</g>
			<g id="n952" className="node">
			<ellipse cx="153278" cy="-275" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="153278" y="-271.3">est </text>
			</g>
			<g id="edge701" className="edge majority">
			<path strokeWidth="3" d="M153152,-275C153178,-275 153213,-275 153240,-275"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="153250,-275 153240,-279.5 153245,-276 153240,-276 153240,-275 153240,-274 153245,-274 153240,-270.5 153250,-275 153250,-275"/>
			<text textAnchor="middle" x="153201" y="-278.8">majority</text>
			</g>
			<g id="n953" className="node">
			<ellipse cx="153443" cy="-275" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="153443" y="-271.3">uirga </text>
			</g>
			<g id="edge767" className="edge majority">
			<path strokeWidth="3" d="M153306,-275C153330,-275 153366,-275 153394,-275"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="153405,-275 153395,-279.5 153400,-276 153395,-276 153395,-275 153395,-274 153400,-274 153395,-270.5 153405,-275 153405,-275"/>
			<text textAnchor="middle" x="153355" y="-278.8">majority</text>
			</g>
			<g id="edge68" className="edge majority">
			<path strokeWidth="2.8" d="M153481,-276.564C153505,-278.476 153536,-282.7 153562,-292 153569,-294.422 153576,-297.862 153582,-301.532"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="153591,-306.979 153580,-305.561 153586,-305.121 153582,-302.497 153582,-301.731 153583,-300.964 153587,-303.589 153585,-297.9 153591,-306.979 153591,-306.979"/>
			<text textAnchor="middle" x="153531" y="-295.8">majority</text>
			</g>
			<g id="n955" className="node">
			<ellipse cx="153611" cy="-225" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="153611" y="-221.3">qua </text>
			</g>
			<g id="edge632" className="edge">
			<path d="M153476,-265.478C153504,-257.063 153544,-244.791 153574,-235.968"/>
			<polygon fill="#000000" stroke="#000000" points="153583,-233.003 153575,-240.196 153579,-234.445 153574,-235.887 153574,-235.887 153574,-235.887 153579,-234.445 153573,-231.578 153583,-233.003 153583,-233.003"/>
			<text textAnchor="middle" x="153531" y="-260.8">Wi3818</text>
			</g>
			<g id="n957" className="node">
			<ellipse cx="154148" cy="-267" rx="43.5923" ry="18"/>
			<text textAnchor="middle" x="154148" y="-263.3">florem </text>
			</g>
			<g id="edge408" className="edge">
			<path strokeWidth="2" d="M153631,-306.828C153639,-301.145 153650,-295.195 153660,-292 153813,-245.123 154005,-253.829 154096,-261.602"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="154106,-262.494 154095,-266.086 154101,-262.547 154096,-262.102 154096,-261.604 154096,-261.106 154101,-261.551 154096,-257.122 154106,-262.494 154106,-262.494"/>
			<text textAnchor="middle" x="153854" y="-295.8">Go325, Gr314, Kr185, Mü11475, Mü22405, Mü28315</text>
			</g>
			<g id="n958" className="node">
			<ellipse cx="154148" cy="-426" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="154148" y="-422.3">floret </text>
			</g>
			<g id="edge168" className="edge">
			<path d="M153619,-338.621C153627,-354.767 153640,-377.806 153660,-389 153804,-470.775 154012,-449.243 154102,-434.489"/>
			<polygon fill="#000000" stroke="#000000" points="154112,-432.819 154103,-438.919 154107,-433.651 154102,-434.482 154102,-434.482 154102,-434.482 154107,-433.651 154102,-430.044 154112,-432.819 154112,-432.819"/>
			<text textAnchor="middle" x="153854" y="-451.8">Kf133</text>
			</g>
			<g id="n956" className="node">
			<ellipse cx="154148" cy="-372" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="154148" y="-368.3">flore </text>
			</g>
			<g id="edge443" className="edge">
			<path d="M153638,-329.628C153645,-331.694 153653,-333.68 153660,-335 153822,-364.37 154017,-370.478 154103,-371.711"/>
			<polygon fill="#000000" stroke="#000000" points="154113,-371.841 154103,-376.213 154108,-371.777 154103,-371.713 154103,-371.713 154103,-371.713 154108,-371.777 154103,-367.213 154113,-371.841 154113,-371.841"/>
			<text textAnchor="middle" x="153854" y="-373.8">Kr299</text>
			</g>
			<g id="n960" className="node">
			<ellipse cx="154712" cy="-321" rx="57.6901" ry="18"/>
			<text textAnchor="middle" x="154712" y="-317.3">Christum </text>
			</g>
			<g id="edge490" className="edge">
			<path strokeWidth="1.4" d="M153642,-321C153788,-321 154433,-321 154644,-321"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="154654,-321 154644,-325.5 154649,-321.2 154644,-321.2 154644,-321 154644,-320.8 154649,-320.8 154644,-316.5 154654,-321 154654,-321"/>
			<text textAnchor="middle" x="154148" y="-324.8">Ba96, MüU151, Sg524</text>
			</g>
			<g id="n959" className="node">
			<ellipse cx="154148" cy="-213" rx="29.795" ry="18"/>
			<text textAnchor="middle" x="154148" y="-209.3">flos </text>
			</g>
			<g id="edge1306" className="edge">
			<path d="M153642,-224.329C153733,-222.291 154006,-216.173 154108,-213.88"/>
			<polygon fill="#000000" stroke="#000000" points="154118,-213.651 154108,-218.375 154113,-213.764 154108,-213.876 154108,-213.876 154108,-213.876 154113,-213.764 154108,-209.377 154118,-213.651 154118,-213.651"/>
			<text textAnchor="middle" x="153854" y="-226.8">Wi3818</text>
			</g>
			<g id="edge799" className="edge">
			<path strokeWidth="2" d="M154191,-264.717C154276,-261.085 154475,-257.566 154636,-292 154647,-294.385 154659,-298.214 154670,-302.318"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="154679,-306.13 154668,-306.606 154674,-304.742 154670,-302.89 154670,-302.426 154670,-301.961 154675,-303.813 154672,-298.246 154679,-306.13 154679,-306.13"/>
			<text textAnchor="middle" x="154442" y="-295.8">Go325, Gr314, Kr185, Mü11475, Mü22405, Mü28315</text>
			</g>
			<g id="edge375" className="edge">
			<path d="M154185,-430.439C154269,-439.089 154479,-452.009 154636,-386 154657,-377.266 154676,-360.492 154690,-346.172"/>
			<polygon fill="#000000" stroke="#000000" points="154697,-338.536 154693,-348.935 154693,-342.208 154690,-345.881 154690,-345.881 154690,-345.881 154693,-342.208 154687,-342.828 154697,-338.536 154697,-338.536"/>
			<text textAnchor="middle" x="154442" y="-440.8">Kf133</text>
			</g>
			<g id="edge993" className="edge">
			<path d="M154182,-370.711C154262,-367.392 154466,-357.208 154636,-335 154641,-334.28 154647,-333.421 154653,-332.487"/>
			<polygon fill="#000000" stroke="#000000" points="154663,-330.741 154654,-336.864 154658,-331.585 154653,-332.428 154653,-332.428 154653,-332.428 154658,-331.585 154652,-327.992 154663,-330.741 154663,-330.741"/>
			<text textAnchor="middle" x="154442" y="-370.8">Kr299</text>
			</g>
			<g id="n961" className="node">
			<ellipse cx="154712" cy="-213" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="154712" y="-209.3">Christi </text>
			</g>
			<g id="edge577" className="edge">
			<path d="M154178,-213C154267,-213 154538,-213 154656,-213"/>
			<polygon fill="#000000" stroke="#000000" points="154666,-213 154656,-217.5 154661,-213 154656,-213 154656,-213 154656,-213 154661,-213 154656,-208.5 154666,-213 154666,-213"/>
			<text textAnchor="middle" x="154442" y="-216.8">Wi3818</text>
			</g>
			<g id="n964" className="node">
			<ellipse cx="155664" cy="-276" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="155664" y="-272.3">protulit. </text>
			</g>
			<g id="edge381" className="edge">
			<path d="M154758,-210.506C154869,-204.978 155166,-194.266 155412,-222 155483,-229.974 155563,-248.976 155613,-262.167"/>
			<polygon fill="#000000" stroke="#000000" points="155623,-264.805 155612,-266.595 155618,-263.525 155613,-262.245 155613,-262.245 155613,-262.245 155618,-263.525 155614,-257.895 155623,-264.805 155623,-264.805"/>
			<text textAnchor="middle" x="155191" y="-225.8">Wi3818</text>
			</g>
			<g id="n963" className="node">
			<ellipse cx="155191" cy="-264" rx="43.5923" ry="18"/>
			<text textAnchor="middle" x="155191" y="-260.3">florem </text>
			</g>
			<g id="edge944" className="edge">
			<path strokeWidth="1.4" d="M154742,-305.653C154756,-299.356 154772,-292.689 154788,-289 154911,-259.91 155060,-259.404 155138,-261.642"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="155148,-261.958 155138,-266.14 155143,-262 155138,-261.842 155138,-261.642 155138,-261.442 155143,-261.6 155138,-257.145 155148,-261.958 155148,-261.958"/>
			<text textAnchor="middle" x="154870" y="-292.8">Ba96, MüU151, Sg524</text>
			</g>
			<g id="n962" className="node">
			<ellipse cx="155191" cy="-369" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="155191" y="-365.3">tulit. </text>
			</g>
			<g id="edge573" className="edge">
			<path d="M154764,-328.883C154772,-330.001 154780,-331.08 154788,-332 154917,-347.399 155070,-359.911 155145,-365.633"/>
			<polygon fill="#000000" stroke="#000000" points="155155,-366.394 155144,-370.12 155150,-366.014 155145,-365.633 155145,-365.633 155145,-365.633 155150,-366.014 155145,-361.146 155155,-366.394 155155,-366.394"/>
			<text textAnchor="middle" x="154870" y="-351.8">Kf133</text>
			</g>
			<g id="edge1149" className="edge">
			<path strokeWidth="2.2" d="M154770,-322.942C154910,-326.925 155285,-332.514 155594,-292 155600,-291.222 155606,-290.161 155612,-288.953"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.2" points="155622,-286.805 155614,-293.276 155618,-288.426 155613,-289.46 155613,-288.873 155612,-288.286 155617,-287.252 155612,-284.47 155622,-286.805 155622,-286.805"/>
			<text textAnchor="middle" x="155191" y="-328.8">Go325, Gr314, Kr185, Kr299, Mü11475, Mü22405, Mü28315</text>
			</g>
			<g id="edge1160" className="edge">
			<path strokeWidth="1.4" d="M155235,-265.086C155318,-267.221 155505,-271.97 155602,-274.44"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="155612,-274.701 155602,-278.945 155607,-274.773 155602,-274.646 155602,-274.446 155602,-274.246 155607,-274.373 155602,-269.947 155612,-274.701 155612,-274.701"/>
			<text textAnchor="middle" x="155512" y="-276.8">Ba96, MüU151, Sg524</text>
			</g>
			<g id="n965" className="node">
			<ellipse cx="155841" cy="-276" rx="27" ry="18"/>
			<text textAnchor="middle" x="155841" y="-272.3">A </text>
			</g>
			<g id="edge414" className="edge">
			<path d="M155227,-365.207C155270,-360.431 155347,-351.894 155412,-344 155583,-323.398 155630,-340.439 155796,-295 155800,-293.78 155805,-292.197 155810,-290.464"/>
			<polygon fill="#000000" stroke="#000000" points="155819,-286.516 155811,-294.524 155814,-288.444 155810,-290.372 155810,-290.372 155810,-290.372 155814,-288.444 155808,-286.22 155819,-286.516 155819,-286.516"/>
			<text textAnchor="middle" x="155664" y="-331.8">Kf133</text>
			</g>
			<g id="edge804" className="edge majority">
			<path strokeWidth="3" d="M155716,-276C155744,-276 155778,-276 155804,-276"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="155814,-276 155804,-280.5 155809,-277 155804,-277 155804,-276 155804,-275 155809,-275 155804,-271.5 155814,-276 155814,-276"/>
			<text textAnchor="middle" x="155765" y="-279.8">majority</text>
			</g>
			<g id="n966" className="node">
			<ellipse cx="155997" cy="-276" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="155997" y="-272.3">qua </text>
			</g>
			<g id="edge585" className="edge majority">
			<path strokeWidth="3.2" d="M155868,-276C155892,-276 155928,-276 155956,-276"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="155966,-276 155956,-280.5 155961,-277.1 155956,-277.1 155956,-276 155956,-274.9 155961,-274.9 155956,-271.5 155966,-276 155966,-276"/>
			<text textAnchor="middle" x="155917" y="-279.8">majority</text>
			</g>
			<g id="n967" className="node">
			<ellipse cx="156165" cy="-276" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="156165" y="-272.3">uirga </text>
			</g>
			<g id="edge395" className="edge majority">
			<path strokeWidth="3.2" d="M156028,-276C156052,-276 156088,-276 156116,-276"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="156126,-276 156116,-280.5 156121,-277.1 156116,-277.1 156116,-276 156116,-274.9 156121,-274.9 156116,-271.5 156126,-276 156126,-276"/>
			<text textAnchor="middle" x="156077" y="-279.8">majority</text>
			</g>
			<g id="n968" className="node">
			<ellipse cx="156359" cy="-276" rx="56.59" ry="18"/>
			<text textAnchor="middle" x="156359" y="-272.3">processit </text>
			</g>
			<g id="edge5" className="edge majority">
			<path strokeWidth="3.2" d="M156203,-276C156229,-276 156263,-276 156292,-276"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="156302,-276 156292,-280.5 156297,-277.1 156292,-277.1 156292,-276 156292,-274.9 156297,-274.9 156292,-271.5 156302,-276 156302,-276"/>
			<text textAnchor="middle" x="156253" y="-279.8">majority</text>
			</g>
			<g id="n969" className="node">
			<ellipse cx="156556" cy="-276" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="156556" y="-272.3">fumus </text>
			</g>
			<g id="edge186" className="edge majority">
			<path strokeWidth="3.2" d="M156416,-276C156443,-276 156476,-276 156504,-276"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="156514,-276 156504,-280.5 156509,-277.1 156504,-277.1 156504,-276 156504,-274.9 156509,-274.9 156504,-271.5 156514,-276 156514,-276"/>
			<text textAnchor="middle" x="156465" y="-279.8">majority</text>
			</g>
			<g id="n970" className="node">
			<ellipse cx="156758" cy="-308" rx="42.7926" ry="18"/>
			<text textAnchor="middle" x="156758" y="-304.3">aroma </text>
			</g>
			<g id="edge803" className="edge">
			<path d="M156596,-282.246C156628,-287.339 156673,-294.565 156707,-300.067"/>
			<polygon fill="#000000" stroke="#000000" points="156718,-301.715 156707,-304.579 156713,-300.925 156708,-300.135 156708,-300.135 156708,-300.135 156713,-300.925 156709,-295.692 156718,-301.715 156718,-301.715"/>
			<text textAnchor="middle" x="156647" y="-297.8">Wi3818</text>
			</g>
			<g id="n971" className="node">
			<ellipse cx="156758" cy="-254" rx="61.99" ry="18"/>
			<text textAnchor="middle" x="156758" y="-250.3">aromatum </text>
			</g>
			<g id="edge228" className="edge majority">
			<path strokeWidth="3" d="M156596,-269.764C156602,-268.77 156609,-267.805 156616,-267 156639,-264.128 156665,-261.578 156688,-259.514"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="156698,-258.63 156689,-263.992 156693,-260.066 156688,-260.506 156688,-259.509 156688,-258.513 156693,-258.074 156688,-255.027 156698,-258.63 156698,-258.63"/>
			<text textAnchor="middle" x="156647" y="-270.8">majority</text>
			</g>
			<g id="n972" className="node">
			<ellipse cx="156945" cy="-269" rx="27" ry="18"/>
			<text textAnchor="middle" x="156945" y="-265.3">id </text>
			</g>
			<g id="edge199" className="edge">
			<path d="M156798,-301.867C156827,-297.174 156866,-290.137 156900,-282 156903,-281.178 156907,-280.251 156911,-279.28"/>
			<polygon fill="#000000" stroke="#000000" points="156920,-276.476 156912,-283.547 156916,-277.848 156911,-279.22 156911,-279.22 156911,-279.22 156916,-277.848 156910,-274.893 156920,-276.476 156920,-276.476"/>
			<text textAnchor="middle" x="156869" y="-297.8">Wi3818</text>
			</g>
			<g id="edge956" className="edge majority">
			<path strokeWidth="3" d="M156818,-258.767C156847,-261.164 156882,-263.994 156908,-266.069"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="156918,-266.881 156908,-270.558 156913,-267.473 156908,-267.069 156908,-266.073 156908,-265.076 156913,-265.48 156908,-261.587 156918,-266.881 156918,-266.881"/>
			<text textAnchor="middle" x="156869" y="-268.8">majority</text>
			</g>
			<g id="n973" className="node">
			<ellipse cx="157098" cy="-269" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="157098" y="-265.3">est </text>
			</g>
			<g id="edge153" className="edge majority">
			<path strokeWidth="3.2" d="M156972,-269C156996,-269 157033,-269 157060,-269"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="157070,-269 157060,-273.5 157065,-270.1 157060,-270.1 157060,-269 157060,-267.9 157065,-267.9 157060,-264.5 157070,-269 157070,-269"/>
			<text textAnchor="middle" x="157021" y="-272.8">majority</text>
			</g>
			<g id="n974" className="node">
			<ellipse cx="157261" cy="-269" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="157261" y="-265.3">fama </text>
			</g>
			<g id="edge1069" className="edge majority">
			<path strokeWidth="3.2" d="M157126,-269C157150,-269 157186,-269 157214,-269"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="157224,-269 157214,-273.5 157219,-270.1 157214,-270.1 157214,-269 157214,-267.9 157219,-267.9 157214,-264.5 157224,-269 157224,-269"/>
			<text textAnchor="middle" x="157175" y="-272.8">majority</text>
			</g>
			<g id="n975" className="node">
			<ellipse cx="157454" cy="-269" rx="57.6901" ry="18"/>
			<text textAnchor="middle" x="157454" y="-265.3">uirtutum, </text>
			</g>
			<g id="edge1316" className="edge majority">
			<path strokeWidth="3.2" d="M157297,-269C157322,-269 157356,-269 157386,-269"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="157396,-269 157386,-273.5 157391,-270.1 157386,-270.1 157386,-269 157386,-267.9 157391,-267.9 157386,-264.5 157396,-269 157396,-269"/>
			<text textAnchor="middle" x="157347" y="-272.8">majority</text>
			</g>
			<g id="n977" className="node">
			<ellipse cx="157655" cy="-281" rx="44.6926" ry="18"/>
			<text textAnchor="middle" x="157655" y="-277.3">iterum </text>
			</g>
			<g id="edge753" className="edge">
			<path d="M157511,-272.375C157539,-274.059 157573,-276.087 157600,-277.753"/>
			<polygon fill="#000000" stroke="#000000" points="157610,-278.373 157600,-282.263 157605,-278.072 157600,-277.771 157600,-277.771 157600,-277.771 157605,-278.072 157601,-273.279 157610,-278.373 157610,-278.373"/>
			<text textAnchor="middle" x="157561" y="-280.8">Kr185</text>
			</g>
			<g id="n976" className="node">
			<ellipse cx="157655" cy="-227" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="157655" y="-223.3">unde </text>
			</g>
			<g id="edge1332" className="edge majority">
			<path strokeWidth="3" d="M157502,-258.993C157536,-252.009 157579,-242.766 157611,-236.011"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="157621,-233.911 157612,-240.38 157617,-235.922 157612,-236.955 157611,-235.977 157611,-234.998 157616,-233.966 157611,-231.574 157621,-233.911 157621,-233.911"/>
			<text textAnchor="middle" x="157561" y="-255.8">majority</text>
			</g>
			<g id="n978" className="node">
			<ellipse cx="157840" cy="-230" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="157840" y="-226.3">ipsam </text>
			</g>
			<g id="edge1304" className="edge">
			<path d="M157693,-271.457C157718,-265.047 157751,-256.287 157780,-248 157785,-246.512 157791,-244.908 157796,-243.293"/>
			<polygon fill="#000000" stroke="#000000" points="157806,-240.396 157797,-247.593 157801,-241.84 157796,-243.285 157796,-243.285 157796,-243.285 157801,-241.84 157795,-238.977 157806,-240.396 157806,-240.396"/>
			<text textAnchor="middle" x="157749" y="-267.8">Kr185</text>
			</g>
			<g id="edge433" className="edge majority">
			<path strokeWidth="3" d="M157692,-227.586C157719,-228.036 157758,-228.664 157788,-229.167"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="157798,-229.332 157788,-233.668 157793,-230.25 157788,-230.168 157788,-229.168 157788,-228.168 157793,-228.25 157788,-224.669 157798,-229.332 157798,-229.332"/>
			<text textAnchor="middle" x="157749" y="-232.8">majority</text>
			</g>
			<g id="n980" className="node">
			<ellipse cx="158350" cy="-230" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="158350" y="-226.3">mirans </text>
			</g>
			<g id="edge560" className="edge">
			<path strokeWidth="1.2" d="M157882,-230C157972,-230 158191,-230 158294,-230"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="158304,-230 158294,-234.5 158299,-230.1 158294,-230.1 158294,-230 158294,-229.9 158299,-229.9 158294,-225.5 158304,-230 158304,-230"/>
			<text textAnchor="middle" x="158086" y="-233.8">Kr185, Wi3818</text>
			</g>
			<g id="n979" className="node">
			<ellipse cx="158350" cy="-173" rx="59.5901" ry="18"/>
			<text textAnchor="middle" x="158350" y="-169.3">ammirans </text>
			</g>
			<g id="edge860" className="edge">
			<path strokeWidth="2" d="M157872,-218.499C157881,-215.626 157891,-212.842 157900,-211 158033,-184.394 158191,-176.393 158280,-174.002"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="158290,-173.744 158280,-178.495 158285,-174.37 158280,-174.497 158280,-173.997 158280,-173.497 158285,-173.371 158280,-169.498 158290,-173.744 158290,-173.744"/>
			<text textAnchor="middle" x="158086" y="-214.8">Ba96, Go325, Kf133, Mü11475, Mü28315, MüU151</text>
			</g>
			<g id="n981" className="node">
			<ellipse cx="158350" cy="-284" rx="51.1914" ry="18"/>
			<text textAnchor="middle" x="158350" y="-280.3">amirans </text>
			</g>
			<g id="edge1230" className="edge">
			<path strokeWidth="1.6" d="M157872,-241.541C157881,-244.414 157891,-247.189 157900,-249 158037,-276.033 158202,-282.379 158288,-283.747"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="158299,-283.891 158289,-288.25 158294,-284.12 158289,-284.05 158289,-283.75 158289,-283.45 158294,-283.52 158289,-279.251 158299,-283.891 158299,-283.891"/>
			<text textAnchor="middle" x="158086" y="-286.8">Gr314, Kr299, Mü22405, Sg524</text>
			</g>
			<g id="n983" className="node">
			<ellipse cx="158872" cy="-262" rx="47.3916" ry="18"/>
			<text textAnchor="middle" x="158872" y="-258.3">Salomo </text>
			</g>
			<g id="edge445" className="edge">
			<path d="M158396,-229.177C158477,-228.259 158653,-228.836 158800,-247 158807,-247.852 158814,-249.032 158821,-250.359"/>
			<polygon fill="#000000" stroke="#000000" points="158831,-252.388 158821,-254.854 158826,-251.414 158822,-250.44 158822,-250.44 158822,-250.44 158826,-251.414 158822,-246.027 158831,-252.388 158831,-252.388"/>
			<text textAnchor="middle" x="158614" y="-250.8">Wi3818</text>
			</g>
			<g id="n982" className="node">
			<ellipse cx="158872" cy="-208" rx="53.0913" ry="18"/>
			<text textAnchor="middle" x="158872" y="-204.3">Salomon </text>
			</g>
			<g id="edge338" className="edge">
			<path d="M158386,-218.399C158399,-214.61 158414,-210.892 158428,-209 158563,-190.724 158724,-197.315 158810,-203.073"/>
			<polygon fill="#000000" stroke="#000000" points="158820,-203.769 158810,-207.57 158815,-203.425 158810,-203.081 158810,-203.081 158810,-203.081 158815,-203.425 158810,-198.591 158820,-203.769 158820,-203.769"/>
			<text textAnchor="middle" x="158614" y="-212.8">Kr185</text>
			</g>
			<g id="edge1123" className="edge">
			<path strokeWidth="2" d="M158406,-166.822C158492,-158.792 158661,-148.975 158800,-178 158811,-180.32 158823,-184.406 158833,-188.829"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2" points="158842,-192.946 158831,-193.005 158838,-191.376 158833,-189.348 158833,-188.891 158834,-188.434 158838,-190.462 158835,-184.778 158842,-192.946 158842,-192.946"/>
			<text textAnchor="middle" x="158614" y="-181.8">Ba96, Go325, Kf133, Mü11475, Mü28315, MüU151</text>
			</g>
			<g id="edge625" className="edge">
			<path d="M158392,-294.208C158404,-296.6 158416,-298.799 158428,-300 158592,-316.907 158640,-340.216 158800,-300 158814,-296.531 158828,-289.794 158840,-282.944"/>
			<polygon fill="#000000" stroke="#000000" points="158849,-277.735 158842,-286.743 158844,-280.31 158840,-282.885 158840,-282.885 158840,-282.885 158844,-280.31 158838,-279.028 158849,-277.735 158849,-277.735"/>
			<text textAnchor="middle" x="158614" y="-325.8">Mü22405</text>
			</g>
			<g id="edge539" className="edge">
			<path strokeWidth="1.4" d="M158401,-281.838C158517,-276.784 158796,-264.436 158800,-262 158813,-254.886 158807,-244.585 158818,-235 158821,-232.143 158825,-229.502 158829,-227.081"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.4" points="158837,-221.835 158831,-230.796 158833,-224.551 158829,-227.094 158829,-226.922 158829,-226.75 158833,-224.206 158826,-223.048 158837,-221.835 158837,-221.835"/>
			<text textAnchor="middle" x="158614" y="-283.8">Gr314, Kr299, Sg524</text>
			</g>
			<g id="n984" className="node">
			<ellipse cx="159123" cy="-208" rx="27" ry="18"/>
			<text textAnchor="middle" x="159123" y="-204.3">in </text>
			</g>
			<g id="edge941" className="edge">
			<path strokeWidth="1.2" d="M158918,-257.435C158960,-252.45 159024,-242.967 159078,-227 159082,-225.714 159087,-224.118 159091,-222.401"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="159100,-218.524 159093,-226.533 159096,-220.545 159091,-222.474 159091,-222.382 159091,-222.289 159096,-220.361 159089,-218.23 159100,-218.524 159100,-218.524"/>
			<text textAnchor="middle" x="159011" y="-256.8">Mü22405, Wi3818</text>
			</g>
			<g id="edge703" className="edge majority">
			<path strokeWidth="2.8" d="M158926,-208C158974,-208 159044,-208 159086,-208"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="159096,-208 159086,-212.5 159091,-208.9 159086,-208.9 159086,-208 159086,-207.1 159091,-207.1 159086,-203.5 159096,-208 159096,-208"/>
			<text textAnchor="middle" x="159011" y="-211.8">majority</text>
			</g>
			<g id="n985" className="node">
			<ellipse cx="159300" cy="-158" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="159300" y="-154.3">cantico </text>
			</g>
			<g id="edge1210" className="edge">
			<path d="M159146,-198.19C159153,-195.329 159161,-192.345 159168,-190 159194,-181.58 159223,-174.199 159248,-168.654"/>
			<polygon fill="#000000" stroke="#000000" points="159258,-166.468 159249,-173.042 159253,-167.559 159248,-168.65 159248,-168.65 159248,-168.65 159253,-167.559 159247,-164.259 159258,-166.468 159258,-166.468"/>
			<text textAnchor="middle" x="159200" y="-193.8">MüU151</text>
			</g>
			<g id="n986" className="node">
			<ellipse cx="159300" cy="-212" rx="50.0912" ry="18"/>
			<text textAnchor="middle" x="159300" y="-208.3">canticis </text>
			</g>
			<g id="edge951" className="edge majority">
			<path strokeWidth="3" d="M159150,-208.599C159174,-209.137 159209,-209.948 159240,-210.643"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="159250,-210.874 159240,-215.144 159245,-211.759 159240,-211.645 159240,-210.645 159240,-209.645 159245,-209.76 159240,-206.146 159250,-210.874 159250,-210.874"/>
			<text textAnchor="middle" x="159200" y="-213.8">majority</text>
			</g>
			<g id="n987" className="node">
			<ellipse cx="159477" cy="-172" rx="27" ry="18"/>
			<text textAnchor="middle" x="159477" y="-168.3">sic </text>
			</g>
			<g id="edge227" className="edge">
			<path d="M159348,-155.21C159373,-154.495 159404,-154.873 159432,-159 159435,-159.519 159439,-160.248 159443,-161.099"/>
			<polygon fill="#000000" stroke="#000000" points="159453,-163.747 159442,-165.499 159448,-162.45 159443,-161.153 159443,-161.153 159443,-161.153 159448,-162.45 159444,-156.807 159453,-163.747 159453,-163.747"/>
			<text textAnchor="middle" x="159400" y="-162.8">MüU151</text>
			</g>
			<g id="edge744" className="edge majority">
			<path strokeWidth="2.8" d="M159343,-202.419C159373,-195.544 159413,-186.389 159441,-179.925"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="159451,-177.674 159442,-184.289 159447,-179.666 159442,-180.78 159441,-179.903 159441,-179.025 159446,-177.911 159440,-175.516 159451,-177.674 159451,-177.674"/>
			<text textAnchor="middle" x="159400" y="-198.8">majority</text>
			</g>
			<g id="n988" className="node">
			<ellipse cx="159640" cy="-181" rx="37.8943" ry="18"/>
			<text textAnchor="middle" x="159640" y="-177.3">dicit: </text>
			</g>
			<g id="edge669" className="edge">
			<path d="M159350,-213.219C159375,-213.518 159405,-213.419 159432,-212 159500,-208.44 159517,-208.533 159584,-196 159588,-195.155 159593,-194.126 159598,-193.007"/>
			<polygon fill="#000000" stroke="#000000" points="159608,-190.45 159599,-197.289 159603,-191.689 159598,-192.929 159598,-192.929 159598,-192.929 159603,-191.689 159597,-188.57 159608,-190.45 159608,-190.45"/>
			<text textAnchor="middle" x="159477" y="-214.8">Go325</text>
			</g>
			<g id="edge78" className="edge majority">
			<path strokeWidth="3" d="M159504,-173.466C159528,-174.792 159563,-176.777 159592,-178.377"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="159602,-178.946 159592,-182.881 159597,-179.666 159592,-179.387 159592,-178.388 159592,-177.39 159597,-177.669 159593,-173.895 159602,-178.946 159602,-178.946"/>
			<text textAnchor="middle" x="159553" y="-180.8">majority</text>
			</g>
			<g id="n989" className="node">
			<ellipse cx="159809" cy="-181" rx="32.4942" ry="18"/>
			<text textAnchor="middle" x="159809" y="-177.3">Que </text>
			</g>
			<g id="edge1030" className="edge majority">
			<path strokeWidth="3.2" d="M159678,-181C159704,-181 159739,-181 159766,-181"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="159776,-181 159766,-185.5 159771,-182.1 159766,-182.1 159766,-181 159766,-179.9 159771,-179.9 159766,-176.5 159776,-181 159776,-181"/>
			<text textAnchor="middle" x="159727" y="-184.8">majority</text>
			</g>
			<g id="n990" className="node">
			<ellipse cx="159968" cy="-181" rx="27.8951" ry="18"/>
			<text textAnchor="middle" x="159968" y="-177.3">est </text>
			</g>
			<g id="edge717" className="edge majority">
			<path strokeWidth="3.2" d="M159842,-181C159867,-181 159903,-181 159930,-181"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="159940,-181 159930,-185.5 159935,-182.1 159930,-182.1 159930,-181 159930,-179.9 159935,-179.9 159930,-176.5 159940,-181 159940,-181"/>
			<text textAnchor="middle" x="159891" y="-184.8">majority</text>
			</g>
			<g id="n991" className="node">
			<ellipse cx="160125" cy="-181" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="160125" y="-177.3">ista </text>
			</g>
			<g id="edge921" className="edge majority">
			<path strokeWidth="3.2" d="M159996,-181C160020,-181 160057,-181 160084,-181"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="160094,-181 160084,-185.5 160089,-182.1 160084,-182.1 160084,-181 160084,-179.9 160089,-179.9 160084,-176.5 160094,-181 160094,-181"/>
			<text textAnchor="middle" x="160045" y="-184.8">majority</text>
			</g>
			<g id="n992" className="node">
			<ellipse cx="160285" cy="-181" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="160285" y="-177.3">que </text>
			</g>
			<g id="edge1190" className="edge majority">
			<path strokeWidth="3.2" d="M160156,-181C160181,-181 160217,-181 160244,-181"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="160254,-181 160244,-185.5 160249,-182.1 160244,-182.1 160244,-181 160244,-179.9 160249,-179.9 160244,-176.5 160254,-181 160254,-181"/>
			<text textAnchor="middle" x="160205" y="-184.8">majority</text>
			</g>
			<g id="n993" className="node">
			<ellipse cx="160468" cy="-181" rx="53.0913" ry="18"/>
			<text textAnchor="middle" x="160468" y="-177.3">ascendit </text>
			</g>
			<g id="edge444" className="edge majority">
			<path strokeWidth="3.2" d="M160316,-181C160340,-181 160374,-181 160404,-181"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="160414,-181 160404,-185.5 160409,-182.1 160404,-182.1 160404,-181 160404,-179.9 160409,-179.9 160404,-176.5 160414,-181 160414,-181"/>
			<text textAnchor="middle" x="160365" y="-184.8">majority</text>
			</g>
			<g id="n994" className="node">
			<ellipse cx="160657" cy="-135" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="160657" y="-131.3">sicut </text>
			</g>
			<g id="edge780" className="edge majority">
			<path strokeWidth="3" d="M160511,-170.562C160542,-163.012 160583,-152.858 160614,-145.333"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="160624,-142.889 160615,-149.648 160619,-145.055 160614,-146.249 160614,-145.278 160614,-144.307 160619,-143.113 160613,-140.908 160624,-142.889 160624,-142.889"/>
			<text textAnchor="middle" x="160571" y="-166.8">majority</text>
			</g>
			<g id="n995" className="node">
			<ellipse cx="160657" cy="-189" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="160657" y="-185.3">per </text>
			</g>
			<g id="edge906" className="edge">
			<path d="M160521,-183.228C160552,-184.536 160590,-186.161 160617,-187.353"/>
			<polygon fill="#000000" stroke="#000000" points="160628,-187.787 160617,-191.855 160623,-187.573 160618,-187.359 160618,-187.359 160618,-187.359 160623,-187.573 160618,-182.863 160628,-187.787 160628,-187.787"/>
			<text textAnchor="middle" x="160571" y="-189.8">Go325</text>
			</g>
			<g id="n998" className="node">
			<ellipse cx="161201" cy="-189" rx="46.5926" ry="18"/>
			<text textAnchor="middle" x="161201" y="-185.3">uirgula </text>
			</g>
			<g id="edge69" className="edge majority">
			<path strokeWidth="2.8" d="M160693,-135.661C160765,-137.361 160931,-143.172 161070,-162 161097,-165.681 161127,-171.744 161151,-177.193"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="161161,-179.482 161151,-181.646 161156,-179.248 161151,-178.136 161152,-177.258 161152,-176.381 161157,-177.493 161153,-172.871 161161,-179.482 161161,-179.482"/>
			<text textAnchor="middle" x="160943" y="-153.8">majority</text>
			</g>
			<g id="n1011" className="node">
			<ellipse cx="163815" cy="-155" rx="46.5926" ry="18"/>
			<text textAnchor="middle" x="163815" y="-151.3">uirgula </text>
			</g>
			<g id="edge51" className="edge">
			<path d="M160689,-126.403C160725,-117.538 160783,-105 160835,-105 160835,-105 160835,-105 163642,-105 163689,-105 163741,-122.626 163775,-136.948"/>
			<polygon fill="#000000" stroke="#000000" points="163785,-141.072 163774,-141.265 163780,-139.101 163776,-137.13 163776,-137.13 163776,-137.13 163780,-139.101 163778,-132.994 163785,-141.072 163785,-141.072"/>
			<text textAnchor="middle" x="162031" y="-108.8">Mü22405</text>
			</g>
			<g id="n996" className="node">
			<ellipse cx="160836" cy="-189" rx="57.6901" ry="18"/>
			<text textAnchor="middle" x="160836" y="-185.3">defectum </text>
			</g>
			<g id="edge1132" className="edge">
			<path d="M160686,-189C160708,-189 160740,-189 160768,-189"/>
			<polygon fill="#000000" stroke="#000000" points="160778,-189 160768,-193.5 160773,-189 160768,-189 160768,-189 160768,-189 160773,-189 160768,-184.5 160778,-189 160778,-189"/>
			<text textAnchor="middle" x="160736" y="-192.8">Go325</text>
			</g>
			<g id="n997" className="node">
			<ellipse cx="161031" cy="-189" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="161031" y="-185.3">sicud </text>
			</g>
			<g id="edge457" className="edge">
			<path d="M160894,-189C160922,-189 160955,-189 160982,-189"/>
			<polygon fill="#000000" stroke="#000000" points="160992,-189 160982,-193.5 160987,-189 160982,-189 160982,-189 160982,-189 160987,-189 160982,-184.5 160992,-189 160992,-189"/>
			<text textAnchor="middle" x="160943" y="-192.8">Go325</text>
			</g>
			<g id="edge751" className="edge">
			<path d="M161070,-189C161092,-189 161119,-189 161144,-189"/>
			<polygon fill="#000000" stroke="#000000" points="161154,-189 161144,-193.5 161149,-189 161144,-189 161144,-189 161144,-189 161149,-189 161144,-184.5 161154,-189 161154,-189"/>
			<text textAnchor="middle" x="161112" y="-192.8">Go325</text>
			</g>
			<g id="n999" className="node">
			<ellipse cx="161381" cy="-189" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="161381" y="-185.3">fumi </text>
			</g>
			<g id="edge538" className="edge majority">
			<path strokeWidth="3" d="M161248,-189C161275,-189 161309,-189 161336,-189"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="161346,-189 161336,-193.5 161341,-190 161336,-190 161336,-189 161336,-188 161341,-188 161336,-184.5 161346,-189 161346,-189"/>
			<text textAnchor="middle" x="161297" y="-192.8">majority</text>
			</g>
			<g id="n1000" className="node">
			<ellipse cx="161541" cy="-189" rx="27" ry="18"/>
			<text textAnchor="middle" x="161541" y="-185.3">ex </text>
			</g>
			<g id="edge1288" className="edge majority">
			<path strokeWidth="3" d="M161416,-189C161441,-189 161477,-189 161504,-189"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="161514,-189 161504,-193.5 161509,-190 161504,-190 161504,-189 161504,-188 161509,-188 161504,-184.5 161514,-189 161514,-189"/>
			<text textAnchor="middle" x="161465" y="-192.8">majority</text>
			</g>
			<g id="n1001" className="node">
			<ellipse cx="161733" cy="-189" rx="66.0889" ry="18"/>
			<text textAnchor="middle" x="161733" y="-185.3">aromatibus </text>
			</g>
			<g id="edge370" className="edge majority">
			<path strokeWidth="3" d="M161568,-189C161591,-189 161625,-189 161657,-189"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="161667,-189 161657,-193.5 161662,-190 161657,-190 161657,-189 161657,-188 161662,-188 161657,-184.5 161667,-189 161667,-189"/>
			<text textAnchor="middle" x="161617" y="-192.8">majority</text>
			</g>
			<g id="n1002" className="node">
			<ellipse cx="161938" cy="-189" rx="39.7935" ry="18"/>
			<text textAnchor="middle" x="161938" y="-185.3">mirre </text>
			</g>
			<g id="edge969" className="edge majority">
			<path strokeWidth="3" d="M161799,-189C161828,-189 161861,-189 161888,-189"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="161898,-189 161888,-193.5 161893,-190 161888,-190 161888,-189 161888,-188 161893,-188 161888,-184.5 161898,-189 161898,-189"/>
			<text textAnchor="middle" x="161849" y="-192.8">majority</text>
			</g>
			<g id="n1003" className="node">
			<ellipse cx="162111" cy="-189" rx="27" ry="18"/>
			<text textAnchor="middle" x="162111" y="-185.3">et </text>
			</g>
			<g id="edge1142" className="edge majority">
			<path strokeWidth="3" d="M161978,-189C162007,-189 162045,-189 162074,-189"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="162084,-189 162074,-193.5 162079,-190 162074,-190 162074,-189 162074,-188 162079,-188 162074,-184.5 162084,-189 162084,-189"/>
			<text textAnchor="middle" x="162031" y="-192.8">majority</text>
			</g>
			<g id="n1004" className="node">
			<ellipse cx="162278" cy="-189" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="162278" y="-185.3">thuris </text>
			</g>
			<g id="edge196" className="edge majority">
			<path strokeWidth="3" d="M162138,-189C162162,-189 162197,-189 162226,-189"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="162236,-189 162226,-193.5 162231,-190 162226,-190 162226,-189 162226,-188 162231,-188 162226,-184.5 162236,-189 162236,-189"/>
			<text textAnchor="middle" x="162187" y="-192.8">majority</text>
			</g>
			<g id="n1005" className="node">
			<ellipse cx="162713" cy="-243" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="162713" y="-239.3">unde </text>
			</g>
			<g id="edge1221" className="edge">
			<path strokeWidth="1.8" d="M162310,-200.447C162319,-203.32 162329,-206.118 162338,-208 162455,-231.944 162595,-239.538 162666,-241.924"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="162677,-242.251 162666,-246.433 162672,-242.493 162667,-242.335 162667,-241.935 162667,-241.535 162672,-241.693 162667,-237.438 162677,-242.251 162677,-242.251"/>
			<text textAnchor="middle" x="162498" y="-244.8">Ba96, Mü11475, Mü28315, MüU151, Sg524</text>
			</g>
			<g id="n1006" className="node">
			<ellipse cx="162713" cy="-189" rx="27" ry="18"/>
			<text textAnchor="middle" x="162713" y="-185.3">et </text>
			</g>
			<g id="edge217" className="edge">
			<path strokeWidth="1.8" d="M162320,-189C162404,-189 162596,-189 162676,-189"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="162686,-189 162676,-193.5 162681,-189.4 162676,-189.4 162676,-189 162676,-188.6 162681,-188.6 162676,-184.5 162686,-189 162686,-189"/>
			<text textAnchor="middle" x="162498" y="-192.8">Go325, Gr314, Kr185, Kr299, Wi3818</text>
			</g>
			<g id="n1008" className="node">
			<ellipse cx="163271" cy="-225" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="163271" y="-221.3">bene </text>
			</g>
			<g id="edge815" className="edge">
			<path d="M162319,-185.38C162390,-179.103 162545,-166.444 162676,-162 162877,-155.168 162928,-163.432 163128,-190 163167,-195.258 163177,-196.902 163216,-207 163221,-208.313 163226,-209.842 163231,-211.445"/>
			<polygon fill="#000000" stroke="#000000" points="163241,-214.579 163230,-215.785 163236,-213.041 163232,-211.503 163232,-211.503 163232,-211.503 163236,-213.041 163233,-207.222 163241,-214.579 163241,-214.579"/>
			<text textAnchor="middle" x="162803" y="-163.8">Kf133</text>
			</g>
			<g id="n1007" className="node">
			<ellipse cx="162992" cy="-291" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="162992" y="-287.3">Maria </text>
			</g>
			<g id="edge1196" className="edge">
			<path d="M162747,-249.882C162754,-251.291 162761,-252.731 162768,-254 162828,-265.079 162897,-276.341 162943,-283.482"/>
			<polygon fill="#000000" stroke="#000000" points="162953,-285.073 162942,-287.964 162948,-284.296 162943,-283.519 162943,-283.519 162943,-283.519 162948,-284.296 162943,-279.074 162953,-285.073 162953,-285.073"/>
			<text textAnchor="middle" x="162803" y="-268.8">Mü28315</text>
			</g>
			<g id="edge190" className="edge">
			<path strokeWidth="1.6" d="M162750,-241.847C162847,-238.7 163116,-229.971 163224,-226.475"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.6" points="163235,-226.144 163225,-230.965 163230,-226.605 163225,-226.767 163225,-226.467 163225,-226.168 163230,-226.006 163225,-221.97 163235,-226.144 163235,-226.144"/>
			<text textAnchor="middle" x="162992" y="-241.8">Ba96, Mü11475, MüU151, Sg524</text>
			</g>
			<g id="edge1341" className="edge">
			<path strokeWidth="1.8" d="M162740,-189.832C162806,-192.02 162982,-198.566 163128,-210 163161,-212.542 163197,-216.438 163225,-219.622"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.8" points="163235,-220.803 163225,-224.128 163230,-220.628 163225,-220.055 163225,-219.657 163225,-219.26 163230,-219.833 163226,-215.187 163235,-220.803 163235,-220.803"/>
			<text textAnchor="middle" x="162992" y="-213.8">Go325, Gr314, Kr185, Kr299, Wi3818</text>
			</g>
			<g id="edge501" className="edge">
			<path d="M163033,-288.292C163079,-284.341 163154,-275.026 163216,-254 163224,-251.368 163232,-247.712 163239,-243.883"/>
			<polygon fill="#000000" stroke="#000000" points="163248,-239.002 163241,-247.755 163244,-241.405 163239,-243.809 163239,-243.809 163239,-243.809 163244,-241.405 163237,-239.863 163248,-239.002 163248,-239.002"/>
			<text textAnchor="middle" x="163181" y="-274.8">Mü28315</text>
			</g>
			<g id="n1009" className="node">
			<ellipse cx="163448" cy="-202" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="163448" y="-198.3">Maria </text>
			</g>
			<g id="edge1096" className="edge majority">
			<path strokeWidth="2.8" d="M163307,-220.456C163333,-217.025 163369,-212.27 163398,-208.446"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="163408,-207.136 163399,-212.901 163403,-208.68 163398,-209.331 163398,-208.439 163398,-207.547 163403,-206.895 163397,-203.977 163408,-207.136 163408,-207.136"/>
			<text textAnchor="middle" x="163357" y="-220.8">majority</text>
			</g>
			<g id="edge621" className="edge">
			<path d="M163305,-231.435C163312,-232.503 163319,-233.443 163326,-234 163353,-236.273 163360,-234.231 163388,-234 163520,-232.889 163556,-255.489 163686,-229 163716,-222.86 163723,-218.114 163750,-203 163763,-195.754 163776,-186.28 163787,-177.666"/>
			<polygon fill="#000000" stroke="#000000" points="163795,-171.297 163790,-181.051 163791,-174.415 163787,-177.533 163787,-177.533 163787,-177.533 163791,-174.415 163784,-174.015 163795,-171.297 163795,-171.297"/>
			<text textAnchor="middle" x="163543" y="-244.8">Mü28315</text>
			</g>
			<g id="n1010" className="node">
			<ellipse cx="163641" cy="-202" rx="44.6926" ry="18"/>
			<text textAnchor="middle" x="163641" y="-198.3">dicitur </text>
			</g>
			<g id="edge1278" className="edge">
			<path d="M163490,-202C163518,-202 163556,-202 163586,-202"/>
			<polygon fill="#000000" stroke="#000000" points="163596,-202 163586,-206.5 163591,-202 163586,-202 163586,-202 163586,-202 163591,-202 163586,-197.5 163596,-202 163596,-202"/>
			<text textAnchor="middle" x="163543" y="-205.8">Kr185</text>
			</g>
			<g id="edge1081" className="edge majority">
			<path strokeWidth="2.6" d="M163480,-190.527C163510,-180.359 163555,-166.193 163596,-160 163651,-151.717 163714,-151.248 163758,-152.378"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="163768,-152.678 163758,-156.884 163763,-153.331 163758,-153.185 163758,-152.386 163758,-151.586 163763,-151.732 163758,-147.888 163768,-152.678 163768,-152.678"/>
			<text textAnchor="middle" x="163641" y="-163.8">majority</text>
			</g>
			<g id="edge874" className="edge">
			<path d="M163678,-192.033C163704,-185.025 163739,-175.582 163766,-167.985"/>
			<polygon fill="#000000" stroke="#000000" points="163776,-165.278 163768,-172.255 163772,-166.596 163767,-167.914 163767,-167.914 163767,-167.914 163772,-166.596 163766,-163.573 163776,-165.278 163776,-165.278"/>
			<text textAnchor="middle" x="163727" y="-187.8">Kr185</text>
			</g>
			<g id="n1012" className="node">
			<ellipse cx="163998" cy="-155" rx="37.8943" ry="18"/>
			<text textAnchor="middle" x="163998" y="-151.3">fumi. </text>
			</g>
			<g id="edge864" className="edge majority">
			<path strokeWidth="3.2" d="M163862,-155C163889,-155 163923,-155 163950,-155"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="163960,-155 163950,-159.5 163955,-156.1 163950,-156.1 163950,-155 163950,-153.9 163955,-153.9 163950,-150.5 163960,-155 163960,-155"/>
			<text textAnchor="middle" x="163911" y="-158.8">majority</text>
			</g>
			<g id="n1013" className="node">
			<ellipse cx="164180" cy="-105" rx="46.2923" ry="18"/>
			<text textAnchor="middle" x="164180" y="-101.3">Dicitur </text>
			</g>
			<g id="edge429" className="edge majority">
			<path strokeWidth="3" d="M164024,-142.051C164033,-137.739 164044,-133.22 164054,-130 164077,-122.488 164104,-116.802 164126,-112.765"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="164136,-111.026 164127,-117.162 164132,-112.862 164127,-113.713 164127,-112.727 164126,-111.742 164131,-110.891 164126,-108.293 164136,-111.026 164136,-111.026"/>
			<text textAnchor="middle" x="164085" y="-133.8">majority</text>
			</g>
			<g id="n1014" className="node">
			<ellipse cx="164370" cy="-144" rx="45.4919" ry="18"/>
			<text textAnchor="middle" x="164370" y="-140.3">Fumus </text>
			</g>
			<g id="edge614" className="edge">
			<path d="M164036,-153.905C164101,-151.964 164237,-147.91 164314,-145.637"/>
			<polygon fill="#000000" stroke="#000000" points="164324,-145.328 164314,-150.123 164319,-145.477 164314,-145.625 164314,-145.625 164314,-145.625 164319,-145.477 164314,-141.127 164324,-145.328 164324,-145.328"/>
			<text textAnchor="middle" x="164180" y="-153.8">Kr185</text>
			</g>
			<g id="edge779" className="edge majority">
			<path strokeWidth="3" d="M164222,-112.889C164246,-117.704 164278,-124.058 164306,-130 164311,-130.976 164315,-132.009 164320,-133.056"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="164330,-135.207 164319,-137.46 164325,-135.113 164320,-134.041 164320,-133.065 164320,-132.088 164325,-133.159 164321,-128.669 164330,-135.207 164330,-135.207"/>
			<text textAnchor="middle" x="164275" y="-133.8">majority</text>
			</g>
			<g id="n1015" className="node">
			<ellipse cx="164551" cy="-105" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="164551" y="-101.3">enim </text>
			</g>
			<g id="edge1114" className="edge majority">
			<path strokeWidth="3" d="M164410,-135.298C164418,-133.535 164426,-131.701 164434,-130 164458,-124.696 164485,-118.849 164507,-114.145"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="164517,-112.002 164508,-118.5 164513,-114.029 164508,-115.078 164507,-114.1 164507,-113.122 164512,-112.073 164507,-109.7 164517,-112.002 164517,-112.002"/>
			<text textAnchor="middle" x="164465" y="-133.8">majority</text>
			</g>
			<g id="n1016" className="node">
			<ellipse cx="164713" cy="-143" rx="27" ry="18"/>
			<text textAnchor="middle" x="164713" y="-139.3">ad </text>
			</g>
			<g id="edge158" className="edge">
			<path d="M164416,-144.798C164422,-144.882 164428,-144.953 164434,-145 164538,-145.825 164564,-147.362 164668,-145 164671,-144.942 164673,-144.866 164676,-144.776"/>
			<polygon fill="#000000" stroke="#000000" points="164686,-144.38 164676,-149.267 164681,-144.575 164676,-144.771 164676,-144.771 164676,-144.771 164681,-144.575 164676,-140.274 164686,-144.38 164686,-144.38"/>
			<text textAnchor="middle" x="164551" y="-149.8">Mü22405</text>
			</g>
			<g id="edge1193" className="edge majority">
			<path strokeWidth="3" d="M164585,-111.457C164608,-116.16 164640,-122.922 164668,-130 164671,-130.873 164675,-131.834 164679,-132.826"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="164688,-135.656 164677,-137.21 164683,-135.232 164678,-133.847 164679,-132.886 164679,-131.925 164684,-133.31 164680,-128.562 164688,-135.656 164688,-135.656"/>
			<text textAnchor="middle" x="164637" y="-133.8">majority</text>
			</g>
			<g id="n1017" className="node">
			<ellipse cx="164886" cy="-143" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="164886" y="-139.3">modum </text>
			</g>
			<g id="edge692" className="edge majority">
			<path strokeWidth="3.2" d="M164740,-143C164763,-143 164798,-143 164827,-143"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="164838,-143 164828,-147.5 164833,-144.1 164828,-144.1 164828,-143 164828,-141.9 164833,-141.9 164828,-138.5 164838,-143 164838,-143"/>
			<text textAnchor="middle" x="164789" y="-146.8">majority</text>
			</g>
			<g id="n1018" className="node">
			<ellipse cx="165079" cy="-143" rx="46.5926" ry="18"/>
			<text textAnchor="middle" x="165079" y="-139.3">uirgule </text>
			</g>
			<g id="edge520" className="edge majority">
			<path strokeWidth="3.2" d="M164934,-143C164961,-143 164994,-143 165022,-143"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="165032,-143 165022,-147.5 165027,-144.1 165022,-144.1 165022,-143 165022,-141.9 165027,-141.9 165022,-138.5 165032,-143 165032,-143"/>
			<text textAnchor="middle" x="164983" y="-146.8">majority</text>
			</g>
			<g id="n1019" className="node">
			<ellipse cx="165266" cy="-143" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="165266" y="-139.3">tenuis </text>
			</g>
			<g id="edge473" className="edge majority">
			<path strokeWidth="3.2" d="M165126,-143C165153,-143 165186,-143 165213,-143"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="165223,-143 165213,-147.5 165218,-144.1 165213,-144.1 165213,-143 165213,-141.9 165218,-141.9 165213,-138.5 165223,-143 165223,-143"/>
			<text textAnchor="middle" x="165175" y="-146.8">majority</text>
			</g>
			<g id="n1021" className="node">
			<ellipse cx="165465" cy="-120" rx="59.2899" ry="18"/>
			<text textAnchor="middle" x="165465" y="-116.3">existentis </text>
			</g>
			<g id="edge335" className="edge">
			<path d="M165305,-136.079C165312,-134.96 165319,-133.882 165326,-133 165349,-129.949 165375,-127.342 165397,-125.281"/>
			<polygon fill="#000000" stroke="#000000" points="165407,-124.373 165398,-129.742 165403,-124.816 165398,-125.26 165398,-125.26 165398,-125.26 165403,-124.816 165397,-120.777 165407,-124.373 165407,-124.373"/>
			<text textAnchor="middle" x="165357" y="-136.8">Go325</text>
			</g>
			<g id="n1020" className="node">
			<ellipse cx="165465" cy="-174" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="165465" y="-170.3">existens </text>
			</g>
			<g id="edge816" className="edge majority">
			<path strokeWidth="3" d="M165306,-149.125C165335,-153.662 165375,-159.917 165407,-165.02"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="165417,-166.632 165407,-169.523 165412,-166.843 165407,-166.066 165407,-165.078 165407,-164.09 165412,-164.867 165408,-160.632 165417,-166.632 165417,-166.632"/>
			<text textAnchor="middle" x="165357" y="-164.8">majority</text>
			</g>
			<g id="n1023" className="node">
			<ellipse cx="165846" cy="-171" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="165846" y="-167.3">sursum </text>
			</g>
			<g id="edge1091" className="edge">
			<path d="M165519,-127.199C165591,-136.843 165718,-153.867 165790,-163.608"/>
			<polygon fill="#000000" stroke="#000000" points="165800,-164.991 165790,-168.117 165795,-164.324 165790,-163.657 165790,-163.657 165790,-163.657 165795,-164.324 165791,-159.197 165800,-164.991 165800,-164.991"/>
			<text textAnchor="middle" x="165661" y="-152.8">Go325</text>
			</g>
			<g id="n1022" className="node">
			<ellipse cx="165661" cy="-222" rx="27" ry="18"/>
			<text textAnchor="middle" x="165661" y="-218.3">se </text>
			</g>
			<g id="edge357" className="edge">
			<path d="M165508,-184.415C165543,-193.098 165593,-205.319 165625,-213.44"/>
			<polygon fill="#000000" stroke="#000000" points="165635,-215.923 165625,-217.89 165631,-214.722 165626,-213.522 165626,-213.522 165626,-213.522 165631,-214.722 165627,-209.153 165635,-215.923 165635,-215.923"/>
			<text textAnchor="middle" x="165577" y="-212.8">Mü28315</text>
			</g>
			<g id="edge30" className="edge majority">
			<path strokeWidth="2.8" d="M165517,-173.595C165588,-173.038 165714,-172.036 165788,-171.454"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="165798,-171.375 165788,-175.954 165793,-172.314 165788,-172.354 165788,-171.454 165788,-170.554 165793,-170.514 165788,-166.954 165798,-171.375 165798,-171.375"/>
			<text textAnchor="middle" x="165661" y="-175.8">majority</text>
			</g>
			<g id="edge645" className="edge">
			<path d="M165686,-215.228C165714,-207.376 165762,-194.246 165797,-184.327"/>
			<polygon fill="#000000" stroke="#000000" points="165807,-181.622 165798,-188.641 165802,-182.964 165797,-184.306 165797,-184.306 165797,-184.306 165802,-182.964 165796,-179.972 165807,-181.622 165807,-181.622"/>
			<text textAnchor="middle" x="165745" y="-211.8">Mü28315</text>
			</g>
			<g id="n1024" className="node">
			<ellipse cx="166045" cy="-171" rx="52.7911" ry="18"/>
			<text textAnchor="middle" x="166045" y="-167.3">procedit </text>
			</g>
			<g id="edge1095" className="edge majority">
			<path strokeWidth="3.2" d="M165894,-171C165920,-171 165953,-171 165982,-171"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="165992,-171 165982,-175.5 165987,-172.1 165982,-172.1 165982,-171 165982,-169.9 165987,-169.9 165982,-166.5 165992,-171 165992,-171"/>
			<text textAnchor="middle" x="165943" y="-174.8">majority</text>
			</g>
			<g id="n1025" className="node">
			<ellipse cx="166233" cy="-171" rx="27" ry="18"/>
			<text textAnchor="middle" x="166233" y="-167.3">sic </text>
			</g>
			<g id="edge1037" className="edge majority">
			<path strokeWidth="2.8" d="M166098,-171C166129,-171 166168,-171 166196,-171"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="166206,-171 166196,-175.5 166201,-171.9 166196,-171.9 166196,-171 166196,-170.1 166201,-170.1 166196,-166.5 166206,-171 166206,-171"/>
			<text textAnchor="middle" x="166147" y="-174.8">majority</text>
			</g>
			<g id="n1026" className="node">
			<ellipse cx="166233" cy="-225" rx="36.2938" ry="18"/>
			<text textAnchor="middle" x="166233" y="-221.3">sicut </text>
			</g>
			<g id="edge394" className="edge">
			<path d="M166086,-182.584C166117,-191.617 166160,-204.11 166191,-213.198"/>
			<polygon fill="#000000" stroke="#000000" points="166201,-216.02 166190,-217.553 166196,-214.626 166191,-213.232 166191,-213.232 166191,-213.232 166196,-214.626 166193,-208.91 166201,-216.02 166201,-216.02"/>
			<text textAnchor="middle" x="166147" y="-212.8">Kf133</text>
			</g>
			<g id="n1035" className="node">
			<ellipse cx="167876" cy="-138" rx="33.5952" ry="18"/>
			<text textAnchor="middle" x="167876" y="-134.3">quia </text>
			</g>
			<g id="edge397" className="edge">
			<path d="M166080,-157.447C166116,-143.878 166177,-125 166232,-125 166232,-125 166232,-125 167688,-125 167738,-125 167795,-129.622 167832,-133.354"/>
			<polygon fill="#000000" stroke="#000000" points="167843,-134.379 167832,-137.852 167838,-133.877 167833,-133.375 167833,-133.375 167833,-133.375 167838,-133.877 167833,-128.897 167843,-134.379 167843,-134.379"/>
			<text textAnchor="middle" x="166919" y="-128.8">Wi3818</text>
			</g>
			<g id="n1027" className="node">
			<ellipse cx="166410" cy="-176" rx="41.6928" ry="18"/>
			<text textAnchor="middle" x="166410" y="-172.3">Maria </text>
			</g>
			<g id="edge380" className="edge majority">
			<path strokeWidth="2.8" d="M166260,-171.749C166286,-172.486 166326,-173.632 166358,-174.549"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="166368,-174.837 166358,-179.05 166363,-175.594 166358,-175.451 166358,-174.552 166358,-173.652 166363,-173.795 166358,-170.053 166368,-174.837 166368,-174.837"/>
			<text textAnchor="middle" x="166319" y="-177.8">majority</text>
			</g>
			<g id="edge1269" className="edge">
			<path d="M166266,-216.404C166289,-210.016 166321,-201.051 166350,-193 166355,-191.607 166360,-190.137 166365,-188.668"/>
			<polygon fill="#000000" stroke="#000000" points="166375,-185.865 166367,-192.949 166370,-187.244 166365,-188.623 166365,-188.623 166365,-188.623 166370,-187.244 166364,-184.298 166375,-185.865 166375,-185.865"/>
			<text textAnchor="middle" x="166319" y="-212.8">Kf133</text>
			</g>
			<g id="n1028" className="node">
			<ellipse cx="166592" cy="-176" rx="42.4939" ry="18"/>
			<text textAnchor="middle" x="166592" y="-172.3">tenuis </text>
			</g>
			<g id="edge349" className="edge majority">
			<path strokeWidth="3" d="M166452,-176C166478,-176 166512,-176 166539,-176"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="166550,-176 166540,-180.5 166545,-177 166540,-177 166540,-176 166540,-175 166545,-175 166540,-171.5 166550,-176 166550,-176"/>
			<text textAnchor="middle" x="166501" y="-179.8">majority</text>
			</g>
			<g id="n1029" className="node">
			<ellipse cx="166762" cy="-176" rx="29.795" ry="18"/>
			<text textAnchor="middle" x="166762" y="-172.3">fuit </text>
			</g>
			<g id="edge124" className="edge majority">
			<path strokeWidth="3" d="M166635,-176C166661,-176 166696,-176 166722,-176"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="166732,-176 166722,-180.5 166727,-177 166722,-177 166722,-176 166722,-175 166727,-175 166722,-171.5 166732,-176 166732,-176"/>
			<text textAnchor="middle" x="166683" y="-179.8">majority</text>
			</g>
			<g id="n1030" className="node">
			<ellipse cx="166919" cy="-176" rx="29.4969" ry="18"/>
			<text textAnchor="middle" x="166919" y="-172.3">per </text>
			</g>
			<g id="edge724" className="edge majority">
			<path strokeWidth="3" d="M166792,-176C166817,-176 166852,-176 166879,-176"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="166890,-176 166880,-180.5 166885,-177 166880,-177 166880,-176 166880,-175 166885,-175 166880,-171.5 166890,-176 166890,-176"/>
			<text textAnchor="middle" x="166841" y="-179.8">majority</text>
			</g>
			<g id="n1031" className="node">
			<ellipse cx="167116" cy="-173" rx="70.3881" ry="18"/>
			<text textAnchor="middle" x="167116" y="-169.3">humilitatem </text>
			</g>
			<g id="edge699" className="edge majority">
			<path strokeWidth="3" d="M166948,-175.564C166971,-175.212 167005,-174.699 167035,-174.224"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="167046,-174.065 167036,-178.719 167041,-175.142 167036,-175.219 167036,-174.219 167036,-173.219 167041,-173.142 167036,-169.72 167046,-174.065 167046,-174.065"/>
			<text textAnchor="middle" x="166997" y="-178.8">majority</text>
			</g>
			<g id="n1032" className="node">
			<ellipse cx="167311" cy="-171" rx="27" ry="18"/>
			<text textAnchor="middle" x="167311" y="-167.3">et </text>
			</g>
			<g id="edge391" className="edge majority">
			<path strokeWidth="3" d="M167186,-172.281C167216,-171.976 167249,-171.634 167273,-171.38"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="167284,-171.274 167274,-175.877 167279,-172.325 167274,-172.377 167274,-171.377 167274,-170.377 167279,-170.326 167274,-166.878 167284,-171.274 167284,-171.274"/>
			<text textAnchor="middle" x="167235" y="-175.8">majority</text>
			</g>
			<g id="n1033" className="node">
			<ellipse cx="167484" cy="-171" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="167484" y="-167.3">sursum </text>
			</g>
			<g id="edge288" className="edge majority">
			<path strokeWidth="3" d="M167338,-171C167361,-171 167396,-171 167425,-171"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="167436,-171 167426,-175.5 167431,-172 167426,-172 167426,-171 167426,-170 167431,-170 167426,-166.5 167436,-171 167436,-171"/>
			<text textAnchor="middle" x="167387" y="-174.8">majority</text>
			</g>
			<g id="n1034" className="node">
			<ellipse cx="167687" cy="-171" rx="56.59" ry="18"/>
			<text textAnchor="middle" x="167687" y="-167.3">processit </text>
			</g>
			<g id="edge925" className="edge majority">
			<path strokeWidth="3" d="M167532,-171C167558,-171 167591,-171 167620,-171"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="167630,-171 167620,-175.5 167625,-172 167620,-172 167620,-171 167620,-170 167625,-170 167620,-166.5 167630,-171 167630,-171"/>
			<text textAnchor="middle" x="167581" y="-174.8">majority</text>
			</g>
			<g id="edge447" className="edge majority">
			<path strokeWidth="3" d="M167737,-162.33C167767,-157.023 167805,-150.31 167834,-145.281"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="167844,-143.51 167835,-149.679 167839,-145.363 167834,-146.232 167834,-145.247 167834,-144.263 167839,-143.394 167833,-140.816 167844,-143.51 167844,-143.51"/>
			<text textAnchor="middle" x="167793" y="-160.8">majority</text>
			</g>
			<g id="n1036" className="node">
			<ellipse cx="168045" cy="-138" rx="37.0935" ry="18"/>
			<text textAnchor="middle" x="168045" y="-134.3">Deus </text>
			</g>
			<g id="edge845" className="edge majority">
			<path strokeWidth="3.2" d="M167910,-138C167935,-138 167970,-138 167998,-138"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="168008,-138 167998,-142.5 168003,-139.1 167998,-139.1 167998,-138 167998,-136.9 168003,-136.9 167998,-133.5 168008,-138 168008,-138"/>
			<text textAnchor="middle" x="167959" y="-141.8">majority</text>
			</g>
			<g id="n1037" className="node">
			<ellipse cx="168232" cy="-138" rx="51.9908" ry="18"/>
			<text textAnchor="middle" x="168232" y="-134.3">respexit </text>
			</g>
			<g id="edge330" className="edge majority">
			<path strokeWidth="3.2" d="M168082,-138C168107,-138 168141,-138 168170,-138"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="168180,-138 168170,-142.5 168175,-139.1 168170,-139.1 168170,-138 168170,-136.9 168175,-136.9 168170,-133.5 168180,-138 168180,-138"/>
			<text textAnchor="middle" x="168131" y="-141.8">majority</text>
			</g>
			<g id="n1038" className="node">
			<ellipse cx="168452" cy="-138" rx="70.3881" ry="18"/>
			<text textAnchor="middle" x="168452" y="-134.3">humilitatem </text>
			</g>
			<g id="edge675" className="edge majority">
			<path strokeWidth="3.2" d="M168284,-138C168310,-138 168342,-138 168371,-138"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="168382,-138 168372,-142.5 168377,-139.1 168372,-139.1 168372,-138 168372,-136.9 168377,-136.9 168372,-133.5 168382,-138 168382,-138"/>
			<text textAnchor="middle" x="168333" y="-141.8">majority</text>
			</g>
			<g id="n1039" className="node">
			<ellipse cx="168664" cy="-138" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="168664" y="-134.3">ancille </text>
			</g>
			<g id="edge29" className="edge majority">
			<path strokeWidth="3.2" d="M168522,-138C168551,-138 168583,-138 168610,-138"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="168620,-138 168610,-142.5 168615,-139.1 168610,-139.1 168610,-138 168610,-136.9 168615,-136.9 168610,-133.5 168620,-138 168620,-138"/>
			<text textAnchor="middle" x="168571" y="-141.8">majority</text>
			</g>
			<g id="n1040" className="node">
			<ellipse cx="168836" cy="-138" rx="29.795" ry="18"/>
			<text textAnchor="middle" x="168836" y="-134.3">sue </text>
			</g>
			<g id="edge663" className="edge majority">
			<path strokeWidth="3.2" d="M168708,-138C168735,-138 168770,-138 168796,-138"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="168806,-138 168796,-142.5 168801,-139.1 168796,-139.1 168796,-138 168796,-136.9 168801,-136.9 168796,-133.5 168806,-138 168806,-138"/>
			<text textAnchor="middle" x="168757" y="-141.8">majority</text>
			</g>
			<g id="n1041" className="node">
			<ellipse cx="168994" cy="-105" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="168994" y="-101.3">supple </text>
			</g>
			<g id="edge979" className="edge">
			<path d="M168862,-128.715C168869,-126.271 168877,-123.813 168884,-122 168902,-117.462 168923,-113.89 168941,-111.216"/>
			<polygon fill="#000000" stroke="#000000" points="168951,-109.784 168942,-115.639 168946,-110.484 168941,-111.184 168941,-111.184 168941,-111.184 168946,-110.484 168941,-106.728 168951,-109.784 168951,-109.784"/>
			<text textAnchor="middle" x="168908" y="-125.8">Go325</text>
			</g>
			<g id="n1043" className="node">
			<ellipse cx="169368" cy="-105" rx="47.3916" ry="18"/>
			<text textAnchor="middle" x="169368" y="-101.3">Marie. &#160;</text>
			</g>
			<g id="edge823" className="edge majority">
			<path strokeWidth="3" d="M168866,-138.626C168932,-139.813 169098,-141.489 169236,-132 169265,-129.977 169273,-129.943 169302,-124 169308,-122.697 169315,-121.073 169321,-119.329"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3" points="169332,-116.516 169323,-123.548 169327,-118.828 169322,-120.178 169322,-119.215 169322,-118.253 169326,-116.903 169321,-114.883 169332,-116.516 169332,-116.516"/>
			<text textAnchor="middle" x="169087" y="-141.8">majority</text>
			</g>
			<g id="n1042" className="node">
			<ellipse cx="169186" cy="-105" rx="49.2915" ry="18"/>
			<text textAnchor="middle" x="169186" y="-101.3">uirginis </text>
			</g>
			<g id="edge936" className="edge">
			<path d="M169039,-105C169065,-105 169098,-105 169126,-105"/>
			<polygon fill="#000000" stroke="#000000" points="169136,-105 169126,-109.5 169131,-105 169126,-105 169126,-105 169126,-105 169131,-105 169126,-100.5 169136,-105 169136,-105"/>
			<text textAnchor="middle" x="169087" y="-108.8">Go325</text>
			</g>
			<g id="edge913" className="edge">
			<path d="M169236,-105C169259,-105 169286,-105 169310,-105"/>
			<polygon fill="#000000" stroke="#000000" points="169320,-105 169310,-109.5 169315,-105 169310,-105 169310,-105 169310,-105 169315,-105 169310,-100.5 169320,-105 169320,-105"/>
			<text textAnchor="middle" x="169278" y="-108.8">Go325</text>
			</g>
			<g id="edge712" className="edge majority">
			<path strokeWidth="3.2" d="M169413,-98.9912C169441,-95.1139 169479,-89.9859 169511,-85.5569"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="169521,-84.1459 169512,-89.9598 169517,-85.9135 169512,-86.5912 169512,-85.5013 169511,-84.4115 169516,-83.7338 169511,-81.0428 169521,-84.1459 169521,-84.1459"/>
			<text textAnchor="middle" x="169465" y="-98.8">majority</text>
			</g>
			<g id="n1045" className="node">
			<ellipse cx="169779" cy="-102" rx="30.5947" ry="18"/>
			<text textAnchor="middle" x="169779" y="-98.3">Hic </text>
			</g>
			<g id="edge1028" className="edge majority">
			<path strokeWidth="3.2" d="M169643,-83.9776C169674,-88.147 169711,-93.131 169739,-96.7999"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="169749,-98.1372 169739,-101.276 169744,-98.5667 169739,-97.9058 169739,-96.8155 169739,-95.7251 169744,-96.386 169740,-92.355 169749,-98.1372 169749,-98.1372"/>
			<text textAnchor="middle" x="169699" y="-98.8">majority</text>
			</g>
			<g id="__END__" className="node">
			<ellipse cx="170959" cy="-102" rx="48.9926" ry="18"/>
			<text textAnchor="middle" x="170959" y="-98.3">#END#</text>
			</g>
			<g id="edge1338" className="edge">
			<path d="M169641,-66.9363C169680,-61.6445 169732,-56 169778,-56 169778,-56 169778,-56 170762,-56 170816,-56 170876,-72.6362 170915,-85.8993"/>
			<polygon fill="#000000" stroke="#000000" points="170925,-89.1864 170914,-90.1761 170920,-87.5545 170915,-85.9225 170915,-85.9225 170915,-85.9225 170920,-87.5545 170917,-81.6689 170925,-89.1864 170925,-89.1864"/>
			<text textAnchor="middle" x="170253" y="-59.8">Mü22405</text>
			</g>
			<g id="n1046" className="node">
			<ellipse cx="169957" cy="-102" rx="38.1938" ry="18"/>
			<text textAnchor="middle" x="169957" y="-98.3">autor </text>
			</g>
			<g id="edge842" className="edge majority">
			<path strokeWidth="2.8" d="M169810,-102C169837,-102 169877,-102 169908,-102"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="169919,-102 169909,-106.5 169914,-102.9 169909,-102.9 169909,-102 169909,-101.1 169914,-101.1 169909,-97.5001 169919,-102 169919,-102"/>
			<text textAnchor="middle" x="169859" y="-105.8">majority</text>
			</g>
			<g id="n1047" className="node">
			<ellipse cx="170152" cy="-153" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="170152" y="-149.3">inuocat </text>
			</g>
			<g id="edge1219" className="edge">
			<path strokeWidth="1.2" d="M169804,-112.772C169811,-115.885 169820,-118.983 169828,-121 169919,-143.48 170028,-150.254 170094,-152.243"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="170104,-152.523 170094,-156.743 170099,-152.484 170094,-152.345 170094,-152.245 170094,-152.145 170099,-152.284 170094,-147.747 170104,-152.523 170104,-152.523"/>
			<text textAnchor="middle" x="169957" y="-150.8">Kr185, Kr299</text>
			</g>
			<g id="edge125" className="edge majority">
			<path strokeWidth="2.8" d="M169994,-107.181C170020,-111.352 170055,-118.004 170086,-127 170094,-129.421 170103,-132.478 170111,-135.638"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.8" points="170120,-139.362 170109,-139.839 170115,-138.347 170111,-136.495 170111,-135.659 170111,-134.823 170116,-136.675 170113,-131.479 170120,-139.362 170120,-139.362"/>
			<text textAnchor="middle" x="170055" y="-130.8">majority</text>
			</g>
			<g id="n1048" className="node">
			<ellipse cx="170354" cy="-153" rx="48.1917" ry="18"/>
			<text textAnchor="middle" x="170354" y="-149.3">beatam </text>
			</g>
			<g id="edge1141" className="edge majority">
			<path strokeWidth="3.2" d="M170200,-153C170229,-153 170266,-153 170296,-153"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="170306,-153 170296,-157.5 170301,-154.1 170296,-154.1 170296,-153 170296,-151.9 170301,-151.9 170296,-148.5 170306,-153 170306,-153"/>
			<text textAnchor="middle" x="170253" y="-156.8">majority</text>
			</g>
			<g id="n1049" className="node">
			<ellipse cx="170556" cy="-153" rx="55.7903" ry="18"/>
			<text textAnchor="middle" x="170556" y="-149.3">uirginem </text>
			</g>
			<g id="edge1106" className="edge majority">
			<path strokeWidth="3.2" d="M170402,-153C170428,-153 170461,-153 170490,-153"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="3.2" points="170500,-153 170490,-157.5 170495,-154.1 170490,-154.1 170490,-153 170490,-151.9 170495,-151.9 170490,-148.5 170500,-153 170500,-153"/>
			<text textAnchor="middle" x="170451" y="-156.8">majority</text>
			</g>
			<g id="n1050" className="node">
			<ellipse cx="170761" cy="-207" rx="34.394" ry="18"/>
			<text textAnchor="middle" x="170761" y="-203.3">dicit.</text>
			</g>
			<g id="edge1290" className="edge">
			<path d="M170600,-164.32C170635,-173.778 170685,-187.164 170720,-196.411"/>
			<polygon fill="#000000" stroke="#000000" points="170730,-199.021 170719,-200.799 170725,-197.736 170720,-196.45 170720,-196.45 170720,-196.45 170725,-197.736 170721,-192.102 170730,-199.021 170730,-199.021"/>
			<text textAnchor="middle" x="170661" y="-190.8">Kr185</text>
			</g>
			<g id="n1051" className="node">
			<ellipse cx="170761" cy="-153" rx="44.393" ry="18"/>
			<text textAnchor="middle" x="170761" y="-149.3">dicens.</text>
			</g>
			<g id="edge517" className="edge majority">
			<path strokeWidth="2.6" d="M170612,-153C170641,-153 170677,-153 170707,-153"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="170717,-153 170707,-157.5 170712,-153.8 170707,-153.8 170707,-153 170707,-152.2 170712,-152.2 170707,-148.5 170717,-153 170717,-153"/>
			<text textAnchor="middle" x="170661" y="-156.8">majority</text>
			</g>
			<g id="edge923" className="edge">
			<path strokeWidth="1.2" d="M170595,-139.978C170625,-130.073 170670,-117.135 170710,-111 170775,-101.107 170850,-99.7734 170900,-100.332"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="1.2" points="170910,-100.472 170900,-104.832 170905,-100.502 170900,-100.433 170900,-100.333 170900,-100.233 170905,-100.302 170900,-95.8332 170910,-100.472 170910,-100.472"/>
			<text textAnchor="middle" x="170761" y="-114.8">Go325, Sg524</text>
			</g>
			<g id="edge1323" className="edge">
			<path d="M170791,-197.814C170818,-188.626 170859,-173.13 170892,-154 170906,-145.83 170920,-134.934 170932,-125.227"/>
			<polygon fill="#000000" stroke="#000000" points="170940,-118.744 170935,-128.646 170936,-121.979 170932,-125.214 170932,-125.214 170932,-125.214 170936,-121.979 170929,-121.783 170940,-118.744 170940,-118.744"/>
			<text textAnchor="middle" x="170861" y="-185.8">Kr185</text>
			</g>
			<g id="edge426" className="edge majority">
			<path strokeWidth="2.6" d="M170799,-143.407C170830,-135.319 170875,-123.674 170909,-114.793"/>
			<polygon fill="#000000" stroke="#000000" strokeWidth="2.6" points="170919,-112.25 170910,-119.123 170914,-114.283 170909,-115.542 170909,-114.768 170909,-113.994 170914,-112.735 170908,-110.413 170919,-112.25 170919,-112.25"/>
			<text textAnchor="middle" x="170861" y="-138.8">majority</text>
			</g>
			<g id="edge1370" className="edge">
			<path fill="none" stroke="white" strokeWidth="0" d="M170936,-85.804C170902,-61.3945 170830,-18 170762,-18 261,-18 261,-18 261,-18 202.766,-18 135.136,-18 94.4994,-18"/>
			<polygon fill="white" stroke="white" strokeWidth="0" points="94.278,-14.5001 84.2779,-18 94.2779,-21.5001 94.278,-14.5001"/>
			</g>
			</g>
			</svg>
		);
	}
}

Svg.propTypes = {};

Svg.defaultProps = {};

export default Svg;