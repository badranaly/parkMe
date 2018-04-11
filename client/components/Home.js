import React, {Component} from 'react'
import {Text, View,Button, TouchableHighlight} from 'react-native'
import {StackNavigator} from 'react-navigation'
import Services from '../services/apiServices'

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      longitude: null,
      latitude: null,
      accuracy: null
    }
    this.storeLocation = this.storeLocation.bind(this)
    // this.success = this.success.bind(this)
    // this.error = this.error.bind(this)
    // this.options = this.options.bind(this)
  }

  componentDidMount(){
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    let x = navigator.geolocation.getCurrentPosition(this.success,this.error,this.options)

    console.log('users location', x);
  }

  success(pos) {
    let crd = pos.coords;
    this.setState({
      longitude: parseInt(crd.longitude),
      latitude: parseInt(crd.latitude),
      accuracy: parseInt(crd.accuracy)
    }, () => this.storeLocation())

    // console.log('Your current position is:');
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
    //contributed by Ryan
  }

  storeLocation(){
    Services.storeLocation(this.state)
    .then(results => {
      console.log('stored succesfully');
    })
    .catch(err => {
      console.log(err)
    })
  }


  static navigationOptions = {
    title: 'parkMe',
    headerLeft: null,
  }

  render(){
    const {navigate} = this.props.navigation
    return (
      <View>
            <Text style={{marginLeft: 100,marginTop:50,fontSize:20}}>Welcome to My APP</Text>
      </View>
    )
  }
}
