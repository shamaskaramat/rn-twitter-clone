import { StyleSheet, Text, View, Image } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Spaces = ({time,about,img,name,section,detail,info,color,backgroundColor}) => {
  return (
    <>
    <View style={{backgroundColor:color,margin: 20,borderRadius:20}}>
      <View style={{ flexDirection: "row", justifyContent: "space-between",padding:15 }}>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="calendar" size={20} color='#ffff' />
          <Text style={{ color: "white", marginLeft: 10 }}>{time}</Text>
        </View>
        <Feather name="more-vertical" size={20} color='#ffff' />
      </View>
      <Text style={{ fontSize: 18, fontWeight: "900", color: "white", marginBottom: 20, padding:15 }}>{about}</Text>

      <View style={{ backgroundColor:backgroundColor }}>
        <View style={{ flexDirection: "row" ,padding:15}}>
          <Image source={{ uri: img }} style={styles.img} />
          <Text style={{ color: "white", marginLeft: 10 }}>{name}</Text>
          <Text style={{ color: "white", marginLeft: 10 }}>{section}</Text>
        </View>
        <View style={{padding:15}}>
          <Text style={{ color: "white" }}>{detail}</Text>
          <Text style={{ color: "white" }}>{info}</Text>
        </View>
      </View>
    </View>
    </>
  )
}


export default Spaces

const styles = StyleSheet.create({
  
  img: {
    height: 20,
    width: 20,
    borderRadius: 50
  },
 
  
})