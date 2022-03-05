import {Image, TouchableOpacity, View} from 'react-native';

import Images from '../../../../../constants/icon';
import React from 'react';

interface Props {
  setState?: React.Dispatch<React.SetStateAction<boolean>> | boolean | any;
  marginright?: number;
  state?: boolean;
  image?: string | NodeRequire;
}

const Checkbox: React.FC<Props> = ({image, marginright, setState, state}) => {
  const [check, setCheck] = React.useState(false);

  const checkHandler = () => {
    if (check) {
      setCheck(false);
      setState(false);
    } else {
      setCheck(true);
      setState(true);
    }
  };

  return (
    <View
      style={{
        width: 16,
        height: 16,
        borderWidth: 1,
        borderColor: '#C4D7E7',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: marginright ? marginright : 0,
      }}>
      {check || state ? (
        <TouchableOpacity
          testID={'checkboxtrue'}
          style={{
            width: 16,
            height: 16,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => checkHandler()}>
          <Image
            testID={'images'}
            resizeMode={'contain'}
            source={image ? image : Images.blueCheckbox}
            height={16}
            width={16}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          testID={'checkboxfalse'}
          onPress={() => checkHandler()}
          style={{width: 16, height: 16}}
        />
      )}
    </View>
  );
};

export default Checkbox;
