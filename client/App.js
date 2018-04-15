/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation'
import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login'
import Searching from './components/Searching'
import ParkingMap from './components/ParkingMap'

const mapNavigationStateParamstoProps = (SomeComponent) => {
  return class extends React.Component {
    static navigationOptions = SomeComponent.navigationOptions
    render(){
      const {navigation: {state: {params}}} = this.props;
      return <SomeComponent {...params} {...this.props} />
    }
  }
}

const App = StackNavigator({
  SignupScreen: { screen: Signup},
  LoginScreen: { screen: Login},
  HomeScreen: { screen: mapNavigationStateParamstoProps(Home)},
  SearchScreen: { screen : mapNavigationStateParamstoProps(Searching)},
  MapScreen : { screen: mapNavigationStateParamstoProps(ParkingMap)}
})

export default App
