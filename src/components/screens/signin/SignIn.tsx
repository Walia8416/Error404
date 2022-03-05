import {Image, Text, TouchableOpacity, View} from 'react-native';
import {heighttodp, widthtodp} from '../../../constants/Dimenstions';
import {Colors} from '../../../constants/colors';
import Images from '../../../constants/icon';
import InputFeild from '../../helpers/inputfields/InputField';

import React, {useEffect} from 'react';
import {RouteStackParamList} from '../../../Routes';
import {StyledText} from '../../../styled_components/styledtexts';
import {useForm} from 'react-hook-form';
import SignUpHeading from '../../helpers/SignUpHeading';
import styles from './SignInStyles';

const SignIn: React.FC<RouteStackParamList<'SignIn'>> = ({
  navigation,
}: RouteStackParamList<'SignIn'>) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'onChange', shouldFocusError: true});
  const [check, setCheck] = React.useState(false);

  return (
    <View style={styles.main}>
      <View
        style={{
          marginLeft: widthtodp(20),
          marginTop: heighttodp(30),
          marginBottom: heighttodp(20),
        }}>
        <SignUpHeading heading="Sign In" subheading="For Farmers" />
      </View>
      <View style={styles.inputText}>
        <InputFeild
          height={heighttodp(46)}
          width={widthtodp(360 - 48)}
          name="Email"
          text={'Email'}
          placeholder={'Enter Email Address'}
          placeholdertextcolor={Colors.placeHolder}
          controls={control}
          onError={errors.Username}
          errorText={errors.Username?.message}
          rules={{
            required: {
              value: true,
              message: 'Enter email address',
            },
          }}
        />
      </View>
      <View style={[styles.inputText, {marginTop: heighttodp(10)}]}>
        <InputFeild
          height={heighttodp(46)}
          width={widthtodp(360 - 48)}
          name="Password"
          text={'Password'}
          placeholder={'Password'}
          placeholdertextcolor={Colors.placeHolder}
          controls={control}
          onError={errors.Password}
          errorText={errors.Password?.message}
          secure={!check}
          rules={{
            required: {
              value: true,
              message: 'Enter Password',
            },
            minLength: {
              value: 8,
              message: 'Incorrect password. Please try again.',
            },
          }}
        />
      </View>

      <View style={styles.login}>
        <TouchableOpacity
          disabled={!isValid}
          onPress={() => navigation.navigate('Home')}
          style={[
            styles.loginBtn,
            {backgroundColor: isValid ? Colors.green : Colors.inputBorder},
          ]}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />

      <View
        style={{
          flexGrow: 1,
          justifyContent: 'flex-end',
          marginBottom: heighttodp(20),
        }}>
        <StyledText style={{textAlign: 'center'}}>
          Don't have an account?{' '}
          <Text style={{color: Colors.link, fontWeight: 'bold'}}>
            {'Sign Up'}
          </Text>
        </StyledText>
      </View>
    </View>
  );
};

export default SignIn;
