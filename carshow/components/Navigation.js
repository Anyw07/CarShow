import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importar Tela
import HomeScreen from './HomeScreen';
import CarTableScreen from './CarTableScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'CAR Show'}}/>
        <Stack.Screen name="CarTable" component={CarTableScreen} options={{title: 'Tabela de Carros'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;