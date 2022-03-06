import {Animated, Easing, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

import React from 'react';

const Loading = () => {
  return (
    <View style={styles.main}>
      <LottieView source={require('./loading.json')} autoPlay loop />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(225,225,225,0.5)',
    zIndex: 50,
  },
});
