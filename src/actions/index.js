import store from "../store";

export default {
	onSetActiveNode: (nodeId) =>
		store.dispatch({
			type: "SET_ACTIVE_NODE",
			nodeId: nodeId
		}),
	onSelectWitness: (witness) =>
		store.dispatch({
			type: "SET_CURRENT_WITNESS",
			witness: witness
		})
};