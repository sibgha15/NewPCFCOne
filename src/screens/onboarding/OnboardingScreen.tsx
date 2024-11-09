import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  Onboarding,
  AttendanceOnboarding,
  Admin,
  Task,
} from '../../../res/assets/images/svgs';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../res/themes';

import {CommonActions} from '@react-navigation/native';
import {styles} from './Styles';

const {width: screenWidth} = Dimensions.get('window');

const SliderScreen = ({navigation}: any) => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const handleContinue = () => {
    if (activeSlide < slides.length - 1) {
      // Move to the next slide
      carouselRef?.current?.snapToNext();
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'LoginScreen'}],
        }),
      );
    }
  };
  const slides = [
    {
      title: 'About PCFC One',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: Onboarding,
    },
    {
      title: 'Tasks Management',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: Task,
    },
    {
      title: 'Attendance',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: AttendanceOnboarding,
    },
    {
      title: 'Personal Admin',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: Admin,
    },
  ];

  const renderItem = ({item, index}: any) => (
    <LinearGradient
      colors={[colors.white, colors.background, colors.skyblue]}
      style={styles.slide}>
      <TouchableOpacity
        style={styles.introButton}
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'LoginScreen'}],
            }),
          );
        }}>
        <Text style={styles.introtext}>Skip Intro</Text>
      </TouchableOpacity>
      <View style={styles.icon}>
        <item.icon />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.headingText}>{item?.title}</Text>
        <Text style={styles.descriptionText}>{item?.description}</Text>
        {activeSlide === slides.length - 1 ? (
          <TouchableOpacity onPress={handleContinue}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={[colors.skyblue, colors.darkBlue]}
              style={styles.bottomButtonwithoutBorder}>
              <Text style={[styles.buttontext, {color: colors.white}]}>
                Get Started
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={handleContinue}>
            <Text style={[styles.buttontext]}>Continue</Text>
          </TouchableOpacity>
        )}
      </View>
    </LinearGradient>
  );

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={slides}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        loop={false}
        layout="stack" // Choose between 'default', 'stack', or 'tinder'
        layoutCardOffset={18}
        onSnapToItem={index => {
          setActiveSlide(index);
        }}
      />
      <Pagination
        dotsLength={slides.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default SliderScreen;
