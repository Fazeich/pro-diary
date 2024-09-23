import { HOURS } from 'lib/constants/constants';
import { getHours } from 'lib/utils/getHours';
import React, { FC } from 'react';
import { Select } from 'uikit/components';
import { ISelectProps } from 'uikit/components/Select/Select';

interface IProps extends ISelectProps {
  duration?: number;
  setDuration: (newDuration: number) => void;
}

export const DurationSelect: FC<IProps> = ({ duration = 1, setDuration, ...props }) => {
  return (
    <Select
      value={duration}
      onChange={(value) => setDuration(value)}
      options={HOURS.map((item) => ({
        value: item,
        label: `${item} ${getHours(item)}`,
      }))}
      placement='topLeft'
      {...props}
    />
  );
};
