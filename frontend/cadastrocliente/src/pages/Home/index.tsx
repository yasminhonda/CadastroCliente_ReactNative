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
          <Text style={styles.title}>CLIENTES</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastrar')}>
            <Text style={styles.text}>Cadastrar cliente</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Lista')}>
            <Text style={styles.text}>Listar todos clientes</Text>
          </TouchableOpacity>
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
