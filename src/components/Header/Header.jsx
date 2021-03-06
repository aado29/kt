import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Logo from 'components/commons/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import { OnAtLeastTablet } from 'utils/layoutGenerator';
import { faChevronDown, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { authLogout } from './../../redux/actions/auth';
import { authUserData } from './../../redux/selectors/auth';

const Header = props => {
  const dispatch = useDispatch();
  const { withOutNav } = props;

  const [toggle, setToggle] = useState(false);
  const userData = useSelector(authUserData);
  const fullName = userData && userData.name ? `${userData.name} ${userData.lastname}` : 'Usuario';

  const handleToggle = (value) => {
    if (value !== false || value !== true) {
      setToggle(value);
      return;
    }
    setToggle(!toggle);
  };

  const getAcronymUsername = (str) => {
    const matches = str.match(/\b(\w)/g);
    const acronym = matches.join('');
    return acronym;
  };

  const handleLogout = () => dispatch(authLogout());

  return (
    <header className="bg-white">
      <div className="container flex justify-between items-center max-w-screen-xl m-auto p-6">
        <div className="flex items-center">
          <Link to="/">
            <Logo />
          </Link>
          <OnAtLeastTablet>
            <div className="ml-10">
              <Navigation withOutNav={withOutNav} />
            </div>
          </OnAtLeastTablet>
        </div>
        <div
          role="button"
          aria-pressed="true"
          tabIndex="-1"
          className="profile flex items-center hover:text-blue-500 cursor-pointer focus:outline-none"
          onClick={handleToggle}
          onBlur={() => handleToggle(false)}
        >
          <div className="profile__avatar flex items-center justify-center bg-yellow-500 uppercase text-white rounded-full w-10 h-10">
            { getAcronymUsername(fullName) }
          </div>
          <div className="relative text-sm py-3">
            <OnAtLeastTablet>
              <span className="ml-4">
                { fullName }
              </span>
            </OnAtLeastTablet>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-yellow-500 ml-3"
            />
            <div
              className={`profile transition duration-300 ease-in-out px-4 py-6 rounded-lg bg-white absolute z-50 right-0 bottom-0 w-40 transform translate-y-full shadow-md ${
                toggle ? 'visible' : 'invisible'
              }`}
            >
              <div role="button" className="whitespace-no-wrap" onClick={handleLogout}>
                Cerrar sesión
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className="text-yellow-500 ml-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
