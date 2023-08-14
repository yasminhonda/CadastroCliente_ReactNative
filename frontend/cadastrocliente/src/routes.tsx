//https://reactnavigation.org/docs/bottom-tab-navigator

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {ListaClientes} from './pages/ListaClientes';
import {EditarClientes} from './pages/EditarClientes';
import Home from './pages/Home';
import Cadastrar from './pages/Cadastrar';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Lista" component={ListaClientes} />
        <Stack.Screen name="Editar" component={EditarClientes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
