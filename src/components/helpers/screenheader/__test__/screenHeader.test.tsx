import {fireEvent, render} from '@testing-library/react-native';

import React from 'react';
import ScreenHeader from '../ScreenHeader';

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

it('screen top header render', () => {
  props = CreateTestProps({});
  const {getByTestId} = render(
    <ScreenHeader title="notification" {...props} />,
  );
  fireEvent.press(getByTestId('touchtest'));
});
it('screen top header render pressback', () => {
  props = CreateTestProps({});
  const {getByTestId} = render(
    <ScreenHeader title="notification" {...props} onPressBack={jest.fn()} />,
  );
  fireEvent.press(getByTestId('touchtest'));
});
