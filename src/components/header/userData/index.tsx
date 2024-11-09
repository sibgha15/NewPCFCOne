import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {ScanQR, UserAvatar} from '../../../../res/assets/images/svgs';

const UserData = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userAvatarContainer}>
        <UserAvatar height={50} width={50} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Ahmad Mustafa</Text>
          <Text style={styles.designation}>Senior Designer</Text>
        </View>
      </View>

      <View style={styles.scanQRContainer}>
        <ScanQR height={28} width={28} />
      </View>
    </View>
  );
};

export default UserData;
