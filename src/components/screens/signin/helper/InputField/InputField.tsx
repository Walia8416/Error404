import {Image, TouchableOpacity, View} from 'react-native';
import { Input, InputBox } from '../../../../../styled_components/textfields';

import { Colors } from '../../../../../constants/colors';
import ContactNumberField from './ContactNumberField';
import {Controller} from 'react-hook-form';
import Images from '../../../../../constants/icon';
import InputLabel from '../../../../helpers/InputField/InputLabel';
import React from 'react';
import { WarningText } from '../../../../helpers/InputField/WarningText';

interface Props {
  title: string; // label of the input field
  name: string; // name of the input field (required)
  errors?: {message: string}; // error message
  control?: any; // control prop for inputfield from react hook form
  placeholder: string; // placeholder for input
  rules?: object; // condition you want to apply for input
  testID?: string; // testid for tesing component
  code?: any; // country code
  selectedCode?: any; //selected country code
  setSelectedCode?: any; // selecting code function
  half?: boolean; //half width
  keyboardType?: any; //keyboardtype
  phone?: boolean;
  pass?: boolean;
}

const InputField: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  // password icon state
  const [seenPass, setSeenpass] = React.useState(true);

  // inputfield border warning style variable
  let warningHandler = props.errors ? Colors.danger : Colors.success;

  return (
    <View
      style={{marginBottom: 10, width: props.half === true ? '45%' : '100%'}}>
      {/* inputfield title component (InputLabel) */}
      <InputLabel title={props.title} />

      <Controller
        control={props.control}
        render={({field: {onChange, onBlur, value}}) => (
          // inputfield cover component (InputBox)
          <InputBox
            style={{
              borderColor: value === '' ? Colors.inputBorder : warningHandler,
            }}>
            {props.phone === true && (
              //country code picker component
              <ContactNumberField
                code={props.code} // array of country code from backend
                selectedCode={props.selectedCode} // selected code  from picker to parent component
                setSelectedCode={props.setSelectedCode} // selecting country code from picker to parent component
              />
            )}

            {/* TextInput Styled component (Input) */}
            <Input
              testID={props.testID}
              onBlur={onBlur}
              onChangeText={value => {
                onChange(value);
              }}
              value={value}
              placeholderTextColor={Colors.placeHolder}
              // used to prevent font change while setting inputfield for password : issue with secureTextEntry
              ref={ref =>
                ref &&
                ref.setNativeProps({style: {fontFamily: 'Roboto-Regular'}})
              }
              secureTextEntry={props.pass && seenPass ? true : false}
              // for addition of standard props fields for input
              {...props}
            />

            {/* Visible and not visible icon button for password field */}
            {props.pass && (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setSeenpass(!seenPass)}>
                {seenPass && (
                  <Image
                    resizeMode="center"
                    source={Images.eyeOff}
                    width={15}
                    height={15}
                  />
                )}
                {!seenPass && (
                  <Image
                    resizeMode="center"
                    source={Images.eyeOn}
                    width={15}
                    height={15}
                  />
                )}
              </TouchableOpacity>
            )}
          </InputBox>
        )}
        name={props.name}
        rules={props.rules}
        defaultValue=""
      />

      {/* InputField warning Text styled component  */}
      {props.errors && <WarningText title={props.errors.message} />}
    </View>
  );
};

export default InputField;
