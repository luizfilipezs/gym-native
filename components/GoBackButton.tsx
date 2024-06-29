import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/root-stack-param-list";
import { Button } from "react-native";

type GoBackButtonProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export function GoBackButton({ navigation }: GoBackButtonProps) {
  if (!navigation.canGoBack()) {
    return null;
  }

  return (
    <Button title="Voltar" onPress={() => navigation.goBack()} />
  );
}
