import React,{Component} from 'react'
import {View, TextInput, Button} from 'react-native'
import Services from '../services/apiServices'
// const {navigate} = this.navigation

export default class Login extends Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(){
    const { navigate } = this.props.navigation
    console.log('username -->', this.state.username);
    console.log('password -->', this.state.password);
    Services.checkLogin(this.state)
    .then(results =>{
      navigate("HomeScreen")
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
