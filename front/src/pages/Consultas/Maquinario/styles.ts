import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  `;

export const FormTitle = styled.div`
  display: flex;
  justify-content: center;

  > h1 {
    color: ${props => props.theme.colors.info};

    &:after {
      content: '';
      display: block;
      width: 55px;
      border-bottom: 6px solid ${props => props.theme.colors.info};
    }
  }
`;

export const TableItens = styled.table`
  margin-top: 60px;
  width: 100%;
  text-align: center;

  border-collapse: collapse;

  color: ${props => props.theme.colors.info};

  th,td {
  width: 15%;
  padding: 15px;
  }

  td {
    padding: 10px 0;
  }

  tr {
    border: 1px solid #dddddd;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }


`;

