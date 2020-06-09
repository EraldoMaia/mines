import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import params from './src/params'

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Iniciando Mines!</Text>
    <Text>Tamanho da grade:
    {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize: 30,
    color:'#000000',
  },
});