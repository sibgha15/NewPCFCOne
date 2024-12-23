import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
} from 'react-native';
import {
  CallIcon,
  ChatBubble,
  MailIcon,
  UserAvatar,
  WhiteArrowIconLeft,
} from '../../../res/assets/images/svgs';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './Style';
import RoundedButton from '../../components/common/roundedButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EditProfileModel from '../../components/Models/EditProfileModel';

const ProfileScreen = () => {
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
          <Text style={styles.headerText}>Profile</Text>
          <View style={{width: 20}}></View>
        </View>
      </LinearGradient>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}>
        <View style={[styles.card, styles.profileCard]}>
          <View style={styles.userAvatarWrapper}>
            <UserAvatar width={80} height={80} />
          </View>
          <Text style={styles.name}>Mohammed Ali Abdullah</Text>
          <Text style={styles.status}>Head of Department</Text>
          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.iconWrapper}>
              <MailIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrapper}>
              <CallIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrapper}>
              <ChatBubble />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Personal Information</Text>
          <Text style={styles.subTitle}>Department</Text>
          <Text style={styles.info}>Information Technology</Text>
          <View style={styles.divider}></View>
          <Text style={styles.subTitle}>Mobile Phone</Text>
          <Text style={styles.info}>+971 000 1234567</Text>
          <View style={styles.divider}></View>
          <Text style={styles.subTitle}>Work Email</Text>
          <Text style={[styles.info, {paddingBottom: 0}]}>
            muhammadaliabdullah@gmail.com
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.info}>
            I’m Mohammed Ali Abdullah and I’m Head of Information Technology
            Department. I have experience of more than 20 years in this field.
          </Text>
        </View>
      </ScrollView>
      <RoundedButton
        title="Edit Profile"
        buttonStyle={{
          marginTop: hp(2),
          marginBottom: hp(4),
          width: wp(93),
          alignSelf: 'center',
        }}
        onPress={() => setOpenModel(true)}
      />
      <Modal
        transparent={true}
        visible={openModel}
        animationType="fade"
        onRequestClose={() => setOpenModel(false)}>
        <EditProfileModel onClose={() => setOpenModel(false)} />
      </Modal>
    </View>
  );
};

export default ProfileScreen;
