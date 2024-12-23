import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import {styles} from './styles';
import StackHeader from '../../components/header/stackHeader';
import {
  Accessibility,
  BlueQR,
  Chat,
  Docs,
  ExpandMoreIcon,
  Facebook,
  GuideBook,
  HandShakeIcon,
  Info,
  Instagram,
  Language,
  Logout,
  Sheild,
  ShowLess,
  StarOutline,
  Support,
  TaskIcon,
  Twitter,
  UserAccount,
  UserAvatar,
} from '../../../res/assets/images/svgs';
import {colors} from '../../../res/themes';
import {useNavigation} from '@react-navigation/native';

const MenuScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StackHeader title={'Main Menu'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.flexView}>
          <View style={styles.userAvatarContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('profileScreen')}>
              <UserAvatar height={50} width={50} />
            </TouchableOpacity>
            <View style={styles.infoContainer}>
              <Text style={styles.name}>Ahmad Mustafa</Text>
              <Text style={styles.designation}>Senior Designer</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('digitalCardScreen')}
            style={styles.scanQRContainer}>
            <BlueQR height={28} width={28} />
          </TouchableOpacity>
        </View>

        <View style={styles.mainContainer}>
          <Text style={[styles.name, {paddingBottom: 5}]}>Account</Text>
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.cardItem}
              onPress={() => navigation.navigate('profileScreen')}>
              <UserAccount width={22.17} height={22.17} />
              <Text style={styles.cardItemText}>Personal Information</Text>
            </TouchableOpacity>
            <View style={styles.separator}></View>
            <TouchableOpacity
              style={styles.cardItem}
              onPress={() => navigation.navigate('taskScreen')}>
              <TaskIcon width={22.17} height={22.17} />
              <Text style={styles.cardItemText}>My Tasks</Text>
            </TouchableOpacity>
            <View style={styles.separator}></View>
            <TouchableOpacity
              style={styles.cardItem}
              onPress={() => navigation.navigate('favoritesScreen')}>
              <StarOutline width={22.17} height={22.17} />
              <Text style={styles.cardItemText}>Show Favorites</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.name, {paddingTop: 15, paddingBottom: 5}]}>
            Settings
          </Text>
          <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.cardItem}>
              <Accessibility width={22.17} height={22.17} />
              <Text style={styles.cardItemText}>Accessibility</Text>
            </TouchableOpacity>
            <View style={styles.separator}></View>
            <View style={[styles.cardItem, {justifyContent: 'space-between'}]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Language width={22.17} height={22.17} />
                <Text style={styles.cardItemText}>العربية</Text>
              </View>
              <Switch
                trackColor={{false: colors.background, true: colors.primary}}
                thumbColor={isEnabled ? colors.white : colors.white}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
          <Text style={[styles.name, {paddingTop: 15, paddingBottom: 5}]}>
            Information
          </Text>
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.cardItem}
              onPress={() => navigation.navigate('aboutScreen')}>
              <Info width={22.17} height={22.17} />
              <Text style={styles.cardItemText}>About PCFC One v0.1</Text>
            </TouchableOpacity>
            <View style={styles.separator}></View>
            <TouchableOpacity
              onPress={() => setShowSocial(!showSocial)}
              style={[
                styles.cardItem,
                {justifyContent: 'space-between', alignItems: 'center'},
              ]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <HandShakeIcon width={22.17} height={22.17} />
                <Text style={styles.cardItemText}>Social Media Links</Text>
              </View>
              {showSocial ? <ShowLess /> : <ExpandMoreIcon />}
            </TouchableOpacity>
            <View style={styles.separator}></View>
            {showSocial && (
              <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.cardItem}>
                  <Facebook width={16} height={16} />
                  <Text style={styles.socialText}>Facebook</Text>
                </TouchableOpacity>
                <View style={styles.separator}></View>
                <TouchableOpacity style={styles.cardItem}>
                  <Instagram width={16} height={16} />
                  <Text style={styles.socialText}>Instagram</Text>
                </TouchableOpacity>
                <View style={styles.separator}></View>
                <TouchableOpacity style={styles.cardItem}>
                  <Twitter width={16} height={16} />
                  <Text style={styles.socialText}>Twitter</Text>
                </TouchableOpacity>
                <View style={styles.separator}></View>
              </View>
            )}
            <TouchableOpacity
              style={styles.cardItem}
              onPress={() => navigation.navigate('userGuideScreen')}>
              <GuideBook width={22.17} height={22.17} />
              <Text style={styles.cardItemText}>User Guide</Text>
            </TouchableOpacity>
            <View style={styles.separator}></View>
            <TouchableOpacity style={styles.cardItem}>
              <Support width={22.17} height={22.17} />
              <Text style={styles.cardItemText}>Service Desk</Text>
            </TouchableOpacity>
            <View style={styles.separator}></View>
            <TouchableOpacity
              style={styles.cardItem}
              onPress={() => navigation.navigate('feedbackScreen')}>
              <Chat width={22.17} height={22.17} />
              <Text style={styles.cardItemText}>Feedback</Text>
            </TouchableOpacity>
            <View style={styles.separator}></View>
            <TouchableOpacity
              style={styles.cardItem}
              onPress={() => navigation.navigate('termsAndConditionScreen')}>
              <Docs width={22.17} height={22.17} />
              <Text style={styles.cardItemText}>Terms & Conditions</Text>
            </TouchableOpacity>
            <View style={styles.separator}></View>
            <TouchableOpacity
              style={styles.cardItem}
              onPress={() => navigation.navigate('privacyPolicyScreen')}>
              <Sheild width={22.17} height={22.17} />
              <Text style={styles.cardItemText}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[styles.cardContainer, {marginTop: 15, marginBottom: 40}]}>
            <TouchableOpacity style={styles.cardItem}>
              <Logout width={22.17} height={22.17} />
              <Text style={[styles.cardItemText, {color: colors.red}]}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: 80}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;
