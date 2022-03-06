import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import {Colors} from '../../../constants/colors';
import Header from '../../helpers/header/Header';
import React, {useEffect, useRef, useState} from 'react';
import {RouteStackParamList} from '../../../Routes';
import {Styles} from '../../../styles/homescreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {credData} from './credData';
import CredTile from './credTile';

const Credits: React.FC<RouteStackParamList<'Credits'>> = ({
  navigation,
}: RouteStackParamList<'Credits'>) => {
  const [shadow, setShadow] = React.useState(false);

  return (
    <SafeAreaView style={{backgroundColor: Colors.white, flex: 1}}>
      <View>
        <Header
          testID={'menu'}
          navigation={navigation}
          onPress={() => navigation.goBack()}
          scroll={shadow}
          title={'Credits'}
          creds={false}
        />
        <ScrollView>
          <View style={Styles.section}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={Styles.sectionheading}>Members Of Error404</Text>
            </View>
            <View style={{marginVertical: 10}}>
              {credData.map(item => (
                <CredTile item={item} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Credits;
