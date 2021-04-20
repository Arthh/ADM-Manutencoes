import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MH;

  background-color: ${props => props.theme.colors.info};

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 0 10px;

  border-bottom: 1px solid ${props => props.theme.colors.white};
`;

export const CompanyName = styled.h3`
  padding-left: 20px;

  color: ${props => props.theme.colors.white};
`;

