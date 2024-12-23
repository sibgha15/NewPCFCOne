import {Platform, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors, fonts} from '../../../res/themes';

export const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? hp(5) : hp(2),
    flex: 1,
    backgroundColor: colors.background,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  bannerImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    objectFit: 'cover',
    marginBottom: hp(3),
  },
  title: {
    color: colors.darkGray,
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.large,
    lineHeight: 24,
  },
  info: {
    color: colors.primaryBlack,
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.large,
    lineHeight: 24,
    paddingTop: hp(1),
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.background,
    marginVertical: hp(1),
  },
  footerContainer: {
    backgroundColor: colors.background,
    paddingHorizontal: wp(4),
    paddingBottom: hp(4),
  },
  detailBtn: {
    textAlign: 'center',
    color: colors.darkGray,
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.large,
    lineHeight: 24,
  },
});
