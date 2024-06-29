import { RootStackParamList } from "../types/root-stack-param-list";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getTrainings } from "../utils/getTrainings";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { AppScreen } from "../types/app-screen";
import { ListItem } from "@react-native-material/core";

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
      <FlatList
        data={training.exercices}
        renderItem={({ item, index: exerciseIndex }) => (
         <ListItem
            title={item.name}
            onPress={() => navigation.navigate(AppScreen.ExerciseDetail, {
              trainingIndex: index,
              index: exerciseIndex,
            })}
          />
        )}
      />
    </ScrollView>
  );
}