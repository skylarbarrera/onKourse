import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text , TouchableOpacity} from 'react-native'
import styles from './Styles/PullClassDataStyle'
import firebase from "react-native-firebase";
import {firebaseDb} from "../Sagas/StartupSagas";
import RoundedButton from "./RoundedButton";
import StarRating from 'react-native-star-rating';

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

        <View>

        <View>{this.state.classes && this.state.classes.map(val => {
          return (<TouchableOpacity onPress = {()=> this.props.navigation.navigate('ClassScreener')} style ={{borderBottomWidth: 1, borderColor: "#000000", width: '90%', height: 50, alignSelf: "center"}}>
            <Text style = {{fontSize: 20, fontWeight: 'bold'}} >{val.TITLE} </Text>
            <View style = {{flexDirection: 'row', alignItems: 'space-between'}}>
              <View style ={{flexDirection: 'row'}}>{val.INSTRUCTOR.map( item => {
              return(
                <Text style = {{fontSize: 14} }>{item}  |  </Text>
              )}
              )}
              </View>

              <StarRating
                style = {{alignSelf: 'flex-end'}}
                maxStars = {5}
                rating={3.6}
                selectedStar={() => null}
                fullStarColor={'#FCC040'}
                starSize= {14}

              />
            </View>


          </TouchableOpacity>)
        })}</View>
      </View>
    )
  }
}
