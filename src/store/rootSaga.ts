import { all } from 'redux-saga/effects'
import userSaga from './user/userSaga.ts'
import loadUserSaga from './user/loadUserSaga.ts'

export default function* rootSaga() {
    yield all([
        userSaga(),
        loadUserSaga()
    ])
}