import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Switch, Modal} from 'react-native';
import {styles} from './style';
import RoundedButton from '../../common/roundedButton';
import {colors} from '../../../../res/themes';
import {PrimaryCalender} from '../../../../res/assets/images/svgs';
import RangeCalenderModel from '../RangeCalenderModel';
import MonthPickerModel from '../MonthPickerModel';

const HistoryFilterModel = ({onClose}: any) => {
  const [openModel, setOpenModel] = useState(false);
  const [isDateEnabled, setIsDateEnabled] = useState(false);
  const [isMonthEnabled, setIsMonthEnabled] = useState(false);
  const [openMonthModel, setOpenMonthModel] = useState(false);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

  const onDateToggle = () => setIsDateEnabled(prev => !prev);
  const MonthToggle = () => {
    setIsMonthEnabled(prev => !prev);
    if (!isMonthEnabled) {
      setOpenMonthModel(true);
    }
  };

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

  const handleMonthSelection = (monthYear: string) => {
    setSelectedMonth(monthYear);
    setOpenMonthModel(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.modelContainer}>
        <Text style={styles.heading}>Filters</Text>

        <View style={styles.flexbetween}>
          <Text style={styles.sectionTitle}>Date</Text>
          <Switch
            trackColor={{false: colors.background, true: colors.primary}}
            thumbColor={isDateEnabled ? colors.white : colors.white}
            onValueChange={onDateToggle}
            value={isDateEnabled}
          />
        </View>

        {isDateEnabled && (
          <View>
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
                  {startDate || 'Select Start Date'}
                </Text>
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
                <Text
                  style={[
                    styles.dateText,
                    {color: endDate ? colors.primaryBlack : colors.lightGrey},
                  ]}>
                  {endDate || 'Select End Date'}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setOpenModel(true);
                  }}>
                  <PrimaryCalender />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        <View style={styles.flexbetween}>
          <Text style={styles.sectionTitle}>Month</Text>
          <Switch
            trackColor={{false: colors.background, true: colors.primary}}
            thumbColor={isMonthEnabled ? colors.white : colors.white}
            onValueChange={MonthToggle}
            value={isMonthEnabled}
          />
        </View>

        <RoundedButton
          title="Apply"
          disabled={!isDateEnabled || !isMonthEnabled}
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
        <RangeCalenderModel
          onClose={() => setOpenModel(false)}
          onSelectDate={handleDateSelection}
        />
      </Modal>

      <Modal
        transparent={true}
        visible={openMonthModel}
        animationType="fade"
        onRequestClose={() => setOpenMonthModel(false)}>
        <MonthPickerModel
          onClose={() => setOpenMonthModel(false)}
          onApply={handleMonthSelection}
        />
      </Modal>
    </View>
  );
};

export default HistoryFilterModel;
