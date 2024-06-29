import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/root-stack-param-list";
import { ScrollView, Text } from "react-native";
import { getTrainings } from "../utils/getTrainings";
import { GoBackButton } from "./GoBackButton";
import { AppScreen } from "../types/app-screen";
import { RouteProp } from "@react-navigation/native";

type ExerciseScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, AppScreen.ExerciseDetail>;
  route: RouteProp<RootStackParamList, AppScreen.ExerciseDetail>;
};

export default function ExerciseScreen({ navigation, route }: ExerciseScreenProps) {
  const { trainingIndex, index } = route.params;
  const training = getTrainings()[trainingIndex];
  const exercise = training.exercices[index];

  navigation.setOptions({
    title: exercise.name,
  });

  return (
    <ScrollView>
      <GoBackButton navigation={navigation} />
      <Text>{exercise.name}</Text>
      <Text>{exercise.image}</Text>
      <Text>{exercise.description}</Text>
      <Text>{exercise.series}x{exercise.reps}</Text>
      <Text>{exercise.weight}kg</Text>
    </ScrollView>
  );
}