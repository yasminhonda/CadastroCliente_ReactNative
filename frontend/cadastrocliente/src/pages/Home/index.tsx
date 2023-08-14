import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';

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

export default Home;
