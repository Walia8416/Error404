import {Dimensions, Image, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {heighttodp, widthtodp} from '../../../../constants/Dimenstions';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ImageContainer from '../../../helpers/header/ImageContainer';
import Images from '../../../../constants/icon';
const {width} = Dimensions.get('window');

const ProductCard = ({item}) => {
  return (
    <View style={styles.cardView}>
      <ImageContainer
        name={item.icon}
        style={{width: widthtodp(50), height: heighttodp(50)}}
      />
      <Text style={{color: 'black', marginTop: 10, fontWeight: 'bold'}}>
        {item.name}
      </Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: '#70ad6d',
    width: widthtodp(150),
    height: heighttodp(100),
    opacity: 0.8,
    elevation: 5,
    margin: 4,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#379432',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});
