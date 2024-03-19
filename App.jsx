import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Eggs'},
    {id: 2, text: 'Bread'},
    {id: 3, text: 'Meat'},
    {id: 4, text: 'Potato'}
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    });
    
  }

  const onAddItem = (val) => {
    const maxId = items.reduce((max, item) => {
      return item.id > max ? item.id : max;
    }, 0);
    
    setItems(prevItems => {
      return [...prevItems, {id: maxId + 1, text: val}]
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem onAddItem={onAddItem} />
      <FlatList 
        data={items}
        renderItem= {({item}) => <ListItem item={item} deleteItem={deleteItem} />} />
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;