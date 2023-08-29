import 'react-native';

import {
  CircleButton,
  RoundButton,
  SmallRoundButton,
  TopRoundButton,
} from '../buttons/NavButton';

import {Colors} from '../../../constants/colors';
import Images from '../../../constants/icon';
import React from 'react';
import renderer from 'react-test-renderer';

it('Rounded Button  secondary,disabled having disableColor', async () => {
  const props = {
    onPressBtn: jest.fn(),
    image: Images.arrow,
    testID: 'testing',
  };
  const wrapper = renderer.create(<RoundButton {...props} />);
  expect(wrapper.toJSON()).toBeTruthy();
  const styles = wrapper.toJSON().props.style;

  const {
    backgroundColor,

    borderRadius,
    borderWidth,
  } = styles;
  // const {color: buttonTextColor} = childStyles;

  expect(backgroundColor).toBe(Colors.heading);
  expect(borderRadius).toBe(30);
  expect(borderWidth).toBe(0);
});

it('TopRounded Button', () => {
  const props = {
    onPressBtn: jest.fn(),
    image: Images.arrow,
    text: 'lorem',
    testID: 'testing',
  };
  const wrapper = renderer.create(<TopRoundButton {...props} />);
  expect(wrapper.toJSON()).toBeTruthy();
  const styles = wrapper.toJSON().props.style;

  const {
    backgroundColor,

    borderWidth,
  } = styles;

  expect(backgroundColor).toBe(Colors.heading);
  expect(borderWidth).toBe(0);
});

it('Small Rounded button', () => {
  const props = {
    onPressBtn: jest.fn(),
    image: Images.arrow,
    testID: 'testing',
    text: 'lorem',
  };
  const wrapper = renderer.create(<SmallRoundButton {...props} />);
  expect(wrapper.toJSON()).toBeTruthy();
  const styles = wrapper.toJSON().props.style;

  const {
    backgroundColor,

    borderRadius,
    borderWidth,
  } = styles;

  expect(backgroundColor).toBe(Colors.heading);
  expect(borderWidth).toBe(0);
  expect(borderRadius).toBe(5);
});

describe('Generic NavButton', () => {
  it('Circle Button ,disabled having disableColor', async () => {
    const props = {
      position: 'absolute',
      onPressBtn: jest.fn(),
      text: 'image',
      testID: 'testing',
    };
    const wrapper = renderer.create(<CircleButton {...props} />);
    expect(wrapper.toJSON()).toBeTruthy();
    const styles = wrapper.toJSON().props.style;

    const {
      backgroundColor,

      borderRadius,
      borderColor,
      borderWidth,
    } = styles;
    const childStyles = wrapper.toJSON().children[0].props.style;

    expect(backgroundColor).toBe(Colors.heading);
    expect(borderRadius).toBe(100);
    expect(borderColor).toBe(Colors.heading);
    expect(borderWidth).not.toBe(1);
  });
  it('Circle Button  secondary,disabled having disableColor', async () => {
    const props = {
      secondary: true,
      position: 'absolute',
      onPressBtn: jest.fn(),
      disabled: true,
      text: 'image',
      disableColor: '#c4d7e7',
      testID: 'testing',
    };
    const wrapper = renderer.create(<CircleButton {...props} />);
    expect(wrapper.toJSON()).toBeTruthy();
    const styles = wrapper.toJSON().props.style;

    const {
      backgroundColor,

      borderRadius,
      borderColor,
      borderWidth,
    } = styles;
    const childStyles = wrapper.toJSON().children[0].props.style;

    expect(backgroundColor).toBe('transparent');
    expect(borderRadius).toBe(100);
    expect(borderColor).toBe('#c4d7e7');
    expect(borderWidth).toBe(1);
  });
});
