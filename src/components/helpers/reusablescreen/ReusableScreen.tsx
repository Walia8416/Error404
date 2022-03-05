import {
  Control,
  Controller,
  FieldValues,
  UseFormSetValue,
  useForm,
} from 'react-hook-form';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Medium, Regular, SemiBold} from '../../../constants/Fonts';
import {TextInput, View} from 'react-native';
import {heighttodp, widthtodp} from '../../../constants/Dimenstions';

import {Calendar} from 'react-native-calendars';
import {Colors} from '../../../constants/colors';
import {FlatList} from 'react-native';
import Images from '../../../constants/icon';
import {KeyboardAvoidingView} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import React from 'react';
import SearchHeader from '../searchheader/SearchHeader';

interface editableProps {
  edit: boolean;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  controls: Control<FieldValues> | undefined;
  name: string;
  text: string;
  placeholderTextColor?: string;
  placeholder: string;
}
interface textEditProps {
  name: string;
  text: string;
  edit?: boolean;
  controls: Control<FieldValues> | undefined;
  placeholderTextColor?: string;
  placeholder: string;
}
interface calenderProps {
  visible: boolean;
  onPressModelBackground: ((event: GestureResponderEvent) => void) | undefined;
  onPressClose: ((event: GestureResponderEvent) => void) | undefined;
  setValue: UseFormSetValue<FieldValues>;
  value: string;
  testIdone?: string;
  onPressModelBackgroundtest?: string;
}

const month = [
  {name: 'January'},
  {name: 'February'},
  {name: 'March'},
  {name: 'April'},
  {name: 'May'},
  {name: 'June'},
  {name: 'July'},
  {name: 'August'},
  {name: 'September'},
  {name: 'October'},
  {name: 'November'},
  {name: 'December'},
];

interface RenderSocialProps {
  item: {
    key: string;
    url: string;
    image: ImageSourcePropType;
  };
  index: number;
}

interface FlexablityProps {
  placeholderTextColorStart?: string;
  placeholderstart: string;
  name: string;
  controls: Control<FieldValues> | undefined;
  onPressInfo?: ((event: GestureResponderEvent) => void) | undefined;
}

export const Flexablity = ({
  placeholderTextColorStart,
  placeholderstart,
  name,
  controls,
  onPressInfo,
}: FlexablityProps) => {
  return (
    <View style={{height: heighttodp(84)}}>
      <View
        style={{
          flexDirection: 'row',
          height: heighttodp(18),
          marginBottom: heighttodp(8),
        }}>
        <Headings heading={'Flexibility'} />
        <TouchableOpacity
          style={{
            width: widthtodp(18),
            height: heighttodp(18),
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={onPressInfo}>
          <Image
            source={Images.Infosquare}
            style={{width: widthtodp(18), height: heighttodp(18)}}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: heighttodp(58),
          paddingBottom: heighttodp(12),
        }}>
        <View
          style={{
            height: heighttodp(46),
            marginHorizontal: widthtodp(24),
            borderWidth: 1,
            borderColor: Colors.inputBorder,
          }}>
          <ReuseTextEdit
            controls={controls}
            name={name}
            placeholderstart={placeholderstart}
            placeholderTextColorStart={placeholderTextColorStart}
          />
        </View>
      </View>
    </View>
  );
};

export const Headings = ({heading}: {heading: string}) => {
  return (
    <View
      style={{
        height: heighttodp(24),
        flexDirection: 'row',
        paddingLeft: widthtodp(24),
        justifyContent: 'space-between',
        paddingRight: widthtodp(24),
        alignItems: 'flex-start',
      }}>
      <Text
        style={{
          fontSize: RFValue(12),
          fontFamily: Regular,
          color: Colors.placeHolder,
        }}>
        {heading}
      </Text>
    </View>
  );
};

interface reuseTextEditProps {
  name: string;
  controls: Control<FieldValues> | undefined;
  placeholderstart: string;
  placeholderTextColorStart?: string;
}

export const ReuseTextEdit = ({
  name,
  controls,
  placeholderstart,
  placeholderTextColorStart,
}: reuseTextEditProps) => {
  return (
    <Controller
      name={name}
      control={controls}
      render={({
        field: {name, onBlur, onChange, value},
        fieldState,
        formState,
      }) => {
        return (
          <TextInput
            placeholder={placeholderstart}
            onChangeText={onChange}
            placeholderTextColor={placeholderTextColorStart}
            value={value}
            style={{
              height: heighttodp(46),
              flex: 1,
              fontFamily: Medium,
              fontSize: RFValue(14),
              color: Colors.text,
              fontWeight: 'bold',
              lineHeight: heighttodp(21),
              textAlignVertical: 'center',
              paddingLeft: widthtodp(16),
              borderRadius: 6,
            }}
          />
        );
      }}
    />
  );
};

export const Calender = ({
  visible,
  onPressModelBackground,
  setValue,
  value,
  onPressClose,
  testIdone,
  onPressModelBackgroundtest,
}: calenderProps) => {
  let date = new Date();
  let months = date.getMonth() + 1;
  let currentdate = date.getDate();
  let currentDay =
    date.getFullYear() +
    '-' +
    (months.toString().length === 1 ? `0${months}` : months) +
    '-' +
    (currentdate.toString().length === 1 ? `0${currentdate}` : currentdate);

  const [selected, setSelected] = React.useState(currentDay);

  const dateHandler = (e: {
    day: string;
    month: string;
    year: string;
    dateString: string;
  }) => {
    const {day, month, year, dateString} = e;
    setSelected(dateString);
    setValue(value, `${day}/${month}/${year}`);
  };

  return (
    <Modal visible={visible} transparent={true}>
      <View
        testID={'calenderView'}
        style={{
          height: heighttodp(640),
          justifyContent: 'center',
          backgroundColor: Colors.blueTransparent,
        }}>
        <TouchableOpacity
          testID={onPressModelBackgroundtest}
          activeOpacity={1}
          style={{
            height: heighttodp(640),
            justifyContent: 'center',
            backgroundColor: Colors.blueTransparent,
          }}
          onPress={onPressModelBackground}>
          <View
            style={{
              height: heighttodp(24),
              backgroundColor: Colors.white,
              justifyContent: 'center',
              alignItems: 'flex-end',
              // paddingHorizontal: widthtodp(16),
            }}>
            <TouchableOpacity
              testID={testIdone}
              style={{height: heighttodp(24), width: widthtodp(24)}}
              onPress={onPressClose}>
              <Image
                source={Images.bigX}
                style={{width: widthtodp(24), height: heighttodp(24)}}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
          <Calendar
            calendarWidth={320}
            current={new Date()}
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
            markedDates={{
              [`${currentDay}`]: {
                selected: true,
                selectedColor: Colors.DimGray,
              },
              [`${selected}`]: {
                selected: true,
                selectedColor: Colors.Crimson,
              },
            }}
            onDayPress={(day: {
              day: string;
              month: string;
              year: string;
              dateString: string;
            }) => {
              dateHandler(day);
            }}
            onVisibleMonthsChange={(months: any) => {}}
            onPressArrowLeft={(subtractMonth: any) => subtractMonth()}
            onPressArrowRight={(addMonth: any) => addMonth()}
            pagingEnabled={true}
            pastScrollRange={50}
            renderArrow={(direction: string) => {
              return (
                <Image
                  source={Images.backBlue}
                  style={{
                    width: widthtodp(24),
                    height: heighttodp(24),
                    transform: [
                      {rotate: direction === 'left' ? '0deg' : '180deg'},
                    ],
                  }}
                  resizeMode={'contain'}
                />
              );
            }}
            renderHeader={(date: any) => {
              return (
                <Text style={{fontFamily: Regular, fontSize: RFValue(14)}}>
                  {`${month[date.getMonth()].name}   ${date.getFullYear()}`}
                </Text>
              );
            }}
            scrollEnabled={true}
            showScrollIndicator={true}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

interface EditCalenderProps {
  placeholderTextColorStart: string;
  controls: Control<FieldValues> | undefined;
  name: string;
  testIdone?: string;
  placeholderstart: string;
  setValue: UseFormSetValue<FieldValues>;
  onPressModelBackground: ((event: GestureResponderEvent) => void) | undefined;
  onPressCalender: ((event: GestureResponderEvent) => void) | undefined;
  onPressClose: ((event: GestureResponderEvent) => void) | undefined;
  visible: boolean;
}

export const EditCalender = ({
  placeholderTextColorStart,
  controls,
  name,
  placeholderstart,
  setValue,
  onPressModelBackground,
  visible,
  onPressCalender,
  onPressClose,
  testIdone,
}: EditCalenderProps) => {
  return (
    <View
      style={{
        height: heighttodp(54),
        alignItems: 'center',
        paddingHorizontal: widthtodp(24),
      }}>
      <View
        style={{
          height: heighttodp(54),
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: Colors.inputBorder,
          alignItems: 'center',
        }}>
        <Calender
          onPressModelBackground={onPressModelBackground}
          value={name}
          visible={visible}
          setValue={setValue}
          onPressClose={onPressClose}
          testIdone={testIdone}
        />
        <ReuseTextEdit
          controls={controls}
          name={name}
          placeholderstart={placeholderstart}
          placeholderTextColorStart={placeholderTextColorStart}
        />
        <TouchableOpacity
          style={{
            height: heighttodp(20),
            width: widthtodp(20),
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: widthtodp(13),
          }}
          onPress={onPressCalender}>
          <Image
            source={Images.calendar}
            style={{height: heighttodp(20), width: widthtodp(20)}}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

interface DatePickerProps {
  controlsEditCalender: Control<FieldValues> | undefined;
  nameEditCalender: string;
  placeholderTextColorStart: string;
  placeholderstart: string;
  testIdone?: string;
  setValue: UseFormSetValue<FieldValues>;
  onPressModelBackground: ((event: GestureResponderEvent) => void) | undefined;
  onPressCalender: ((event: GestureResponderEvent) => void) | undefined;
  onPressClose: ((event: GestureResponderEvent) => void) | undefined;
  visible: boolean;
}

export const Datepicker = ({
  controlsEditCalender,
  nameEditCalender,
  placeholderTextColorStart,
  placeholderstart,
  setValue,
  onPressModelBackground,
  visible,
  onPressCalender,
  onPressClose,
  testIdone,
}: DatePickerProps) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={{height: heighttodp(84)}}>
        <Headings heading={'Campaign Start Date'} />
        <View style={{height: heighttodp(54)}}>
          <EditCalender
            controls={controlsEditCalender}
            name={nameEditCalender}
            placeholderTextColorStart={placeholderTextColorStart}
            placeholderstart={placeholderstart}
            setValue={setValue}
            onPressModelBackground={onPressModelBackground}
            visible={visible}
            onPressCalender={onPressCalender}
            onPressClose={onPressClose}
            testIdone={testIdone}
          />
        </View>
      </View>
    </View>
  );
};

export const EditFeild = ({
  name,
  edit,
  controls,
  text,
  placeholder,
  placeholderTextColor,
}: textEditProps) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: widthtodp(24),
        height: heighttodp(21),
      }}>
      {edit ? (
        <Controller
          control={controls}
          name={name}
          render={({
            field: {onChange, name, onBlur, value},
            fieldState,
            formState,
          }) => {
            return (
              <TextInput
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                style={{
                  flex: 1,
                  fontFamily: Medium,
                  fontSize: RFValue(14),
                  color: Colors.text,
                  fontWeight: 'bold',
                  lineHeight: heighttodp(21),
                  textAlignVertical: 'center',
                  borderWidth: 1,
                  paddingLeft: widthtodp(16),
                  borderRadius: 6,
                  height: heighttodp(21),
                  borderColor: Colors.inputBorder,
                }}
              />
            );
          }}
        />
      ) : (
        <View style={{flex: 1}}>
          <Text
            style={{
              flex: 1,
              fontFamily: Medium,
              fontSize: RFValue(14),
              color: Colors.text,
              fontWeight: 'bold',
              lineHeight: heighttodp(21),
              textAlignVertical: 'center',
            }}>
            {text}
          </Text>
        </View>
      )}
    </View>
  );
};

export const Editable = ({
  edit,
  onPress,
  controls,
  name,
  text,
  placeholder,
  placeholderTextColor,
}: editableProps) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: heighttodp(67),
        }}>
        <View
          style={{
            height: heighttodp(24),
            flexDirection: 'row',
            paddingLeft: widthtodp(24),
            justifyContent: 'space-between',
            paddingRight: widthtodp(24),
          }}>
          <Text
            style={{
              fontSize: RFValue(12),
              fontFamily: Regular,
              color: Colors.placeHolder,
            }}>
            Campaign Name
          </Text>
          <TouchableOpacity onPress={onPress}>
            <Image
              source={Images.edit}
              style={{height: heighttodp(24), width: widthtodp(24)}}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: heighttodp(43),
            marginBottom: 12,
            justifyContent: 'flex-end',
          }}>
          <EditFeild
            edit={edit}
            name={name}
            controls={controls}
            text={text}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
          />
        </View>
      </View>
    </View>
  );
};

interface ReUseableScreenProps {
  onPressSocialIcons?: ((event: GestureResponderEvent) => void) | undefined;
  controls?: Control<FieldValues> | undefined;
  onPressEdit?: ((event: GestureResponderEvent) => void) | undefined;
  name: string;
  edit: boolean;
  setValues?: UseFormSetValue<FieldValues>;
  onPressModelBackground?: ((event: GestureResponderEvent) => void) | undefined;
  onPressCalender?: ((event: GestureResponderEvent) => void) | undefined;
  onPressClose?: ((event: GestureResponderEvent) => void) | undefined;
  namedateone: string;
  namedatetwo: string;
  onPressModelBackgroundtwo?:
    | ((event: GestureResponderEvent) => void)
    | undefined;
  onPressCalendertwo?: ((event: GestureResponderEvent) => void) | undefined;
  onPressClosetwo?: ((event: GestureResponderEvent) => void) | undefined;
  flexname: string;
  testIdone?: string;
  flexPlaceholder: string;
  placeholderFlexColor?: string;
  influencer?: boolean;
  inflencericondata?:
    | readonly {
        key: string;
        url: string;
        image: ImageSourcePropType;
      }[]
    | null
    | undefined;
  nameValue: string;
  calenderoneBoolean: boolean;
  calendertwoBoolean: boolean;
  heading?: string;
  onPressBack?: ((event: GestureResponderEvent) => void) | undefined;
  disable?: boolean;
}

const ReUseableScreen = ({
  onPressSocialIcons,
  controls,
  onPressEdit,
  name,
  edit,
  setValues,
  onPressModelBackground,
  onPressCalender,
  onPressClose,
  namedateone,
  namedatetwo,
  onPressModelBackgroundtwo,
  onPressCalendertwo,
  onPressClosetwo,
  flexname,
  flexPlaceholder,
  placeholderFlexColor,
  influencer,
  inflencericondata,
  nameValue,
  calenderoneBoolean,
  calendertwoBoolean,
  testIdone,
  heading,
  onPressBack,
  disable,
}: ReUseableScreenProps) => {
  const RenderSocial = ({item, index}: RenderSocialProps) => {
    return (
      <TouchableOpacity
        style={{
          height: heighttodp(32),
          width: widthtodp(32),
          marginLeft: index !== 0 ? widthtodp(16) : 0,
        }}
        onPress={onPressSocialIcons}>
        <Image
          source={item.image}
          style={{height: heighttodp(32), width: widthtodp(32)}}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
    );
  };

  const {control, setValue} = useForm();

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <SearchHeader heading={heading} onPressBack={onPressBack} />
      </View>
      <ScrollView style={{height: heighttodp(524)}}>
        <View style={styles.texteditone}>
          <Editable
            controls={controls ? controls : control}
            onPress={onPressEdit}
            edit={edit}
            name={name}
            text={nameValue}
            placeholder={'Enter campaign name'}
            placeholderTextColor={Colors.text}
          />
        </View>
        <View style={styles.textedittwo}>
          <Datepicker
            controlsEditCalender={controls ? controls : control}
            nameEditCalender={namedateone}
            placeholderTextColorStart={Colors.text}
            placeholderstart={'Enter campaign start date'}
            setValue={setValues ? setValues : setValue}
            visible={calenderoneBoolean}
            onPressModelBackground={onPressModelBackground}
            onPressCalender={onPressCalender}
            onPressClose={onPressClose}
            testIdone={testIdone}
          />
        </View>
        <View style={styles.textedittwo}>
          <Datepicker
            controlsEditCalender={controls ? controls : control}
            nameEditCalender={namedatetwo}
            placeholderTextColorStart={Colors.text}
            placeholderstart={'Enter campaign end date'}
            setValue={setValues ? setValues : setValue}
            visible={calendertwoBoolean}
            onPressModelBackground={onPressModelBackgroundtwo}
            onPressCalender={onPressCalendertwo}
            onPressClose={onPressClosetwo}
          />
        </View>
        <View style={styles.textedittwo}>
          <KeyboardAvoidingView>
            <Flexablity
              controls={controls ? controls : control}
              name={flexname}
              placeholderstart={flexPlaceholder}
              placeholderTextColorStart={placeholderFlexColor}
            />
          </KeyboardAvoidingView>
        </View>
        <View style={styles.textedittwo}>
          {
            //TODO AdddropDown
          }
        </View>
        {influencer && (
          <View style={styles.textedittwo}>
            <View style={{height: heighttodp(84)}}>
              <View
                style={{height: heighttodp(18), marginBottom: heighttodp(8)}}>
                <Headings heading={'Platform'} />
              </View>
              <View
                style={{
                  height: heighttodp(32),
                  paddingHorizontal: widthtodp(24),
                }}>
                <FlatList
                  keyExtractor={(item, index) => item.key}
                  data={inflencericondata}
                  renderItem={RenderSocial}
                  horizontal
                />
              </View>
            </View>
          </View>
        )}
      </ScrollView>
      <View style={{height: heighttodp(56)}}>
        <TouchableOpacity
          disabled={disable}
          style={{
            height: heighttodp(56),
            backgroundColor: disable ? Colors.inputBorder : Colors.Crimson,
            alignItems: 'center',
            justifyContent: 'center',
            borderTopStartRadius: heighttodp(16),
            borderTopEndRadius: heighttodp(16),
          }}>
          <Text
            style={{
              fontFamily: SemiBold,
              fontSize: RFValue(16),
              color: Colors.white,
              fontWeight: 'bold',
              textAlign: 'center',
              lineHeight: heighttodp(24),
            }}>
            Proceed
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReUseableScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: heighttodp(640),
    width: widthtodp(360),
    backgroundColor: Colors.white,
  },
  header: {
    height: heighttodp(60),
    width: widthtodp(360),
  },
  texteditone: {
    height: heighttodp(83),
    paddingTop: heighttodp(16),
  },

  textedittwo: {
    paddingTop: heighttodp(12),
    // paddingBottom: heighttodp(12),
    height: heighttodp(96),
  },
});
