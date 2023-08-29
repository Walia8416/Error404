import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './stylesheet';

const FormHeading = ({heading}: {heading: string}) => {
  return <Text style={styles.heading}>{heading}</Text>;
};

export default FormHeading;
