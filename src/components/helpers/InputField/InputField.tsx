import { Controller, useForm } from 'react-hook-form';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { Input, InputBox } from '../../../styled_components/textfields';

import CircleTouch from '../CircleTouch';
import { Colors } from '../../../constants/colors';
import ContactNumberField from './ContactNumberField';
import Images from '../../../constants/icon';
import InputLabel from './InputLabel';
import React from 'react';
import { WarningText } from './WarningText';

// Styled Component

// Custom Component

//images

interface Props {
  code?: any; // country code
  containerStyle?: {}; //styling of container
  control?: any; // control prop for inputfield from react hook form
  defaultValue?: string;
  errors?: { message: string }; // error message
  half?: boolean; //half width
  Inputvalue?: string; // can give value direct
  keyboardType?: string; //keyboardtype
  maxLength?: number;
  multiline?: boolean;
  name: string; // name of the input field (required)
  numberOfLines?: number;
  pass?: boolean;
  phone?: boolean;
  placeholder?: string; // placeholder for input
  rules?: object; // condition you want to apply for input
  selectedCode?: any; //selected country code
  setSelectedCode?: any; // selecting code function
  testID?: string; // testid for tesing component
  title?: string; // label of the input field
  calender?: boolean;
  calenderFun?: () => void;
  calenderIcon?: string | NodeRequire;
  boxStyle?: {};
  inputStyles?: {};
  inputRef?: React.LegacyRef<TextInput> | undefined;
  titleimage?: string | NodeRequire;
  titleImageStyle?: {};
  titleImagePress?: () => void;
  disable?: boolean;
  rightside?: any;
  china?: boolean;
}
const InputField: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  // password icon state
  const [seenPass, setSeenpass] = React.useState(true);
  const [chinaRules, setChinaRules] = React.useState({
    required: true,
    type: 'phone',
    minLength: {
      value: 11,
      message: 'Phone must have 11 digits.Please try again.',
    },
    maxLength: {
      value: 11,
      message: 'Phone must not have more than 11 digits.Please try again.',
    },
  })
  const { control } = useForm();
  // inputfield border warning style variable
  let warningHandler = props.errors ? Colors.danger : Colors.success;
  return (
    <View
      style={[
        { marginBottom: 10, width: props.half === true ? '45%' : '100%' },
        props.containerStyle,
      ]}>
      {/* inputfield title component (InputLabel) */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {props.title && <InputLabel title={props.title} />}
        {props.titleimage && (
          <TouchableOpacity onPress={props.titleImagePress}>
            <Image source={props.titleimage} style={props.titleImageStyle} />
          </TouchableOpacity>
        )}
      </View>
      <Controller
        control={props.control ? props.control : control}
        render={({ field: { onChange, onBlur, value } }) => (
          // inputfield cover component (InputBox)
          <InputBox
            style={[
              {
                borderColor:
                  value === '' && !props.errors
                    ? Colors.inputBorder
                    : warningHandler,
              },
              props.boxStyle,
            ]}>
            {props.phone === true && (
              //country code picker component
              <ContactNumberField
                code={props.code} // array of country code from backend
                selectedCode={props.selectedCode} // selected code  from picker to parent component
                setSelectedCode={props.setSelectedCode} // selecting country code from picker to parent component
                enable={props.disable}
              />
            )}

            {/* TextInput Styled component (Input) */}
            <Input
              testID={props.testID}
              onBlur={onBlur}
              onChangeText={onChange}
              value={props.Inputvalue ? props.Inputvalue : value}
              placeholderTextColor={Colors.placeHolder}
              editable={props.disabled}
              // used to prevent font change while setting inputfield for password : issue with secureTextEntry
              // ref={ref =>
              //   ref &&
              //   ref.setNativeProps({style: {fontFamily: 'Roboto-Regular'}})
              // }
              ref={props.inputRef}
              secureTextEntry={props.pass && seenPass ? true : false}
              style={props.inputStyles}
              editable={!props.disable}
              style={{
                color:
                  !props.disable === true ? Colors.DimGray : Colors.inputBorder,
              }}
              // for addition of standard props fields for input
              {...props}
            />
            {/* Visible and not visible icon button for password field */}
            {props.pass && (
              <TouchableOpacity
                testID="eye.test"
                activeOpacity={0.6}
                onPress={() => setSeenpass(!seenPass)}>
                {seenPass && (
                  <Image
                    testID="closeEye.test"
                    resizeMode="center"
                    source={Images.eyeOff}
                    width={15}
                    height={15}
                  />
                )}
                {!seenPass && (
                  <Image
                    testID="openEye.test"
                    resizeMode="center"
                    source={Images.eyeOn}
                    width={15}
                    height={15}
                  />
                )}
              </TouchableOpacity>
            )}
            {props.calender && (
              <CircleTouch onPress={props.calenderFun}>
                <Image
                  source={
                    props.calenderIcon ? props.calenderIcon : Images.Calender
                  }
                />
              </CircleTouch>
            )}
            {props.rightside}
          </InputBox>
        )}
        name={props.name}



        defaultValue={props.defaultValue ? props.defaultValue : ''}
        rules={props.china && props.phone ? chinaRules : props.rules}
      />
      {/* InputField warning Text styled component  */}
      {props.errors && !!props.errors?.message && (
        <WarningText title={props.errors.message} />
      )}
    </View>
  );
};
export default InputField;
