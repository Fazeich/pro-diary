export const getHours = (duration?: number) => {
  switch (duration) {
    case 1:
    case 21:
      return 'час';
    case 2:
    case 3:
    case 4:
    case 22:
    case 23:
    case 24:
      return 'часа';
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
      return 'часов';
    default:
      return '-';
  }
};
