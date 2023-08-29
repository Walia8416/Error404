import {Text, View} from 'react-native';

import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {Styles} from '../../../styles/homescreen';
import Touch from '../Touch';

interface Props {
  heading: string;
  onPress?: () => void;
  rightHeading?: string;
  navigation?: StackNavigationProp<any>;
}

const SectionHeading = ({heading, navigation, rightHeading}: Props) => {
  const navigationHandler = (title: string) => {
    if (title === 'Categories') {
      navigation?.navigate('Categories');
    }
  };
  return (
    <View style={Styles.sectioncontainer}>
      <Text style={Styles.sectionheading}>{heading}</Text>
      {rightHeading && (
        <View style={{borderRadius: 3, overflow: 'hidden'}}>
          <Touch testID={'Touch'} onPress={() => navigationHandler(heading)}>
            <View>
              <Text style={Styles.sectionlink}>{rightHeading}</Text>
            </View>
          </Touch>
        </View>
      )}
    </View>
  );
};

export default SectionHeading;
