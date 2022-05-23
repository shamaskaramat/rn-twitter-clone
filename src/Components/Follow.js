import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cards from './Cards'

const Follow = () => {
  return (
    <View>
    <Text style={styles.text}>How to follow</Text>
    <Cards/>
    </View>
  )
}

export default Follow

const styles = StyleSheet.create({
    text:{
        fontSize:16,
        fontWeight:"900",
        padding:6
    }
})