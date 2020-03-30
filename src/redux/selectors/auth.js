import { get } from 'lodash';

export const authIsLoading = state => get(state, 'auth.isLoading');
export const authIsFetching = state => get(state, 'auth.isFetching');
export const authLoggedIn = state => get(state, 'auth.loggedIn');
export const authUserData = state => get(state, 'auth.user');
export const authToken = state => get(state, 'auth.token');
export const authError = state => get(state, 'auth.error');