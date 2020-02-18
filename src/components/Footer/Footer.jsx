import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container flex justify-between max-w-6xl m-auto p-6">
        <p>
          © {new Date().getFullYear()} Komatsu - Todos los derechos reservados
        </p>
        <p>Contáctanos contacto@ejemplo.com</p>
      </div>
    </footer>
  );
};

export default Footer;
