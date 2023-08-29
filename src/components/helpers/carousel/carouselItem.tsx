import {Dimensions, Image, StyleSheet, View} from 'react-native';

import React, {useEffect, useState} from 'react';
import {SvgCssUri, SvgUri, SvgWithCssUri} from 'react-native-svg';
import {heighttodp} from '../../../constants/Dimenstions';

const {width} = Dimensions.get('window');

interface Props {
  item?: {url: string};
  itemStyle?: object;
  type?: string;
}
const styles = StyleSheet.create({
  cardView: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    elevation: 5,
    height: 'auto',
    marginHorizontal: 20,
    marginVertical: 12,
    paddingLeft: 2,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  image: {
    borderRadius: 10,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});

const CarouselItem = ({item, itemStyle}: Props) => {
  return (
    <View
      style={[styles.cardView, itemStyle ? itemStyle : {width: width - 40}]}>
      <Image source={item.image} style={styles.image} />
    </View>
  );
};

export default CarouselItem;
