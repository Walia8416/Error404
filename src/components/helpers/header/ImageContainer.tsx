import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';

import React from 'react';

interface Props {
  name: ImageSourcePropType;
  style?: object;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  testID?: string;
}
const ImageContainer = ({name, style, resizeMode, uri}: Props) => {
  return (
    <Image
      style={[style]}
      source={
        uri
          ? {
              uri: uri,
            }
          : name
      }
      resizeMode={resizeMode ? resizeMode : 'contain'}
    />
  );
};

export default ImageContainer;
