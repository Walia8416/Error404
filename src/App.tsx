import {StatusBar, useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routes from './Routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor={!isDarkMode ? 'black' : 'white'}
          barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
        />
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
