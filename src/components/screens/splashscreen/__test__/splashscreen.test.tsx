import {act, create} from 'react-test-renderer';

import React from 'react';
import SplashScreen from '../SplashScreen';

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
let props: any;

describe('splashscreen Test', () => {
  it('splashscreen render test', () => {
    jest.useFakeTimers();
    jest.runAllTimers();
    props = CreateTestProps({});
    const splashscreen = create(
      <SplashScreen {...props} route={{params: {name: 'OnBoarding'}}} />,
    );
    expect(splashscreen).toMatchSnapshot();
  });
});
