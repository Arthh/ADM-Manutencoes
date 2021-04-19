import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

type IInputProps = InputHTMLAttributes<HTMLInputElement> 


const Input: React.FC<IInputProps> = ({ defaultValue, ...rest }) => <Container defaultValue={defaultValue} {...rest} />;

export default Input;
