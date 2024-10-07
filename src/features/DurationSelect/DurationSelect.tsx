import { getHoursOptions } from 'lib/constants/constants';
import { getHourDescription } from 'lib/utils/getHours';
import React, { FC } from 'react';
import { Select } from 'uikit/components';
import { ISelectProps } from 'uikit/components/Select/Select';

interface IProps extends ISelectProps {
  duration?: number;
  setDuration: (newDuration: number) => void;
  hourDescription?: (option: number) => string;
}

export const DurationSelect: FC<IProps> = ({
  duration = undefined,
  setDuration,
  hourDescription = getHourDescription,
  ...props
}) => {
  return (
    <Select
      value={duration}
      onChange={(value) => setDuration(value)}
      options={getHoursOptions({
        getDescription: (item) => getHourDescription(item),
      })}
      placement='topLeft'
      {...props}
    />
  );
};
