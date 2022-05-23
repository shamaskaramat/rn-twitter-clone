import { SafeAreaView, StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({navigation}) => {
    return (
        <View style={styles.header}>
        <TouchableOpacity >
            <MaterialCommunityIcons name='account-circle-outline' size={30} color='#323633' />
            </TouchableOpacity>
            <AntDesign name="twitter" size={30} color='#12a4e3' />
            <MaterialCommunityIcons name='star-four-points-outline' size={30} color='#323633' />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 10,
        shadowColor: "#000000",
        elevation:5
    }
})