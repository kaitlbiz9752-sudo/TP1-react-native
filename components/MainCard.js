import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MainCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Bienvenue dans MonApp</Text>
      <Text style={styles.body}>
        Ceci est une carte centrale réutilisable. Tu peux y afficher du texte,
        des infos, ou plus tard des boutons et des images.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 24,
    marginHorizontal: 16,
    borderRadius: 16,
    elevation: 4,         // ombre Android
    shadowColor: '#000',  // ombre iOS
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
    textAlign: 'center',
  },
  body: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});
