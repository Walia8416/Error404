import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../../../constants/Colors';
import {Image} from 'react-native';

const WarnText = styled.Text`
  color: ${Colors.danger};
  padding-left: 5px;
`;
const WarnView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WarningText: React.FC<{title: string}> = ({title}) => {
  return (
    <WarnView>
      {title !== '' && (
        <Image
          resizeMode="contain"
          source={require('./../../assets/Images/info.png')}
          style={{width: 15, height: 15}}
        />
      )}
      <WarnText>{title}</WarnText>
    </WarnView>
  );
};
