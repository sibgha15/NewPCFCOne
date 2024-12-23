import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useFontSize} from './FontSizeContext';

const SettingsScreen = () => {
  const {setFontSize} = useFontSize();

  return (
    <View style={styles.container}>
      <Button title="Small" onPress={() => setFontSize('small')} />
      <Button title="Medium" onPress={() => setFontSize('medium')} />
      <Button title="Large" onPress={() => setFontSize('large')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
