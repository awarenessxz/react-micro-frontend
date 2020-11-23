import { AppActionTypes, AppStateTypes, SET_IS_SITE_READY } from "./app-action.types";

const initialState: AppStateTypes = {
    isSiteReady: false,
};

const appReducer = (state: AppStateTypes = initialState, action: AppActionTypes): AppStateTypes => {
    switch (action.type) {
        case SET_IS_SITE_READY:
            return {
                ...state,
                isSiteReady: action.payload.isSiteReady
            };
        default:
            return state;
    }
};

export default appReducer;
