import React, {Component} from 'react'
import {Text, View,Button, TouchableHighlight} from 'react-native'
import {StackNavigator} from 'react-navigation'

export default class Home extends Component {

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
