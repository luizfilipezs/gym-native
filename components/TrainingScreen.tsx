import { RootStackParamList } from "../types/root-stack-param-list";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getTrainings } from "../utils/getTrainings";
import { FlatList, ListRenderItem, Pressable } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { AppScreen } from "../types/app-screen";
import { useCallback, useEffect } from "react";
import { Exercise } from "../types/exercise";
import { Checkbox, Div, Text } from "react-native-magnus";

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
      <Pressable onPress={openExercise}>
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

  return (
    <FlatList
      data={exercises}
      renderItem={renderExercise}
      keyExtractor={(_, index) => index.toString()}
    />
  );
}
