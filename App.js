import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App= function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.n1}>110719042</Text>
      <Text style={styles.n2}>施品安</Text>
    
      <View style={styles.waterSheep}>
        <View style={styles.skin}></View>
      </View>

      <View style={styles.hair}></View>
      <View style={styles.leye}></View>
      <View style={styles.reye}></View>
      <View style={styles.bl}></View>
      <View style={styles.br}></View>
      <View style={styles.m1}></View>
      <View style={styles.m2}></View>

      <Text style={styles.w1}>WHO</Text>
      <Text style={styles.w2}>ARE</Text>
      <Text style={styles.w3}>YOU</Text>
      <Text style={styles.ask}>Who are you?  :::  water sheep?</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#b7b136',
  },
  n1: {
    fontSize:13,
    fontStyle:'italic',
    fontWeight:'bold',
    color: 'white',
    marginTop:60,
    marginLeft:30,
  },
  n2: {
    fontSize:30,
    fontStyle:'italic',
    fontWeight:'bold',
    color: 'white',
    marginTop:10,
    marginLeft:30,
  },
  waterSheep: {
    backgroundColor: '#9d9939',
    width:100,
    height:100,
    marginTop:120,
    marginLeft:30,
    marginBottom:40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skin:{
    backgroundColor: '#dad3ae',
    width:80,
    height:80,
  },
  hair:{
    backgroundColor: '#b7b136',
    width:80,
    height:18,
    marginTop:-130,
    marginBottom:60,
    marginLeft:40,
  },
  leye:{
    backgroundColor: 'white',
    width:30,
    height:18,
    marginTop:-50,
    marginBottom:50,
    marginLeft:40,
  },
  reye:{
    backgroundColor: 'white',
    width:30,
    height:18,
    marginTop:-68,
    marginBottom:50,
    marginLeft:90,
  },
  bl:{
    backgroundColor: '#9d9939',
    width:15,
    height:18,
    marginTop:-68,
    marginBottom:50,
    marginLeft:40,
  },
  br:{
    backgroundColor: '#9d9939',
    width:15,
    height:18,
    marginTop:-68,
    marginBottom:50,
    marginLeft:105,
  },
  m1:{
    backgroundColor: '#F596AA',
    width:25,
    height:12,
    marginTop:-40,
    marginLeft:67,
  },
  m2:{
    backgroundColor: '#EB7A77',
    width:25,
    height:12,
    marginTop:0,
    marginBottom:50,
    marginLeft:67,
  },


  w1: {
    fontSize:80,
    fontWeight:'bold',
    color: '#9d9939',
    marginLeft:30,
  },
  w2: {
    fontSize:80,
    fontWeight:'bold',
    color: 'white',
    marginLeft:30,
  },
  w3: {
    fontSize:80,
    fontWeight:'bold',
    color: 'white',
    marginLeft:30,
  },
  ask: {
    fontStyle:'italic',
    fontSize:18,
    fontWeight:'bold',
    color: '#dad3ae',
    marginTop:10,
    marginLeft:40,
  },
});

export default App;//