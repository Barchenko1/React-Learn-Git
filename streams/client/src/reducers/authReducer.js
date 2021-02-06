import {SIGN_IN, SIGN_OUT} from '../actions/types'

const INIT_STATE = {
    isSignedIn: null,
    userId: null
}

export default (state = INIT_STATE, action) => {
    if (action.type === SIGN_IN) {
        return {...state, isSignedIn: true, userId: action.payload};
    }
    if (action.type === SIGN_OUT) {
        return {...state, isSignedIn: false, userId: null};
    }
    return state;
}
