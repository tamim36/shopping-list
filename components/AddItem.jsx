import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = () => {
  return (
    <View>
      <TextInput placeholder='Add Item ... ' style={styles.input} />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>   
            <Icon name='plus' size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddItem

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    }
})