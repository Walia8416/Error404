import { create } from 'react-test-renderer';

import Home from '../Home';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../../store/store';
import MockedNavigator from '../../../helpers/MockedNavigator';


const event = {
  nativeEvent: {
    contentOffset: {
      y: 32,
    },
  },
};
const eventScrollTop = {
  nativeEvent: {
    contentOffset: {
      y: 0,
    },
  },
};

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
let props: any;
describe('test for every component', () => {
  props = CreateTestProps({});
  it('Home Screen', () => {
    const home = create(
      <Provider store={store}>
        <MockedNavigator component={Home} params={{ name: 'OnBoarding' }} />
      </Provider>
    );
  });
});
