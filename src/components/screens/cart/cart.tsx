import React from 'react';
import {View, ScrollView, Image} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '../../../constants/icon';
import {Colors} from '../../../constants/colors';
import RegularHeader from '../../helpers/header/RegularHeader';

interface props {
  heading: string;
  children: JSX.Element | JSX.Element[];
}
const Cart = ({heading, children}: props) => {
  const maxLength = 7;
  return (
    <SafeAreaView style={{flex: 1}}>
      <RegularHeader heading="Cart">
        <Image
          source={Images.emptyheart}
          height={45}
          width={45}
          resizeMode="contain"
          style={{tintColor: Colors.navy}}
        />
      </RegularHeader>
      <ScrollView
        style={{backgroundColor: Colors.white}}
        showsHorizontalScrollIndicator={false}>
        {Array(maxLength)
          .fill()
          .map((item, index) => (
            <View key={index}>
              <View style={{height: 1, backgroundColor: '#C5C5C5'}}></View>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
