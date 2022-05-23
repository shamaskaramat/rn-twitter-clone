import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
const Card = ({ img, name, Verfied, username }) => {
  return (
    <View style={{ justifyContent: "center", borderWidth: 0.5, paddingVertical: 20, borderColor: "gray", margin: 5, paddingHorizontal: 10, paddingVertical: 30 ,alignItems:"center"}}>
      <View style={{ marginTop: -20 }}>
        <Image source={{ uri: img, width: 50, height: 50 }} style={{ borderRadius: 100, marginLeft: 20, marginBottom: 2 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginBottom: 2 }}>{name}</Text>
          <Verfied name="verified" size={20} color='#12a4e3' />
        </View>
        <Text>{username}</Text>
      </View>
      <TouchableOpacity style={styles.button}><Text style={{ color: "white", textAlign: "center" }}>Follow</Text></TouchableOpacity>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    backgroundColor: "black",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 10,
    width: 100
  }
})