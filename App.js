import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Styles from './styles/Styles.js';


export default function App() {
  return (
    <ScrollView style={Styles.container}>
      <Text>Alcometer</Text>
      <Text>Weight</Text>
      <TextInput 
        keyboardType='number-pad'
      />
      <Text>Bottles</Text>

      <Text>Hours</Text>

      <Text>Result</Text>
      <Pressable 
      
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
}


