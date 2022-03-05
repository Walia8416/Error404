import React from 'react';
import Touch from './Touch';
import {View} from 'react-native';

interface Props {
  children?: any;
  itemStyle?: object; // for styling inner view
  onPress?: () => void;
  round?: number; // for borderRadius of outer view
  style?: object; //for styling outerview
  testID?:string
}
const CircleTouch = ({children, itemStyle, onPress, round, style,testID}: Props) => {
  return (
    <View
      
      style={[{borderRadius: round ? round : 20, overflow: 'hidden'}, style]}
      testID="stateTest">
      <Touch testID={testID} onPress={onPress}>
        <View style={itemStyle}>{children}</View>
      </Touch>
    </View>
  );
};

export default CircleTouch;
