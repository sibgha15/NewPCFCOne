import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native';
import RoundedButton from '../../common/roundedButton';
import CalenderModel from '../CalenderModel';
import {styles} from './style';
import {colors} from '../../../../res/themes';
import {
  ExpandMoreIcon,
  PrimaryCalender,
} from '../../../../res/assets/images/svgs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const PermissionModel = ({onClose}: any) => {
  const navigation = useNavigation();
  const [openModel, setOpenModel] = useState(false);
  const [permissionType, setPermissionType] = useState(false);
  const [selectHours, setSelectHours] = useState(false);

  const [selectedPermission, setSelectedPermission] =
    useState('Permission Type');
  const [selectedHours, setSelectedHours] = useState('Select Absence Hours');

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isStartDate, setIsStartDate] = useState(true);

  const permissionOptions = ['Work From Home', 'Office Work', 'Hybrid'];
  const hoursOptions = ['1 Hour', '2 Hours', '3 Hours', 'Half Day', 'Full Day'];

  const handleDateSelection = (date: string) => {
    if (isStartDate) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
    setOpenModel(false);
  };

  const handlePermissionType = (item: string) => {
    setSelectedPermission(item);
    setPermissionType(false);
  };

  const handleSelectHours = (item: string) => {
    setSelectedHours(item);
    setSelectHours(false);
  };

  const dismissDropdowns = () => {
    setPermissionType(false);
    setSelectHours(false);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        dismissDropdowns();
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View style={styles.modelContainer}>
          <View style={{position: 'relative'}}>
            <TouchableOpacity
              style={styles.dateInputContainer}
              onPress={() => setPermissionType(true)}>
              <Text
                style={[
                  styles.selectText,
                  selectedPermission === 'Permission Type' && {
                    color: colors.lightGrey,
                  },
                ]}>
                {selectedPermission}
              </Text>
              <ExpandMoreIcon />
            </TouchableOpacity>

            {permissionType && (
              <View style={[styles.dropdown]}>
                <FlatList
                  data={permissionOptions}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => handlePermissionType(item)}>
                      <Text style={styles.optionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}
          </View>

          <View>
            <Text style={[styles.sectionTitle, {marginBottom: 4}]}>
              Start Date
            </Text>
            <View style={styles.dateInputContainer}>
              <Text
                style={[
                  styles.dateText,
                  {color: startDate ? colors.primaryBlack : colors.lightGrey},
                ]}>
                {startDate || ''}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setIsStartDate(true);
                  setOpenModel(true);
                }}>
                <PrimaryCalender />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={[styles.sectionTitle, {marginBottom: 4}]}>
              End Date
            </Text>
            <View style={styles.dateInputContainer}>
              <Text
                style={[
                  styles.dateText,
                  {color: endDate ? colors.primaryBlack : colors.lightGrey},
                ]}>
                {endDate || ''}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setIsStartDate(false);
                  setOpenModel(true);
                }}>
                <PrimaryCalender />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={[styles.sectionTitle, {marginBottom: 4}]}>
            Absence Duration
          </Text>
          <View style={{position: 'relative'}}>
            <TouchableOpacity
              style={styles.dateInputContainer}
              onPress={() => setSelectHours(true)}>
              <Text
                style={[
                  styles.selectText,
                  selectedHours === 'Select Absence Hours' && {
                    color: colors.lightGrey,
                  },
                ]}>
                {selectedHours}
              </Text>
              <ExpandMoreIcon />
            </TouchableOpacity>

            {selectHours && (
              <View
                style={[
                  styles.dropdown,
                  {
                    // top: hp(17),
                    bottom: -hp(20),
                  },
                ]}>
                <FlatList
                  data={hoursOptions}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity onPress={() => handleSelectHours(item)}>
                      <Text style={styles.optionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}
          </View>

          <Text style={[styles.sectionTitle, {marginBottom: 4}]}>Remarks</Text>
          <TextInput
            style={styles.inputBox}
            numberOfLines={4}
            multiline={true}
          />

          <RoundedButton
            onPress={() => {
              onClose();
              navigation.navigate('PermissionScreen');
            }}
            title="Continue"
            disabled={
              !selectedPermission ||
              selectedPermission === 'Permission Type' ||
              !selectedHours ||
              selectedHours === 'Select Absence Hours' ||
              !startDate ||
              !endDate
            }
          />

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>

        <Modal
          transparent={true}
          visible={openModel}
          animationType="fade"
          onRequestClose={() => setOpenModel(false)}>
          <CalenderModel
            onClose={() => setOpenModel(false)}
            onSelectDate={handleDateSelection}
          />
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PermissionModel;
