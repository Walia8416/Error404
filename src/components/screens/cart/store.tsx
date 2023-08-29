import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { Colors } from '../../../constants/colors';
import Header from '../../helpers/header/Header';
import React, { useEffect, useRef, useState } from 'react';
import { RouteStackParamList } from '../../../Routes';
import { Styles } from '../../../styles/homescreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Bold, RobMono } from '../../../constants/Fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import { Screen_Height } from '../../../constants/constants';
import { getorders } from '../../../store/actions/getOrders';
import { useAppSelector } from '../../../store/store';
import { useDispatch } from 'react-redux';
import OrderCard from './orderCard';
import Loading from '../home/helper/Loading';

const Store: React.FC<RouteStackParamList<'Store'>> = ({
  navigation,
}: RouteStackParamList<'Store'>) => {
  const [shadow, setShadow] = React.useState(true);




  return (
    <SafeAreaView style={{ backgroundColor: Colors.mi, flex: 1 }}>
      <Header
        testID={'menu'}
        navigation={navigation}
        scroll={shadow}
        creds={true}
        title={'You'}
      />
      <View style={styles.mainCon}>
        <ScrollView>

        </ScrollView>
      </View>
    </SafeAreaView>
  );

};

export default Store;
const styles = StyleSheet.create({
  mainCon: {
    backgroundColor: Colors.mi,
    flex: 1,
    padding: 20,
  },

  headText: {
    marginBottom: 20,
    fontSize: RFValue(25),
    color: Colors.black,
    fontFamily: Bold,
  },
});
