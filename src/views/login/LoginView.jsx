import React from 'react';
import Login from 'components/sections/Login/Login';

import bgLogin from 'assets/images/bg-login.png';
import './LoginView.scss';

const LoginView = () => {
  return (
    <main className="page page--login"  style={{backgroundImage: `url(${bgLogin})`, backgroundSize: 'cover'}}>
      <Login />
    </main>
  );
};

export default LoginView;
