import 'react-native';
import 'react-hook-form';

import {FormProvider, useForm} from 'react-hook-form';
import {act, create} from 'react-test-renderer';

import CalenderInput from '../calenderInput';
import React from 'react';

const CustomComponent = () => {
  const methods = useForm();
  const error = {message: 'Invalid mail'};
  return (
    <FormProvider {...methods}>
      <CalenderInput
        errors={error}
        placeholder={'hello krishiacres'}
        name="Name"
        setValue={methods.setValue}
        control={methods.control}
        rule={{
          required: true,
        }}
      />
    </FormProvider>
  );
};
it('CalenderInput render', async () => {
  const months: {month: string}[] = [
    {
      month: '4',
    },
  ];
  const fun = (months: {month: string}[]) => {
    return months[0].month;
  };
  const bottom = create(<CustomComponent />);
  const Props = bottom.root.findAllByProps({testID: 'calender'})[0].props;
  const input = bottom.root.findAllByProps({testID: 'calenderInput.test'})[0]
    .props;
  await act(async () => {
    await Props.onPressArrowRight(jest.fn());
    await Props.onPressArrowRight(jest.fn());
    await Props.onPressArrowLeft(jest.fn());
    await Props.onVisibleMonthsChange(fun(months));
    await Props.onDayPress(jest.fn());
    await input.calenderFun(jest.fn());
  });
});
