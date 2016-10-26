import {takeEvery} from 'redux-saga';
import {put, call, fork} from 'redux-saga/effects';
import { UPDATE_DATA, SET_DATA, API_ERROR, FETCH_EVENT } from '../actions/actionTypes';
import actionCreator from '../actions/actionCreator';

function callApi(path, setting) {
    return fetch(path, setting).then(res => {
        if(res.ok) {
            return res.json();
        }
        throw res.status;
    }).then(responseJson => {
        console.log('api success: ', responseJson);
        return {payload: responseJson};
    }).catch(error => {
        console.log('api error: ', error);
        return {error: {status: 'error', errorType: error}};
    });
}

function getApi() {
    return callApi('/api/data.json');
}

function* fetchEventAsync() {
    const {payload, error} = yield call(getApi);
    if(payload && !error) {
        yield put(actionCreator(UPDATE_DATA, payload));
    }else {
        yield put(actionCreator(API_ERROR, error));
    }

}

export default function* rootSaga() {
    yield fork(function* takeEveryFetchEvent() {
        yield* takeEvery(FETCH_EVENT, fetchEventAsync);
    })
}
