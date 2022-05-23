import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Trends = ({trends,hastag,tweets,More}) => {
  return (
    <View style={styles.trendscontainer}>
    <View>
    <Text>{trends}</Text>
    <Text style={{fontWeight:"bold", fontSize:18}}>{hastag}</Text>
    <Text>{tweets}</Text>
    </View>
    <More name="more-vertical" size={20} color="#323633" />
    </View>
  )
}

export default Trends

const styles = StyleSheet.create({
  trendscontainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10,
    marginBottom:5  
  }
})