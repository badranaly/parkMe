import React, { Component } from 'react';
import { View, AppRegistry, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
// import Marker from 'react-native-maps'

// const LatLng = {latitude: -36.8457991, longitude: 174.7666099}

export default class sandbox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0,
              longitudeDelta: 0.0,
          }}
        >
        <MapView.Marker
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
