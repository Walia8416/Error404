import {
  Animated,
  Dimensions,
  FlatList,
  GestureResponderEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Carousel from '../../helpers/carousel/carousel';
import CarouselItem from '../../helpers/carousel/carouselItem';
import {Colors} from '../../../constants/colors';
import Header from '../../helpers/header/Header';
import React, {useEffect, useState} from 'react';
import {RouteStackParamList} from '../../../Routes';
import {Styles} from '../../../styles/homescreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {carouselData} from './helper/carData';
import ProductCard from './helper/productCard';
import {ScrollView} from 'react-native-gesture-handler';
import {storeData} from '../cart/storeData';
import {RFValue} from 'react-native-responsive-fontsize';
import {RobMono} from '../../../constants/Fonts';

const {height} = Dimensions.get('window');

const Home: React.FC<RouteStackParamList<'Home'>> = ({
  navigation,
}: RouteStackParamList<'Home'>) => {
  const [shadow, setShadow] = React.useState(false);

  return (
    <SafeAreaView style={{backgroundColor: Colors.white, flex: 1}}>
      <Header
        testID={'menu'}
        navigation={navigation}
        scroll={shadow}
        creds={true}
      />
      <ScrollView>
        <View style={Styles.section}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={Styles.sectionheading}>Hi There!</Text>
          </View>
          <Text
            style={{
              top: 20,
              color: 'gray',
              textAlign: 'justify',
              fontSize: RFValue(14),
            }}>
            "My grandfather used to say that once in your life you need a
            doctor, a lawyer, a policeman and a preacher. But every day, three
            times a day, you need a farmer."
          </Text>
          <Text
            style={{
              top: 20,
              color: 'gray',
              marginLeft: 200,
              fontWeight: 'bold',
              fontSize: RFValue(13),
            }}>
            {' '}
            - Brenda Schoepp
          </Text>
        </View>
        <Carousel
          CarouselItem={CarouselItem}
          data={carouselData}
          numberofpage={5}
          paging
          style={{
            maxHeight: height / 4,
          }}
          type={'home_banner'}
        />
        <View style={Styles.section}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontFamily: RobMono,
                fontSize: RFValue(23),
                color: Colors.DarkGrey,
              }}>
              Recommended Products
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {storeData.map(item =>
              item.id <= 4 ? <ProductCard item={item} /> : null,
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
