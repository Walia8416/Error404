import {fireEvent, render} from '@testing-library/react-native';

import {CreateTestProps} from '../../../../__test__/App.test';
import HomeSection from '../HomeSection';
import React from 'react';
import ScrollItem from '../../sidescroll/ScrollItem';
import SectionHeading from '../SectionHeading';
import {data} from '../../sidescroll/scrolldata';

let props: any;

describe('homeSection test', () => {
  props = CreateTestProps({});
  it('section heading render', () => {
    const {getByTestId} = render(
      <SectionHeading
        heading="Categories"
        onPress={jest.fn()}
        rightHeading="Categories"
        navigation={props.navigation}
      />,
    );
    fireEvent.press(getByTestId('touchtest'));
  });
  it('section heading render without right heading', () => {
    render(
      <SectionHeading
        heading="ok"
        onPress={jest.fn()}
        navigation={props.navigation}
      />,
    );
  });

  it('homesection render', () => {
    render(
      <HomeSection
        data={data}
        heading="ok"
        rightHeading="view"
        ScrollItem={ScrollItem}
      />,
    );
  });
});
