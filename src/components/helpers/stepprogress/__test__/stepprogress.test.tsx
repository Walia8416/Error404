import React from 'react';
import StepProgress from '../StepProgress';
import {create} from 'react-test-renderer';

describe('Initial render', () => {
  it('render', () => {
    const component = create(<StepProgress currentIndex={1} />);

    expect(component).toMatchSnapshot();
  });
});
