import React from 'react';

import  Select, { OptionTypeBase, Props as SelectProps} from 'react-select';

type ISelectProps = SelectProps<OptionTypeBase> 


const SelectOptions: React.FC<ISelectProps> = ({ totalOptions, ...rest }) => <Select options={totalOptions} {...rest} />;


export default SelectOptions;
