import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/PullClassDataStyle'
import firebase from "react-native-firebase";
import {firebaseDb} from "../Sagas/StartupSagas";

export default class PullClassData extends Component {
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
  constructor (props) {
    super(props)
    this.state = {
      dbEntry: null,
      classes: null
    }
  }

  async componentDidMount(){
    const firebase1 = firebase.database().ref('ID');
    //const idDatabbaseRef = firebase.ref('ID');
    const help = await firebase1.once('value', snapshot => {


    this.setState({

      classes: snapshot.val()

    })
  console.tron.log(this.state.classes)
  })}

  render () {
    return (
      <View style={styles.container}>
        <Text>
          hello
        </Text>
        <View>{this.state.classes && this.state.classes.map(val => {
          return (<View>
            <Text>{val.TITLE}</Text>
          </View>)
        })}</View>
      </View>
    )
  }
}
