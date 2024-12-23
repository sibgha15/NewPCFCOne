import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import RoundedButton from '../../common/roundedButton';
import {styles} from './styles';
import {LeftArrow, RightArrow} from '../../../../res/assets/images/svgs';

const months = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

const yearsRange = (start: any, end: any) => {
  const years = [];
  for (let year = start; year <= end; year++) {
    years.push(year.toString());
  }
  return years;
};

const MonthPickerModel = ({onClose, onApply}: any) => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString(),
  );

  const incrementYear = () => {
    setSelectedYear(prevYear => (parseInt(prevYear) + 1).toString());
  };

  const decrementYear = () => {
    setSelectedYear(prevYear => (parseInt(prevYear) - 1).toString());
  };

  const handleApply = () => {
    onApply(selectedMonth);
    onClose();
  };

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      style={[
        styles.monthYearButton,
        item === selectedMonth && styles.selectedButton,
      ]}
      onPress={() => setSelectedMonth(item)}>
      <Text
        style={[
          styles.monthYearText,
          item === selectedMonth && styles.selectedText,
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.modelContainer}>
        <Text style={styles.heading}>Select Month</Text>

        <View style={styles.yearNavigation}>
          <TouchableOpacity onPress={decrementYear}>
            <LeftArrow width={12} />
          </TouchableOpacity>
          <Text style={styles.yearRangeText}>{selectedYear}</Text>
          <TouchableOpacity onPress={incrementYear}>
            <RightArrow width={12} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={months}
          numColumns={4}
          keyExtractor={item => item}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />

        <RoundedButton
          title="Apply"
          disabled={!selectedMonth}
          onPress={handleApply}
        />

        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MonthPickerModel;
