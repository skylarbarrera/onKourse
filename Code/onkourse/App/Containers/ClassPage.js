import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ClassPageStyle'
import firebase from "react-native-firebase";

class ClassPage extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }



  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>ClassPage Container</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassPage)
