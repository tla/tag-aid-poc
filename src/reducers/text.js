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
let witnesses = ["Majority", ...getWitnesses(rawReadings)];

const majorityReading = readings.reduce((prev, curr) => {
	// Look up a word in the 'prev' array with the same rank as 'curr'
	let sameRankIndex = prev.findIndex((r) => r.rank === curr.rank);

	// If a word with the same rank isn't found, add 'curr' to 'prev'
	if (sameRankIndex === -1) {
		prev.push(curr);
	// If a word is found, use/add the one with the most witnesses (the majority)
	} else {
		if (curr.witnesses.length > prev[sameRankIndex].witnesses.length) {
			prev[sameRankIndex] = curr;
		}
	}

	return prev;
}, []);

let initialState = {
	activeNode: null,
	activeWitness: {
		name: "Majority",
		reading: majorityReading
	},
	highlightedNodes: [],
	readings: readings,
	witnesses: witnesses,
};


export default function(state=initialState, action) {
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
					reading: (action.witness === "Majority") ?
						majorityReading :
						state.readings.filter((r) => r.witnesses.indexOf(action.witness) > -1)
				}
			}};

			// Can't put this in the previous statement, because the updated
			// state is needed for getHighlighted.
			state = {...state, ...{
				highlightedNodes: getHighlighted(state.activeNode, state)
			}};

			break;
	};

	return state;
}