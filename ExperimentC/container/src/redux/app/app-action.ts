import { AppActionTypes, SET_APP_TITLE } from "./app-action.types";

export const setAppTitle = (title: string): AppActionTypes => ({
    type: SET_APP_TITLE,
    payload: {
        title,
    },
});
