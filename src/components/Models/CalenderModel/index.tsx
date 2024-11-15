import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import RoundedButton from '../../common/roundedButton';
import {styles} from './style';
import {Calendar} from 'react-native-calendars';
import {format, isBefore} from 'date-fns';

const CalenderModel = ({onClose, onSelectDate}: any) => {
  const [selected, setSelected] = useState('');

  const today = format(new Date(), 'yyyy-MM-dd');

  const handleApply = () => {
    if (selected) {
      onSelectDate(selected);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.modelContainer}>
        <Text style={styles.heading}>Select Date</Text>

        <View style={styles.calenderContainer}>
          <Calendar
            current={today}
            minDate={today}
            onDayPress={day => {
              const selectedDate = day.dateString;
              if (!isBefore(new Date(selectedDate), new Date(today))) {
                setSelected(selectedDate);
              }
            }}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#177DB71A',
              selectedDayTextColor: '#0A7AFF',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: 'orange',
              },
            }}
            hideExtraDays={true}
            disableAllTouchEventsForDisabledDays={true}
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

export default CalenderModel;
