// Dummy Button
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface BottonProps {
  textsize?: number;
  text: string;
  onPress: () => void;
}

const Button: React.FC<BottonProps> = props => {
  return (
    <TouchableOpacity
      testID={'Btn'}
      style={{
        backgroundColor: '#e40678',
        height: 50,
        width: 100,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={props.onPress}>
      <Text
        testID={'screenName'}
        style={{
          fontSize: props.textsize ? props.textsize : 28,
          textAlign: 'center',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
