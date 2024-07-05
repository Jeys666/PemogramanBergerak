import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Card } from 'react-native-paper';

const App = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://cdn.mmoculture.com/mmo-images/2021/05/logo-baru-mlbb-1.jpg' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Ini Mobalog</Text>
          <Text style={styles.description}>Aplikasi Terbaik untuk Mobile Legends</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  card: {
    width: '85%',
    padding: 30,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  profileSection: {
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderColor: '#00796b',
    borderWidth: 3,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#00796b',
  },
});

export default App;
