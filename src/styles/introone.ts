import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../constants/colors';
import {heighttodp, widthtodp} from '../constants/Dimenstions';
import {Bold, Medium} from '../constants/Fonts';

export const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
  },
  titlecontainer: {
    height: heighttodp(24),
    marginTop: heighttodp(32),
    paddingLeft: widthtodp(16),
    marginBottom: heighttodp(12),
  },
  title: {
    fontFamily: Bold,
    fontSize: RFValue(16),
    fontWeight: '600',
    color: Colors.Crimson,
  },
  headingonecontainer: {
    marginTop: 50,
    height: heighttodp(27),
    paddingLeft: widthtodp(16),
    marginBottom: heighttodp(16),
  },
  headingone: {
    fontSize: RFValue(24),
    fontFamily: Bold,
    color: '#F20192',
    fontWeight: '600',
  },
  advert: {
    fontSize: RFValue(18),
    color: '#839FC0',
    marginBottom: 43,
  },
  countrysearchcontainer: {
    height: heighttodp(48),
    paddingHorizontal: widthtodp(16),
    marginBottom: heighttodp(16),
  },
  countryinnercontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.inputBorder,
    borderWidth: 1,
    borderRadius: 24,
  },
  searchimage: {
    marginVertical: heighttodp(12),
    marginHorizontal: widthtodp(12),
  },
  countrysearchinput: {
    display: 'flex',
    flex: 1,
    color: Colors.DarkGrey,
    fontSize: RFValue(14),
    fontFamily: Medium,
    fontWeight: '400',
    paddingRight: widthtodp(16),
  },
  flatlist: {
    height: heighttodp(130),
    backgroundColor: '#F7F9FF',
    paddingHorizontal: widthtodp(16),
    borderRadius: 8,
    marginHorizontal: 16,
    padding: 15,
    marginVertical: 20,
  },
  flatlistSelect: {
    height: heighttodp(130),
    backgroundColor: 'white',
    paddingHorizontal: widthtodp(16),
    borderRadius: 8,
    borderWidth: 2,
    marginHorizontal: 16,
    padding: 15,
    marginVertical: 20,
  },

  advertDesc: {
    fontSize: RFValue(14),
    color: '#839FC0',
  },
});
