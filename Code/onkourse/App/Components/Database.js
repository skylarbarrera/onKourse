import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/DatabaseStyle'


//const classRef = csRef.ref('0');
export default class Database extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [] };

    // Toggle the state every second

  }

componentDidMount() {

  //const ref = firebase.database().ref('path');
  // const csRef = fireDb.ref('ID');
  // csRef.orderByChild("CRN").on("child_added", function (snapshot) {
  //  // console.warn(snapshot.val().CRN);
  //   this.state.data[snapshot.val().CRN] = {
  //     TITLE: snapshot.val().TITLE,
  //     INSTRUCTOR: snapshot.val().INSTRUCTOR,
  //     HOURS: snapshot.val().HOURS,
  //     CRNurl: snapshot.val().CRN_url
  //   }
  //   if(snapshot.val().CRN == 28111) {
  //     //CRN.push(snapshot.val().CRN)
  //     //console.warn(snapshot.val().CRN)
  //
  //   }
  // });




}
componentWillUnmount(){

  }



  render () {
    return (
      <View style={styles.container}>
        <Text style = {{color: '#FFFFFF'}}>DatabaseComponent</Text>
        <Text  style = {{color: '#FFFFFF'}}>  CRN {'hey'} </Text>
      </View>
    )
  }
}
