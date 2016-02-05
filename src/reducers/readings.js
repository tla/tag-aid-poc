import rawReadings from "../static/readings";

const rankId = function(x, rd) {
    if(x === "__START__") { return -1; }
    if(x === "__END__") { return Object.keys(rd).length * 10; }
    return parseInt(x.replace(/^n/, ""));
};

// const readingsByWitness = (witness, sortedReadings) => 
// 	sortedReadings.filter((reading) => reading.witnesses.indexOf(witness) > -1);

const sortReadings = (readings) =>
	Object.keys(readings).map((k) => {
		return {
			id: k,
			witnesses: readings[k].witnesses,
			text: readings[k].text
		};
	}).sort((a, b) => rankId(a.id, readings) - rankId(b.id, readings));

const getWitnesses = (readings) => 
	Object.keys(readings).map(function(k) {
		return readings[k].witnesses
	}).reduce(function(a,b) { 
		return a.concat(b);
	}).filter(function(x, idx, self) {
		return self.indexOf(x) === idx;
	});

let initialState = {
	readings: sortReadings(rawReadings),
	witnesses: getWitnesses(rawReadings),
	currentWitness: null
};

export default function(state={...initialState, currentWitness: initialState.witnesses[0]}, action) {
	return state;
}