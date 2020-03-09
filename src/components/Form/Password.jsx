import React, { useState } from 'react';
import Logo from 'components/commons/Logo/Logo';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const PasswordForm = props => {
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange'
  });
  const onSubmit = data => {
    console.log(data);
    // TODO Send Password
    props.history.push('/password-send');
  };

  return (
    <div className="w-full max-w-lg">
      <form
        className="form bg-white shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form__header flex justify-center py-8 md:py-12 border-b border-gray-300">
          <Logo />
        </div>
        <div className="form__body p-4 pb-20 md:pt-8 md:px-20">
          <div className="text-xl text-blue-500 text-center mb-3">
            He olvidado mi contraseña
          </div>
          <div className="text-xs text-center mb-8">
            Ingresa tu correo electrónico y te enviaremos las instrucciones de
            recuperación
          </div>
          <div className="relative flex items-center mb-6">
            <span className="ml-3 absolute text-blue-800 pointer-events-none">
              <FontAwesomeIcon icon={faEnvelope} className="text-yellow-500" />
            </span>
            <input
              className="w-full pl-10 py-3 border border-gray-500 rounded"
              type="email"
              placeholder="Correo electrónico"
              id="email"
              name="email"
              ref={register({ required: true })}
            />
          </div>
          <div className="flex flex-col">
            <button
              className="btn mb-6 border-yellow-500 bg-yellow-500 text-white hover:bg-white hover:text-yellow-500"
              type="submit"
              disabled={!formState.isValid}
            >
              Enviar
            </button>
            <Link
              className="inline-block text-center underline text-sm text-gray-500 hover:text-blue-500"
              to="/login"
            >
              Volver atrás
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default withRouter(PasswordForm);
