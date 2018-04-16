import React, {Component} from 'react'
import {Text, View,Button, TouchableHighlight, Alert, Dimensions} from 'react-native'
import {StackNavigator} from 'react-navigation'
import Services from '../services/apiServices'
const width = Dimensions.get('window').width

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      looking: null,
      leaving: null,
      currentUser: this.props.results
    }
    this.handleLooking = this.handleLooking.bind(this)
    this.handleLeaving = this.handleLeaving.bind(this)

  }

  componentDidMount(){
    console.log('these are my props', this.props.results);
    console.log('width of device', width);
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
    }, () => this.renderSearching())
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

            <Text style={{textAlign: 'center',marginTop:50,fontSize:20, marginBottom: 40}}>Dashboard</Text>
            <Button style={{textAlign: "center",marginTop:50,fontSize:20}} onPress={this.handleLooking} title='looking for parking' />
            <Button style={{textAlign: "center",marginTop:50,fontSize:20}} onPress={this.handleLeaving} title='leaving parking spot' />
      </View>
    )
  }
}
