import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, fonts} from '../../../res/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    flexDirection: 'column',
    gap: hp(2),
    paddingBottom: hp(12),
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(4),
  },
  flexBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: wp(4),
  },
  card: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 8,
  },
  textInput: {
    backgroundColor: colors.white,
    padding: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.grey,
    marginTop: hp(0.5),
  },
  lightText: {
    fontSize: fonts.fontSize.large,
    fontFamily: fonts.fontFamily.medium,
    color: colors.secondary,
  },
  darkText: {
    fontSize: fonts.fontSize.large,
    fontFamily: fonts.fontFamily.primary,
    color: colors.primaryBlack,
  },
  editBtnText: {
    fontSize: fonts.fontSize.xl,
    fontFamily: fonts.fontFamily.medium,
    color: colors.darkGray,
    textAlign: 'center',
    lineHeight: 26,
  },
});
