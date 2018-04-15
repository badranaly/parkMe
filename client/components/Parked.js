import React, {Component} from 'react'
import {View, Text} from 'react-native'

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
  }
  render(){
    return(
      <View>
        <Text style={{marginTop: 150, marginLeft: 120}}>I parked!</Text>
      </View>
    )
  }
}
