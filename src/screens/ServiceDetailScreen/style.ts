import {Platform, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../res/themes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? hp(6) : 0,
  },
  mainContainer: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    backgroundColor: colors.white,
    paddingBottom: hp(40),
    flex: 1,
  },
  title: {
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.large,
    lineHeight: 24,
    color: colors.secondary,
    paddingBottom: hp(1),
  },
  infoText: {
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.large,
    lineHeight: 24,
    color: colors.primaryBlack,
  },
  name: {
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.large,
    color: colors.primaryBlack,
  },
  statusWrapper: {
    backgroundColor: '#FFB35B1A',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 30,
    alignSelf: 'flex-start',
  },
  statusText: {
    color: '#D78B33',
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.small,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: colors.background,
    marginVertical: hp(1),
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
  },
  avatarWrapper: {
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 80,
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepsIndicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(1.5),
  },
  activeIndicator: {
    width: wp(30),
    height: 4,
    borderRadius: 80,
    backgroundColor: colors.primary,
  },
  dottedIndicator: {
    width: wp(30),
    borderRadius: 80,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: colors.primary,
  },
  unactiveIndicator: {
    width: wp(30),
    height: 4,
    borderRadius: 80,
    backgroundColor: colors.grey,
  },
  flexBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepsText: {
    color: colors.primary,
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.medium,
    lineHeight: 22,
    letterSpacing: 0.1,
  },
  approvelText: {
    color: colors.darkGray,
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.medium,
    lineHeight: 22,
    letterSpacing: 0.1,
  },
  card: {
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 12,
    marginBottom: hp(2),
  },
  iconWrapper: {
    backgroundColor: '#F83E3E1A',
    height: 44,
    width: 44,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    color: colors.darkGray,
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.medium,
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  requestName: {
    color: colors.primaryBlack,
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.large,
    lineHeight: 24,
  },
  cardId: {
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.large,
    color: colors.primaryBlack,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.white,
    left: 0,
    right: 0,
    paddingHorizontal: wp(4),
    paddingBottom: hp(2),
  },
  rejectBtn: {
    textAlign: 'center',
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.large,
    lineHeight: 24,
    color: colors.darkGray,
  },
});