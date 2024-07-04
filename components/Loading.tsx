import { ActivityIndicator } from "react-native";
import { Div } from "react-native-magnus";

export default function Loading() {
  return (
    <Div flex={1} flexDir="column" justifyContent="center" alignItems="center" bg="white">
      <ActivityIndicator />
    </Div>
  );
}
