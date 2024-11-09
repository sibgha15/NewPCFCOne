import React, {useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {styles} from './Styles';
import {SplashLogo} from '../../../res/assets/images/svgs';
const ServicesScreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnboardingScreen');
    }, 3000);
  }, []);
  return (
    <View style={styles.splashContainer}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
        translucent={false}
      />
      <SplashLogo />
    </View>
  );
};

export default ServicesScreen;
