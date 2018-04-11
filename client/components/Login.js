import React,{Component} from 'react'
import {View, TextInput, Button} from 'react-native'
import Services from '../services/apiServices'
// const {navigate} = this.navigation

export default class Login extends Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      longitude: "",
      latitude: "",
      accuracy: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
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
      accuracy: crd.accuracy
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



  handleSubmit(){
    const { navigate } = this.props.navigation
    console.log('username -->', this.state.username);
    console.log('password -->', this.state.password);
    Services.checkLogin(this.state)
    .then(results =>{
      navigate("HomeScreen")
    })
    .then(result => {
      console.log('one');
      Services.updateLocation(this.state)
      .then(results => {
        console.log('updated location successfuly');
      })
      .catch(err => {
        console.log(err);
      })
    })
    .catch(err => console.log(err))
  }

  render(){

    return (
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
      </View>
    )
  }
}
