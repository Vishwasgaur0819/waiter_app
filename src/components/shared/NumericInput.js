import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NumericInput = ({ initialValue = 0, onValueChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    const newValue = value + 1;
    setValue(newValue);
    if (onValueChange) onValueChange(newValue);
  };

  const handleDecrement = () => {
    if (value > 0) {
      const newValue = value - 1;
      setValue(newValue);
      if (onValueChange) onValueChange(newValue);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDecrement} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity onPress={handleIncrement} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // width: '100%',
    flex:1,
    height: 25,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  button: {
    width: 22,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  buttonText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  value: {
    fontSize: 10,
    textAlign: 'center',
    flex: 1,
    fontWeight: 'bold',
  },
});

export default NumericInput;
