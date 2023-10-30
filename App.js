import { useState } from 'react'
import { Alert, Switch, Pressable, ScrollView, Text, TextInput, View, NumericInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import FormNumericInput from 'react-native-numeric-input';
import {DarkStyle, LightStyle} from './styles/Styles.js';
import Header from './components/Header.js'
import Footer from './components/Footer.js'


export default function App() {

  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [weight, setWeight] = useState(0)
  const genders = ['Male', 'Female'];
  const [gender, setGender] = useState('Male')
  const [result, setResult] = useState(0);
  const [style, setStyle] = useState(false);

  const changeStyle = style ? DarkStyle : LightStyle;
  
  function checkWeight() {
      
    const weightCheck = weight;

    if (weightCheck == '' || weightCheck == 0) {
      return Alert.alert('Check the weight!')
    }
  }

  function calculateAlcoholLevel() {

    let alcohol = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
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
      <ScrollView>
        <View style={changeStyle.container}>
          <Header style={changeStyle.header} />
          <Switch
            value={style}
            onValueChange={ newValue => setStyle(newValue)} 
            thumbColor='snow'
            trackColor={{false: 'turquoise', true: 'paleturquoise'}} />
          <View style={changeStyle.comp}>
            <Text style={changeStyle.h2}>Weight</Text>
            <TextInput
              style={changeStyle.input}
              keyboardType='number-pad'
              placeholder='Type in your weight'
              onChangeText={w => setWeight(w)} >
            </TextInput>
          </View>
          <View style={changeStyle.comp}>
            <Text style={changeStyle.h2}>Bottles</Text>
            <FormNumericInput
              onChange={b => setBottles(b)}
              value={bottles} 
              step={1}
              minValue={0}
              borderColor='black'>
            </FormNumericInput> 
          </View>
          <View style={changeStyle.comp}>
            <Text style={changeStyle.h2}>Hours  </Text>
            <FormNumericInput
              onChange={t => setTime(t)}
              value={time} 
              step={1}
              minValue={0}
              borderColor='black'>
            </FormNumericInput> 
          </View>
          <View style={changeStyle.comp}>
            <Text style={changeStyle.h2}>Gender</Text>
            <RadioButton.Group value={gender} onValueChange={g => setGender(g)} style={changeStyle.group}>
              {genders.map(g => 
              <View key={g} style={changeStyle.comp}>
              <RadioButton value={g} />
              <Text>{g}</Text>
              </View>
              )}
            </RadioButton.Group>
          </View>
          <View style={changeStyle.comp}>
            <Text style={changeStyle.h2}>Result</Text>
            <Text style={[changeStyle.result, {color:(() => {
              if (result == 0) {
                return 'green';
              }else if (result >= 0 && result <= 0.5){
                return 'yellow'
              }else {
                return 'red';
              }
            })()}]}>
              {result.toFixed(2)}
            </Text>
          </View>
          <Pressable 
            style={changeStyle.button}
            onPress={() => { 
              checkWeight();
              calculateAlcoholLevel()}} >
            <Text>Calculate</Text>
          </Pressable>
          <Footer />    
        </View>
      </ScrollView>
      
    );
  }


