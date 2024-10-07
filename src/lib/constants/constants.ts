export const HOURS = [
  undefined,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
];

interface IHoursOptionsParams {
  getDescription: (item?: number) => string;
}

export const getHoursOptions = ({ getDescription }: IHoursOptionsParams) =>
  HOURS.map((item) => {
    if (!!item) {
      return {
        value: item,
        label: `${item} ${getDescription ? getDescription(item) : ''}`,
      };
    }

    return {
      value: '',
      label: 'Не указано',
    };
  });

export const IMPORTANCE_OPTIONS = [
  { label: 'Важно', value: 1 },
  { label: 'Второстепенно', value: 2 },
  { label: 'Не указано', value: undefined },
];

export const HEADER_HEIGHT = 55;
export const FOOTER_HEIGHT = 55;
