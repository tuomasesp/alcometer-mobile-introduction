const { StyleSheet } = require('react-native');
import Constants from 'expo-constants';


const DarkStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'turquoise',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight + 10,
  },
  button: {
      backgroundColor: 'paleturquoise',
      borderWidth: 1,
      padding: 5,
      marginLeft: 70,
      marginRight: 70,
      alignItems: 'center'
  },
  comp: {
    flexDirection: 'row',
    paddingLeft: 10,
    marginBottom: 30
  },
  result: {
    fontSize: 40
  },
  group: {
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  h2: {
    fontSize: 18,
    marginRight: 60
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'snow',
    padding: 7,
    marginRight: 237 
  },
  header: {
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: 'paleturquoise',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 20,
    backgroundColor: 'paleturquoise',
    flexDirection: 'row'
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: 'black',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
});

const LightStyle = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'paleturquoise',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight + 10,
  },
  button: {
      backgroundColor: 'turquoise',
      borderWidth: 1,
      padding: 5,
      marginLeft: 70,
      marginRight: 70,
      alignItems: 'center'
  },
  comp: {
    flexDirection: 'row',
    paddingLeft: 10,
    marginBottom: 30
  },
  result: {
    fontSize: 40,
  },
  group: {
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  h2: {
    fontSize: 18,
    marginRight: 60
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

export {DarkStyle, LightStyle};