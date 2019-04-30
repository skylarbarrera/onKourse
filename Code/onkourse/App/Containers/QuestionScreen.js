import React, { Component } from 'react'
import { ScrollView, Text, View, Modal, TouchableOpacity, TextInput} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/QuestionScreenStyle'
import firebase from "react-native-firebase";
import AnswerModal from "../Components/AnswerModal";

class QuestionScreen extends Component {
   constructor (props) {
     super(props)
     this.state = {
       isVisible: false,
       val: {
         TITLE: 'Class Title',
         HOURS: 1,
         INSTRUCTOR: 'Instructor',
         Questions: [{Answer: 'answer', Question: 'question', ThumbsUp: 3}],
         Unanswered:["Loading Questions","..."],
         StarRatingAvr: 3.4,
         StarRatingNum: 1,
         Description: "An introduction to programming for students with no previous experience, whose interests are outside of computer science and who see a need for improving their basic computation skills to be more successful in their main area of interest. Introduces essential problem solving concepts and computational thinking, covers basics for organizing and storing data as well as programming essentials for data processing and visualization. The objective of this course is to enable students to take full advantage of their computational resources at hand."
       }
     }
   }

  onChange(){
     this.setState({
       isVisible: false
     })
    this.forceUpdate()
  }




   async componentWillMount(){
     const firebase1 = firebase.database().ref('ID/0/' +this.props.navigation.state.params.classID.TITLE);
     //const idDatabbaseRef = firebase.ref('ID');
     const help = await firebase1.once('value', snapshot => {

       console.tron.log(snapshot.val())
       this.setState({

         val: snapshot.val(),



       })
       console.tron.log(this.state.val)
     })

   }



  render () {

    //this.state.val = this.props.navigation.state.params.classID
    return (


      <ScrollView style={{flex: 1}}>
        <View style ={{borderBottomWidth: 1, borderColor: "#000000", width: '90%', paddingBottom: 6, paddingTop: 10, alignSelf: 'center'}}>
        <Text style = {{fontSize: 20, fontWeight: 'bold'}}> Answered Questions</Text>
      </View>

        <View>{this.state.val.Questions && Object.keys(this.state.val.Questions).map(item => {
          return(
            <View style ={{borderBottomWidth: 1, borderColor: "#000000", width: '90%', paddingBottom: 6, paddingTop: 10, alignSelf: 'center'}}>
              <Text>
                Q: {this.state.val.Questions[item].Question}

              </Text>
              <Text>
                A: {this.state.val.Questions[item].Answer}
              </Text>

            </View>
          )
        })}

        </View>


        <View style ={{borderBottomWidth: 1, borderColor: "#000000", width: '90%', paddingBottom: 6, paddingTop: 10, alignSelf: 'center'}}>
          <Text style = {{fontSize: 20, fontWeight: 'bold'}}> Unanswered Questions</Text>
        </View>

        <View>{Object.keys(this.state.val.Unanswered).map(item => {
          return(
            <View style ={{borderBottomWidth: 1, borderColor: "#000000", width: '90%', paddingBottom: 6, paddingTop: 10, alignSelf: 'center'}}>
              <TouchableOpacity onPress={()=> {


                this.setState({isVisible: !this.state.isVisible})
                console.tron.log("is visible - " + this.state.isVisible)}} style = {{ borderRightWidth: 1, borderColor: '#FFFFFF', paddingRight: 20,  alignItems: 'center'}}>
              <Text>
                Q: {this.state.val.Unanswered[item]}

              </Text>
              </TouchableOpacity>
              <AnswerModal
                isVisible = {this.state.isVisible}
                onBackdropPress={() => this.setState({ isVisible: false })}
                onSwipeComplete={() => this.setState({ isVisible: false })}
                classID = {this.state.val}
                Question = {this.state.val.Unanswered[item]}
                questionKey = {item}
                onChange={() => this.onChange()}
              />
            </View>
          )
        })}

        </View>


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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen)
