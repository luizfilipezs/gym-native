import { ScrollView, StyleSheet, View } from "react-native";
import { getTrainings } from "../utils/getTrainings";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/root-stack-param-list";
import { AppScreen } from "../types/app-screen";
import { Text } from "@react-native-material/core";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, AppScreen.Home>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const trainings = getTrainings();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Text variant="h4" style={styles.title}>Qual o treino de hoje? 💪</Text>
        <View style={styles.list}>
          {trainings.map((training, index) => (
            <Text
              key={index}
              variant="h5"
              style={styles.listItem}
              onPress={() => navigation.navigate(AppScreen.Training, { index })}
            >{training.day}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 1,
    padding: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
  listItem: {
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    textAlign: 'center',
    paddingVertical: 20,
    paddingHorizontal: 35,
  },
});
