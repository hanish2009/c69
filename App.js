import { StatusBar } from 'expo-status-bar';
import react from 'react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import SearchScreen from './screens/SearchScreen'
import TransactionScreen from './screens/TransactionScreen';
import {createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
    return(
      
<AppNavigator/>

    )
  }
}

const TabNavigator = createBottomTabNavigator({

Transaction:{screen:TransactionScreen},
Search:{screen:SearchScreen}

})

const AppNavigator = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:40,
    marginTop:100,
    marginLeft:150,
    marginRight:150,
    
  }});

