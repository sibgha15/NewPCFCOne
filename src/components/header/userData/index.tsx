import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {ScanQR, UserAvatar} from '../../../../res/assets/images/svgs';
import {useNavigation} from '@react-navigation/native';

const UserData = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.userAvatarContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('profileScreen')}>
          <UserAvatar height={50} width={50} />
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Ahmad Mustafa</Text>
          <Text style={styles.designation}>Senior Designer</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('digitalCardScreen')}>
        <View style={styles.scanQRContainer}>
          <ScanQR height={28} width={28} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserData;
