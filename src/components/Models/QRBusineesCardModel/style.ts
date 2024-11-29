import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, fonts} from '../../../../res/themes';

export const styles = StyleSheet.create({
  container: {
    height: hp(100),
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  mainContainer: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: hp(3),
    paddingHorizontal: wp(4),
    paddingBottom: hp(2),
    height: hp(90),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  QRCard: {
    backgroundColor: colors.white,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderRadius: 8,
    marginBottom: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: colors.white,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderRadius: 8,
    marginBottom: hp(25),
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.background,
    paddingVertical: hp(1),
    paddingBottom: hp(4),
    width: wp(100),
    paddingHorizontal: wp(4),
  },
  closebtn: {
    textAlign: 'center',
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.xl,
    lineHeight: 26,
    color: colors.darkGray,
  },
  flexBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.large,
    color: colors.primaryBlack,
  },
  dataContainer: {
    paddingTop: hp(1),
  },
  subtitle: {
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.medium,
    lineHeight: 22,
    letterSpacing: 0.5,
    color: colors.darkGray,
  },
  info: {
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.medium,
    lineHeight: 22,
    letterSpacing: 0.5,
    color: colors.primaryBlack,
  },
  divider: {
    height: 1,
    backgroundColor: colors.background,
    width: '100%',
    marginVertical: hp(1),
  },
});
