import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/root-stack-param-list";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { getTrainings } from "../utils/getTrainings";
import { AppScreen } from "../types/app-screen";
import { RouteProp } from "@react-navigation/native";
import { Text } from "@react-native-material/core";
import { useEffect } from "react";

type ExerciseScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, AppScreen.Exercise>;
  route: RouteProp<RootStackParamList, AppScreen.Exercise>;
};

export default function ExerciseScreen({ navigation, route }: ExerciseScreenProps) {
  const { trainingIndex, index } = route.params;
  const training = getTrainings()[trainingIndex];
  const exercise = training.exercices[index];

  useEffect(() => {
    navigation.setOptions({
      title: exercise.name,
    });
  }, []);

  return (
    <ScrollView>
      <Image source={{ uri: exercise.image }} style={styles.image}></Image>
      <View style={styles.detailsBox}>
        <View style={styles.detail}>
          <Text style={styles.detailName}>Descrição</Text>
          <Text>{exercise.description}</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailName}>Séries</Text>
          <Text>{exercise.series}x{exercise.reps}</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailName}>Peso atual</Text>
          <Text>{exercise.weight}kg</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  detailsBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    margin: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  detail: {
    display: 'flex',
    flexDirection: 'column',
  },
  detailName: {
    fontWeight: 'bold',
    marginBottom: 5,
  }
});