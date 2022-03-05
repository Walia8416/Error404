import {Image, ImageSourcePropType, Text, View} from 'react-native';
import {heighttodp, widthtodp} from '../../../../../constants/Dimenstions';

import {RFValue} from 'react-native-responsive-fontsize';
import React from 'react';
import {Screen_Width} from '../../../../../constants/constants';
import {SvgUri} from 'react-native-svg';
import ImageContainer from '../../../../helpers/header/ImageContainer';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface OnBoardingProps {
  item: {
    image: ImageSourcePropType;
    title: string;
    key: string;
    midImage: ImageSourcePropType;
    description: string;
  };
}

const OnBoardingRenderItem: React.FC<OnBoardingProps> = ({item}) => {
  return (
    <View
      style={{
        width: widthtodp(360),
        backgroundColor: 'white',
        height: heighttodp(539),
      }}>
      <View
        style={{
          width: widthtodp(360),
          height: heighttodp(292),
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: widthtodp(32),
          marginTop: heighttodp(30),
          marginBottom: heighttodp(18),
        }}>
        <ImageContainer
          name={item.midImage}
          style={{width: widthtodp(300), height: heighttodp(300)}}
        />
      </View>
      <View
        style={{
          width: 'auto',
          height: heighttodp(33),
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginBottom: heighttodp(8),
        }}>
        <Text
          style={{
            color: '#153059',
            fontSize: RFValue(22),
            fontFamily: 'Inter-SemiBold',
          }}>
          {item.title}
        </Text>
      </View>
      <View
        style={{
          width: widthtodp(328),
          // width: 'auto',
          height: heighttodp(63),
          // height: 'auto',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: RFValue(14),
            color: '#415f8b',
            textAlign: 'center',
            paddingHorizontal: widthtodp(7),
          }}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default OnBoardingRenderItem;
