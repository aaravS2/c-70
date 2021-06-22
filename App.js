import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ReadStory from './Screens/readStory';
import UploadStory from './Screens/UploadStory';
export default class App extends React.Component() {
  render(){
  return (
    <View>
      <Cont/>
    </View>
  )
}
}
const {Cont}=createAppContainer.create(navi)
const {navi}=createBottomTabNavigator.create({
  ReadStory:ReadStory,
  UploadStory:UploadStory
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 169, 255)',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:"center",
marginTop:1
  },
});
