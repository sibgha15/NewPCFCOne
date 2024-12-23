import {Platform, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../res/themes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'ios' ? hp(5) : hp(0),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: wp(4),
    paddingVertical: hp(3),
  },
  bannerImage: {
    borderRadius: 12,
    width: '100%',
    height: hp(30),
    marginBottom: hp(2),
  },
  date: {
    color: colors.darkGray,
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.normal,
    lineHeight: 18,
    letterSpacing: 0.5,
  },
  title: {
    color: colors.primaryBlack,
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.large,
    lineHeight: 24,
    paddingVertical: hp(0.5),
  },
  description: {
    color: colors.darkGray,
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.medium,
    lineHeight: 22,
    letterSpacing: 0.5,
    paddingBottom: hp(2),
  },
});
