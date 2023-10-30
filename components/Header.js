import React from 'react'
import { Text, View } from 'react-native'
import {DarkStyle, LightStyle} from '../styles/Styles.js';


export default function Header() {

  return (
    <View style={DarkStyle.header}>
      <Text style={DarkStyle.title}>
        Alcometer
      </Text>
    </View>
  )
}