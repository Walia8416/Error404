import DropDown from '../DropDown';
import DropDownScroll from '../DropDownScroll';
import Images from '../../../../constants/icon';
import React from 'react';
import {create} from 'react-test-renderer';

const props = {
  images: {
    image: Images.Category,
    name: 'Hording',
    key: '0',
  },
};

describe('drop down render', () => {
  it('initial test', () => {
    const dropdown = create(
      <DropDown
        check={true}
        items={props.images}
        setCheck={() => jest.fn()}
        setItems={() => jest.fn()}
        setState={() => jest.fn()}
        state={{top: 0, left: 0}}
      />,
    );
    const pressin = dropdown.root.findByProps({testID: 'arrow'}).props;
    pressin.onPressIn();
    const pressout = dropdown.root.findByProps({testID: 'arrow'}).props;
    pressout.onPressOut();
  });

  it('dropdown scroll test', () => {
    const dropdownscroll = create(
      <DropDownScroll
        check={true}
        items={props.images}
        setCheck={() => jest.fn()}
        setItems={() => jest.fn()}
        setState={() => jest.fn()}
        state={{top: 0, left: 0}}
      />,
    );
    const press = dropdownscroll.root.findAllByProps({testID: 'ddst'})[0].props;
    press.onPress();
  });

  it('initial test dropdown', () => {
    const dropdown = create(
      <DropDown
        check={false}
        items={props.images}
        setCheck={() => jest.fn()}
        setItems={() => jest.fn()}
        setState={() => jest.fn()}
        state={{top: 0, left: 0}}
        width={200}
      />,
    );
    const pressin = dropdown.root.findByProps({testID: 'arrow'}).props;
    pressin.onPressIn();
    const pressout = dropdown.root.findByProps({testID: 'arrow'}).props;
    pressout.onPressOut();
  });
});
