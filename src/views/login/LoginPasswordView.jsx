import React from 'react';
import Password from 'components/sections/Login/Password';

import bgLogin from 'assets/images/bg-login.png';

const LoginPasswordView = () => {
  return (
    <main
      className="page page--login-password"
      style={{ backgroundImage: `url(${bgLogin})`, backgroundSize: 'cover' }}
    >
      <Password />
    </main>
  );
};

export default LoginPasswordView;
