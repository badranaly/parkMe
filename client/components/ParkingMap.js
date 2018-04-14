import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class ParkingMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      apiData: this.props
    }
  }
  render(){
    return (
        <View>
          <Text style={{marginTop: 100, marginLeft:120}}>Made it to render screen of ok</Text>
        </View>
    )
  }
}
