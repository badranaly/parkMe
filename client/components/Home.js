import React, {Component} from 'react'
import {Text, View,Button, TouchableHighlight} from 'react-native'
import {StackNavigator} from 'react-navigation'
import Services from '../services/apiServices'

export default class Home extends Component {

  constructor(props){
    super(props)
    // // this.error = this.error.bind(this)
    // this.options = this.options.bind(this)
  }

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
