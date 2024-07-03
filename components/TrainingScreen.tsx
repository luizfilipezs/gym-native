import { RootStackParamList } from "../types/root-stack-param-list";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getTrainings } from "../utils/getTrainings";
import { FlatList, ListRenderItem, ScrollView } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { AppScreen } from "../types/app-screen";
import { ListItem } from "@react-native-material/core";
import { useCallback, useEffect } from "react";
import { Exercise } from "../types/exercise";

type TrainingScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, AppScreen.Training>;
  route: RouteProp<RootStackParamList, AppScreen.Training>;
};

export default function TrainingScreen({ navigation, route }: TrainingScreenProps) {
  const { index: trainingIndex } = route.params;
  const training = getTrainings()[trainingIndex];

  useEffect(() => {
    navigation.setOptions({
      title: training.day,
    });
  }, []);

  const renderExercise: ListRenderItem<Exercise> = useCallback(({ item, index }) => {
    return (
      <ListItem
        title={item.name}
        onPress={() => navigation.navigate(AppScreen.Exercise, { trainingIndex, index })}
      />
    );
  }, [navigation, trainingIndex]);

  return (
    <ScrollView>
      <FlatList data={training.exercices} renderItem={renderExercise} />
    </ScrollView>
  );
}