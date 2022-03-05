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
import Loading from './Loading';
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
        (
          <SafeAreaView style={{flex: 1, height: 235}}>
            <ImageBackground
              source={Images.w1}
              style={{
                width: Screen_Width,
                height: Screen_Height,
                opacity: 0.8,
              }}>
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
                    {forecast.location.name}
                  </Text>
                  <Text>{forecast.location.localtime}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(80),
                        marginTop: 20,
                        color: 'black',
                      }}>
                      {forecast.current.temp_c}
                    </Text>
                    <Text
                      style={{
                        fontSize: RFValue(70),
                        marginTop: 20,
                        color: 'black',
                      }}>
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
                    {forecast.current.condition.text}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 70,
                      justifyContent: 'space-between',
                    }}>
                    {forecast.forecast.forecastday.map(item => (
                      <View
                        style={{
                          margin: 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <ImageContainer
                          name={Images.cloud}
                          style={{
                            width: widthtodp(50),
                            height: heighttodp(50),
                          }}
                        />
                        <Text style={{fontSize: RFValue(9)}}>
                          {item.day.mintemp_c}°C/{item.day.maxtemp_c}°C
                        </Text>
                      </View>
                    ))}
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginRight: 200,
                        marginTop: 30,
                      }}>
                      <Text>Humidity - </Text>
                      <Text>{forecast.current.humidity}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginRight: 200,
                        marginTop: 30,
                      }}>
                      <Text>Wind - </Text>
                      <Text>{forecast.current.wind_mph}mph</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginRight: 200,
                        marginTop: 30,
                      }}>
                      <Text>Precipitation - </Text>
                      <Text>{forecast.current.precip_mm}mm</Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </ImageBackground>
          </SafeAreaView>
        ))
      )}
    </>
  );
};

export default Weather;
