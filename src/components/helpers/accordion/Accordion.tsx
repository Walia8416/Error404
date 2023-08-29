import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import DropDown from '../profile/DropDown';
import Images from '../../../constants/icon';
import {LightText} from '../../../styled_components/LightText';
import {NormalText} from '../../../styled_components/NormalText';
import React from 'react';
import {Colors} from '../../../constants/colors';
import {styles} from './stylesheet';

interface Props {
  title: string;
  openImage?: NodeRequire | string;
  closeImage?: NodeRequire | string;
  card?: [];
  addNewCard?: () => void;
  children?: React.ReactNode;
}

const Accordion = ({closeImage, openImage, title, children}: Props) => {
  return (
    <View>
      <DropDown
        closeImage={closeImage ? closeImage : Images.arrowup}
        data={{title}}
        openImage={openImage ? openImage : Images.arrowdown}
        textStyle={{textTransform: 'none', color: Colors.DimGray}}>
        {children}
      </DropDown>
    </View>
  );
};

export default Accordion;
