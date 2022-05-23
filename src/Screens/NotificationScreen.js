import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Allnotification from './Toptabs/Allnotification';
import Mentions from './Toptabs/Mentions';
import Header from '../Components/Search/Header';
const Tab = createMaterialTopTabNavigator();

const NotificationScreen = () => {
  return (
      <>
      <Header/>
    <Tab.Navigator>
    <Tab.Screen name="All" component={Allnotification} />
    <Tab.Screen name="Mentions" component={Mentions} />
  </Tab.Navigator>
  </>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({})