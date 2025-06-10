import { put, takeLatest,call} from 'redux-saga/effects'
import {loginFailure, loginRequest, loginSuccess, registerRequest, registerSuccess, registerFailure} from "./userSlice.ts";
import {type AxiosResponse } from "axios";
import {loginApi, registerApi} from "../../api/authApi.ts";
import { type User } from '../../types/defaultTypes.ts'

function* handleLogin(action: ReturnType<typeof loginRequest>) {
    try{
        const response: AxiosResponse<{user: User}> = yield loginApi(action.payload);
        const user = response.data.user;
        yield put(loginSuccess(user));
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

