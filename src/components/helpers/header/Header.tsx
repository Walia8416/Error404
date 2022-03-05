import {
  Dimensions,
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Container} from '../../../styled_components/layout';
import ImageContainer from './ImageContainer';
import Images from '../../../constants/icon';
import React from 'react';
import {heighttodp, widthtodp} from '../../../constants/Dimenstions';
import {Medium} from '../../../constants/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../../constants/colors';

const {width} = Dimensions.get('window');

const Header = ({navigation, onPress, scroll, testID, title}) => {
  return (
    <Container style={[styles.container, {elevation: scroll ? 6 : 0}]}>
      <View style={styles.flexing}>
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
          <ImageContainer
            testID={testID}
            name={title ? Images.back : Images.menu}
            style={{width: 26, height: 26, marginLeft: 0}}
          />
        </TouchableOpacity>

        {title ? (
          <Text
            style={{
              marginLeft: 82,
              fontSize: RFValue(18),
              color: '#ffde59',
              fontWeight: 'bold',
            }}>
            {title}
          </Text>
        ) : (
          <ImageContainer
            name={Images.logoLin1}
            style={{width: widthtodp(280), height: heighttodp(30)}}
          />
        )}
      </View>
    </Container>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    backgroundColor: '#039172',
  },
  flexing: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  marketingcontainer: {
    marginLeft: widthtodp(12),
    alignItems: 'center',
  },
  marketingbtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marketingtext: {
    fontFamily: Medium,
    fontSize: RFValue(14),
    fontWeight: '500',
    color: Colors.DimGray,
  },
});
