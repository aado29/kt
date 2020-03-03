import React from 'react';
import LoginForm from 'components/Form/Login';

const Login = () => {
  return (
    <section className="container flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto md:py-20">
      <LoginForm />
    </section>
  );
};

export default Login;
