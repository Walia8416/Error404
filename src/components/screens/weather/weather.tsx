import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Colors} from '../../../constants/colors';
import Header from '../../helpers/header/Header';
import React, {useEffect, useRef, useState} from 'react';
import {RouteStackParamList} from '../../../Routes';
import {Styles} from '../../../styles/homescreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch, useAppSelector} from '../../../store/store';
import {useDispatch} from 'react-redux';
import {getForecast} from '../../../store/actions/forecast';
import Images from '../../../constants/icon';
import {Screen_Height, Screen_Width} from '../../../constants/constants';
import {RFValue} from 'react-native-responsive-fontsize';

const Weather: React.FC<RouteStackParamList<'Weather'>> = ({
  navigation,
}: RouteStackParamList<'Weather'>) => {
  const [shadow, setShadow] = React.useState(false);
  const {forecast} = useAppSelector(state => state.forecast);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getForecast());
  }, []);

  const [current, setCurrent] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    setCurrent(forecast['current']);
    setLocation(forecast['location']);
  }, [forecast]);

  console.log(forecast);
  return (
    <SafeAreaView style={{flex: 1, height: 235}}>
      <ImageBackground
        source={Images.w1}
        style={{width: Screen_Width, height: Screen_Height, opacity: 0.8}}>
        <ScrollView>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 40,
            }}>
            <Text
              style={{
                fontWeight: '900',
                marginTop: 30,
                color: 'black',
                fontSize: RFValue(35),
              }}>
              {location.name}
            </Text>
            <Text>{location.localtime}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: RFValue(80), marginTop: 20, color: 'black'}}>
                {current.temp_c}
              </Text>
              <Text
                style={{fontSize: RFValue(70), marginTop: 20, color: 'black'}}>
                °C
              </Text>
            </View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: RFValue(16),
                color: 'black',
              }}>
              -------------------------
            </Text>
            <Text style={{marginTop: 20, fontSize: RFValue(20)}}>
              {current.condition.text}
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Weather;
