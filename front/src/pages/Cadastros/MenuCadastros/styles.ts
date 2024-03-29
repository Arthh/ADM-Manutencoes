import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TittleMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  > h2 {
    color: ${props => props.theme.colors.info};
    font-size: 35px;

    padding-top: 20px;

    &:after {
      content: '';
      display: block;
      width: 55px;
      border-bottom: 6px solid ${props => props.theme.colors.info};
    }
  }
`;

export const Container = styled.div`
  flex-wrap: wrap;
  height: 40vh;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxOptions = styled(Link)`
  display: flex;
  width: 25%;
  height: 125px;
  text-decoration: none;
  margin-left: 20px;
  color: ${props => props.theme.colors.info};

  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.info};

  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
