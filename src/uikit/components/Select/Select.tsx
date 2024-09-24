import React, { FC } from 'react';
import { StyledSelect } from './styles';
import { SelectProps } from 'antd';
import { DefaultOptionType } from 'antd/es/select';

export interface ISelectProps extends SelectProps {
  width?: string | number;
  fontSize?: number;
  getDisabledOption?: (option: DefaultOptionType) => boolean;
}

export const Select: FC<ISelectProps> = ({
  options,
  width,
  fontSize = 18,
  getDisabledOption,
  ...props
}) => {
  return (
    <StyledSelect
      style={{
        width,
      }}
      fontSize={fontSize}
      {...props}
    >
      {options?.map((option) => (
        <StyledSelect.Option
          value={option?.value}
          style={{
            fontSize,
          }}
          disabled={getDisabledOption ? getDisabledOption(option) : false}
        >
          {option?.label || option?.value}
        </StyledSelect.Option>
      ))}
    </StyledSelect>
  );
};
