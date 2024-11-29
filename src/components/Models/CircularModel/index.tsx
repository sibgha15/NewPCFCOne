import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Switch, Modal} from 'react-native';
import RoundedButton from '../../common/roundedButton';
import {PrimaryCalender} from '../../../../res/assets/images/svgs';
import {styles} from './style';
import RangeCalenderModel from '../RangeCalenderModel';

const CirculatesModel = ({onClose}: any) => {
  const [openModel, setOpenModel] = useState(false);
  const [isDateEnabled, setIsDateEnabled] = useState(false);
  const [isDepartmentEnabled, setIsDepartmentEnabled] = useState(false);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isStartDate, setIsStartDate] = useState(true);

  const handleDateSelection = (date: string) => {
    if (isStartDate) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
    setOpenModel(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.modelContainer}>
        <Text style={styles.heading}>Filters</Text>

        <View>
          <View>
            <Text style={[styles.sectionTitle, {marginBottom: 4}]}>
              Start Date
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
          </View>

          <View>
            <Text style={[styles.sectionTitle, {marginBottom: 4}]}>
              End Date
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
        </View>

        <RoundedButton title="Apply" disabled={!startDate || !endDate} />

        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={openModel}
        animationType="fade"
        onRequestClose={() => setOpenModel(false)}>
        <RangeCalenderModel
          onClose={() => setOpenModel(false)}
          onSelectDate={handleDateSelection}
        />
      </Modal>
    </View>
  );
};

export default CirculatesModel;
