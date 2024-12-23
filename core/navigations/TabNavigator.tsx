import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../../src/screens/HomeScreen';
import ServicesScreen from '../../src/screens/ServicesScreen';
import ChatbotScreen from '../../src/screens/ChatbotScreen';
import ActivityScreen from '../../src/screens/ActivityScreen';
import {
  ActivityIcon,
  ActivityIconActive,
  ChatBotIcon,
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
import {colors, fonts} from '../../res/themes';
import PermissionScreen from '../../src/screens/PermissionScreen';
import EditPermissionScreen from '../../src/screens/EditPermissionScreen/Index';
import MediaCenterScreen from '../../src/screens/MediaCenterScreen';
import NewsScreen from '../../src/screens/NewsScreen';
import NewsDetailScreen from '../../src/screens/NewsDetailScreen';
import {StyleSheet, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import PromotionScreen from '../../src/screens/PromotionsScreen';
import PromotionDetailScreen from '../../src/screens/PromotionDetailScreen';
import PublicationsScreen from '../../src/screens/PublicationsScreen';
import ProfileScreen from '../../src/screens/ProfileScreen/Index';
import DigitalCardScreen from '../../src/screens/DigitalCardScreen';
import ServiceStack from './ServiceStack';
import CalenderScreen from '../../src/screens/CalenderScreen';
import CompanyEventDetailScreen from '../../src/screens/CompanyEventDetail';
import CampReservationsDetailScreen from '../../src/screens/CampReservationsDetail';
import EditEventDetailScreen from '../../src/screens/EditEventDetailScreen';
import StarOfYTheMonth from '../../src/screens/StarOfTheMonth';
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
      <Stack.Screen name="PromotionScreen" component={PromotionScreen} />
      <Stack.Screen
        name="PromotionDetailScreen"
        component={PromotionDetailScreen}
      />
      <Stack.Screen name="PublicationScreen" component={PublicationsScreen} />
      <Stack.Screen name="profileScreen" component={ProfileScreen} />
      <Stack.Screen name="digitalCardScreen" component={DigitalCardScreen} />
      <Stack.Screen name="CalendarScreen" component={CalenderScreen} />
      <Stack.Screen
        name="CompanyEventDetail"
        component={CompanyEventDetailScreen}
      />
      <Stack.Screen
        name="CampReservationsDetailScreen"
        component={CampReservationsDetailScreen}
      />
      <Stack.Screen
        name="EditEventDetailScreen"
        component={EditEventDetailScreen}
      />
      <Stack.Screen name="StarOfYTheMonthScreen" component={StarOfYTheMonth} />
    </Stack.Navigator>
  );
}
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          paddingBottom: 30,
          paddingTop: 15,
          height: route.name === 'PCFC AI' ? 0 : 100,
          display: route.name === 'PCFC AI' ? 'none' : 'flex',
        },
        tabBarIcon: ({focused}) => {
          let IconComponent;
          let iconProps = {};
          let isChatbot = route.name === 'PCFC AI';

          if (route.name === 'Home') {
            IconComponent = focused ? HomeIconActive : HomeIcon;
          } else if (route.name === 'Services') {
            IconComponent = focused ? ServiceIconActive : ServicesIcon;
          } else if (route.name === 'PCFC AI') {
            IconComponent = focused ? ChatBotIcon : ChatBotIcon;
            iconProps = {width: 30, height: 30};
          } else if (route.name === 'Activity') {
            IconComponent = focused ? ActivityIconActive : ActivityIcon;
          } else if (route.name === 'Menu') {
            IconComponent = focused ? MenuIconActive : MenuIcon;
          }

          if (isChatbot) {
            return (
              <LinearGradient
                colors={['#20AAE2', '#177DB7']}
                style={styles.gradientWrapper}>
                <View style={styles.iconWrapper}>
                  <IconComponent {...iconProps} />
                </View>
              </LinearGradient>
            );
          }

          return <IconComponent {...iconProps} />;
        },
        tabBarActiveTintColor: '#177DB7',
        tabBarInactiveTintColor: '#7F7F7F',
        tabBarLabelStyle: {
          fontSize: fonts.fontSize.medium,
          fontFamily: fonts.fontFamily.primary,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({route}) => {
          const routeName =
            route.state?.routes[route.state.index]?.name || 'ProfileScreen';
          // return {
          //   tabBarStyle:
          //     routeName === 'ProfileScreen' ? {display: 'none'} : undefined,
          // };
        }}
      />
      <Tab.Screen name="Services" component={ServiceStack} />
      <Tab.Screen name="PCFC AI" component={ChatbotScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Menu" component={MenuStack} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  gradientWrapper: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 29,
    marginBottom: hp(3),
  },
  iconWrapper: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 25,
  },
});
