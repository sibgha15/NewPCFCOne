import React from 'react';
import {View, Text, StatusBar, FlatList} from 'react-native';
import StackHeader from '../../components/header/stackHeader';
import {styles} from './style';
import {GuideBookIcon} from '../../../res/assets/images/svgs';

const DATA = [
  {id: '1', text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'},
  {id: '2', text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'},
  {id: '3', text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'},
  {id: '4', text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'},
  {id: '5', text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'},
];

const UserGuide = () => {
  const renderItem = ({item}: any) => (
    <View style={styles.card}>
      <View style={styles.iconWrapper}>
        <GuideBookIcon />
      </View>
      <Text style={styles.cardText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ffffff"
        translucent={false}
      />
      <StackHeader title="User Guides" backgroundColor="#FFFFFF" />
      <View style={styles.mainContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default UserGuide;
