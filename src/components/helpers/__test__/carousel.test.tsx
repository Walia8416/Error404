import Carousel from '../carousel/carousel';
import CarouselItem from '../carousel/carouselItem';
import {LogBox} from 'react-native';
import React from 'react';
import {dummyData} from '../carousel/data';
import {render} from '@testing-library/react-native';

// carousel.test;
LogBox.ignoreLogs([
  'Animated: `useNativeDriver` is not supported because the native animated module is missing.',
]);

it('carousel render', () => {
  const {debug} = render(
    <Carousel CarouselItem={CarouselItem} data={dummyData} />,
  );
});

it('carousel render when data is empty', () => {
  const {debug} = render(<Carousel CarouselItem={CarouselItem} data={[]} />);
});
