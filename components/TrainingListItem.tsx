import { Pressable } from "react-native";
import { Div, Text } from "react-native-magnus";
import { Training } from "../types/training";

interface TrainingListItemProps {
  training: Training;
  onPress: () => void;
}

export default function TrainingListItem({ training, onPress }: TrainingListItemProps) {
  return (
    <Pressable onPress={onPress}>
      <Div bg="gray200" px={35} py={20} rounded="lg">
        <Text fontSize="2xl" textAlign="center">
          {training.name}
        </Text>
      </Div>
    </Pressable>
  );
}
