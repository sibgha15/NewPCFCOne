import React, {useState} from 'react';
import {
  Modal,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import {
  InfoIcon,
  MoreInfo,
  WhiteArrowIconLeft,
  WhiteFilterIcon,
} from '../../../res/assets/images/svgs';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import CirculatesModel from '../../components/Models/CircularModel';

const circularsData = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    date: '03-Mar-2024',
  },
  {
    id: 2,
    title: 'Sed do eiusmod tempor incididunt ut labore et dolore',
    date: '05-Mar-2024',
  },
  {
    id: 3,
    title: 'Ut enim ad minim veniam, quis nostrud exercitation',
    date: '07-Mar-2024',
  },
  {
    id: 4,
    title: 'Duis aute irure dolor in reprehenderit in voluptate',
    date: '10-Mar-2024',
  },
  {
    id: 5,
    title: 'Excepteur sint occaecat cupidatat non proident',
    date: '12-Mar-2024',
  },
];

const CircularsScreen = () => {
  const navigation = useNavigation();
  const [openModel, setOpenModel] = useState(false);

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
          <Text style={styles.headerText}>Circulars</Text>
          <TouchableOpacity onPress={() => setOpenModel(true)}>
            <WhiteFilterIcon />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          {circularsData.map(item => (
            <View key={item.id} style={styles.card}>
              <View style={styles.cardContent}>
                <View style={styles.cardIconWrapper}>
                  <InfoIcon />
                </View>
                <View style={styles.textWrapper}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.dateText}>{item.date}</Text>
                </View>
                <TouchableOpacity style={styles.moreInfoButton}>
                  <MoreInfo />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <Modal
        transparent={true}
        visible={openModel}
        animationType="fade"
        onRequestClose={() => setOpenModel(false)}>
        <CirculatesModel onClose={() => setOpenModel(false)} />
      </Modal>
    </View>
  );
};

export default CircularsScreen;
