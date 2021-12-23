import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import useCount from "../hooks/useCount";


import { enableFreeze } from 'react-native-screens';
enableFreeze(true);

export default function Home1() {
  const navigation = useNavigation();
  const { count } = useCount();


    console.log("Home1");


  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home 1</Text>
      <Text>Count {count}</Text>
      <Button
        title="Go to screen 2"
        onPress={() => {
          navigation.navigate("Home2");
        }}
      />
    </View>
  );
}
