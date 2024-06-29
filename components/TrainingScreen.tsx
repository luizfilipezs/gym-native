import { RootStackParamList } from "../types/root-stack-param-list";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getTrainings } from "../utils/getTrainings";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { AppScreen } from "../types/app-screen";
import { ListItem } from "@react-native-material/core";
import { useEffect } from "react";

type TrainingScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, AppScreen.Training>;
  route: RouteProp<RootStackParamList, AppScreen.Training>;
};

export default function TrainingScreen({ navigation, route }: TrainingScreenProps) {
  const { index } = route.params;
  const training = getTrainings()[index];

  useEffect(() => {
    navigation.setOptions({
      title: training.day,
    });
  }, []);

  return (
    <ScrollView>
      <FlatList
        data={training.exercices}
        renderItem={({ item, index: exerciseIndex }) => (
         <ListItem
            title={item.name}
            onPress={() => navigation.navigate(AppScreen.Exercise, {
              trainingIndex: index,
              index: exerciseIndex,
            })}
          />
        )}
      />
    </ScrollView>
  );
}