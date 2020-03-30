import axios from 'axios';
import { checkCookie } from './../utils/cookies';

const request = (options) => {
  const {
    headers = {},
    params = {},
    ...userOptions
  } = options;

  const requestOptions = {
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      ...headers,
    },
    params: { ...params },
    ...userOptions,
  };

  const accessToken = checkCookie();

  if (accessToken) {
    requestOptions.headers.Authorization = `Bearer ${accessToken}`;
  }

  return axios(requestOptions);
};

export default request;