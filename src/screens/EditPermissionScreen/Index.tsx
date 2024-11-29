import React, {useState} from 'react';
import StackHeader from '../../components/header/stackHeader';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style.ts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RoundedButton from '../../components/common/roundedButton';
import {useNavigation} from '@react-navigation/native';
import RejectModel from '../../components/Models/RejectedModel/index.tsx';

const EditPermissionScreen = () => {
  const navigation = useNavigation();
  const [rejectModalVisible, setRejectModalVisible] = useState(false);

  const handleSubmit = () => {
    setRejectModalVisible(true);
    setTimeout(() => {
      setRejectModalVisible(false);
    }, 8000);
  };

  return (
    <SafeAreaView style={{flexGrow: 1}}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ffffff"
        translucent={false}
      />
      <StackHeader title="Permission" backgroundColor="#ffffff" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={[styles.card, styles.flexBetween]}>
            <Text style={styles.lightText}>Permission Type</Text>
            <Text style={styles.darkText}>Work From Home</Text>
          </View>
          <View style={styles.flexBetween}>
            <View style={[styles.card, {width: wp(44)}]}>
              <Text style={styles.lightText}>Start Date</Text>
              <Text style={styles.darkText}>17-Aug-2024</Text>
            </View>
            <View style={[styles.card, {width: wp(44)}]}>
              <Text style={styles.lightText}>End Date</Text>
              <Text style={styles.darkText}>17-Aug-2024</Text>
            </View>
          </View>
          <View style={[styles.card, styles.flexBetween]}>
            <Text style={styles.lightText}>Absence Duration</Text>
            <Text style={styles.darkText}>4 Hours</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.lightText}>Remarks</Text>
            <Text style={styles.darkText}>
              Contact M. Ali, in case of emergency.
            </Text>
          </View>
          <View>
            <Text style={styles.lightText}>Additional Remarks</Text>
            <TextInput
              style={[styles.textInput, {height: 88}]}
              numberOfLines={4}
              multiline={true}
            />
          </View>
          <RoundedButton
            title="Approve"
            buttonStyle={{marginVertical: hp(1)}}
            onPress={handleSubmit}
          />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.editBtnText}>Reject</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal
        transparent={true}
        visible={rejectModalVisible}
        animationType="fade"
        onRequestClose={() => setRejectModalVisible(false)}>
        <RejectModel
          onClose={() => setRejectModalVisible(false)}
          title="Rejected!"
          message="You have rejected this request."
          buttonText="Go back to Homepage"
        />
      </Modal>
    </SafeAreaView>
  );
};

export default EditPermissionScreen;
