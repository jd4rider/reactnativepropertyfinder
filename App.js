/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  createStackNavigator
} from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
/* class SearchPage extends Component<Props> {
  render() {
    return <Text style={styles.description}>Search for houses to buy!</Text>;
  }
} */

const RootStack = createStackNavigator({
  Search: {
    screen: SearchPage,
    navigationOptions: ({ navigation }) => ({
      title: 'Property Finder',
      headerTitleStyle: styles.container,
    }),
  },
 SearchRes: {
    screen: SearchResults,
    navigationOptions: ({ navigation }) => ({
      title: 'Results',
      headerTitleStyle: styles.container,
    }),
  }, 
});

export default class App extends Component<Props> {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
  container: {
    flex: 1,
  },
});