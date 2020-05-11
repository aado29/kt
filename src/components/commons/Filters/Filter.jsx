import React, { useState, useEffect } from 'react';
import apiService from './../../../services/apiService';

const Filter = ({ activeFilters, name, filterKey, value, onChange }) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ filterData, setFilterData ] = useState(false);

  const getFilterData = () => {
    const params = {};
    Object.keys(activeFilters).forEach((activeFilterKey) => {
      const value = activeFilters[activeFilterKey];
      if (value) {
        params[activeFilterKey] = [ value ];
      }
    });

    setIsLoading(true);
    apiService({
      method: 'get',
      url: `/${name}/filter/${filterKey}`,
      params
    })
      .then((data) => {
        setFilterData(data.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    onChange(filterKey, value);
  };

  useEffect(getFilterData, [activeFilters]);

  return (
    <div className="font-main antialiased">
      <label className="block text-gray-800 text-sm mb-2">
        Selected: { value }
      </label>
      { (isLoading || !filterData.length) && (
        <p className="w-full appearance-none rounded-lg bg-gray-100 text-sm leading-loose py-2 px-3">Cangando...</p>
      ) }
      { filterData.length && (
      <select
        className="w-full appearance-none rounded-lg bg-gray-100 text-sm leading-loose py-2 px-3 outline-none"
        onChange={ handleChange }
        defaultValue={value}
      >
        <option value={null}> Seleccionar </option>
        { filterData.map((filter, indexFilter) => (
          <option
            key={indexFilter}
            value={filter[filterKey]}
          >
            { filter[filterKey] }
          </option>
        )) }
      </select>
      ) }
    </div>
  );
};

export default Filter;
