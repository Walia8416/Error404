import { act, create } from 'react-test-renderer';

import BottomNavigation from '../BottomNavigation';
import React from 'react';

describe('bottomNavigation', () => {
  it('render test', () => {
    const bottom = create(<BottomNavigation index={0} />);
    expect(bottom).toMatchSnapshot()
  });
});
