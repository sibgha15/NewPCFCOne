import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {styles} from './styles';
import SearchBar from '../../components/header/searchBar';
import {
  Attendance,
  CompleteTask,
  InCompleteTask,
} from '../../../res/assets/images/svgs';

const ActivityScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={{fontSize: 40}}>Activity Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ActivityScreen;
