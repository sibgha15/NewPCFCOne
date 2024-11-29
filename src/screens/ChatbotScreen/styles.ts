import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../res/themes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: hp(4),
  },
  headerText: {
    fontSize: fonts.fontSize['2xl'],
    fontFamily: fonts.fontFamily.medium,
    color: colors.white,
  },
  mainContainer: {
    backgroundColor: colors.background,
    flex: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -hp(3),
    paddingTop: hp(3),
  },
  welcomeContainer: {
    marginHorizontal: wp(4),
    paddingHorizontal: wp(4),
    paddingVertical: hp(3),
    paddingBottom: hp(1),
    backgroundColor: colors.white,
    borderRadius: 8,
  },
  welcomeTitle: {
    color: colors.primaryBlack,
    fontSize: fonts.fontSize['2xl'],
    fontFamily: fonts.fontFamily.medium,
    textAlign: 'center',
    lineHeight: 32,
  },
  welcomeDescription: {
    color: colors.secondary,
    textAlign: 'center',
    fontSize: fonts.fontSize.large,
    fontFamily: fonts.fontFamily.primary,
    lineHeight: 24,
    letterSpacing: 0.5,
    paddingVertical: hp(1),
  },
  suggestedTextContainer: {
    flexDirection: 'row',
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(2),
    backgroundColor: colors.white,
    alignItems: 'center',
    gap: 10,
    marginTop: -hp(10),
    zIndex: 20,
    borderBottomColor: colors.background,
    borderBottomWidth: 1,
    // display: 'none',
  },

  suggestedTab: {
    backgroundColor: colors.grayTransparent,
    borderRadius: 50,
  },
  suggestedtabText: {
    color: colors.primary,
    fontSize: fonts.fontSize.medium,
    fontFamily: fonts.fontFamily.primary,
    letterSpacing: 0.5,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  inputToolbar: {
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 4,
  },
});
