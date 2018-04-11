/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation'
import Signup from './components/Signup'
import Home from './components/Home'

const App = StackNavigator({
  SignupScreen: { screen: Signup},
  HomeScreen: { screen: Home}
})

export default App
