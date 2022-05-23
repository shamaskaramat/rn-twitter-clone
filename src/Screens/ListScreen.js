import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListScreen = () => {
  return (
    <View>
      <Text style={styles.text}> ListScreen</Text>
    </View>
  )
}

export default ListScreen

const styles = StyleSheet.create({
  text:{
    color:"white"
  }
})