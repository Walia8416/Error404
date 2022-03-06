import {Dimensions, StyleSheet} from 'react-native';
import {Medium, Regular, RobMono, RSem, SemiBold} from '../constants/Fonts';

import {Colors} from '../constants/colors';

import {Screen_Width, Screen_Height} from '../constants/constants';
import {heighttodp, widthtodp} from '../constants/Dimenstions';
import {RFValue} from 'react-native-responsive-fontsize';

const {width} = Dimensions.get('window');

export const Styles = StyleSheet.create({
  //home
  section: {
    marginHorizontal: 20,
    marginTop: 20,
    paddingBottom: 47,
  },

  //scrollItem
  CategoriesContainer: {
    marginVertical: heighttodp(5),
  },

  categoriesimage: {
    width: width / 7,
    height: width / 7,
    resizeMode: 'contain',
  },
  categoriestext: {
    fontSize: RFValue(11),
    marginTop: heighttodp(10),
    justifyContent: 'center',
    color: Colors.navy,
  },
  itemimage: {
    width: width / 5,
    height: width / 5,
    resizeMode: 'contain',
  },
  itemtext: {
    fontFamily: Medium,
  },
  iteminnerContainer: {
    padding: 8,
  },
  itemcontainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginRight: 10,
    margin: 3,
    borderWidth: 0.5,
    borderColor: Colors.SlateGray,
    borderRadius: 3,
    marginVertical: 5,
  },
  itemshadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 4.65,
    shadowOpacity: 0.27,
    elevation: 5,
  },

  // home section heading
  sectionheading: {
    fontFamily: RobMono,
    fontSize: RFValue(25),
    color: Colors.DarkGrey,
  },
  sectionlink: {
    fontSize: 14,
    fontFamily: Medium,
    color: Colors.link,
  },
  sectioncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageText: {
    fontSize: RFValue(12),
    fontFamily: Medium,
    fontWeight: '500',
    color: Colors.navy,
    alignSelf: 'center',
    marginTop: 5,
  },
  popupone: {
    flex: 1,
    width: Screen_Width,
    height: 100,
    paddingTop: heighttodp(20),
  },
  popuponeTopcontainer: {
    height: heighttodp(22),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  popuponeTopcontainertext: {
    fontFamily: Medium,
    fontSize: RFValue(14),
    color: Colors.DarkGrey,
    fontWeight: '400',
    marginLeft: widthtodp(8),
    alignSelf: 'center',
    bottom: heighttodp(0.5),
  },
  popuponebottomcontainer: {
    width: Screen_Width,
    height: heighttodp(200),
    paddingHorizontal: widthtodp(16),
    paddingTop: heighttodp(16),
  },
  Hbar: {
    width: '100%',
    height: heighttodp(1),
    backgroundColor: 'black',
    opacity: 0.2,
    marginBottom: heighttodp(16),
  },

  Mbar: {
    width: '100%',
    height: heighttodp(1),
    backgroundColor: '#E8EFF5',
    marginBottom: heighttodp(16),
  },
  radioselectcontainer: {
    height: heighttodp(30),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: heighttodp(16),
  },
  radioinnercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radiotext: {
    fontSize: RFValue(14),
    fontFamily: Regular,
    fontWeight: '400',
    marginLeft: widthtodp(16),
  },
  radioactive: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: Colors.Crimson,
    marginRight: widthtodp(2),
  },
  radiodeactive: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.Silver,
    marginRight: widthtodp(2),
  },
  getapptext: {
    color: Colors.Crimson,
    fontSize: RFValue(14),
    fontFamily: Medium,
    fontWeight: '400',
  },
  location: {
    fontFamily: Regular,
    fontSize: RFValue(12),
    color: Colors.text,
    marginLeft: 4,
  },
  mainLocation: {
    fontFamily: Medium,
    fontSize: RFValue(13),
    color: Colors.DarkGrey,
  },

  services: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 20,
  },
});
