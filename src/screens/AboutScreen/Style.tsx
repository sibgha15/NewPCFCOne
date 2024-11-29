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
    gap: hp(2),
  },
  text: {
    fontSize: fonts.fontSize.medium,
    fontFamily: fonts.fontFamily.primary,
    lineHeight: 22,
    letterSpacing: 0.5,
    color: colors.darkGray,
  },
});
