import React from 'react'
import { Text, View } from 'react-native'
import {DarkStyle, LightStyle} from '../styles/Styles.js'


export default function Footer() {
  return (
    <View style={DarkStyle.footer}>
      <Text style={DarkStyle.author}>
        Tested with Android
      </Text>
    </View>
  )
}