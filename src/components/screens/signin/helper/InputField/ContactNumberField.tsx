import React from 'react';
import {Picker} from '@react-native-picker/picker';

interface Props {
  selectedCode: string; //counry code
  setSelectedCode: (args: string) => {};
  code: [{label: string; value: string}]; //array of counry code
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
      style={{
        width: 102,
      }}>
      {props.code.map(item => (
        <Picker.Item
          label={item.label}
          value={item.value}
          key={item.label}
          style={{width: 20}}
        />
      ))}
    </Picker>
  );
};

export default ContactNumberField;
