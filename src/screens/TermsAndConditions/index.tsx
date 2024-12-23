import React from 'react';
import {View, StatusBar, Text, ScrollView} from 'react-native';
import StackHeader from '../../components/header/stackHeader';
import {styles} from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TermsAndConditionScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ffffff"
        translucent={false}
      />
      <StackHeader title="Terms and Conditions" backgroundColor="#FFFFFF" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}>
        <Text style={styles.text}>
          By accessing the content of PCFC website (www.PCFC.ae) you agree to be
          bound by the terms and conditions set out herein and you accept PCFC
          privacy policy. If you object to any of the terms and conditions set
          out in this agreement, please do not use this web site.
        </Text>
        <Text style={styles.heading}>Proprietary and Copyright Rights</Text>
        <View style={styles.listContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.listText}>
            This Site is maintained by Port Customs and Free zones Corporation
            PCFC.
          </Text>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.listText}>
            The materials located on the Site including the information and
            software programs (the “Contents”), are protected by copyright,
            trademark and other forms of proprietary rights. All rights, title
            and interest in the Contents are owned by, licensed to or controlled
            by PCFC
          </Text>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.listText}>
            Except as otherwise provided, the Contents shall not be reproduced,
            republished, uploaded, posted, transmitted or otherwise distributed
            in any way, without the prior written permission of PCFC
          </Text>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.listText}>
            Modification or use of any of the Contents for any other purpose
            shall be a violation of PCFC’s copyright and other intellectual
            property rights. Graphics and images on the Site are protected by
            copyright and may not be reproduced or appropriated in any manner
            without written permission of PCFC
          </Text>
        </View>
        <Text style={[styles.heading, {paddingTop: hp(2)}]}>
          Disclaimer of Warranties and Liability
        </Text>
        <View style={styles.listContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.listText}>
            You clearly understand and agree that your use of the Site, or any
            material available through this Site, is at your own risk. Neither
            PCFC web site nor its employees warrant that the Site will be
            uninterrupted, problem-free, free of omissions, or error-free; nor
            do they make any warranty as to the results that may be obtained
            from the use of the Site.
          </Text>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.listText}>
            The content and function of the Site are provided to you “as is,”
            without warranties of any kind, either express or implied,
            including, but not limited to, warranties of title, merchantability,
            fitness for a particular purpose or use, or currency
          </Text>
        </View>
        <View style={[styles.listContainer, {paddingBottom: hp(8)}]}>
          <View style={styles.bullet}></View>
          <Text style={styles.listText}>
            In no event will PCFC or its employees be liable for any incidental,
            indirect, special, punitive, exemplary, or consequential damages,
            arising out of your use of or inability to use the Site, including
            without limitation, loss of revenue or anticipated profits, loss of
            goodwill, loss of business, loss of data, computer failure or
            malfunction, or any other damages.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default TermsAndConditionScreen;
