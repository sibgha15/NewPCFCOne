import {Platform, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../res/themes/index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: fonts.fontSize['2xl'],
    fontFamily: fonts.fontFamily.bold,
  },
  bottomSheet: {
    height: Platform.OS === 'android' ? hp(60) : hp(57),
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: wp(5),
  },
  loginText: {
    color: colors.black,
    fontSize: 28,
    fontFamily: fonts.fontFamily.medium,
    textAlign: 'center',
    marginTop: hp(5),
  },
  forgetButton: {
    color: colors.primary,
    textAlign: 'center',
    fontSize: fonts.fontSize.large,
    fontFamily: fonts.fontFamily.medium,
  },
  logo: {
    position: 'absolute',
    top: 76,
    left: 78,
  },
});
