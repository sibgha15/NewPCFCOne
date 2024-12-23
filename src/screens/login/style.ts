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
    color: colors.white,
    textAlign: 'center',
    fontSize: fonts.fontSize.large,
    fontFamily: fonts.fontFamily.medium,
  },
  logo: {
    marginTop: hp(15),
    alignSelf: 'center',
  },
  button: {
    borderRadius: 60,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(6),
    backgroundColor: 'white',
    width: wp(94),
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.darkBlue,
    fontSize: fonts.fontSize.xl,
    fontFamily: fonts.fontFamily.medium,
  },
});
