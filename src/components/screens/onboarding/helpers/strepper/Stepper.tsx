import React from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {Screen_Width} from '../../../../../constants/constants';

interface StepperProps {
  data: {
    key: string;
    title: string;
    description: string;
    image: any;
    midImage: any;
  }[];
  scrollX: Animated.Value;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  width?: number;
  height?: number;
  testID?: string;
}

const Stepper: React.FC<StepperProps> = ({
  data,
  scrollX,
  top,
  right,
  left,
  bottom,
  width,
  height,
  testID,
}) => {
  return (
    <View
      testID={testID}
      style={[styles.pagination, {width: width ? width : 168}]}>
      {data.map((_, i) => {
        const inputRange = [
          (i - 1) * Screen_Width,
          i * Screen_Width,
          (i + 1) * Screen_Width,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 20, 8],
          extrapolate: 'clamp',
        });
        const translateX = scrollX.interpolate({
          inputRange,
          outputRange: [8, 20, 8],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#c4d7e7', '#fec703', '#c4d7e7'],
          extrapolate: 'clamp',
        });

        if (i == 1) {
          <Animated.View
            style={[
              styles.dot,
              {
                width: dotWidth,
                backgroundColor,
                position: 'absolute',
                zIndex: 1,

                transform: [{translateX}],
              },
            ]}
          />;
        }

        return (
          <Animated.View
            key={i.toString()}
            style={[styles.dot, {width: dotWidth, backgroundColor}]}
          />
        );
      })}
    </View>
  );
};

export default Stepper;

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#9EF8A5',
    marginTop: 10,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    width: 8,
    // backgroundColor:'#fec703'
  },
});
