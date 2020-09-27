import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios'
import Swal from 'sweetalert2'

const API_URL = 'http://localhost:3001/api/'

const request = axios.create({
    baseURL: API_URL,
    timeout: 1000
});

const read = async (path) =>
    await request.get(path)
        .then(response => response.data)
        .catch(err => {
            throw err
        });
const readDetailAdd = async (path) =>
    await request.get(path)
        .then(response => response.data)
        .catch(err => {
            throw err
        });

const add = async (path, params) =>
    await request.post(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        });

const update = async (path, params) =>
    await request.put(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        });

const PATH = 'add';

//load
function* loadAdd(payload) {
    const { limit, page } = payload
    const QUERY_PATH = `${PATH}?limit=${limit}&page=${page}`
    try {
        const data = yield call(read, QUERY_PATH)
        yield put(actions.loadAddSuccess(data));
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'warning',
            title: "Network connection trouble!",
            text: "Call administator to fix the issue",
            type: "warning",
            buttons: true,
            dangerMode: true,
            timer: 1500
        })

    }
}
function* loadAddDetail(payload) {
    const { id } = payload
    const QUERY_PATH = `${PATH}/${id}`
    try {
        const data = yield call(readDetailAdd, QUERY_PATH)
        yield put(actions.loadDetailAddSuccess(data));
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'warning',
            title: "Network connection trouble!",
            text: "Call administator to fix the issue",
            type: "warning",
            buttons: true,
            dangerMode: true,
            timer: 1500
        })

    }
}

export default function* rootSaga() {
    yield all([

        takeEvery('LOAD_ADD', loadAdd),
        takeEvery('LOAD_DETAIL_ADD', loadAddDetail),
  
    ]);
}