import { Text } from "@react-native-material/core";
import { StyleSheet, View } from "react-native";

interface ExerciseDetailProps {
  name: string;
  value: string;
}

export default function ExerciseDetail({ name, value }: ExerciseDetailProps) {
  return (
    <View style={styles.detail}>
      <Text style={styles.detailName}>{name}</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detail: {
    display: 'flex',
    flexDirection: 'column',
  },
  detailName: {
    fontWeight: 'bold',
    marginBottom: 5,
  }
});