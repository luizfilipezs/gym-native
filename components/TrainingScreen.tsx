import { RootStackParamList } from "../types/root-stack-param-list";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList, ListRenderItem, Pressable } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { AppScreen } from "../types/app-screen";
import { useCallback, useEffect } from "react";
import { Exercise } from "../types/exercise";
import { Checkbox, Div, Text } from "react-native-magnus";
import Loading from "./Loading";
import { useTraining } from "../utils/useTraining";

type TrainingScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, AppScreen.Training>;
  route: RouteProp<RootStackParamList, AppScreen.Training>;
};

export default function TrainingScreen({ navigation, route }: TrainingScreenProps) {
  const { index: trainingIndex } = route.params;
  const { loadingTraining, training } = useTraining(trainingIndex);

  const renderExerciseListItem: ListRenderItem<Exercise> = useCallback(({ item, index }) => {
    const openExercise = () => {
      navigation.navigate(AppScreen.Exercise, {
        trainingIndex,
        index,
      });
    };

    return (
      <Pressable key={index} onPress={openExercise}>
        <Div
          flexDir="row"
          alignItems="center"
          px={20}
          py={15}
          borderWidth={1}
          borderColor="#f5f5f5"
          bg="#fff"
          style={{ gap: 10 }}
        >
          <Checkbox />
          <Text>
            {item.name}
          </Text>
        </Div>
      </Pressable>
    );
  }, [navigation, trainingIndex]);

  useEffect(() => {
    if (training) {
      navigation.setOptions({ title: training.name });
    }
  }, [navigation, training]);

  if (loadingTraining) {
    return (
      <Loading />
    );
  }

  return (
    <FlatList
      data={training!.exercises}
      renderItem={renderExerciseListItem}
    />
  );
}
