import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Display = ({ result }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 40,
    width: '100%',
    height: 150,
    alignItems: 'flex-end',
    borderBottomWidth: 2,
    borderBottomColor: '#666',
  },
  result: {
    fontSize: 55,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Display;
