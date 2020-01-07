import { call, put, all, takeLatest } from "redux-saga/effects";
import { getUserSuccess } from "./actions";
import axios from "axios";

function* getUser({ username }) {
  const response = yield call(
    axios.get,
    `https://api.github.com/users/${username}`
  );
  yield put(getUserSuccess(response.data));
}

export default all([takeLatest("@repo/ADD_REQUEST", getUser)]);
