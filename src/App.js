import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthenticatedRoute, UnauthenticatedRoute } from './components/Route';
import { getCookie } from './utils/cookies';

import { authSuccess } from './redux/actions/auth';

import './App.css';

import Footer from 'components/Footer/Footer';
import LoginView from './views/login/LoginView';
import PasswordView from './views/login/PasswordView';
import PasswordSendView from './views/login/PasswordSendView';
import HomeView from './views/home/HomeView';
import EquipmentView from './views/equipment/EquipmentView';
import PartsView from './views/parts/PartsView';

let authToken = process.env.REACT_APP_AUTH_TOKEN;

const App = ({ store }) => {
  authToken = getCookie(authToken);

  if (!!authToken && authToken !== 'null') {
    store.dispatch(authSuccess({
      access_token: authToken,
    }));
  }

  return (
    <Provider store={store}>
      {<Router>
        <div className="App flex flex-col min-h-screen">
          <div className="flex flex-grow">
            <AuthenticatedRoute exact path="/" component={HomeView} />
            <UnauthenticatedRoute path="/login" component={LoginView} />
            <UnauthenticatedRoute path="/password-recovery" component={PasswordView} />
            <UnauthenticatedRoute path="/password-send" component={PasswordSendView} />
            <AuthenticatedRoute path="/equipos" component={EquipmentView} />
            <AuthenticatedRoute path="/repuestos" component={PartsView} />
          </div>
          <Footer />
        </div>
      </Router>}
    </Provider>
  );
};

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
