import { createStackNavigator,createBottomTabNavigator,  createAppContainer } from 'react-navigation'
import Classes from '../Containers/Classes'
import Derek from '../Containers/Derek'
import Loading from '../Containers/Loading'
import ClassPage from '../Containers/ClassPage'
import LoginScreen from '../Containers/LoginScreen'
import ClassScreen from '../Containers/ClassScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import SignUp from '../Containers/SignUp'
import React, { Component} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import {Image, TouchableOpacity} from 'react-native'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const ClassNav = createStackNavigator({
  Classes: { screen: Classes },
  Derek: { screen: Derek },
  Loading: { screen: Loading },
  ClassPager: { screen: ClassPage },
  LoginScreen: { screen: LoginScreen },
  ClassScreener: { screen: ClassScreen },
  LaunchScreen: { screen: LaunchScreen },
  SignUp: {screen: SignUp}
},{
  // Default config for all screens


  initialRouteName: 'SignUp',
  navigationOptions: {
    //headerStyle: styles.header

  }
})

export default createAppContainer(ClassNav)
