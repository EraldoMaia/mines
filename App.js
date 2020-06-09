import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Iniciando Mines!</Text>
    <Text>Tamanho da grade:
    {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
    <Field />
    <Field opened/>
    <Field opened nearMines={6}/>
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