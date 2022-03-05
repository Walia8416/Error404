import OnBoarding from '../OnBoarding';
import React from 'react';
import {create} from 'react-test-renderer';

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
    addListener: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
    isFocused: jest.fn(),
  },
  ...props,
});

const eventData = {
  nativeEvent: {
    contentOffset: {
      x: 0,
      y: 425,
    },
    contentSize: {
      // Dimensions of the scrollable content
      height: 885,
      width: 328,
    },
    layoutMeasurement: {
      // Dimensions of the device
      height: 469,
      width: 328,
    },
  },
};

const event = {
  nativeEvent: {
    layoutMeasurement: {width: 8},
    contentOffset: {x: 6},
  },
};

describe('render Onboarding', () => {
  let props: any;
  jest.disableAutomock();
  it('initial render', () => {
    props = CreateTestProps({});
    const onboarding = create(
      <OnBoarding {...props} route={{params: {name: 'SignIn'}}} />,
    );
    const navView = onboarding.root.findByProps({testID: 'navCheck'}).props;
    const flatlist = onboarding.root.findByProps({testID: 'flatlist'}).props;
    flatlist.onMomentumScrollEnd(event);
    navView.onPressBtn();
    navView.onPressText();
  });
});
