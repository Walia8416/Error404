import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Medium, Regular, SemiBold} from '../../../constants/Fonts';
import {Colors} from '../../../constants/colors';
import {heighttodp, widthtodp} from '../../../constants/Dimenstions';

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    backgroundColor: Colors.white,
  },
  inputText: {
    top: 30,
    height: heighttodp(80),
    marginHorizontal: widthtodp(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  terms: {
    height: heighttodp(18),
    marginTop: heighttodp(8),
    marginHorizontal: widthtodp(24),
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  forgot: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotText: {
    textAlignVertical: 'center',
    fontSize: RFValue(12),
    color: Colors.terms2,

    fontFamily: SemiBold,
  },
  login: {
    top: 30,
    marginTop: heighttodp(20),
    justifyContent: 'center',
    alignSelf: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
  loginBtn: {
    height: heighttodp(48),
    width: widthtodp(360 - 48),
    borderRadius: heighttodp(48),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  continueContainer: {
    borderRightColor: 'white',
    borderRightWidth: 1,
    paddingRight: 20,
    height: 40,
    justifyContent: 'center',
  },

  continueText: {
    fontFamily: Medium,
    fontSize: RFValue(14),
    color: Colors.lightGray,
  },

  socialMediaContainer: {
    borderBottomColor: Colors.Crimson,
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  loginText: {
    color: Colors.white,
    fontSize: RFValue(14),
    textAlign: 'center',
    fontFamily: Medium,
  },
  line: {
    top: 30,
    backgroundColor: Colors.Silver,
    height: 1,
    width: widthtodp(360 - 48),
    marginVertical: heighttodp(12),
    alignSelf: 'center',
  },
  singupView: {
    marginTop: heighttodp(18),
    height: heighttodp(27),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: widthtodp(360 + (220 - 360)),
    flexDirection: 'row',
  },
  dont: {
    fontFamily: Regular,
    fontSize: RFValue(14),
    color: Colors.dont,
  },
  link: {
    fontFamily: SemiBold,
    fontSize: RFValue(14),
    color: Colors.terms2,
  },
  eye: {
    position: 'absolute',
    right: widthtodp(16),
  },
  signInBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: heighttodp(40),
    width: '85%',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: heighttodp(7),
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 3,
  },
  signInImg: {
    marginHorizontal: widthtodp(15),
  },
  signInText: {
    fontFamily: Medium,
    fontSize: RFValue(14),
    alignSelf: 'center',
  },
});

export default styles;
