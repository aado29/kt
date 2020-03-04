import React from 'react';
import Hero from '../../Hero/Hero';

import bgParts from 'assets/images/bg-parts.2x.min.png';
import logo1 from 'assets/images/logos/DHL.1x.min.png';
import logo2 from 'assets/images/logos/Fedex.1x.min.png';
import logo3 from 'assets/images/logos/UPS.min.svg';

const Parts = () => {
  const logos = [
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 }
  ];
  return (
    <Hero
      bgHero={bgParts}
      title="Tracking repuestos - Distribuidores Komatsu Operación Latinoamérica"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aut
      perspiciatis recusandae veritatis omnis tempora quaerat impedit,
      quis, rerum officiis ratione nobis, vitae rem suscipit similique?
      Eveniet, magni? Hic, dicta?"
      logos={logos}
    />
  );
};

export default Parts;
