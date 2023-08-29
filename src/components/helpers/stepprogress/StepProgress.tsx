import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {Medium, Regular} from '../../../constants/Fonts';
import Svg, {Circle, G} from 'react-native-svg';
import {heighttodp, widthtodp} from '../../../constants/Dimenstions';

import {Colors} from '../../../constants/colors';
import Images from '../../../constants/icon';
import {RFValue} from 'react-native-responsive-fontsize';
import React from 'react';

const StepProgressData = [
  'Choose Design',
  'Review Media',
  'Add-ons',
  'Payment',
];

interface ItemProps {
  item: string;
  index: number;
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const SvgCircleProgressAnimation = ({name}: {name: string}) => {
  const percentage = 500;
  const radius = widthtodp(20);
  const strockwidth = 5;
  const duration = 500;
  const color = Colors.Crimson;
  const delay = 0;
  const max = 100;
  const halfCircle = radius + strockwidth;
  const circlecircumference = 2 * Math.PI * radius;
  const maxpercentage = (100 * percentage) / max;
  const strockDashOffsets =
    circlecircumference - (circlecircumference * maxpercentage) / 100;

  const circleAnimationValue = useSharedValue(0);
  const animation = () => {
    circleAnimationValue.value = withDelay(
      50,
      withTiming(100, {duration: duration}),
    );
  };

  React.useEffect(() => {
    animation();
  }, []);

  const circleProps = useAnimatedProps(() => {
    const strokeDashoffset = circleAnimationValue.value;
    return {
      strokeDashoffset:
        circlecircumference - (circlecircumference * strokeDashoffset) / 100,
    };
  });

  return (
    <View
      style={{
        width: widthtodp(24),
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
        style={{zIndex: 3}}>
        <G rotation={'-90'} origin={`${halfCircle},${halfCircle}`}>
          <Circle
            cx={'50%'}
            cy={'50%'}
            stroke={color}
            strokeWidth={strockwidth}
            fill={'transparent'}
            r={radius}
            strokeOpacity={0.5}
          />
          <AnimatedCircle
            animatedProps={circleProps}
            cx={'50%'}
            cy={'50%'}
            stroke={color}
            strokeWidth={strockwidth}
            r={radius}
            fill={'transparent'}
            strokeDasharray={circlecircumference}
            strokeLinecap={'round'}
          />
        </G>
      </Svg>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Text style={styles.textone}>{name}</Text>
      </View>
    </View>
  );
};

const GrayCircle = ({name}: {name: string}) => {
  return (
    <View
      style={{
        width: widthtodp(24),
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <View
        style={{
          height: widthtodp(28),
          width: widthtodp(28),
          backgroundColor: '#f7f9ff',
          borderRadius: widthtodp(28 / 2),
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: Colors.Silver,
        }}>
        <Text
          style={{
            fontFamily: Medium,
            fontSize: RFValue(12),
            color: Colors.placeHolder,
          }}>
          {name}
        </Text>
      </View>
    </View>
  );
};

const GreenCircleAnimation = () => {
  return (
    <View
      style={{
        width: widthtodp(24),
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <View style={styles.texttwo}>
        <Image
          source={Images.tickwhite}
          style={{height: widthtodp(14), width: widthtodp(14)}}
          resizeMode={'contain'}
        />
      </View>
    </View>
  );
};

interface StepProgressProps {
  currentIndex: number;
}

const StepProgress = ({currentIndex}: StepProgressProps) => {
  const renderItem = ({item, index}: ItemProps) => {
    if (currentIndex === index) {
      return (
        <View style={styles.one}>
          <View style={styles.two}>
            <SvgCircleProgressAnimation name={(index + 1).toString()} />
          </View>
          <Text style={styles.three}>{item}</Text>
        </View>
      );
    }
    if (index > currentIndex) {
      return (
        <View style={styles.four}>
          <View
            style={{
              height: widthtodp(28),
              width: widthtodp(28),
              borderRadius: widthtodp(28 / 2),
              // justifyContent: 'center',
              // alignItems: 'center',
            }}>
            <GrayCircle name={(index + 1).toString()} />
          </View>
          <Text style={styles.five}>{item}</Text>
        </View>
      );
    }
    if (index < currentIndex) {
      return (
        <View style={styles.six}>
          <View style={styles.bottomView}>
            <GreenCircleAnimation />
          </View>
          <Text style={styles.bottomText}>{item}</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.line} />
      <View style={{height: heighttodp(60)}}>
        <FlatList
          keyExtractor={(item, _) => item}
          data={StepProgressData}
          renderItem={renderItem}
          horizontal
          contentContainerStyle={styles.flat}
        />
      </View>
    </View>
  );
};

export default StepProgress;

const styles = StyleSheet.create({
  textone: {
    backgroundColor: Colors.Crimson,
    height: widthtodp(24),
    width: widthtodp(24),
    borderRadius: widthtodp(24),
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: Medium,
    fontSize: RFValue(12),
    color: Colors.white,
  },
  texttwo: {
    height: widthtodp(28),
    width: widthtodp(28),
    backgroundColor: 'green',
    borderRadius: widthtodp(28 / 2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  flat: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: heighttodp(60),
    paddingHorizontal: widthtodp(16),
  },
  line: {
    height: 4,
    backgroundColor: Colors.Silver,
    position: 'relative',
    top: heighttodp(23),
    width: widthtodp(360 - 28 * 3),
    zIndex: -1,
    alignSelf: 'center',
  },
  main: {
    justifyContent: 'center',
    // height: '100%',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  bottomText: {
    textAlign: 'center',
    textAlignVertical: 'bottom',
    fontSize: RFValue(10),
    marginTop: heighttodp(4),
    fontFamily: Regular,
    color: Colors.placeHolder,
  },
  bottomView: {
    height: widthtodp(28),
    width: widthtodp(28),
    borderRadius: widthtodp(28 / 2),
  },
  one: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: heighttodp(60),
    // backgroundColor:'red',
    paddingTop: heighttodp(6),
  },
  two: {
    height: widthtodp(28),
    width: widthtodp(28),
    borderRadius: widthtodp(28 / 2),
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  three: {
    textAlign: 'center',
    textAlignVertical: 'bottom',
    fontSize: RFValue(10),
    fontFamily: Medium,
    marginTop: heighttodp(4),
    color: Colors.DarkGrey,
  },
  four: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: heighttodp(60),
    // backgroundColor:'red'
    paddingTop: heighttodp(6),
  },
  five: {
    textAlign: 'center',
    textAlignVertical: 'bottom',
    fontSize: RFValue(10),
    fontFamily: Regular,
    color: Colors.placeHolder,
    marginTop: heighttodp(4),
  },
  six: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: heighttodp(60),
    // backgroundColor:'red'
    paddingTop: heighttodp(6),
  },
});
