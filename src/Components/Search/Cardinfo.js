import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Cardinfo= ({catagory,timestamp,topic,img}) => {
  return (
    <View style={styles.CardinfoContainer}>
     <View>
     <View style={{flexDirection:"row"}}>
     <Text>{catagory}</Text>
      <Text> . {timestamp}</Text>
     </View>
      <Text style={{fontSize:16, fontWeight:"bold"}}>{topic}</Text>
     </View>
      <Image source={{uri:img, width: 80, height: 80}} style={styles.imginfo}/>
    </View>
  )
}

export default Cardinfo

const styles = StyleSheet.create({
  CardinfoContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:5,
    marginBottom:5
  },
  imginfo:{
    borderRadius:10
  }
})