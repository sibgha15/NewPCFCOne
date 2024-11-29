import React from 'react';
import {Image, ScrollView, StatusBar, Text, View} from 'react-native';
import {styles} from './style';
import StackHeader from '../../components/header/stackHeader';

const NewsDetailScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ffffff"
        translucent={false}
      />
      <StackHeader title="News" backgroundColor="#ffffff" />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <Image source={'../../../res/assets/images/image.png'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default NewsDetailScreen;
