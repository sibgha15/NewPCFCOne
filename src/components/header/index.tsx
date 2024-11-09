import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import UserData from './userData';
import SearchBar from './searchBar';
import WeatherPrayer from './weatherPrayer';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    // <LinearGradient
    //   colors={['#20AAE2', '#1881BB']}
    //   start={{x: 0, y: 0}}
    //   end={{x: 1, y: 0}}
    //   style={styles.container}>
    <View style={styles.container}>
      <UserData />
      <TouchableOpacity onPress={() => navigation.navigate('searchScreen')}>
        <SearchBar editable={false} />
      </TouchableOpacity>
      <WeatherPrayer />
    </View>
    // </LinearGradient>
  );
};

export default Header;
