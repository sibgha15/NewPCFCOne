import React from 'react';
import {View, StatusBar, Text} from 'react-native';
import StackHeader from '../../components/header/stackHeader';
import {styles} from './Style';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ffffff"
        translucent={false}
      />
      <StackHeader title="About PCFC One" backgroundColor="#FFFFFF" />
      <View style={styles.mainContainer}>
        <Text style={styles.text}>
          PCFC One is a modern internal services platform designed to enhance
          employee efficiency, streamline workflows, and foster a more connected
          workplace. With automated services, a responsive user interface, and
          features like myOneDrive, newsroom, and more, it supports smarter work
          and greater engagement across the PCFC.
        </Text>
        <Text style={styles.text}>version 0.1</Text>
        <Text style={styles.text}>Last updated 11-Nov-2024</Text>
      </View>
    </View>
  );
};

export default AboutScreen;
