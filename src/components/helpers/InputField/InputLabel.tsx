import {StyleSheet, Text, View} from 'react-native';

import {Colors} from '../../../constants/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import React from 'react';

interface Props {
  title: string;
}

const InputLabel: React.FC<Props> = ({title}: Props) => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default InputLabel;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    paddingVertical: 5,
    paddingLeft: 2,
  },
  text: {
    color: Colors.text,
    fontSize: RFValue(12),
  },
});
