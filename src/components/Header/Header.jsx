import React from 'react';
import Proptypes from 'prop-types';
import Button from '../commons/Button/Button';
import Logo from '../commons/Logo/Logo';

const Header = props => {
  const { name } = props;
  return (
    <header className="bg-white">
      <div className="container flex justify-between items-center max-w-6xl m-auto p-6">
        <div className="flex items-center">
          <Logo />
          <Button>Equipos</Button>
          <Button>Repuestos</Button>
        </div>
        <div className="profile text-sm">{name}</div>
      </div>
    </header>
  );
};

Header.propTypes = {
  name: Proptypes.string.isRequired
};

export default Header;
