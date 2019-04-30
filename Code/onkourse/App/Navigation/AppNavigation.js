import { createStackNavigator,createBottomTabNavigator,  createAppContainer } from 'react-navigation'
import Classes from '../Containers/Classes'
import Derek from '../Containers/Derek'
import Loading from '../Containers/Loading'
import ClassPage from '../Containers/ClassPage'
import LoginScreen from '../Containers/LoginScreen'
import ClassScreen from '../Containers/ClassScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import SignUp from '../Containers/SignUp'
import BottomTabNav from '../Navigation/BottomTabNav'
import React, { Component} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import {Image, TouchableOpacity} from 'react-native'

import styles from './Styles/NavigationStyles'
import UserProfile from "../Containers/UserProfile";
import UserSettings from "../Containers/UserSettings";
import QuestionScreen from "../Containers/QuestionScreen";
import AngelaProfile from "../Containers/AngelaProfile";

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  Classes: { screen: BottomTabNav,
              navigationOptions:{
    headerLeft: null
              }
  },
  Derek: { screen: Derek },
  Loading: { screen: Loading },
  ClassPage: { screen: ClassPage },
  LoginScreen: { screen: LoginScreen,navigationOptions:{
      headerLeft: null
    } },
  AngelaProfile: {screen: AngelaProfile},
  ClassScreen: { screen: ClassScreen },
  LaunchScreen: { screen: LaunchScreen },
  UserProfile: {screen: UserProfile, navigationOptions:({navigation})=> ({
    headerRight: <TouchableOpacity
      onPress={() => {navigation.navigate('UserSettings')}}>
      <Icon name="ios-settings" color="#FFFFFF" size ={ 30} style = {{marginRight: 15}}     />
    </TouchableOpacity>
  })},


  SignUp: {screen: SignUp},
  UserSettings: {screen: UserSettings},
  Questions: {screen: QuestionScreen},
},{
  // Default config for all screens
  defaultNavigationOptions:({navigation}) =>({
    headerTitle: <Image source={require('../Images/onkourseLogoText.png')} style= {{resizeMode: 'contain', maxHeight: '50%', maxWidth:'50%',minHeight: '50%', minWidth:'50%', alignSelf: 'center',}} />,
    headerLeft: <TouchableOpacity
      onPress={onPressBack => {navigation.goBack(null)}}>
      <Icon name="ios-arrow-back" color="#FFFFFF" size ={ 30} style = {{marginLeft: 25}}     />
    </TouchableOpacity> ,
    headerTintColor:'#000000',
    headerStyle: {
      backgroundColor: '#000000'

    }
  }),

  headerMode: 'float',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    //headerStyle: styles.header

  }
})


export default createAppContainer(PrimaryNav)
