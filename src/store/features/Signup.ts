import {createSlice} from '@reduxjs/toolkit';

interface Codes {
  label: string;
  value: string;
} // country code object for picker type definition

const code: Array<Codes> = [
  {
    label: '+91',
    value: '+91',
  },
  {
    label: '+51',
    value: '+51',
  },
  {
    label: '+31',
    value: '+31',
  },
];

interface SignupArgs {
  errors?: any;
  code: Array<Codes>;
  countryCode: string;
}

const initialState: SignupArgs = {
  errors: {},
  code: code,
  countryCode: '91',
};

export const signupSlice = createSlice({
  name: 'signUp',
  initialState: initialState,
  reducers: {
    updateError: (state, {payload}) => {
      return {
        ...state,
        errors: payload.errors,
      };
    },
    updateCode: (state, {payload}) => {
      return {
        ...state,
        countryCode: payload.countrycode,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {updateError,updateCode} = signupSlice.actions;

export default signupSlice.reducer;
