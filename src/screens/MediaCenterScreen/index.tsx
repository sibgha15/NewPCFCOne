import React from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {
  CompleteTask,
  News,
  Promotions,
  Publications,
  RightArrow,
  WhiteArrowIconLeft,
} from '../../../res/assets/images/svgs';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';

const MediaCenterScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#1881BB"
        translucent={false}
      />
      <LinearGradient
        colors={['#1881BB', '#20AAE2']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.header}>
        <View style={styles.topHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <WhiteArrowIconLeft />
          </TouchableOpacity>
          <Text style={styles.headerText}>Media Center</Text>
          <View style={{width: 20}}></View>
        </View>
      </LinearGradient>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('NewsScreen')}
            style={styles.card}>
            <View style={styles.flexView}>
              <View style={styles.cardIconWrapper}>
                <News width={28} height={28} />
              </View>
              <Text style={styles.cardText}>News</Text>
            </View>
            <TouchableOpacity>
              <RightArrow />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PublicationScreen')}
            style={styles.card}>
            <View style={styles.flexView}>
              <View style={styles.cardIconWrapper}>
                <Publications width={28} height={28} />
              </View>
              <Text style={styles.cardText}>Publications</Text>
            </View>
            <TouchableOpacity>
              <RightArrow />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('PromotionScreen')}>
            <View style={styles.flexView}>
              <View style={styles.cardIconWrapper}>
                <Promotions width={28} height={28} />
              </View>
              <Text style={styles.cardText}>Promotions</Text>
            </View>
            <TouchableOpacity>
              <RightArrow />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MediaCenterScreen;
