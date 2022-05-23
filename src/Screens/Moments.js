import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Moments = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.moment}>Waiting on a  Moments</Text>
      <Text>to create or edit a Moment , please go to Twitter.com. Learn more</Text>
    </View>
  )
}

export default Moments

const styles = StyleSheet.create({
    moment:{
        fontSize:20,
        fontWeight:"900",
        textAlign:"center"
       
    },
    container:{
        flex:1,
        justifyContent:"center"
    }

})