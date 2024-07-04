import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types/root-stack-param-list';
import { AppScreen } from './types/app-screen';
import ExerciseScreen from './components/ExerciseScreen';
import TrainingScreen from './components/TrainingScreen';
import HomeScreen from './components/HomeScreen';
import { ThemeProvider } from 'react-native-magnus';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName={AppScreen.Home}>
          <RootStack.Screen
            name={AppScreen.Home}
            component={HomeScreen}
            options={{
              title: 'Treinos',
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name={AppScreen.Training}
            component={TrainingScreen}
            options={{
              title: 'Treino',
            }} />
          <RootStack.Screen
            name={AppScreen.Exercise}
            component={ExerciseScreen}
            options={{
              title: 'Exercício',
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
