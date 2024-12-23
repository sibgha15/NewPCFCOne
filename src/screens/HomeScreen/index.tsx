import React from 'react';
import {ScrollView, StatusBar, Text} from 'react-native';
import Header from '../../components/header';
import Services from '../../components/home/services';
import RecentlyUsedServices from '../../components/home/services/recentlyUsedServices';
import {styles} from './styles';
import {useTheme} from '../../../res/themes/ThemeContext';
import {useFontSize} from '../../../res/themes/FontSizeContext';
import fontSizes from '../../../res/themes/fonts';

const HomeScreen = ({navigation}: any) => {
  const {theme, toggleTheme, isDarkMode} = useTheme();
  const {fontSize} = useFontSize();
  const fonts = fontSizes[fontSize];
  return (
    <ScrollView style={[styles.container, {backgroundColor: theme.background}]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#1881BB"
        translucent={true}
      />
      {/* <Text style={[styles.title, {fontSize: fonts.title, color: 'red'}]}>
        Dynamic Font Title
      </Text> */}

      <Header />
      <Services navigation={navigation} />
      <RecentlyUsedServices />
    </ScrollView>
  );
};

export default HomeScreen;
