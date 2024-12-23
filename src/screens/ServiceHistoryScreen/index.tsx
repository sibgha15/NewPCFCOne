import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import StackHeader from '../../components/header/stackHeader';
import {styles} from './style';
import {ArrowIconLeft, Group, SortIcon} from '../../../res/assets/images/svgs';
import {useNavigation} from '@react-navigation/native';
import HistoryFilterModel from '../../components/Models/HistoryFilterModel';

const ServiceHistoryScreen = () => {
  const navigation = useNavigation();
  const [openModel, setOpenModel] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ffffff"
        translucent={false}
      />
      <View style={[styles.header]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowIconLeft width={24} height={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}>History</Text>
        <TouchableOpacity onPress={() => setOpenModel(!openModel)}>
          <SortIcon />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('ServiceListing')}>
          <View style={styles.flexBetween}>
            <View style={styles.flexView}>
              <View style={styles.iconWrapper}>
                <Group />
              </View>
              <View>
                <Text style={styles.name}>Customer Happiness</Text>
                <Text style={styles.date}>10-Aug-2024</Text>
              </View>
            </View>
            <View style={styles.statusWrapper}>
              <Text style={styles.statusText}>COMPLETED</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.flexBetween}>
          <View style={styles.flexView}>
            <View style={styles.iconWrapper}>
              <Group />
            </View>
            <View>
              <Text style={styles.name}>Customer Happiness</Text>
              <Text style={styles.date}>10-Aug-2024</Text>
            </View>
          </View>
          <View style={styles.statusWrapper}>
            <Text style={styles.statusText}>COMPLETED</Text>
          </View>
        </View>
        <View style={styles.flexBetween}>
          <View style={styles.flexView}>
            <View style={styles.iconWrapper}>
              <Group />
            </View>
            <View>
              <Text style={styles.name}>Customer Happiness</Text>
              <Text style={styles.date}>10-Aug-2024</Text>
            </View>
          </View>
          <View style={styles.statusWrapper}>
            <Text style={styles.statusText}>COMPLETED</Text>
          </View>
        </View>
        <View style={styles.flexBetween}>
          <View style={styles.flexView}>
            <View style={styles.iconWrapper}>
              <Group />
            </View>
            <View>
              <Text style={styles.name}>Customer Happiness</Text>
              <Text style={styles.date}>10-Aug-2024</Text>
            </View>
          </View>
          <View style={styles.statusWrapper}>
            <Text style={styles.statusText}>COMPLETED</Text>
          </View>
        </View>
      </ScrollView>
      <Modal
        transparent={true}
        visible={openModel}
        animationType="fade"
        onRequestClose={() => setOpenModel(false)}>
        <HistoryFilterModel onClose={() => setOpenModel(false)} />
      </Modal>
    </View>
  );
};

export default ServiceHistoryScreen;
