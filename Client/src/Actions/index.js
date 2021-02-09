import {ADD_USER, REMOVE_USER, UPDATE_USER,SHOW_USER_LIST_FULFILLED, SHOW_USER_LIST,SHOW_USER_LIST_PENDING,SHOW_USER_LIST_REJECTED, CHANGED_INFO,GET_USER, ID_SETTED} from '../constants/index';
import UserAPI from '../utils/api/UserAPI';
import axios from 'axios';

export const addUserAction = (data) =>{
    return {
        type: ADD_USER,
        payload: UserAPI.AddUser(data)
        .then((response) => {
            return response.data;
        })
    }
}

export const removeUserAction = (id) => {
    return {
        type: REMOVE_USER,
        payload: UserAPI.DeleteUser(id)
        .then((response) => {
            return response.data;
        })
    }
}

export const gerUserAction = (id) => {
    return {
        type: GET_USER,
        payload: id
    }
}

export const updateUserAction = (data,index) => {
    return{
        type: UPDATE_USER,
        payload: data,
        index:index
    }
}


export const showAllUsersAction = () => {
    return dispatch => {
        dispatch(showAllUsersActionPending());
        UserAPI.AllUser()
                .then((response) => {
                    dispatch(showAllUsersActionFulfilled(response.data));
                })
                .catch(err => {
                    dispatch(showAllUsersActionRejected(err.message));
                });
    }
}

const showAllUsersActionFulfilled = (users) => {
    return {
        type: SHOW_USER_LIST_FULFILLED,
        payload: {...users}
    }
};

const showAllUsersActionPending = () => {
    return {
        type: SHOW_USER_LIST_PENDING,
    }
};

const showAllUsersActionRejected = (error) => {
    return {
        type: SHOW_USER_LIST_REJECTED,
        payload: {error}
    }
};

export const setIdAction = (index) => {
    console.log("setted id called"+index)
    return {
        type: ID_SETTED,
        payload: index
    }
}