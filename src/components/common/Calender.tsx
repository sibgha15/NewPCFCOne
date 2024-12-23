import React, {useState} from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';

export const CalenderComponent = () => {
  const [selected, setSelected] = useState<string>('');
  const today = new Date().toISOString().split('T')[0];

  const generateMarkedDates = () => {
    const markedDates = {};

    const startYear = 2000;
    const endYear = 2050;

    for (let year = startYear; year <= endYear; year++) {
      for (let month = 1; month <= 12; month++) {
        const daysInMonth = new Date(year, month, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
          const date = `${year}-${String(month).padStart(2, '0')}-${String(
            day,
          ).padStart(2, '0')}`;
          markedDates[date] = {
            customStyles: {
              container: {
                backgroundColor: selected === date ? '#177DB7' : 'transparent',
                height: 44,
                width: 44,
                borderRadius: 120,
                alignItems: 'center',
                justifyContent: 'center',
              },
              text: {
                color: selected === date ? '#FFFFFF' : '#000000',
                fontSize: 18,
                fontWeight: 'semibold',
                lineHeight: 24,
                letterSpacing: 0.5,
              },
            },
          };
        }
      }
    }

    if (today) {
      markedDates[today] = {
        ...markedDates[today],
        customStyles: {
          container: {
            backgroundColor: '#177DB71A',
            height: 44,
            width: 44,
            borderRadius: 120,
            alignItems: 'center',
            justifyContent: 'center',
          },
          text: {
            color: '#177DB7',
            fontSize: 22,
            fontWeight: 'bold',
          },
        },
      };
    }

    return markedDates;
  };

  return (
    <View>
      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={generateMarkedDates()}
        markingType="custom"
      />
    </View>
  );
};
