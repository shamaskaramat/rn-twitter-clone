import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Feed = ({ Message , type, topic, name, username,More, timestamp, tweet, Verfied, Imgsrc, user }) => {
    return (
        <View>
            <View style={styles.head}>
                <Message name="message" size={20} color='#323633' />
                <Text>{type}</Text>
                <Text style={{ color: "#12a4e3" }}>{topic}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    <Image source={{ uri: user, width: 40, height: 40 }} style={{ borderRadius: 100 }} />
                </View>
                <View style={{flexDirection:"row" , justifyContent:"flex-start" ,padding:10}}>
                    <Text style={{ fontSize: 14, fontWeight: "800" }}>{name}</Text>
                    <Verfied name="verified" size={20} color='#12a4e3' />
                    <Text style={{ color: "gray" }}>{username}</Text>
                    <Text> .{timestamp}</Text>
                    <More name="more-vertical" size={20} color='#323633' />
                </View>
            </View>
            <View style={{padding:2, marginLeft:50}}>
                <Text>{tweet}</Text>
                <Image source={{ uri: Imgsrc, width: 300, height: 150 }} style={{ borderRadius: 10, marginTop:2 }}/>
                <View style={{flexDirection:"row", justifyContent:"space-around", padding:2}}>
                <Feather name="message-circle" size={20}/>
                <Text>2200</Text>
                <Feather name="repeat" size={20}/>
                <Text>5,000</Text>
                <AntDesign name="hearto" size={20}/>
                <Text>450</Text>
                <AntDesign name="sharealt" size={20}/>
                <Text>100</Text>
                </View>
            </View>
            
        </View>
    )
}

export default Feed

const styles = StyleSheet.create({
    head: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 5,

    }
})