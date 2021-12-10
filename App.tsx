import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Add from "./src/components/aluno/input/Add";
import Edit from "./src/components/aluno/input/Edit";
import Listar from "./src/components/aluno/list/List";
import Home from "./src/components/Home"; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Novo" component={Add} />
          <Stack.Screen name="Editar" component={Edit} />
          <Stack.Screen name="Listar" component={Listar} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;