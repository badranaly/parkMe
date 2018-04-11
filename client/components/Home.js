import React, {Component} from 'react'
import {Text, View,Button, TouchableHighlight} from 'react-native'
import {StackNavigator} from 'react-navigation'
import Services from '../services/apiServices'

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      //user_id: this.props.user_id
      user_id: 4,
      longitude: "",
      latitude: "",
      accuracy: ""
    }
    this.storeLocation = this.storeLocation.bind(this)
    this.setStateFunction = this.setStateFunction.bind(this)
    this.success = this.success.bind(this)
    // // this.error = this.error.bind(this)
    // this.options = this.options.bind(this)
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.success)
    .then(result => {
      console.log("I am the result", result);
    })
    .catch(err => {
      console.log("I am the error", err);
    })
  }

 success(pos) {
    let crd = pos.coords;
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    this.setStateFunction(crd)
    //contributed by Ryan
  }

  setStateFunction(crd){
    this.setState({
      longitude: crd.longitude,
      latitude: crd.latitude,
      accuracy: crd.accuracy
    }, () => this.storeLocation())
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
