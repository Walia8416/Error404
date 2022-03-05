import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import {Colors} from '../../../constants/colors';
import Images from '../../../constants/icon';

const Carousel2 = () => {
  const images = [
    {key: '0', image: Images.carrec},
    {key: '1', image: Images.carrec},
    {key: '2', image: Images.carrec},
    {key: '3', image: Images.carrec},
    {key: '4', image: Images.carrec},
  ];

  const {width} = Dimensions.get('window');

  const [active, setActive] = useState(0);

  interface Props {
    item: {
      key: string;
      image?: any;
    };
    index: number;
  }

  const renderItem = ({item, index}: Props) => {
    return (
      <Image key={index} source={item.image} style={{width, height: 200}} />
    );
  };

  const activeHandler = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View style={{width, alignItems: 'center'}}>
      <FlatList
        testID={'carosel'}
        data={images}
        keyExtractor={item => item.key}
        horizontal={true}
        renderItem={renderItem}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={width}
        onScroll={activeHandler}
        style={{width}}
      />
      <TouchableOpacity style={styles.arrow}>
        <Image source={Images.blueArrow} />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', paddingVertical: 10}}>
        {images.map((i, k) => (
          <View key={k} style={k == active ? styles.activeDot : styles.dot} />
        ))}
      </View>
    </View>
  );
};

export default Carousel2;

const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: Colors.Crimson,
    marginHorizontal: 4,
    borderRadius: 3,
    height: 6,
    width: 15,
  },
  dot: {
    backgroundColor: Colors.Silver,
    marginHorizontal: 4,
    borderRadius: 3,
    height: 6,
    width: 6,
  },
  arrow: {position: 'absolute', top: '65%', right: 0},
});
