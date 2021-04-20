/* eslint-disable jsx-a11y/aria-role */
import React from 'react';

import { MdBookmark, MdExitToApp } from 'react-icons/md';
import { AiOutlinePlusCircle, AiOutlineUserAdd } from 'react-icons/ai';


import logoAsideImg from '../../assets/logoAside.svg';
import { useAuth } from '../../hooks/AuthContext';

import {
  Container,
  Header,
  MenuContainer,
  MenuItemLink,
  LogoImg,
  MenuItemButton,
  Tittle,
} from './styles';

const Aside: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Header>
        <MenuItemLink href="/cadastros/menu">
        <LogoImg src={logoAsideImg} alt="ADM" />
        <Tittle>A.D.M</Tittle>
        </MenuItemLink>
      </Header>

      <MenuContainer>
        <MenuItemLink href="/cadastros/menu">
          <AiOutlinePlusCircle />
          Cadastros
        </MenuItemLink>

        <MenuItemLink href="/consultas/menu">
          <MdBookmark />
          Consultas
        </MenuItemLink>

        <MenuItemLink href="/cadastro/user">
          <AiOutlineUserAdd />
          Criar Usuario
        </MenuItemLink>
        

        <MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
