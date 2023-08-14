import React, {useEffect, useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './style';

const Cadastro = ({navigation}: {navigation: any}) => {
  const [nome, SetNome] = useState('');

  function nomeChange(nome: any) {
    SetNome(nome);
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
      <Text style={styles.label}>Nome do cliente:</Text>
      <TextInput
        style={styles.input}
        clearButtonMode="always"
        placeholder="Digite aqui..."
        value={nome}
        onChangeText={nomeChange}
      />

      <TouchableOpacity style={styles.button} onPress={buttonPress}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Cadastro;
