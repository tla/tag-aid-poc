import store from "../store";

export default {
	onSetActiveNode: (nodeId) =>
		store.dispatch({
			type: "SET_ACTIVE_NODE",
			nodeId: nodeId
		}),
	onSetActiveWitness: (witness) =>
		store.dispatch({
			type: "SET_ACTIVE_WITNESS",
			witness: witness
		})
};