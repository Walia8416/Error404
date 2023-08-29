import TopNavigation, {Data} from '../TopNavigation';
import {fireEvent, render} from '@testing-library/react-native';

import React from 'react';
import {create} from 'react-test-renderer';

describe('TopNavigation render ', () => {
  it('initial test', () => {
    const topnav = create(<TopNavigation active={0} setActive={jest.fn()} />);
  });

  it('Press handler', () => {
    const {getAllByTestId} = render(
      <TopNavigation data={Data} active={-1} setActive={jest.fn()} />,
    );
    getAllByTestId('activeHandler').map(item => {
      fireEvent.press(item);
    });
  });
});
