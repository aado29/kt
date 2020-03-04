import React from 'react';
import Hero from '../../Hero/Hero';
import Navigation from 'components/Navigation/Navigation';
import { OnMobile } from 'utils/layoutGenerator';

import bgEquipment from 'assets/images/bg-equipment.2x.min.png';
import logo1 from 'assets/images/logos/CMA.1x.min.png';
import logo2 from '../../../assets/images/logos/Kline.min.svg';
import logo3 from 'assets/images/logos/NYK.1x.min.png';
import logo4 from 'assets/images/logos/Wallenius.1x.min.png';

const Equipment = () => {
  const logos = [
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 }
  ];
  return (
    <>
      <OnMobile>
        <div className="flex justify-between items-stretch">
          <Navigation />
        </div>
      </OnMobile>
      <Hero
        bgHero={bgEquipment}
        title="Tracking equipos - Distribuidores Komatsu Operación Latinoamérica"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aut
      perspiciatis recusandae veritatis omnis tempora quaerat impedit,
      quis, rerum officiis ratione nobis."
        logos={logos}
      />
    </>
  );
};

export default Equipment;
