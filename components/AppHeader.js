import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon Application React Native</Text>
      <Text style={styles.subtitle}>Premier composant réutilisable</Text>
      <Text style={styles.description}>
        Apprends à créer des composants, les réutiliser et structurer ton app.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4CE14',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginTop: 4,
  },
  description: {
    fontSize: 13,
    color: '#333',
    textAlign: 'center',
    marginTop: 8,
  },
});
