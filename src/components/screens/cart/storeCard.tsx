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

const {width} = Dimensions.get('window');

const StoreCard = ({item}) => {
  return (
    <View style={styles.cardView}>
      {/*<ImageContainer
        name={item.icon}
        style={{width: widthtodp(80), height: heighttodp(50)}}
  />*/}
      <View style={{flexDirection: 'row', width}}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: RFValue(14),
            width: widthtodp(150),
            left: 120,
          }}>
          {item.name}
        </Text>
      </View>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: RFValue(20),
          left: 120,
          marginTop: 50,
        }}>
        Rs {item.price}/-
      </Text>
      <TouchableOpacity>
        <Text
          style={{
            color: 'white',
            backgroundColor: 'green',
            padding: 10,
            borderRadius: 10,
            fontSize: RFValue(17),
            left: 120,
            marginTop: 5,
            width: widthtodp(95),
          }}>
          Buy Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StoreCard;

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: 'white',
    width: widthtodp(300),
    height: heighttodp(150),
    opacity: 0.8,
    elevation: 5,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#379432',
    padding: 20,
  },
  image: {
    borderRadius: 10,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});
