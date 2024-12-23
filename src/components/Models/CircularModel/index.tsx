import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Switch, Modal} from 'react-native';
import RoundedButton from '../../common/roundedButton';
import {PrimaryCalender} from '../../../../res/assets/images/svgs';
import {styles} from './style';
import RangeCalenderModel from '../RangeCalenderModel';
import {format, isBefore} from 'date-fns';

const CirculatesModel = ({onClose}: any) => {
  const [openModel, setOpenModel] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleDateSelection = ({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate: string;
  }) => {
    setStartDate(startDate);
    setEndDate(endDate);
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
