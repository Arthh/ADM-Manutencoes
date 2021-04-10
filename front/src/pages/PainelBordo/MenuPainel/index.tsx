import React from 'react';

import { Container, BoxOptions, TittleMenu } from './styles';

const MenuPainel: React.FC = () => {
  const menuOptions = [
    { name: 'Lançamento', value: 1, link: '/painel/lancamento' },
    { name: 'Visão', value: 2, link: '/painel/visao' },
  ];

  return (
    <>
      <TittleMenu>
        <h2>Painel De Bordo</h2>
      </TittleMenu>
      <Container>
        {menuOptions.map(option => (
          <BoxOptions key={option.value} to={option.link}>
            {option.name}
          </BoxOptions>
        ))}
      </Container>
    </>
  );
};

export default MenuPainel;
