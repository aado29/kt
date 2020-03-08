import React from 'react';
import MUIDataTable from 'mui-datatables';

const Table = props => {
  const { data, columns, options } = props;
  return (
    <>
      <MUIDataTable
        // title={'Employee List'}
        data={data}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default Table;
