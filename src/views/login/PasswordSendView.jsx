import React from 'react';
import PasswordSend from 'components/sections/Login/PasswordSend';

import bgLogin from 'assets/images/bg-login.png';

const LoginPasswordView = () => {
  return (
    <main
      className="page page--login-password"
      style={{ backgroundImage: `url(${bgLogin})`, backgroundSize: 'cover' }}
    >
      <PasswordSend />
    </main>
  );
};

export default LoginPasswordView;
