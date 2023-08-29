import {
  ColorValue,
  Image,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputEndEditingEventData,
  View,
} from 'react-native';
import {Colors} from '../../../constants/colors';
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
  useForm,
} from 'react-hook-form';

import Images from '../../../constants/icon';
import React from 'react';

interface props {
  placeholder?: string;
  width?: number | string;
  height?: number | string;
  borderradius?: number | string;
  bordercolor?: string;
  onError?: boolean;
  onChangeText?: ((text: string) => void) | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  passwordrules?: string | null | undefined;
  secure?: boolean | undefined;
  maxlength?: number | undefined;
  numberoflines?: number | undefined;
  onendediting?:
    | ((e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void)
    | undefined;
  placeholdertextcolor?: ColorValue | undefined;
  ref?: React.LegacyRef<TextInput> | undefined;
  testID?: string | undefined;
  textalign?: 'center' | 'left' | 'right' | undefined;
  textalignvertical?: 'center' | 'auto' | 'top' | 'bottom' | undefined;
  text?: string;
  name?: string | `${string}.${string}` | `${string}.${number}`;
  controls?: Control<FieldValues> | undefined;
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
  errorText?: boolean | undefined;
}

const InputFeild: React.FC<props> = ({
  width,
  height,
  placeholder,
  borderradius,
  bordercolor,
  onError,
  onChangeText,
  keyboardType,
  passwordrules,
  secure,
  maxlength,
  numberoflines,
  onendediting,
  placeholdertextcolor,
  ref,
  testID,
  textalign,
  textalignvertical,
  text,
  name,
  controls,
  rules,
  errorText,
}) => {
  const [onActive, setActive] = React.useState(false);
  const bordercolorSet = onError
    ? '#e23b3b'
    : onActive
    ? Colors.x
    : bordercolor
    ? bordercolor
    : '#c4d7e7';

  const {control} = useForm();

  return (
    <View
      style={{
        width: width ? width : 312,
        height: height ? height : 72,
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 32,
        alignSelf: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Inter-Regular',
          alignSelf: 'flex-start',
          marginBottom: 8,
          color: '#839fc0',
          fontSize: 12,
        }}>
        {text}
      </Text>
      <Controller
        rules={rules}
        control={controls ? controls : control}
        name={name ? name : 'default'}
        render={({field: {onChange, onBlur, value}, fieldState, formState}) => (
          <TextInput
            style={{
              borderColor: bordercolorSet,
              width: width ? width : 312,
              height: height ? height : 46,
              color: '#153059',
              borderWidth: 1,
              borderRadius: borderradius ? borderradius : 0,
              paddingLeft: 16,
              fontSize: 14,
              fontFamily: 'Inter-Regular',
            }}
            placeholder={placeholder ? placeholder : 'Enter Some thing'}
            onFocus={() => setActive(true)}
            onBlur={onBlur}
            onChangeText={onChange}
            keyboardType={keyboardType}
            passwordRules={passwordrules}
            secureTextEntry={secure}
            autoCorrect={false}
            maxLength={maxlength}
            numberOfLines={numberoflines}
            onEndEditing={onendediting}
            placeholderTextColor={placeholdertextcolor}
            ref={ref}
            testID={testID}
            textAlign={textalign}
            textAlignVertical={textalignvertical}
            value={value}
            // inlineImageLeft={null}
            // inlineImagePadding
          />
        )}
      />
      {errorText ? (
        <View
          style={{
            height: 18,
            width: 210,
            marginTop: 12,
            flexDirection: 'row',
            alignSelf: 'flex-start',
          }}>
          <Image
            source={Images.info}
            style={{width: 16, height: 16}}
            resizeMode={'contain'}
          />
          <Text
            style={{
              fontFamily: 'Inter-Regular',
              fontSize: 12,
              textAlignVertical: 'center',
              marginLeft: 8,
              width: 250,
              color: '#e23b3b',
            }}>
            {errorText}
          </Text>
        </View>
      ) : (
        <View
          style={{
            height: 18,
            width: 210,
            marginTop: 12,
            flexDirection: 'row',
            alignSelf: 'flex-start',
          }}
        />
      )}
    </View>
  );
};

export default InputFeild;
