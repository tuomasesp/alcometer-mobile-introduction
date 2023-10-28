import { useState } from 'react'
import { Switch, Pressable, ScrollView, Text, TextInput, View, NumericInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import FormNumericInput from 'react-native-numeric-input';
import Styles from './styles/Styles.js';




export default function App() {
  const [isOn, setIsOn] = useState(false);
  const info = isOn ? "Switch to light mode" : "Switch to dark mode"
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [weight, setWeight] = useState(0)
  const genders = ['Male', 'Female'];
  const [gender, setGender] = useState('Male')
  const [result, setResult] = useState(0);

  function calculateAlcoholLevel() {

    let alcohol = 0;
    let grams = bottles * 0.33 * 8 * 4.5;
    let left = grams - ((weight/10)*time)

    if (gender === 'Male') {
      alcohol = left / (weight * 0.7);
    } else {
      alcohol = left / (weight * 0.6);
    }

    if (alcohol < 0) {
      alcohol = 0;
    }
    setResult(alcohol);
  }

  return (
    <View style={Styles.container}>
    <ScrollView>
      <Text>Alcometer</Text>
      <Text>{info}</Text>
      <Switch
      value={isOn}
      onValueChange={ newValue => setIsOn(newValue)}
      />
      
      <Text style={Styles.h2}>Alcometer</Text>
      <TextInput
        style={Styles.input}
        keyboardType='number-pad'
        placeholder='Type in your weight'
        onChangeText={w => setWeight(w)}
        value={weight}
        >
      </TextInput>
      
      <Text style={Styles.h2}>Bottles</Text>
      <FormNumericInput
      onChange={b => setBottles(b)}
      value={bottles} 
      step={1}
      minValue={0}>
      </FormNumericInput> 
      
      <Text style={Styles.h2}>Hours</Text>
      <FormNumericInput
        onChange={t => setTime(t)}
        value={time} 
        step={1}
        minValue={0}>
      </FormNumericInput> 
      <Text style={Styles.h2}>Gender</Text>
        <RadioButton.Group value={gender} onValueChange={g => setGender(g)}>
        {genders.map(g => 
        <View key={g} style={Styles.button}>
        <RadioButton value={g} />
        <Text>{g}</Text>
        </View>
        )}
      </RadioButton.Group>
      <Text style={Styles.h2}>Result</Text>
      <Text style={Styles.result}>
        {result.toFixed(2)}
      </Text>
      <Pressable 
      style={Styles.button}
      onPress={() => calculateAlcoholLevel()}
      >
        <Text>Calculate</Text>
      </Pressable>
      <Text></Text>
    </ScrollView>
    </View>
  );
}


