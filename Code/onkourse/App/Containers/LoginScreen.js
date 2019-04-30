import React, { Component } from 'react'
import { Image,View, TextInput, Button, ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import firebase from 'react-native-firebase'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'
import LoginButton from '../Components/LoginButton';

class LoginScreen extends Component {
  state = { email: '', password: ''}

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {this.props.navigation.navigate('Loading')


      })

      .catch(() => console.tron.log("username or password does not exist"))
  }

  render() {
    return (

        <View style={styles.container}>
          <Text style = {{color: '#000000', fontSize: 30, fontWeight: '400'}}>Welcome to OnKourse!</Text>
          <Image source ={require('../Images/onKourseLogo.png')} style= {{resizeMode: 'contain', maxHeight: '50%', maxWidth:'50%', alignSelf: 'center',}}>
          </Image>


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
          <LoginButton
            title = "Login"
            text="Login"
            style = {{width:200}}
            onPress={() => this.handleLogin()}
          />

          <LoginButton
            title = "Don't have an account? Sign Up"
            text="Don't have an account? Sign Up"
            style = {{width:200}}
            onPress={() => this.props.navigation.navigate('SignUp')}
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


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
