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
    paddingBottom: hp(1),
    paddingHorizontal: wp(4),
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: colors.white,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize['2xl'],
    lineHeight: 32,
    color: colors.primaryBlack,
    paddingTop: hp(2),
  },
  status: {
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.large,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: colors.primaryBlack,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoID: {
    color: colors.primary,
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.large,
    lineHeight: 24,
    letterSpacing: 0.5,
    marginTop: 12,
  },
  infoText: {
    color: colors.darkGray,
    fontSize: fonts.fontSize.medium,
    fontFamily: fonts.fontFamily.primary,
    lineHeight: 20,
    letterSpacing: 0.5,
    marginTop: 6,
  },
  wishlistButton: {
    backgroundColor: colors.black,
    borderRadius: 60,
    flexDirection: 'row',
    gap: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
});
