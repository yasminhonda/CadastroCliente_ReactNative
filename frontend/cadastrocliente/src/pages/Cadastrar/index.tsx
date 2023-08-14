import React, {useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Cadastro = ({navigation}: {navigation: any}) => {
  const [nome, SetNome] = useState('');
  const [sobrenome, SetSobreNome] = useState('');

  function nomeChange(nome: any) {
    SetNome(nome);
  }

  function sobrenomeChange(sobrenome: any) {
    SetSobreNome(sobrenome);
  }

  function buttonPress() {
    //Validacao
    if (nome !== '') {
      Alert.alert('Cliente cadastrado!');
      fetch('http://192.168.1.101:8080/cliente', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: nome,
        }),
      });
      navigation.navigate('Lista');
    } else {
      Alert.alert('Insira valor valido');
    }
    // clear value
    SetNome('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        clearButtonMode="always"
        placeholder="Nome cliente"
        value={nome}
        // Suporte que aceita uma função a ser chamada toda vez que o texto é alterado
        onChangeText={nomeChange}
      />
      {/* <TextInput
        style={styles.input}
        clearButtonMode="always"
        placeholder="Sobrenome cliente"
        value={sobrenome}
        onChangeText={sobrenomeChange}
      /> */}
      {/* Componente envolve elemento que pode ser clicado e ao ser pressionado diminui opacidade, retornando feedback ao usuario */}
      <TouchableOpacity style={styles.button} onPress={buttonPress}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    padding: 2,
    paddingLeft: 10,
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ABABAB',
    padding: 7,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Cadastro;
