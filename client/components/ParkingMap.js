import React, { Component } from 'react';
import { View, AppRegistry, Text, StyleSheet, TouchableOpacity, Polyline} from 'react-native';
import MapView from 'react-native-maps';
// import Marker from 'react-native-maps'

const LatLng = {latitude: 37.78825, longitude: -122.4324}

let _mapView: MapView;

export default class sandbox extends Component {
  constructor(props){
    super(props)
    this.state = {
      latitude: '37.78825',
      longitude: '-122.4324'
    }
    this.mapView = null
  }

  componentDidMount() {
       var newRegion = {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
      };
      this.mapView.animateToRegion(newRegion, 1000);
}

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          zoomEnabled={true}
          showsUserLocation={true}
          ref={ref => { this.mapView = ref }}
          initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0,
              longitudeDelta: 0.0,
          }}
        >
        <MapView.Marker.Animated
            coordinate={{latitude: 37.78825, longitude: -122.4324}}
            title={"User"}
            description={"leaving my parking spot"}
         />
       </MapView>
    </View>

    );
  }
}

var styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }
});
