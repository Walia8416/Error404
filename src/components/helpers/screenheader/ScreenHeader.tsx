import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Colors} from '../../../constants/colors';
import Images from '../../../constants/icon';
import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {Regular} from '../../../constants/Fonts';
import Touch from '../Touch';

// const {width} = Dimensions.get('window');

interface HeaderProps {
  navigation?: NavigationProp<any, any>;
  title: string;
  width?: string | number;
  onPressBack?: () => void;
  headerImage: string;
}

const ScreenHeader = ({
  navigation,
  title,
  onPressBack,
  width,
  headerImage,
}: HeaderProps) => {
  return (
    <View style={[styles.container, {width: width ? width : '100%'}]}>
      <View style={{borderRadius: 30, overflow: 'hidden'}}>
        <Touch
          onPress={onPressBack ? onPressBack : () => navigation?.goBack()}
          testID="touch.test">
          <View>
            <Image source={Images.backBlue} style={styles.image} />
          </View>
        </Touch>
      </View> 
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
      {headerImage && (
        <TouchableOpacity style={{paddingLeft: 80}}>
          <Image source={headerImage} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  text: {
    color: Colors.DarkGrey,
    fontSize: 18,
    fontFamily: Regular,
  },
  image: {
    height: 25,
    width: 25,
    resizeMode: 'cover',
  },
});
