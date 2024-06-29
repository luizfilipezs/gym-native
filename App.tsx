import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types/root-stack-param-list';
import { AppScreen } from './types/app-screen';
import ExerciseScreen from './components/ExerciseScreen';
import TrainingScreen from './components/TrainingScreen';
import HomeScreen from './components/HomeScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={AppScreen.TrainingList}>
        <RootStack.Screen
          name={AppScreen.TrainingList}
          component={HomeScreen}
          options={{
            title: 'Treinos',
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name={AppScreen.TrainingDetail}
          component={TrainingScreen}
          options={{
            title: 'Treino',
            headerShown: false,
          }} />
        <RootStack.Screen
          name={AppScreen.ExerciseDetail}
          component={ExerciseScreen}
          options={{
            title: 'Exercício',
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
