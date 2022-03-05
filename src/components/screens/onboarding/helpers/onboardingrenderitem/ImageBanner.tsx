import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import {heighttodp, widthtodp} from '../../../../../constants/Dimenstions';
interface ImageProps {
  imageBanner: ImageSourcePropType;
}

const ImageBanner: React.FC<ImageProps> = ({imageBanner}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: heighttodp(40),
        width: 'auto',
      }}>
      <Image
        source={imageBanner}
        resizeMode={'contain'}
        style={{width: widthtodp(211), height: heighttodp(53)}}
      />
    </View>
  );
};
export default ImageBanner;
