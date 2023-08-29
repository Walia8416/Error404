import {
  BottomTabBarOptions,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import {Colors} from '../../../constants/colors';
import {heighttodp, widthtodp} from '../../../constants/Dimenstions';
import BottomNavigation from '../navigations/bottomnavigation/BottomNavigation';

export const MytabBarone = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps<BottomTabBarOptions>) => {
  return (
    <View
      style={{
        height: heighttodp(60),
        backgroundColor: Colors.mi,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        elevation: 16,
      }}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const {options} = descriptors[route.key];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity onPress={() => onPress()} key={index.toString()}>
            {index === 0 && (
              <View style={styles.normalicon}>
                {isFocused ? (
                  <BottomNavigation
                    active={isFocused}
                    name={'Create Order'}
                    index={0}
                  />
                ) : (
                  <BottomNavigation
                    name={'Create Order'}
                    active={isFocused}
                    index={1}
                  />
                )}
              </View>
            )}

            {index === 1 && (
              <View style={styles.normalicon}>
                {isFocused ? (
                  <BottomNavigation
                    active={isFocused}
                    index={2}
                    name={'Orders'}
                  />
                ) : (
                  <BottomNavigation
                    active={isFocused}
                    name={'Orders'}
                    index={3}
                  />
                )}
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  middleicon: {
    width: 42,
    height: 42,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    backgroundColor: Colors.white,
  },
  normalicon: {
    width: 56,
    height: 42,
    alignItems: 'center',
  },
});
