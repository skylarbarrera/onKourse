import React, { Component } from 'react'
import {ScrollView, Text, View, Image, Picker, TouchableOpacity, Linking} from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Friends from '../Components/Friends'
// Styles<ion-icon name="contacts"></ion-icon>
import styles from './Styles/AngelaProfileStyle'
import firebase from "react-native-firebase";

class AngelaProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      results: null,
      classes:  null,
      isVisible: false,
      user: {
        email: null,
        name: null,
        pic: null,
        asked: null,
        answered: null,
        major: null,
        minor: null,
        school: null,
        friend: null
      }
    }
  }


  async componentDidMount(){
    const firebase1 = firebase.database().ref('ID/1/');
    //const idDatabbaseRef = firebase.ref('ID');
    const help = await firebase1.once('value', snapshot => {

      console.tron.log(snapshot.val())
      this.setState({

        results: snapshot.val(),
        classes: snapshot.val(),



      })
      console.tron.log('compontent did mount')
      console.tron.log(this.state.classes)
      this.mapUserData()
    })}


  mapUserData(){

    this.state.classes && Object.keys(this.state.classes).map((key, index) =>{
      console.tron.log("key is" + key)
      this.setState({

        user:{
          email: this.state.classes['Skylar Barrera'].email,
          pic:  this.state.classes['Skylar Barrera'].pic,
          asked:  this.state.classes['Skylar Barrera'].asked,
          answered: this.state.classes['Skylar Barrera'].answered,
          major:  this.state.classes['Skylar Barrera'].major,
          minor: this.state.classes['Skylar Barrera'].minor,
          school: this.state.classes['Skylar Barrera'].school,
          name: this.state.classes['Skylar Barrera'].name,
          friend: this.state.classes['Skylar Barrera'].friend
        }



      })

    })
    console.tron.log("email is " + this.state.user.email)
  }
  updateMajor = (item) => {
    this.setState({ major: item })
  }

  render () {


    return (
      <View style={{flex: 1}}>

        <View style ={{flex : 2 , backgroundColor: '#000000', alignItems: 'center', minHeight: '20%'}}>
          <Image source = {require('../Images/Angela.jpg')} style={{borderRadius: 75, width: 150, height: 150, marginTop: 30}} />


          <Text style = {{color: '#FFFFFF', fontSize: 20, paddingTop: 5}}>
            Angela Chen
          </Text>
          <Text style = {{color: '#FFFFFF', fontSize: 14, paddingTop: 5}}>
           Marketing Major |  William & Mary
          </Text>

          <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>

            <TouchableOpacity onPress={()=> {


              this.setState({isVisible: !this.state.isVisible})
              console.tron.log("is visible - " + this.state.isVisible)}} style = {{ borderRightWidth: 1, borderColor: '#FFFFFF', paddingRight: 20,  alignItems: 'center'}}>
              <Icon1 name="ios-contacts" size={30} color="#FFFFFF" />
              <Text style = {{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold'}}> 3</Text>
            </TouchableOpacity>

            <View style = {{ borderRightWidth: 1, borderColor: '#FFFFFF', paddingRight: 20, paddingLeft: 20}}>
              <Icon name="question-circle" size={30} color="#FFFFFF" />
              <Text style = {{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold'}}> 19</Text>
            </View>

            <View style = {{  borderColor: '#FFFFFF', paddingLeft: 20, alignItems: 'center'}}>
              <Icon name="check-circle" size={30} color="#FFFFFF" />
              <Text style = {{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold'}}> 15</Text>
            </View>


            <Friends  isVisible = {this.state.isVisible}
                      onBackdropPress={() => this.setState({ isVisible: false })}
                      onSwipeComplete={() => this.setState({ isVisible: false })}/>

          </View>
        </View>
        <View style = {{flex: 3}}>
          <View style ={{ borderColor: "#000000", width: '90%', paddingBottom: 2, paddingTop: 10, alignSelf: 'center'}}>
            <Text style = {{fontSize: 20, fontWeight: 'bold'}}> Angela's Semester</Text>
          </View>
          <ScrollView>
            <View style = {{ flex:1}}>
              <TouchableOpacity onPress = {()=> this.props.navigation.navigate('ClassScreen', {classID: key, classInfo: this.state.results[key]})} style ={{borderBottomWidth: 1, borderColor: "#000000", width: '90%', height: 40, alignSelf: "center"}}>
                <Text style = {{fontSize: 16, fontWeight: 'bold'}} >Entreprenuership in CS </Text>

                <View style = {{flexDirection: 'row', alignItems: 'space-between'}}>
                  <View style ={{flexDirection: 'row'}}>

                    <TouchableOpacity onPress = {() => Linking.openURL('https://www.ratemyprofessors.com/ShowRatings.jsp?tid=911570')}>
                      <Text style = {{fontSize: 12} }>Peter Kemper |  </Text>
                    </TouchableOpacity>


                  </View>
                  <StarRating
                    style = {{alignSelf: 'flex-end'}}
                    maxStars = {5}
                    rating={5}
                    selectedStar={null}
                    fullStarColor={'#FCC040'}
                    starSize= {14}

                  />
                </View>


              </TouchableOpacity></View>




            <View style = {{ flex:1}}>
              <TouchableOpacity onPress = {()=> this.props.navigation.navigate('ClassScreen', {classID: key, classInfo: this.state.results[key]})} style ={{borderBottomWidth: 1, borderColor: "#000000", width: '90%', height: 40, alignSelf: "center"}}>
                <Text style = {{fontSize: 16, fontWeight: 'bold'}} >Algorithms </Text>

                <View style = {{flexDirection: 'row', alignItems: 'space-between'}}>
                  <View style ={{flexDirection: 'row'}}>

                    <TouchableOpacity onPress = {() => Linking.openURL('https://www.ratemyprofessors.com/ShowRatings.jsp?tid=911570')}>
                      <Text style = {{fontSize: 12} }>Zhenming Liu |  </Text>
                    </TouchableOpacity>


                  </View>
                  <StarRating
                    style = {{alignSelf: 'flex-end'}}
                    maxStars = {5}
                    rating={4}
                    selectedStar={null}
                    fullStarColor={'#FCC040'}
                    starSize= {14}

                  />
                </View>


              </TouchableOpacity></View>





            <View style = {{ flex:1}}>
              <TouchableOpacity onPress = {()=> this.props.navigation.navigate('ClassScreen', {classID: key, classInfo: this.state.results[key]})} style ={{borderBottomWidth: 1, borderColor: "#000000", width: '90%', height: 40, alignSelf: "center"}}>
                <Text style = {{fontSize: 16, fontWeight: 'bold'}} >Legal Environment of Business </Text>

                <View style = {{flexDirection: 'row', alignItems: 'space-between'}}>
                  <View style ={{flexDirection: 'row'}}>

                    <TouchableOpacity onPress = {() => Linking.openURL('https://www.ratemyprofessors.com/ShowRatings.jsp?tid=911570')}>
                      <Text style = {{fontSize: 12} }>William Stauffer |  </Text>
                    </TouchableOpacity>


                  </View>
                  <StarRating
                    style = {{alignSelf: 'flex-end'}}
                    maxStars = {5}
                    rating={4.8}
                    selectedStar={null}
                    fullStarColor={'#FCC040'}
                    starSize= {14}

                  />
                </View>


              </TouchableOpacity></View>





            <View style = {{ flex:1}}>
              <TouchableOpacity onPress = {()=> this.props.navigation.navigate('ClassScreen', {classID: key, classInfo: this.state.results[key]})} style ={{borderBottomWidth: 1, borderColor: "#000000", width: '90%', height: 40, alignSelf: "center"}}>
                <Text style = {{fontSize: 16, fontWeight: 'bold'}} >Marketing Strategy </Text>

                <View style = {{flexDirection: 'row', alignItems: 'space-between'}}>
                  <View style ={{flexDirection: 'row'}}>

                    <TouchableOpacity onPress = {() => Linking.openURL('https://www.ratemyprofessors.com/ShowRatings.jsp?tid=911570')}>
                      <Text style = {{fontSize: 12} }>Tatiana Granger |  </Text>
                    </TouchableOpacity>


                  </View>
                  <StarRating
                    style = {{alignSelf: 'flex-end'}}
                    maxStars = {5}
                    rating={5}
                    selectedStar={null}
                    fullStarColor={'#FCC040'}
                    starSize= {14}

                  />
                </View>


              </TouchableOpacity></View>





            <View style = {{ flex:1}}>
              <TouchableOpacity onPress = {()=> this.props.navigation.navigate('ClassScreen', {classID: key, classInfo: this.state.results[key]})} style ={{borderBottomWidth: 1, borderColor: "#000000", width: '90%', height: 40, alignSelf: "center"}}>
                <Text style = {{fontSize: 16, fontWeight: 'bold'}} >Classical Guitar Ensemble </Text>

                <View style = {{flexDirection: 'row', alignItems: 'space-between'}}>
                  <View style ={{flexDirection: 'row'}}>

                    <TouchableOpacity onPress = {() => Linking.openURL('https://www.ratemyprofessors.com/ShowRatings.jsp?tid=911570')}>
                      <Text style = {{fontSize: 12} }>Timothy Olbrych |  </Text>
                    </TouchableOpacity>


                  </View>
                  <StarRating
                    style = {{alignSelf: 'flex-end'}}
                    maxStars = {5}
                    rating={2.7}
                    selectedStar={null}
                    fullStarColor={'#FCC040'}
                    starSize= {14}

                  />
                </View>


              </TouchableOpacity></View>
          </ScrollView>

        </View>






      </View>
    )}}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AngelaProfile)
