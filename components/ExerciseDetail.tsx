import { Text } from "@react-native-material/core";
import { StyleSheet, View } from "react-native";

interface ExerciseDetailProps {
  label: string;
  text: string;
}

export default function ExerciseDetail({ label, text }: ExerciseDetailProps) {
  return (
    <View style={styles.detail}>
      <Text style={styles.detailName}>{label}</Text>
      <Text>{text}</Text>
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