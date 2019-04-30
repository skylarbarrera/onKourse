import React, { Component } from 'react'
import {View,ScrollView, Text, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DerekStyle'
import StartupActions from "../Redux/StartupRedux";

class Derek extends Component {



  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>Derek Container {this.props.hasStartupFinished}</Text>
        <TouchableOpacity onPress={() =>{this.props.setStartup(!this.props.hasStartupFinished)}}>
          <Text> yo </Text>
        </TouchableOpacity>


          {this.props.hasStartupFinished && <View>

          </View>}

      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hasStartupFinished: state.startup.startupStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setStartup: (value) => dispatch(StartupActions.setStartupStatus(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Derek)
