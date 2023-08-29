import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {heighttodp, widthtodp} from '../../../constants/Dimenstions';
import {Colors} from '../../../constants/colors';
import Images from '../../../constants/icon';
import InputFeild from '../../helpers/inputfields/InputField';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {RouteStackParamList} from '../../../Routes';
import {StyledText} from '../../../styled_components/styledtexts';
import {useForm} from 'react-hook-form';
import SignUpHeading from '../../helpers/SignUpHeading';
import styles from './SignInStyles';
import {login, loginUser} from '../../../store/actions/login';
import {useAppDispatch} from '../../../store/store';
import {getStores} from '../../../store/actions/stores';
import {getorders} from '../../../store/actions/getOrders';

const SignIn: React.FC<RouteStackParamList<'SignIn'>> = ({
  navigation,
}: RouteStackParamList<'SignIn'>) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'onChange', shouldFocusError: true});
  const [check, setCheck] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch();

  const storeData = async (keyd, value) => {
    try {
      await AsyncStorage.setItem(keyd, value);
    } catch (e) {
      console.log('fail save');
    }
  };

  const onSubmit = async (data: {Email: string; Password: string}) => {
    login({
      email: data.Email,
      password: data.Password,
    })
      .then(result => {
        if (result.status == 200) {
          dispatch(getStores(result.data.operator._id));
          dispatch(getorders(result.data.operator._id));
          AsyncStorage.setItem('Users', result.data.operator._id);
          storeData('Tokens', result.data.token);
          navigation.navigate('Home');
        } else {
          Alert.alert('Invalid Email or Password!');
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <View style={styles.main}>
      <View
        style={{
          marginLeft: widthtodp(20),
          marginTop: heighttodp(30),
          marginBottom: heighttodp(20),
        }}>
        <SignUpHeading heading="Sign In" subheading="For " />
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
              value: 2,
              message: 'Enter',
            },
          }}
        />
      </View>

      <View style={styles.login}>
        <TouchableOpacity
          disabled={!isValid}
          onPress={handleSubmit(onSubmit)}
          style={[
            styles.loginBtn,
            {backgroundColor: isValid ? Colors.x : Colors.inputBorder},
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
        }}></View>
    </View>
  );
};

export default SignIn;
