import {useState} from 'react'
import { Text, View } from 'react-native'
import Styles from '../styles/Styles.js'
import Gender from './Gender.js'

export default function Calculate() {
    
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);
  
    function calcSum(){
      let sum = Number(num1) + Number(num2);
      setSum(sum);
    }
    
    
      return (
        <View style={Styles.container}>

          <Text>result</Text>
        </View>
      );
    }