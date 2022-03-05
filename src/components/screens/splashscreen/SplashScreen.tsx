import {View, Text} from 'react-native';
import React from 'react';
import {RouteStackParamList} from '../../../Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './SplashScreens';
import ImageContainer from '../../helpers/header/ImageContainer';
import Images from '../../../constants/icon';
import {RFValue} from 'react-native-responsive-fontsize';
import {SemiBoldItalic} from '../../../constants/Fonts';

const SplashScreen: React.FC<RouteStackParamList<'SplashScreen'>> = ({
  navigation,
  route,
}: RouteStackParamList<'SplashScreen'>) => {
  React.useEffect(() => {
    const firstTimeOpen = async () => {
      try {
        const firstTime = await AsyncStorage.getItem('@introData');

        navigation.navigate('OnBoarding');
      } catch (err) {
        throw err;
      }
    };
    setTimeout(() => {
      firstTimeOpen();
    }, 4000);
  }, []);

  React.useEffect(() => {
    setTimeout(() => {}, 50);
  }, []);

  return (
    <View style={styles.screen}>
      <View style={{flexDirection: 'row'}}>
        <ImageContainer name={Images.r2} style={styles.r2} />
        <ImageContainer name={Images.r1} style={styles.r1} />
      </View>
      <ImageContainer name={Images.desigma} style={styles.desigma} />

      <View style={styles.subsection}>
        <ImageContainer name={Images.logo} style={styles.admybrand} />
        <Text
          style={{
            color: 'darkgreen',
            bottom: 230,
            fontSize: RFValue(15),
            fontFamily: SemiBoldItalic,
          }}>
          ~𝘍𝘢𝘳𝘮𝘦𝘳𝘴 𝘮𝘢𝘬𝘦 𝘪𝘵 𝘨𝘳𝘢𝘪𝘯~
        </Text>
        <ImageContainer name={Images.tree} style={styles.tree} />
      </View>
    </View>
  );
};
export default SplashScreen;
