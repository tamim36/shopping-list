import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Header from './components/Header'

const App = () => {
  return (
    <Header />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;