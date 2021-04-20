import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  
  `;

export const Form = styled.form`
  width: 300px;
  height: auto;

  text-align: center;
  margin: 50px 0;


  h3 {
    margin-top: 5px;
    font-weight: normal;
  }
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

