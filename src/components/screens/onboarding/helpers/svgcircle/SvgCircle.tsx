import {GestureResponderEvent, TouchableOpacity, View} from 'react-native';
import Svg, {Circle, CircleProps, G} from 'react-native-svg';

import NavButton from '../navbutton/NavButton';
import React from 'react';

interface Props {
  size: number;
  center: number;
  radius: number;
  stroke: number;
  progressRef:
    | React.LegacyRef<React.Component<CircleProps, any, any>>
    | undefined;
  circumference: number;
  disabled?: boolean | undefined;
  activeColor?: string | undefined;
  disableColor?: string | undefined;
  onPressBtn?: ((event: GestureResponderEvent) => void) | undefined;
}

const SvgCircle: React.FC<Props> = ({
  size,
  center,
  radius,
  stroke,
  progressRef,
  circumference,
  disabled,
  activeColor,
  disableColor,
  onPressBtn,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPressBtn}
      style={{width: 50, height: 50}}>
      <Svg width={size} height={size} style={{justifyContent: 'center'}}>
        <G rotation={-90} origin={center}>
          <Circle
            stroke="#E6E7E8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={stroke}
          />
          <View
            style={{
              height: 50,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <NavButton
              disabled={disabled}
              activeColor={'green'}
              disableColor={disableColor}
              onPressBtn={onPressBtn}
              position={false}
            />
          </View>
          <Circle
            ref={progressRef}
            stroke="#0074EF"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * 25) / 100}
            r={radius}
            cx={center}
            cy={center}
            strokeWidth={stroke}
          />
        </G>
      </Svg>
    </TouchableOpacity>
  );
};

export default SvgCircle;
