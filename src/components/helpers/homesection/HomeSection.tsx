import MainScroll from '../sidescroll/MainScroll';
import React, {useState} from 'react';
import SectionHeading from './SectionHeading';
import {StackNavigationProp} from '@react-navigation/stack';
import {Styles} from '../../../styles/homescreen';
import {ScrollView, StyleSheet, View, Image} from 'react-native';
import {Screen_Height} from '../../../constants/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from 'react-native-svg';

interface Props {
  data: [] | any;
  heading: string;
  rightHeading?: string;
  ScrollItem?: React.ElementType;
  shadow?: boolean;
  navigation?: StackNavigationProp<any>;
}

const HomeSection = ({
  data,
  heading,
  navigation,
  rightHeading,
  id,
  logoStyle,
  conStyle,
}: Props) => {
  const [temp, setTemp] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  if (data && data.length) {
    return (
      <View>
        <View style={Styles.section}>
          <SectionHeading
            heading={heading}
            rightHeading={rightHeading}
            navigation={navigation}
          />
        </View>
        <View style={{marginLeft: 20}}>
          <ScrollView
            style={{flex: 1}}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {data.map(item => (
              <View
                style={{
                  margin: 4,

                  shadowColor: '#000',
                  shadowOffset: {
                    width: 3,
                    height: 3,
                  },
                  shadowRadius: 5,
                  shadowOpacity: 2.24,
                  elevation: 4,
                  backgroundColor: 'white',
                }}
                key={item._id}>
                <TouchableOpacity style={conStyle}>
                  <Image
                    style={logoStyle}
                    resizeMode={'contain'}
                    source={{
                      uri: id === '2' ? item.image : item.thumbnail,
                    }}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
  return null;
};

export default HomeSection;
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 170,
    height: 258,
  },
});
