import React from 'react';
import SignIn from '../SignIn';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../../../store/store';


const CreateTestProps = (props: Object) => ({
  navigation: {
    state: { params: {} },
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

describe('Sign in render', () => {
  props = CreateTestProps({});
  it('initial render test', () => {
    const signin = create(<Provider store={store}>
      <SignIn {...props} route={undefined} />
    </Provider>);
    expect(signin).toMatchSnapshot();
    // console.log(signin.root);
  });
});
