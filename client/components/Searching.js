import React, {Component} from 'react'
import {Text, Button, View} from 'react-native'
// import Video from 'react-native-video'

export default class Searching extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return(
        <View>
          <Text style={{marginTop: 100, marginLeft: 100}}>Searching...</Text>
          {/* <Video
            source='https://media.giphy.com/media/rFrMBUUuKs22Y/giphy.mp4'
          /> */}
        </View>
    )
  }
}
