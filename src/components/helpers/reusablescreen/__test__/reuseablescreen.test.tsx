import ReUseableScreen from '../ReusableScreen';
import React from 'react';
import {create} from 'react-test-renderer';

describe('test reusablescreen', () => {
  it('initial test', () => {
    const component = create(
      <ReUseableScreen
        calenderoneBoolean={true}
        calendertwoBoolean={true}
        edit={true}
        flexPlaceholder={'dummy'}
        flexname={'dummy'}
        name={'dummy'}
        nameValue={'dummy'}
        namedateone={'dummy'}
        namedatetwo={'dummy'}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
