import {dummyData} from './helpers/onBoardingData';
import {Animated, ImageSourcePropType, View} from 'react-native';
import ImageBanner from './helpers/onboardingrenderitem/ImageBanner';
import {Colors} from '../../../constants/colors';
import NavigationButton from './helpers/navigationbuttonview/NavigationButtonView';
import OnBoardingRenderItem from './helpers/onboardingrenderitem/OnBoaringRenderItem';
import React, {useEffect} from 'react';
import {RouteStackParamList} from '../../../Routes';
import {Screen_Width} from '../../../constants/constants';
import Stepper from './helpers/strepper/Stepper';
import Images from '../../../constants/icon';

interface renderProps {
  item: {
    key: string;
    title: string;
    description: string;
    image: ImageSourcePropType;
    midImage: ImageSourcePropType;
  };
  index: number;
}

const OnBoarding: React.FC<RouteStackParamList<'OnBoarding'>> = ({
  navigation,
  route,
}: RouteStackParamList<'OnBoarding'>) => {
  const loading = dummyData.length === 0;
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const viewConfig = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;
  let sliderRef = React.useRef<any>(null);
  const [check, setCheck] = React.useState(true);
  const renderOnBording: React.FC<renderProps> = ({item, index}) => {
    return <OnBoardingRenderItem item={item} />;
  };

  const scrollFlatlist = () => {
    navigation.navigate('SignIn', {
      name: 'SignIn',
    });
  };

  interface eventprop {
    nativeEvent: {
      layoutMeasurement: {
        width: number;
      };
      contentOffset: {
        x: number;
      };
    };
  }

  const scrollEvent = (event: eventprop) => {
    let extraspace = Screen_Width - event.nativeEvent.layoutMeasurement.width;
    if (event.nativeEvent.contentOffset.x === 0) {
      setCurrentIndex(0);
      check === false ? setCheck(true) : null;
    }
    if (event.nativeEvent.contentOffset.x === Screen_Width - extraspace) {
      setCurrentIndex(1);
      check === false ? setCheck(true) : null;
    }
    if (event.nativeEvent.contentOffset.x === (Screen_Width - extraspace) * 2) {
      setCurrentIndex(2);
      check === false ? setCheck(true) : null;
    }
    if (event.nativeEvent.contentOffset.x > (Screen_Width - extraspace) * 2) {
      setCurrentIndex(3);
      setCheck(false);
    }
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#048569',
        }}>
        <ImageBanner imageBanner={Images.logoLin} />
        <Animated.FlatList
          testID={'flatlist'}
          keyExtractor={(item, index) => item.id}
          data={dummyData}
          renderItem={renderOnBording}
          style={{backgroundColor: '#9EF8A5'}}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
          decelerationRate={'fast'}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          viewabilityConfig={viewConfig}
          ref={sliderRef}
          onMomentumScrollEnd={event => scrollEvent(event)}
        />

        <Stepper
          testID={'strepper'}
          width={60}
          data={dummyData}
          scrollX={scrollX}
        />
        <NavigationButton
          testID={'navCheck'}
          percentage={(currentIndex + 1) * (100 / dummyData.length)}
          disabled={check}
          onPressBtn={() => scrollFlatlist()}
          onPressText={() => navigation.navigate('SignIn', {name: 'SignIn'})}
        />
      </View>
    </>
  );
};

export default OnBoarding;
