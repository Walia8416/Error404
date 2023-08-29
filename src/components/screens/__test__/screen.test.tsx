import {
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';

import Home from '../home/Home';
//Screens
import OnBoarding from '../onboarding/OnBoarding';
import OnBoardingRenderItem from './../onboarding/helpers/onboardingrenderitem/OnBoaringRenderItem';
import React from 'react';
import SignIn from '../signin/SignIn';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import MockedNavigator from '../../helpers/MockedNavigator';

const CreateTestProps = (props: Object) => ({
  navigation: {
    state: { params: {} },
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

/**
 * Note:
 * just pass route prop in component itself
 * check navigation components props
 */

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
const renderItem = {
  image: require('./../../../../assets/Images/eye.png'),
  title: 'testtext',
  key: '1',
  midImage: require('./../../../../assets/Images/eye.png'),
  description: 'string',
};

let props: any;
describe('testing screens', () => {
  it('test', () => {
    props = CreateTestProps({});

    const { getByTestId, getByText, findAllByTestId } = render(
      <Provider store={store}>
        <OnBoarding route={{ params: { name: 'SignIn' } }} {...props} />,
      </Provider>
    );
    getByTestId('flatlist').props;
    fireEvent.scroll(getByTestId('flatlist'), eventData);
    expect(findAllByTestId('strepper')).toBeDefined();
    waitForElementToBeRemoved(() => getByText('Discover Ad Spaces'));
    waitFor(() => expect(getByText('Book & Execute Campaigns')));
  });

  it('check renderItems', () => {
    props = CreateTestProps({});
    const { findByText } = render(
      <Provider store={store}>
        <OnBoardingRenderItem {...props} item={{ ...renderItem }} />,
      </Provider>
    );
    findByText('testtext');
    expect(findByText('string')).not.toBe(null);
  });

  it('sign in screen', () => {
    props = CreateTestProps({});
    const { findByTestId } = render(
      <Provider store={store}>
        <SignIn {...props} route={{ params: { name: 'SignUpOne' } }} />
      </Provider>,
    );
    expect(findByTestId('screenName')).toBeDefined;
    expect(findByTestId('Btn')).toHaveBeenCalled;
  });
});

it('Home screen', () => {
  props = CreateTestProps({});
  const { findByTestId } = render(
    <Provider store={store}>
      <MockedNavigator component={Home} params={{ name: 'PersonalInformation' }} />
    </Provider>
  );
});
