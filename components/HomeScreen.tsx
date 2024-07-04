import { Pressable, ScrollView, StyleSheet } from "react-native";
import { getTrainings } from "../utils/getTrainings";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/root-stack-param-list";
import { AppScreen } from "../types/app-screen";
import { Div, Text } from "react-native-magnus";
import { useCallback } from "react";
import { Training } from "../types/training";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, AppScreen.Home>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const trainings = getTrainings();

  const renderTraining = useCallback((training: Training, trainingIndex: number) => (
    <Pressable
      key={trainingIndex}
      onPress={() => navigation.navigate(AppScreen.Training, { index: trainingIndex })}
    >
      <Div
        bg="#f5f5f5"
        px={35}
        py={20}
        rounded="lg"
      >
        <Text
          fontSize="2xl"
          textAlign="center"
        >
          {training.day}
        </Text>
      </Div>
    </Pressable>
  ), [navigation]);

  return (
    <Div flex={1} bg="#fff">
      <ScrollView contentContainerStyle={styles.container}>
        <Text
          fontSize="6xl"
          fontWeight="bold"
          textAlign="center"
          mb={35}
        >
          Qual o treino de hoje? 💪
        </Text>
        <Div flexDir="column" style={{ gap: 15}}>
          {trainings.map(renderTraining)}
        </Div>
      </ScrollView>
    </Div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
