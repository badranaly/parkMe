import React, {Component} from 'react'
import {Text, View,Button, TouchableHighlight, Alert} from 'react-native'
import {StackNavigator} from 'react-navigation'
import Services from '../services/apiServices'

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      looking: null,
      leaving: null,
      results: this.props
    }
    this.handleLooking = this.handleLooking.bind(this)
    this.handleLeaving = this.handleLeaving.bind(this)
    this.leavingSpot = this.leavingSpot.bind(this)

  }

  componentDidMount(){
    console.log('these are my props', this.props);

  }

  handleLooking(){
    console.log('inside looking');
    this.setState({
      looking: true
    }, () => this.renderSearching())
  }

  renderSearching(){
    console.log('inside render search');
    const {navigate} = this.props.navigation
    navigate("SearchScreen", this.state)
  }
  
  handleLeaving(){
    console.log('inside leaving');
    this.setState({
      leaving: true
    }, () => this.leavingSpot())
  }

  leavingSpot(){
    console.log('inside leavingSpot function', this.state.leaving);
    Services.leavingSpot(this.state)
    .then(results => {
      console.log('these are my leaving spot results', results);
      this.Alert()
    })
    .catch(err => {
      console.log(err);
    })
  }

  Alert(){
  Alert.alert(
    'We found someone leaving nearby!',
    '',
    [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: false }
  )
}


  static navigationOptions = {
    title: 'parkMe',
    headerLeft: null,
    gesturesEnabled: false
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
