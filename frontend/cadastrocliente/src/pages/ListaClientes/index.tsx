import {useEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

import styles from './style';

export const ListaClientes = ({navigation}: {navigation: any}) => {
  const url = 'http://192.168.1.101:8080/cliente';
  const [clientes, setClientes] = useState([]);

  const getClientes = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setClientes(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteClient = async (id: number) => {
    console.log(id);
    fetch(url + '/' + id, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  };

  useEffect(() => {
    getClientes();
  });

  const table = {
    tableHead: ['ID', 'Nome', 'x', 'Editar'],
    tableData: clientes.map((d: any) => [
      d.id,
      d.nome,
      <TouchableOpacity onPress={() => deleteClient(d.id)}>
        <Text>Deletar</Text>
      </TouchableOpacity>,
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Editar', {
            paramKey: d.id,
            nome: d.nome,
          });
        }}>
        <Text>Editar</Text>
      </TouchableOpacity>,
    ]),
  };
  return (
    <SafeAreaView style={styles.container}>
      <Table borderStyle={{borderWidth: 2, borderColor: '#ABABAB'}}>
        <Row
          data={table.tableHead}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows
          data={table.tableData}
          style={styles.content}
          textStyle={styles.text}
        />
      </Table>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
