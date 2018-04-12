import React, {Component} from 'react'
import {Text, View,Button, TouchableHighlight} from 'react-native'
import {StackNavigator} from 'react-navigation'
import Services from '../services/apiServices'

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      looking: null,
      leaving: null
    }
    this.handleLooking = this.handleLooking.bind(this)
    this.handleLeaving = this.handleLeaving.bind(this)

  }

  handleLooking(){
    console.log('inside looking');
    this.setState({
      looking: true
    }, () => this.lookForLeaving())
  }
  lookForLeaving(){
    console.log('inside look for leaving', this.state.looking);
    Services.lookForLeaving(this.state)
    .then(results => {
      console.log('these are the results', results);
    })
    .catch(err => {
      console.log(err);
    })
  }
  handleLeaving(){
    console.log('inside leaving');
  }

  static navigationOptions = {
    title: 'parkMe',
    headerLeft: null,
  }

  render(){
    const {navigate} = this.props.navigation
    return (
      <View>
            <Text style={{marginLeft: 100,marginTop:50,fontSize:20, marginBottom: 40}}>Welcome to My APP</Text>
            <Button style={{marginLeft: 100,marginTop:50,fontSize:20}} onPress={this.handleLooking} title='looking for parking' />
            <Button style={{marginLeft: 100,marginTop:50,fontSize:20}} onPress={this.handleLeaving} title='leaving parking spot' />
      </View>
    )
  }
}
