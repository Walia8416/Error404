import {act, create} from 'react-test-renderer';

import CircleRadio from '../CircleRadio';
import GreenBoxRadio from '../GreenBoxRadio';
import React from 'react';

describe('radio btns test', () => {
  it(' circle radio btn test', () => {
    const circleradiobtn = create(<CircleRadio />);
    expect(circleradiobtn).toMatchSnapshot();
  });
  it(' box radio btn test', () => {
    const boxradiobtn = create(<GreenBoxRadio check={true} />);
    const boxbtn = boxradiobtn.root.findByProps({testID: 'greenboxradio'})
      .props;
    act(() => boxbtn.onPress());
    act(() => boxbtn.onPressIn());
    act(() => boxbtn.onPressOut());
  });
});
