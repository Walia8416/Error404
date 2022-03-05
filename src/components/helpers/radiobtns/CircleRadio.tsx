import {Image, TouchableOpacity} from 'react-native';

import Images from '../../../constants/icon';
import React from 'react';

interface props {
  disable?: boolean;
  check?: boolean;
  setCheck?: () => void;
}

const CircleRadio = ({disable, check, setCheck}: props) => {
  return (
    <TouchableOpacity
      disabled={disable}
      onPress={setCheck}
      testID={'cicleradio'}
      style={{
        width: 16,
        height: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#c4d7e7',
      }}>
      {check ? (
        <Image
          style={{width: 16, height: 16, borderRadius: 8}}
          source={Images.whiteRadio}
        />
      ) : (
        <Image
          style={{width: 16, height: 16, borderRadius: 8}}
          source={Images.greenRadio}
        />
      )}
    </TouchableOpacity>
  );
};

export default CircleRadio;
