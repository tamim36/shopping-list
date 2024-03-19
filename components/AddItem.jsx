import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({ onAddItem }) => {
    const [text, setText] = useState()

    const onChange = (val) => setText(val)

    return (
        <View>
            <TextInput placeholder='Add Item ... ' style={styles.input} onChangeText={onChange} />
            <TouchableOpacity style={styles.btn} onPress={() => onAddItem(text)}>
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