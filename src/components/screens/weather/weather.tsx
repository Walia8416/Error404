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
import {getForecast} from '../../../store/actions/stores';
import Images from '../../../constants/icon';
import {Screen_Height, Screen_Width} from '../../../constants/constants';
import {RFValue} from 'react-native-responsive-fontsize';

import ImageContainer from '../../helpers/header/ImageContainer';
import {heighttodp, widthtodp} from '../../../constants/Dimenstions';

const Weather: React.FC<RouteStackParamList<'Weather'>> = ({
  navigation,
}: RouteStackParamList<'Weather'>) => {
  const [shadow, setShadow] = React.useState(false);
  const {forecast} = useAppSelector(state => state.forecast);
  const [current, setCurrent] = useState([]);
  const [location, setLocation] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getForecast());
  }, []);
  const loading = forecast.length === 0;

  useEffect(() => {
    setCurrent(forecast['current']);
    setLocation(forecast['location']);
  }, [forecast]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        (console.log(current),
        (<SafeAreaView style={{flex: 1, height: 235}}></SafeAreaView>))
      )}
    </>
  );
};

export default Weather;
