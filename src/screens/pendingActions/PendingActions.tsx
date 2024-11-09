import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';
import StackHeader from '../../components/header/stackHeader';
import {
  CompleteTask,
  InCompleteTask,
  SortIcon,
  VideoLibrary,
} from '../../../res/assets/images/svgs';
import ActionsFilter from '../../components/Models/ActionModel';
import {styles} from './Styles';
import {colors} from '../../../res/themes';

const actionData = [
  {
    id: '1',
    name: 'Annual Leave',
    designation: 'Duration: 5 days',
    status: 'pending',
    icon: <InCompleteTask />,
  },
  {
    id: '2',
    name: 'Work From Home',
    designation: '10-Aug-2024',
    status: 'pending',
    icon: <CompleteTask />,
  },
  {
    id: '3',
    name: 'Annual Leave',
    designation: 'Duration: 1 day',
    status: 'pending',
    icon: <InCompleteTask />,
  },
  {
    id: '4',
    name: 'Leave Early',
    designation: '10-Aug-2024',
    status: 'pending',
    icon: <CompleteTask />,
  },
  {
    id: '5',
    name: 'Media Coverage Request',
    designation: '10-Aug-2024',
    status: 'pending',
    icon: <VideoLibrary />,
  },
];

const PendingActions = () => {
  const [openModel, setOpenModel] = useState(false);

  const renderServiceItem = ({item}: any) => (
    <View style={styles.listContainer}>
      <View style={styles.userAvatarContainer}>
        <View style={styles.iconContainer}>{item.icon}</View>
        <View style={styles.list}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.designation}>{item.designation}</Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>{item.status}</Text>
      </View>
    </View>
  );
  return (
    // <SafeAreaView style={{flex: 1}}>

    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ffffff"
        translucent={false}
      />
      <StackHeader title="Pending Actions" backgroundColor="#FFFFFF" />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: colors.background,
        }}>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>List</Text>
          <TouchableOpacity onPress={() => setOpenModel(true)}>
            <SortIcon />
          </TouchableOpacity>
        </View>
        <FlatList
          data={actionData}
          renderItem={renderServiceItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 20}}
        />
      </ScrollView>
      <Modal
        transparent={true}
        visible={openModel}
        animationType="fade"
        onRequestClose={() => setOpenModel(false)}>
        <ActionsFilter onClose={() => setOpenModel(false)} />
      </Modal>
    </View>

    // </SafeAreaView>
  );
};

export default PendingActions;
