export const setColumnsName = (columns) => {
  return columns.map((column) => {
    return {
      name: column,
      label: getLabelByKey(column),
      options: {
        filter: false,
        sort: false,
      },
    };
  });
};

export const getLabelByKey = key => {
  const labels = {
    customer: 'Customer',
  };

  return labels[key] ? labels[key] : key;
};

export const getFiltersParams = (filtersData) => {
  const params = {};
  Object.keys(filtersData).forEach((activeFilterKey) => {
    const value = filtersData[activeFilterKey];
    if (value) {
      params[activeFilterKey] = [ value ];
    }
  });

  return params;
};

export default {
  setColumnsName,
  getLabelByKey,
  getFiltersParams,
};