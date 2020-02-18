import React, { useState } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import BgParts from '../../../assets/images/bg-equipment.png';
import BgEquipment from '../../../assets/images/bg-parts.png';
import Card from '../../commons/Card/Card';
import CardTitle from '../../commons/CardTitle/CardTitle';

const Home = () => {
  const [isHover, setIsHover] = useState(false);
  const handleHover = () => {
    setIsHover(!isHover);
  };

  return (
    <section className="container flex max-w-6xl mx-auto py-20">
      <div className="w-1/2">
        <Card cardBg={BgEquipment}>
          <CardTitle>Tracking Equipos</CardTitle>
          <p className="card__description text-sm mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aut
            perspiciatis recusandae veritatis omnis tempora quaerat impedit,
            quis, rerum officiis ratione nobis, vitae rem suscipit similique?
            Eveniet, magni? Hic, dicta?
          </p>
          <Link
            to="#"
            className="card__button transition duration-300 ease py-4 px-16 text-sm uppercase font-bold rounded-full border border-solid border-white"
          >
            Ver más{' '}
            <FontAwesomeIcon icon={faArrowRight} className="card__icon ml-2" />
          </Link>
        </Card>
      </div>
      <div className="w-1/2">
        <Card cardBg={BgParts}>
          <CardTitle>Tracking Repuestos</CardTitle>
          <p className="card__description text-sm mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aut
            perspiciatis recusandae veritatis omnis tempora quaerat impedit,
            quis, rerum officiis ratione nobis, vitae rem suscipit similique?
            Eveniet, magni? Hic, dicta?
          </p>
          <Link
            to="#"
            className="card__button transition duration-300 ease py-4 px-16 text-sm uppercase font-bold rounded-full border border-solid border-white"
          >
            Ver más{' '}
            <FontAwesomeIcon icon={faArrowRight} className="card__icon ml-2" />
          </Link>
        </Card>
      </div>
    </section>
  );
};

export default Home;
