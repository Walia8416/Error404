import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Images from '../../../../../constants/icon';

interface Props {
  position?: string;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  onPressBtn: () => void;
  disabled?: boolean;
  activeColor?: string;
  disableColor?: string;
  size?: number;
  radius?: number;
}

const NavButton: React.FC<Props> = ({
  position,
  top,
  left,
  onPressBtn,
  bottom,
  right,
  disabled,
  activeColor,
  disableColor,
  size,
  radius,
}) => {
  return (
    <TouchableOpacity
      testID={'navBtn'}
      activeOpacity={0.7}
      disabled={disabled}
      style={[
        styles.right,
        {
          backgroundColor: disabled
            ? disableColor
              ? disableColor
              : '#c4d7e7'
            : activeColor
            ? activeColor
            : '#e40678',
        },
        ,
        {
          width: size ? size : 40,
          height: size ? size : 40,
          borderRadius: radius ? radius : 20,
          right: right ? right : 45,
          bottom: bottom ? bottom : 0,
        },
      ]}
      onPress={onPressBtn}>
      <Image
        resizeMode={'center'}
        source={Images.arrow}
        width={15}
        height={15}
      />
    </TouchableOpacity>
  );
};

export default NavButton;

const styles = StyleSheet.create({
  right: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 2,
  },
});
