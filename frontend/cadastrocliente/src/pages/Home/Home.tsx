import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const statusBarHeight: number | undefined = StatusBar.currentHeight;

export const Home = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>CLIENTE</Text>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Lista')}>
              <Text>Lista todos clientes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastrar')}>
              <Text>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content}>
          <Text>Conteudo</Text>
        </View>
        <View style={styles.content}>
          <Text>Conteudo</Text>
        </View>
        <View style={styles.content}>
          <Text>Conteudo</Text>
        </View>
        <View style={styles.content}>
          <Text>Conteudo</Text>
        </View>
        <View style={styles.content}>
          <Text>Conteudo</Text>
        </View>
        <View style={styles.content}>
          <Text>Conteudo</Text>
        </View>
        <View style={styles.content}>
          <Text>Conteudo</Text>
        </View>
        <View style={styles.content}>
          <Text>Conteudo</Text>
        </View>
        <View style={styles.content}>
          <Text>Conteudo</Text>
        </View>
        <View style={styles.content}>
          <Text>Conteudo</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default Home;
