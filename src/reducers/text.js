import rawReadings from "../static/readings";

const rankId = (x, rd) => parseInt(x.replace(/^n/, ""));

const sortReadings = (readings) =>
	Object.keys(readings)
		.map((k) => {
			return {
				id: k,
				witnesses: readings[k].witnesses,
				text: readings[k].text
			};
		})
		.filter((x) =>
			x.id !== "__START__" && x.id !== "__END__"
		)
		.sort((a, b) =>
			rankId(a.id, readings) - rankId(b.id, readings)
		);

const getWitnesses = (readings) =>
	Object.keys(readings)
		.map(function(k) {
			return readings[k].witnesses
		})
		.reduce(function(a,b) {
			return a.concat(b);
		})
		.filter(function(x, idx, self) {
			return self.indexOf(x) === idx;
		});

// /*
// 	Dit zou in een reducer kunnen.
// 	Ik zeg niet dat het leesbaarder is.
// */
// const getWitnesses = (readings) =>
// 	[...Object.keys(rawReadings).reduce((prev, curr) => {
// 		return prev.add(...rawReadings[curr].witnesses);
// 	}, new Set())];


let initialState = {
	readings: sortReadings(rawReadings),
	witnesses: getWitnesses(rawReadings),
	currentWitness: null
};

export default function(state={...initialState, currentWitness: initialState.witnesses[0]}, action) {
	switch (action.type) {
		case "SET_CURRENT_WITNESS":
			state.currentWitness = action.witness;
			break;
	};

	return state;
}