import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, fonts} from '../../../../res/themes';

export const styles = StyleSheet.create({
  container: {
    paddingTop: hp(3),
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
    fontSize: 20,
    fontFamily: fonts.fontFamily.medium,
    color: colors.white,
  },

  designation: {
    fontSize: 16,
    fontFamily: fonts.fontFamily.primary,
    color: colors.white,
  },

  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: wp(2),
    width: wp(91),
    height: hp(5.5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
    paddingHorizontal: wp(2),
  },
  icon: {
    paddingHorizontal: wp(1),
  },
});
