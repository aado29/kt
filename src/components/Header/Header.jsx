import React, { useState } from 'react';
import Proptypes from 'prop-types';
import Button from '../commons/Button/Button';
import Logo from '../commons/Logo/Logo';
import { layoutGenerator } from 'react-break';
import { faChevronDown, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 1024
});

const OnAtLeastTablet = layout.isAtLeast('tablet');

const Header = props => {
  const { name } = props;

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const username = () => {
    const str = name;
    const matches = str.match(/\b(\w)/g);
    const acronym = matches.join('');
    return acronym;
  };

  return (
    <header className="bg-white">
      <div className="container flex justify-between items-center max-w-screen-xl m-auto p-6">
        <div className="flex items-center">
          <Logo />
          <OnAtLeastTablet>
            <Button>Equipos</Button>
            <Button>Repuestos</Button>
          </OnAtLeastTablet>
        </div>
        <div
          className="profile flex items-center hover:text-blue-500 cursor-pointer"
          onMouseEnter={handleToggle}
          onMouseLeave={handleToggle}
        >
          <div className="profile__avatar flex items-center justify-center bg-yellow-600 uppercase text-white rounded-full w-10 h-10">
            {username()}
          </div>
          <div className="relative text-sm py-3">
            <OnAtLeastTablet>
              <span className="ml-4">{name}</span>
            </OnAtLeastTablet>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-yellow-600 ml-3"
            />
            <div
              className={`profile transition duration-300 ease-in-out px-4 py-6 rounded-lg bg-white absolute z-50 right-0 bottom-0 w-40 md:w-full transform translate-y-full shadow-md ${
                toggle ? 'visible' : 'invisible'
              }`}
            >
              Cerrar sesión{' '}
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className="text-yellow-600 ml-2"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  name: Proptypes.string.isRequired
};

export default Header;
