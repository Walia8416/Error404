import {Colors} from '../../../constants/colors';
import {Image} from 'react-native';
import Images from '../../../constants/icon';
import React from 'react';
import styled from 'styled-components/native';

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
    <WarnView testID="warningtext">
      {title !== '' && (
        <Image
          resizeMode="contain"
          source={Images.info}
          style={{width: 15, height: 15}}
        />
      )}
      <WarnText>{title}</WarnText>
    </WarnView>
  );
};
