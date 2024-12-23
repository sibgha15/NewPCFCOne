import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
  Modal,
} from 'react-native';
import {styles} from './style';
import {
  CallIcon,
  ChatBubble,
  EditIcon,
  MailIcon,
  UserAvatar,
} from '../../../../res/assets/images/svgs';
import RoundedButton from '../../common/roundedButton';
import SuccessModel from '../SuccessModel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const EditProfileModel = ({onClose}: any) => {
  const [openModel, setOpenModel] = useState(false);

  const handleSaveChanges = () => {
    setOpenModel(true);

    setTimeout(() => {
      setOpenModel(false);

      onClose();
    }, 2000);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}>
        <View style={[styles.card, styles.profileCard]}>
          <View style={styles.userAvatarWrapper}>
            <UserAvatar width={80} height={80} />
            <View style={styles.editIconWrapper}>
              <EditIcon width={16} height={16} />
            </View>
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
          <TextInput
            style={styles.textInput}
            value="I’m Mohammed Ali Abdullah and I’m Head of Information Technology Department. I have experience of more than 20 years in this field."
            multiline={true}></TextInput>
        </View>
      </ScrollView>
      <RoundedButton
        onPress={handleSaveChanges}
        title="Save Changes"
        buttonStyle={{
          marginTop: hp(90),
          marginBottom: hp(4),
          width: wp(93),
          alignSelf: 'center',
        }}
      />
      <Modal
        transparent={true}
        visible={openModel}
        animationType="fade"
        onRequestClose={() => setOpenModel(false)}>
        <SuccessModel
          title="Changes Saved!"
          message="You have successfully updatedyour profile."
          buttonText="Go back to Homepage"
          onClose={() => setOpenModel(false)}
        />
      </Modal>
    </View>
  );
};

export default EditProfileModel;
