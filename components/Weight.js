import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Styles from '../styles/Styles.js';

export default function Weight() {
  const [weight, setWeight] = useState(0)
    return (
<View>
<Text>Weight</Text>
      <TextInput 
        style={Styles.input}
        keyboardType='number-pad'
        placeholder='Type in your weight'
        onChangeText={w => setWeight(w)}
        value={weight}
      />
</View>
    )
}