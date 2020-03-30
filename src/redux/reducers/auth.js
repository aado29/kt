import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_GET_USER_REQUEST,
  AUTH_GET_USER_SUCCESS,
  AUTH_GET_USER_ERROR,
} from './../../consts';

const initialState = {};

export default (state = initialState, action) => {
  switch(action.type) {
    case AUTH_REQUEST:
      return { ...state, isLoading: true, error: null };
    case AUTH_SUCCESS:
      return { ...state, isLoading: false, token: action.payload.access_token };
    case AUTH_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case AUTH_GET_USER_REQUEST:
      return { ...state, isFetching: true, error: null, loggedIn: false };
    case AUTH_GET_USER_SUCCESS:
      return { ...state, isFetching: false, user: action.payload, loggedIn: true };
    case AUTH_GET_USER_ERROR:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return { ...state };
  };
};