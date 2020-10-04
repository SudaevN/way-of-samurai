// import {authAPI} from "../api/api";
// import {stopSubmit} from "redux-form";
import {auth} from "./auth-reducer";

const SACCESS_INITIALIZATION = 'SACCESS_INITIALIZATION';

let initialState = {
    inisialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SACCESS_INITIALIZATION:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};


export const initializedSuccess = () => ({type: SACCESS_INITIALIZATION});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(auth());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    })


};

export default appReducer;