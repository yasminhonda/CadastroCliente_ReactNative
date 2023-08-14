import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export const EditarClientes = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [nomeEdit, SetNome] = useState('');
  //   const [sobrenome, SetSobreNome] = useState('');
  const nome = route.params.nome;
  const id = route.params.paramKey;

  function nomeChange(nome: string) {
    SetNome(nome);
  }

  //   function sobrenomeChange(sobrenome: any) {
  //     SetSobreNome(sobrenome);
  //   }

  //   function buttonPress() {
  //     //Validacao
  //     if (nome && sobrenome !== '') {
  //       Alert.alert('Cliente cadastrado!');
  //       console.log(nome, sobrenome);
  //       fetch('http://192.168.1.101:8080/cliente', {
  //         method: 'PUT',
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           nome: nome,
  //         }),
  //       });
  //     } else {
  //       Alert.alert('Insira valor valido');
  //     }
  //     // clear value
  //     SetNome('');
  //     SetSobreNome('');
  // }
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
      {/* <TextInput
        style={styles.input}
        clearButtonMode="always"
        placeholder="Sobrenome cliente"
        value={sobrenome}
        onChangeText={sobrenomeChange}
      /> */}
      {/* Componente envolve elemento que pode ser clicado e ao ser pressionado diminui opacidade, retornando feedback ao usuario */}
      <TouchableOpacity style={styles.button} onPress={putClient}>
        <Text style={styles.buttonText}>Alterar cliente</Text>
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
