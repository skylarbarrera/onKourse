import React, { Component } from 'react'
import { View, ScrollView, Text,TextInput } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import RoundedButton from '../Components/RoundedButton.js'
import StarRating from 'react-native-star-rating';

// Styles
import styles from './Styles/ClassScreenStyle'

class ClassScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 4.3
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render () {
    return (
      <View style={styles.container}>
      <View style={styles.classInfoContainer}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Text style = {{flex: 2,fontSize: 30, fontWeight: 'bold'}}> Finite Automata</Text>
         <StarRating
           style
         maxStars = {5}
         rating={this.state.starCount}
         selectedStar={(rating) => this.onStarRatingPress(rating)}
         fullStarColor={'#FCC040'}
           starSize= {30}
           starStyle={ {paddingTop: 10}}
         />
        </View>
        <View style ={{flex: 1, flexDirection: 'row'}}>
          <Text style = {{flex: 1}}> Theory of sequential machines, finite automata, Turing machines, recursive functions, computability of functions.</Text>
          <View style = {{flex: 1}}>


          </View>
        </View>

      </View>
      <ScrollView style={styles.forumContainer}>
        <View style ={{borderBottomWidth: 1, borderColor: "#000000", width: '90%', paddingBottom: 6, paddingTop: 10, alignSelf: 'center'}}>
        <Text style = {{fontSize: 20, fontWeight: 'bold'}}> Top Questions</Text>
        </View>
        <View style ={{borderBottomWidth: 1, borderColor: "#000000", width: '90%', paddingBottom: 6, paddingTop: 10, alignSelf: 'center'}}>
          <Text>
            Q: How hard are the tests?

          </Text>
          <Text>
            A: Pretty easy but make sure to...
          </Text>
        </View>

        <View style ={{borderBottomWidth: 1, borderColor: "#000000", width: '90%', paddingBottom: 6, paddingTop: 10, alignSelf: 'center'}}>
          <Text>
            Q: Attendance Required?

          </Text>
          <Text>
            A: No, but there are pop quizzes to ch...
          </Text>
        </View>

        <View style ={{ flex: 1, width: '100%'}}>
          <TextInput
            multiline ={true}
            selectionColor = {'#FFFFFF'}
            placeholderTextColor = {'#FFFFFF'}
            style = {{backgroundColor: '#FFFFFF', fontColor: '#000000', borderRadius: 16, width: '90%', height:150}}>

          </TextInput>
        </View>

        <RoundedButton
          title = "Back 2 Login"
          text="Back 2 Login"

          onPress={() => this.props.navigation.navigate('LaunchScreen')}
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
