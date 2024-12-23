import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
  Share,
  Alert,
} from 'react-native';
import {styles} from './style';
import {
  ExpandMoreIcon,
  QRCode,
  ShowLess,
} from '../../../../res/assets/images/svgs';
import RoundedButton from '../../common/roundedButton';
import {colors} from '../../../../res/themes';

const QRBusinessCardModel = ({onClose}: any) => {
  const [showData, setShowData] = useState(false);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Share Contact Card',
        url: 'https://one.pcfc.ae/',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}>
        <View style={styles.QRCard}>
          <QRCode height={250} width={250} />
        </View>
        <View style={styles.card}>
          <TouchableOpacity
            onPress={() => setShowData(!showData)}
            style={styles.flexBetween}>
            <Text style={styles.title}>Personal Data</Text>
            {showData ? <ShowLess /> : <ExpandMoreIcon />}
          </TouchableOpacity>
          {showData && (
            <View style={styles.dataContainer}>
              <Text style={styles.subtitle}>Name</Text>
              <Text style={styles.info}>Muhammad Ali Abdullah</Text>
              <View style={styles.divider}></View>
              <Text style={styles.subtitle}>Designation</Text>
              <Text style={[styles.info, {paddingBottom: 0}]}>
                Senior HR Manager
              </Text>
              <View style={styles.divider}></View>
              <Text style={styles.subtitle}>Department</Text>
              <Text style={[styles.info, {paddingBottom: 0}]}>
                Information Technology
              </Text>
              <View style={styles.divider}></View>
              <Text style={styles.subtitle}>Business Unit</Text>
              <Text style={[styles.info, {paddingBottom: 0}]}>
                Customer Support Center
              </Text>
              <View style={styles.divider}></View>
              <Text style={styles.subtitle}>Mobile Phone</Text>
              <Text style={[styles.info, {paddingBottom: 0}]}>
                +971 000 1234567
              </Text>
              <View style={styles.divider}></View>
              <Text style={styles.subtitle}>Telephone</Text>
              <Text style={[styles.info, {paddingBottom: 0}]}>
                +971 000 1234567
              </Text>
              <View style={styles.divider}></View>
              <Text style={styles.subtitle}>Email</Text>
              <Text style={[styles.info, {paddingBottom: 0}]}>
                muhammadaliabdullah@gmail.com
              </Text>
              <View style={styles.divider}></View>
              <Text style={styles.subtitle}>Birthday</Text>
              <Text style={[styles.info, {paddingBottom: 0}]}>15-May-1989</Text>
              <View style={styles.divider}></View>
              <Text style={styles.subtitle}>Location</Text>
              <Text
                style={[
                  styles.info,
                  {paddingBottom: 0, color: colors.primary},
                ]}>
                https://maps.app.goo.gl/2fPiRmajlgshdf
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <RoundedButton title="Share Contact Card" onPress={onShare} />
        <TouchableOpacity onPress={() => onClose()}>
          <Text style={styles.closebtn}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QRBusinessCardModel;
