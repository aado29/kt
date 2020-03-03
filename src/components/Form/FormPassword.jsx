import React from 'react';
import Logo from 'components/commons/Logo/Logo';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class FormPassword extends React.Component {
  constructor() {
    super();

    this.state = {
      email: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('email', this.state.email);
  };

  handleOnChange = el => {
    const value = el.target.value;
    this.setState({ email: value });
  };

  render() {
    const { email } = this.state;

    return (
      <div className="w-full max-w-lg">
        <form className="form bg-white shadow-md" onSubmit={this.handleSubmit}>
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
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-yellow-500"
                />
              </span>
              <input
                className="w-full pl-10 py-3 border border-gray-500 rounded"
                type="email"
                placeholder="Correo electrónico"
                id="email1"
                onChange={this.handleOnChange}
                value={email}
              />
            </div>
            <div className="flex flex-col">
              <button
                className="transition duration-300 ease-in-out py-4 lg:px-16 text-sm uppercase font-bold rounded-full border border-solid border-yellow-500 bg-yellow-500 hover:bg-transparent text-white hover:text-yellow-500  mb-6"
                type="submit"
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
  }
}

export default FormPassword;
