import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigations from './TabNavigations'
import ProfileScreen from '../Screens/ProfileScreen';
import Moments from '../Screens/Moments';
import Bookmarks from '../Screens/Bookmarks';
import Monetization from '../Screens/Monetization';
import Topics from '../Screens/Topics';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Card from '../Components/Card';

const Drawer = createDrawerNavigator();
const DrawerNavigations = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}  >
            <Drawer.Screen name="Home" component={TabNavigations} options={{
                title: 'Home',
                drawerIcon: () => (
                    <AntDesign
                        name="home"
                        size={30}
                        color="black"
                    />)
            }} />
            <Drawer.Screen name="Moments" component={Moments} options={{
                title: 'Moments',
                drawerIcon: () => (
                    <Entypo
                        name="flash"
                        size={30}
                        color="black"
                    />)
            }} />
            <Drawer.Screen name="Profile" component={ProfileScreen} options={{
                title: 'Profile',
                drawerIcon: () => (
                    <MaterialCommunityIcons
                        name="account-circle-outline"
                        size={30}
                        color="black"
                    />)
            }} />
            <Drawer.Screen name="Bookmarks" component={Bookmarks} options={{
                title: 'Bookmarks',
                drawerIcon: () => (
                    <Feather
                        name="bookmark"
                        size={30}
                        color="black"
                    />)
            }} />
            <Drawer.Screen name="Monetization" component={Monetization} options={{
                title: 'Monetization',
                drawerIcon: () => (
                    <MaterialIcons
                        name="monetization-on"
                        size={30}
                        color="black"
                    />)
            }} />
            <Drawer.Screen name="Topic" component={Topics} options={{
                title: 'Topic',
                drawerIcon: () => (
                    <Fontisto
                        name="comment"
                        size={30}
                        color="black"
                    />)
            }} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigations