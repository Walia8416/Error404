import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import React, {forwardRef, useImperativeHandle} from 'react';
import {Screen_Height, Screen_Width} from '../../../constants/constants';

import {Colors} from '../../../constants/colors';
import {heighttodp} from '../../../constants/Dimenstions';

interface Props {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  children?: JSX.Element[];
  startPosition?: number;
  from?: number;
  to?: number;
  containerStyle?: {};
  bottom?: Number;
}

const BottomUpModal = forwardRef(
  (
    {
      children,
      containerStyle,
      display,
      from,
      setDisplay,
      startPosition,
      to,
      bottom,
    }: Props,
    ref,
  ) => {
    const scrollUp = React.useRef(
      new Animated.Value(startPosition ? startPosition : 200),
    ).current;

    useImperativeHandle(ref, () => ({
      animationhandler() {
        setDisplay(true);
        return Animated.timing(scrollUp, {
          duration: 400,
          toValue: from ? from : -20,
          useNativeDriver: true,
        }).start();
      },
      animationhandlerclose() {
        setDisplay(false);
        return Animated.timing(scrollUp, {
          duration: 400,
          toValue: to ? to : 140,
          useNativeDriver: true,
        }).start();
      },
    }));
    const animationhandlerclose = () => {
      setDisplay(false);
      return Animated.timing(scrollUp, {
        duration: 400,
        toValue: to ? to : 150,
        useNativeDriver: true,
      }).start();
    };

    return (
      <>
        {display && (
          <View
            testID="overlay"
            onTouchStart={animationhandlerclose}
            style={styles.overlay}
          />
        )}
        <Animated.View
          testID="modalMainBody"
          style={[
            {
              transform: [{translateY: scrollUp}],
            },
            styles.bodyContainer,
            containerStyle,
          ]}>
          {children}
        </Animated.View>
      </>
    );
  },
);

export default BottomUpModal;

const styles = StyleSheet.create({
  overlay: {
    width: Screen_Width,
    backgroundColor: Colors.blueTransparent,
    height: Screen_Height,
    position: 'absolute',
    top: 0,
    bottom: 100,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  bodyContainer: {
    height: heighttodp(238),
    width: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: 400,
  },
});
