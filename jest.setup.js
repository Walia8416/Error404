// jest.setup.js

import 'react-native-gesture-handler/jestSetup';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import * as ReactNative from 'react-native';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

import React from 'react';
import {cleanup} from '@testing-library/react-native';

jest.doMock('react-native', () => {
  // Extend ReactNative
  return Object.setPrototypeOf(
    {
      // Redefine an export, like a component
      Button: 'MockedButton',
      ToastAndroid: {
        showWithGravityAndOffset: jest.fn(),
      },
      // Mock out properties of an already mocked export
      LayoutAnimation: {
        ...ReactNative.LayoutAnimation,
        configureNext: jest.fn(),
      },

      // Mock a native module
      NativeModules: {
        ...ReactNative.NativeModules,
        Override: {great: 'success'},
      },
    },
    ReactNative,
  );
});

jest.mock('@react-navigation/drawer', () => {
  return {
    addEventListener: jest.fn(),
    createDrawerNavigator: jest.fn(),
  };
});

jest.useFakeTimers();
afterEach(cleanup);
const mock = jest.requireMock('react-native-reanimated');
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};
  const View = require('react-native').View;
  return {
    ...mock,
    useAnimatedProps: jest.fn(),
    useSharedValue: jest.fn,
    useAnimatedStyle: jest.fn,
    interpolate: jest.fn(),
    withTiming: jest.fn(),
    withSpring: jest.fn(),
    withDelay: jest.fn(),
    // View: View,
    Extrapolate: {CLAMP: jest.fn()},
    Transition: {
      Together: 'Together',
      Out: 'Out',
      In: 'In',
      Change: 'Change',
    },
    Transitioning: {
      View: View,
    },
    createAnimatedComponent: component => component,
    Value: jest.fn(),
    event: jest.fn(),
    add: jest.fn(),
    eq: jest.fn(),
    set: jest.fn(),
    cond: jest.fn(),
    Easing: {
      bezier: jest.fn(),
    },
  };

  // return Reanimated;
});

// As of react-native@0.64.X file has moved
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// MapView jest mock
jest.mock('react-native-maps', () => {
  const React = jest.requireActual('react');
  const MapView = jest.requireActual('react-native-maps');

  class MockMapView extends React.Component {
    render() {
      return React.createElement('MapView', this.props, this.props.children);
    }
  }

  class MockCallout extends React.Component {
    render() {
      return React.createElement('Callout', this.props, this.props.children);
    }
  }
  MockMapView.Callout = MockCallout;

  class MockMarker extends React.Component {
    render() {
      return React.createElement('Marker', this.props, this.props.children);
    }
  }
  MockMapView.Marker = MockMarker;

  class MockPolyline extends React.Component {
    render() {
      return React.createElement('Polyline', this.props, this.props.children);
    }
  }
  MockMapView.Polyline = MockPolyline;
  /* eslint-enable react/prefer-stateless-function */

  return MockMapView;
});
global.__reanimatedWorkletInit = jest.fn();
