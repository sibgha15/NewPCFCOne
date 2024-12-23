import React, {useState} from 'react';
import {Modal, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {
  PrimaryCalender,
  WhiteArrowIconLeft,
} from '../../../res/assets/images/svgs';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import RoundedButton from '../../components/common/roundedButton';
import MonthAndYearModel from '../../components/Models/MonthModel';

const PayrollScreen = () => {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isStartDate, setIsStartDate] = useState(true);
  const [openModel, setOpenModel] = useState(false);

  const handleDateApply = selectedDate => {
    if (isStartDate) {
      setStartDate(selectedDate);
    } else {
      setEndDate(selectedDate);
    }
    setOpenModel(false);
  };

  const handleClear = () => {
    setStartDate('');
    setEndDate('');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1881BB', '#20AAE2']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <WhiteArrowIconLeft />
          </TouchableOpacity>
          <Text style={styles.headerText}>Payroll</Text>
          <View style={{width: 20}}></View>
        </View>
      </LinearGradient>
      <View style={styles.mainContainer}>
        <View>
          <Text style={[styles.sectionTitle, {marginBottom: 4}]}>
            Start Month
          </Text>
          <View style={styles.dateInputContainer}>
            <Text style={styles.dateText}>{startDate || ''}</Text>
            <TouchableOpacity
              onPress={() => {
                setIsStartDate(true);
                setOpenModel(true);
              }}>
              <PrimaryCalender />
            </TouchableOpacity>
          </View>

          <Text style={[styles.sectionTitle, {marginBottom: 4}]}>
            End Month
          </Text>
          <View style={styles.dateInputContainer}>
            <Text style={styles.dateText}>{endDate || ''}</Text>
            <TouchableOpacity
              onPress={() => {
                setIsStartDate(false);
                setOpenModel(true);
              }}>
              <PrimaryCalender />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <RoundedButton
            title={startDate && endDate ? 'Generate Payslip' : 'Submit'}
            disabled={!endDate || !startDate}
          />
          <TouchableOpacity onPress={handleClear}>
            <Text style={styles.closeButtonText}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        transparent={true}
        visible={openModel}
        animationType="fade"
        onRequestClose={() => setOpenModel(false)}>
        <MonthAndYearModel
          onClose={() => setOpenModel(false)}
          onApply={handleDateApply}
        />
      </Modal>
    </View>
  );
};

export default PayrollScreen;
