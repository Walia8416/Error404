import 'react-native';
import 'react-hook-form';

import {act, create} from 'react-test-renderer';

import CalendarComponent from '../Calendar';
import React from 'react';

it('CalenderInput render', async () => {
  const months: {month: string}[] = [
    {
      month: '4',
    },
  ];
  const fun = (months: {month: string}[]) => {
    return months[0].month;
  };
  let props = {
    close: jest.fn(),
    date: new Date(),
    open: true,
    rangeSelection: true,
    setSelectedDate: jest.fn(),
  };
  const bottom = create(<CalendarComponent {...props} />);
  const Props = bottom.root.findByProps({testID: 'calender'}).props;
  await act(async () => {
    await Props.onPressArrowRight(jest.fn());
    await Props.onPressArrowRight(jest.fn());
    await Props.onPressArrowLeft(jest.fn());
    await Props.onVisibleMonthsChange(fun(months));
    await Props.onDayPress(jest.fn());
    await Props.onDayPress(jest.fn());
  });
});
