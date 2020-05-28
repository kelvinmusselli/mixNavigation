import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import ListPokemons from './pages/ListPokemons';
import AllOfPokemon from './pages/AllOfPokemon';

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Pokédex" component={Home} />
    </HomeStack.Navigator>
  );
};

const ListAllStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Todos" component={ListPokemons} />
    </HomeStack.Navigator>
  );
};

const AllofpokemonStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Sobre" component={AllOfPokemon} />
    </HomeStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Pokédex" component={HomeStackScreen} />
    <Tabs.Screen name="Todos" component={ListAllStack} />
    <Tabs.Screen name="Sobre" component={AllofpokemonStack} />
  </Tabs.Navigator>
);

const Routes = () => {
  return <TabsScreen />;
};

export default Routes;
