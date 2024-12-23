import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import {
  AddIcon,
  ArrowIconLeft,
  VideoLibrary,
  WhiteAddIcon,
} from '../../../res/assets/images/svgs';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const ServiceListing = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('All Requests');

  const tabs = [
    'All Requests',
    'Requests for Approval',
    'My Initiated Requests',
  ];

  const renderTabItem = ({item}: {item: string}) => (
    <TouchableOpacity
      style={[styles.tabBtn, activeTab === item && styles.activeTabBtn]}
      onPress={() => setActiveTab(item)}>
      <Text
        style={[styles.tabText, activeTab === item && styles.activeTabText]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ffffff"
        translucent={false}
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowIconLeft width={24} height={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Services</Text>
        <AddIcon />
      </View>
      <View>
        <FlatList
          data={tabs}
          horizontal
          renderItem={renderTabItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
          contentContainerStyle={styles.tabContainer}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ServiceDetail')}
        style={styles.flexBetween}>
        <View style={styles.flexView}>
          <View style={styles.iconWrapper}>
            <VideoLibrary width="23.33" />
          </View>
          <View>
            <Text style={styles.name}>Media Coverage Request</Text>
            <Text style={styles.date}>10-Aug-2024</Text>
          </View>
        </View>
        <View style={styles.statusWrapper}>
          <Text style={styles.statusText}>IN-PROGRESS</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.bottomContainer}>
        <TouchableOpacity activeOpacity={0.7}>
          <LinearGradient
            colors={['#20AAE2', '#1881BB']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.buttonGradient}>
            <WhiteAddIcon />
            <Text style={styles.buttonText}>New Requests</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.draftBtn}>Drafts</Text>
      </View>
    </View>
  );
};

export default ServiceListing;
