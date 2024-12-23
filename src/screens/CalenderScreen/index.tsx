import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
} from 'react-native';
import {styles} from './style';
import {
  Calender,
  CallIcon,
  ChatBubble,
  HistoryClock,
  MailIcon,
  UserAvatar,
  WhiteArrowIconLeft,
  WhiteCalender,
} from '../../../res/assets/images/svgs';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../res/themes';
import {CalenderComponent} from '../../components/common/Calender';
import CalenderModel from '../../components/Models/CalenderModel';

interface CalendarCardProps {
  time: string;
  title: string;
  subtitle: string;
  onPress?: () => void;
}

const CalendarCard: React.FC<CalendarCardProps> = ({
  time,
  title,
  subtitle,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.timeBadge}>
        <Text style={styles.timeBadgeText}>{time.split(':')[0]}</Text>
        <Text style={styles.timeBadgeText}>{time.split(':')[1]}</Text>
      </View>
      <View>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubTitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const CalenderScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('My Calendar');
  const [openCalenderModel, setOpenCalenderModel] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#1881BB"
        translucent={false}
      />
      <LinearGradient
        colors={['#1881BB', '#20AAE2']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.header}>
        <View style={styles.topHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <WhiteArrowIconLeft />
          </TouchableOpacity>
          <Text style={styles.headerText}>Star of the Month</Text>
          <TouchableOpacity
            onPress={() => setOpenCalenderModel(!openCalenderModel)}>
            <WhiteCalender />
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabContainer}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === 'My Calendar' && {backgroundColor: colors.white},
              ]}
              onPress={() => setActiveTab('My Calendar')}>
              <Text
                style={[
                  styles.tabButtonText,
                  activeTab === 'My Calendar' && {color: colors.primary},
                ]}>
                My Calendar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === 'Company Events' && {
                  backgroundColor: colors.white,
                },
              ]}
              onPress={() => setActiveTab('Company Events')}>
              <Text
                style={[
                  styles.tabButtonText,
                  activeTab === 'Company Events' && {
                    color: colors.primary,
                  },
                ]}>
                Company Events
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === 'Camp Reservations' && {
                  backgroundColor: colors.white,
                },
              ]}
              onPress={() => setActiveTab('Camp Reservations')}>
              <Text
                style={[
                  styles.tabButtonText,
                  activeTab === 'Camp Reservations' && {color: colors.primary},
                ]}>
                Camp Reservations
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === 'Birthdays' && {
                  backgroundColor: colors.white,
                },
              ]}
              onPress={() => setActiveTab('Birthdays')}>
              <Text
                style={[
                  styles.tabButtonText,
                  activeTab === 'Birthdays' && {color: colors.primary},
                ]}>
                Birthdays
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </LinearGradient>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}>
        {activeTab === 'My Calendar' && (
          <>
            <View style={styles.calenderContainer}>
              <CalenderComponent />
            </View>
            <View style={styles.flexView}>
              <Text style={styles.date}>November 19, 2024</Text>
              <Text style={styles.day}>Thursday</Text>
            </View>
            <View style={styles.cardContainer}>
              <CalendarCard
                time="3:PM"
                title="PCFC Annual Social Gathering"
                subtitle="Team meeting"
                onPress={() => navigation.navigate('CompanyEventDetail')}
              />
              <CalendarCard
                time="4:AM"
                title="Birthday’s Party"
                subtitle="Townhall"
                onPress={() => navigation.navigate('CompanyEventDetail')}
              />
            </View>
          </>
        )}
        {activeTab === 'Company Events' && (
          <>
            <View style={styles.calenderContainer}>
              <CalenderComponent />
            </View>
            <View style={styles.flexView}>
              <Text style={styles.date}>November 15, 2024</Text>
              <Text style={styles.day}>Monday</Text>
            </View>
            <View style={styles.cardContainer}>
              <CalendarCard
                time="9:AM"
                title="Hiking Day"
                subtitle="Company event"
              />
            </View>
          </>
        )}
        {activeTab === 'Camp Reservations' && (
          <>
            <View style={styles.calenderContainer}>
              <CalenderComponent />
            </View>
            <View style={styles.flexView}>
              <Text style={styles.date}>November 15, 2024</Text>
              <Text style={styles.day}>Monday</Text>
            </View>
            <View style={styles.cardContainer}>
              <CalendarCard
                time="7:AM"
                title="Camp Day"
                subtitle="Camp Reservations"
                onPress={() =>
                  navigation.navigate('CampReservationsDetailScreen')
                }
              />
            </View>
          </>
        )}
        {activeTab === 'Birthdays' && (
          <>
            <View style={styles.flexView}>
              <Text style={styles.date}>November 15, 2024</Text>
              <Text style={styles.day}>Monday</Text>
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.birthdayCard}>
                <View style={styles.avatarWrapper}>
                  <UserAvatar width={40} height={40} />
                </View>
                <View>
                  <View>
                    <Text style={styles.name}>Muhammad Ali Abdullah</Text>
                    <Text style={styles.mail}>m.ali.abdullah@gmail.com</Text>
                  </View>
                  <View style={styles.iconsContainer}>
                    <TouchableOpacity style={styles.iconWrapper}>
                      <MailIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconWrapper}>
                      <CallIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconWrapper}>
                      <ChatBubble />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.birthdayCard}>
                <View style={styles.avatarWrapper}>
                  <UserAvatar width={40} height={40} />
                </View>
                <View>
                  <View>
                    <Text style={styles.name}>Muhammad Ali Abdullah</Text>
                    <Text style={styles.mail}>m.ali.abdullah@gmail.com</Text>
                  </View>
                  <View style={styles.iconsContainer}>
                    <TouchableOpacity style={styles.iconWrapper}>
                      <MailIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconWrapper}>
                      <CallIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconWrapper}>
                      <ChatBubble />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.birthdayCard}>
                <View style={styles.avatarWrapper}>
                  <UserAvatar width={40} height={40} />
                </View>
                <View>
                  <View>
                    <Text style={styles.name}>Muhammad Ali Abdullah</Text>
                    <Text style={styles.mail}>m.ali.abdullah@gmail.com</Text>
                  </View>
                  <View style={styles.iconsContainer}>
                    <TouchableOpacity style={styles.iconWrapper}>
                      <MailIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconWrapper}>
                      <CallIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconWrapper}>
                      <ChatBubble />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </>
        )}
      </ScrollView>
      <Modal
        transparent={true}
        visible={openCalenderModel}
        animationType="fade"
        onRequestClose={() => setOpenCalenderModel(false)}>
        <CalenderModel onClose={() => setOpenCalenderModel(false)} />
      </Modal>
    </View>
  );
};

export default CalenderScreen;
