import {ADD_USER,REMOVE_USER,UPDATE_USER,SHOW_USER_LIST,SHOW_USER_LIST_FULFILLED,SHOW_USER_LIST_PENDING,SHOW_USER_LIST_REJECTED} from '../constants/index'
export const userReducer = (state = [],action) => {
    switch(action.type){
        case ADD_USER:
            return state;
        case REMOVE_USER:
            return state;
        case UPDATE_USER:
            state[action.index] = action.payload;
            return state;
        case SHOW_USER_LIST_FULFILLED:
            return action.payload;
        case SHOW_USER_LIST_PENDING:
            return state
        case SHOW_USER_LIST_REJECTED:
            return state
        default:
            return state;
    }
}