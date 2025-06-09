import { put, takeLatest,call} from 'redux-saga/effects'
import {loginFailure, loginRequest, loginSuccess, registerRequest, registerSuccess, registerFailure} from "./userSlice.ts";
import axios, {type AxiosResponse } from "axios";

const loginApi = (data: { email: string; password: string }) => {
    return axios.post('/auth/login', data, {withCredentials: true});
}
const registerApi = (data: { email: string; password: string }) => {
    return axios.post('/auth/register', data)
}

function* handleLogin(action: ReturnType<typeof loginRequest>) {
    try{
        const response: AxiosResponse<{token: string}> = yield loginApi(action.payload);
        const token = response.data.token;
        yield put(loginSuccess(token));
    } catch (err){
        let errorMessage = 'Unknown error'

        if (err instanceof Error) {
            errorMessage = err.message;
        }

        yield put(loginFailure(errorMessage));
    }
}

function* handleRegister(action: ReturnType<typeof registerRequest>) {
    try{
        yield call(registerApi, action.payload);
        yield put(registerSuccess());
    } catch (err){
        let errorMessage = 'Unknown error'

        if (err instanceof Error) {
            errorMessage = err.message;
        }
        yield put(registerFailure(errorMessage));
    }
}

export default function* userSaga() {
    yield takeLatest(loginRequest.type, handleLogin)
    yield takeLatest(registerRequest.type, handleRegister)
}

