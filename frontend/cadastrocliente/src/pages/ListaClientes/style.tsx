import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#E8E8E8',
    justifyContent: 'space-between',
  },
  head: {height: 40, backgroundColor: '#CFD4DA'},
  content: {backgroundColor: '#f1f8ff'},
  text: {margin: 6, color: '#000000'},
  button: {
    backgroundColor: '#ABABAB',
    padding: 7,
    borderRadius: 5,
    width: '20%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
