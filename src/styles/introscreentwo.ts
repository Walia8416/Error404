import { StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import { Bold, Medium } from '../constants/Fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import { heighttodp, widthtodp } from '../constants/Dimenstions';
import { SemiBold, Regular } from '../constants/Fonts';

export const styles = StyleSheet.create({
  //parent component styles

  skipButton: {
    fontSize: RFValue(14),
    lineHeight: 21,
    fontFamily: Bold,
    color: Colors.grey,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: heighttodp(24),
    marginTop: heighttodp(32),
    paddingHorizontal: widthtodp(16),
  },
  startHeading: {
    color: Colors.Crimson,
    fontFamily: Bold,
    fontSize: RFValue(16),
  },
  chooseOption: {
    fontSize: RFValue(18),
    fontFamily: Bold,
    color: Colors.navy,
    fontWeight: '600',
  },
  heading: {
    height: heighttodp(27),
    marginTop: heighttodp(12),
    paddingHorizontal: widthtodp(16),
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: heighttodp(16),
  },
  //child component styles

  container: {
    backgroundColor: Colors.white,
    height: '100%',
    paddingRight: widthtodp(5),
    paddingLeft: widthtodp(5),
  },
  components: {
    flexDirection: 'row',
    height: heighttodp(53),
    paddingHorizontal: widthtodp(16),
    marginHorizontal: widthtodp(16),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 6,
    marginBottom: heighttodp(16),
  },
  componentText: {
    fontSize: RFValue(14),
    fontFamily: Medium,
  },
});
