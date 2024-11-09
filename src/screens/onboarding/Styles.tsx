import {Platform, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../res/themes/index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  slide: {
    height: '100%',
    width: '100%',
    paddingTop: hp(8),
    paddingRight: wp(7),
  },
  introButton: {
    height: hp(3.2),
    width: wp(24),
    backgroundColor: colors.grey,
    borderRadius: 20,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introtext: {
    color: colors.secondary,
    fontSize: fonts.fontSize.normal,
    fontFamily: fonts.fontFamily.primary,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(5),
  },
  bottomContainer: {
    height: hp(50),
    width: wp(100),
    backgroundColor: colors.white,
    marginTop: hp(5),
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  headingText: {
    color: colors.black,
    fontSize: 28,
    fontFamily: fonts.fontFamily.medium,
    textAlign: 'center',
    marginTop: hp(3),
  },
  descriptionText: {
    color: colors.black,
    fontSize: 16,
    fontFamily: fonts.fontFamily.primary,
    textAlign: 'center',
    marginTop: hp(1.5),
    marginHorizontal: wp(8),
    lineHeight: 22,
    height: hp(13),
  },
  bottomButton: {
    height: hp(5.5),
    width: wp(80),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(2),
  },
  bottomButtonwithoutBorder: {
    height: hp(5.5),
    width: wp(80),
    alignSelf: 'center',
    borderColor: colors.primary,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(2),
  },
  buttontext: {
    color: colors.primary,
    fontSize: 20,
    fontFamily: fonts.fontFamily.medium,
    textAlign: 'center',
  },
  paginationContainer: {
    bottom: Platform.OS == 'android' ? 0 : hp(5),
    backgroundColor: 'transparent',
    position: 'absolute',
    alignSelf: 'center',
  },
  dotStyle: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: colors.dotGrey,
    marginHorizontal: -20,
  },
  inactiveDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.grey,
  },
});
