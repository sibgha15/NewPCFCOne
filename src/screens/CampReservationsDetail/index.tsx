import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import StackHeader from '../../components/header/stackHeader';
import {styles} from './style';
import RoundedButton from '../../components/common/roundedButton';
import {useNavigation} from '@react-navigation/native';

const CampReservationsDetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StackHeader title="Camp Reservations" />
      <View style={styles.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <Image
            style={styles.bannerImage}
            source={require('../../../res/assets/images/bgImage.png')}
          />
          <Text style={styles.title}>Event Name</Text>
          <Text style={styles.info}>Hiking Day</Text>
          <View style={styles.divider}></View>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.info}>
            It is an International Day in which friendship is celebrated to
            realize its usefulness and importance as one of the noble and
            valuable feelings in the world.
          </Text>
          <View style={styles.divider}></View>
          <Text style={styles.title}>Date</Text>
          <Text style={styles.info}>15-Nov-2024</Text>
          <View style={styles.divider}></View>
          <Text style={styles.title}>Time</Text>
          <Text style={styles.info}>9:00 AM - 10:30 AM</Text>
          <View style={styles.divider}></View>
          <Text style={styles.title}>Reservation Type</Text>
          <Text style={styles.info}>Winter Camp</Text>
          <View style={styles.divider}></View>
          <Text style={styles.title}>Location</Text>
          <Text style={styles.info}>PCFC, Main TownHall</Text>
          <View style={styles.divider}></View>
          <Text style={styles.title}>Booking Type</Text>
          <Text style={styles.info}>Individual</Text>
          <View style={styles.divider}></View>
          <Text style={styles.title}>No. of Attendees</Text>
          <Text style={styles.info}>10+</Text>
          <View style={styles.divider}></View>
          <Text style={styles.title}>Audience</Text>
          <Text style={styles.info}>Attendees</Text>
        </ScrollView>
      </View>
      <View style={styles.footerContainer}>
        <RoundedButton
          onPress={() => navigation.navigate('EditEventDetailScreen')}
          title="Edit Event"
        />
        <TouchableOpacity>
          <Text style={styles.detailBtn}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CampReservationsDetailScreen;
