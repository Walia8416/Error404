import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

import React from 'react';

interface Props {
  children: any;
  onPress?: () => void;
  testID?: string;
  disabled?: boolean;
  style?: {};
}

const Touch = ({children, disabled, onPress, style, testID}: Props) => {
  let TouchComp: React.ElementType = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchComp = TouchableNativeFeedback;
  }

  // give width = auto  to make block having width which is required for it.

  return (
    <TouchComp
      style={[style]}
      disabled={disabled}
      onPress={onPress}
      testID={'touchtest'}
      useForegound>
      {children}
    </TouchComp>
  );
};

export default Touch;
