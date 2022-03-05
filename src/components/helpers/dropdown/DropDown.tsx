import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {Colors} from '../../../constants/colors';
import Images from '../../../constants/icon';
import React from 'react';

interface itemProps {
  image: any;
  name: string;
  key: string;
}

interface props {
  state: any | undefined;
  setState: React.Dispatch<
    React.SetStateAction<{
      top: number;
      right: number;
    }>
  >;
  check: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
  items: itemProps;
  setItems: React.Dispatch<React.SetStateAction<itemProps>>;
  width?: string | number;
  positionTop?: number;
}

const DropDown = ({
  state,
  setState,
  items,
  check,
  setCheck,
  width,
  positionTop,
  left,
}: props) => {
  const arrowRef = React.useRef<TouchableOpacity>({});

  const animationvalue = React.useRef(new Animated.Value(0)).current;

  const getPosition = () => {
    if (!check) {
      arrowRef.current.measure(
        (dx, dy, dropdownWidth, dropdownHeight, left, top) => {
          let wid = width ? width : 328;

          setState({
            ...state,
            position: 'absolute',
            left: left - wid + 18 + 16,
            top: positionTop ? positionTop : top + 35,
          });
        },
      );
    }
  };

  const animation = () => {
    check
      ? (setCheck(false),
        Animated.timing(animationvalue, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }).start())
      : (setCheck(true),
        Animated.timing(animationvalue, {
          toValue: 1,
          duration: 100,
          useNativeDriver: false,
        }).start());
  };

  const rotateX = animationvalue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <TouchableWithoutFeedback
      onPressIn={() => getPosition()}
      onPressOut={() => animation()}>
      <View style={[styles.main, {width: width ? width : 328, left: left}]}>
        <View style={styles.leftContainer}>
          {items.image ? (
            <Image
              source={items.image}
              style={{
                width: 24,
                height: 24,
                marginHorizontal: 12,
              }}
              resizeMode={'contain'}
            />
          ) : null}

          <Text style={[styles.text, {left: left}]}>{items.name}</Text>
        </View>

        <TouchableOpacity
          testID={'arrow'}
          ref={arrowRef}
          style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 16,
          }}
          onPressIn={() => getPosition()}
          onPressOut={() => animation()}>
          <Animated.Image
            source={Images.arrowdown}
            style={{
              width: 16,
              height: 16,
              borderRadius: 8,
              transform: [{rotateX}],
            }}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  main: {
    height: 48,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Inter-Regular',
    color: '#839fc0',
    fontSize: 14,
    // width: 258,
  },
  leftContainer: {
    flexDirection: 'row',
  },
});
