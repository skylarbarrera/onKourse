import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },

    classInfoContainer:{
      backgroundColor: Colors.cloud,
      minHeight: "40%",
      borderBottomWidth: 2,
      borderColor: '#000000'

    },

    forumContainer:{
      backgroundColor: Colors.cloud,
      height: '60%'
    },


})
