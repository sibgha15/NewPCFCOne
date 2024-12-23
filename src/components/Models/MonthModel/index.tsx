import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import RoundedButton from '../../common/roundedButton';
import {LeftArrow, RightArrow} from '../../../../res/assets/images/svgs';
import {styles} from './style';

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

const MonthAndYearModel = ({onClose, onApply}: any) => {
  const [isYearView, setIsYearView] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString(),
  );
  const [yearRange, setYearRange] = useState({start: 2018, end: 2029});
  const [years, setYears] = useState(
    yearsRange(yearRange.start, yearRange.end),
  );

  const handleApply = () => {
    onApply(`${selectedMonth}-${selectedYear}`);
    onClose();
  };

  const handleNextYearRange = () => {
    const newStart = yearRange.end + 1;
    const newEnd = yearRange.end + 12;
    setYearRange({start: newStart, end: newEnd});
    setYears(yearsRange(newStart, newEnd));
  };

  const handlePreviousYearRange = () => {
    const newStart = yearRange.start - 12;
    const newEnd = yearRange.start - 1;
    setYearRange({start: newStart, end: newEnd});
    setYears(yearsRange(newStart, newEnd));
  };

  const incrementYear = () => {
    setSelectedYear(prevYear => (parseInt(prevYear) + 1).toString());
  };

  const decrementYear = () => {
    setSelectedYear(prevYear => (parseInt(prevYear) - 1).toString());
  };

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      style={[
        styles.monthYearButton,
        (item === selectedMonth || item === selectedYear) &&
          styles.selectedButton,
      ]}
      onPress={() => {
        if (isYearView) {
          setSelectedYear(item);
          setIsYearView(false);
        } else {
          setSelectedMonth(item);
        }
      }}>
      <Text
        style={[
          styles.monthYearText,
          (item === selectedMonth || item === selectedYear) &&
            styles.selectedText,
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.modelContainer}>
        <Text style={styles.heading}>
          {isYearView ? 'Select Year' : 'Select Month'}
        </Text>

        {isYearView && (
          <View style={styles.yearNavigation}>
            <TouchableOpacity onPress={handlePreviousYearRange}>
              <LeftArrow width={12} />
            </TouchableOpacity>
            <Text style={styles.yearRangeText}>
              {yearRange.start} - {yearRange.end}
            </Text>
            <TouchableOpacity onPress={handleNextYearRange}>
              <RightArrow width={12} />
            </TouchableOpacity>
          </View>
        )}

        {!isYearView && (
          <View style={styles.yearNavigation}>
            <TouchableOpacity onPress={decrementYear}>
              <LeftArrow width={20} height={20} />
            </TouchableOpacity>
            <Text style={styles.yearRangeText}>{selectedYear}</Text>
            <TouchableOpacity onPress={incrementYear}>
              <RightArrow width={20} height={20} />
            </TouchableOpacity>
          </View>
        )}

        <FlatList
          data={isYearView ? years : months}
          numColumns={4}
          keyExtractor={item => item}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />

        <RoundedButton
          title="Apply"
          disabled={!selectedMonth || !selectedYear}
          onPress={handleApply}
        />

        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MonthAndYearModel;
