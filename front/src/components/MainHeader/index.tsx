import React from 'react';

import { Container, Profile, Welcome, UserName, CompanyName } from './styles';

const MainHeader: React.FC = () => {
  return (
    <Container>
      <CompanyName> Fabricas Moura </CompanyName>

      <Profile>
        <Welcome>Arthur Ulhôa</Welcome>

        <UserName>Administrador</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
