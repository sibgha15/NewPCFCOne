import {createStackNavigator} from '@react-navigation/stack';
import FavoritesScreen from '../../src/screens/FavoritesScreen';
import MenuScreen from '../../src/screens/MenuScreen';
import TaskScreen from '../../src/screens/MyTasksScreen';
const Stack = createStackNavigator();

export default function MenuStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="taskScreen" component={TaskScreen} />
      <Stack.Screen name="favoritesScreen" component={FavoritesScreen} />
    </Stack.Navigator>
  );
}
