import { useState } from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Styles from '../styles/Styles.js'



export default function Gender() {

const genders = ['Male', 'Female'];

const [gender, setGender] = useState('Male');

  return (
    <View style={Styles.container}>
      <RadioButton.Group value={gender} onValueChange={g => setGender(g)}>
        {genders.map(g => 
        <View key={g} style={Styles.button}>
        <RadioButton value={g} />
        <Text>{g}</Text>
        </View>
        )}
        
      </RadioButton.Group>
    </View>
  );
}