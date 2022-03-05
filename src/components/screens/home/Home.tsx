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

const {height} = Dimensions.get('window');

const Home: React.FC<RouteStackParamList<'Home'>> = ({
  navigation,
}: RouteStackParamList<'Home'>) => {
  const [shadow, setShadow] = React.useState(false);

  return (
    <SafeAreaView style={{backgroundColor: Colors.white, flex: 1}}>
      <Header testID={'menu'} navigation={navigation} scroll={shadow} />
      <ScrollView>
        <View style={Styles.section}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={Styles.sectionheading}>Hi There!</Text>
          </View>
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
            <Text style={Styles.sectionheading}>Recommended Products</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
