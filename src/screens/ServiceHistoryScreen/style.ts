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
    paddingVertical: hp(2),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
  },
  headerText: {
    fontSize: fonts.fontSize['2xl'],
    fontFamily: fonts.fontFamily.medium,
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
    backgroundColor: colors.background,
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
    backgroundColor: '#41C1791A',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 30,
  },
  statusText: {
    color: '#279457',
    fontFamily: fonts.fontFamily.medium,
    fontSize: fonts.fontSize.small,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
});
