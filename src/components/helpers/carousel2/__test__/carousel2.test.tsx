import {fireEvent, render} from '@testing-library/react-native';

import Carousel2 from '../carousel2';
import React from 'react';
import {act} from 'react-test-renderer';

const CreateTestProps = (props: Object) => ({
  navigation: {
    state: {params: {}},
    dispatch: jest.fn(),
    goBack: jest.fn(),
    dismiss: jest.fn(),
    navigate: jest.fn(),
    openDrawer: jest.fn(),
    closeDrawer: jest.fn(),
    toggleDrawer: jest.fn(),
    getParam: jest.fn(),
    setParams: jest.fn(),
  },
  ...props,
});

const nativeEvent = {
  contentOffset: {
    x: 1,
  },
  layoutMeasurement: {
    width: 1,
  },
};

let props: any;
describe('Initial render', () => {
  props = CreateTestProps({});
  it('Order component render', () => {
    const {getByTestId} = render(<Carousel2 />);
    act(() =>
      fireEvent.scroll(getByTestId('carosel'), {
        nativeEvent: {
          contentSize: {height: 600, width: 400},
          contentOffset: {y: 150, x: 150},
          layoutMeasurement: {height: 100, width: 100}, // Dimensions of the device
        },
      }),
    );
  });
});
