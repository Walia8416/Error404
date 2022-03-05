import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {heighttodp, widthtodp} from '../../../../../constants/Dimenstions';

import {CircleProps} from 'react-native-svg';
import NavButton from '../navbutton/NavButton';
import {RFValue} from 'react-native-responsive-fontsize';
import React from 'react';
import {Screen_Width} from '../../../../../constants/constants';
import SvgCircle from '../svgcircle/SvgCircle';

interface Props {
  position?: string;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  onPressBtn: () => void;
  onPressText: () => void;
  disabled?: boolean;
  activeColor?: string;
  disableColor?: string;
  size?: number;
  percentage: any;
  testID?: string;
}

const NavigationButton: React.FC<Props> = ({
  position,
  top,
  left,
  onPressBtn,
  onPressText,
  bottom,
  right,
  disabled,
  activeColor,
  disableColor,
  size,
  percentage,
  testID,
}) => {
  let size_ = 50;
  let stroke = 2;
  let center = size_ / 2;
  let radius = size_ / 2 - stroke / 2;
  let circumference = 2 * Math.PI * radius;

  const progressAnimation = React.useRef(new Animated.Value(0)).current;
  const progressRef = React.useRef<
    React.Component<CircleProps, any, any> | any
  >(null);

  const animation = (toValue = 0) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  React.useEffect(() => {
    animation(percentage);
  }, [percentage]);

  React.useEffect(() => {
    progressAnimation.addListener(value => {
      const strokeDashoffset =
        circumference - (circumference * value.value) / 100;

      if (progressRef?.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
  }, [percentage]);

  return (
    <View testID={testID} style={[styles.main]}>
      <TouchableOpacity
        testID={'skip'}
        disabled={!disabled}
        activeOpacity={0.7}
        onPress={onPressText}
        style={[styles.left, {}]}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <SvgCircle
        center={center}
        circumference={circumference}
        progressRef={progressRef}
        radius={radius}
        size={size_}
        stroke={stroke}
        activeColor={activeColor}
        disableColor={disableColor}
        disabled={disabled}
        onPressBtn={onPressBtn}
      />
    </View>
  );
};

export default NavigationButton;
const styles = StyleSheet.create({
  main: {
    width: Screen_Width,
    height: heighttodp(50),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: widthtodp(40),
    backgroundColor: 'transparent',
    marginBottom: heighttodp(30),
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: 29,
    width: 'auto',
    height: heighttodp(21),
  },
  skipText: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(14),
    textAlign: 'center',
    color: '#fff',
  },
});
