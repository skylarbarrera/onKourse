import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },

    classInfoContainer:{
      backgroundColor: Colors.charcoal,
      minHeight: "30%"

    },

    forumContainer:{
      backgroundColor: Colors.cloud,
      height: '60%'
    },


})
