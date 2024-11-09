import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, Text} from 'react-native';
import {styles} from './styles';

const ChatbotScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 40}}>Chatbot Screen</Text>
    </SafeAreaView>
  );
};

export default ChatbotScreen;
