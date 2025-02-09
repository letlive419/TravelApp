import {Tabs} from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { Button, View, Text, Image, TouchableOpacity } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Link } from "expo-router";

export default function layout() {
    return <Tabs screenOptions={{ headerRight: () => {
        return (
            <>
            <Link href="/search" style={{margin:20}}>
            <Entypo name="magnifying-glass" size={24} color="white" />
            </Link> 
            <Link href="/cart" style={{margin:20}}>
            <AntDesign name="shoppingcart" size={24} color="white" />
            </Link> 
            <Text style={{color:"#FFEB00", margin:20, fontWeight:700}}>$0.00</Text>
            
            </>
        )
    }, headerLeft: () => {
        return (
            <>
                <Link href="/" style={{margin:20}}>
                <MaterialCommunityIcons name="airplane" size={24} color="white" />
            </Link>
            </>
        )
    } 
         ,headerStyle: {
        backgroundColor: "#344CB7",
    }, headerTintColor:"#FFEB00", headerTitle: "TravelApp", tabBarActiveTintColor: "blue"}}> 
    
        <Tabs.Screen
        name="index"
        options={{
            title:"Explore",
            tabBarIcon: ({color}) => <FontAwesome size={28} name="wpexplorer" color={color} />,
        }}
    /> 
    <Tabs.Screen
        name="categories"
        options={{
            title: "Categories",
            tabBarIcon: ({color}) => <FontAwesome size={28} name="table" color={color} />,
        }}
        />
        <Tabs.Screen
        name="account"
        options={{
            title: "Account",
            tabBarIcon: ({color}) => <FontAwesome size={28} name="user" color={color} />,
        }}
        />
        </Tabs>

}
