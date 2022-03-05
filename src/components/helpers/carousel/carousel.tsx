import {Animated, Dimensions, FlatList, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import Pagingscroll from './paging';

const {width} = Dimensions.get('window');

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

interface Props {
  CarouselItem?: JSX.Element | JSX.Element[]; //component to render in flatlist
  data: object[]; //data for cards
  numberofpage?: number;
  paging: boolean; //display paging circle or not
  style?: object; //height or maxHeight is required to adjust
  itemStyle?: object;
  type?: string;
}

const Carousel = ({
  CarouselItem,
  data,
  numberofpage,
  paging,
  style,
  itemStyle,
  type,
}: Props) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState<object[]>(data);
  const flatList = useRef<FlatList>({});

  useEffect(() => {
    setDataList(data);
    infiniteScroll(dataList);
  }, []);

  function infiniteScroll(dataList: object[]) {
    const numberOfData = dataList.length;
    let scrollValue = 0,
      scrolled = 0;

    setInterval(() => {
      scrolled++;
      if (scrolled < numberOfData) scrollValue = scrollValue + width;
      else {
        scrollValue = 0;
        scrolled = 0;
      }
      if (flatList.current) {
        flatList.current.scrollToOffset({animated: true, offset: scrollValue});
      } else {
        return;
      }
    }, 3000);
  }

  if (data && data.length) {
    return (
      <View testID="carousel.test">
        <AnimatedFlatList
          data={data}
          decelerationRate={'fast'}
          horizontal
          keyExtractor={(item, index) => 'key' + index}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          pagingEnabled
          ref={flatList}
          renderItem={({item}) => {
            return (
              <CarouselItem item={item} itemStyle={itemStyle} type={type} />
            );
          }}
          scrollEnabled
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          style={style}
        />
        {paging && numberofpage && (
          <Pagingscroll numberofpage={numberofpage} position={position} />
        )}
      </View>
    );
  }

  return <Text>{'Data not found'}</Text>;
};

export default Carousel;
