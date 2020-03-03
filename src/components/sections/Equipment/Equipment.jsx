import React from 'react';
import Hero from '../../Hero/Hero';

import bgEquipment from 'assets/images/bg-equipment.png';
import logo1 from 'assets/images/logos/CMA.png';
import logo2 from 'assets/images/logos/K-Line.png';
import logo3 from 'assets/images/logos/NYK.png';
import logo4 from 'assets/images/logos/Wallenius.png';

const Equipment = () => {
  const logos = [
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 }
  ];
  return (
    <Hero
      bgHero={bgEquipment}
      title="Tracking equipos - Distribuidores Komatsu Operación Latinoamérica"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aut
      perspiciatis recusandae veritatis omnis tempora quaerat impedit,
      quis, rerum officiis ratione nobis, vitae rem suscipit similique?
      Eveniet, magni? Hic, dicta?"
      logos={logos}
    />
  );
};

export default Equipment;
