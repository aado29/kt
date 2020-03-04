import React from 'react';
import Logo from 'components/commons/Logo/Logo';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const PasswordSendForm = () => {
  return (
    <div className="w-full max-w-lg">
      <section className="form bg-white shadow-md">
        <div className="form__header flex justify-center py-8 md:py-12 border-b border-gray-300">
          <Logo />
        </div>
        <div className="form__body p-4 pb-20 md:pt-8 md:px-20">
          <div className="text-center">
            <span className="flex items-center justify-center bg-yellow-500 uppercase text-white rounded-full w-10 h-10 mx-auto mb-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-white text-xl"
              />
            </span>
          </div>
          <h3 className="text-xl text-blue-500 text-center mb-3">
            Correo de recuperación enviado
          </h3>
          <p className="text-xs text-center mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            quaerat sint nemo et similique odit.
          </p>
          <div className="flex flex-col">
            <Link
              className="transition duration-300 ease-in-out py-4 lg:px-16 text-sm uppercase font-bold text-center rounded-full border border-solid border-gray-500 bg-transparent text-gray-500 hover:text-white hover:bg-gray-500 mb-6"
              to="/login"
            >
              Volver atrás
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PasswordSendForm;
