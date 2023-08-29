import {
  ButtonText,
  CircledButton,
  RoundedButton,
  SmallRoundedButton,
  TopRoundedButton,
} from '../../../styled_components/button';
import {Image, View} from 'react-native';
import {Medium, Regular, SemiBold} from '../../../constants/Fonts';

import React from 'react';

interface Props {
  bottom?: number;
  color?: string;
  disableColor?: string;
  disabled?: boolean;
  image?: string;
  onPressBtn: () => void;
  position?: string;
  right?: number;
  secondary?: boolean;
  style?: object;
  testID?: string;
  text?: string;
  width?: string | number;
  inactivebtnIcon?: string | NodeRequire;
  activebtnIcon?: string | NodeRequire;
  iconStyle?: {};
}

export const RoundButton: React.FC<Props> = ({
  activebtnIcon,
  bottom,
  color,
  disableColor,
  disabled,
  iconStyle,
  image,
  inactivebtnIcon,
  onPressBtn,
  position,
  right,
  secondary,
  style,
  testID,
  text,
  width,
}) => {
  return (
    <RoundedButton
      activeOpacity={0.65}
      bottom={bottom}
      color={color}
      disableColor={disableColor}
      disabled={disabled}
      onPress={onPressBtn}
      position={position}
      right={right}
      secondary={secondary}
      style={style}
      testID={testID}
      width={width}>
      {image && (
        <Image height={20} resizeMode={'center'} source={image} width={20} />
      )}

      {/* when text props is true render text */}
      {text && (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {activebtnIcon && (
            <Image
              source={activebtnIcon}
              style={[
                {width: 20, resizeMode: 'contain', marginRight: 5},
                iconStyle,
              ]}
            />
          )}
          {inactivebtnIcon && (
            <Image
              source={inactivebtnIcon}
              style={[
                {width: 20, resizeMode: 'contain', marginRight: 5},
                iconStyle,
              ]}
            />
          )}
          <ButtonText
            color={color}
            disableColor={disableColor}
            disabled={disabled}
            fontFamily={Medium}
            secondary={secondary}>
            {text}
          </ButtonText>
        </View>
      )}
    </RoundedButton>
  );
};

export const SmallRoundButton: React.FC<Props> = ({
  activebtnIcon,
  bottom,
  color,
  disableColor,
  disabled,
  iconStyle,
  image,
  inactivebtnIcon,
  onPressBtn,
  position,
  right,
  secondary,
  style,
  testID,
  text,
  width,
}) => {
  return (
    <SmallRoundedButton
      activeOpacity={0.65}
      bottom={bottom}
      color={color}
      disableColor={disableColor}
      disabled={disabled}
      onPress={onPressBtn}
      position={position}
      right={right}
      secondary={secondary}
      style={style}
      testID={testID}
      width={width}>
      {image && (
        <Image height={20} resizeMode={'center'} source={image} width={20} />
      )}

      {/* when text props is true render text */}
      {text && (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {activebtnIcon && (
            <Image
              source={activebtnIcon}
              style={[
                {width: 20, resizeMode: 'contain', marginRight: 5},
                iconStyle,
              ]}
            />
          )}
          {inactivebtnIcon && (
            <Image
              source={inactivebtnIcon}
              style={[
                {width: 20, resizeMode: 'contain', marginRight: 5},
                iconStyle,
              ]}
            />
          )}
          <ButtonText
            color={color}
            disableColor={disableColor}
            disabled={disabled}
            fontFamily={Regular}
            secondary={secondary}>
            {text}
          </ButtonText>
        </View>
      )}
    </SmallRoundedButton>
  );
};

export const TopRoundButton: React.FC<Props> = ({
  activebtnIcon,
  bottom,
  color,
  disableColor,
  disabled,
  iconStyle,
  image,
  inactivebtnIcon,
  onPressBtn,
  position,
  right,
  secondary,
  style,
  testID,
  text,
  width,
}) => {
  return (
    <TopRoundedButton
      activeOpacity={0.65}
      bottom={bottom}
      color={color}
      disableColor={disableColor}
      disabled={disabled}
      onPress={onPressBtn}
      position={position}
      right={right}
      secondary={secondary}
      style={style}
      testID={testID}
      width={width}>
      {image && (
        <Image height={20} resizeMode={'center'} source={image} width={20} />
      )}

      {/* when text props is true render text */}
      {text && (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {activebtnIcon && (
            <Image
              source={activebtnIcon}
              style={[
                {width: 20, resizeMode: 'contain', marginRight: 5},
                iconStyle,
              ]}
            />
          )}
          {inactivebtnIcon && (
            <Image
              source={inactivebtnIcon}
              style={[
                {width: 20, resizeMode: 'contain', marginRight: 5},
                iconStyle,
              ]}
            />
          )}
          <ButtonText
            color={color}
            disableColor={disableColor}
            disabled={disabled}
            fontFamily={SemiBold}
            secondary={secondary}>
            {text}
          </ButtonText>
        </View>
      )}
    </TopRoundedButton>
  );
};
export const CircleButton: React.FC<Props> = ({
  bottom,
  color,
  disableColor,
  disabled,
  image,
  onPressBtn,
  position,
  right,
  secondary,
  style,
  testID,
  text,
  width,
}) => {
  const imageurl = image;
  return (
    <CircledButton
      activeOpacity={0.65}
      bottom={bottom}
      color={color}
      disableColor={disableColor}
      disabled={disabled}
      onPress={onPressBtn}
      position={position}
      right={right}
      secondary={secondary}
      style={[style, {zIndex: 2}]}
      testID={testID}
      width={width}>
      {image && (
        <Image height={20} resizeMode={'center'} source={image} width={20} />
      )}

      {/* when text props is true render text */}
      {text && (
        <ButtonText
          color={color}
          disableColor={disableColor}
          disabled={disabled}
          fontFamily={Regular}
          secondary={secondary}>
          {text}
        </ButtonText>
      )}
    </CircledButton>
  );
};
