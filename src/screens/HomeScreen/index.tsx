import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import Header from '../../components/header';
import Services from '../../components/home/services';
import RecentlyUsedServices from '../../components/home/services/recentlyUsedServices';
import {styles} from './styles';

const HomeScreen = ({navigation}: any) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#1881BB"
        translucent={true}
      />
      <Header />
      <Services navigation={navigation} />
      <RecentlyUsedServices />
    </ScrollView>
  );
};

export default HomeScreen;
