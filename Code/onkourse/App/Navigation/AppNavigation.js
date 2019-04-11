import { createStackNavigator, createAppContainer } from 'react-navigation'
import Loading from '../Containers/Loading'
import ClassPage from '../Containers/ClassPage'
import LoginScreen from '../Containers/LoginScreen'
import ClassScreen from '../Containers/ClassScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import React, { Component} from 'react'
import {Image} from 'react-native'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  Loading: { screen: Loading },
  ClassPage: { screen: ClassPage },
  LoginScreen: { screen: LoginScreen },
  ClassScreen: { screen: ClassScreen },
  LaunchScreen: { screen: LaunchScreen }
},{
  // Default config for all screens
  defaultNavigationOptions:{
    headerTitle: <Image source={require('../Images/onkourseLogoText.png')} style= {{resizeMode: 'contain', maxHeight: '50%', maxWidth:'50%',minHeight: '50%', minWidth:'50%', alignSelf: 'center',}} />,
    headerTintColor:'#000000',
    headerStyle: {
      backgroundColor: '#000000'

    }
  },
  headerMode: 'float',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    //headerStyle: styles.header

  }
})

export default createAppContainer(PrimaryNav)
