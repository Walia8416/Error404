import React from 'react';
import {View, Button} from 'react-native';
import {useForm} from 'react-hook-form';
import InputField from './InputField/InputField';

interface Codes {
  label: string;
  value: string;
} // country code object for picker type definition

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
  const onSubmit = (data: object) => 

  // dummy phone state
  const [selectedCode, setSelectedCode] = React.useState<String>();

  // dummy country code
  const code: Array<object> = [
    {
      label: '+91',
      value: '+91',
    },
    {
      label: '+51',
      value: '+51',
    },
    {
      label: '+31',
      value: '+31',
    },
  ];

  // Required props for InputField Component are (title, name, placeholder, control, errors, rules, testID)

  return (
    <View style={{paddingTop: 20}}>
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
        rules={{
          required: true,
          type: 'password',
          minLength: {
            value: 8,
            message:
              'Password must have at least 8 characters.Please try again.',
          },
        }}
      />
    
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
export default SignInForm;
