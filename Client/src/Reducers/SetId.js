import {ID_SETTED} from '../constants';

const setIdReducer = (state = 0,action) => {
    console.log("before"+state);

    switch(action.type){
        case ID_SETTED:
            return state = action.payload;
        default:
            return state
    }
    console.log("after"+state);
}

export default setIdReducer;