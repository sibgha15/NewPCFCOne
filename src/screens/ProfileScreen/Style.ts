import {Platform, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../res/themes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    paddingBottom: hp(2),
  },
  topHeader: {
    flexDirection: 'row',
    paddingBottom: hp(2),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    paddingTop: Platform.OS === 'ios' ? hp(7) : hp(1.5),
  },
  headerText: {
    color: colors.white,
    fontSize: fonts.fontSize['2xl'],
    textAlign: 'center',
    fontFamily: fonts.fontFamily.medium,
  },
  mainContainer: {
    backgroundColor: colors.background,
    flex: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -hp(3),
    paddingTop: hp(3),
    paddingHorizontal: wp(4),
    paddingBottom: hp(8),
  },
  userAvatarWrapper: {
    borderWidth: 4,
    borderColor: colors.white,
    borderRadius: 3000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: colors.white,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderRadius: 8,
    marginBottom: hp(2),
  },
  profileCard: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize['2xl'],
    color: colors.primaryBlack,
    lineHeight: 32,
    paddingTop: hp(1.5),
    paddingBottom: hp(0.5),
  },
  status: {
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.medium,
    letterSpacing: 0.5,
    lineHeight: 20,
    color: colors.darkGray,
    paddingBottom: hp(1.5),
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(4),
  },
  iconWrapper: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grayTransparent,
    borderRadius: 80,
  },
  title: {
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.large,
    color: colors.primaryBlack,
    lineHeight: 24,
    paddingBottom: hp(1),
  },
  subTitle: {
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.medium,
    letterSpacing: 0.5,
    lineHeight: 20,
    color: colors.darkGray,
  },
  info: {
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.medium,
    letterSpacing: 0.5,
    lineHeight: 22,
    color: colors.primaryBlack,
    paddingBottom: hp(1),
  },
});
