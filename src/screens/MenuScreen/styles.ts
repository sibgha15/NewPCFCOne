import {StyleSheet, Switch} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, fonts} from '../../../res/themes';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  flexView: {
    paddingTop: hp(3),
    paddingHorizontal: wp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userAvatarContainer: {
    flexDirection: 'row',
    gap: wp(3),
    alignItems: 'center',
  },

  infoContainer: {
    flexDirection: 'column',
  },

  name: {
    fontSize: fonts.fontSize.xl,
    color: colors.primaryBlack,
    fontFamily: fonts.fontFamily.bold,
  },

  designation: {
    fontSize: fonts.fontSize.medium,
    color: colors.primaryBlack,
  },

  scanQRContainer: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: colors.grayTransparent,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0000001A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 1,
  },

  mainContainer: {
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
  },

  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    flexDirection: 'column',
  },

  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardItemText: {
    color: colors.primaryBlack,
    fontSize: fonts.fontSize.large,
    fontFamily: fonts.fontFamily.primary,
    marginLeft: wp(4),
    letterSpacing: 0.4,
  },

  separator: {
    height: 1,
    width: '100%',
    backgroundColor: colors.background,
    marginVertical: hp(1),
  },
});
