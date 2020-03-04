import React from 'react';
import Header from '../../components/Header/Header';
import Home from '../../components/sections/Home/Home';

const HomeView = () => {
  return (
    <main className="page page--home">
      <Header name="Francisca Carrasco" withOutNav />
      <Home />
    </main>
  );
};

export default HomeView;
