import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
// import { MD3LightTheme, MD3DarkTheme, Provider } from 'react-native-paper';

export default StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: 'paleturquoise',
      alignItems: 'stretch',
      justifyContent: 'center',
      marginTop: Constants.statusBarHeight + 10,
    },
    button: {
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: 'turquoise',
        borderWidth: 1,
        padding: 5
    }
  });