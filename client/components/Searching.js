import React, {Component} from 'react'
import {Text, Button, View, Image, Alert} from 'react-native'
import Services from '../services/apiServices'



export default class Searching extends Component {
  constructor(props){
    super(props)
    this.state = {
        userLooking: this.props,
        userLeaving: this.props
    }
    this.lookingForSpot = this.lookingForSpot.bind(this)
  }

  static navigationOptions = {
    headerLeft: null,
    gesturesEnabled: false
  }

  componentDidMount(){
    this.lookingForSpot()
  }

  lookingForSpot(){
    const { navigate } = this.props.navigation
    console.log('inside look for leaving', this.state);
    Services.lookingForSpot(this.state)
    .then(results => {
      console.log('these are my lookingForLeaving results', results.data);
      this.Alert()
      this.setState({
        userLeaving: results.data.data[0]
      })
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
    return(
        <View>
          {console.log('these are my props', this.props)}
          <Image
            style={{position: 'absolute', height:800}}
            resizeMode='cover'
            source={require('./images/cars.jpg')}
          />
          <Image
            source={require('./images/loading.gif')}
            style={{marginLeft: 120, marginTop: 170}}

           />
        </View>
    )
  }
}
