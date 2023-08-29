import {SemiBold, Regular} from '../constants/Fonts';

import {Colors} from '../constants/colors';
import styled from 'styled-components/native';
import {heighttodp} from '../constants/Dimenstions';

export const InputBox = styled.View`
  border: 1px solid ${Colors.inputBorder};
  margin-top: 5px;
  padding: 0px 12px;
  flex-direction: row;
  align-items: center;
  height: ${heighttodp(46)}px;
  justify-content: space-between;
  font-family: ${Regular};
`;

export const Input = styled.TextInput`
  font-size: 14px;
  flex: 1;
  color: ${Colors.DimGray};
  font-family: ${Regular};
`;

export const Heading = styled.Text`
  color: ${"#fd4900"};

  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 40px;
  font-family: ${SemiBold};
`;
