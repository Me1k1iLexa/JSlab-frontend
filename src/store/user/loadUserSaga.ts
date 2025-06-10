import { call, put, takeLatest } from 'redux-saga/effects';
import { loadUserApi} from "../../api/authApi.ts";
import {type User} from '../../types/defaultTypes.ts'
import type {AxiosResponse} from "axios";
import {loadUserRequest, loadUserSuccess, loadUserFailure, logout,logoutFailure} from "./userSlice.ts";

function* checkAuth() {
    try{
        const response: AxiosResponse<User> = yield call(loadUserApi);
        const user = response.data;
        yield put(loadUserSuccess(user));
    } catch (err) {
        let errorMessage = 'Unknown error'

        if (err instanceof Error) {
            errorMessage = err.message;
        }

        yield put(loadUserFailure(errorMessage));
    }
}

function* handleLogout() {
    try{
        yield put(logout());
    } catch (err) {
        let errorMessage = 'Unknown error'
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        yield put(logoutFailure(errorMessage));
    }
}

export default function* loadUserSaga() {
    yield takeLatest(loadUserRequest.type, checkAuth)
    yield takeLatest(logout.type, handleLogout)
}