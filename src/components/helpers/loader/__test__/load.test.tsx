import {act, create} from 'react-test-renderer';

import Loader from './../Loading';
import React from 'react';

describe('initaial render', () => {
  it('render', () => {
    create(<Loader />);
  });
});
