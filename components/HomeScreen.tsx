import { ScrollView, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/root-stack-param-list";
import { AppScreen } from "../types/app-screen";
import { Div, Text } from "react-native-magnus";
import { useCallback } from "react";
import { Training } from "../types/training";
import Loading from "./Loading";
import { useTrainings } from "../utils/useTrainings";
import TrainingListItem from "./TrainingListItem";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, AppScreen.Home>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { loadingTrainings, trainings } = useTrainings();

  const renderTrainingListItem = useCallback((item: Training, index: number) => (
    <TrainingListItem
      key={index}
      training={item}
      onPress={() => {
        navigation.navigate(AppScreen.Training, { index });
      }}
    />
  ), [navigation]);

  if (loadingTrainings) {
    return (
      <Loading />
    );
  }

  return (
    <Div flex={1} bg="white">
      <ScrollView contentContainerStyle={styles.container}>
        <Text fontSize="6xl" fontWeight="bold" textAlign="center" mb={35}>
          Qual o treino de hoje? 💪
        </Text>
        <Div flexDir="column" style={{ gap: 15 }}>
          {trainings.map(renderTrainingListItem)}
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
