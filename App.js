import { View, Text,StatusBar } from 'react-native'
import React from 'react'
// import DrawerNavigations from './src/Navigations/DrawerNavigations'
// import HomeScreen from './src/Screens/HomeScreen';
// import TabNavigations from './src/Navigations/TabNavigations';
// import StackNavigator from './src/Navigations/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigators from './src/Navigations/DrawerNavigations';

const App = () => {
  return (
    <NavigationContainer>
    <StatusBar animated={true} backgroundColor="#fff"  barStyle="dark-content" />
      <DrawerNavigators/>
      </NavigationContainer>
    
  )
}

export default App