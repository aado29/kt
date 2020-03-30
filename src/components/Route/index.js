import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authLoggedIn } from './../../redux/selectors/auth';

export const AuthenticatedRoute = ({ component: C, ...rest }) => {
  const loggedIn = useSelector(authLoggedIn);

  return (
    <Route
      { ...rest }
      render={ props =>
        loggedIn
          ? <C {...props} />
          : <Redirect to={`/login?redirect=${props.location.pathname}${props.location.search}`} />
      }
    />
  );
};

export const UnauthenticatedRoute = ({ component: C, ...rest }) => {
  const loggedIn = useSelector(authLoggedIn);
  return (
    <Route
      { ...rest }
      render={ props =>
        !loggedIn
          ? <C {...props} />
          : <Redirect to="/" />
      }
    />
  );
};

export default {
  AuthenticatedRoute,
  UnauthenticatedRoute,
};
