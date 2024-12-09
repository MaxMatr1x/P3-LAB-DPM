import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ label, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={() => onPress(label)}>
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
  },
  text: {
    fontSize: 20,
  },
});

export default Button;
