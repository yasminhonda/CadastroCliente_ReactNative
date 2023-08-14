import {Platform, StatusBar, StyleSheet} from 'react-native';

const statusBarHeight: number | undefined = StatusBar.currentHeight;

export default StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
    marginLeft: 10,
  },
  content: {
    flex: 1,
    width: '98%',
    height: 120,
    marginBottom: 20,
    alignItems: 'flex-start',
    color: 'black',
    backgroundColor: '#D6DBEE',
    padding: 15,
  },
  text: {
    fontSize: 15,
  },
  title: {
    fontWeight: 'bold',
    color: '#1800F3',
    fontSize: 20,
    marginBottom: 5,
  },
});
