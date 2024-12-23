import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {
  Balance,
  CalendarClockIcon,
  ChessIcon,
  ExpandMoreIcon,
  Group,
  LaptopChromeBook,
  MediaCoverage,
  Payroll,
  Security,
  SentimentSatisfied,
  ShieldPerson,
  ShowLess,
  StoreFront,
  WhiteArrowIconLeft,
  Widgets,
} from '../../../res/assets/images/svgs';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from '../../components/header/searchBar';

const ServicesScreen = () => {
  const navigation = useNavigation();
  const [talentCard, setTalentCard] = useState(false);
  const [CorporateMarketing, setCorporateMarketing] = useState(false);

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
          <Text style={styles.headerText}>Services</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ServiceHistory')}>
            <CalendarClockIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <SearchBar />
        </View>
      </LinearGradient>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.cardWrapper}>
            <TouchableOpacity
              onPress={() => setTalentCard(!talentCard)}
              style={styles.card}>
              <View style={styles.flexView}>
                <View
                  style={[
                    styles.cardIconWrapper,
                    {backgroundColor: '#883BA91A'},
                  ]}>
                  <Group width={28} height={28} />
                </View>
                <Text style={styles.cardText}>Talent & Culture</Text>
              </View>
              {talentCard ? <ShowLess /> : <ExpandMoreIcon />}
            </TouchableOpacity>
            <View style={styles.innerCardWrapper}>
              {talentCard && (
                <View style={styles.innerCard}>
                  <Text style={styles.innerCardText}>
                    Visa Renewal & Change Information
                  </Text>
                  <View style={styles.divider}></View>
                  <Text style={styles.innerCardText}>
                    Dubai Ports Authority Facility Card
                  </Text>
                  <View style={styles.divider}></View>
                  <Text style={styles.innerCardText}>
                    Periods and Purchase of Service Yearsin Pension
                  </Text>
                </View>
              )}
            </View>
          </View>
          <TouchableOpacity style={styles.card}>
            <View style={styles.flexView}>
              <View
                style={[
                  styles.cardIconWrapper,
                  {backgroundColor: '#8DC83A1A'},
                ]}>
                <Payroll width={28} height={28} />
              </View>
              <Text style={styles.cardText}>Financial Affairs</Text>
            </View>
            <ExpandMoreIcon />
          </TouchableOpacity>
          <View style={styles.cardWrapper}>
            <TouchableOpacity
              onPress={() => setCorporateMarketing(!CorporateMarketing)}
              style={styles.card}>
              <View style={styles.flexView}>
                <View
                  style={[
                    styles.cardIconWrapper,
                    {backgroundColor: '#F83E3E1A'},
                  ]}>
                  <MediaCoverage width={28} height={28} />
                </View>
                <Text style={styles.cardText}>Corporate Marketing</Text>
              </View>
              {CorporateMarketing ? <ShowLess /> : <ExpandMoreIcon />}
            </TouchableOpacity>
            <View style={styles.innerCardWrapper}>
              {CorporateMarketing && (
                <View style={styles.innerCard}>
                  <Text style={styles.innerCardText}>Media Coverage</Text>
                  <View style={styles.divider}></View>
                  <Text style={styles.innerCardText}>Press Release</Text>
                </View>
              )}
            </View>
          </View>
          <TouchableOpacity style={styles.card}>
            <View style={styles.flexView}>
              <View
                style={[
                  styles.cardIconWrapper,
                  {backgroundColor: '#327AD91A'},
                ]}>
                <LaptopChromeBook width={28} height={28} />
              </View>
              <Text
                style={styles.cardText}
                ellipsizeMode="tail"
                numberOfLines={1}>
                Technology & Digital Transformation
              </Text>
            </View>
            <ExpandMoreIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.flexView}>
              <View
                style={[
                  styles.cardIconWrapper,
                  {backgroundColor: '#FBA7041A'},
                ]}>
                <StoreFront width={28} height={28} />
              </View>
              <Text
                style={styles.cardText}
                ellipsizeMode="tail"
                numberOfLines={1}>
                Procurement
              </Text>
            </View>
            <ExpandMoreIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.flexView}>
              <View
                style={[
                  styles.cardIconWrapper,
                  {backgroundColor: '#20ABE31A'},
                ]}>
                <SentimentSatisfied width={28} height={28} />
              </View>
              <Text
                style={styles.cardText}
                ellipsizeMode="tail"
                numberOfLines={1}>
                Customer Happiness
              </Text>
            </View>
            <ExpandMoreIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.flexView}>
              <View
                style={[
                  styles.cardIconWrapper,
                  {backgroundColor: '#0078D41A'},
                ]}>
                <Widgets width={28} height={28} />
              </View>
              <Text
                style={styles.cardText}
                ellipsizeMode="tail"
                numberOfLines={1}>
                General Services
              </Text>
            </View>
            <ExpandMoreIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.flexView}>
              <View
                style={[
                  styles.cardIconWrapper,
                  {backgroundColor: '#FBD3041A'},
                ]}>
                <Balance width={28} height={28} />
              </View>
              <Text
                style={styles.cardText}
                ellipsizeMode="tail"
                numberOfLines={1}>
                Legal Affairs
              </Text>
            </View>
            <ExpandMoreIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.flexView}>
              <View
                style={[
                  styles.cardIconWrapper,
                  {backgroundColor: '#C199461A'},
                ]}>
                <Security width={28} height={28} />
              </View>
              <Text
                style={styles.cardText}
                ellipsizeMode="tail"
                numberOfLines={1}>
                Information Security Regulation
              </Text>
            </View>
            <ExpandMoreIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.flexView}>
              <View
                style={[
                  styles.cardIconWrapper,
                  {backgroundColor: '#FF70BF1A'},
                ]}>
                <ChessIcon width={28} height={28} />
              </View>
              <Text
                style={styles.cardText}
                ellipsizeMode="tail"
                numberOfLines={1}>
                Strategy & Governance
              </Text>
            </View>
            <ExpandMoreIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.flexView}>
              <View
                style={[
                  styles.cardIconWrapper,
                  {backgroundColor: '#9747FF1A'},
                ]}>
                <ShieldPerson width={28} height={28} />
              </View>
              <Text
                style={styles.cardText}
                ellipsizeMode="tail"
                numberOfLines={1}>
                Security
              </Text>
            </View>
            <ExpandMoreIcon />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ServicesScreen;
