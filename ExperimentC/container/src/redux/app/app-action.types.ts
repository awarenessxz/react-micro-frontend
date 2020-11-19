/* ***************************************************************************************
 * Types Definition for other
 *************************************************************************************** */

export interface AppStateTypes {
    title: string;
}

/* ***************************************************************************************
 * List of all action type
 *************************************************************************************** */

export const SET_APP_TITLE = 'SET_APP_TITLE';

/* ***************************************************************************************
 * Types Definition for all action type
 *************************************************************************************** */

interface SetAppTitleAction {
    type: typeof SET_APP_TITLE;
    payload: {
        title: string;
    };
}

export type AppActionTypes = SetAppTitleAction;
