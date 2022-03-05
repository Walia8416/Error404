import {FormProvider, useForm} from 'react-hook-form';
import {act, create} from 'react-test-renderer';

import InputField from '../InputField';
import React from 'react';
import {render} from '@testing-library/react-native';

describe('input field test', () => {
  it('render test', () => {
    const inputfield = create(
      <InputField
        onError={false}
        testID={'input'}
        width={43}
        height={34}
        bordercolor={'#343'}
        placeholder={'hello krishiacres'}
      />,
    );
    const input = inputfield.root.findByProps({testID: 'input'}).props;
    act(() => inputfield.toJSON().children[1].props.onFocus());

    expect(input.width).toEqual(43);
  });

  const CustomComponent = () => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <InputField
          onError={methods.formState.errors?.Name}
          testID={'input'}
          height={34}
          bordercolor={'#343'}
          borderradius={5}
          placeholder={'hello krishiacres'}
          name="Name"
          controls={methods.control}
          rules={{required: false}}
        />
      </FormProvider>
    );
  };
  it('textField render', () => {
    render(<CustomComponent />);
  });
});
