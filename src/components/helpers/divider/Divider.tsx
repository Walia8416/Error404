import {View} from 'react-native';
import React from 'react';
import {styles} from './stylesheet';
interface Props {
  style?: any;
}
const Divider = ({style}: Props) => <View style={[styles.line, style]} />;

export default Divider;
