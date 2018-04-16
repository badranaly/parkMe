import React, {Component} from 'react'
import {View, Text} from 'react-native'
import Services from '../services/apiServices'

export default class Parked extends Component {
  constructor(props){
    super(props)
    this.state = {
      userLeaving: this.props.userLeaving,
      userLooking: this.props.userLooking
    }
  }

  static navigationOptions = {
    headerLeft: null,
    gesturesEnabled: false
  }

  componentDidMount(){
    console.log('this is final page props', this.state);
    Services.reset(this.state)
    .then(results => {
      console.log('final page results', results);
    })
    .catch(err => {
      console.log(err);
    })
  }
  render(){
    return(
      <View>
        <Text style={{marginTop: 150, marginLeft: 120}}>I parked!</Text>
      </View>
    )
  }
}
