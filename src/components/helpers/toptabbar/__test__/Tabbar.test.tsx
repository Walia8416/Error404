import 'react-native';

import {fireEvent, render} from '@testing-library/react-native';

import React from 'react';
import TopTabBar from '../TopTabBar';

it('Tab Bar render', () => {
  const {getAllByTestId} = render(
    <TopTabBar tab1="tab1" tab2="tab2" state={1} setState={jest.fn()} />,
  );

  getAllByTestId('touchtest').map(item => {
    fireEvent.press(item);
  });
});
