let initialState = {
	activeNode: null
};

export default function(state=initialState, action) {
	switch (action.type) {
		case "SET_ACTIVE_NODE":
			state.activeNode = action.nodeId;

			break;
	};

	return state;
}