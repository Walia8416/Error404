import {Dimensions, Image, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {heighttodp, widthtodp} from '../../../constants/Dimenstions';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Screen_Width} from '../../../constants/constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {Bold, Medium, Regular} from '../../../constants/Fonts';
const {width} = Dimensions.get('window');

const OrderCard = ({item}) => {
  return (
    <View style={styles.cardView}>
      <View style={{flex: 1, paddingLeft: 10}}>
        <Text style={styles.headText}>Invoice - {item.invoiceId}</Text>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.loc}>Customer Name - {item.customerName}</Text>
          <Text style={styles.loc}>
            Customer Address - {item.customerAddress}
          </Text>
          <Text style={styles.loc}>Customer Email - {item.customerEmail}</Text>
          <Text style={styles.loc}>
            Customer Phone - {item.customerPhoneNumber}
          </Text>
        </View>
        <Text style={styles.loc}>ID - {item._id}</Text>
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  cardView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: widthtodp(Screen_Width - 50),
    height: heighttodp(140),

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
    paddingTop: 0,
  },
});
