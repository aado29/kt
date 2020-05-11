import React from 'react';
import Filter from './Filter';

const Filters = ({ filtersData, name, onChange, onClear }) => {
  return (
    <div className="bg-white pt-10 pb-8">
      <div className="container mx-auto px-5">
        <div className="flex flex-wrap items-end -mx-2">
          { Object.keys(filtersData).map((filterKey) => (
            <div className="w-full md:w-1/5 px-2 mb-4" key={filterKey}>
              <Filter
                activeFilters={filtersData}
                name={name}
                filterKey={filterKey}
                onChange={onChange}
              />
            </div>
          )) }
          <div className="w-full md:w-1/5 px-2 mb-4">
            <button type="button" onClick={onClear} className="text-gray-800 text-sm leading-loose py-2 px-3">
              Limpiar filtros
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;