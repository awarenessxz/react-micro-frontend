import { AppActionTypes, SET_MF_BIDIRECTIONAL_LOAD_STATE, SET_MF_REMOTE_LOAD_STATE } from "./app-action.types";

export const setMFBidirectionLoadState = (loadState: boolean): AppActionTypes => ({
    type: SET_MF_BIDIRECTIONAL_LOAD_STATE,
    payload: {
        loadState,
    },
});

export const setMFRemoteLoadState = (loadState: boolean): AppActionTypes => ({
    type: SET_MF_REMOTE_LOAD_STATE,
    payload: {
        loadState,
    },
});
