import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Styles} from '../../../../../styles/homescreen';
import {Screen_Height} from '../../../../../constants/constants';
import {useAppSelector} from '../../../../../store/store';
import {useDispatch} from 'react-redux';
import {getCategories} from '../../../../../store/actions/forecast';
import {SvgUri} from 'react-native-svg';
const {width} = Dimensions.get('window');

const CategorySideScroll = ({categories}) => {
  // const {categories} = useAppSelector(state => state.categories);

  // const dispacth = useDispatch();
  // useEffect(() => {
  //   dispacth(getCategories());
  // }, []);

  return (
    <View style={Styles.CategoriesContainer}>
      <ScrollView
        style={{flex: 1}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {categories
          .filter(item => item.logo_url !== '')
          .map(item => (
            <View
              style={{
                margin: 4,
                height: Screen_Height / 7,
                justifyContent: 'center',
                alignItems: 'center',
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
              <TouchableOpacity style={{width: 100, alignItems: 'center'}}>
                <SvgUri
                  uri={item.logo_url}
                  width={width / 6}
                  height={width / 6}
                />
                <Text style={Styles.categoriestext}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};
export default CategorySideScroll;
