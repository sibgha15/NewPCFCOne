import React from 'react';
import {
  View,
  StatusBar,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import StackHeader from '../../components/header/stackHeader';
import {styles} from './style';
import {UserAvatar, VideoLibrary} from '../../../res/assets/images/svgs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RoundedButton from '../../components/common/roundedButton';

const ServiceDetailScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ffffff"
        translucent={false}
      />
      <StackHeader title="Services" />
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingBottom: hp(20)}}
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}>
        <View style={styles.stepsIndicatorContainer}>
          <View style={styles.activeIndicator}></View>
          <View style={styles.dottedIndicator}></View>
          <View style={styles.unactiveIndicator}></View>
        </View>
        <View style={[styles.flexBetween, {marginBottom: 20}]}>
          <Text style={styles.stepsText}>Step: 2/3</Text>
          <Text style={styles.approvelText}>Manager Approval</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.flexBetween}>
            <Text style={styles.cardId}>#SC-240507-0001</Text>
            <View style={styles.statusWrapper}>
              <Text style={styles.statusText}>IN-PROGRESS</Text>
            </View>
          </View>
          <View style={[styles.flexView, {paddingTop: hp(1.5)}]}>
            <View style={styles.iconWrapper}>
              <VideoLibrary width="23.33" />
            </View>
            <View>
              <Text style={styles.requestName}>Media Coverage Request</Text>
              <Text style={styles.date}>10-Aug-2024</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.title}>Reference Code</Text>
          <Text style={styles.infoText}>SC-240507-0001</Text>
        </View>
        <View style={styles.divider}></View>
        <View>
          <Text style={styles.title}>Service</Text>
          <Text style={styles.infoText}>Media Coverage</Text>
        </View>
        <View style={styles.divider}></View>
        <View>
          <Text style={styles.title}>Initiated By</Text>
          <View style={styles.flexView}>
            <View style={styles.avatarWrapper}>
              <UserAvatar width="32" height="32" />
            </View>
            <Text style={styles.name}>Ahmed Mustafa</Text>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View>
          <Text style={styles.title}>Department</Text>
          <Text style={styles.infoText}>Marketing & Communication</Text>
        </View>
        <View style={styles.divider}></View>
        <View>
          <Text style={styles.title}>Modified Date</Text>
          <Text style={styles.infoText}>14-Apr-2024</Text>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <RoundedButton title="Approve" />
        <TouchableOpacity>
          <Text style={styles.rejectBtn}>Reject</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ServiceDetailScreen;
