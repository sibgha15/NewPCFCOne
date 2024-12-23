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
    fontSize: fonts.fontSize.medium,
    fontFamily: fonts.fontFamily.medium,
    color: colors.primaryBlack,
    letterSpacing: 0.1,
  },
  text: {
    flex: 1,
    fontSize: fonts.fontSize.medium,
    fontFamily: fonts.fontFamily.primary,
    letterSpacing: 0.5,
    lineHeight: 24,
    color: colors.primaryBlack,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: hp(2),
  },
  flexBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    gap: wp(6),
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(6),
  },
  darkDvider: {
    width: wp(100),
    height: 1,
    backgroundColor: colors.grey,
  },
  divider: {
    width: wp(100),
    height: 1,
    backgroundColor: colors.background,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(3),
    paddingBottom: hp(1),
  },
  inputBox: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: colors.background,
    height: 88,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.background,
    paddingHorizontal: wp(4),
    marginTop: hp(20),
  },
});
