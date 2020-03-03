import React from 'react';
import PasswordForm from 'components/Form/Password';

const Password = () => {
  return (
    <section className="container flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto md:py-20">
      <PasswordForm />
    </section>
  );
};

export default Password;
