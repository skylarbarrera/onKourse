import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import Modal from "react-native-modal";
import { View, Text, TextInput  } from 'react-native'
import styles from './Styles/AnswerModalStyle'
import PropTypes from "prop-types";
import firebase from "react-native-firebase";
import {connect} from "react-redux";
import RoundedButton from "./RoundedButton";

 class AnswerModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      answer: '',
      isVisible: this.props.isVisible

    }
  }
  static propTypes = {
    isVisible: PropTypes.bool,
    onBackdropPress: PropTypes.func,
    onSwipeComplete: PropTypes.func,
    navigation: PropTypes.any,
    onAction: PropTypes.func,
    Question: PropTypes.string,
    questionKey: PropTypes.string,
    classID: PropTypes.object,
    onChange: PropTypes.func


  }

  async handleAnswer(){

    const unansweredRef = firebase.database().ref('ID/0/' +this.props.classID.TITLE + '/Unanswered/' + this.props.questionKey );
    unansweredRef.remove((error)=> console.tron.log('error is ' + error))


    const answeredRef = firebase.database().ref('ID/0/' +this.props.classID.TITLE + '/Questions');
    answeredRef.push({
      Question: this.props.Question,
      Answer: this.state.answer,
      ThumbsUp: 0
    })


  }

  render () {
    return (

      <Modal
        isVisible ={this.props.isVisible}
        onBackdropPress={this.props.onBackdropPress}
        onSwipeComplete={this.props.onSwipeComplete}
       >


        <View style = {{height: '30%', backgroundColor: '#FFFFFF', alignItems:'center'}}>

          <Text style = {{fontSize: 20, fontWeight: 'bold'}}> Answer Question</Text>
          <View >
          <TextInput
            multiline ={true}
            selectionColor = {'#000000'}
            placeholderTextColor = {'#D3D3D3'}
            placeholder ={"  You're gonna do great!!"}
            onChangeText={(update)=> this.setState({answer: update})}
            style = {{backgroundColor: '#000000', fontColor: '#000000', borderRadius: 16, width: 300, height:75, color: '#f83721'}}>

          </TextInput>
          </View>




        </View>
        <RoundedButton text={"Answer"} onPress={()=>{
          this.handleAnswer()
          this.props.onChange()
        }}/>
      </Modal>

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


export default connect(mapStateToProps, mapDispatchToProps)(AnswerModal)

