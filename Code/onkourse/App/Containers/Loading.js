import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView , ActivityIndicator} from 'react-native'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoadingStyle'

class Loading extends Component {

  state = {
    timer: 3
  }

  componentDidMount(){
    this.interval = setInterval(
      () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
      1000
    );
  }

  switchScreens(){
    this.props.navigation.navigate('Classes')
  }
  componentDidUpdate(){
    if(this.state.timer === 1){

      clearInterval(this.interval);
      this.switchScreens();
    }
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }


  render () {
    return (

      <View style={{flex:1, paddingTop: '80%', alignItems: 'center'}}>
        <ActivityIndicator size="large" color= "#000000"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
