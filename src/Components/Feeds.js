import { StyleSheet, View,Text,ScrollView } from 'react-native'
import React from 'react'
import Feed from './Feed'
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Follow from './Follow';
const Feeds = () => {
  return (
    <View>
     <ScrollView showsVerticalScrollIndicator={false} >
    <Feed
      Message={Entypo}
      More={Feather}
      type="Indain Premier League"
      topic="Follow Topic"
      name="Michael Vaughan"
      username="@michaelvaughan01"
      timestamp="1h"
      tweet="In publishing and graphic design ✍️, Lorem ipsum is a placeholder text commonly used 💓 "
      Verfied={MaterialIcons}
      Imgsrc="https://cricketaddictor.gumlet.io/wp-content/uploads/2021/03/153757448_173638941016448_6980867142752435675_n.jpg?compress=true&quality=80&w=800&dpr=2.6"
      user="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
    />
     <Follow/>
     <Feed
      Message={Entypo}
      More={Feather}
      type="News"
      topic="Follow Topic"
      name="PTI official page "
      username="@PTIofficialpage"
      timestamp="2 days"
      tweet="Prime Minister @ImranKhanPTI at the Parliamentary Party Meeting in Islamabad earlier today. 💓 "
      Verfied={MaterialIcons}
      Imgsrc="https://pbs.twimg.com/media/FP0_aOKXsAY3-6L?format=jpg&name=900x900"
      user="https://pbs.twimg.com/profile_images/1502968394273935366/vVnI0UEz_400x400.jpg"
    />
     <Feed
      Message={Entypo}
      More={Feather}
      type="News"
      topic="Follow Topic"
      name="Elon Musk "
      username="@ElonMuskofficialpage"
      timestamp="2 days"
      tweet="Great work by Tesla Texas Team!Built & delivered first Giga Texas production cars & threw a killer opening party ✨🚗 "
      Verfied={MaterialIcons}
      // Imgsrc="https://pbs.twimg.com/media/FP0_aOKXsAY3-6L?format=jpg&name=900x900"
      user="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg"
    />
     <Feed
      Message={Entypo}
      More={Feather}
      type="News"
      topic="Follow Topic"
      name="DR. Arslan Khalid "
      username="@DR.ArslanKhalid"
      timestamp="7 days"
      tweet="Listen to the Prime Minister.We need to act as defenders of the Prime Minister and the armed forces. It's important to understand that what is the ultimate target of this foreign conspiracy? They want to weaken a National leader and our armed forces which in no case we can allow "
      Verfied={MaterialIcons}
      Imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-cfOfxbSPrG-3ohcVxXbfUZZWQsadsOsYg&usqp=CAU"
      user="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg"
    />
   
    </ScrollView>
    </View>
  )
}

export default Feeds

const styles = StyleSheet.create({})