/* ***************************************************************************************
 * Types Definition for other
 *************************************************************************************** */

export interface AppStateTypes {
    isMFBidirectionalLoaded: boolean;
    isMFRemoteLoaded: boolean;
}

/* ***************************************************************************************
 * List of all action type
 *************************************************************************************** */

export const SET_MF_BIDIRECTIONAL_LOAD_STATE = 'SET_MF_BIDIRECTIONAL_LOAD_STATE';
export const SET_MF_REMOTE_LOAD_STATE = 'SET_MF_REMOTE_LOAD_STATE';

/* ***************************************************************************************
 * Types Definition for all action type
 *************************************************************************************** */

interface SetMFBidirectionalLoadStateAction {
    type: typeof SET_MF_BIDIRECTIONAL_LOAD_STATE;
    payload: {
        loadState: boolean;
    };
}

interface SetMFRemoteLoadStateAction {
    type: typeof SET_MF_REMOTE_LOAD_STATE;
    payload: {
        loadState: boolean;
    };
}

export type AppActionTypes = SetMFBidirectionalLoadStateAction | SetMFRemoteLoadStateAction;
