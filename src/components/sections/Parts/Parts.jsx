import React from 'react';
import Hero from '../../Hero/Hero';

import bgParts from 'assets/images/bg-parts.png';
import logo1 from 'assets/images/logos/dhl.min.svg';
import logo2 from 'assets/images/logos/fedex.min.svg';
import logo3 from 'assets/images/logos/ups.min.svg';

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
