import { act, create } from 'react-test-renderer';

import Header from '../Header';
import HeaderBody from '../HeaderBody';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../../store/store';

describe('resolve test cases', () => {
  it('initial render', () => {
    const component = create(<HeaderBody />);
    act(() =>
      component.root.findByProps({ testID: 'headerBtn' }).props.onPress(),
    );
    act(() => component.root.findByProps({ testID: 'Touch' }).props.onPress());
  });
  it('Header render', () => {
    const component = create(<Provider store={store}>
      <Header />
    </Provider>);
    act(() =>
      component.root.findByProps({ testID: 'HeaderBtn' }).props.onPress(),
    );
  });
});
