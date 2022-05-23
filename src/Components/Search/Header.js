import { Text, StyleSheet, View,TextInput } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default Header = ()=> {
    const [textInputValue, setTextInputValue] = useState('');
 {
    return (
      <View style={styles.headercontainer}>
        <MaterialCommunityIcons name='account-circle-outline' size={32} color="black"/>
      <TextInput       
      onChangeText={text => setTextInputValue(text)}
      value={textInputValue}
      placeholder="   Search Twitter" 
      style={styles.textcontainer}   
      />
        <SimpleLineIcons name='settings' size={28} color="black" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headercontainer:{
        flexDirection:'row',
        marginTop:30,
        justifyContent:"space-evenly",
        alignContent:"center",
        marginBottom:10
    },
    textcontainer:{
        width:"70%",
        backgroundColor:"#ebeef2",
        borderRadius:20,
        paddingVertical:5
    }
})