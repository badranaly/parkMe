import React, {Component} from 'react'
import {View, Text} from 'react-native'
import MapView from 'react-native-maps'

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
          <MapView
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
        </View>
    )
  }
}
