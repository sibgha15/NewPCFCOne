import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {styles} from './styles';
import {
  ArrowIconLeft,
  BreakingNews,
  Calendar,
  Dot,
  GraySearchIcon,
  ImageIcon,
  Payroll,
  SearchIcon,
  Subscriptions,
  UserAvatar,
} from '../../../res/assets/images/svgs';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../../res/themes';
import {ScrollView} from 'react-native-gesture-handler';

const notifications = [
  {
    id: '1',
    icon: <BreakingNews width={28} height={28} />,
    title: 'Bin Sulayem appoints Nasser Al Neyadi as CEO of the Ports.',
    category: 'News',
    date: '12-Feb-2023',
    iconBackgroundColor: colors.white,
    isUnread: true,
  },
  {
    id: '2',
    icon: <Payroll width={28} height={28} />,
    title: 'Your reimbursement request has been approved.',
    category: 'Finance',
    date: '12-Feb-2023',
    iconBackgroundColor: colors.white,
    isUnread: true,
  },
  {
    id: '3',
    icon: <UserAvatar width={44} height={44} />,
    title: 'Mohammed Ali Abdullah added here to PCFC One Project Group.',
    category: 'Group',
    date: '11-Feb-2023',
    backgroundColor: colors.white,
    isUnread: false,
  },
  {
    id: '4',
    icon: <ImageIcon width={28} height={28} />,
    title: 'Mohammed Ali Abdullah added a photo in the PCFC One Album.',
    category: 'Photo',
    date: '10-Feb-2023',
    backgroundColor: colors.white,
    iconBackgroundColor: colors.background,
    isUnread: false,
  },
  {
    id: '5',
    icon: <Subscriptions width={28} height={28} />,
    title: 'Bin Sulayem appoints Nasser Al Neyadi as CEO of the Ports.',
    category: 'Video',
    date: '12-Feb-2023',
    backgroundColor: colors.white,
    iconBackgroundColor: colors.background,
    isUnread: false,
  },
];

const ActivityScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('ALL');
  const unreadMessagesCount = notifications.filter(
    notification => notification.isUnread,
  ).length;

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const filteredNotifications =
    activeTab === 'UNREAD'
      ? notifications.filter(notification => notification.isUnread)
      : notifications;

  const renderNotificationItem = ({item}: any) => (
    <View
      style={[
        styles.notificationCard,
        {
          backgroundColor: item.isUnread
            ? '#177DB70D'
            : item.backgroundColor || colors.background,
        },
      ]}>
      <View style={styles.notificationContent}>
        <View
          style={[
            styles.iconContainer,
            {backgroundColor: item.iconBackgroundColor || colors.background},
          ]}>
          {item.icon}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{item.category}</Text>
            <Dot />
            <Text style={styles.infoText}>{item.date}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowIconLeft />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notifications</Text>
        <TouchableOpacity onPress={() => navigation.navigate('searchScreen')}>
          <GraySearchIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => handleTabChange('ALL')}>
          <View style={styles.tab}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'ALL' && {color: colors.primary},
              ]}>
              All
            </Text>
            {activeTab === 'ALL' && <View style={styles.indicator} />}
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTabChange('UNREAD')}>
          <View style={styles.tab}>
            <View style={styles.unreadTabContainer}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'UNREAD' && {color: colors.primary},
                ]}>
                Unread
              </Text>
              {unreadMessagesCount > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{unreadMessagesCount}</Text>
                </View>
              )}
            </View>
            {activeTab === 'UNREAD' && <View style={styles.indicator} />}
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={filteredNotifications}
          renderItem={renderNotificationItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.mainContainer}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActivityScreen;
