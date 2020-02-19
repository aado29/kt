import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-white text-sm text-center md:text-left">
      <div className="container flex flex-col md:flex-row justify-between max-w-screen-xl m-auto p-6">
        <p>
          © {new Date().getFullYear()} Komatsu - Todos los derechos reservados
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Contáctanos{' '}
          <a href="mailto:contacto@ejemplo.com" className="mx-2 underline">
            contacto@ejemplo.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
