import {Button, View} from 'react-native';

import InputField from './InputField/InputField';
import React from 'react';
import {useForm} from 'react-hook-form';
const SignInForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {isValid, errors},
  } = useForm({
    mode: 'onChange', //used to check error in realtime
    shouldFocusError: true, // focus input field after submit if it is not following required rule of input field
  }); // react hook form main state
  // form Submit function
  const onSubmit = (data: object) => {};
  // Required props for InputField Component are (title, name, placeholder, control, errors, rules, testID)
  return (
    <View
      style={{
        paddingTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
      }}>
      {/* email input */}
      <InputField
        testID="email.test"
        title="User name"
        name="Username"
        control={control}
        errors={errors?.Username}
        placeholder="E-mail address"
        rules={{
          required: true,
          type: 'email',
          pattern: {
            value: /\S+@\S+.\S+/,
            message: 'Invalid email format.Please try again.',
          },
        }}
      />
      {/* Password Input */}
      <InputField
        testID="password.test"
        title="Password"
        name="password"
        control={control}
        errors={errors?.password}
        placeholder="Enter your password"
        pass={true}
        rules={{
          required: true,
          type: 'password',
          minLength: {
            value: 2,
            message: '',
          },
        }}
      />
      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
    </View>
  );
};
export default SignInForm;
