import React, { Component } from 'react'
import { View, ScrollView, Text,TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import RoundedButton from '../Components/RoundedButton.js'
import StarRating from 'react-native-star-rating';
import PullClassData from "../Components/PullClassData";
import Icon from 'react-native-vector-icons/FontAwesome5';





// Styles
import styles from './Styles/ClassScreenStyle'
import firebase from "react-native-firebase";

class ClassScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 2.3,
      thisClass: null,
      like: true,
      likenot: true,
      question: '',
      val: {
        TITLE: 'Class Title',
        HOURS: 1,
        INSTRUCTOR: 'Instructor',
        Questions: [{Answer: 'answer', Question: 'question', ThumbsUp: 3}],
        StarRatingAvr: 3.4,
        StarRatingNum: 1,
        Description: "An introduction to programming for students with no previous experience, whose interests are outside of computer science and who see a need for improving their basic computation skills to be more successful in their main area of interest. Introduces essential problem solving concepts and computational thinking, covers basics for organizing and storing data as well as programming essentials for data processing and visualization. The objective of this course is to enable students to take full advantage of their computational resources at hand."
      }
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating}
    );

    console.tron.log('star count - ' + this.state.starCount)
  }

  renderTop() {
    const up = 1
    const down = 2
    var thumbs = this.state.like? <Icon name={"thumbs-up"} brand color={'#000000'} size ={ 20} /> : <Icon name={"thumbs-up"} solid color={'#000000'} size ={ 20}/>

    return (
    thumbs
    );
    }

  renderDown() {
    const up = 1
    const down = 2
    var thumbsDown = this.state.likenot? <Icon name={"thumbs-down"} brand color={'#000000'} size ={ 20} /> : <Icon name={"thumbs-down"} solid color={'#000000'} size ={ 20}/>

    return (
      thumbsDown
    );
  }

  async handleQuestion(){
    const unansweredRef = firebase.database().ref('ID/0/' +this.state.val.TITLE + '/Unanswered');
    //const idDatabbaseRef = firebase.ref('ID');

      unansweredRef.push(this.state.question)

  }




  componentWillMount(){


      }

  render () {

      this.state.val = this.props.navigation.state.params.classInfo
      this.state.starCount = this.state.val.StarRatingAvr

    return (
      <View style={styles.container}>
      <View style={styles.classInfoContainer}>
        <View style={{ flex: 1, width: '90%', paddingRight: 20}}>
          <Text adjustsFontSizeToFit minimumFontScale={1.75} style = {{ paddingLeft: 10, fontWeight: 'bold'}}>{this.state.val.TITLE}</Text>

        </View>
        <View style ={{flex: 3, flexDirection: 'row'}}>

          <Text style = {{flex: 1}}> {this.state.val.Description}</Text>
          <View style = {{paddingLeft: 30}}>
            <StarRating

              maxStars = {5}
              rating={this.state.starCount}
              selectedStar={(rating) => this.onStarRatingPress(rating)}

              fullStarColor={'#FCC040'}
              starSize= {30}
              // starStyle={ {}}
            />


          </View>
        </View>

      </View>
      <ScrollView style={styles.forumContainer}>
        <View style ={{borderBottomWidth: 1, borderColor: "#000000", width: '90%', paddingBottom: 6, paddingTop: 10, alignSelf: 'center'}}>
        <Text style = {{fontSize: 20, fontWeight: 'bold'}}> Top Questions</Text>
        </View>
        <View >{this.state.val.Questions && Object.keys(this.state.val.Questions).map(item => {
          console.tron.log(item)
          return(
            <View style ={{borderBottomWidth: 1, borderColor: "#000000", width: '90%', paddingBottom: 6, paddingTop: 10, alignSelf: 'center'}}>
              <View style ={{flexDirection: 'row'}}>

                <Text>
                  {console.tron.log(item.Question)}
                  Q: {this.state.val.Questions[item].Question}

                </Text>
                <View style={{ paddingLeft: '45%', flexDirection: 'row'}}>
                  <TouchableOpacity

                    onPress={ () => this.setState({ like: !this.state.like }) }
                  >

                  </TouchableOpacity>

                  <TouchableOpacity

                    onPress={ () => this.setState({ likenot: !this.state.likenot }) }
                  >

                  </TouchableOpacity>
                </View>

              </View>
              <Text>
                A: {this.state.val.Questions[item].Answer}
              </Text>

            </View>
          )
        })}
        </View>




        <View style ={{ width: '90%', paddingBottom: 6, paddingTop: 10, alignSelf: 'center'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Questions', {classID: this.state.val })}>
          <Text style ={{textAlign: 'right', fontWeight: '500'}}>
            More Questions  >
          </Text>
          </TouchableOpacity>
        </View>

        <View style ={{  width: '100%', alignItems: 'center', paddingLeft: 10}}>
          <TextInput
            multiline ={true}
            selectionColor = {'#FFFFFF'}
            placeholderTextColor = {'#D3D3D3'}
            placeholder ={"  Will I get an A?"}

            style = {{backgroundColor: '#FFFFFF', fontColor: '#000000', borderRadius: 16, width: '90%', height:75}}
            onChangeText={question => this.setState({ question })}>
          </TextInput>
        </View>



        <RoundedButton
          title = "Ask Question"
          text="Ask Question"

          onPress={() => this.handleQuestion()}
        />

      </ScrollView>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ClassScreen)
