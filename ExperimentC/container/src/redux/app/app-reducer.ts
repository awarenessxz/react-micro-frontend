import {
    AppActionTypes,
    AppStateTypes,
    SET_MF_BIDIRECTIONAL_LOAD_STATE,
    SET_MF_REMOTE_LOAD_STATE
} from "./app-action.types";

const initialState: AppStateTypes = {
    isMFBidirectionalLoaded: false,
    isMFRemoteLoaded: false
};

const appReducer = (state: AppStateTypes = initialState, action: AppActionTypes): AppStateTypes => {
    switch (action.type) {
        case SET_MF_BIDIRECTIONAL_LOAD_STATE:
            return {
                ...state,
                isMFBidirectionalLoaded: action.payload.loadState
            };
        case SET_MF_REMOTE_LOAD_STATE:
            return {
                ...state,
                isMFRemoteLoaded: action.payload.loadState
            };
        default:
            return state;
    }
};

export default appReducer;
