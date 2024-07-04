import { Div, Text } from "react-native-magnus";

interface ExerciseDetailProps {
  label: string;
  text: string;
}

export default function ExerciseDetail({ label, text }: ExerciseDetailProps) {
  return (
    <Div>
      <Text fontWeight="bold" mb={5}>{label}</Text>
      <Text>{text}</Text>
    </Div>
  );
}
