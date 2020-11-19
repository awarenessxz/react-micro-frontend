import { AppActionTypes, AppStateTypes, SET_APP_TITLE } from "./app-action.types";

const initialState: AppStateTypes = {
    title: 'Container Frontend',
};

const appReducer = (state: AppStateTypes = initialState, action: AppActionTypes): AppStateTypes => {
    switch (action.type) {
        case SET_APP_TITLE:
            return {
                ...state,
                title: action.payload.title,
            };
        default:
            return state;
    }
};

export default appReducer;
