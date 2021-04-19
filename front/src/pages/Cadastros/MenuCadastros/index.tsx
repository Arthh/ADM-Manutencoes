import React from 'react';

import { Container, BoxOptions, TittleMenu } from './styles';

const menuOptions = [
  { name: 'Setor', value: 1, link: '/cadastros/setores' },
  { name: 'Maquinário', value: 2, link: '/cadastros/maquinario' },
  { name: 'Prestador De Serviço', value: 3, link: '/cadastros/prestservicos' },
  { name: 'Ordem De Manutenção', value: 4, link: '/cadastros/ordmanutencao' },
];

const MenuCadastros: React.FC = () => {
  return (
    <>
      <TittleMenu>
        <h2>Cadastros</h2>
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

export default MenuCadastros;
