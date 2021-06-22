import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
export default class UploadStory extends React.Component() {
  render(){
  return (
    <View>
        <View style={styles.container}>
        Story-Hub
        </View>
<TextInput 
style={[styles.textInput,{height:30}]}
placeholder="Title of this story"
/>
<TextInput 
style={[styles.textInput,{height:30}]}
placeholder="Author"
/>
<TextInput 
style={[styles.textInput,{height:70}]}
placeholder="Story"
/>
<TouchableOpacity style={{width:50,height:20,borderRadius:17}}>Submit</TouchableOpacity>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 169, 255)',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:"center",
marginTop:1
  },
  textInput:{
marginTop:10,
width:100,
flex:1
  }
});
