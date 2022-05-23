import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchScreen from "../Screens/SearchScreen";
import WhatshappenScreen from "../Screens/WhatshappenScreen";
import Messages from "../Screens/Messages";
import NotificationScreen from "../Screens/NotificationScreen";
const Tab = createBottomTabNavigator();

const TabNavigations = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen name="Home" component={StackNavigator} options={{
        tabBarIcon: () => (<Entypo name='home' size={25} color="black" />),
        tabBarShowLabel: false
      }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{
        tabBarIcon: () => (<AntDesign name='search1' size={25} color="black" />),
        tabBarShowLabel: false
      }} />
      <Tab.Screen name="Whatsphapping" component={WhatshappenScreen} options={{
        tabBarIcon: () => (<MaterialIcons name='settings-voice' size={25} color="black" />),
        tabBarShowLabel: false
      }} />
      <Tab.Screen name="Notification" component={NotificationScreen} options={{
        tabBarIcon: () => (<AntDesign name='bells' size={25} color="black" />),
        tabBarShowLabel: false
      }} />
      <Tab.Screen name="Meesage" component={Messages} options={{
        tabBarIcon: () => (<AntDesign name='mail' size={25} color="black" />),
        tabBarShowLabel: false
      }} />
    </Tab.Navigator>

  );
};

export default TabNavigations;