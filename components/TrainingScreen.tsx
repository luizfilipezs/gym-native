import { RootStackParamList } from "../types/root-stack-param-list";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getTrainings } from "../utils/getTrainings";
import { FlatList, ScrollView, Text } from "react-native";
import { GoBackButton } from "./GoBackButton";
import { RouteProp } from "@react-navigation/native";
import { AppScreen } from "../types/app-screen";

type TrainingScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, AppScreen.TrainingDetail>;
  route: RouteProp<RootStackParamList, AppScreen.TrainingDetail>;
};

export default function TrainingScreen({ navigation, route }: TrainingScreenProps) {
  const { index } = route.params;
  const training = getTrainings()[index];

  navigation.setOptions({
    title: training.day,
  });

  return (
    <ScrollView>
      <GoBackButton navigation={navigation} />
      <Text>{training.day}</Text>
      <FlatList
        data={training.exercices}
        renderItem={({ item, index: exerciseIndex }) => (
          <Text
            onPress={() => navigation.navigate(AppScreen.ExerciseDetail, {
              trainingIndex: index,
              index: exerciseIndex,
            })}
          >{item.name}</Text>
        )}
      />
    </ScrollView>
  );
}