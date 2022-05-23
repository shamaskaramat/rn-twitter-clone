import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Mentions = () => {
  return (
    <View style={{flex:1, justifyContent:"center"}}>
    <Text style={{fontWeight:"bold",fontSize:30, marginLeft:20}}>Join the</Text>
    <Text style={{fontWeight:"bold",fontSize:30,marginLeft:20}}>Conversation</Text>
    <Text style={styles.infomention}>When someone on Twitter mention you in a tweet or reply , you 'll find here.</Text>

    </View>
  )
}

export default Mentions

const styles = StyleSheet.create({
    infomention:{
        marginLeft:20,
        color:'#919492'
    }
})