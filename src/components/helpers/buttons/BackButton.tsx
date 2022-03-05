import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import {heighttodp, widthtodp} from '../../../constants/Dimenstions';

import Images from '../../../constants/icon';

interface Props {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  testID?: string;
  marginTop?: number;
}
const BackButton: FC<Props> = ({marginTop, onPress, testID}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.back, {marginTop: marginTop ? marginTop : 20}]}
      testID={testID}>
      <Image
        height={24}
        resizeMode="contain"
        source={Images.backBlue}
        style={{width: widthtodp(24), height: heighttodp(24)}}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  back: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    marginTop: 20,
  },
});
