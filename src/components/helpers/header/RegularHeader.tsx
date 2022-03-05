import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {heighttodp, widthtodp} from '../../../constants/Dimenstions';
import {Colors} from '../../../constants/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {Medium} from '../../../constants/Fonts';
import {useNavigation} from '@react-navigation/native';
import ImageContainer from './ImageContainer';
import Images from '../../../constants/icon';

interface props {
  heading: string;
  style?: object;
  children?: JSX.Element | JSX.Element[];
  src?: any;
  address?: any;
  rootname?: any;
}
const RegularHeader = ({
  heading,
  children,
  style,
  src,
  address,
  rootname,
}: props) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: heighttodp(50),
        elevation: 0.8,
        backgroundColor: Colors.white,
        justifyContent: 'center',
      }}>
      <View
        style={{
          marginHorizontal: widthtodp(16),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{width: '50%', flexDirection: 'row', alignItems: 'center'}}>
          {src ? (
            <TouchableOpacity
              onPress={() => navigation.navigate(rootname, {screen: address})}>
              <Image
                source={src}
                height={40}
                width={40}
                style={{marginRight: 15}}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.openDrawer()}>
              <Image
                source={Images.menu}
                height={50}
                width={50}
                style={{marginRight: widthtodp(16), marginLeft: widthtodp(5)}}
              />
            </TouchableOpacity>
          )}
          <Text
            style={{
              fontSize: RFValue(14),
              fontFamily: Medium,
              fontWeight: '500',
              color: Colors.DimGray,
            }}>
            {heading}
          </Text>
        </View>
        <View style={[style]}>{children}</View>
      </View>
    </View>
  );
};
export default RegularHeader;
