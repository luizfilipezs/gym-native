import { FlatList, ScrollView, StyleSheet, Text } from "react-native";
import { getTrainings } from "../utils/getTrainings";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/root-stack-param-list";
import { AppScreen } from "../types/app-screen";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, AppScreen.TrainingList>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const trainings = getTrainings();

  return (
    <ScrollView>
      <Text style={styles.title}>Qual o treino de hoje?</Text>
      <FlatList
        data={trainings}
        renderItem={({ item, index }) => (
          <Text
            style={styles.training}
            onPress={() => navigation.navigate(AppScreen.TrainingDetail, { index })}
          >{item.day}</Text>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  training: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
