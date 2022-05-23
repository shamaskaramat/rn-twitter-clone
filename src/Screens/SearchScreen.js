import { StyleSheet, Text, View, Image,ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Search/Header'
import Trends from '../Components/Search/Trends'
import Feather from 'react-native-vector-icons/Feather';
import Cardinfo from '../Components/Search/Cardinfo';
import Feeds from '../Components/Feeds';
const SearchScreen = () => {
  return (
    <ScrollView>
      <Header />
      <Image source={{ uri: "https://images.pexels.com/photos/7299467/pexels-photo-7299467.jpeg?auto=compress&cs=tinysrgb&w=600" }} style={styles.topimgs} />
      <View style={styles.textcontainer}>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>Music : LIVE</Text>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "900" }}>Fans wish Maren Morris a</Text>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "900" }}>Happy Birthday 🎂</Text>
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 5, marginLeft: 5 }}>Trends for you</Text>
      <View>
      <Trends trends="Politics · Trending" hastag="#امپورٹڈ_حکومت_نامنظور" tweets="2.29M Tweets" More={Feather} />
        <Trends trends="Politics · Trending" hastag="#شیخ_رشید_کوگرفتارکرو" tweets="165k Tweets" More={Feather} />
        <Trends trends="Politics · Trending" hastag="#توہین_مسجد_نبوی_نامنظور" tweets="700k Tweets" More={Feather} />
        <Trends trends="Politics · Trending" hastag="#EidUlFitr" tweets="100k Tweets" More={Feather} />
      </View>
      <View style={{marginTop:10}}>
      <Text style={{fontSize:20, fontWeight:"bold", padding:5}}>What's happening</Text>
      <Cardinfo
        catagory="Covid-19"
        timestamp="LIVE"
        topic="Updates on Covid-19 in Pakistan"
        img="https://www.clevelandclinic.org/healthinfo/ShowImage.ashx?PIC=4480"
      />
       <Cardinfo
        catagory="Cricket"
        timestamp="LIVE"
        topic="IPL 2022: Mumbai beat"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsdJr8k-UX_baj_BMphnj53QiPBgbwC9lhvM4CNIEU_yDPpBkTO0Ie-nLp0KLBWz4lL74&usqp=CAU"
      />
       <Cardinfo
        catagory="Covid-19"
        timestamp="LIVE"
        topic="Updates on Covid-19 in india"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw2JrCa7fDTpPsVLLjt8cRG0GPDBap7TF_dx8La-kdvKceDZWLsj_wuJekyhVOPa0_U10&usqp=CAU"
      />
       <Cardinfo
        catagory="War in Ukraine"
        timestamp="LIVE"
        topic="Updates on the war in Ukraine"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHwBc34nmMVQhsmxUj5Q9FQPKwXREghT9rNd7_pfHJi2OHj6WX4XI5PHa2EImYCr_UWjY&usqp=CAU"
      />
       <Cardinfo
        catagory="Russia"
        timestamp="LIVE"
        topic="Russia or  Eastern Europe "
        img="https://media.npr.org/assets/img/2022/04/02/ap22092669346647_custom-d02c34ee5522f96b9a523ee72b8417bda9408de1-s1100-c50.jpg"
      />
       <Cardinfo
        catagory="Soccer"
        timestamp="LIVE"
        topic="Ghana Premier League"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9AAFzfR2ybPBXTdwxo7NwX1HLkqjdfScZ_xFJqGsLlBAMmk7tCeXKJL9t8LKimi1WZ8&usqp=CAU"
      />
       <Cardinfo
        catagory="Entertainment"
        timestamp="LIVE"
        topic="Happy Birthday Kisess Delavin🍰"
        img="https://www.funimada.com/assets/images/cards/big/lady-9.gif"
      />
      </View>
      <Feeds/>
    </ScrollView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
   topimgs: {
    height: 200,
    width: 600,
  },
  textcontainer: {
    position: "absolute",
    left: 10,
    top: 150,
    marginBottom: 10
  }
})