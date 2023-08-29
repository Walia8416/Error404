import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SignInForm from '../SignInForm';

it('renders form', () => {
  const {getByTestId, getByPlaceholderText, debug} = render(<SignInForm />);
  getByTestId('password.test');
  getByTestId('email.test');
});

describe('Sign-In', () => {
  describe('with invalid email', () => {
    it('renders the email error text', async () => {
      const {getByTestId, queryAllByText} = render(<SignInForm />);
      const temp = getByTestId('email.test');
      // console.log(temp);
      // fireEvent.changeText(temp, 'lorem');

      // expect(
      //   queryAllByText('Invalid email format.Please try again.'),
      // ).not.toBeTruthy();
    });
  });
});
