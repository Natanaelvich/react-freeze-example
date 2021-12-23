import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import useCount from "../hooks/useCount";


import { enableFreeze } from 'react-native-screens';
enableFreeze(true);

export default function Home2() {
  const navigation = useNavigation();

  const { count, incrementCount, decrementCount } = useCount();

 
    console.log("Home2");


  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home 2</Text>
      <Text>Count {count}</Text>
      <Button
        title="Go to screen 3"
        onPress={() => {
          navigation.navigate("Home3");
        }}
      />
      <Button title="Increment" onPress={incrementCount} />
      <Button title="Decrement" onPress={decrementCount} />
      <Button title="Go Back" onPress={navigation.goBack} />
    </View>
  );
}
