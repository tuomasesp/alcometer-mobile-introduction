import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight, ScrollView, Text, TextInput, View } from 'react-native';
import Styles from './styles/Styles.js';
import Gender from './components/Gender.js';
import Weight from './components/Weight.js';
import Numerics from './components/Numerics.js';



export default function App() {
  return (
    <View style={Styles.container}>
    <ScrollView >
    
      <Text>Alcometer</Text>
      <Weight />
      <Text>Bottles</Text>
      <Numerics />
      <Text>Hours</Text>
      <Numerics />
      <Gender />
      <Text>Result</Text>
      <Text>
        {Numerics.value}
      </Text>
      <TouchableHighlight 
      style={Styles.button}
      >
        <Text>Calculate</Text>
      </TouchableHighlight>
      
      
      <StatusBar style="auto" />
    
    </ScrollView>
    </View>
  );
}


