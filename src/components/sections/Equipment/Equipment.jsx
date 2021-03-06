import React, { useEffect, useState } from 'react';
import apiService from './../../../services/apiService';
import Hero from '../../Hero/Hero';
import Navigation from 'components/Navigation/Navigation';
import { OnMobile } from 'utils/layoutGenerator';
import Table from 'components/Table';
import Pagination from 'components/commons/Pagination';
import Filters from 'components/commons/Filters';
import { setColumnsName, getFiltersParams } from './../../../utils/table';

import bgEquipment from 'assets/images/bg-equipment.2x.min.png';
import logo1 from 'assets/images/logos/CMA.1x.min.png';
import logo2 from '../../../assets/images/logos/Kline.min.svg';
import logo3 from 'assets/images/logos/NYK.1x.min.png';
import logo4 from 'assets/images/logos/Wallenius.1x.min.png';

const Equipment = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState(null);
  const [filtersData, setFiltersData] = useState({});

  const initializeFilters = () => {
    const filters = {};
    columns.forEach((column) => {
      filters[column] = null;
    });
    setFiltersData(filters);
  };

  const getDataTable = () => {
    setIsLoading(true);
    apiService({
      method: 'get',
      url: '/equipment',
      params: {
        ...getFiltersParams(filtersData),
        page: currentPage,
      },
    })
      .then((data) => {
        const dataTable = data.data.data;
        delete data.data.data;
        const pagination = data.data;
        setData(dataTable);
        setPagination(pagination);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const sanitizeColumns = () => {
    data.map((item, indexItem) => {
      if (indexItem === 0) {
        let keys = [];
        Object.keys(item).forEach((key) => {
          if (key !== 'id' && key !== 'created_at' && key !== 'updated_at' && key !== 'invoice_pdf') {
            keys = keys.concat(key);
          }
        });
        setColumns(keys);
      }
      return item;
    });
  };

  const handleChangeFilters = (filterKey, value) => {
    const filters = { ...filtersData, [filterKey]: value };
    setFiltersData(filters);
  };

  const handleClickPagination = (indexPagination) => {
    setCurrentPage(indexPagination);
  };

  const handleClearFilters = () => {
    initializeFilters();
  };

  const logos = [
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 }
  ];

  const options = {
    filterType: 'checkbox',
    // responsive: 'stackedFullWidthFullHeight'
  };
  
  useEffect(sanitizeColumns, [data]);
  useEffect(initializeFilters, []);
  useEffect(getDataTable, [currentPage, filtersData]);

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
      { !isLoading && <>
        <Filters name="equipment" filtersData={filtersData} onChange={ handleChangeFilters } onClear={handleClearFilters} />
        <Table data={data} columns={setColumnsName(columns)} options={options} />
        <Pagination { ...pagination } onClick={handleClickPagination} />
      </> }
    </>
  );
};

export default Equipment;
