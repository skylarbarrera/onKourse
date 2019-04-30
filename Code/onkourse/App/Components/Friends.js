import React, { Component} from 'react'
// import PropTypes from 'prop-types';
import Modal from "react-native-modal";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './Styles/FriendsStyle'
import {connect} from "react-redux";
import PropTypes from "prop-types";

class Friends extends Component {
  constructor (props) {
    super(props)
    this.state = {
      friend: {
        friends:['Angela Chen'],
        count: 1,
      }
    }
  }
  static propTypes = {
    isVisible: PropTypes.func,
    onBackdropPress: PropTypes.func,
    onSwipeComplete: PropTypes.func,
    navigation: PropTypes.any,
    onAction: PropTypes.func

  }
  render () {
    //this.state.val = this.props.navigation.state.params.userFriends

    return (
        <View>
        <Modal isVisible = {this.props.isVisible}
               onBackdropPress={this.props.onBackdropPress}
               onSwipeComplete={this.props.onSwipeComplete}

                >

            <View style = {{height: '30%', backgroundColor: '#FFFFFF'}}>
              <Text style = {{fontSize: 20, fontWeight: 'bold'}}> Friends</Text>
            <TouchableOpacity onPress={()=> {
              this.props.onAction()
             this.props.navigation.navigate('AngelaProfile', {isVisible: false})}}
              style = {{ borderBottomWidth: 1, borderColor: "#000000", width: '80%', alignSelf: "center", marginVertical: 10}}>
              <View style = {{flexDirection: 'row', paddingBottom: 5 }}>
              <Image source = {require('../Images/Angela.jpg')} style={{borderRadius: 15, width: 30, height: 30}} />
              <Text style = {{fontSize: 14, fontWeight: 'bold', paddingLeft: '10%' , paddingTop: 5}}> Angela Chen </Text>
              </View>

            </TouchableOpacity>


              <TouchableOpacity style = {{ borderBottomWidth: 1, borderColor: "#000000", width: '80%', alignSelf: "center", marginVertical: 10}}>
                <View style = {{flexDirection: 'row', paddingBottom: 5 }}>
                  <Image source = {require('../Images/Roy.jpg')} style={{borderRadius: 15, width: 30, height: 30}} />
                  <Text style = {{fontSize: 14, fontWeight: 'bold', paddingLeft: '10%' , paddingTop: 5}}> Roy Li</Text>
                </View>

              </TouchableOpacity>
              <TouchableOpacity style = {{ borderBottomWidth: 1, borderColor: "#000000", width: '80%', alignSelf: "center", marginVertical: 10}}>
                <View style = {{flexDirection: 'row', paddingBottom: 5 }}>
                  <Image source = {require('../Images/Shouzhuo.png')} style={{borderRadius: 15, width: 30, height: 30}} />
                  <Text style = {{fontSize: 14, fontWeight: 'bold', paddingLeft: '10%' , paddingTop: 5}}>Shouzhuo Sun</Text>
                </View>

              </TouchableOpacity>


            </View>
        </Modal>
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


export default connect(mapStateToProps, mapDispatchToProps)(Friends)
