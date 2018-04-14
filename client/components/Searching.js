import React, {Component} from 'react'
import {Text, Button, View, Image, Alert} from 'react-native'
import Services from '../services/apiServices'



export default class Searching extends Component {
  constructor(props){
    super(props)
    this.state = {
        apiData: this.props
    }
    this.lookingForSpot = this.lookingForSpot.bind(this)
  }

  static navigationOptions = {
    headerLeft: null,
    gesturesEnabled: false
  }

  lookingForSpot(){
    const { navigate } = this.props.navigation
    console.log('inside look for leaving', this.state.looking);
    Services.lookingForSpot(this.state)
    .then(results => {
      console.log('these are my lookingForLeaving results', results);
      this.Alert()
    })
    .catch(err => {
      console.log(err);
    })
  }

  renderMaps(){
    const {navigate } = this.props.navigation
    navigate("MapScreen", this.state)
  }

  Alert(){
    Alert.alert(
      'We found someone leaving nearby!',
      '',
      [
        {text: 'OK', onPress: () => this.renderMaps()},
      ],
      { cancelable: false }
    )
}

  render(){
    this.lookingForSpot()
    return(
        <View>
          {console.log('these are my props', this.props)}
          <Image
            style={{position: 'absolute', height:800}}
            resizeMode='cover'
            source={require('./cars.jpg')}
            blurRadius={1}
          />
          <Image
            source={require('./loading.gif')}
            style={{marginLeft: 120, marginTop: 170}}

           />
        </View>
    )
  }
}
