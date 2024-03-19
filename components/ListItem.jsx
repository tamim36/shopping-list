import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItmeView} >
            <Text style={styles.listItemText} >{item.text}</Text>
            <Icon name="times" size={20} color="#FF0000" 
                onPress={() => deleteItem(item.id)}/>
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