import { useState } from 'react';
import { Text, View } from 'react-native';
import FormNumericInput from 'react-native-numeric-input';
import Styles from '../styles/Styles.js'

export default function Numerics() {

  

    const [value, setValue] = useState(0);

    return(
        <View style={Styles.container} >
            <FormNumericInput onChange={v => setValue(v)} 
            value={value} 
            step={1}
            minValue={0}
            rightButtonBackgroundColor={'turquoise'}
            leftButtonBackgroundColor={'turquoise'}
            
            />
            
        </View>
    )
}