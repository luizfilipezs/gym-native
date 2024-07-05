import { ActivityIndicator } from "react-native";
import Wrapper from "./Wrapper";

export default function Loading() {
  return (
    <Wrapper>
      <ActivityIndicator />
    </Wrapper>
  );
}
