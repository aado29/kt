import { call, put, takeLatest } from 'redux-saga/effects';

import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_LOGOUT } from './../../consts';
import { authSuccess, authError, authGetUser, authGetUserSuccess, authGetUserError } from './../actions/auth';
import apiService from '../../services/apiService';
import { setCookie } from './../../utils/cookies';
import parseJwt from './../../utils/parseJwt';

const authToken = process.env.REACT_APP_AUTH_TOKEN;
const tokenExpirationHours = process.env.REACT_APP_TOKEN_EXPIRATION_HOURS;

function* initAuth({ payload }) {
  try {
    const auth = yield call(apiService, {
      method: 'POST',
      url: '/login',
      data: payload
    });
    yield call(setCookie, authToken, auth.data.token, parseJwt(auth.data.token).exp);
    yield put(authSuccess(auth.data));
  } catch (e) {
    yield put(authError(e));
  }
};

function* getAuthUser() {
  yield put(authGetUser())

  try {
    const user = yield call(apiService, {
      method: 'GET',
      url: '/me'
    });
    yield put(authGetUserSuccess(user.data))
  } catch (e) {
    yield call(setCookie, authToken, null, tokenExpirationHours);
    yield put(authGetUserError(e));
  }
}

function* logout() {
  yield call(setCookie, authToken, null, tokenExpirationHours);
}

export default function* auth() {
  yield takeLatest(AUTH_REQUEST, initAuth);
  yield takeLatest(AUTH_SUCCESS, getAuthUser);
  yield takeLatest(AUTH_LOGOUT, logout);
};