import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ListItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItmeView} >
            <Text style={styles.listItemText} >{item.text}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ListItem

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    listItmeView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18,
    }
})