import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world from react native</Text>
      <Image
        style={styles.img}
        source={{
          uri: 'https://randomuser.me/api/portraits/men/22.jpg',
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'darkslateblue', 
    fontSize: 40
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100/2
  }
});

export default App;