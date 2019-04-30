import React, { Component } from 'react'
import { ScrollView, Text,  View, TouchableOpacity, Linking} from 'react-native'
import { connect } from 'react-redux'
import SearchBar from 'react-native-searchbar';
import firebase from "react-native-firebase";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/FontAwesome';
// Styles
import styles from './Styles/ClassesStyle'
import PullClassData from "../Components/PullClassData";
import RoundedButton from "../Components/RoundedButton";

class Classes extends Component {
  constructor (props) {
  super(props)
    this.state = {
      classes: null,
      results: null,
      showSearch: false,
      searchBar: null
    }
    }

  toggleSearch(){
    var thumbsDown = this.state.showSearch? <View style={{height: 35}}>
    </View> : <View >
    </View>

    return (
      thumbsDown
    );



  }

  async componentDidMount(){
    const firebase1 = firebase.database().ref('ID/0/');
    //const idDatabbaseRef = firebase.ref('ID');
    const help = await firebase1.once('value', snapshot => {

      console.tron.log(snapshot.val())
      this.setState({

        results: snapshot.val(),
        classes: snapshot.val()


      })
      console.tron.log(this.state.classes)
    })}
  render () {
    let searchResults;



    return (
      <View style = {{flex:1}}>
        <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={this.state.classes}
          handleResults={(result) => {
            this.setState({results: result})
          }}
          showOnLoad={false}
          onBack = {()=>{
            this.setState({
              showSearch: false
            })
            this.searchBar.hide()

          }}

          allDataOnEmptySearch={true}/>
      <ScrollView style={styles.container}>
        <View style ={{flexDirection: 'row'}}>
        <Text style = {{fontSize: 30, fontWeight: 'bold'}}> Classes</Text>
        <TouchableOpacity onPress={()=>{
          this.setState({
            showSearch: true
          })
          this.searchBar.show()


        }} style={{paddingLeft: '55%', paddingRight: 20, paddingTop: 2}}>
          <Icon name="search" size={30} color="#000000" />
        </TouchableOpacity>
        </View>
        {this.toggleSearch()}
        <View style = {{ flex:1}}>{this.state.results && Object.keys(this.state.results).map((key, index) => {
          return (<TouchableOpacity onPress = {()=> this.props.navigation.navigate('ClassScreen', {classID: key, classInfo: this.state.results[key]})} style ={{borderBottomWidth: 1, borderColor: "#000000", width: '90%', height: 50, alignSelf: "center"}}>
            <Text style = {{fontSize: 20, fontWeight: 'bold'}} >{this.state.results[key].TITLE} </Text>
              {console.tron.log("this my key" + key)}
            <View style = {{flexDirection: 'row', alignItems: 'space-between'}}>
              <View style ={{flexDirection: 'row'}}>{this.state.results[key].INSTRUCTOR.map( item => {
                return(
                  <TouchableOpacity onPress = {() => Linking.openURL('https://www.ratemyprofessors.com/ShowRatings.jsp?tid=911570')}>
                    <Text style = {{fontSize: 14} }>{item}  |  </Text>
                  </TouchableOpacity>
                )}
              )}
              </View>
              <StarRating
                style = {{alignSelf: 'flex-end'}}
                maxStars = {5}
                rating={this.state.results[key].StarRatingAvr}
                selectedStar={(rating) => this.state.results[key].StarRatingAvr = rating}
                fullStarColor={'#FCC040'}
                starSize= {14}

              />
            </View>


          </TouchableOpacity>)
        })}</View>




        <View>

        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Classes)
