import React, {useState} from 'react';
import {StatusBar, Text, TouchableOpacity, View, Modal} from 'react-native';
import {
  AppleWalletIcon,
  AppleWalletText,
  BlackLogo,
  GoDIcon,
  QRCode,
  WhiteArrowIconLeft,
} from '../../../res/assets/images/svgs';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import RoundedButton from '../../components/common/roundedButton';
import QRBusinessCardModel from '../../components/Models/QRBusineesCardModel';
import ProfileCardModel from '../../components/Models/ProfileCardModel';

const DigitalCardScreen = () => {
  const navigation = useNavigation();
  const [openModel, setOpenModel] = useState(false);
  const [openQRModel, setOpenQRModel] = useState(false);

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
          <Text style={styles.headerText}>Digital Card</Text>
          <View style={{width: 20}}></View>
        </View>
      </LinearGradient>
      <View style={styles.mainContainer}>
        <View style={styles.card}>
          <View style={styles.logoContainer}>
            <GoDIcon />
            <BlackLogo />
          </View>
          <Text style={styles.title}>Muhammad Ali Abdullah</Text>
          <Text style={styles.status}>Senior HR Manager</Text>
          <View style={styles.infoContainer}>
            <View>
              <Text style={styles.infoID}>ID #208908</Text>
              <Text style={styles.infoText}>Talent Culture Department</Text>
              <Text style={styles.infoText}>Corporate Support Center</Text>
            </View>
            <View>
              <QRCode width={100} height={100} />
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => setOpenModel(true)}
            style={styles.wishlistButton}>
            <AppleWalletIcon />
            <AppleWalletText />
          </TouchableOpacity>
          <RoundedButton
            title="QR Business Card"
            onPress={() => setOpenQRModel(true)}
          />
        </View>
      </View>
      <Modal
        transparent={true}
        visible={openQRModel}
        animationType="fade"
        onRequestClose={() => setOpenQRModel(false)}>
        <QRBusinessCardModel onClose={() => setOpenQRModel(false)} />
      </Modal>
      <Modal
        transparent={true}
        visible={openModel}
        animationType="fade"
        onRequestClose={() => setOpenModel(false)}>
        <ProfileCardModel onClose={() => setOpenModel(false)} />
      </Modal>
    </View>
  );
};

export default DigitalCardScreen;
