import {Platform, StatusBar, StyleSheet} from 'react-native';

const statusBarHeight: number | undefined = StatusBar.currentHeight;

export default StyleSheet.create({
  container: {
    backgroundColor: '#040316',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
  },
  content: {
    alignSelf: 'center',
    flex: 1,
    width: '98%',
    height: 120,
    marginBottom: 20,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: 'black',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
  },
});
