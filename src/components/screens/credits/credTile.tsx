import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {heighttodp, widthtodp} from '../../../constants/Dimenstions';
import {RFValue} from 'react-native-responsive-fontsize';
import ImageContainer from '../../helpers/header/ImageContainer';

const {width} = Dimensions.get('window');

const CredTile = ({item}) => {
  return (
    <View style={styles.cardView}>
      <ImageContainer
        name={item.image}
        style={{
          width: widthtodp(100),
          height: heighttodp(120),
          borderRadius: 10,
        }}
      />
      <View style={{marginTop: 20, marginLeft: 20, width: widthtodp(150)}}>
        <Text style={{fontWeight: 'bold', fontSize: RFValue(16)}}>
          {item.name}
        </Text>
        <Text style={{color: 'gray'}}>{item.bio}</Text>
      </View>
    </View>
  );
};

export default CredTile;

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: 'white',
    width: widthtodp(300),
    height: heighttodp(150),
    opacity: 0.8,
    elevation: 5,
    margin: 5,
    flexDirection: 'row',
    padding: 20,
  },
  image: {
    borderRadius: 10,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});
