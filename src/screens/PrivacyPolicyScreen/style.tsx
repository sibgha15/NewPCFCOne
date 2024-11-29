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
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: hp(3),
    paddingHorizontal: wp(4),
  },
  heading: {
    fontSize: fonts.fontSize.large,
    fontFamily: fonts.fontFamily.medium,
    lineHeight: 24,
    color: colors.primaryBlack,
    paddingBottom: hp(0.6),
  },
  text: {
    fontSize: fonts.fontSize.medium,
    fontFamily: fonts.fontFamily.primary,
    lineHeight: 22,
    letterSpacing: 0.5,
    color: colors.darkGray,
    paddingBottom: hp(2),
  },
  listContainer: {
    flexDirection: 'row',
    paddingLeft: wp(2),
    gap: wp(4),
    paddingRight: wp(6),
  },
  bullet: {
    width: hp(0.6),
    height: hp(0.6),
    borderRadius: 100,
    marginTop: hp(0.5),
    backgroundColor: colors.darkGray,
  },
});
