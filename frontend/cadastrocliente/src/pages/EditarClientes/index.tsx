import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './style';

export const EditarClientes = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [nomeEdit, SetNome] = useState('');

  const nome = route.params.nome;
  const id = route.params.paramKey;

  function nomeChange(nome: string) {
    SetNome(nome);
  }

  const putClient = async () => {
    fetch('http://192.168.1.101:8080/cliente', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        nome: nomeEdit,
      }),
    });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        clearButtonMode="always"
        placeholder={nome}
        value={nomeEdit}
        // Suporte que aceita uma função a ser chamada toda vez que o texto é alterado
        onChangeText={nomeChange}
      />

      {/* Componente envolve elemento que pode ser clicado e ao ser pressionado diminui opacidade, retornando feedback ao usuario */}
      <TouchableOpacity style={styles.button} onPress={putClient}>
        <Text style={styles.buttonText}>Alterar cliente</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
