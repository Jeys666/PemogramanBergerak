import React, { useState } from 'react';
import { Card } from 'react-native-paper';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

export default function AddList({ navigation }) {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim()) {
      setTodos([{ id: todos.length, text }, ...todos]);
      setText('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Card style={styles.card}>
      <SafeAreaView style={styles.container}>
        <View style={styles.section}>
          <View style={styles.center}>
            <Text style={styles.title}>Catatan</Text>
          </View>
        </View>

        <View style={styles.section}>
          <TextInput
            style={styles.input}
            placeholder="Isi Catatan"
            value={text}
            onChangeText={setText}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleAddTodo}
          >
            <Text style={styles.buttonText}>Tambahkan</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={styles.section}>
            <FlatList
              data={todos}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.todoItem}>
                  <Text style={styles.item}>{item.text}</Text>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => handleDeleteTodo(item.id)}
                  >
                    <Text style={styles.deleteButtonText}>Hapus</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '95%',
    height: '98%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00796b',
    textAlign: 'center',
  },
  input: {
    fontSize: 16,
    height: 50,
    borderColor: '#00796b',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    backgroundColor: '#00796b',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  item: {
    fontSize: 18,
    color: '#00796b',
  },
  deleteButton: {
    backgroundColor: '#FF6347',
    padding: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
