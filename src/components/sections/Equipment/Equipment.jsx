import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../../Hero/Hero';
import Navigation from 'components/Navigation/Navigation';
import { OnMobile } from 'utils/layoutGenerator';
import Table from 'components/Table';

import bgEquipment from 'assets/images/bg-equipment.2x.min.png';
import logo1 from 'assets/images/logos/CMA.1x.min.png';
import logo2 from '../../../assets/images/logos/Kline.min.svg';
import logo3 from 'assets/images/logos/NYK.1x.min.png';
import logo4 from 'assets/images/logos/Wallenius.1x.min.png';

const Equipment = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await axios('https://rickandmortyapi.com/api/character/');
      console.log('results:', resp.data.results);
      // setData(resp.data.results);
      setData(
        resp.data.results.map(e => {
          return { id: e.id, name: e.name, status: e.status, gender: e.gender };
        })
      );
      console.log('data:', data);
      // const data = data.map(e => {
      //   return { id: e.id, name: e.name, status: e.status, gender: e.gender };
      // });
    })();
  }, []);

  const logos = [
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 }
  ];

  const columns = ['id', 'Name', 'Status', 'Species', 'Gender', 'Origin'];

  // const columns = [
  //   {
  //     name: data.id,
  //     label: 'ID',
  //     options: {
  //       filter: true,
  //       sort: true
  //     }
  //   },
  //   {
  //     name: data.name,
  //     label: 'Company',
  //     options: {
  //       filter: true,
  //       sort: false
  //     }
  //   },
  //   {
  //     name: data.status,
  //     label: 'City',
  //     options: {
  //       filter: true,
  //       sort: false
  //     }
  //   },
  //   {
  //     name: data.gender,
  //     label: 'State',
  //     options: {
  //       filter: true,
  //       sort: false
  //     }
  //   }
  // ];

  // const data = [
  //   { name: 'Joe James', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
  //   { name: 'John Walsh', company: 'Test Corp', city: 'Hartford', state: 'CT' },
  //   { name: 'Bob Herm', company: 'Test Corp', city: 'Tampa', state: 'FL' },
  //   { name: 'James Houston', company: 'Test Corp', city: 'Dallas', state: 'TX' }
  // ];

  const options = {
    filterType: 'checkbox',
    responsive: 'stackedFullWidthFullHeight'
  };

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
      <Table data={data} columns={columns} options={options} />
    </>
  );
};

export default Equipment;
