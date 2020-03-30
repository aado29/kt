import React from 'react';
import Login from 'components/sections/Login/Login';
import { useSelector } from 'react-redux';

import { authIsFetching } from './../../redux/selectors/auth';

import bgLogin from 'assets/images/bg-login.png';

const LoginView = () => {
  const isFetchingUser = useSelector(authIsFetching);

  return (
    <main className="page page--login bg-center bg-fixed bg-cover"  style={{backgroundImage: `url(${bgLogin})`}}>
      { !isFetchingUser && <Login /> }
    </main>
  );
};

export default LoginView;
