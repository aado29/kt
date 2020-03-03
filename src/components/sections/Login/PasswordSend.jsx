import React from 'react';
import PasswordSendForm from 'components/Form/PasswordSend';

const PasswordSend = () => {
  return (
    <section className="container flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto md:py-20">
      <PasswordSendForm />
    </section>
  );
};

export default PasswordSend;
