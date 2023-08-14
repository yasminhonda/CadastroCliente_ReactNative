import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    justifyContent: 'space-between',
  },
  head: {
    height: 40,
    backgroundColor: '#D6DBEE',
  },
  content: {
    backgroundColor: '#f1f8ff',
  },
  textHead: {
    margin: 6,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  text: {
    margin: 6,
    color: '#000000',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#D6DBEE',
    height: '12%',
    borderRadius: 50,
    width: '22%',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
    paddingBottom: 2,
  },
  buttonText: {
    color: '#4209FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
