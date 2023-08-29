import 'react-native';
import 'react-hook-form';

import {FormProvider, useForm} from 'react-hook-form';
import {fireEvent, render} from '@testing-library/react-native';

import {Calendar} from 'react-native-calendars';
import ContactNumberField from '../ContactNumberField';
import InputField from '../InputField';
import InputLabel from '../InputLabel';
import React from 'react';
import SignInForm from '../../SignInForm';
import {WarningText} from '../WarningText';
import {create} from 'react-test-renderer';

it('renders form', () => {
  const input = create(
    <InputField title="User name" name="email" placeholder="E-mail address" />,
  );
  expect(input).toMatchSnapshot();
});

it('renders form label', () => {
  render(<InputLabel title="User nam" />);
});

it('Check input picker rendered', () => {
  let code: [{label: string; value: string}];
  code = [
    {
      label: '+91',
      value: '+91',
    },
  ];
  render(<SignInForm />);

  render(
    <ContactNumberField
      code={code}
      selectedCode="+91"
      setSelectedCode={jest.fn()}
    />,
  );
});

it('check warning text', () => {
  const {getByText} = render(<WarningText title="warningtext" />);
  expect(getByText('warningtext')).toBeTruthy();
});

it('picker for country code', () => {
  render(
    <ContactNumberField
      code={[{label: '+1', value: '+1'}]}
      selectedCode="+1"
      setSelectedCode={jest.fn()}
    />,
  );
});

const CustomComponent = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <InputField
        errors={{message: 'Invalid mail'}}
        testID={'input'}
        placeholder={'hello bettervitty'}
        name="Name"
        Inputvalue="lorem"
        control={methods.control}
        rules={{
          required: true,
          type: 'email',
          pattern: {
            value: /\S+@\S+.\S+/u,
            message: 'Invalid email format.Please try again.',
          },
        }}
        pass={true}
      />
    </FormProvider>
  );
};
it('textField render', async () => {
  const {getByTestId} = render(<CustomComponent />);
  expect(getByTestId('closeEye.test')).toBeTruthy();
  await fireEvent.press(getByTestId('eye.test'));
  expect(getByTestId('openEye.test')).toBeTruthy();
  expect(getByTestId('warningtext')).toBeTruthy();
});

it('render contact field', () => {
  const inputfield = create(
    <ContactNumberField
      code={[{label: '+1', value: '+1'}]}
      selectedCode="+1"
      setSelectedCode={jest.fn()}
    />,
  );
  const input = inputfield.root.findByProps({
    testID: 'react.picker.test',
  }).props;
  input.onValueChange();
});

//calender
const CalenderComponent = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <InputField
        errors={{message: 'Invalid mail'}}
        testID={'calenderInput.test'}
        placeholder={'hello bettervitty'}
        name="Name"
        control={methods.control}
        rules={{
          required: true,
        }}
        calender={true}
        calenderFun={jest.fn()}
      />
    </FormProvider>
  );
};
it('calneder render', () => {
  const Calender = create(<CalenderComponent />);
  const Props = Calender.root.findAllByProps({testID: 'calenderInput.test'})[0]
    .props;
  // expect(getByTestId('stateTest')).toBeTruthy();
  Props.calenderFun(jest.fn());
});
