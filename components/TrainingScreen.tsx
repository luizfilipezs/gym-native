import { RootStackParamList } from "../types/root-stack-param-list";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getTrainings } from "../utils/getTrainings";
import { FlatList, ListRenderItem } from "react-native";
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
  const { day: trainingDay, exercises } = getTrainings()[trainingIndex];

  useEffect(() => {
    navigation.setOptions({ title: trainingDay });
  }, [navigation, trainingDay]);

  const renderExercise: ListRenderItem<Exercise> = useCallback(({ item, index }) => {
    const openExercise = () => {
      navigation.navigate(AppScreen.Exercise, {
        trainingIndex,
        index,
      });
    };

    return (
      <ListItem
        title={item.name}
        onPress={openExercise}
      />
    );
  }, [navigation, trainingIndex]);

  return (
    <FlatList 
      data={exercises} 
      renderItem={renderExercise} 
      keyExtractor={(_, index) => index.toString()} 
    />
  );
}
