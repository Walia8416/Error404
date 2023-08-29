import {Colors} from '../constants/colors';
import styled from 'styled-components/native';

interface Props {
  position?: string;
  right?: number;
  bottom?: number;
  disabled?: boolean;
  disableColor?: string;
  size?: number;
  testID?: string;
  image?: string;
  text?: string;
  secondary?: boolean;
  width?: string | number;
  color?: string;
  style?: object;
  padding?: string;
  fontFamily?: string;
}

export const ButtonText = styled.Text`
  color: ${(props: Props) =>
    props.secondary
      ? props.disabled
        ? props.disableColor
          ? props.disableColor
          : '#839fc0'
        : props.color
        ? props.color
        : Colors.heading
      : 'white'};
  font-family: ${(props: Props) =>
    props.fontFamily ? props.fontFamily : 'Inter-Regular'};
`;

const commonStyle = styled.TouchableOpacity`
  width: ${(props: Props) => (props.width ? `${props.width}px` : 'auto')};
  justify-content: center;
  align-items: center;
  position: ${(props: Props) => (props.position ? props.position : 'relative')};
  bottom: ${(props: Props) => (props.bottom ? `${props.bottom}px` : 0)};
  right: ${(props: Props) => (props.right ? `${props.right}px` : 0)};
  background-color: ${(props: Props) =>
    props.disabled
      ? props.secondary
        ? 'transparent'
        : props.disableColor
        ? props.disableColor
        : '#c4d7e7'
      : props.secondary
      ? 'transparent'
      : props.color
      ? props.color
      : Colors.heading};
  border-color: ${props =>
    props.disabled
      ? props.disableColor
        ? props.disableColor
        : '#839fc0'
      : props.color
      ? props.color
      : Colors.heading};
  border-width: ${props => (props.secondary ? '1px' : '0px')};
`;

export const RoundedButton = styled(commonStyle)`
  border-radius: 30px;
  padding: 12px 20px;
`;

export const SmallRoundedButton = styled(commonStyle)`
  border-radius: 5px;
  padding: 12px 20px;
  width: ${props => (props.width ? `${props.width}px` : 'auto')};
`;

export const TopRoundedButton = styled(commonStyle)`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 20px;
  width: ${props => (props.width ? `${props.width}px` : 'auto')};
`;
export const CircledButton = styled(commonStyle)`
  border-radius: 100px;
  padding: ${props => (props.padding ? `${props.padding}px` : '0px')};
  width: ${props => (props.width ? `${props.width}px` : '10px')};
  height: ${props => (props.width ? `${props.width}px` : '10px')};
`;
