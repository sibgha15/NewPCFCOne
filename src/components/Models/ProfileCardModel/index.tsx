import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {BlackLogo, GoDIcon, QRCode} from '../../../../res/assets/images/svgs';
import LinearGradient from 'react-native-linear-gradient';

const ProfileCardModel = ({onClose}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => onClose()}>
          <Text style={styles.closeText}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <GoDIcon />
          <BlackLogo />
        </View>
        <LinearGradient
          colors={['#20AAE2', '#318CC7']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.cardContent}>
          <Text style={styles.name}>Muhammad Ali Abdullah</Text>
          <View>
            <View style={styles.flexBetween}>
              <View style={styles.halfBox}>
                <Text style={styles.label}>position</Text>
                <Text style={styles.info}>HR Manager</Text>
              </View>
              <View style={styles.halfBox}>
                <Text style={styles.label}>ID Number</Text>
                <Text style={styles.info}>906123</Text>
              </View>
            </View>
            <View style={styles.flexBetween}>
              <View style={styles.halfBox}>
                <Text style={styles.label}>DEPARTMENT</Text>
                <Text style={styles.info}>Talent & Culture</Text>
              </View>
              <View style={styles.halfBox}>
                <Text style={styles.label}>BUSINESS UNIT</Text>
                <Text style={styles.info}>Corporate Support Center</Text>
              </View>
            </View>
          </View>
          <View style={styles.qrCard}>
            <QRCode width={132} height={132} />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default ProfileCardModel;
