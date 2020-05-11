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

export default {
  setColumnsName,
  getLabelByKey,
};