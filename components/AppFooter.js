import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const APP_NAME = 'MonApp';

export default function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {APP_NAME} • All rights reserved, {currentYear}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4CE14',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
});
