import 'react-native';

import React from 'react';
import TabButton from '../TabButton';
import {render} from '@testing-library/react-native';

it('Tabbutton render', () => {
  render(<TabButton title="demo" onPress={jest.fn()} />);
});
