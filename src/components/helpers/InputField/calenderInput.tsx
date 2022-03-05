import {
  Control,
  DeepMap,
  FieldError,
  FieldValues,
  UseFormSetValue,
} from 'react-hook-form';
import React, {useState} from 'react';

import CalendarComponent from './Calendar';
import InputField from './InputField';
import {View} from 'react-native';

interface CalenderProps {
  control: Control<FieldValues>;
  errors: DeepMap<FieldValues, FieldError>;
  name: string;
  placeholder?: string;
  setValue: UseFormSetValue<FieldValues>;
  title?: string;
  rule?: {};
  half?: boolean;
  styles?: {};
  calenderIcon?: string | NodeRequire;
}

interface DateProps {
  day?: string;
  month?: string;
  year?: string;
}

const CalenderInput = ({
  calenderIcon,
  control,
  errors,
  half,
  name,
  placeholder,
  rule,
  setValue,
  styles,
  title,
}: CalenderProps) => {
  const [datevalue, setDateValue] = useState(new Date());
  const [modalopen, setmodalopen] = useState<boolean>(false);

  const selectDay = (date: DateProps) => {
    const {day, month, year} = date;

    setValue(name, `${day}/${month}/${year}`);
    setDateValue(date);
    setmodalopen(false);
  };

  return (
    <View style={styles}>
      <InputField
        calender={true}
        calenderFun={() => setmodalopen(!modalopen)}
        calenderIcon={calenderIcon}
        control={control}
        errors={errors[name]}
        half={half}
        name={name}
        placeholder={placeholder}
        rules={rule}
        testID="calenderInput.test"
        title={title}
      />
      <CalendarComponent
        date={datevalue}
        setSelectedDate={selectDay}
        open={modalopen}
        close={setmodalopen}
      />
    </View>
  );
};

export default CalenderInput;
