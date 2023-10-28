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
    },
    numeric: {
      rightButtonBackgroundColor: 'paleturquoise'
    },
    result: {
      fontSize: 40,

    },
    h2: {
      fontSize: 18,
    },
    input: {
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: 'snow',
      padding: 7,
      marginRight: 250,
      marginLeft: 10 
    }
  });