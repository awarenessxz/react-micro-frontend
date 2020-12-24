import { AppActionTypes, SET_IS_SITE_READY } from "./app-action.types";

export const setIsSiteReady = (isSiteReady: boolean): AppActionTypes => ({
    type: SET_IS_SITE_READY,
    payload: {
        isSiteReady,
    },
});
