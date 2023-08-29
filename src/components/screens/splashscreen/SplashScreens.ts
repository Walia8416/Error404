import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../../constants/colors';
import {heighttodp, widthtodp} from '../../../constants/Dimenstions';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9530b',
  },

  desigma: {
    width: widthtodp(225),
    height: heighttodp(185),
    bottom: 10,
  },
  logos: {
    width: widthtodp(175),
    alignSelf: 'center',
    height: heighttodp(200),
    marginBottom: 20,
  },
  tree: {width: widthtodp(306), height: heighttodp(150), bottom: 168},

  r1: {width: widthtodp(206), height: heighttodp(100), left: 35, bottom: 60},
  r2: {width: widthtodp(206), height: heighttodp(100), right: 40, bottom: 45},
  subsection: {
    alignSelf: 'center',
    justifyContent: 'center',

    marginBottom: 0,
  },
});

export default styles;
