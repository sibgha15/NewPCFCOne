import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ServiceHistoryScreen from '../../src/screens/ServiceHistoryScreen';
import ServicesScreen from '../../src/screens/ServicesScreen';
import ServiceListing from '../../src/screens/ServiceListing';
import ServiceDetailScreen from '../../src/screens/ServiceDetailScreen';
const Stack = createStackNavigator();

export default function ServiceStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ServiceScreen" component={ServicesScreen} />
      <Stack.Screen name="ServiceHistory" component={ServiceHistoryScreen} />
      <Stack.Screen name="ServiceListing" component={ServiceListing} />
      <Stack.Screen name="ServiceDetail" component={ServiceDetailScreen} />
    </Stack.Navigator>
  );
}
