import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {styles} from './styles';
import SearchBar from '../../components/header/searchBar';
import {
  Attendance,
  CompleteTask,
  InCompleteTask,
} from '../../../res/assets/images/svgs';

const SearchScreen = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <SearchBar onFocus={handleFocus} onBlur={handleBlur} />
        </View>
        <ScrollView>
          {isInputFocused && (
            <View style={styles.suggestionContainer}>
              <Text style={styles.title}>Suggestions</Text>
              <View style={styles.suggestionRow}>
                <View style={styles.iconWrapper}>
                  <Attendance width={26} />
                </View>
                <Text style={styles.suggestionText}>Attendance</Text>
              </View>
              <View style={styles.separator}></View>
              <View style={styles.suggestionRow}>
                <View
                  style={[styles.iconWrapper, {backgroundColor: '#177DB71A'}]}>
                  <InCompleteTask width={26} />
                </View>
                <Text style={styles.suggestionText}>Annual Leave</Text>
              </View>
              <View style={styles.separator}></View>
              <View style={styles.suggestionRow}>
                <View
                  style={[styles.iconWrapper, {backgroundColor: '#177DB71A'}]}>
                  <InCompleteTask width={26} />
                </View>
                <Text style={styles.suggestionText}>Sick Leave</Text>
              </View>
              <View style={styles.separator}></View>
              <View style={styles.suggestionRow}>
                <View
                  style={[styles.iconWrapper, {backgroundColor: '#177DB71A'}]}>
                  <InCompleteTask width={26} />
                </View>
                <Text style={styles.suggestionText}>Bereavement Leave</Text>
              </View>
              <View style={styles.separator}></View>
              <View style={styles.suggestionRow}>
                <View
                  style={[styles.iconWrapper, {backgroundColor: '#177DB71A'}]}>
                  <InCompleteTask width={26} />
                </View>
                <Text style={styles.suggestionText}>Training Leave</Text>
              </View>
              <View style={styles.separator}></View>
              <View style={styles.suggestionRow}>
                <View
                  style={[styles.iconWrapper, {backgroundColor: '#177DB71A'}]}>
                  <InCompleteTask width={26} />
                </View>
                <Text style={styles.suggestionText}>
                  Unauthorized Unpaid Leave
                </Text>
              </View>
              <View style={styles.separator}></View>
              <View style={styles.suggestionRow}>
                <View
                  style={[styles.iconWrapper, {backgroundColor: '#177DB71A'}]}>
                  <CompleteTask width={26} />
                </View>
                <Text style={styles.suggestionText}>Leave Early</Text>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
