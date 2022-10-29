import { takeLatest, put, call } from "redux-saga/effects";
import { CREATE_USER } from "../redux/typs";
import axiosInstance from "./axiosInstance";

function* registrate(action){
    try{
        console.log(action)
        const signUp = async () => await axiosInstance.post('User', {...action.payload});
        const response = yield call(signUp);
        const responseData = response.data;
        const {
            userId,
            login,
            password
        } = responseData;
        localStorage.setItem('userItem', responseData);
       yield put({
        type: CREATE_USER,
        payload: {userId, login, password}
       })
    }
    catch(error){
        console.log(error);
    }
}

function* mySagas(){
    yield takeLatest('REGISTRATE', registrate);
}

export default mySagas;