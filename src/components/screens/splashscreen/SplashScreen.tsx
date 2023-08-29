import {View, Text} from 'react-native';
import React from 'react';
import {RouteStackParamList} from '../../../Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './SplashScreens';
import ImageContainer from '../../helpers/header/ImageContainer';
import Images from '../../../constants/icon';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  Bold,
  ExtraBold,
  RobMono,
  SemiBoldItalic,
} from '../../../constants/Fonts';
import {Colors} from '../../../constants/colors';
import {useAppSelector} from '../../../store/store';
import {useDispatch} from 'react-redux';
import {getStores} from '../../../store/actions/stores';
import {getorders} from '../../../store/actions/getOrders';

const SplashScreen: React.FC<RouteStackParamList<'SplashScreen'>> = ({
  navigation,
  route,
}: RouteStackParamList<'SplashScreen'>) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    setTimeout(() => {
      importData();

      getData();
    }, 50);
  });

  const importData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  const getData = async () => {
    try {
      const dataToken = await AsyncStorage.getItem('Tokens');

      if (dataToken !== null) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('SignIn');
      }
    } catch (e) {
      console.log('errors');
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.subsection}>
        <ImageContainer name={Images.logo} style={styles.logos} />
      </View>
    </View>
  );
};
export default SplashScreen;
