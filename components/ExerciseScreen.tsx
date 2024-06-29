import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/root-stack-param-list";
import { Image, ScrollView, StyleSheet } from "react-native";
import { getTrainings } from "../utils/getTrainings";
import { AppScreen } from "../types/app-screen";
import { RouteProp } from "@react-navigation/native";
import { Text } from "@react-native-material/core";

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
      <Image source={{ uri: exercise.image }} style={styles.image}></Image>
      <Text>{exercise.description}</Text>
      <Text>{exercise.series}x{exercise.reps}</Text>
      <Text>{exercise.weight}kg</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
});