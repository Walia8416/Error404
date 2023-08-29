import {Image, Text, View} from 'react-native';

import React from 'react';
import Touch from '../Touch';

interface Props {
  Leftchildren?: React.ReactNode;
  Rightchildren?: React.ReactNode;
  activeColor?: string;
  inActiveColor?: string;
  disabled?: boolean;
  activeBackgroundColor?: string;
  InActiveBackgroundColor?: string;
  title?: string;
  iconStyle?: {};
  icon?: NodeRequire | string;
  containerStyle?: {};
  onPress?: () => void;
  textStyle?: {};
  imgStyle?: {};
}

const CustomButton = ({
  activeBackgroundColor,
  activeColor,
  containerStyle,
  disabled,
  icon,
  iconStyle,
  imgStyle,
  InActiveBackgroundColor,
  inActiveColor,
  Leftchildren,
  onPress,
  Rightchildren,
  textStyle,
  title,
}: Props) => {
  return (
    <Touch onPress={onPress} disabled={disabled}>
      <View
        style={[
          {
            backgroundColor: disabled
              ? InActiveBackgroundColor
              : activeBackgroundColor,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          },
          containerStyle,
        ]}>
        {Leftchildren}
        {title && (
          <Text
            style={[
              {color: disabled ? inActiveColor : activeColor},
              textStyle,
            ]}>
            {title}
          </Text>
        )}
        {icon && (
          <Image
            source={icon}
            style={[
              iconStyle,
              {width: 14, height: 14, resizeMode: 'contain'},
              imgStyle,
            ]}
          />
        )}
        {Rightchildren}
      </View>
    </Touch>
  );
};

export default CustomButton;
