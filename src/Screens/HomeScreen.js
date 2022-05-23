import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Feeds from '../Components/Feeds'
import { FloatingAction } from "react-native-floating-action";
const actions = [
  {
    text: "Spaces",
    icon: require("../../assets/spaces.png"),
    name: "spaces",
    position: 1
  },
  {
    text: "Photos",
    icon: require("../../assets/photo.png"),
    name: "photos",
    position: 2
  },
  {
    text: "Gif",
    icon: require("../../assets/gif.jpg"),
    name: "bt_room",
    position: 3
  },
  {
    text: "Tweet",
    icon: require("../../assets/tweet.png"),
    name: "tweet",
    position: 4
  }
];
const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Feeds />
      <FloatingAction 
        actions={actions}
        color='#12a4e3'
        distanceToEdge={{ vertical: 60, horizontal: 25}}
        onPressItem={name => {
          console.log(`selected button: ${name}`);
        }} />
        
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  
})