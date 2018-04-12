import React, {Component} from 'react'
import {View, TextInput, Button, Text} from 'react-native'
import Services from '../services/apiServices'
import Home from './Home'
import StackNavigator from 'react-navigation'

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      longitude: '',
      latitude: '',
      accuracy: '',
      results: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePress = this.handlePress.bind(this)
    this.setStateFunction = this.setStateFunction.bind(this)
    this.success = this.success.bind(this)
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.success)
  }

  setStateFunction(crd){
    this.setState({
      longitude: crd.longitude,
      latitude: crd.latitude,
      accuracy: crd.accuracy,
    })
  }

  success(pos) {
     let crd = pos.coords;
     console.log('Your current position is:');
     console.log(`Latitude : ${crd.latitude}`);
     console.log(`Longitude: ${crd.longitude}`);
     console.log(`More or less ${crd.accuracy} meters.`);
     this.setStateFunction(crd)
   }

  static navigationOptions = {
    title: 'Sign Up'
    }

  handleSubmit(){
    const {navigate} = this.props.navigation
    console.log('this is my username -->', this.state.username);
    console.log('this is my password -->', this.state.password);
    Services.createUser(this.state)
    .then(results => {
      this.setState({
        results: results.data.data
      }, () => navigate("HomeScreen", this.state))
    })
    .catch(err => console.log('got an error', err))
  }

  handlePress(){
    const {navigate}  = this.props.navigation
    navigate("LoginScreen")
  }

  render(){
    return(
      <View>
      <TextInput
      style={{marginLeft:110, width: 150, marginTop:50,fontSize:30}}
      placeholder='Username'
      onChangeText={(username) => this.setState({username})}
      value={this.state.username}
    />
    <TextInput
      style={{marginLeft:115, width: 150, marginTop:5,fontSize:30,marginBottom: 15}}
      placeholder='Password'
      onChangeText={(password) => this.setState({password})}
      secureTextEntry={true}
      value={this.state.password}
    />
    <Button
      onPress={this.handleSubmit}
      title="SUBMIT"
      color="#841584"
    />
    <Text style={{marginLeft:115, marginTop: 10}}>Already have an account?</Text>
    <Text style={{marginLeft:155, marginTop: 20, color:'blue'}} onPress={this.handlePress}>Login here</Text>
      </View>
    )
  }
}

export default Signup
