import React, {Component} from 'react'
import {View, TextInput, Button} from 'react-native'
import Services from '../services/apiServices'

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }



  handleSubmit(){
    const {navigate} = this.props.navigation
    console.log('this is my username -->', this.state.username);
    console.log('this is my passwird -->', this.state.password);
    Services.createUser(this.state)
    .then(results => {
      console.log('user created', results);
      navigate("HomeScreen")
    })
    .catch(err => console.log('got an error', err))
  }

  render(){
    console.log('hi');
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
      </View>
    )
  }
}

export default Signup
