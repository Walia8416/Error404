import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import {Colors} from '../../../constants/colors';
import Header from '../../helpers/header/Header';
import React, {useRef, useState} from 'react';
import {RouteStackParamList} from '../../../Routes';
import {Styles} from '../../../styles/homescreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {cropData} from './cropData';
import CropCard from './cropsCard';
import BottomUpModal from '../../helpers/bottomupmodal/bottomupmodal';
import {heighttodp} from '../../../constants/Dimenstions';

const Crops: React.FC<RouteStackParamList<'Crops'>> = ({
  navigation,
}: RouteStackParamList<'Crops'>) => {
  const [shadow, setShadow] = React.useState(false);

  return (
    <SafeAreaView style={{backgroundColor: Colors.white, flex: 1}}>
      <View>
        <Header testID={'menu'} navigation={navigation} scroll={shadow} />
        <ScrollView>
          <View style={Styles.section}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={Styles.sectionheading}>Data On Crops</Text>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {cropData.map(item => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('CropDetails', {item: item})
                  }>
                  <CropCard item={item} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Crops;
