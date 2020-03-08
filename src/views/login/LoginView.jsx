import React from 'react';
import Login from 'components/sections/Login/Login';

import bgLogin from 'assets/images/bg-login.png';

const LoginView = () => {
  return (
    <main className="page page--login bg-center bg-fixed bg-cover"  style={{backgroundImage: `url(${bgLogin})`}}>
      <Login />
    </main>
  );
};

export default LoginView;
