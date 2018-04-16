import React, {Component} from 'react'
import {Text, Button, View, Image, Alert} from 'react-native'
import Services from '../services/apiServices'



export default class Searching extends Component {
  constructor(props){
    super(props)
    this.state = {
        userLooking: this.props.looking,
        userLeaving: this.props.leaving,
        currentUser: this.props.currentUser
    }
    this.lookingForSpot = this.lookingForSpot.bind(this)
  }

  static navigationOptions = {
    headerLeft: null,
    gesturesEnabled: false
  }

  componentDidMount(){
    console.log('these are my searching props', this.props);
    this.props.leaving  ? this.leavingSpot() : '';
    this.props.looking ? this.lookingForSpot() : '';
    // this.lookingForSpot()
    // this.leavingSpot()
  }

  lookingForSpot(){
    const { navigate } = this.props.navigation
    console.log('inside look for leaving', this.state);
    Services.lookingForSpot(this.state)
    .then(results => {
      console.log('these are my lookingForLeaving results', results);
      this.setState({
        searchResults: results
      })
      this.successAlert()
    })
    .catch(err => {
      this.failedAlert()
      console.log('we failed the search for a spot ');
      console.log(err);
    })
  }

  leavingSpot(){
    console.log('inside leavingSpot function', this.state.userLeaving);
    Services.leavingSpot(this.state)
    .then(results => {
      console.log('these are my leaving spot results', results);
      this.setState({
        searchResults: results
      })
      this.successAlert()
    })
    .catch(err => {
      this.failedAlert()
      console.log(err);
    })
  }

  renderMaps(){
    console.log('this is state inside rendermaps of searching component', this.props);
    console.log('i made it to render maps', this.props);
    this.props.navigation.navigate("MapScreen", this.state)
  }

  successAlert(){
    Alert.alert(
      this.state.searchResults.data.data[0].leaving ?
      'We found someone leaving nearby!'
      :
      'We found someone looking for a spot nearby!',
      '',
      [
        {text: 'OK', onPress: () => this.renderMaps()},
      ],
      { cancelable: false }
    )
}
failedAlert(){
  Alert.alert(
    'We couldn\'t find anyone nearby :(',
    '',
    [
      {text: 'OK', onPress: () => this.props.navigation.navigate("HomeScreen")},
    ],
    { cancelable: false }
  )
}

  render(){
    return(
        <View>
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
