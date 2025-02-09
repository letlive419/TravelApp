import axios from 'axios';
import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import Video from "react-native-video";
import { useState } from 'react';



export default function HomeScreen() {

  const [data, setData] = useState([])
  
  useEffect(() => {
    const connectToServer = async() => {
      const response = await axios.get("http://localhost:3000")
      response.data.data.map(hotel => {
        console.log(hotel)
      })
    }

   connectToServer()
 

  },[])

  return (
    <View style={{flex:1, flexDirection: "column"}}>
    
    <View style={{flex:2}}>
    <Video 
    
    source={{ uri: "https://cdn-imgix.headout.com/media/videos/42bc24e61f0e32e3fbbefb0cbedbc961-Global%20Banner%20Video%20Desktop%20Version.mp4"}}
    paused={false}
    repeat={true}
    
   
    />
    <Text style={{position:"relative",fontSize:38, fontWeight:500, lineHeight:54, color:"#FBFBFB", textAlign:'center'}}>The World's best experiences <br/> curated just for you</Text>
  
    </View>
    
    

    </View>
  );
}

