import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import Messages from '../Screens/Messages';
import NotificationScreen from '../Screens/NotificationScreen';
import SearchScreen from '../Screens/SearchScreen';
import WhatshappenScreen from '../Screens/WhatshappenScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
function StackNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home" screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Whats Happing" component={WhatshappenScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Messages" component={Messages} />
      </Stack.Navigator>
      </NavigationContainer>

  );
}
export default StackNavigator