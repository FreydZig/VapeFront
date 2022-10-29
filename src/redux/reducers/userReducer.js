import {CREATE_USER} from '../typs';

const initialState = {
    userId: '',
    login: '',
    password: ''
}

const currentState = {
    cuserId: '',
    clogin: '',
    cpassword: ''
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_USER:{
            const {
                userId,
                login,
                password
            } = action.payload;

            return{
                ...state,
                cuserId: userId,
                clogin: login,
                cpassword: password
            };           
        }
        default: {
            return state
        }
    }
}