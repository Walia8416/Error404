import React from 'react';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import ResetPassword from '../components/screens/resetpassword/resetpassword';
import {Colors} from '../constants/colors';
import {Screen_Width} from '../constants/constants';
import {heighttodp, widthtodp} from '../constants/Dimenstions';
import {Regular, SemiBold} from '../constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: heighttodp(60),
    width: Screen_Width,
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
  headerText: {
    marginLeft: widthtodp(16),
    fontWeight: '500',
    fontSize: RFValue(14),
    fontFamily: Regular,
    color: Colors.navy,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: widthtodp(16),
    marginRight: widthtodp(16),
    marginTop: heighttodp(16),
    // marginBottom: heighttodp(16),
  },
  leftContainer: {
    width: '35%',
  },
  designCard: {
    padding: 10,
    marginHorizontal: 7,
    justifyContent: 'space-between',
    marginVertical: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rightContainer: {
    width: '65%',
    flexDirection: 'column',
    marginLeft: widthtodp(12),
  },
  campaignID: {
    color: Colors.navy,
    fontWeight: '500',
    fontSize: RFValue(14),
    lineHeight: RFValue(21),
    fontFamily: SemiBold,
  },
  campaignDate: {
    fontWeight: '500',
    fontSize: RFValue(12),
    lineHeight: RFValue(21),
    marginTop: heighttodp(8),
    fontFamily: SemiBold,
    color: Colors.DarkGrey,
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: heighttodp(8),
  },
  locationText: {
    marginLeft: widthtodp(5),
    color: Colors.DimGray,
    fontWeight: '400',
    fontFamily: Regular,
    fontSize: RFValue(12),
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryTitle: {
    fontWeight: '400',
    fontFamily: Regular,
    color: Colors.grey,
    fontSize: RFValue(12),
    marginTop: heighttodp(4),
  },
  categoryData: {
    fontWeight: '400',
    fontFamily: Regular,
    fontSize: RFValue(12),
    marginTop: heighttodp(4),
    color: Colors.DarkGrey,
  },
  bookedContainer: {
    flexDirection: 'row',
    marginBottom: heighttodp(22),
  },
  buttonContainer: {
    flexDirection: 'row',
    width: widthtodp(130),
    height: heighttodp(32),
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 7,
  },
  pendingText: {
    color: '#F7AC09',
    fontWeight: '500',
    fontSize: RFValue(12),
    lineHeight: RFValue(18),
    fontFamily: SemiBold,
  },
  completeText: {
    color: Colors.success,
    fontWeight: '500',
    fontSize: RFValue(12),
    lineHeight: RFValue(18),
    fontFamily: SemiBold,
  },
  info: {
    height: heighttodp(30),
    borderWidth: 1.4,
    width: widthtodp(40),
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.navy,
  },
  infoText: {
    fontSize: RFValue(20),
    color: Colors.navy,
  },
});
