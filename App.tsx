import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home3 from "./screens/Home3";
import Home2 from "./screens/Home2";
import Home1 from "./screens/Home1";
import { CountProvider } from "./contexts/countContext";



declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home1: undefined;
      Home2: undefined;
      Home3: undefined;
    }
  }
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <CountProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home1" component={Home1} />
          <Stack.Screen name="Home2" component={Home2} />
          <Stack.Screen name="Home3" component={Home3} />
        </Stack.Navigator>
      </NavigationContainer>
    </CountProvider>
  );
}

export default App;
