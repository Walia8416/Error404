import {act, create} from 'react-test-renderer';

import Checkbox from '../CheckBox';
import React from 'react';

describe('Checkbox render', () => {
  it('initial render', () => {
    const checkbox = create(<Checkbox setState={() => jest.fn()} />);
    const snap = checkbox.toJSON();
    act(() => snap.children[0].props.onClick());
    expect(snap).toMatchSnapshot();
    const btn = checkbox.root.findByProps({testID: 'checkboxtrue'}).props;
    act(() => btn.onPress());
  });
});
