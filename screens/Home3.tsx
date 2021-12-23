import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import useCount from "../hooks/useCount";

export default function Home3() {
  const { goBack } = useNavigation();

  const { count, incrementCount, decrementCount } = useCount();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home 3</Text>
      <Text>Count {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
      <Button title="Decrement" onPress={decrementCount} />
      <Button title="Go Back" onPress={goBack} />
    </View>
  );
}
