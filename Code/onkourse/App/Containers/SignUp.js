import React, { Component } from 'react'
import { ScrollView, Text , View, TextInput, Button, Image,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import firebase from 'react-native-firebase'
import LoginButton from '../Components/LoginButton';
import Modal from "react-native-modal";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import ImagePicker from 'react-native-image-picker'
// Styles
import styles from './Styles/SignUpStyle'

class SignUp extends React.Component {
  state = { name: '', email: '', password: '', errorMessage: null , photo: null, majors: null, major: 'fake major', isVisible: false}
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        ()=> {
          this.addUser()
          this.props.navigation.navigate('Classes')
        })
      .catch(error => console.tron.log(error.message) )
  }

  async componentDidMount(){
    const firebase1 = firebase.database().ref('Majors');
    //const idDatabbaseRef = firebase.ref('ID');
    const help = await firebase1.once('value', snapshot => {

      console.tron.log(snapshot.val())
      this.setState({

        majors: snapshot.val(),



      })
      console.tron.log(this.state.majors)
    })}


    async addUser(){
      const userRef = firebase.database().ref('ID/1');
      newUser = {
        answered: "temp",
        asked: "temp",
        email: this.state.email,
        name: this.state.name,
        major: this.state.major,
        school: "William & Mary"
      }
      userRef.child(this.state.name).set(newUser)
      console.tron.log("user added")
    }

    updateMajor(item){
    this.setState({
      major: item
    })
    }


      render() {
      return (

        <View style={{flex: 1, alignItems:'center'}}>
          <Text style = {{color: '#000000', fontSize: 30, fontWeight: '400'}}>Sign up for OnKourse!</Text>
          <Image source ={require('../Images/onKourseLogo.png')} style= {{resizeMode: 'contain', maxHeight: '50%', maxWidth:'50%', alignSelf: 'center',}}>
          </Image>


          <TextInput

            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Name"
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />


          <TextInput

            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />

          <Modal  isVisible = {this.state.isVisible} style = {{flex: 2}}>
            <View style = {{height: '30%', backgroundColor: '#FFFFFF'}}>
            <Text style = {{fontSize: 20, fontWeight: 'bold'}}> Majors</Text>
            <ScrollView >
              <View>{this.state.majors && Object.keys(this.state.majors).map((item, index) => {
              return (

                <TouchableOpacity onPress = {()=>this.updateMajor(item)}
                                  style = {{ borderBottomWidth: 1, borderColor: "#000000", width: '80%', alignSelf: "center"}}>
                  <Text style = {{fontSize: 14, fontWeight: 'bold', paddingLeft: '10%' }}>{this.state.majors[item]}</Text>
                  {console.tron.log(item)}
                </TouchableOpacity>
              )}
              )}


              </View>
            </ScrollView>
            </View>

          </Modal>



          <LoginButton
            title = "Sign Up"
            text="Sign Up"
            style = {{width:200}}
            onPress={() => this.handleSignUp()}
          />

          <LoginButton
            title = "Already have an account? Login"
            text="Already have an account? Login"
            style = {{width:200}}
            onPress={() => this.props.navigation.navigate('LoginScreen')}
          />


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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
