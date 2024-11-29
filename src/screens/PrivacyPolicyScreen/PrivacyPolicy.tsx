import React from 'react';
import {View, StatusBar, Text, ScrollView} from 'react-native';
import StackHeader from '../../components/header/stackHeader';
import {styles} from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PrivacyPolicyScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ffffff"
        translucent={false}
      />
      <StackHeader title="Privacy Policy" backgroundColor="#FFFFFF" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}>
        <Text style={styles.heading}>Our Commitment and Terminology</Text>
        <Text style={styles.text}>
          PCFC is committed to protecting the  rights and privacy of all
          visitors to its websites. The terms “we”, “us”  or “our(s)” hereunder
          refer to PCFC and its affiliates and the terms  “you” and “you​​r”
          hereunder refer to the user visiting PCFC’s web  portal.
        </Text>
        <Text style={styles.heading}>Scope of Policy</Text>
        <Text style={styles.text}>
          Privacy Policy, applies to PCFC Website (www.PCFC.ae) and to the
          information collected by this Site only.
        </Text>
        <Text style={styles.text}>
          PCFC Website may contains links to other websites that are provided
          only as service information and they are subject to their own privacy
          policy. PCFC is not responsible for any content available at these
          sites, including but not limited to information security and privacy
          practices of these sites.
        </Text>
        <Text style={styles.heading}>
          Collection and Use of the Collected Information
        </Text>
        <Text style={[styles.text, {paddingBottom: hp(0.5)}]}>
          Each time you visit one of Our Sites we may automatically collect the
          following information:
        </Text>
        <View style={styles.listContainer}>
          <View style={styles.bullet}></View>
          <Text style={[styles.text, {paddingBottom: hp(0.5)}]}>
            Technical information, a unique device identifier (for example, your
            Device’s IMEI number, the MAC address of the Device’s wireless
            network interface, the type of browser you use, time zone setting,
            IP address and referring/exit pages (Device Information);
          </Text>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.text}>
            ​​​Details of your use or your visits to any of Our Sites
            (including, but not limited to, traffic data, location data, weblogs
            and other communication data, whether this is required for our own
            billing purposes or otherwise) and the resources that you access
            (Log Information).
          </Text>
        </View>
        <Text style={styles.text}>
          Details of your use or your visits to any of Our Sites (including, but
          not limited to, traffic data, location data, weblogs and other
          communication data, whether this is required for our own billing
          purposes or otherwise) and the resources that you access (Log
          Information).
        </Text>
        <Text style={styles.heading}>Sharing Your Information</Text>
        <Text style={[styles.text, {paddingBottom: hp(8)}]}>
          We may disclose your personal information to affiliates of PCFC and/or
          companies that provide services to help us with our business
          activities such as offering customer service. These third parties are
          authorized to use your personal information only as necessary to
          provide these Services to us as required by law, such as to comply
          with a court order or any other legal process; when we believe in good
          faith that disclosure is necessary to protect our rights, protect your
          safety or the safety of others, investigate fraud, or respond to a
          government request; and/or to any other third party with your prior
          consent to do so.
        </Text>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicyScreen;
