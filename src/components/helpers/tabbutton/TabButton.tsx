import {Image, StyleSheet, Text, View} from 'react-native';

import {Colors} from '../../../constants/colors';
import Images from '../../../constants/icon';
import {Medium} from '../../../constants/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import React from 'react';
import Touch from '../Touch';

interface Props {
  title: string;
  image?: NodeRequire | string;
  onPress?: () => void;
  containerStyle?: {};
  itemStyle?: {};
}

const TabButton = ({
  containerStyle,
  image,
  itemStyle,
  onPress,
  title,
}: Props) => {
  return (
    <Touch onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        <Text style={[styles.text, itemStyle]}>{title}</Text>
        <Image
          source={image ? image : Images.frontarrowwhite}
          style={styles.image}
        />
      </View>
    </Touch>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderRadius: 4,
    justifyContent: 'space-between',
    backgroundColor: Colors.influencercardcolor,
  },
  text: {
    fontFamily: Medium,
    paddingRight: 10,
    color: Colors.DarkGrey,
    flexWrap: 'wrap',
    width: '70%',
    fontSize: RFValue(14),
  },
  image: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginLeft: 20,
  },
});
