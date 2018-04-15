import React, { Component } from 'react';
import { Image, View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {RNSlidingButton, SlideDirection} from 'rn-sliding-button';
const LatLng = {latitude: 37.78825, longitude: -122.4324}

let _mapView: MapView;

export default class sandbox extends Component {
  constructor(props){
    super(props)
    this.state = {
      latitude: '37.78825',
      longitude: '-122.4324',
      userLooking: this.props.userLooking,
      userLeaving: this.props.userLeaving
    }
    this.mapView = null
    this.onSlideRight = this.onSlideRight.bind(this)
  }

  static navigationOptions = {
    gesturesEnabled: false
  }

  componentDidMount() {
    console.log('this is my parking map props', this.state);
       var newRegion = {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
      };
      this.mapView.animateToRegion(newRegion, 500);
  }

  onSlideRight(){
    console.log('i swiped right');
    const {navigate} = this.props.navigation
    navigate("ParkedScreen", this.state)

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
       <RNSlidingButton
          style={styles.parentSlide}
          height={70}
          onSlidingSuccess={this.onSlideRight}
          slideDirection={SlideDirection.RIGHT}>
          <View style={{flexDirection:'row'}}>
            <Image
              source={require('./images/slider.png')}
              style={styles.slider}
            />
            <Text style={styles.text}>Swipe right to confirm you've parked</Text>
          </View>
        </RNSlidingButton>
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
    },
    parentSlide: {
      width: 350,
      borderRadius: 10,
      marginTop: 500,
      backgroundColor: 'white',
    },
    slider: {
      width: 35,
      height: 35,
      display: 'flex',
      marginLeft: 10
    },
    text : {
      marginLeft: 10,
      display: 'flex',
      marginLeft: 15,
      marginTop: 7,
      opacity: 0.8
    }
});
