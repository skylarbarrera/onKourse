import { createStackNavigator,createBottomTabNavigator,  createAppContainer } from 'react-navigation'
import Classes from '../Containers/Classes'
import Derek from '../Containers/Derek'
import Loading from '../Containers/Loading'
import ClassPage from '../Containers/ClassPage'
import LoginScreen from '../Containers/LoginScreen'
import ClassScreen from '../Containers/ClassScreen'
import UserProfile from '../Containers/UserProfile'
import LaunchScreen from '../Containers/LaunchScreen'
import ClassNav from '../Navigation/ClassNav'
import React, { Component} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import {Image, TouchableOpacity, Linking} from 'react-native'

import styles from './Styles/NavigationStyles'
import AngelaProfile from "../Containers/AngelaProfile";

// Manifest of possible screens
const BottomTabNav = createBottomTabNavigator({
  Classes: { screen: Classes ,
    navigationOptions: {
      tabBarLabel:"Classes",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-paper" size={30} color="#FFFFFF" />
      )
    }},
  ClassPage: { screen: ClassPage,
    navigationOptions: {
      tabBarLabel:"Favorites",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-star" size={30} color="#FFFFFF" />
      )
    }},
  ClassScreen: { screen: ClassScreen,
    navigationOptions: {
      tabBarLabel:"Trending",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-flame" size={30} color="#FFFFFF" />
      )
    }},
  UserProfile: {screen:UserProfile,
    navigationOptions: {
      tabBarLabel:"Profile",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-contact" size={30} color="#FFFFFF" />
      )
    }}


}, {
    initialRouteName: 'UserProfile',
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#000000',
    }
  }
},
)

export default createAppContainer(BottomTabNav)
