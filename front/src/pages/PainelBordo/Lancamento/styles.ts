import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  width: auto;

  height: auto;

  padding: 30px;

  border-radius: 10px;

  background-color: ${props => props.theme.colors.white};
`;

export const FormTitle = styled.div`
  display: flex;
  justify-content: center;

  > h1 {
    margin-bottom: 40px;

    color: ${props => props.theme.colors.info};

    &:after {
      content: '';
      display: block;
      width: 55px;
      border-bottom: 6px solid ${props => props.theme.colors.info};
    }
  }
`;

export const FormInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 3fr);
`;
