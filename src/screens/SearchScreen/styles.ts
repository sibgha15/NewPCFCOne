import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../res/themes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: hp(100),
  },
  searchBarContainer: {
    backgroundColor: colors.white,
    paddingBottom: hp(2),
    height: hp(10),
    justifyContent: 'center',
  },
  suggestionContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  title: {
    color: colors.darkGray,
    fontSize: fonts.fontSize.medium,
    lineHeight: 22,
    letterSpacing: 0.1,
    fontFamily: fonts.fontFamily.medium,
    paddingBottom: hp(1),
  },
  suggestionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
    paddingVertical: hp(1),
  },
  iconWrapper: {
    backgroundColor: '#883BA91A',
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  suggestionText: {
    color: colors.primaryBlack,
    fontSize: fonts.fontSize.large,
    fontFamily: fonts.fontFamily.primary,
    letterSpacing: 0.5,
  },
  separator: {
    height: 1,
    backgroundColor: colors.background,
    width: '100%',
    marginVertical: hp(0.5),
  },
});
