import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

const Notificationsection = () => {
  return (
    <ScrollView>
    <Notificationcart 
        UserIcon={Feather}
        user="hunain"
        username="@hunain4648"
        follow="Followed you"
        img="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        hashtags=" #EidUlFitr #ImranKhan #حساب_باقی_ہے #امپورٹڈ_حکومت_نامنظور"
        tweet="Advance Eid MuBariK to All tha Muslims round tha Globe❤️❤️"

    />
    <Notificationcart 
        UserIcon={Feather}
        user="shamas"
        username="@shams4195"
        follow="Followed you"
        img="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        hashtags="#توہین_مسجد_نبوی_نامنظور #امپورٹڈ_عدالتیں_نامنظور #ImranKhan #حساب_باقی_ہے #امپورٹڈ_حکومت_نامنظور"
        tweet="I was never expecting to see Janghir Tareen to be in list of traitor 😡"

    />
     <Notificationcart 
        UserIcon={Feather}
        user="Areeba"
        username="@areeba21"
        follow="Followed you"
        img="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        hashtags="#BajwaSurrender #WeWantImmediateElections #ImranKhan #حساب_باقی_ہے #امپورٹڈ_حکومت_نامنظور"
        tweet="Faiz Hameed and Asif Ghafoor are ready now❤️❤️🚬"

    />
    </ScrollView>
  )
}
const Notificationcart=({UserIcon,user,username,follow,img,hashtags,tweet})=>(
    <View style={{marginTop:10}}>
   <View style={{flexDirection:"row", marginLeft:30}}>
   <UserIcon name="user" size={28} color="#12a4e3"/>
    <Text style={{fontWeight:"bold",marginLeft:10}}>{user}</Text>
    <Text style={{marginLeft:5}}>{follow}</Text>
   </View>
    <View style={{borderColor:"#D3D3D3", borderWidth:1,marginLeft:30,marginRight:20,marginTop:10}}>
    <View style={{flexDirection:"row", justifyContent:"space-between",padding:5}}>
        <Image source={{uri:img}} style={styles.Notificationcartimg}/>
        <TouchableOpacity style={styles.followbtn}><Text style={{color:"white",marginTop:15,lineHeight:20,fontWeight:"bold"}}>Follow</Text></TouchableOpacity>
    </View>
    <Text style={{fontWeight:"bold", marginLeft:10}}>{user}</Text>
    <Text style={{marginLeft:10,color:"gray"}}>{username}</Text>
    <Text style={{marginLeft:10,color:"gray"}}>{tweet}</Text>
    <Text style={{fontSize:18,marginLeft:10}}>{hashtags}</Text>
    </View>

    </View>
)

export default Notificationsection

const styles = StyleSheet.create({
    Notificationcartimg:{
        height:50,
        width:50,
        borderRadius:50
    },
    followbtn:{
        backgroundColor:"black",
        borderRadius:15,
        paddingHorizontal:20,

    }
})