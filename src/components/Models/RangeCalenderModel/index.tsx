import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import RoundedButton from '../../common/roundedButton';
import {styles} from './style';
import {Calendar} from 'react-native-calendars';
import {format, isBefore} from 'date-fns';
import {colors} from '../../../../res/themes';

const RangeCalenderModel = ({onClose, onSelectDate}: any) => {
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const today = format(new Date(), 'yyyy-MM-dd');

  const handleDayPress = (day: any) => {
    const selectedDate = day.dateString;

    if (!startDate || (startDate && endDate)) {
      setStartDate(selectedDate);
      setEndDate(null);
    } else if (isBefore(new Date(selectedDate), new Date(startDate))) {
      setStartDate(selectedDate);
      setEndDate(null);
    } else {
      setEndDate(selectedDate);
    }
  };

  const handleApply = () => {
    if (startDate && endDate) {
      onSelectDate({startDate, endDate});
      onClose();
    }
  };

  const getMarkedDates = () => {
    const marked: any = {};

    if (startDate) {
      marked[startDate] = {
        color: '#e8f2f9',
        textColor: colors.primary,
        startingDay: true,
        endingDay: !endDate,
      };
    }

    if (endDate) {
      marked[endDate] = {
        color: '#e8f2f9',
        textColor: colors.primary,
        endingDay: true,
      };
    }

    if (startDate && endDate) {
      let current = new Date(startDate);

      while (isBefore(current, new Date(endDate))) {
        const formattedDate = format(current, 'yyyy-MM-dd');
        if (formattedDate !== startDate && formattedDate !== endDate) {
          marked[formattedDate] = {
            color: '#e8f2f9',
            textColor: colors.primary,
            startingDay: false,
            endingDay: false,
          };
        }
        current = new Date(current.setDate(current.getDate() + 1));
      }
    }

    return marked;
  };

  return (
    <View style={styles.container}>
      <View style={styles.modelContainer}>
        <Text style={styles.heading}>Select Date</Text>

        <View style={styles.calenderContainer}>
          <Calendar
            current={today}
            minDate={today}
            onDayPress={handleDayPress}
            markingType={'period'}
            markedDates={getMarkedDates()}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              todayTextColor: colors.primary,
              dayTextColor: '#2d4150',
              textDisabledColor: colors.lightGrey,
              arrowColor: '#000000',
              monthTextColor: '#000000',
              textDayFontSize: 16,
            }}
            hideExtraDays={true}
          />
        </View>

        <RoundedButton title="Apply" onPress={handleApply} />
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RangeCalenderModel;
