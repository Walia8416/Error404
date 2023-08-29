import {Platform, TouchableNativeFeedback, View} from 'react-native';

import React from 'react';
import Touch from '../Touch';
import {render} from '@testing-library/react-native';

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'android', // or 'ios'
  select: () => null,
}));

it('should render Touch Component', () => {
  const {toJSON} = render(<Touch />);

  expect(toJSON()).toMatchSnapshot();
  expect(typeof Touch === typeof View).toBe(true);
});
