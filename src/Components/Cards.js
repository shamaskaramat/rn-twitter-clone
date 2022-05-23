import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Card from './Card';
const Cards = () => {
  return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
    <View style={{flexDirection:"row"}}>
     <Card
         img="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg"
         name="Elon Mask"
         Verfied={MaterialIcons}
         username="@geniousmask14"
     />
     <Card
         img="https://www.pinkvilla.com/imageresize/iron-man-phase-4_0.jpg?width=752&format=webp&t=pvorg"
         name="Iron Man"
         Verfied={MaterialIcons}
         username="@ironman00007"
     />
     <Card
         img="https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/0a823cb0-01a9-4835-a348-c64187783ccb/d37cb96c-805c-4aa2-9f2f-e62d9eb814c7/1280x720/match/image.jpg"
         name="Captan America"
         Verfied={MaterialIcons}
         username="@steveroger"
     />
     <Card
         img="https://static.toiimg.com/photo/msid-82379825/82379825.jpg?165481"
         name="Black Panther"
         Verfied={MaterialIcons}
         username="@kingofwakanda"
     />
     <Card
         img="https://upload.wikimedia.org/wikipedia/commons/f/ff/Imran_Ahmed_Khan_Niazi_-_UNGA_%2848784380531%29_%28cropped%29.jpg"
         name="Iman Khan"
         Verfied={MaterialIcons}
         username="@imranniazi07"
     />
     </View>
     </ScrollView>
  )
}

export default Cards

const styles = StyleSheet.create({})