import React, { TextareaHTMLAttributes } from 'react';

import { Container } from './styles';

type ITextProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: React.FC<ITextProps> = ({ ...rest }) => <Container {...rest} />;

export default TextArea;
