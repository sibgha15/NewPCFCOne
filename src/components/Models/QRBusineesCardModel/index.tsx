import React, {useState} from 'react';
import {Text, TouchableOpacity, View, ScrollView, Modal} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import {
  ExpandMoreIcon,
  QRCode,
  ShowLess,
} from '../../../../res/assets/images/svgs';
import RoundedButton from '../../common/roundedButton';
import ProfileCardModel from '../ProfileCardModel';

const QRBusinessCardModel = ({onClose}: any) => {
  const [showData, setShowData] = useState(false);
  const [openModel, setOpenModel] = useState(false);

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
              <Text style={styles.subtitle}>ID #</Text>
              <Text style={styles.info}>208908</Text>
              <View style={styles.divider}></View>
              <Text style={styles.subtitle}>Designation</Text>
              <Text style={styles.info}>Senior HR Manager</Text>
              <View style={styles.divider}></View>
              <Text style={styles.subtitle}>Department</Text>
              <Text style={styles.info}>Talent & Culture</Text>
              <View style={styles.divider}></View>
              <Text style={styles.subtitle}>Business Unit</Text>
              <Text style={[styles.info, {paddingBottom: 0}]}>
                Corporate Support Center
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <RoundedButton
          onPress={() => {
            setOpenModel(true);
          }}
          title="Share Contact Card"
        />
        <TouchableOpacity onPress={() => onClose()}>
          <Text style={styles.closebtn}>Cancel</Text>
        </TouchableOpacity>
      </View>
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

export default QRBusinessCardModel;
