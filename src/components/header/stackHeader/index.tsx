import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ArrowIconLeft} from '../../../../res/assets/images/svgs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../../../../res/themes';

interface StackHeaderProps {
  title: string;
  backgroundColor?: string;
}

const StackHeader = ({title, backgroundColor}: StackHeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.header, {backgroundColor: backgroundColor}]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowIconLeft width={24} height={24} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
      <View style={{width: 20}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingVertical: hp(1.5),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
  },
  headerText: {
    fontSize: fonts.fontSize['2xl'],
    fontFamily: fonts.fontFamily.medium,
  },
});

export default StackHeader;
