import { Div } from "react-native-magnus";

export default function Wrapper({ children }: { children: JSX.Element | JSX.Element[] }) {
  children = Array.isArray(children) ? children : [children];

  return (
    <Div flex={1} flexDir="column" justifyContent="center" alignItems="center" bg="white">
      {children}
    </Div>
  );
}