import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Home from '../../components/modules/Home/Home';

const HomeView = () => {
  return (
    <main className="page page--home">
      <Header name="Francisca Carrasco" />
      <Home />
      <Footer />
    </main>
  );
};

export default HomeView;
