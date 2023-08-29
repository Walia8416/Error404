import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Images from '../../../constants/icon';
import React from 'react';

const data = [
  {
    key: '0',
    image: Images.hoarding,
    name: 'Hoarding',
  },
  {
    key: '1',
    image: Images.transport,
    name: 'Transport',
  },
  {
    key: '2',
    image: Images.avenues,
    name: 'Avenues',
  },
  {
    key: '3',
    image: Images.moviescreens,
    name: 'Movie Screens',
  },
  {
    key: '4',
    image: Images.moviescreens,
    name: 'Movie Screens',
  },
  {
    key: '5',
    image: Images.moviescreens,
    name: 'Movie Screens',
  },
];

//TODO Scrollenable

interface itemProps {
  image: any;
  name: string;
  key: string;
}
interface props {
  state: any | undefined;

  check: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
  items: itemProps;
  setItems: React.Dispatch<React.SetStateAction<itemProps>>;
  droplistdata?: Array<itemProps>;
  width?: string | number;
  elevation?: number;
}

const DropDownScroll = ({
  state,
  setItems,
  items,
  check,
  droplistdata,
  setCheck,
  width,
  elevation,
  onPress,
}: props) => {
  const dropDownHandler = (item: itemProps) => {
    setItems({...items, key: item.key, image: item.image, name: item.name});
    setCheck(false);
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        testID={'ddst'}
        style={[styles.listItem, {width: width ? width : '100%'}]}
        onPress={() => {
          dropDownHandler(item);
          onPress(item.name);
        }}>
        {item.image ? (
          <Image
            source={item.image}
            style={{
              width: 42,
              height: 42,
              marginHorizontal: 12,
            }}
            resizeMode={'contain'}
          />
        ) : (
          <Text style={{width: 32}}> </Text>
        )}

        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return check ? (
    <View
      style={[
        state,
        {
          backgroundColor: '#fff',
          width: width ? width : 328,
          minHeight: 50,
          maxHeight: 216,

          borderRadius: 16,
          overflow: 'hidden',
          paddingTop: 16,
          paddingBottom: 16,
          zIndex: 20,
          elevation: elevation ? elevation : 0,
        },
      ]}>
      <FlatList
        data={droplistdata ? droplistdata : data}
        keyExtractor={(item, index) => item.key}
        nestedScrollEnabled
        scrollEnabled={true}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  ) : null;
};

export default DropDownScroll;

const styles = StyleSheet.create({
  listItem: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  itemText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#415f8b',
  },
});
