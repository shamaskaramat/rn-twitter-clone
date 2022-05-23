import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Messages = () => {
  return (
    <View style={{flex:1, justifyContent:"center"}}>
      <Text style={{fontSize:30, fontWeight:"bold", marginLeft:15}}>Wellocom to your</Text>
      <Text style={{fontSize:30, fontWeight:"bold", marginLeft:15, marginBottom:8}}>inbox!</Text>
      <Text style={{marginLeft:15, marginBottom:30}}>Drop, a line share Tweets and more with private conversations between and others on Twitter</Text>
      <TouchableOpacity
      style={{
          backgroundColor:"#12a4e3",
          borderRadius:20,
          width:150,
          marginLeft:15,
          paddingVertical:10
      }}>
      <Text style={{color:"white", fontSize:16,fontWeight:"800", lineHeight:20,marginLeft:10}}>Write a message</Text></TouchableOpacity>
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({})