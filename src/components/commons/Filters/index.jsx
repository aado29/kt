import React, { useState, useEffect } from 'react';
import Filter from './Filter';

const Filters = ({ columns, name, onChange }) => {
  const [ filtersData, setFiltersData ] = useState({});

  const initializeFilters = () => {
    const filters = {};
    columns.forEach((column) => {
      filters[column] = null;
    });
    setFiltersData(filters);
  };

  useEffect(initializeFilters, []);

  const handleChange = (filterKey, value) => {
    const filters = { ...filtersData, [filterKey]: value };
    setFiltersData(filters);
    onChange(filters);
  };

  if (!columns || !columns.length) {
    return null;
  }

  return (
    <div className="bg-white pt-10 pb-8">
      <div className="container mx-auto px-5">
        <div className="flex flex-wrap -mx-2">
          { Object.keys(filtersData).map((filterKey) => (
            <div className="w-full md:w-1/4 px-2 mb-4" key={filterKey}>
              <Filter
                activeFilters={filtersData}
                value={filtersData[filterKey]}
                name={name}
                filterKey={filterKey}
                onChange={ handleChange }
              />
            </div>
          )) }
        </div>
      </div>
    </div>
  );
};

export default Filters;