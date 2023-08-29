import {
  heightPercentageToDP as HDP,
  widthPercentageToDP as WDP,
} from 'react-native-responsive-screen';

export const widthtodp = (number: number) => {
  return WDP((number / 360) * 100 + '%');
};
export const heighttodp = (number: number) => {
  return HDP((number / 640) * 100 + '%');
};


