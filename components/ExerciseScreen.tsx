import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/root-stack-param-list";
import { ScrollView } from "react-native";
import { AppScreen } from "../types/app-screen";
import { RouteProp } from "@react-navigation/native";
import { useEffect } from "react";
import ExerciseDetail from "./ExerciseDetail";
import { Div, Image } from "react-native-magnus";
import { getFullWidth } from "../utils/getFullWidth";
import Loading from "./Loading";
import { useExercise } from "../utils/useExercise";

type ExerciseScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, AppScreen.Exercise>;
  route: RouteProp<RootStackParamList, AppScreen.Exercise>;
};

export default function ExerciseScreen({ navigation, route }: ExerciseScreenProps) {
  const { trainingIndex, index } = route.params;
  const { loadingExercise, exercise } = useExercise({ trainingIndex, exerciseIndex: index });

  useEffect(() => {
    if (exercise) {
      navigation.setOptions({ title: exercise.name });
    }
  }, [navigation, exercise]);

  if (loadingExercise) {
    return (
      <Loading />
    );
  }

  return (
    <ScrollView>
      <Image
        h={200}
        w={getFullWidth()}
        source={{ uri: exercise!.image }}
      />
      <Div
        flexDir="column"
        m={20}
        p={15}
        bg="#fff"
        rounded="md"
        style={{ gap: 10 }}
      >
        <ExerciseDetail label="Descricão" text={exercise!.description} />
        <ExerciseDetail label="Séries" text={`${exercise!.series}x${exercise!.reps}`} />
        <ExerciseDetail label="Peso" text={`${exercise!.weight}kg`} />
      </Div>
    </ScrollView>
  );
}
