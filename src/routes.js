import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Balance from './pages/Balance';
import Config from './pages/Config';
import AllOfPokemon from './pages/AllOfPokemon';

import Configuration from './pages/Config';

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Pokedex" component={Home} />
    </HomeStack.Navigator>
  );
};
const BalanceStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Balance" component={Balance} />
    </HomeStack.Navigator>
  );
};
const ConfigStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Config" component={Config} />
    </HomeStack.Navigator>
  );
};

const AllofpokemonStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="AllOfPokemon" component={AllOfPokemon} />
    </HomeStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Pokedex" component={HomeStackScreen} />
    <Tabs.Screen name="Balance" component={BalanceStackScreen} />
    <Tabs.Screen name="Config" component={ConfigStackScreen} />
    <Tabs.Screen name="AllOfPokemon" component={AllofpokemonStack} />
  </Tabs.Navigator>
);

const HomeScreenStack = createStackNavigator();
const HomeStack2 = () => (
  <HomeScreenStack.Navigator>
    <HomeScreenStack.Screen name="Home" component={Configuration} />
  </HomeScreenStack.Navigator>
);

//ESTE MENU É O LATERAL
const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Configurações" component={HomeStack2} />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="App" component={DrawerScreen} />
  </RootStack.Navigator>
);

const Routes = () => {
  return <RootStackScreen />;
};

export default Routes;
