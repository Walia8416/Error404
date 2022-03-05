import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {heighttodp, widthtodp} from '../../../../../constants/Dimenstions';

import Images from '../../../../../constants/icon';
import React from 'react';

interface Props {
  activeColor?: string;
  bottom?: number;
  disableColor?: string;
  disabled?: boolean;
  left?: number;
  onPressBtn: ((event: GestureResponderEvent) => void) | undefined;
  position?: boolean;
  right?: number;
  size?: number;
  top?: number;
}
const styles = StyleSheet.create({
  right: {
    borderRadius: 22,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    width: 44,
  },
});

const NavButton: React.FC<Props> = ({
  onPressBtn,
  disabled,
  activeColor,
  disableColor,
  position,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled}
      onPress={onPressBtn}
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
          position: 'absolute',
          zIndex: 10,
        },
      ]}>
      <Image
        resizeMode={'center'}
        source={Images.frontarrowwhite}
        style={{width: widthtodp(15), height: heighttodp(15)}}
      />
    </TouchableOpacity>
  );
};

export default NavButton;
