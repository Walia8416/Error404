import {Image, View} from 'react-native';

import {Colors} from '../../../constants/colors';
import CustomButton from './CustomButton';
import React from 'react';
import {SemiBold} from '../../../constants/Fonts';

interface Props {
  activeBackgroundColorLeft?: string;
  activeBackgroundColorRight?: string;
  activeColorLeft?: string;
  activeColorRight?: string;
  childrenLeft?: React.ReactNode;
  childrenRight?: React.ReactNode;
  containerStyleLeft?: {};
  containerStyleRight?: {};
  disableLeft?: boolean;
  disableRight?: boolean;
  iconLeft?: string | NodeRequire;
  iconRight?: string | NodeRequire;
  InActiveBackgroundColorLeft?: string;
  InActiveBackgroundColorRight?: string;
  inActiveColorLeft?: string;
  inActiveColorRight?: string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  titleLeft?: string;
  titleRight?: string;
  parentStyle?: {};
}

const BottomButtons = ({
  activeBackgroundColorLeft,
  activeBackgroundColorRight,
  activeColorLeft,
  activeColorRight,
  childrenLeft,
  childrenRight,
  containerStyleLeft,
  containerStyleRight,
  disableLeft,
  disableRight,
  iconLeft,
  iconRight,
  InActiveBackgroundColorLeft,
  InActiveBackgroundColorRight,
  inActiveColorLeft,
  inActiveColorRight,
  onPressLeft,
  onPressRight,
  parentStyle,
  titleLeft,
  titleRight,
}: Props) => {
  return (
    <View
      style={[
        {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
        },
        parentStyle,
      ]}>
      <CustomButton
        activeBackgroundColor={
          activeBackgroundColorLeft ? activeBackgroundColorLeft : Colors.white
        }
        activeColor={activeColorLeft ? activeColorLeft : Colors.DimGray}
        containerStyle={[
          {
            padding: 20,
            alignSelf: 'flex-start',
            borderTopLeftRadius: 20,
            flex: 1,
          },
          containerStyleLeft,
        ]}
        disabled={disableLeft}
        InActiveBackgroundColor={
          InActiveBackgroundColorLeft
            ? InActiveBackgroundColorLeft
            : Colors.inputBorder
        }
        inActiveColor={inActiveColorLeft ? inActiveColorLeft : Colors.white}
        onPress={onPressLeft}
        Rightchildren={
          childrenLeft ? (
            childrenLeft
          ) : (
            <Image
              source={iconLeft}
              style={{
                width: 20,
                height: 18,
                resizeMode: 'contain',
                marginLeft: 10,
              }}
            />
          )
        }
        textStyle={{fontSize: 18, fontFamily: SemiBold}}
        title={titleLeft}
      />
      <CustomButton
        activeBackgroundColor={
          activeBackgroundColorRight
            ? activeBackgroundColorRight
            : Colors.Crimson
        }
        activeColor={activeColorRight ? activeColorRight : Colors.white}
        containerStyle={[
          {
            padding: 20,
            alignSelf: 'flex-start',
            borderTopRightRadius: 20,
            flex: 1,
          },
          containerStyleRight,
        ]}
        disabled={disableRight}
        InActiveBackgroundColor={
          inActiveColorRight ? inActiveColorRight : Colors.inputBorder
        }
        inActiveColor={
          InActiveBackgroundColorRight
            ? InActiveBackgroundColorRight
            : Colors.white
        }
        onPress={onPressRight}
        Rightchildren={
          childrenRight ? (
            childrenRight
          ) : (
            <Image
              source={iconRight}
              style={{
                width: 14,
                height: 14,
                resizeMode: 'contain',
                marginLeft: 10,
              }}
            />
          )
        }
        title={titleRight}
        textStyle={{fontSize: 18, fontFamily: SemiBold}}
      />
    </View>
  );
};

export default BottomButtons;
