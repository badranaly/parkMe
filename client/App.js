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

const App = StackNavigator({
  SignupScreen: { screen: Signup},
  LoginScreen: { screen: Login},
  HomeScreen: { screen: Home}
})

export default App
