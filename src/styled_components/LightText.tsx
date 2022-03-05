import {Colors} from '../constants/colors';
import {Regular} from '../constants/Fonts';
import styled from 'styled-components/native';

export const LightText = styled.Text`
  color: ${Colors.text};
  font-size: 14px;
  color:${Colors.placeHolder}
  font-family:${Regular};
`;
