import { HOURS } from 'lib/constants/constants';
import { getHourDescription } from 'lib/utils/getHours';
import React, { FC } from 'react';
import { Select } from 'uikit/components';
import { ISelectProps } from 'uikit/components/Select/Select';

interface IProps extends ISelectProps {
  duration?: number;
  setDuration: (newDuration: number) => void;
}

export const DurationSelect: FC<IProps> = ({ duration = undefined, setDuration, ...props }) => {
  return (
    <Select
      value={duration}
      onChange={(value) => setDuration(value)}
      options={HOURS.map((item) => ({
        value: item,
        label: `${item} ${getHourDescription(item)}`,
      }))}
      placement='topLeft'
      {...props}
    />
  );
};
