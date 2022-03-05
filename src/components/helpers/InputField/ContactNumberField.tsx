import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {details} from './data';
import {Colors} from '../../../constants/colors';

interface Props {
  selectedCode: string; //counry code
  setSelectedCode: (args: string) => {};
  code: [{label: string; value: string}]; //array of counry code
  enable?: boolean;
}

const ContactNumberField = (props: Props) => {
  return (
    <Picker
      testID="react.picker.test"
      selectedValue={props.selectedCode}
      onValueChange={(itemValue: string, itemIndex: number) => {
        props.setSelectedCode(itemValue);
      }}
      mode="dropdown"
      enabled={!props.enable}
      style={{
        width: '45%',
        color: !props.enable ? Colors.DimGray : Colors.inputBorder,
      }}>
      {details.map(item => (
        <Picker.Item
          label={item.dial_code}
          value={item.dial_code}
          key={item.dial_code}
          style={{width: 20, color:Colors.FeatherWhite,fontSize:15}}
        />
      ))}
    </Picker>
  );
};

export default ContactNumberField;
