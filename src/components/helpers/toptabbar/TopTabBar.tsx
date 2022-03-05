import {Animated, StyleSheet, Text, View} from 'react-native';
import {Medium, Regular} from '../../../constants/Fonts';

import {Colors} from '../../../constants/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import React from 'react';
import {Screen_Width} from '../../../constants/constants';
import Touch from '../Touch';

interface Props {
  tab1: string;
  tab2: string;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
  itemStyle?: {};
  barStyle?: {};
  containerStyle?: {};
}

const TopTabBar = ({
  barStyle,
  containerStyle,
  itemStyle,
  setState,
  state,
  tab1,
  tab2,
}: Props) => {
  const animation = React.useRef(new Animated.Value(0)).current;
  const activeHandler = (index: number) => {
    setState(index);
    if (index === 1) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: Screen_Width / 2,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={[containerStyle]}>
      <View style={styles.main}>
        <Touch onPress={() => activeHandler(1)} testID={'activeHandler1'}>
          <View
            style={[
              styles.deactive,
              {backgroundColor: state === 1 ? Colors.Silver : 'transparent'},
            ]}>
            <View style={{paddingVertical: 20}}>
              <Text
                style={[
                  styles.deactiveText,
                  itemStyle,
                  {
                    fontFamily: state === 1 ? Medium : Regular,
                    color: state === 1 ? Colors.DarkGrey : Colors.DimGray,
                  },
                ]}>
                {tab1}
              </Text>
            </View>
          </View>
        </Touch>
        <Touch onPress={() => activeHandler(2)} testID={'activeHandler2'}>
          <View
            style={[
              {
                paddingVertical: 20,
                backgroundColor: state === 2 ? Colors.Silver : 'transparent',
              },
              styles.deactive,
            ]}>
            <Text
              style={[
                styles.deactiveText,
                itemStyle,
                {
                  fontFamily: state === 2 ? Medium : Regular,
                  color: state === 2 ? Colors.DarkGrey : Colors.DimGray,
                },
              ]}>
              {tab2}
            </Text>
          </View>
        </Touch>
      </View>
      <Animated.View
        style={[{transform: [{translateX: animation}]}, styles.bar, barStyle]}
      />
    </View>
  );
};

export default TopTabBar;
const styles = StyleSheet.create({
  main: {flexDirection: 'row', position: 'relative', width: '100%'},
  bar: {
    width: '50%',
    height: 2,
    backgroundColor: Colors.Crimson,
    bottom: 0,
    position: 'absolute',
    zIndex: 100,
  },
  deactive: {
    justifyContent: 'center',
    flex: Screen_Width / 2,
    borderBottomWidth: 1,
    borderColor: Colors.Silver,
  },
  deactiveText: {
    fontSize: RFValue(14),
    textAlign: 'center',
  },
});
