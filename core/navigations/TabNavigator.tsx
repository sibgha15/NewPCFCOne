import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../../src/screens/HomeScreen';
import ServicesScreen from '../../src/screens/ServicesScreen';
import ChatbotScreen from '../../src/screens/ChatbotScreen';
import ActivityScreen from '../../src/screens/ActivityScreen';
import MenuScreen from '../../src/screens/MenuScreen';
import {
  ActivityIcon,
  ActivityIconActive,
  ChatBotIcon,
  ChatBotIconActive,
  HomeIcon,
  HomeIconActive,
  MenuIcon,
  MenuIconActive,
  ServiceIconActive,
  ServicesIcon,
} from '../../res/assets/images/svgs';
import {createStackNavigator} from '@react-navigation/stack';
import PendingActions from '../../src/screens/pendingActions/PendingActions';
import MenuStack from './MenuStack';
import SearchScreen from '../../src/screens/SearchScreen';
import PayrollScreen from '../../src/screens/PayrollScreen';
import TaskScreen from '../../src/screens/MyTasksScreen';
import CircularsScreen from '../../src/screens/CircularsScreen';
import AttendanceScreen from '../../src/screens/AttendenceScreen';
import {fonts} from '../../res/themes';
import PermissionScreen from '../../src/screens/PermissionScreen';
import EditPermissionScreen from '../../src/screens/EditPermissionScreen/Index';
import MediaCenterScreen from '../../src/screens/MediaCenterScreen';
import NewsScreen from '../../src/screens/NewsScreen';
import NewsDetailScreen from '../../src/screens/NewsDetailScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PendingActions" component={PendingActions} />
      <Stack.Screen name="searchScreen" component={SearchScreen} />
      <Stack.Screen name="PayrollScreen" component={PayrollScreen} />
      <Stack.Screen name="taskScreen" component={TaskScreen} />
      <Stack.Screen name="circularsScreen" component={CircularsScreen} />
      <Stack.Screen name="AttendanceScreen" component={AttendanceScreen} />
      <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
      <Stack.Screen
        name="EditPermissionScreen"
        component={EditPermissionScreen}
      />
      <Stack.Screen name="MediaCenterScreen" component={MediaCenterScreen} />
      <Stack.Screen name="NewsScreen" component={NewsScreen} />
      <Stack.Screen name="NewsDetailScreen" component={NewsDetailScreen} />
    </Stack.Navigator>
  );
}
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#F5F7FC',
          paddingBottom: 30,
          paddingTop: 15,
          height: route.name === 'PCFC AI' ? 0 : 100,
          display: route.name === 'PCFC AI' ? 'none' : 'flex',
        },
        tabBarIcon: ({focused}) => {
          let IconComponent;

          if (route.name === 'Home') {
            IconComponent = focused ? HomeIconActive : HomeIcon;
          } else if (route.name === 'Services') {
            IconComponent = focused ? ServiceIconActive : ServicesIcon;
          } else if (route.name === 'PCFC AI') {
            IconComponent = focused ? ChatBotIcon : ChatBotIcon;
          } else if (route.name === 'Activity') {
            IconComponent = focused ? ActivityIconActive : ActivityIcon;
          } else if (route.name === 'Menu') {
            IconComponent = focused ? MenuIconActive : MenuIcon;
          }

          return <IconComponent />;
        },
        tabBarActiveTintColor: '#177DB7',
        tabBarInactiveTintColor: '#7F7F7F',
        tabBarLabelStyle: {
          fontSize: fonts.fontSize.medium,
          fontFamily: fonts.fontFamily.primary,
        },
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="PCFC AI" component={ChatbotScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Menu" component={MenuStack} />
    </Tab.Navigator>
  );
}
