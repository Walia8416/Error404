import {Calendar, CalendarList} from 'react-native-calendars';
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, SetStateAction, useState} from 'react';

import CenterModel from '../models/CenterModel';
import {Colors} from '../../../constants/colors';
import Images from '../../../constants/icon';
import {Regular} from '../../../constants/Fonts';

interface CalendarProps {
  date?: string | Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<object>>;
  open: boolean;
  close: Dispatch<SetStateAction<boolean>>;
  rangeSelection?: boolean;
}

interface RenderHeaderProp {
  date: {
    getDate: () => void;
    getDay: () => void;
    getUTCFullYear: () => void;
  };
  months?: number | string;
  datevalue: {
    day?: string;
  };
}

interface CustomArrowProp {
  direction: {};
}

interface DateProps {
  day?: string;
  month?: string;
  year?: string;
}
const monthArray: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const RenderHeader = ({date, months, datevalue}: RenderHeaderProp) => {
  let day = date.getDate();
  let year = date.getUTCFullYear();
  let Day = datevalue?.day ? datevalue.day : day;
  let Mon = months ? monthArray[months - 1] : monthArray[new Date().getMonth()];
  return (
    <Text
      style={{
        fontFamily: Regular,
      }}>{`${Day} ${Mon} ${year}`}</Text>
  );
};

const CustomArrow = ({direction}: CustomArrowProp) => {
  return (
    <Image
      source={Images.backBlue}
      style={{
        width: 20,
        resizeMode: 'contain',
        height: 20,
        transform: [{rotate: direction === 'right' ? '180deg' : '0deg'}],
      }}
    />
  );
};

const CalendarComponent = ({
  close,
  date,
  open,
  rangeSelection,
  setSelectedDate,
}: CalendarProps) => {
  const [datevalue, setDateValue] = useState({});
  const [startValue, setStartValue] = useState({});
  const [endValue, setEndValue] = useState({});
  const [Month, setMonth] = useState('');
  const [count, setCount] = useState(1);
  const [orderError, setOrderError] = useState(false);

  const selectDay = (date: DateProps) => {
    setDateValue(date);
    setSelectedDate(date);
  };

  const isEmpty = (value: any) => {
    return (
      value && Object.keys(value).length === 0 && value.constructor === Object
    );
  };
  const rangeHandler = (date: {}) => {
    if (count % 2 == 0) {
      setEndValue(date);
      close(orderError ? true : false);
    } else {
      setStartValue(date);
    }
    setCount(count + 1);
  };
  React.useEffect(() => {
    if (!isEmpty(startValue) && !isEmpty(startValue)) {
      if (
        new Date(startValue?.dateString).getTime() <
        new Date(endValue?.dateString).getTime()
      ) {
        setOrderError(false);

        setSelectedDate({
          start: startValue,
          end: endValue,
        });
      } else {
        setOrderError(true);
      }
    }
  }, [startValue, endValue]);

  return (
    <CenterModel
      itemStyle={{height: 'auto'}}
      modelState={open}
      setmodelState={close}
      trasparent={true}>
      <Calendar
        testID="calender"
        calendarWidth={320}
        current={date}
        disableAllTouchEventsForDisabledDays={true}
        disableArrowLeft={false}
        disableArrowRight={false}
        disableMonthChange={false}
        enableSwipeMonths={true}
        firstDay={1}
        futureScrollRange={50}
        hideArrows={false}
        hideDayNames={false}
        hideExtraDays={false}
        horizontal={true}
        maxDate={'2030-05-30'}
        minDate={new Date()}
        monthFormat={'yyyy MM'}
        markedDates={
          rangeSelection
            ? {
                [`${startValue?.dateString}`]: {
                  selected: true,
                  selectedColor: Colors.Crimson,
                },
                [`${endValue?.dateString}`]: {
                  selected: orderError ? false : true,
                  selectedColor: Colors.link,
                },
              }
            : {
                [`${datevalue?.dateString}`]: {
                  selected: true,
                  selectedColor: Colors.Crimson,
                },
              }
        }
        onDayPress={day => {
          rangeSelection ? rangeHandler(day) : selectDay(day);
        }}
        onVisibleMonthsChange={months => {
          setMonth(months[0].month);
        }}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        pagingEnabled={true}
        pastScrollRange={50}
        renderArrow={direction => <CustomArrow direction={direction} />}
        renderHeader={date => {
          return (
            <RenderHeader date={date} months={Month} datevalue={datevalue} />
          );
        }}
        scrollEnabled={true}
        showScrollIndicator={true}
      />
    </CenterModel>
  );
};

export default CalendarComponent;

const styles = StyleSheet.create({});
