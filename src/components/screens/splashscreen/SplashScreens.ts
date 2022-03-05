import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {heighttodp, widthtodp} from '../../../constants/Dimenstions';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9EF8A5',
  },

  desigma: {
    width: widthtodp(225),
    height: heighttodp(185),
    bottom: 10,
  },
  admybrand: {width: widthtodp(206), height: heighttodp(100), bottom: 238},
  tree: {width: widthtodp(306), height: heighttodp(150), bottom: 168},

  r1: {width: widthtodp(206), height: heighttodp(100), left: 35, bottom: 60},
  r2: {width: widthtodp(206), height: heighttodp(100), right: 40, bottom: 45},
  subsection: {top: 230, justifyContent: 'center', alignItems: 'center'},
});

export default styles;
