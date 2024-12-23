import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors, fonts} from '../../../res/themes';

interface MediaCardProps {
  imageSource: any;
  title: string;
  date: string;
  onPress?: () => void;
}

const MediaCard: React.FC<MediaCardProps> = ({
  imageSource,
  title,
  date,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.card}>
      <Image style={Styles.cardImage} source={imageSource} />
      <View style={Styles.cardContent}>
        <Text style={Styles.cardTitle} ellipsizeMode="tail" numberOfLines={2}>
          {title}
        </Text>
        <Text style={Styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MediaCard;

const Styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    width: wp(44),
  },
  cardImage: {
    height: hp(18),
    width: '100%',
  },
  cardContent: {
    backgroundColor: colors.white,
    paddingHorizontal: wp(3),
    paddingVertical: hp(1.5),
  },
  cardTitle: {
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.medium,
    lineHeight: 22,
    letterSpacing: 0.1,
    color: colors.primaryBlack,
    paddingBottom: hp(0.5),
  },
  date: {
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.normal,
    lineHeight: 18,
    letterSpacing: 0.5,
    color: colors.darkGray,
  },
});
