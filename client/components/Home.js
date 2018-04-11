import React, {Component} from 'react'
import {Text, View, TouchableHighlight} from 'react-native'
import {StackNavigator} from 'react-navigation'

export default class Home extends Component {
  static navigationOptions = {
    title: 'parkMe'
  }
  render(){
    const {navigate} = this.props.navigation
    return (
      <View>
        <TouchableHighlight>
            <Text>Welcome to My APP</Text>
          </TouchableHighlight>
      </View>
    )
  }
}
