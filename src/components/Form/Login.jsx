import React from 'react';
import Logo from 'components/commons/Logo/Logo';
import { withRouter } from 'react-router-dom';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const LoginForm = props => {
  const { register, errors, handleSubmit, formState } = useForm({
    mode: 'onChange'
  });

  const onSubmit = data => {
    console.log(data);
    // TODO Login Office 365
    props.history.push('/');
  };

  return (
    <div className="w-full max-w-lg">
      <form
        className="form bg-white shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form__header flex md:justify-center px-4 py-8 md:py-12 border-b border-gray-300">
          <Logo />
        </div>
        <div className="form__body p-4 pb-20 pt-8 md:px-20">
          <div className="text-lg text-blue-500 md:text-center mb-3">
            Inicia sesión
          </div>
          <div className="text-xs md:text-center mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="mb-6">
            <div className="relative flex items-center mb-1">
              <span className="ml-3 absolute text-blue-800 pointer-events-none">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-yellow-500"
                />
              </span>
              <input
                className="w-full pl-10 py-3 border border-gray-500 rounded focus:outline-none focus:shadow-outline focus:border-blue-500 focus:text-blue-500 focus:placeholder-blue-500"
                type="email"
                placeholder="Correo electrónico"
                id="email"
                name="email"
                ref={register({ required: true })}
              />
            </div>
            <p className="text-sm text-red-600">
              {errors.email && 'Campo obligatorio'}
            </p>
          </div>
          <div className="mb-6">
            <div className="relative flex items-center mb-1">
              <span className="ml-3 absolute text-blue-800 pointer-events-none">
                <FontAwesomeIcon icon={faLock} className="text-yellow-500" />
              </span>
              <input
                className="w-full pl-10 py-3 border border-gray-500 rounded  focus:outline-none focus:shadow-outline focus:border-blue-500 focus:text-blue-500 focus:placeholder-blue-500"
                type="password"
                placeholder="Contraseña"
                id="password1"
                name="password"
                ref={register({ required: true, minLength: 6 })}
              />
            </div>
            <p className="text-sm text-red-600">
              {errors.password && 'Campo obligatorio'}
            </p>
          </div>
          <div className="flex flex-col">
            <Link
              className="underline text-sm text-gray-500 hover:text-blue-500 mb-6 focus:outline-none focus:shadow-outline"
              to="/password-recovery"
            >
              He olvidado mi contraseña
            </Link>
            <button
              className="btn border-yellow-500 bg-yellow-500 text-white focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={!formState.isValid}
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
