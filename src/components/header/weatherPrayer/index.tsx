import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';
import {PrayerIcon, Sunny} from '../../../../res/assets/images/svgs';

const data = [
  {
    type: 'weather',
    icon: <Sunny />,
    text: '23 °C Sunny',
  },
  {
    type: 'prayer',
    icon: <PrayerIcon />,
    text: '3:35 PM Dhuhur',
  },
];

const WeatherPrayer = () => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index}>
          <View style={styles.weatherContainer}>
            {item.icon}
            {item.type === 'weather' ? (
              <>
                <Text style={styles.temperatureText}>
                  {item.text.split('°')[0]}
                </Text>
                <Text style={styles.weatherText}>
                  °{item.text.split('°')[1]}
                </Text>
              </>
            ) : (
              <>
                <Text style={styles.prayerTimeText}>
                  {item.text.split(' ')[0]}
                </Text>
                <Text style={styles.prayerText}>
                  {item.text.split(' ')[1]} {item.text.split(' ')[2]}
                </Text>
              </>
            )}
          </View>
        </View>
      ))}
    </View>
  );
};

export default WeatherPrayer;
