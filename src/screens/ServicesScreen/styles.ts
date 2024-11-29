import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../res/themes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: hp(5),
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  subHeaderText: {
    fontSize: fonts.fontSize.xl,
    lineHeight: 26,
    fontFamily: fonts.fontFamily.medium,
    color: colors.primaryBlack,
  },
  listContainer: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  list: {
    // backgroundColor: colors.white,
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
    fontFamily: fonts.fontFamily.medium,
  },

  designation: {
    fontSize: fonts.fontSize.normal,
    fontFamily: fonts.fontFamily.primary,
    color: colors.primaryBlack,
  },

  iconContainer: {
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

  statusContainer: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 30,
    backgroundColor: colors.lightOrange,
  },

  statusText: {
    color: colors.orange,
    fontSize: fonts.fontSize.small,
    fontFamily: fonts.fontFamily.medium,
    textTransform: 'uppercase',
  },
});
