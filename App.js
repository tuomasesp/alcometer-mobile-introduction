import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight, ScrollView, Text, TextInput, View } from 'react-native';
import Styles from './styles/Styles.js';
import Gender from './components/Gender.js';
import Weight from './components/Weight.js';


export default function App() {
  return (
    <ScrollView >
    <View style={Styles.container}>
      <Text>Alcometer</Text>
      <Weight />
      <Text>Bottles</Text>

      <Text>Hours</Text>

      <Gender />
      <Text>Result</Text>
      <TouchableHighlight style={Styles.button}>
        <Text>Calculate</Text>
      </TouchableHighlight>
      
      
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}


