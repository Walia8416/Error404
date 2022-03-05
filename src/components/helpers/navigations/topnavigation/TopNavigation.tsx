import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heighttodp, widthtodp } from '../../../../constants/Dimenstions';

import React from 'react';

export const Data = [
  {
    key: '0',
    heading: 'Phone Support',
  },
  {
    key: '1',
    heading: 'Email Support',
  },
  {
    key: '2',
    heading: 'Others',
  },
];
interface objects {
  key: string;
  heading: string;
}
interface Props {
  setActive: React.Dispatch<React.SetStateAction<number>>;
  active: number;
  topNavigationData: Array<objects>;
}
const TopNavigation = ({ topNavigationData, active, setActive }: Props) => {
  const activeHandler = (index: number) => setActive(index);
  interface props {
    item: {
      key: string;
      heading: string;
    };
    index: number;
  }

  const renderItem = ({ item, index }: props) => {
    if (active === index) {
      return (
        <TouchableOpacity activeOpacity={0.5} style={styles.active}>
          <Text style={styles.activeText}>{item.heading}</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          testID={'activeHandler'}
          activeOpacity={0.7}
          style={styles.deactive}
          onPress={() => activeHandler(index)}>
          <Text style={styles.deactiveText}>{item.heading}</Text>
        </TouchableOpacity>
      );
    }
  };
  return (
    <View style={styles.main}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={topNavigationData || Data}
        horizontal
        renderItem={renderItem}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};
export default TopNavigation;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: widthtodp(360),
    height: heighttodp(40),
    borderBottomColor: '#e8eff5',
    borderBottomWidth: 1,
  },
  active: {
    borderBottomWidth: 2,
    borderBottomColor: '#e40678',
    height: 50,
    justifyContent: 'center',
    backgroundColor: "#E8EFF5",
    width: widthtodp(180),
    alignItems: "center"
  },
  deactive: {
    height: 50,
    justifyContent: 'center',
    width: widthtodp(180),
    alignItems: "center"
  },
  activeText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#153059',
  },
  deactiveText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#415f8b',
  },
  container: {
    width: widthtodp(360),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
