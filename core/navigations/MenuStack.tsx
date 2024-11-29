import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FavoritesScreen from '../../src/screens/FavoritesScreen';
import MenuScreen from '../../src/screens/MenuScreen';
import TaskScreen from '../../src/screens/MyTasksScreen';
import UserGuide from '../../src/screens/UserGuideScreen/UserGuide';
import AboutScreen from '../../src/screens/AboutScreen/AboutScreen';
import PrivacyPolicyScreen from '../../src/screens/PrivacyPolicyScreen/PrivacyPolicy';
import FeedBackScreen from '../../src/screens/FeedbackScreen/FeedBack';
import ProfileScreen from '../../src/screens/ProfileScreen/Index';
import DigitalCardScreen from '../../src/screens/DigitalCardScreen';
const Stack = createStackNavigator();

export default function MenuStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="taskScreen" component={TaskScreen} />
      <Stack.Screen name="favoritesScreen" component={FavoritesScreen} />
      <Stack.Screen name="userGuideScreen" component={UserGuide} />
      <Stack.Screen name="aboutScreen" component={AboutScreen} />
      <Stack.Screen
        name="privacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen name="feedbackScreen" component={FeedBackScreen} />
      <Stack.Screen name="profileScreen" component={ProfileScreen} />
      <Stack.Screen name="digitalCardScreen" component={DigitalCardScreen} />
    </Stack.Navigator>
  );
}
