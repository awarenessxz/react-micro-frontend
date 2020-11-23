/* ***************************************************************************************
 * Types Definition for other
 *************************************************************************************** */

export interface AppStateTypes {
    isSiteReady: boolean;
}

/* ***************************************************************************************
 * List of all action type
 *************************************************************************************** */

export const SET_IS_SITE_READY = 'SET_IS_SITE_READY';

/* ***************************************************************************************
 * Types Definition for all action type
 *************************************************************************************** */

interface SetIsSiteReadyAction {
    type: typeof SET_IS_SITE_READY;
    payload: {
        isSiteReady: boolean;
    };
}

export type AppActionTypes = SetIsSiteReadyAction;
