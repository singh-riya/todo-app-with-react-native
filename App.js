import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { Header } from './app/components/Header';
import { TodoItem } from './app/components/TodoItem';
import AddTodo from './app/components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn React Native', key: '1' },
    { text: 'Learn React', key: '2' },
    { text: 'Learn Redux', key: '3' },
    { text: 'Learn React Hooks', key: '4' },
    { text: 'Learn React Native', key: '5' },
    { text: 'Learn React', key: '6' },
    { text: 'Learn Redux', key: '7' },
    { text: 'Learn React Hooks', key: '8' },
    { text: 'Learn React Native', key: '9' },
    { text: 'Learn React', key: '10' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {

    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      })
    } else {
      Alert.alert('Oops', 'Todo must be over 3 characters long', [{ text: 'Understood', onPress: () => console.log('alert closed') }]);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
});
