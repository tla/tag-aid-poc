import rawReadings from "../static/readings";
import rawRanks from "../static/ranks";

const sortReadings = (readings) =>
	Object.keys(readings)
		.map((k) => {
			return {
				id: k,
				witnesses: readings[k].witnesses,
				text: readings[k].text,
				rank: rawRanks[k]
			};
		}).filter((x) => x.id !== "__START__" && x.id !== "__END__")
		.sort((a, b) => a.rank - b.rank);

const getWitnesses = (readings) =>
	Object.keys(readings)
		.map((k) => readings[k].witnesses)
		.reduce((a,b) => a.concat(b))
		.filter((x, idx, self) => self.indexOf(x) === idx);

// /*
// 	Dit zou in een reducer kunnen.
// 	Ik zeg niet dat het leesbaarder is. ;)
// */
// const getWitnesses = (readings) =>
// 	[...Object.keys(rawReadings).reduce((prev, curr) => {
// 		return prev.add(...rawReadings[curr].witnesses);
// 	}, new Set())];

let getHighlighted = (nodeId, state) => {
	let reading = state.activeWitness.reading;
	let index = reading.findIndex((r) => r.id === nodeId);

	if (index === -1) {
		return [];
	}

	return [
		reading[index - 3],
		reading[index - 2],
		reading[index - 1],
		reading[index],
		reading[index + 1],
		reading[index + 2],
		reading[index + 3],
	].filter((node) => node != null);
}

let readings = sortReadings(rawReadings);
let witnesses = getWitnesses(rawReadings);

let initialState = {
	activeNode: null,
	activeWitness: {
		name: witnesses[0],
		reading: readings.filter((r) => r.witnesses.indexOf(witnesses[0]) > -1)
	},
	highlightedNodes: [],
	readings: readings,
	witnesses: witnesses,
};


export default function(state=initialState, action) {
	console.log(state.readings);
	switch (action.type) {
		case "SET_ACTIVE_NODE":
			state = {...state, ...{
				activeNode: action.nodeId,
				highlightedNodes: getHighlighted(action.nodeId, state)
			}};

			break;

		case "SET_ACTIVE_WITNESS":
			state = {...state, ...{
				activeWitness: {
					name: action.witness,
					reading: state.readings.filter((r) => r.witnesses.indexOf(action.witness) > -1)
				},
				highlightedNodes: getHighlighted(action.nodeId, state)
			}};

			break;
	};

	return state;
}