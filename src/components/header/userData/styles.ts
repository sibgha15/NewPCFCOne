import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, fonts} from '../../../../res/themes';

export const styles = StyleSheet.create({
  container: {
    paddingTop: hp(10),
    paddingHorizontal: hp(2),
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
    fontFamily: fonts.fontFamily.medium,
    color: colors.white,
  },

  designation: {
    fontSize: fonts.fontSize.medium,
    fontFamily: fonts.fontFamily.primary,
    color: colors.white,
  },

  scanQRContainer: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#0000001A',
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
});
