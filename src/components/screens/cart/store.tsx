import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import {Colors} from '../../../constants/colors';
import Header from '../../helpers/header/Header';
import React, {useEffect, useRef, useState} from 'react';
import {RouteStackParamList} from '../../../Routes';
import {Styles} from '../../../styles/homescreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {storeData} from './storeData';
import StoreCard from './storeCard';

const Store: React.FC<RouteStackParamList<'Store'>> = ({
  navigation,
}: RouteStackParamList<'Store'>) => {
  const [shadow, setShadow] = React.useState(false);

  return (
    <SafeAreaView style={{backgroundColor: Colors.white, flex: 1}}>
      <View>
        <Header testID={'menu'} navigation={navigation} scroll={shadow} />
        <ScrollView>
          <View style={Styles.section}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={Styles.sectionheading}>Welcome To Krishi Store</Text>
            </View>
            <View style={{marginVertical: 10}}>
              {storeData.map(item => (
                <StoreCard item={item} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Store;
