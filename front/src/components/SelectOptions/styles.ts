import styled from 'styled-components';
import Select from 'react-select';

export const Container = styled(Select)`
  width: 100%;

  margin: 7px 0;
  padding: 10px;

  background-color: white;

  border-radius: 5px;

  border: 1px solid ${props => props.theme.colors.info};
`;
