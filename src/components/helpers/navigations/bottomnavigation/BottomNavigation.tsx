import React from 'react';
import {View, Text, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../../../constants/colors';
import {heighttodp, widthtodp} from '../../../../constants/Dimenstions';
import {Medium, Regular} from '../../../../constants/Fonts';
import Images from '../../../../constants/icon';
import ImageContainer from '../../header/ImageContainer';

const images = [
  Images.home,
  Images.home,
  Images.crop,
  Images.crop,
  Images.weather,
  Images.weather,
  Images.store,

  Images.store,
  Images.learngray,
  Images.shorts,
  Images.shortsgray,
];

const BottomNavigation = ({
  index,
  name,
  active,
}: {
  index: number;
  name?: string;
  active?: boolean;
}) => {
  images[index];

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          height: heighttodp(24),
          width: widthtodp(24),
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 5,
        }}>
        <ImageContainer
          name={images[index]}
          style={{width: widthtodp(35), height: heighttodp(35)}}
        />
      </View>
      {name && (
        <View
          style={{
            width: widthtodp(80),
            alignItems: 'center',
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: active ? Medium : Regular,
              fontWeight: active ? '500' : '400',
              color: active ? '#ffde59' : Colors.FeatherWhite,
              fontSize: RFValue(8),
            }}>
            {name}
          </Text>
        </View>
      )}
    </View>
  );
};

export default BottomNavigation;
