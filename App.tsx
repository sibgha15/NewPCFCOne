import React from 'react';
import 'react-native-gesture-handler';
import AppNavigator from './core/navigations/AppNavigator';
import {ThemeProvider} from './res/themes/ThemeContext';
import {FontSizeProvider} from './res/themes/FontSizeContext';

export default function App() {
  return (
    <FontSizeProvider>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </FontSizeProvider>
  );
}
