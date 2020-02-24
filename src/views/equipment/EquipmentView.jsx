import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Equipment from 'components/sections/Equipment/Equipment';

const EquipmentView = () => {
  return (
    <main className="page page--equipment">
      <Header name="Francisca Carrasco" />
      <Equipment />
      <Footer />
    </main>
  );
};

export default EquipmentView;
