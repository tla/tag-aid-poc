import store from "../store";

export default {
	onSetActiveNode: (nodeId) =>
		store.dispatch({
			type: "SET_ACTIVE_NODE",
			nodeId: nodeId
		})
};