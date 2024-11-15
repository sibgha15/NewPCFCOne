import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
} from 'react-native';
import {styles} from './style';
import {
  Group,
  StoreFront,
  UserAvatar,
  VideoLibrary,
  WhiteArrowIconLeft,
  WhiteFilterIcon,
} from '../../../res/assets/images/svgs';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../res/themes';
import MyTasksFilterModel from '../../components/Models/MyTasksModel';

const TaskScreen = () => {
  const navigation = useNavigation();

  const [activeTab, setActiveTab] = useState('Pending');
  const [openModel, setOpenModel] = useState(false);

  const pendingTasks = [
    {
      id: 1,
      title: 'HR Visa Request',
      cardBadge: 'Procurement',
      code: 'SC-240507-0012',
      status: 'IN-PROGRESS',
      icon: Group,
      iconWrapperColor: '#883BA91A',
    },
    {
      id: 2,
      title: 'Procurement Request',
      cardBadge: 'Procurement',
      code: 'SC-240507-0013',
      status: 'IN-PROGRESS',
      icon: Group,
      iconWrapperColor: '#883BA91A',
    },
    {
      id: 3,
      title: 'Budget Approval',
      cardBadge: 'Procurement',
      code: 'SC-240507-0014',
      status: 'IN-PROGRESS',
      icon: Group,
      iconWrapperColor: '#883BA91A',
    },
  ];

  const completedTasks = [
    {
      id: 4,
      title: 'Employee Onboarding',
      cardBadge: 'Talent and Culture',
      code: 'SC-240507-0015',
      status: 'COMPLETED',
      icon: VideoLibrary,
      iconWrapperColor: '#F83E3E1A',
    },
    {
      id: 5,
      title: 'Contract Finalization',
      cardBadge: 'Talent and Culture',
      code: 'SC-240507-0016',
      status: 'COMPLETED',
      icon: StoreFront,
      iconWrapperColor: '#FBA7041A',
    },
    {
      id: 6,
      title: 'Project Delivery',
      cardBadge: 'Talent and Culture',
      code: 'SC-240507-0017',
      status: 'COMPLETED',
      icon: Group,
      iconWrapperColor: '#883BA91A',
    },
  ];

  const allTasks = [...pendingTasks, ...completedTasks];

  const renderTaskCard = (task: any) => {
    const isCompleted = task.status === 'COMPLETED';
    const IconComponent = task.icon;

    const truncatedCardBadge =
      task.cardBadge.length > 25
        ? `${task.cardBadge.substring(0, 22)}...`
        : task.cardBadge;

    return (
      <View key={task.id} style={styles.card}>
        <View style={styles.cardRow}>
          <View style={styles.cardRowInner}>
            <View
              style={[
                styles.cardIconWrapper,
                {backgroundColor: task.iconWrapperColor},
              ]}>
              <IconComponent />
            </View>
            <View style={styles.cardBadge}>
              <Text>{truncatedCardBadge}</Text>
            </View>
          </View>
          <View
            style={
              isCompleted ? styles.isCompletetedBadge : styles.inProgressBadge
            }>
            <Text
              ellipsizeMode="tail"
              style={
                isCompleted ? styles.isCompletetedText : styles.inProgressText
              }>
              {task.status}
            </Text>
          </View>
        </View>
        <Text style={styles.cardTitle}>{task.title}</Text>
        <View style={styles.cardRow}>
          <Text style={styles.cardInfoText}>{task.code}</Text>
          <View style={styles.userInfoContainer}>
            <Text style={styles.cardInfoText}>Initiated by</Text>
            <UserAvatar height={32} width={32} />
          </View>
        </View>
      </View>
    );
  };

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
          <Text style={styles.headerText}>My Tasks</Text>
          <TouchableOpacity onPress={() => setOpenModel(true)}>
            <WhiteFilterIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'Pending' && {backgroundColor: colors.white},
            ]}
            onPress={() => setActiveTab('Pending')}>
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'Pending' && {color: colors.primary},
              ]}>
              Pending
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'Completed' && {backgroundColor: colors.white},
            ]}
            onPress={() => setActiveTab('Completed')}>
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'Completed' && {
                  color: colors.primary,
                },
              ]}>
              Completed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'All' && {backgroundColor: colors.white},
            ]}
            onPress={() => setActiveTab('All')}>
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'All' && {color: colors.primary},
              ]}>
              All Tasks
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          {activeTab === 'Pending' && pendingTasks.map(renderTaskCard)}
          {activeTab === 'Completed' && completedTasks.map(renderTaskCard)}
          {activeTab === 'All' && allTasks.map(renderTaskCard)}
        </View>
      </ScrollView>
      <Modal
        transparent={true}
        visible={openModel}
        animationType="fade"
        onRequestClose={() => setOpenModel(false)}>
        <MyTasksFilterModel onClose={() => setOpenModel(false)} />
      </Modal>
    </View>
  );
};

export default TaskScreen;
