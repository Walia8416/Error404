import {Dimensions, Image, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {heighttodp, widthtodp} from '../../../../constants/Dimenstions';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ImageContainer from '../../../helpers/header/ImageContainer';
import Images from '../../../../constants/icon';
import {ScrollView} from 'react-native-gesture-handler';
import {storeData} from './carData';
import {Screen_Width} from '../../../../constants/constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {Bold, Medium, Regular} from '../../../../constants/Fonts';
const {width} = Dimensions.get('window');

const ProductCard = ({item}) => {
  return (
    <View style={styles.cardView}>
      <ImageContainer
        name={Images.shop}
        style={{width: widthtodp(70), height: heighttodp(70)}}
      />
      <View style={{flex: 1, paddingLeft: 20}}>
        <Text style={styles.headText}>{item.name}</Text>
        <View style={{flexDirection: 'row'}}>
          <ImageContainer
            name={Images.location}
            style={{width: widthtodp(20), height: heighttodp(20)}}
          />
          <Text style={styles.loc}>{item.address}</Text>
        </View>
        <Text style={styles.loc}>ID {item._id}</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: widthtodp(Screen_Width - 50),
    height: heighttodp(120),

    elevation: 0,
    margin: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    padding: 15,
  },
  image: {
    borderRadius: 10,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  headText: {
    fontSize: RFValue(17),
    color: Colors.black,
    fontFamily: Bold,
  },
  loc: {
    fontSize: RFValue(11),
    color: Colors.black,
    fontFamily: Regular,
    paddingTop: 5,
  },
});
