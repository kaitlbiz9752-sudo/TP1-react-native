import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import MainCard from '../../components/MainCard';

export default function Index() {
  return (
    <View style={styles.container}>
      <AppHeader />

      <View style={styles.content}>
        <MainCard />

        <Text style={styles.text}>
          Contenu principal de l’application
        </Text>
      </View>

      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24, // si ça râle, enlève cette ligne, c’est juste pour l’espace
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
