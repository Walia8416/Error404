import {Animated, StyleSheet, View} from 'react-native';

import {Colors} from '../../../constants/colors';
import React from 'react';

interface Props {
  position: object;
  numberofpage?: number;
}

const styles = StyleSheet.create({
  dotView: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'center',
    width: '100%',
  },
});

const Pagingscroll = ({position, numberofpage}: Props) => {
  let array: number[] = [];
  for (let i = 0; i < numberofpage; ++i) {
    array.push(i);
  }
  return (
    <View style={styles.dotView}>
      {array.map((item, i: number) => {
        let opacity = position.interpolate({
          inputRange: [i - 1, i, i + 1],
          outputRange: [0.2, 1, 0.1],
          extrapolate: 'clamp',
        });
        // setCount(count => count + 1);
        return (
          <Animated.View
            key={item}
            style={{
              backgroundColor: Colors.green,
              borderRadius: 5,
              height: 8,
              margin: 5,
              opacity,
              width: 8,
            }}
          />
        );
      })}
    </View>
  );
};

export default Pagingscroll;
