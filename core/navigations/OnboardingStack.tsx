import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../../src/screens/onboarding/OnboardingScreen';
import SplashScreen from '../../src/screens/onboarding/SplashScreen';
import LoginScreen from '../../src/screens/login/Login';
const Stack = createStackNavigator();

export default function OnBoardingStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
}
