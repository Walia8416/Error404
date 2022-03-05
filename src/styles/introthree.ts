import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../constants/colors';
import {heighttodp, widthtodp} from '../constants/Dimenstions';
import {Bold, Medium} from '../constants/Fonts';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    height: heighttodp(24),
    marginTop: heighttodp(32),
    paddingHorizontal: widthtodp(16),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headertext: {
    fontSize: RFValue(16),
    fontFamily: Bold,
    color: Colors.Crimson,
  },
  skipcontainer: {},
  skiptext: {
    fontFamily: Medium,
    fontSize: RFValue(14),
    color: Colors.inputBorder,
  },
  heading: {
    height: heighttodp(27),
    marginTop: heighttodp(12),
    paddingHorizontal: widthtodp(16),
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: heighttodp(16),
  },
  headingtext: {
    fontFamily: Bold,
    fontSize: RFValue(18),
    fontWeight: '600',
  },
  flatlistcontainer: {
    flex: 1,
    // marginTop: heighttodp(16),
    // paddingBottom: heighttodp(16),
  },
  horizontalbox: {
    height: heighttodp(53),
    paddingHorizontal: widthtodp(16),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  horizontalboxinner: {
    flex: 1,
    marginBottom: heighttodp(16),
    borderRadius: 6,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: widthtodp(16),
  },
  lefttext: {
    fontFamily: Medium,
    fontSize: RFValue(14),
  },
});
