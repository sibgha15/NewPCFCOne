import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, fonts} from '../../../../res/themes';

export const styles = StyleSheet.create({
  container: {
    height: hp(100),
  },
  mainContainer: {
    height: hp(91),
    backgroundColor: colors.background,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: hp(3),
    paddingHorizontal: wp(4),
    paddingBottom: hp(2),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  userAvatarWrapper: {
    borderWidth: 4,
    borderColor: colors.white,
    borderRadius: 3000,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  editIconWrapper: {
    position: 'absolute',
    right: -wp(1),
    bottom: -hp(0.5),
    backgroundColor: colors.primary,
    borderRadius: 80,
    width: 36,
    height: 36,
    borderWidth: 4,
    borderColor: colors.white,
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
  },
  textInput: {
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.normal,
    letterSpacing: 0.5,
    lineHeight: 22,
    color: colors.primaryBlack,
    height: 88,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.grey,
    padding: 12,
    paddingVertical: 10,
    borderRadius: 8,
  },
  divider: {
    height: 1,
    backgroundColor: colors.background,
    width: '100%',
    marginVertical: hp(1),
  },
});
