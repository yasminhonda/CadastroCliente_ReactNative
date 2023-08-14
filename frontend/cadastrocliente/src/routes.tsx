//https://reactnavigation.org/docs/bottom-tab-navigator

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastrar';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ListaClientes} from './pages/ListaClientes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cadastro" component={Cadastro} />
        <Tab.Screen name="Lista" component={ListaClientes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
