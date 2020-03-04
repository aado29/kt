import React from 'react';
import Button from 'components/commons/Button/Button';

import './Navigation.scss';

const Navigation = props => {
  const { withOutNav } = props;
  return (
    <>
      {!withOutNav && (
        <>
          <Button url="equipos">Equipos</Button>
          <Button url="repuestos">Repuestos</Button>{' '}
        </>
      )}
    </>
  );
};

export default Navigation;
