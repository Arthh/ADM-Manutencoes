import React from 'react';

import { Container, BoxOptions, TittleMenu } from './styles';

const menuOptions = [
  { name: 'Setor', value: 1, link: '/consultas/setores' },
  { name: 'Maquinário', value: 2, link: '/consultas/maquinario' },
  { name: 'Prestador De Serviço', value: 3, link: '/consultas/prestservicos' },
  { name: 'Ordem De Manutenção', value: 4, link: '/consultas/ordmanutencao' },
  { name: 'Compra De Material', value: 5, link: '/consultas/ordcompmaterial' },
];

const MenuConsultas: React.FC = () => {
  return (
    <>
      <TittleMenu>
        <h2>Consultas</h2>
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

export default MenuConsultas;
