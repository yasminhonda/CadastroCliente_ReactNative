import React from 'react';
import Routes from './src/routes';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home/Home';
import {ListaClientes} from './src/pages/ListaClientes';
import Cadastrar from './src/pages/Cadastrar';
import {EditarClientes} from './src/pages/EditarClientes';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <>
      {/* <Routes /> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cadastrar" component={Cadastrar} />
          <Stack.Screen name="Lista" component={ListaClientes} />
          <Stack.Screen name="Editar" component={EditarClientes} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
