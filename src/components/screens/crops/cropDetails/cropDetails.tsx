import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';

import {Colors} from '../../../../constants/colors';
import Header from '../../../helpers/header/Header';
import React, {useRef, useState} from 'react';
import {RouteStackParamList} from '../../../../Routes';
import {Styles} from '../../../../styles/homescreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {cropData} from '../cropData';
import CropCard from '../cropsCard';
import Images from '../../../../constants/icon';
import {heighttodp, widthtodp} from '../../../../constants/Dimenstions';
import {RFValue} from 'react-native-responsive-fontsize';

const CropDetails: React.FC<RouteStackParamList<'CropDetails'>> = ({
  navigation,
  route,
}: RouteStackParamList<'CropDetails'>) => {
  const [shadow, setShadow] = React.useState(false);
  const {item} = route.params;

  return (
    <SafeAreaView style={{backgroundColor: Colors.white, flex: 1}}>
      <View>
        <Header
          testID={'menu'}
          navigation={navigation}
          scroll={shadow}
          title={'Crop Details'}
          onPress={() => navigation.goBack()}
        />
        <ScrollView>
          <View style={Styles.section}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={item.icon}
                style={{width: widthtodp(75), height: heighttodp(65)}}
              />
              <Text
                style={{
                  fontSize: RFValue(30),

                  marginLeft: 45,
                  marginTop: 10,
                }}>
                {item.name}
              </Text>
            </View>
            <Text
              style={{
                marginTop: 35,
                fontSize: RFValue(18),
                fontWeight: 'bold',
              }}>
              Introduction
            </Text>
            <Text style={{marginTop: 7}}>
              {item.contents} It is a {item.type} crop.
            </Text>
            <Text
              style={{
                marginTop: 35,
                fontSize: RFValue(18),
                fontWeight: 'bold',
              }}>
              Most Suitable Soil
            </Text>
            <Text style={{marginTop: 7}}>
              {item.name} are best grown in {item.soil}.
            </Text>
            <Text
              style={{
                marginTop: 35,
                fontSize: RFValue(18),
                fontWeight: 'bold',
              }}>
              Precipitation
            </Text>
            <Text style={{marginTop: 7}}>
              {item.name} require atleast {item.rain}mm of annual rainfall.
            </Text>
            <Text
              style={{
                marginTop: 35,
                fontSize: RFValue(18),
                fontWeight: 'bold',
              }}>
              Temperature
            </Text>
            <Text style={{marginTop: 7}}>
              The ideal temperature for growing {item.name} is {item.temp}°C.
            </Text>
            <Text
              style={{
                marginTop: 35,
                fontSize: RFValue(18),
                fontWeight: 'bold',
              }}>
              Growing Period
            </Text>
            <Text style={{marginTop: 7}}>
              The time required for {item.name} from sowing to harvesting is{' '}
              {item.yielding} days.
            </Text>

            <Text
              style={{
                marginTop: 35,
                fontSize: RFValue(18),
                fontWeight: 'bold',
              }}>
              Minimum Support Price
            </Text>
            <Text style={{marginTop: 7}}>
              Under agricultural policies in India, the advisory price for{' '}
              {item.name} is set to be ₹{item.msp}/- per quintal.
            </Text>
            <Text
              style={{
                marginTop: 35,
                fontSize: RFValue(18),
                fontWeight: 'bold',
              }}>
              Region
            </Text>
            <Text style={{marginTop: 7}}>
              {item.name} is generally grown in areas of {item.region}.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CropDetails;
