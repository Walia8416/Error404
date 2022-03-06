import {Dimensions, Image, StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ImageContainer from '../../helpers/header/ImageContainer';
import {heighttodp, widthtodp} from '../../../constants/Dimenstions';
import {RFValue} from 'react-native-responsive-fontsize';
import BottomUpModal from '../../helpers/bottomupmodal/bottomupmodal';
import ProductCard from '../home/helper/productCard';

const {width} = Dimensions.get('window');

const CropCard = ({item}) => {
  return (
    <View style={styles.cardView}>
      <ImageContainer
        name={item.icon}
        style={{width: widthtodp(80), height: heighttodp(50)}}
      />
      <Text
        style={{
          color: 'black',
          top: 30,
          fontSize: RFValue(15),
        }}>
        {item.name}
      </Text>
    </View>
  );
};

export default CropCard;

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: 'white',
    width: widthtodp(150),
    height: heighttodp(150),
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
