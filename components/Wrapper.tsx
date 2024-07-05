import { Div } from "react-native-magnus";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <Div flex={1} flexDir="column" justifyContent="center" alignItems="center" bg="white">
      {children}
    </Div>
  );
}
