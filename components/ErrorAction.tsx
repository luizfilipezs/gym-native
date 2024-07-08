import { Button, Div, Text } from "react-native-magnus";
import Wrapper from "./Wrapper";

type ErrorScreenProps = {
  message?: string;
  actionText: string;
  action: () => void;
}

export default function ErrorAction({ message, actionText, action }: ErrorScreenProps) {
  return (
    <Wrapper>
      <Text>{message ?? 'Não foi possível carregar o conteúdo.'}</Text>
      <Div mt="lg" flexDir="row" justifyContent="center">
        <Button
          mt="lg"
          px="xl"
          py="lg"
          bg="white"
          borderWidth={1}
          borderColor="blue500"
          color="blue500"
          underlayColor="blue100"
          onPress={action}
        >
          {actionText}
        </Button>
      </Div>
    </Wrapper>
  );
}
