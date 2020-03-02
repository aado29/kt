import React from 'react';
import CardTitle from '../commons/CardTitle/CardTitle';
import Logotype from '../commons/Logotype/Logotype';

import './Hero.scss';

const Hero = props => {
  const { bgHero, title, description, logos } = props;

  return (
    <section
      className="hero bg-cover"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <div className="hero__container container flex flex-col lg:flex-row max-w-screen-xl mx-auto p-6 lg:py-10">
        <div className="lg:w-1/2 lg:pr-4">
          <CardTitle>{title}</CardTitle>
          <p className="text-sm mb-8">{description}</p>
        </div>
        <div className="lg:w-1/2 lg:pl-4 md:flex items-center justify-center whitespace-no-wrap overflow-x-scroll">
          {logos.map((e, i) => {
            return <Logotype key={i} img={e.logo} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
