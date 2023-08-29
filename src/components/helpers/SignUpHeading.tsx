import {Heading} from '../../styled_components/textfields';
import React from 'react';
import {StyledText} from '../../styled_components/styledtexts';
import {View} from 'react-native';

interface Props {
  heading: string;
  subheading: string;
}

const SignUpHeading: React.FC<Props> = ({heading, subheading}) => {
  return (
    <View
      style={{
        paddingBottom: 20,
      }}>
      <Heading>{heading}</Heading>
    </View>
  );
};

export default SignUpHeading;
