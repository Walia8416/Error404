//props-types
import {
  DrawerNavigationProp,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
// Packages
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {
  BottomTabBarOptions,
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
// Screens
import Home from './components/screens/home/Home';

import React from 'react';

import SignIn from './components/screens/signin/SignIn';
import SplashScreen from './components/screens/splashscreen/SplashScreen';
import Weather from './components/screens/weather/weather';
import {MytabBarone} from './components/helpers/navigationtabs/navigationtabs';
import Cart from './components/screens/cart/store';
import Crops from './components/screens/products/products';
import CropDetails from './components/screens/products/cropDetails/cropDetails';
import Store from './components/screens/cart/store';
import Credits from './components/screens/credits/credits';
import Products from './components/screens/products/products';
import ProdDetails from './components/screens/products/productDetails';
import Payment from './components/screens/payment/payment';
import PdfView from './components/screens/payment/pdfview';

const Stack = createNativeStackNavigator<RouteParamList>();
const krishiBottom = createBottomTabNavigator<RouteParamList>();

const Routes: React.FC = () => {
  const {Navigator, Screen} = Stack;
  // stacknavigator
  return (
    <Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'SplashScreen'}>
      <Screen name={'SplashScreen'} component={SplashScreen} />
      <Screen name={'Home'} component={krishiBottomNavigator} />
      <Screen name={'Payment'} component={Payment} />
      <Screen name={'SignIn'} component={SignIn} />
      <Screen name={'Products'} component={Products} />
      <Screen name={'Credits'} component={Credits} />
      <Screen name={'PdfView'} component={PdfView} />
    </Navigator>
  );
};

export default Routes;

// Advertising bottom-navigator

const krishiBottomNavigator = ({
  navigation,
  route,
}: RouteStackParamList<'Home'>) => {
  return (
    <krishiBottom.Navigator
      tabBar={props => <MytabBarone {...props} />}
      initialRouteName={'home'}>
      <krishiBottom.Screen
        initialParams={route.params}
        name={'home'}
        component={Home}
      />

      <krishiBottom.Screen name={'Store'} component={Store} />
    </krishiBottom.Navigator>
  );
};

export type RouteParamList = {
  SplashScreen: undefined;
  Home: {
    name: string;
  };
  Stores: {};
  SignUpOne: {
    username?: string;
    password?: string;
    name?: string;
    control?: any;
    selectedCode?: string;
    setSelectedCode?: any;
    getValues?: any;
    handleSubmit?: (args: any) => {};
  };
  SignUpSecond: {
    username?: string;
    password?: string;
    name: string;
    control?: any;
    selectedCode?: string;
    setSelectedCode?: any;
    getValues?: any;
    handleSubmit?: (args: any) => {};
  };
  SignIn: {
    username?: string;
    password?: string;
    name: string;
  };
  OnBoarding: {
    name: string;
  };
};

// Handles Routes ParamsList

//For Nested navigation we just need to Add the and Oparator .

export type RouteStackParamList<T extends keyof RouteParamList> = {
  navigation: StackNavigationProp<RouteParamList, T> &
    DrawerNavigationProp<RouteParamList, T>;
  route: RouteProp<RouteParamList, T>;
};
