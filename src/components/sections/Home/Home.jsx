import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import bgEquipment from '../../../assets/images/bg-equipment.1x.min.png';
import bgParts from '../../../assets/images/bg-parts.1x.min.png';
import Card from '../../commons/Card/Card';
import CardTitle from '../../commons/CardTitle/CardTitle';

const Home = () => {
  return (
    <section className="container flex flex-col md:flex-row max-w-6xl mx-auto md:py-20">
      <div className="md:w-1/2">
        <Card cardBg={bgEquipment}>
          <CardTitle>Tracking Equipos</CardTitle>
          <p className="card__description text-sm mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aut
            perspiciatis recusandae veritatis omnis tempora quaerat impedit,
            quis, rerum officiis ratione nobis, vitae rem suscipit similique?
            Eveniet, magni? Hic, dicta?
          </p>
          <Link
            to="/equipos"
            className="btn"
          >
            Ver más{' '}
            <FontAwesomeIcon icon={faArrowRight} className="card__icon ml-2" />
          </Link>
        </Card>
      </div>
      <div className="md:w-1/2">
        <Card cardBg={bgParts}>
          <CardTitle>Tracking Repuestos</CardTitle>
          <p className="card__description text-sm mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aut
            perspiciatis recusandae veritatis omnis tempora quaerat impedit,
            quis, rerum officiis ratione nobis, vitae rem suscipit similique?
            Eveniet, magni? Hic, dicta?
          </p>
          <Link
            to="/repuestos"
            className="btn"
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
