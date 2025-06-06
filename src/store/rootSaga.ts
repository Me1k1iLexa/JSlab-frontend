import { all } from 'redux-saga/effects'
import userSaga from './user/userSaga.ts'

export default function* rootSaga() {
    yield all([userSaga()])
}