import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_GET_USER_REQUEST,
  AUTH_GET_USER_SUCCESS,
  AUTH_GET_USER_ERROR,
} from './../../consts';

export const auth = payload => ({
  type: AUTH_REQUEST,
  payload,
});

export const authSuccess = payload => ({
  type: AUTH_SUCCESS,
  payload,
});

export const authError = payload => ({
  type: AUTH_ERROR,
  payload,
});

export const authGetUser = payload => ({
  type: AUTH_GET_USER_REQUEST,
  payload,
});

export const authGetUserSuccess = payload => ({
  type: AUTH_GET_USER_SUCCESS,
  payload,
});

export const authGetUserError = payload => ({
  type: AUTH_GET_USER_ERROR,
  payload,
});