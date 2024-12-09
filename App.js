import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CalculatorScreen from './src/tampilan/tampilan';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CalculatorScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
