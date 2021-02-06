import {CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, EDIT_STREAM, DELETE_STREAM} from '../actions/types';
import _ from 'lodash'

export default (state = [], action) => {
    if (action.type === FETCH_STREAM) {
        return {...state, [action.payload.id]: action.payload}
    }
    if (action.type === CREATE_STREAM) {
        return {...state, [action.payload.id]: action.payload}
    }
    if (action.type === EDIT_STREAM) {
        return {...state, [action.payload.id]: action.payload}
    }
    if (action.type === DELETE_STREAM) {
        return _.omit(state, action.payload);
    }
    if (action.type === FETCH_STREAMS) {
        return {...state, ..._.mapKeys(action.payload, 'id')}
    }

    return state;
}
