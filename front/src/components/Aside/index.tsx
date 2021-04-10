/* eslint-disable jsx-a11y/aria-role */
import React from 'react';

import { MdDashboard, MdBookmark, MdExitToApp } from 'react-icons/md';
import { AiOutlinePlusCircle } from 'react-icons/ai';

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
        <LogoImg src={logoAsideImg} alt="ADM" />
        <Tittle>A.D.M</Tittle>
      </Header>

      <MenuContainer>
        <MenuItemLink href="/cadastros/menu">
          <AiOutlinePlusCircle />
          Cadastros
        </MenuItemLink>

        <MenuItemLink href="/">
          <MdBookmark />
          Consultas
        </MenuItemLink>

        <MenuItemLink href="/">
          <MdDashboard />
          Temp Template
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
