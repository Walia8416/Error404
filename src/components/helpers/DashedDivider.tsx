import {StyleSheet, Text, View} from 'react-native';

import {Colors} from '../../constants/colors';
import React from 'react';

interface Props {
  borderstyle?: any;
  color?: string;
  Style?: {};
}

const DashedDivider = ({borderstyle, color, Style}: Props) => {
  return (
    <View
      style={[
        styles.mainView,
        Style,
        {
          borderColor: color ? color : Colors.Silver,
          borderStyle: borderstyle ? borderstyle : 'dashed',
        },
      ]}>
      <View style={styles.innertViewHorizontal} />
      <View style={styles.innertViewVertical} />
      <View style={styles.innertViewVertical} />
    </View>
  );
};

export default DashedDivider;

const styles = StyleSheet.create({
  innertViewHorizontal: {
    position: 'absolute',
    left: -1,
    top: -1,
    width: '100%',
    height: 1,
    backgroundColor: 'white',
  },
  innertViewVertical: {
    position: 'absolute',
    right: -1,
    top: -1,
    width: 1,
    height: '100%',
    backgroundColor: 'white',
    zIndex: 1,
  },
  mainView: {
    height: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 1,
    borderStyle: 'dashed',
    zIndex: 0,
  },
});
