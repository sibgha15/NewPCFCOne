import React, {useState} from 'react';
import StackHeader from '../../components/header/stackHeader';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import {styles} from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RoundedButton from '../../components/common/roundedButton';
import {useNavigation} from '@react-navigation/native';
import SuccessModel from '../../components/Models/SuccessModel';

const PermissionScreen = () => {
  const navigation = useNavigation();
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const handleSubmit = () => {
    setSuccessModalVisible(true);
    setTimeout(() => {
      setSuccessModalVisible(false);
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
        <RoundedButton
          title="Submit"
          buttonStyle={{marginVertical: hp(1)}}
          onPress={handleSubmit}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('EditPermissionScreen')}>
          <Text style={styles.editBtnText}>Edit Details</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={successModalVisible}
        animationType="fade"
        onRequestClose={() => setSuccessModalVisible(false)}>
        <SuccessModel
          onClose={() => setSuccessModalVisible(false)}
          title="Approved!"
          message="You have approved this request."
          buttonText="Go back to Homepage"
        />
      </Modal>
    </SafeAreaView>
  );
};

export default PermissionScreen;
