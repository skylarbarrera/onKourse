import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/DatabaseStyle'
import firebase from 'react-native-firebase'




const db = firebase.database();
const csRef = db.ref('ID');

data = {};
CRN = [];
//const classRef = csRef.ref('0');
export default class Database extends Component {

componentDidMount() {
  csRef.orderByChild("CRN").on("child_added", function (snapshot) {
   // console.warn(snapshot.val().CRN);
    data[snapshot.val().CRN] = {
      TITLE: snapshot.val().TITLE,
      INSTRUCTOR: snapshot.val().INSTRUCTOR,
      HOURS: snapshot.val().HOURS,
      CRNurl: snapshot.val().CRN_url
    }
    if(snapshot.val().CRN == 28111) {
      CRN.push(snapshot.val().CRN)
      //console.warn(snapshot.val().CRN)
      //console.warn(data[snapshot.val().CRN]);
    }
  });
  console.warn("before");
  for (item in CRN){
    console.warn(item);
  }



}
componentWillUnmount(){

  }



  render () {
    return (
      <View style={styles.container}>
        <Text style = {{color: '#FFFFFF'}}>DatabaseComponent</Text>
        <Text  style = {{color: '#FFFFFF'}}>  CRN {} </Text>
      </View>
    )
  }
}
