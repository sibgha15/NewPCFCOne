import {Platform, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../res/themes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? hp(6) : 0,
  },
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
  tabContainer: {
    flexDirection: 'row',
    // alignItems: 'baseline',
    justifyContent: 'space-around',
  },
  tabBtn: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(0.5),
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTabBtn: {
    borderBottomColor: colors.primary,
  },
  tabText: {
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.medium,
    lineHeight: 22,
    letterSpacing: 0.1,
    color: colors.lightGrey,
  },
  activeTabText: {
    color: colors.primary,
  },
  flexBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBlockColor: colors.background,
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
  },
  iconWrapper: {
    backgroundColor: '#F83E3E1A',
    height: 44,
    width: 44,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: colors.primaryBlack,
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.large,
    lineHeight: 24,
  },
  date: {
    color: colors.darkGray,
    fontFamily: fonts.fontFamily.primary,
    fontSize: fonts.fontSize.medium,
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  statusWrapper: {
    backgroundColor: '#FFB35B1A',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 30,
  },
  statusText: {
    color: '#D78B33',
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.small,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: wp(4),
    paddingBottom: hp(4),
    backgroundColor: colors.white,
  },
  buttonGradient: {
    borderRadius: 60,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 7,
    flexDirection: 'row',
    gap: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  buttonText: {
    color: colors.white,
    fontSize: fonts.fontSize.xl,
    fontFamily: fonts.fontFamily.medium,
  },
  draftBtn: {
    textAlign: 'center',
    color: colors.darkGray,
    fontSize: fonts.fontSize.large,
    fontFamily: fonts.fontFamily.medium,
    lineHeight: 24,
  },
});
