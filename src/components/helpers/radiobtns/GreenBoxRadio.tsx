import {Image, TouchableOpacity, View} from 'react-native';

import React from 'react';
import Images from '../../../constants/icon';

interface props {
  check: boolean;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
}

const GreenBoxRadio = ({check, onPress, onPressIn, onPressOut}: props) => {
  // const [check, setCheck] = React.useState(false);

  return (
    <TouchableOpacity
      onPress={onPress ? onPress : () => undefined}
      onPressIn={onPressIn ? onPressIn : () => undefined}
      onPressOut={onPressOut ? onPressOut : () => undefined}
      testID="greenboxradio"
      style={{
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#c4d7e7',
      }}>
      {check ? (
        <Image style={{width: 16, height: 16}} source={Images.greenCheckbox} />
      ) : (
        <View style={{width: 16, height: 16, backgroundColor: '#ffffff'}} />
      )}
    </TouchableOpacity>
  );
};

export default GreenBoxRadio;
