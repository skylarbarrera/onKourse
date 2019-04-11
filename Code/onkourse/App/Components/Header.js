import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import { Header } from "react-navigation";
import { Colors } from '../Themes'
import { Images } from '../Themes'
import styles from './Styles/HeaderStyle'

const CustomHeader = props => {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }


  return (
    <View style={styles.container}>
      <View style ={{alignItems: 'center', justifyContent: 'center'}}>


        <Image source={require('../Images/onKourseLogo.png')} style= {{resizeMode: 'contain', maxHeight: '50%', maxWidth:'50%', alignSelf: 'center',}} />

      </View>
    </View>
  )

}


export default CustomHeader;
