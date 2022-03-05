import {act, render} from '@testing-library/react-native';

import BottomUpModal from '../bottomupmodal';
import React from 'react';

const Comp = () => {
  const ref = React.useRef();
  const [display, setDisplay] = React.useState(true);
  const fun = () => {
    if (display) {
      ref.current.animationhandler();
      setDisplay(false);
    } else {
      ref.current.animationhandlerclose();
      setDisplay(true);
    }
  };
  return <BottomUpModal ref={ref} display={display} setDisplay={() => fun()} />;
};

it('bottomupmodal render', () => {
  const {getByTestId, debug} = render(<Comp />);
  act(() => {
    getByTestId('overlay').props.onTouchStart();
  });
});
