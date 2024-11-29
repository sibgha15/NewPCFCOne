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
  CalendarClockIcon,
  CompleteTask,
  InCompleteTask,
  RightArrow,
  WhiteArrowIconLeft,
} from '../../../res/assets/images/svgs';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../res/themes';
import PermissionModel from '../../components/Models/PermissionModel';

const AttendanceScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Leaves');
  const [openModel, setOpenModel] = useState(false);

  const leavesData = [
    {type: 'Annual Leave', count: 6},
    {type: 'Sick Leave', count: 12},
    {type: 'Compassionate Leave', count: 12},
    {type: 'Bereavement Leave', count: 12},
    {type: 'Training Leave', count: 0},
    {type: 'Study Leave', count: 0},
    {type: 'Paternity Leave', count: 30},
    {type: 'Maternity Leave', count: 30},
    {type: 'Patient Escort Leave', count: 0},
    {type: 'Authorized Unpaid Leave', count: 0},
  ];

  const permissionsData = [
    {type: 'Early Out'},
    {type: 'Coming In Late'},
    {type: 'During Work Hours'},
    {type: 'Work From Home'},
  ];

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
          <Text style={styles.headerText}>Attendance</Text>
          <TouchableOpacity onPress={() => setOpenModel(true)}>
            <CalendarClockIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'Leaves' && {backgroundColor: colors.white},
            ]}
            onPress={() => setActiveTab('Leaves')}>
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'Leaves' && {color: colors.primary},
              ]}>
              Leaves
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'Permissions' && {backgroundColor: colors.white},
            ]}
            onPress={() => setActiveTab('Permissions')}>
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'Permissions' && {color: colors.primary},
              ]}>
              Permissions
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}>
        {activeTab === 'Leaves' && (
          <View style={styles.cardContainer}>
            {leavesData.map((leave, index) => (
              <View key={index} style={styles.card}>
                <View style={styles.flexView}>
                  <View style={styles.cardIconWrapper}>
                    <InCompleteTask width={28} height={28} />
                  </View>
                  <Text style={styles.cardText}>{leave.type}</Text>
                </View>
                <View style={styles.flexView}>
                  {leave.count > 0 && (
                    <Text style={styles.numberOfLeaves}>{leave.count}</Text>
                  )}
                  <TouchableOpacity>
                    <RightArrow />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
        {activeTab === 'Permissions' && (
          <View style={styles.cardContainer}>
            {permissionsData.map((permission, index) => (
              <View key={index} style={styles.card}>
                <View style={styles.flexView}>
                  <View style={styles.cardIconWrapper}>
                    <CompleteTask width={28} height={28} />
                  </View>
                  <Text style={styles.cardText}>{permission.type}</Text>
                </View>
                <TouchableOpacity>
                  <RightArrow />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
      <Modal
        transparent={true}
        visible={openModel}
        animationType="fade"
        onRequestClose={() => setOpenModel(false)}>
        <PermissionModel onClose={() => setOpenModel(false)} />
      </Modal>
    </View>
  );
};

export default AttendanceScreen;
