import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import {createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

 import Home from "../Screens/homescreen";
 import Section from "../Screens/sectionscreen";
 import Courses from "../Screens/Coursescreen";
 import Projects from "../Screens/Projectscreen";

const activeColor = '#4775f2'
const inactiveColor = '#111'

 const HomeStack = createStackNavigator({
     Home:{
         screen:Home,
         navigationOptions:{
             header:null,
         }
     },
     Section:{
         screen:Section,
         navigationOptions:{
             header: null
         }
     }
 },{mode:"modal",})

 HomeStack.navigationOptions =({navigation})=> {
     let tabBarVisible = true;
     const routeName = navigation.state.routes[navigation.state.index].routeName

     if(routeName === 'Section'){
         tabBarVisible = false;
     }
    return { 
        tabBarVisible,
        tabBarLabel:"Home",
        tabBarIcon :({focused})=><Ionicons name='md-home' size={26} color={focused ? activeColor : inactiveColor}/>
    }
}

 const Coursestack = createStackNavigator({
     Course:{
         screen:Courses,
         navigationOptions:{
             header:null
         }
     }
     
 },{mode:"modal"})

 Coursestack.navigationOptions = {
     tabBarLabel:"Courses",
     tabBarIcon :({focused})=><Ionicons name='md-albums' size={26} color={focused ? activeColor : inactiveColor}/>
 }

 const Projectstack = createStackNavigator({
     Course:{
         screen:Projects,
         navigationOptions:{
             header:null
         }
     }
     
 },{mode:"modal"})

 Projectstack.navigationOptions = {
     tabBarLabel:"Projects",
     tabBarIcon :({focused})=><Ionicons name='md-folder' size={26} color={focused ? activeColor : inactiveColor}/>
 }

 const TabNavigator = createBottomTabNavigator({
     Home:HomeStack,
     Course:Coursestack,
     Projects:Projectstack
 })

 export default TabNavigator;